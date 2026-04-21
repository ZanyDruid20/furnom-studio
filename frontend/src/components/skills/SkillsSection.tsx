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
      <div className="mx-auto max-w-6xl rounded-4xl border border-white/60 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:p-10">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-950" role="heading" aria-level={2}>Skills & Tech Stack</h2>
          <p className="mt-3 text-slate-600">
            The tools and languages I reach for most when building reliable user-facing products and backend services.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map(({ category, items }) => (
            <div key={category} className="rounded-2xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-slate-950">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-1 text-base font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
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
