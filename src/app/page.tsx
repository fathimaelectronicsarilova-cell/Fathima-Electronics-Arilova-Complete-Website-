import Hero from "@/components/home/Hero";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import CommonProblems from "@/components/home/CommonProblems";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RepairProcess from "@/components/home/RepairProcess";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandsMarquee />
      <ServicesGrid />
      <CommonProblems />
      <WhyChooseUs />
      <RepairProcess />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
