import { skills } from "@/constants";
import Skills from "@/components/Skills";

export default function SkillsPage() {
  return (
    <div className="container py-12">
      <h1 className="font-bold mb-8 text-center">Skills</h1>
      <Skills />
    </div>
  );
}
