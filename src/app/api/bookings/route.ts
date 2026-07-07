import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import { OWNER_EMAIL } from '@/lib/constants';

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, tvBrand, address, issueDescription } = data;

    // 1. Insert into Supabase
    // We try to insert the email as well if the column exists, otherwise we ignore errors 
    // related to schema mismatch for the email column so the core functionality doesn't break
    // if the user hasn't added the email column yet.
    try {
      const { error: dbError } = await supabase
        .from('bookings')
        .insert([
          { 
            name, 
            phone, 
            tv_brand: tvBrand,
            address,
            issue_description: issueDescription
            // omitting email here to prevent schema errors if the column doesn't exist yet
            // user can add it later if they want to store it in DB.
          }
        ]);
        
      if (dbError) {
        console.error("Supabase insert error:", dbError);
      }
    } catch (e) {
      console.error("Supabase exception:", e);
    }

    // 2. Send Email to the Owner/Technician
    await resend.emails.send({
      from: 'Fathima Electronics <onboarding@resend.dev>', // resend.dev allows testing without domain verification
      to: OWNER_EMAIL,
      subject: `🚨 New Repair Booking: ${tvBrand} TV - ${name}`,
      html: `
        <h2>New TV Repair Request Received!</h2>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>TV Brand:</strong> ${tvBrand}</p>
        <p><strong>Address/Locality:</strong> ${address}</p>
        <p><strong>Issue Description:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #D4AF37;">
          ${issueDescription}
        </blockquote>
        <br/>
        <p>Please contact the customer ASAP at ${phone} to confirm the appointment.</p>
      `
    });

    // 3. Send Confirmation Email to the Customer
    if (email) {
      await resend.emails.send({
        from: 'Fathima Electronics <onboarding@resend.dev>',
        to: email,
        subject: `Booking Confirmed: Fathima Electronics TV Repair`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #D4AF37;">Thank you for choosing Fathima Electronics!</h2>
            <p>Hi ${name},</p>
            <p>We have successfully received your repair booking for your <strong>${tvBrand} TV</strong>.</p>
            <p>Our expert technicians are reviewing your issue description:</p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc; font-style: italic;">
              "${issueDescription}"
            </blockquote>
            <p><strong>What happens next?</strong><br/>
            One of our technicians will call you shortly at <strong>${phone}</strong> to provide an estimate and confirm a time to visit your location at ${address}.</p>
            <br/>
            <p>Need immediate assistance? You can always reach us directly via WhatsApp or Phone.</p>
            <p>Best regards,<br/><strong>Fathima Electronics Team</strong></p>
          </div>
        `
      });
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
