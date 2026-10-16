// src/components/skills/SkillsSection.tsx


const skills = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "JavaScript", "Go", "SQL", "TypeScript"]
  },
  {
    category: "Frameworks",
    items: ["Flask", "FastAPI", "Node.js", "Express.js", "React.js", "Next.js", "GraphQL"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "Redis", "MySQL", "PostgreSQL"]
  },
  {
    category: "Cloud/DevOps",
    items: ["AWS", "GCP", "Docker", "GitHub Actions", "Railway", "Vercel"]
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "Jest", "Postman", "Terraform"]
  }
];


export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20" aria-label="Technical skills">
      <div className="mx-auto max-w-6xl rounded-4xl border border-line bg-panel p-6 shadow-sm backdrop-blur sm:p-10">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground" role="heading" aria-level={2}>Skills & Tech Stack</h2>
          <p className="mt-3 text-muted-on-warm">
            The tools and languages I reach for most when building reliable user-facing products and backend services.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map(({ category, items }) => (
            <div key={category} className="rounded-2xl border border-line bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-panel px-4 py-1 text-base font-medium text-foreground shadow-sm ring-1 ring-line"
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
