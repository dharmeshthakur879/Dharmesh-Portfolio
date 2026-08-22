import SkillsComponent from "../components/Skills";
import Tools from "../components/Tools";
import Certifications from "../components/Certifications";

export default function Skills() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Responsive Skills Tabs */}
      <SkillsComponent />

      {/* Symmetric Tool Stack */}
      <Tools />

      {/* Timeline Credentials */}
      <Certifications />
    </div>
  );
}
