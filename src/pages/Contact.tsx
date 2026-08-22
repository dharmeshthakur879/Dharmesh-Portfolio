import ContactComponent from "../components/Contact";
import FAQ from "../components/FAQ";

export default function Contact() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Secure Campaign Inquiry Form */}
      <ContactComponent />

      {/* Accordion FAQ Panel */}
      <FAQ />
    </div>
  );
}
