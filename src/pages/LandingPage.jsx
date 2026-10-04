import Hero from "../components/Sections/Hero";
import Stats from "../components/Sections/Stats";
import About from "../components/Sections/About";
import Testimonials from "../components/Sections/Testimonials";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Testimonials />
      {/* Contact + Footer coming later */}
    </>
  );
}