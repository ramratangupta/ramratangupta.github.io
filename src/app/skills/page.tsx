import { skills } from "@/components/Skills";

export default function SkillsPage() {
  return (
    <div className="container py-12">
      <h1 className="font-bold mb-8 text-center">Skills</h1>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="d-flex">
          <div className="text-2xl d-flex align-items-center" style={{paddingRight:"20px"}}><b>{category}</b></div>
          <div className="d-flex flex-wrap gap-3">
            {skillList.map((skill) => skill.icon ? (
              <div key={skill.name} className="text-center">
                <div className="fs-1 mb-2">{skill.icon}</div>
              </div>
            ):null)}
          </div>
        </div>
      ))}
    </div>
  );
}