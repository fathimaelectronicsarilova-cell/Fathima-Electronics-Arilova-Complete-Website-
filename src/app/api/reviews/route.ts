import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
import { OWNER_EMAIL } from '@/lib/constants';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');
  
  try {
    const body = await request.json();
    const { name, rating, comment } = body;

    // 1. Insert into Supabase
    const { data: reviewData, error: dbError } = await supabase
      .from('reviews')
      .insert([{ name, rating, comment }])
      .select()
      .single();

    if (dbError) {
      console.error('Database Error:', dbError);
      return NextResponse.json({ error: 'Failed to save review to database' }, { status: 500 });
    }

    // 2. Send Email via Resend
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Default testing address for Resend
        to: OWNER_EMAIL,
        subject: `New ${rating}-Star Review from ${name}!`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #D4AF37;">New Customer Review</h2>
            <p><strong>Customer Name:</strong> ${name}</p>
            <p><strong>Rating:</strong> ${rating} / 5 Stars</p>
            <p><strong>Comment:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #D4AF37;">
              ${comment}
            </blockquote>
            <br/>
            <p>This review is now live on your website!</p>
          </div>
        `
      });

      if (emailError) {
        console.error('Email Send Error:', emailError);
        // We don't fail the whole request if email fails, as the review is already saved
      }
    } catch (e) {
      console.error('Email Exception:', e);
    }

    return NextResponse.json({ success: true, review: reviewData });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
