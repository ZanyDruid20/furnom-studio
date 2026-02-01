// src/components/skills/SkillsSection.tsx


const skills = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "JavaScript", "Go", "SQL", "C#", "TypeScript"]
  },
  {
    category: "Frameworks",
    items: ["Flask", "React", "Tailwind", "Gin", "FastAPI", "Node", "Express", "GraphQL", "NextJS"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "Redis", "MySQL"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "AWS", "Jira", "Jest", "Unittest", "Postman", "Swagger", "Railway", "GCP", "Vercel", "GitHub Actions"]
  }
];


export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-white" aria-label="Technical skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-gray-900 font-bold text-2xl" role="heading" aria-level={2}>Skills & Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1 bg-gray-100 text-gray-800 rounded-lg text-base font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
