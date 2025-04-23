import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  GSTBenefit,
  FAQSections,
  PricingSection,
  ContactSection,
  HoverFeatureDisplay
} from "./index";

const LandingPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <HeroSection />
      <FeaturesSection />
      <HoverFeatureDisplay/>
      <TestimonialsSection />
      <GSTBenefit />
      <FAQSections />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
