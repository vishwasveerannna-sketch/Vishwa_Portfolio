// ─────────────────────────────────────────────────────────────
// Central content file. Edit the values here to update the site —
// nothing else in the codebase should need to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vishwas',
  role: 'MCA (AI & Data Science) Student',
  location: 'Mysore, Karnataka, India',
  email: 'vishwasveerannna@gmail.com',
  phone: '+91-9488205668',
  // TODO: replace with your real profile URLs
  linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
  github: 'https://github.com/YOUR_GITHUB_USERNAME',
  resumeFile: 'resume.pdf',
};

export const summary =
  'I\u2019m an MCA (AI & Data Science) student who builds hands-on AI/ML and software projects — from a fuzzy-logic recommendation engine to a Java banking simulator. My foundation is in Python, machine learning, data analysis, SQL and object-oriented programming, and I work regularly with Pandas, NumPy, Scikit-learn, Git/GitHub, Jupyter Notebook and MySQL. I like taking a concept apart until I can explain it plainly, then building something real with it.';

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const aboutPoints = [
  'Studying AI, machine learning and data science in depth as part of my MCA',
  'Building practical software with Python, Java and modern web tooling',
  'Learning primarily by shipping projects, not just coursework',
  'Interested in the applied side of AI — recommendation systems, data-driven decisions, intelligent tooling',
  'Working on communicating technical ideas clearly, to both technical and non-technical audiences',
];

export const skillGroups = [
  {
    title: 'Programming & Querying',
    skills: ['Python', 'Java', 'C', 'SQL', 'HTML5', 'JavaScript', 'CSS'],
  },
  {
    title: 'AI, Data & Computer Science',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Structures & Algorithms',
      'Data Analysis',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
    ],
  },
  {
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'PyCharm'],
  },
];

export const projects = [
  {
    id: 'ecommerce-personalization',
    title: 'AI-Powered Content Personalization in E-Commerce',
    date: 'April 2026',
    technologies: ['Python', 'AI', 'Machine Learning', 'Fuzzy Logic', 'Pandas', 'NumPy', 'Scikit-learn', 'MySQL'],
    description:
      'An AI-powered e-commerce personalization system that uses fuzzy logic to recommend products based on user behavior, budget and engagement.',
    features: [
      'Designed and implemented a fuzzy inference system',
      'Fuzzification, rule-based reasoning and defuzzification for product ranking',
      'Multi-factor scoring across browsing history, ratings, price sensitivity and engagement',
      'Interactive web-based prototype for the recommendation flow',
    ],
    problem:
      'Generic product listings don\u2019t account for how differently shoppers weigh price, ratings and their own browsing habits.',
    solution:
      'A fuzzy inference system that scores products against multiple soft-boundaried factors at once, instead of hard filters or a single ranking metric.',
    contribution:
      'Designed the fuzzy rule base and scoring logic, implemented the inference pipeline in Python, and built the prototype interface to demonstrate it.',
    outcome:
      'A working prototype that ranks and recommends products using fuzzy logic across multiple weighted signals.',
    // TODO: replace with your real links, or remove the button if a link doesn't apply
    githubUrl: '',
    demoUrl: '',
  },
  {
    id: 'banking-management-system',
    title: 'Banking Management System',
    date: 'Nov 2025 – March 2026',
    technologies: ['Java', 'Object-Oriented Programming', 'VS Code'],
    description:
      'A menu-driven Banking Management System in Java that simulates core banking operations using object-oriented design.',
    features: [
      'Account creation, deposit, withdrawal, balance enquiry and transaction management',
      'Built around classes, objects, inheritance and encapsulation',
      'Exception handling for invalid operations',
      'Modular architecture for a maintainable, menu-driven console app',
    ],
    problem:
      'Core banking workflows involve several interdependent operations that need to stay consistent and safe from invalid input.',
    solution:
      'A modular, class-based Java application where each banking operation is a self-contained method with its own validation and exception handling.',
    contribution:
      'Designed the class structure, implemented all banking operations, and built the console-based menu system end to end.',
    outcome:
      'A functioning console application that reliably handles account creation and everyday banking transactions.',
    githubUrl: '',
    demoUrl: '',
  },
];

export const certifications = [
  {
    title: 'Software Engineering',
    organization: 'Infosys Springboard',
    date: '',
    details:
      'Training in software development, the SDLC, programming fundamentals, problem-solving, software design principles, testing and application development workflows.',
    certificateUrl: '',
  },
  {
    title: 'Oracle: Administration Workshop',
    organization: 'Infosys Springboard',
    date: 'April 2026',
    details:
      'Training in Oracle Database Administration, covering database architecture, user management, schema objects, SQL and database administration fundamentals.',
    certificateUrl: '',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (AI & Data Science)',
    institution: 'Amrita Vishwa Vidyapeetham, Mysore',
    period: '2025 – 2027',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'BGS First Grade College, Mysuru',
    period: '2022 – 2025',
  },
];

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Kannada', level: 'Fluent' },
  { name: 'Tamil', level: 'Fluent' },
  { name: 'Hindi', level: 'Basic understanding' },
];

export const seo = {
  title: 'Vishwas | MCA AI & Data Science | AI/ML Developer',
  description:
    'MCA AI & Data Science student building practical AI, machine learning and software projects with Python, Java and modern development tools.',
};
