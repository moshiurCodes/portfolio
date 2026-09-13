import type { ProjectItem, SkillCategory, JourneyMilestone, ServiceItem, EducationItem, CertificateItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Md Moshiur Rahman',
  role: 'AI Automation Enthusiast',
  rotatingRoles: [
    'AI Automation Enthusiast',
    'Workflow Automation Developer',
    'AI Agent Builder',
  ],
  education: 'B.Sc. in Computer Science & Engineering, Dhaka International University',
  location: 'Dhaka, Bangladesh',
  bio: 'A Computer Science & Engineering undergraduate at Dhaka International University passionate about building autonomous workflows, intelligent agent pipelines, and modern backend integrations. Focused on transforming complex manual processes into streamlined, automated systems using n8n, AI APIs, and robust software architectures.',
  github: 'moshiurcodes',
  githubUrl: 'https://github.com/moshiurcodes',
  linkedinUrl: 'https://www.linkedin.com/in/md-moshiur-rahman-473387393/',
  facebookUrl: 'https://www.facebook.com/md.moshiur.rahman.555605',
  email: 'mdmoshiurr333@gmail.com',
  avatarUrl: '/profile.jpg',
  status: 'Available for opportunities',
  eyebrow: 'AI AUTOMATION • WORKFLOW ENGINEERING',
  valueStatement: 'Building intelligent workflows and automation systems for the modern web.',
  supportingText: 'A CSE student focused on AI automation, workflow optimization, n8n, AI agents, and modern software development.',
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'lead-gen-crm',
    number: '01',
    title: 'Intelligent Lead Generation & CRM Automation System',
    category: 'AI Automation & CRM',
    description: 'AI-powered workflow for capturing incoming leads, intelligently classifying customer intent, extracting key attributes, updating Airtable CRM records in real-time, drafting personalized email responses, and dispatching instant alert notifications.',
    stack: ['n8n', 'AI', 'Airtable', 'Gmail', 'Slack'],
    githubUrl: 'https://github.com/moshiurcodes/lead-gen-crm-automation',
    liveUrl: 'https://github.com/moshiurcodes',
    workflowType: 'crm',
    highlights: [
      'Webhook ingestion & automated data normalization',
      'AI prompt orchestration for personalized email generation',
      'Instant bi-directional Slack notification & CRM sync'
    ]
  },
  {
    id: 'multi-agent-research',
    number: '02',
    title: 'Multi-Agent Research & Content Generation System',
    category: 'Autonomous AI Agents',
    description: 'Autonomous multi-agent pipeline designed to perform multi-stage research on complex topics, synthesize unstructured data from web sources, generate structured briefings, and trigger automated downstream publishing workflows.',
    stack: ['n8n', 'AI Agents', 'LLM APIs'],
    githubUrl: 'https://github.com/moshiurcodes/multi-agent-research-system',
    liveUrl: 'https://github.com/moshiurcodes',
    workflowType: 'multi-agent',
    highlights: [
      'Role-based agent orchestration (Researcher, Editor, Formatter)',
      'Recursive query decomposition and fact synthesis',
      'Structured JSON & Markdown export automation'
    ]
  },
  {
    id: 'career-roadmap-ai',
    number: '03',
    title: 'AI-Powered Career Roadmap Generator',
    category: 'AI Application & Planning',
    description: 'Intelligent career mentorship tool that analyzes user technical background, timeline constraints, and aspirational roles to dynamically generate comprehensive, milestone-driven learning roadmaps and skill assessments.',
    stack: ['AI', 'n8n', 'Google Gemini / OpenAI API'],
    githubUrl: 'https://github.com/moshiurcodes/ai-career-roadmap-generator',
    liveUrl: 'https://github.com/moshiurcodes',
    workflowType: 'roadmap',
    highlights: [
      'Dynamic curriculum tree structuring with prerequisite mapping',
      'LLM reasoning pipeline tailored for tech industry career paths',
      'Interactive milestone tracking output'
    ]
  },
  {
    id: 'campusmart',
    number: '04',
    title: 'CampusMart',
    category: 'Full-Stack Web Application',
    description: 'Student-focused peer-to-peer marketplace engineered specifically for university campuses to facilitate buying, selling, and exchanging used textbooks, electronics, scientific calculators, stationery, and dorm essentials.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/moshiurcodes/campusmart',
    liveUrl: 'https://github.com/moshiurcodes',
    workflowType: 'marketplace',
    highlights: [
      'Categorized student listing management with image uploads',
      'Relational database schema for university buyer-seller exchanges',
      'Secure session-based authentication & responsive portal'
    ]
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Automation',
    iconName: 'Bot',
    skills: [
      { name: 'n8n', description: 'Advanced node workflow design, webhooks, custom logic, and error handlers', featured: true },
      { name: 'Zapier', description: 'Cross-app triggers, automated data routing, and multi-step Zaps', featured: true },
      { name: 'AI Agents', description: 'Autonomous agent design, multi-agent coordination, and tool calling', featured: true },
      { name: 'OpenAI API', description: 'GPT models, function calling, prompt engineering, and structured outputs', featured: true },
      { name: 'Google Gemini API', description: 'Multimodal processing, context caching, and high-throughput inference', featured: true },
      { name: 'Workflow Automation', description: 'End-to-end process mapping, error alerting, and orchestration', featured: true },
      { name: 'RAG', description: 'Retrieval-Augmented Generation, knowledge base indexing, and vector search' }
    ]
  },
  {
    category: 'Development',
    iconName: 'Code2',
    skills: [
      { name: 'Python', description: 'Automation scripts, backend logic, API consumption, data manipulation', featured: true },
      { name: 'JavaScript', description: 'Modern ES6+, DOM manipulation, asynchronous workflows, Node.js basics', featured: true },
      { name: 'PHP', description: 'Server-side application logic, REST endpoints, backend data processing' },
      { name: 'Java', description: 'Object-oriented programming, algorithmic problem solving, core fundamentals' },
      { name: 'C', description: 'Foundational memory management, data structures, algorithm design' },
      { name: 'HTML', description: 'Semantic markup, accessible structure, SEO fundamentals' },
      { name: 'CSS', description: 'Responsive layouts, modern Flexbox & Grid, CSS variables, micro-animations' }
    ]
  },
  {
    category: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', description: 'Relational database schema design, normalized tables, complex queries', featured: true },
      { name: 'Airtable', description: 'Relational low-code database architecture, views, automations, API sync', featured: true },
      { name: 'Google Sheets', description: 'Dynamic spreadsheet data pipes, formula modeling, and API integrations' }
    ]
  },
  {
    category: 'Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', description: 'Version control, branch management, clean commit workflows' },
      { name: 'GitHub', description: 'Remote repositories, collaborative development, release tracking' },
      { name: 'VS Code', description: 'Modern development environment, extensions, integrated terminal' },
      { name: 'XAMPP', description: 'Local Apache & MySQL server environment for full-stack prototyping' }
    ]
  }
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    year: '2022',
    title: 'Started CSE Degree',
    description: 'Enrolled in Computer Science & Engineering at Dhaka International University. Began mastering foundational programming, computer architecture, discrete mathematics, and problem solving.',
    tag: 'Foundation'
  },
  {
    year: '2024',
    title: 'Exploration of Software Development',
    description: 'Deepened practical skills in procedural and object-oriented programming with C, Java, and Python. Started building algorithmic utilities and software components.',
    tag: 'Development'
  },
  {
    year: '2025',
    title: 'Full-Stack Web & Databases',
    description: 'Specialized in web technologies, backend server architectures, relational database engineering with MySQL, and building user-centric web applications like CampusMart.',
    tag: 'Web & Databases'
  },
  {
    year: '2026',
    title: 'Pivoted Strongly to AI Automation & Agents',
    description: 'Shifted core focus toward workflow automation engineering, mastering n8n visual pipelines, OpenAI and Gemini APIs, autonomous AI agents, and CRM integrations.',
    tag: 'AI Automation'
  },
  {
    year: 'Present',
    title: 'Building Production Automation Systems',
    description: 'Actively designing and shipping real-world workflow automation pipelines, experimenting with multi-agent systems, and expanding knowledge of cutting-edge AI technologies.',
    tag: 'Active Focus'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: 'AI Automation',
    explanation: 'Integrating state-of-the-art LLMs into business processes to handle unstructured data, classification, and generation.',
    icon: 'Sparkles'
  },
  {
    id: 2,
    title: 'Workflow Automation',
    explanation: 'Designing deterministic, error-tolerant automation pipelines that eliminate manual repetitive tasks across web tools.',
    icon: 'Workflow'
  },
  {
    id: 3,
    title: 'n8n Automation',
    explanation: 'Crafting modular, scalable n8n workflows with custom webhook triggers, conditional logic, and error handlers.',
    icon: 'Cpu'
  },
  {
    id: 4,
    title: 'AI Agent Development',
    explanation: 'Building autonomous agent pipelines capable of multi-step research, reasoning, decision making, and tool calling.',
    icon: 'Bot'
  },
  {
    id: 5,
    title: 'API Integration',
    explanation: 'Connecting heterogeneous third-party REST APIs, webhooks, and SaaS services into unified automated pipelines.',
    icon: 'Network'
  },
  {
    id: 6,
    title: 'Backend Development',
    explanation: 'Developing clean, efficient server-side scripts, endpoints, and data processing routines in Python, PHP, and JS.',
    icon: 'Server'
  },
  {
    id: 7,
    title: 'Database Integration',
    explanation: 'Architecting synchronized data flows across MySQL databases, Airtable CRM bases, and Google Sheets.',
    icon: 'Database'
  },
  {
    id: 8,
    title: 'Business Process Automation',
    explanation: 'Analyzing operational bottlenecks and automating lead pipelines, customer alerts, and content pipelines.',
    icon: 'Zap'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Dhaka International University',
    degree: 'B.Sc. in Computer Science & Engineering',
    status: 'Currently studying',
    description: 'Studying core computer science curriculum covering algorithms, data structures, software engineering, database management systems, and computing fundamentals in Dhaka, Bangladesh.'
  },
  {
    institution: 'English Therapy Foundation',
    degree: 'English Language Course',
    status: 'Completed',
    description: 'Intensive course focused on professional communication, speaking clarity, vocabulary development, and technical presentation skills.'
  }
];

export const CERTIFICATIONS_DATA: CertificateItem[] = [
  {
    title: 'AI Automation Course',
    category: 'AI & Workflow Engineering',
    focus: 'Practical workflow design, n8n orchestration, API integration, and AI tool calling.'
  },
  {
    title: 'English Language Course',
    category: 'Professional Communication',
    focus: 'Professional verbal and written communication for global tech environments.'
  }
];

export const ABOUT_CARDS = [
  {
    id: 'student',
    title: 'CSE Student',
    subtitle: 'Dhaka International University',
    description: 'Pursuing a Bachelor of Science in Computer Science & Engineering with strong theoretical and practical foundations.',
    icon: 'GraduationCap'
  },
  {
    id: 'focus',
    title: 'AI Automation Focus',
    subtitle: 'n8n • Agents • LLM APIs',
    description: 'Dedicated to architecting intelligent automation flows that reduce friction and connect cloud tools seamlessly.',
    icon: 'Bot'
  },
  {
    id: 'projects',
    title: 'Multiple Projects',
    subtitle: 'Automation & Full-Stack',
    description: 'Built real-world applications ranging from CRM AI pipelines and multi-agent systems to campus marketplace platforms.',
    icon: 'Layers'
  },
  {
    id: 'learning',
    title: 'Always Learning',
    subtitle: 'Emerging Tech & AI',
    description: 'Consistently exploring advancements in LLMs, agentic frameworks, workflow engines, and backend engineering.',
    icon: 'Sparkles'
  }
];
