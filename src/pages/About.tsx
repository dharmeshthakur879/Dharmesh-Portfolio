import AboutComponent from "../components/About";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Resume from "../components/Resume";

export default function About() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Core Narrative */}
      <AboutComponent />

      {/* Scholastic Credentials */}
      <Education />

      {/* Verified Government & ISO Certificates */}
      <Certificates />

      {/* Resume Download Section */}
      <Resume />
    </div>
  );
}
