export const categories = ['All Projects', 'AI / Machine Learning', 'Backend Engineering', 'Distributed Systems / Infrastructure', 'Full-Stack Applications', 'Systems Programming'] as const;
export type Category = typeof categories[number];

export interface Project {
    slug: string;
    name: string;
    category: string;
    filters: Category[];
    description: string;
    stack: string[];
    achievements: [string, string?];
    achievementNote?: string;
    /** Repository name verified against the existing project sources. */
    repo?: string;
    /** Add only after verifying an actual live application URL. */
    liveDemoUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        "slug": "distributed-rag-inference",
        "name": "Distributed AI Inference System",
        "category": "AI Infrastructure / Distributed Systems",
        "filters": [
            "AI / Machine Learning",
            "Backend Engineering",
            "Distributed Systems / Infrastructure"
        ],
        "description": "Independent retrieval, orchestration, and inference services. Grounded answers backed by GPU inference.",
        "stack": [
            "Python",
            "FastAPI",
            "Docker",
            "Kubernetes",
            "GCP",
            "vLLM",
            "NVIDIA CUDA"
        ],
        "achievements": [
            "Built three independently deployable FastAPI services and 154 automated tests.",
            "Served Qwen2.5-1.5B-Instruct on an NVIDIA A40 at 2,007 output tokens/sec and 20.31 requests/sec at concurrency 20."
        ],
        "achievementNote": "Direct vLLM benchmark; not end-to-end RAG throughput.",
        "repo": "distributed-rag-inference",
        "featured": true
    },
    {
        "slug": "signal-retention",
        "name": "SignalRetention",
        "category": "AI Applications / Full-Stack Engineering",
        "filters": [
            "AI / Machine Learning",
            "Full-Stack Applications",
            "Backend Engineering"
        ],
        "description": "Customer retention intelligence with churn prediction, explainable results, and efficient data ingestion.",
        "stack": [
            "Next.js",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "XGBoost",
            "SHAP",
            "Google Cloud Storage",
            "Clerk"
        ],
        "achievements": [
            "Improved slow dataset uploads with bulk processing and set-based database queries.",
            "Processed 7,043 customer records in 5.2 seconds, down from 134 seconds (author-reported)."
        ],
        "achievementNote": "Author-reported in portfolio brief; benchmark artifacts pending confirmation.",
        "repo": "SignalRetention",
        "featured": true
    },
    {
        "slug": "expense-api",
        "name": "EXPENSE-API",
        "category": "Backend Engineering / Cloud Infrastructure",
        "filters": [
            "Backend Engineering",
            "Distributed Systems / Infrastructure"
        ],
        "description": "A layered Go API for shared expenses, with PostgreSQL, gateway rate limiting, and infrastructure as code.",
        "stack": [
            "Go",
            "Python",
            "PostgreSQL",
            "Kong",
            "AWS",
            "Terraform",
            "Docker"
        ],
        "achievements": [
            "Developed Python load tests against 100,000 records (author-reported).",
            "Integrated Kong rate limiting and automated AWS infrastructure with Terraform."
        ],
        "achievementNote": "Load-test volume supplied by the author; benchmark artifacts pending confirmation.",
        "repo": "expense-api",
        "featured": true
    },
    {
        "slug": "rl-cluster-scheduler",
        "name": "RL Cluster Scheduler",
        "category": "Machine Learning / Infrastructure Optimization",
        "filters": [
            "AI / Machine Learning",
            "Distributed Systems / Infrastructure"
        ],
        "description": "A PPO scheduling agent evaluated against FIFO, Round Robin, and resource-aware cluster schedulers.",
        "stack": [
            "Python",
            "Gymnasium",
            "Stable-Baselines3",
            "PPO"
        ],
        "achievements": [
            "Built a custom Gymnasium environment and trained a PPO agent against heuristic baselines.",
            "Reduced simulated infrastructure cost by 4.4% on 30-job workloads (author-reported), with lower throughput."
        ],
        "achievementNote": "Author-reported comparison on 30-job workloads; lower throughput is a documented trade-off.",
        "repo": "RL-cluster-scheduler",
        "featured": true
    },
    {
        "slug": "gepo",
        "name": "GEPO",
        "category": "Full-Stack / Backend Engineering",
        "filters": [
            "Full-Stack Applications",
            "Backend Engineering"
        ],
        "description": "GitHub activity transformed into repository, commit, and language insights with Redis-backed caching.",
        "stack": [
            "Node.js",
            "Next.js",
            "TypeScript",
            "Redis",
            "MongoDB",
            "Docker",
            "GitHub Actions"
        ],
        "achievements": [
            "Developed 68 Jest tests covering middleware, services, routes, and GraphQL resolvers.",
            "Used Redis caching to reduce repeated GitHub API calls; 95% cache hit rate is author-reported."
        ],
        "achievementNote": "Cache hit rate supplied by the author; README confirms Redis caching and 68 passing tests.",
        "repo": "GEPO"
    },
    {
        "slug": "studivio",
        "name": "Studivio",
        "category": "AI Applications / Full-Stack Engineering",
        "filters": [
            "AI / Machine Learning",
            "Full-Stack Applications"
        ],
        "description": "An AI study assistant that turns documents and audio into organized, searchable study notes.",
        "stack": [
            "Python",
            "Flask",
            "React",
            "MongoDB",
            "OpenAI API",
            "AssemblyAI"
        ],
        "achievements": [
            "Built AI document summaries and audio transcription with OpenAI and AssemblyAI.",
            "Supported PDFs up to 60 pages and audio up to one hour (author-reported prototype limits)."
        ],
        "achievementNote": "Document and audio limits supplied by the author; repository describes an evolving prototype.",
        "repo": "Studivio"
    },
    {
        "slug": "accessibility-map",
        "name": "Accessibility Map",
        "category": "Full-Stack Engineering / Mapping",
        "filters": [
            "Full-Stack Applications",
            "Backend Engineering"
        ],
        "description": "Campus accessibility navigation with persistent route data and a backend built as part of a team.",
        "stack": [
            "Python",
            "FastAPI",
            "MySQL",
            "JavaScript",
            "Railway"
        ],
        "achievements": [
            "Built authentication, routing constraints, and schema for 300+ accessibility nodes across 17+ buildings as one of two backend engineers.",
            "Independently deployed and stabilized the backend on Railway; testing recorded 614+ API calls with latency below 200 ms."
        ],
        "repo": "accessibility-map-team3"
    },
    {
        "slug": "chip-8",
        "name": "CHIP-8 Emulator",
        "category": "Systems Programming",
        "filters": [
            "Systems Programming"
        ],
        "description": "A virtual machine in C, from opcode decoding and registers to keyboard input and SDL2 graphics.",
        "stack": [
            "C",
            "SDL2"
        ],
        "achievements": [
            "Implemented instruction decoding, the fetch-decode-execute cycle, memory, and registers in C.",
            "Rendered a 64 x 32 display with SDL2 and supported ROM execution, keyboard input, and timers."
        ],
        "repo": "Chip8Emulator"
    },
    {
        "slug": "portfolio",
        "name": "Personal Developer Portfolio",
        "category": "Full-Stack Engineering",
        "filters": [
            "Full-Stack Applications",
            "Backend Engineering"
        ],
        "description": "A full-stack developer portfolio with searchable project cards and GitHub-backed services.",
        "stack": [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI",
            "Supabase",
            "GitHub API"
        ],
        "achievements": [
            "Built a typed nine-project catalog with combined search and category filtering.",
            "Preserved GitHub API integration, FastAPI services, and Supabase synchronization."
        ],
        "repo": "furnom-studio"
    }
];

export const githubUrl = (project: Project) => project.repo ? `https://github.com/ZanyDruid20/${project.repo}` : undefined;

/** Apply category and text constraints together; preserve the curated catalog order. */
export function filterProjects(query: string, category: Category): Project[] {
    const needle = query.trim().toLowerCase();
    return projects.filter(project => (category === 'All Projects' || project.filters.includes(category)) &&
        `${project.name} ${project.description} ${project.category} ${project.stack.join(' ')}`.toLowerCase().includes(needle));
}
