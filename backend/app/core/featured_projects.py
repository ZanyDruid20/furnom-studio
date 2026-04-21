from typing import Dict, List, TypedDict


class FeaturedProjectConfig(TypedDict, total=False):
    techStack: List[str]
    description: str


FEATURED_PROJECTS: Dict[str, FeaturedProjectConfig] = {
    "EventApp": {
        "techStack": ["C++"],
    },
    "Studivio": {
        "techStack": ["Python", "JavaScript", "Flask", "MongoDB", "React"],
    },
    "Chip8Emulator": {
        "techStack": ["C", "C++"],
    },
    "URLShortener": {
        "techStack": ["Golang", "Redis", "MySQL", "AWS EC2", "AWS RDS", "Gin Web Framework"],
    },
    "accessibility-map-team3": {
        "techStack": ["FastAPI", "Python", "MySQL", "Docker", "JavaScript", "Railway"],
    },
    "GEPO": {
        "techStack": [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Next.js",
            "GraphQL",
            "Passport.js",
            "Tailwind CSS",
            "GCP (Backend hosting)",
            "Vercel (frontend hosting)",
            "GitHub Actions (CI/CD)",
            "Docker",
        ],
    },
    "expense-api": {
        "techStack": ["Golang", "PostgreSQL", "Docker", "Terraform", "AWS"],
    },
}


FEATURED_PROJECT_ORDER = list(FEATURED_PROJECTS.keys())