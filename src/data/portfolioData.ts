import { Experience, Project, Certification, SkillCategory, Hackathon, BlogPost, Education, ExtraCurricular, CareerRoadmapItem, FAQItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Firas CHABBOUH',
  shortName: 'Firas',
  title: 'Software & AI Engineer | Full-Stack & Generative AI',
  titleEn: 'Software & AI Engineer | Full-Stack & Generative AI',
  subtitle: 'Architecte de Solutions Logicielles, IA Générative & Expériences 3D',
  subtitleEn: 'Software Architect, Generative AI & Interactive 3D Developer',
  location: 'Manouba, Tunisie',
  locationEn: 'Manouba, Tunisia',
  email: 'firas.chabouh@gmail.com',
  phone: '+216 58 711 570',
  linkedin: 'https://linkedin.com/in/firas-chabbouh-23a917235/',
  github: 'https://github.com/FirasCh48',
  facebook: 'https://facebook.com/firas.chabbouh',
  twitter: 'https://x.com/firas_chabbouh',
  availability: 'Disponible pour Projets & Opportunités Ingénierie IA / Full-Stack',
  availabilityEn: 'Available for AI & Full-Stack Engineering Opportunities',
  bio: `Ingénieur Logiciel à l’ISAMM Manouba. Spécialisé dans la conception d'architectures applicatives modernes Full-Stack (React, Spring Boot, FastAPI), l'intégration avancée d'IA Générative (RAG, Gemini 2.5, LangChain) et les expériences 3D Interactives & IoT (Unity, Blender, CAO).`,
  bioEn: `Software Engineer at ISAMM Manouba. Specializing in modern Full-Stack application architectures (React, Spring Boot, FastAPI), advanced Generative AI integration (RAG, Gemini 2.5, LangChain), and interactive 3D & IoT experiences (Unity, Blender, CAD).`,
  languages: [
    { name: 'Arabe', nameEn: 'Arabic', level: 'Langue maternelle', levelEn: 'Native' },
    { name: 'Français', nameEn: 'French', level: 'Niveau Professionnel (B2)', levelEn: 'Professional Proficiency (B2)' },
    { name: 'Anglais', nameEn: 'English', level: 'Niveau Professionnel (B2)', levelEn: 'Professional Proficiency (B2)' }
  ],
  interests: [
    'Stratégie footballistique',
    'Sports de combat (Kick-boxing, Boxe, Krav-maga, Jiu-jitsu)',
    'Lecture & Cinéma',
    'Camping & Activités Outdoor'
  ],
  interestsEn: [
    'Football Strategy',
    'Combat Sports (Kick-boxing, Boxing, Krav-Maga, BJJ)',
    'Reading & Cinema',
    'Camping & Outdoor Activities'
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-cgi',
    role: 'Ingénieur 3D & Concepteur Hardware IoT',
    roleEn: '3D Engineer & Hardware IoT Designer',
    company: 'CGI Studio',
    location: 'Nabeul, Tunisie',
    period: 'Fév. 2024 – Mai 2024',
    periodEn: 'Feb 2024 – May 2024',
    type: 'Projet d’Ingénierie & R&D 3D (PFE)',
    typeEn: 'Engineering Graduation Project (3D R&D)',
    description: [
      'Développement du jeu 3D multijoueur "Warshatin" : conception et programmation réseau & gameplay sous Unity 3D et C#.',
      'Conception UI/UX complète des interfaces du jeu : réalisation de wireframes, maquettes interactives et optimisation du parcours utilisateur.',
      'Modélisation & Animation 3D : création et texturation de personnages sous Blender, intégration du rig et animations via Blender & Mixamo.',
      'Ingénierie matérielle & IoT : conception CAO d’une manette physique personnalisée sous SolidWorks, simulation électrique du circuit et impression 3D sur UltiMaker Cura.'
    ],
    descriptionEn: [
      'Multiplayer 3D game development for "Warshatin": designed network & gameplay scripts in Unity 3D and C#.',
      'Complete UI/UX design: wireframes, interactive prototypes, and player experience optimization.',
      '3D Modeling & Animation: character design, UV texturing in Blender, rigging, and animation blending via Mixamo.',
      'Hardware & IoT Engineering: SolidWorks CAD design of a custom game controller, circuit simulation, and 3D printing on UltiMaker Cura.'
    ],
    techStack: ['Unity 3D', 'C#', 'Blender', 'Mixamo', 'SolidWorks', 'UltiMaker Cura', 'Multiplayer Networking', 'UI/UX Design'],
    badge: '3D & IoT Project'
  },
  {
    id: 'exp-dynamo',
    role: 'Ingénieur d’Études & Développeur Full-Stack Web',
    roleEn: 'Full-Stack Web Software Engineer',
    company: 'Dynamo',
    location: 'Siliana, Tunisie',
    period: 'Jan. 2023 – Fév. 2023',
    periodEn: 'Jan 2023 – Feb 2023',
    type: 'Mission Ingénierie Web',
    typeEn: 'Web Engineering Internship',
    description: [
      'Conception et développement complet d’une application web sur-mesure de gestion de recrutement pour le département Ressources Humaines.',
      'Implémentation de l’architecture RESTful API sécurisée avec authentification JWT et modélisation MongoDB.',
      'Création d’un dashboard administrateur réactif et dynamique avec React.js et Tailwind CSS.'
    ],
    descriptionEn: [
      'End-to-end design and development of a custom HR recruitment web management platform.',
      'Implemented secure RESTful APIs with JWT authentication and MongoDB document modeling.',
      'Built a reactive and dynamic admin dashboard using React.js and Tailwind CSS.'
    ],
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API'],
    badge: 'HR Platform'
  },
  {
    id: 'exp-artcom',
    role: 'Développeur Full-Stack Java / Angular',
    roleEn: 'Java / Angular Full-Stack Engineer',
    company: 'Artcom',
    location: 'Tunis, Tunisie',
    period: 'Juil. 2023 – Août. 2023',
    periodEn: 'Jul 2023 – Aug 2023',
    type: 'Ingénierie Système Enterprise',
    typeEn: 'Enterprise Software Engineering',
    description: [
      'Conception et réalisation d’un système d’information d’entreprise dédié à la gestion automatisée des stocks et approvisionnements.',
      'Développement des services back-end robustes avec Spring Boot (Java 17) et architecture en couches (Controller, Service, Repository).',
      'Interface utilisateur Angular moderne avec gestion réactive des états et formulaires dynamiques.'
    ],
    descriptionEn: [
      'Designed and built an enterprise information system for automated inventory and supply chain management.',
      'Developed robust backend microservices with Spring Boot (Java 17) following layered architecture principles.',
      'Created a modern Angular web frontend with RxJS reactive state management and dynamic forms.'
    ],
    techStack: ['Spring Boot', 'Java', 'Angular', 'TypeScript', 'MySQL', 'REST API'],
    badge: 'Enterprise Software'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-inclusivejobs',
    title: 'InclusiveJobs',
    subtitle: 'Plateforme IA de recrutement inclusif propulsée par RAG & Gemini 2.5',
    subtitleEn: 'Inclusive AI Recruitment Platform powered by RAG & Gemini 2.5',
    category: 'AI & ML',
    description: 'Plateforme IA intelligente facilitant l’accès à l’emploi des personnes à besoins spécifiques et accompagnant les entreprises dans un recrutement responsable.',
    descriptionEn: 'Smart AI platform connecting candidates with special needs to job opportunities through accessibility-aware semantic matching.',
    longDescription: 'InclusiveJobs utilise une architecture RAG (Retrieval-Augmented Generation) avancée s’appuyant sur LangChain et l’API Gemini (Gemini 2.5 Flash) pour réaliser un matching sémantique intelligent. La plateforme évalue les profils des candidats non seulement sur leurs compétences techniques mais également sur l’adéquation de l’environnement de travail et les aménagement d’accessibilité requis.',
    longDescriptionEn: 'InclusiveJobs leverages an advanced RAG (Retrieval-Augmented Generation) pipeline built with LangChain and Gemini 2.5 Flash for semantic matching. It evaluates candidate profiles based on skills and specific workplace accessibility requirements.',
    architectureDetails: [
      'Système RAG avec indexation vectorielle des fiches de postes et des besoins d’accessibilité.',
      'Modèle Gemini 2.5 Flash pour générer des recommandations d’adaptation de postes automatisées.',
      'API REST FastAPI haute performance documentée avec Swagger.',
      'Front-end React dynamique et responsive avec intégration d’outils d’accessibilité WCAG.'
    ],
    architectureDetailsEn: [
      'RAG pipeline with vector indexing for job posts and accessibility specifications.',
      'Gemini 2.5 Flash model generating automated workplace accommodation suggestions.',
      'High-performance FastAPI REST server documented with OpenAPI/Swagger.',
      'Dynamic React frontend adhering to WCAG accessibility guidelines.'
    ],
    techStack: ['FastAPI', 'Python', 'React', 'LangChain', 'Gemini API', 'MongoDB', 'Swagger', 'RAG'],
    githubUrl: 'https://github.com/FirasCh48',
    featured: true,
    highlights: [
      'Matching IA sémantique & adaptatif',
      'Architecture RAG avec LangChain & Gemini 2.5',
      'Accessibility-First UX pour candidats à besoins spécifiques'
    ],
    highlightsEn: [
      'Semantic & Adaptive AI Matching',
      'RAG Architecture with LangChain & Gemini 2.5',
      'Accessibility-First UX for Special Needs Candidates'
    ],
    is3DModelPreviewable: false
  },
  {
    id: 'proj-warshatin',
    title: 'Warshatin 3D & Custom IoT Controller',
    subtitle: 'Jeu Vidéo 3D Multijoueur & Controller Manette Physiquement Imprimée',
    subtitleEn: 'Multiplayer 3D Video Game & Custom 3D-Printed Hardware Controller',
    category: '3D & Gaming',
    description: 'Jeu 3D multijoueur sous Unity combiné à une manette personnalisée conçue en CAO (SolidWorks) et imprimée en 3D.',
    descriptionEn: 'Multiplayer 3D game built in Unity coupled with a custom ergonomic game controller designed in SolidWorks CAD and 3D-printed.',
    longDescription: 'Projet de fin d’études innovant combinant développement de jeu vidéo 3D multijoueur (Unity/C#), modélisation et animation 3D (Blender/Mixamo) et conception matérielle IoT (SolidWorks/UltiMaker Cura). Le projet comprend un contrôleur physique sur mesure simulant les interactions en jeu.',
    longDescriptionEn: 'Graduation project combining multiplayer 3D game development (Unity/C#), 3D modeling/animation (Blender/Mixamo), and IoT hardware engineering (SolidWorks CAD & UltiMaker Cura 3D printing).',
    architectureDetails: [
      'Multiplayer networking en temps réel synchronisant les positions des joueurs et les objets 3D.',
      'Assets 3D custom créés et riggés sous Blender puis animés via Mixamo.',
      'Boîtier de manette conçu sur SolidWorks avec intégration de circuits et impression 3D FDM.'
    ],
    architectureDetailsEn: [
      'Real-time multiplayer networking synchronizing player transforms and 3D objects.',
      'Custom 3D character assets modeled and rigged in Blender, animated via Mixamo.',
      'Custom SolidWorks controller shell with circuit integration and FDM 3D printing.'
    ],
    techStack: ['Unity 3D', 'C#', 'Blender', 'Mixamo', 'SolidWorks', 'UltiMaker Cura', 'IoT Hardware'],
    githubUrl: 'https://github.com/FirasCh48',
    featured: true,
    highlights: [
      'Moteur 3D Unity avec physique & multijoueur',
      'Pipeline complet 3D : Modélisation, Rigging & Animation',
      'Manette IoT sur-mesure imprimée en 3D (SolidWorks)'
    ],
    highlightsEn: [
      'Unity 3D Engine with Physics & Multiplayer',
      'Complete 3D Pipeline: Modeling, Rigging & Animation',
      'Custom 3D-Printed IoT Game Controller (SolidWorks)'
    ],
    is3DModelPreviewable: true
  },
  {
    id: 'proj-doctorappointment',
    title: 'DoctorAppointment',
    subtitle: 'Plateforme Télémédecine & Communauté Médicale Collaborative',
    subtitleEn: 'Telemedicine Platform & Collaborative Medical Community',
    category: 'Full-Stack Web',
    description: 'Solution multiplateforme (Web et Mobile) dédiée à la gestion des rendez-vous médicaux et aux consultations virtuelles.',
    descriptionEn: 'Cross-platform solution (Web & Mobile) for doctor appointment scheduling and virtual medical consultations.',
    longDescription: 'DoctorAppointment fluidifie le parcours de soin du patient grâce à la prise de rendez-vous en ligne, au suivi des dossiers médicaux sécurisés et à un espace communautaire collaboratif permettant des consultations virtuelles et des échanges entre praticiens et patients.',
    longDescriptionEn: 'DoctorAppointment streamlines healthcare access through online booking, secure patient record tracking, and collaborative tele-consultation channels.',
    architectureDetails: [
      'Backend Node.js/Express avec MongoDB pour la gestion des utilisateurs et créneaux médicaux.',
      'Interface Web React.js et déclinaison mobile React Native / Flutter.',
      'Module de visioconférence et système de notifications en temps réel.'
    ],
    architectureDetailsEn: [
      'Node.js/Express backend with MongoDB for user & appointment scheduling.',
      'React.js Web app and React Native / Flutter mobile applications.',
      'Video conferencing module and real-time push notification system.'
    ],
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Flutter', 'REST API'],
    githubUrl: 'https://github.com/FirasCh48',
    featured: true,
    highlights: [
      'Gestion complète de rendez-vous et calendrier médical',
      'Espace communautaire collaboratif médecins/patients',
      'Déploiement Web et Mobile'
    ],
    highlightsEn: [
      'Complete Medical Appointment & Calendar Management',
      'Collaborative Doctor-Patient Community Platform',
      'Seamless Web & Mobile Deployments'
    ]
  },
  {
    id: 'proj-flexiportfolio',
    title: 'FlexiPortfolio',
    subtitle: 'Système Dynamique & Modulaire de Gestion de Portfolio avec Admin Dashboard',
    subtitleEn: 'Dynamic & Modular Portfolio Engine with Admin Dashboard',
    category: 'UI/UX & Tools',
    description: 'Application de gestion de portfolio sans code permettant de personnaliser dynamiquement toutes les sections sans toucher au code source.',
    descriptionEn: 'Modular portfolio platform allowing dynamic customization of content and sections without modifying code.',
    longDescription: 'FlexiPortfolio a été pensé pour offrir une autonomie totale dans la gestion des contenus professionnels. Il intègre un Admin Dashboard complet avec contrôle en temps réel, un Design System modulable et une base de données PostgreSQL.',
    longDescriptionEn: 'FlexiPortfolio offers total content autonomy with a real-time admin dashboard, modular Tailwind Design System, and PostgreSQL database.',
    architectureDetails: [
      'Architecture modulaire basée sur des composants React ultra-réutilisables.',
      'Dashboard administrateur sécurisé avec permissions et prévisualisation live.',
      'Backend Node.js couplé à PostgreSQL pour la persistance relationnelle.'
    ],
    architectureDetailsEn: [
      'Modular architecture built on highly reusable React components.',
      'Secure admin dashboard with permissions and live preview.',
      'Node.js backend paired with PostgreSQL relational database.'
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'UI/UX Design'],
    githubUrl: 'https://github.com/FirasCh48',
    featured: false,
    highlights: [
      'Architecture Headless/CMS modulaire',
      'Dashboard administrateur en temps réel',
      'Design System personnalisé avec Tailwind CSS'
    ],
    highlightsEn: [
      'Modular Headless/CMS Architecture',
      'Real-Time Admin Dashboard',
      'Custom Design System with Tailwind CSS'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-uiux-elife',
    title: 'UI/UX Design Specialist',
    titleEn: 'UI/UX Design Specialist',
    issuer: 'Centre Elife Siliana',
    period: 'Jan. 2024 – Avr. 2024',
    periodEn: 'Jan 2024 – Apr 2024',
    location: 'Siliana, Tunisie',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'Design Systems', 'Usability Testing'],
    badgeColor: 'from-blue-500 to-indigo-600',
    verified: true,
    iconName: 'Layout'
  },
  {
    id: 'cert-ux-uxcel',
    title: 'UX Design Certified Professional',
    titleEn: 'UX Design Certified Professional',
    issuer: 'Uxcel',
    period: 'Jan. 2026',
    periodEn: 'Jan 2026',
    skills: ['UX Foundations', 'Interaction Design', 'Accessibility (WCAG)', 'Information Architecture', 'UI Patterns'],
    badgeColor: 'from-emerald-500 to-teal-600',
    verified: true,
    iconName: 'Award'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Intelligence Artificielle & Data',
    titleEn: 'Artificial Intelligence & Data',
    icon: 'Brain',
    skills: [
      {
        name: 'LangChain & RAG',
        level: 90,
        highlight: true,
        yearsExperience: '2+ ans',
        projectsCount: '6+ projets',
        descriptionFr: 'Conception de pipelines Retrieval-Augmented Generation avec agents autonomes et mémoire conversationnelle.',
        descriptionEn: 'Building Retrieval-Augmented Generation pipelines with autonomous agents and conversational memory.'
      },
      {
        name: 'API Gemini (2.5 Flash)',
        level: 92,
        highlight: true,
        yearsExperience: '2+ ans',
        projectsCount: '8+ projets',
        descriptionFr: 'Intégration d’assistants virtuels multimodaux, génération de contenu et streaming temps réel.',
        descriptionEn: 'Integrating multimodal virtual assistants, automated content generation, and real-time streaming.'
      },
      {
        name: 'LLMs & Prompt Eng.',
        level: 88,
        highlight: true,
        yearsExperience: '3 ans',
        projectsCount: '10+ projets',
        descriptionFr: 'Optimisation de prompts complexes, chaînage de pensées (Few-shot) et garde-fous de sécurité.',
        descriptionEn: 'Complex prompt optimization, Few-shot chain-of-thought, and safety guardrail enforcement.'
      },
      {
        name: 'Embeddings & Vector Search',
        level: 85,
        yearsExperience: '2 ans',
        projectsCount: '5+ projets',
        descriptionFr: 'Indexation sémantique et recherche vectorielle haute performance avec Pinecone, ChromaDB & PGVector.',
        descriptionEn: 'High-performance semantic indexing and vector similarity search with Pinecone, ChromaDB & PGVector.'
      },
      {
        name: 'Python (FastAPI / Flask)',
        level: 88,
        yearsExperience: '3+ ans',
        projectsCount: '12+ projets',
        descriptionFr: 'Développement de microservices REST ultra-rapides, traitement de données et pipelines d’IA.',
        descriptionEn: 'Developing ultra-fast REST microservices, data processing pipelines, and AI backends.'
      }
    ]
  },
  {
    title: 'Développement Full-Stack',
    titleEn: 'Full-Stack Software Engineering',
    icon: 'Code',
    skills: [
      {
        name: 'React.js & TypeScript',
        level: 92,
        highlight: true,
        yearsExperience: '4 ans',
        projectsCount: '15+ projets',
        descriptionFr: 'Architecture d’applications web réactives complexes avec typage strict, Tailwind CSS et hooks sur-mesure.',
        descriptionEn: 'Architecting complex reactive web applications with strict typing, Tailwind CSS, and custom hooks.'
      },
      {
        name: 'Node.js & Express',
        level: 88,
        yearsExperience: '3+ ans',
        projectsCount: '10+ projets',
        descriptionFr: 'API REST évolutives, authentification JWT/OAuth2, gestion asynchrone et WebSockets.',
        descriptionEn: 'Scalable REST APIs, JWT/OAuth2 authentication, asynchronous processing, and WebSockets.'
      },
      {
        name: 'Spring Boot (Java)',
        level: 85,
        yearsExperience: '2+ ans',
        projectsCount: '5+ projets',
        descriptionFr: 'Conception d’architectures logicielles d’entreprise robustes avec Spring Security et Hibernate JPA.',
        descriptionEn: 'Designing robust enterprise software architectures with Spring Security and Hibernate JPA.'
      },
      {
        name: 'Angular',
        level: 80,
        yearsExperience: '2 ans',
        projectsCount: '4+ projets',
        descriptionFr: 'Interfaces web modulaires, gestion de flux d’observables RxJS et injection de dépendances.',
        descriptionEn: 'Modular web interfaces, RxJS reactive stream management, and dependency injection.'
      },
      {
        name: 'C# / .NET',
        level: 82,
        yearsExperience: '2+ ans',
        projectsCount: '4+ projets',
        descriptionFr: 'Programmation orientée objet avancée, backend d’entreprise et scripts d’interaction Unity 3D.',
        descriptionEn: 'Advanced object-oriented programming, enterprise backend services, and Unity 3D gameplay scripts.'
      },
      {
        name: 'HTML5 / CSS3 / Tailwind',
        level: 95,
        yearsExperience: '4+ ans',
        projectsCount: '20+ projets',
        descriptionFr: 'Intégration responsive moderne pixel-perfect, accessibilité WCAG, animations Framer Motion et thèmes sombres/clairs.',
        descriptionEn: 'Modern pixel-perfect responsive layouts, WCAG accessibility, Framer Motion, and dark/light mode.'
      }
    ]
  },
  {
    title: '3D, Gaming & IoT Hardware',
    titleEn: '3D, Gaming & IoT Hardware',
    icon: 'Gamepad2',
    skills: [
      {
        name: 'Unity 3D',
        level: 86,
        highlight: true,
        yearsExperience: '3 ans',
        projectsCount: '6+ projets',
        descriptionFr: 'Création d’expériences 3D interactives (ex: Projet Warshatin 3D), physique, éclairages et shaders.',
        descriptionEn: 'Building interactive 3D experiences (e.g. Warshatin 3D), physics simulations, lighting, and shaders.'
      },
      {
        name: 'Blender 3D & Animation',
        level: 82,
        yearsExperience: '3 ans',
        projectsCount: '8+ projets',
        descriptionFr: 'Modélisation polygonale, texturage UV, création de décors 3D et rendus réalistes.',
        descriptionEn: 'Polygonal modeling, UV texturing, 3D environment creation, and realistic rendering.'
      },
      {
        name: 'Mixamo Rigging',
        level: 85,
        yearsExperience: '2+ ans',
        projectsCount: '5+ projets',
        descriptionFr: 'Squelettage automatique de personnages, rigging et intégration d’animations comportementales.',
        descriptionEn: 'Automatic character skeletal rigging and behavioral animation integration into game engines.'
      },
      {
        name: 'SolidWorks CAO',
        level: 80,
        yearsExperience: '2 ans',
        projectsCount: '5+ projets',
        descriptionFr: 'Conception mécatronique assistée par ordinateur, assemblages de pièces et boîtiers pour prototypes IoT.',
        descriptionEn: 'Computer-aided mechatronic design, part assemblies, and custom IoT hardware enclosures.'
      },
      {
        name: 'UltiMaker Cura (3D Print)',
        level: 85,
        yearsExperience: '2+ ans',
        projectsCount: '6+ projets',
        descriptionFr: 'Slicing avancé pour fabrication additive FDM, optimisation des supports et impression 3D physique.',
        descriptionEn: 'Advanced slicing for FDM additive manufacturing, support optimization, and physical 3D printing.'
      }
    ]
  },
  {
    title: 'Bases de Données & DevOps',
    titleEn: 'Databases & DevOps',
    icon: 'Database',
    skills: [
      {
        name: 'MongoDB',
        level: 90,
        yearsExperience: '3+ ans',
        projectsCount: '8+ projets',
        descriptionFr: 'Modélisation de documents NoSQL orientés performance, agrégation complexe et requêtes géospatiales.',
        descriptionEn: 'High-performance NoSQL document modeling, complex aggregation pipelines, and geospatial queries.'
      },
      {
        name: 'PostgreSQL & MySQL',
        level: 85,
        yearsExperience: '3+ ans',
        projectsCount: '10+ projets',
        descriptionFr: 'Schémas relationnels optimisés, procédures stockées, contraintes d’intégrité et indexation.',
        descriptionEn: 'Optimized relational schemas, stored procedures, integrity constraints, and query indexing.'
      },
      {
        name: 'Oracle & SQL Server',
        level: 80,
        yearsExperience: '2 ans',
        projectsCount: '4+ projets',
        descriptionFr: 'Procédures stockées PL/SQL, requêtes analytiques complexes et bases de données d’entreprise.',
        descriptionEn: 'PL/SQL stored procedures, complex analytical queries, and enterprise relational database systems.'
      },
      {
        name: 'Docker & Containers',
        level: 82,
        yearsExperience: '2+ ans',
        projectsCount: '7+ projets',
        descriptionFr: 'Conteneurisation d’applications Full-Stack, Docker Compose et déploiements d’environnements isolés.',
        descriptionEn: 'Full-Stack application containerization, multi-container Docker Compose, and environment isolation.'
      },
      {
        name: 'Git / GitHub / GitLab',
        level: 90,
        yearsExperience: '4 ans',
        projectsCount: '25+ projets',
        descriptionFr: 'Gestion de versions collaborative, workflows GitFlow, Code Reviews et automatisation CI/CD.',
        descriptionEn: 'Collaborative version control, GitFlow branching models, Code Reviews, and CI/CD automation.'
      },
      {
        name: 'Jest / JUnit Testing',
        level: 80,
        yearsExperience: '2 ans',
        projectsCount: '6+ projets',
        descriptionFr: 'Rédaction de tests unitaires et d’intégration automatisés pour valider la stabilité du code.',
        descriptionEn: 'Writing automated unit and integration test suites to ensure code robustness and reliability.'
      }
    ]
  }
];

export const HACKATHONS: Hackathon[] = [
  {
    id: 'hack-upshift',
    name: 'Hackathon UpShift – UNICEF',
    organizer: 'UNICEF',
    location: 'Tunis',
    date: '2024',
    dateEn: '2024',
    topic: 'Design Thinking, Innovation Sociale & Objectifs de Développement Durable (ODD)',
    topicEn: 'Design Thinking, Social Innovation & Sustainable Development Goals (SDGs)',
    description: 'Prototypage d’une solution technologique à fort impact social pour la jeunesse défavorisée.',
    descriptionEn: 'Prototyping a high-impact social technology solution for underprivileged youth.',
    tags: ['Design Thinking', 'Social Impact', 'ODD', 'UNICEF']
  },
  {
    id: 'hack-coworky',
    name: 'Hackathon Coworky – Chabeb4tech 2',
    organizer: 'Chabeb4tech',
    location: 'Nabeul',
    date: '2024',
    dateEn: '2024',
    topic: 'Entrepreneuriat Numérique, Business Models & Pitching',
    topicEn: 'Digital Entrepreneurship, Business Models & Pitching',
    description: 'Conception d’un modèle économique innovant et pitch devant des investisseurs et experts métiers.',
    descriptionEn: 'Designing an innovative business model and pitching to venture investors and industry experts.',
    tags: ['Startup', 'Business Model', 'Pitching']
  },
  {
    id: 'hack-makerspace',
    name: 'Hackathon Makerspace to Marketplace',
    organizer: 'Centre Elife',
    location: 'Siliana',
    date: 'Mai 2024',
    dateEn: 'May 2024',
    topic: 'Prototypage Industriel, CAO SolidWorks & Impression 3D',
    topicEn: 'Industrial Prototyping, SolidWorks CAD & 3D Printing',
    description: 'Passage d’une idée matérielle au produit physique fonctionnel imprimé en 3D en 48 heures.',
    descriptionEn: 'Turning a hardware idea into a physical working 3D-printed prototype in 48 hours.',
    tags: ['IoT', 'SolidWorks', 'Impression 3D', 'Hardware']
  },
  {
    id: 'hack-ecohack',
    name: 'Hackathon L’Ecohack',
    organizer: 'Centre Elife',
    location: 'Siliana',
    date: 'Mars 2024',
    dateEn: 'March 2024',
    topic: 'Solution Éco-Responsable & Économie Verte',
    topicEn: 'Eco-Friendly Solutions & Green Economy',
    description: 'Développement d’une plateforme verte pour mesurer et optimiser l’empreinte écologique.',
    descriptionEn: 'Developing a green platform to track and optimize environmental footprint.',
    tags: ['GreenTech', 'Économie Verte', 'ODD']
  },
  {
    id: 'hack-chabeb4tech1',
    name: 'Hackathon Chabeb4tech 1',
    organizer: 'Chabeb4tech',
    location: 'Nabeul',
    date: 'Janvier 2024',
    dateEn: 'January 2024',
    topic: 'Idéation, Entrepreneuriat & Création de Startups',
    topicEn: 'Ideation, Entrepreneurship & Startup Creation',
    description: 'Conception rapide d’une preuve de concept logicielle à fort potentiel de marché.',
    descriptionEn: 'Rapid creation of a software Proof-of-Concept with high market potential.',
    tags: ['Idéation', 'Startup', 'MVP']
  },
  {
    id: 'hack-sdrive',
    name: 'Hackathon Open S-Drive',
    organizer: 'S-drive',
    location: 'Tunis',
    date: 'Décembre 2023',
    dateEn: 'December 2023',
    topic: 'Interface d’aide à la conduite pour personnes sourdes-muettes',
    topicEn: 'Driving assistance interface for deaf and speech-impaired individuals',
    description: 'Conception d’un système d’assistance visuelle et haptique pour sécuriser la conduite des personnes malentendantes.',
    descriptionEn: 'Designing a visual and haptic assistance system for safer driving for hearing-impaired individuals.',
    tags: ['Accessibilité', 'UX/UI', 'Assistive Tech']
  },
  {
    id: 'hack-digitalminds',
    name: 'Hackathon Digital Minds',
    organizer: 'Centre Elife',
    location: 'Siliana',
    date: 'Mai 2023',
    dateEn: 'May 2023',
    topic: 'Plateforme E-commerce de bout en bout',
    topicEn: 'End-to-End E-commerce Platform',
    description: 'Développement full-stack en temps record d’une plateforme d’e-commerce réactive avec paiement et catalogue.',
    descriptionEn: 'Fast-paced full-stack development of a responsive e-commerce web platform.',
    tags: ['Full-Stack', 'E-Commerce', 'Web']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu-isamm',
    degree: 'Cycle Ingénieur – Ingénierie Logicielle',
    degreeEn: 'Software Engineering Degree Program',
    institution: 'Institut Supérieur des Arts Multimédia de la Manouba (ISAMM)',
    location: 'Manouba, Tunisie',
    period: 'Sept. 2024 – En cours (Diplôme prévu 2027)',
    status: 'En cours - 2e année',
    statusEn: 'In Progress - 2nd Year',
    highlights: [
      'Spécialisation en Génie Logiciel, Architectures Logicielles Avancées, Systèmes Distribués et IA.',
      'Projets intégrés combinant IA Générative, Microservices et Interfaces Multimédia.'
    ],
    highlightsEn: [
      'Specialized in Software Engineering, Advanced System Architectures, Distributed Systems & AI.',
      'Integrated capstone projects combining Generative AI, Microservices, and Multimedia Interfaces.'
    ]
  },
  {
    id: 'edu-iset',
    degree: 'Licence en Génie Logiciel',
    degreeEn: 'Bachelor’s Degree in Software Engineering',
    institution: 'Institut Supérieur des Études Technologiques (ISET Radès / Siliana)',
    location: 'Tunisie',
    period: '2021 – 2024',
    status: 'Diplômé avec Mention',
    statusEn: 'Graduated with Honors',
    highlights: [
      'Bases fondamentales en Algorithmique, Orienté Objet (Java/C++), Web Full-stack et Bases de données.',
      'Projet de Fin d’Études (PFE) classé parmi les majors de promotion (Jeu 3D + Controller IoT sous Unity).'
    ],
    highlightsEn: [
      'Core foundations in Data Structures, OOP (Java/C++), Full-Stack Web Development, and Databases.',
      'Graduation Capstone (PFE) ranked among top cohort projects (3D Game & IoT Hardware Controller in Unity).'
    ]
  }
];

export const EXTRACURRICULAR: ExtraCurricular[] = [
  {
    id: 'extra-jci',
    role: 'Membre Actif',
    organization: 'JCI Nabeul (Junior Chamber International)',
    period: 'Janvier 2025 – Présent',
    description: [
      'Organisation d’événements communautaires, de workshops technologiques et de sessions de pitchs entrepreneuriaux.',
      'Développement des compétences en gestion d’équipe, leadership, prise de parole en public et engagement citoyen.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-rag-gemini',
    slug: 'building-rag-pipeline-with-gemini-2.5-and-langchain',
    title: 'Construire un système RAG Performant avec Gemini 2.5 Flash & LangChain',
    titleEn: 'Building a High-Performance RAG Pipeline with Gemini 2.5 Flash & LangChain',
    excerpt: 'Retour d’expérience technique sur l’intégration d’une architecture Retrieval-Augmented Generation pour le recrutement inclusif.',
    excerptEn: 'Technical case study on building a Retrieval-Augmented Generation architecture for inclusive recruitment.',
    category: 'Intelligence Artificielle',
    categoryEn: 'Artificial Intelligence',
    date: '15 Juillet 2026',
    dateEn: 'July 15, 2026',
    readTime: '6 min',
    readTimeEn: '6 min read',
    author: {
      name: 'Firas CHABBOUH',
      role: 'Software & AI Engineer',
      roleEn: 'Software & AI Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'
    },
    tags: ['LangChain', 'RAG', 'Gemini 2.5', 'Python', 'FastAPI'],
    coverGradient: 'from-blue-600 to-cyan-500',
    content: `
### Pourquoi le RAG pour le Recrutement Inclusif ?

Dans le cadre du projet **InclusiveJobs**, la mise en correspondance entre les besoins spécifiques des candidats handicapés et les offres d’emploi des entreprises nécessitait d’aller au-delà d’une simple recherche par mots-clés. 

En combinant un **index vectoriel d'embeddings** avec le modèle **Gemini 2.5 Flash**, nous avons construit un pipeline capable de comprendre les aménagements de postes nécessaires (accessibilité PMR, logiciels de synthèse vocale, horaires aménagés) et de matcher intelligemment avec les compétences requises.

\`\`\`python
# Configuration du pipeline RAG avec LangChain & Gemini
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import Qdrant

embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)

def generate_accessibility_match(candidate_profile, job_description):
    # Processus de vectorisation et génération guidée par le contexte
    query = f"Evaluer la compatibilité d'accessibilité: {candidate_profile['needs']}"
    context_docs = vectorstore.similarity_search(query, k=3)
    
    prompt = f"Basé sur ces contraintes: {context_docs}, formulez une synthèse d'adaptation."
    response = llm.invoke(prompt)
    return response.content
\`\`\`

### Résultats & Métriques de Performance

1. **Temps de Réponse Sub-seconde** : Grâce à l’efficacité de Gemini 2.5 Flash, la latence moyenne de génération est passée sous la barre des 700ms.
2. **Précision du Match** : Plus de 92% d’adéquation validée sur nos jeux de données de test par rapport à un filtrage manuel.
    `,
    contentEn: `
### Why RAG for Inclusive Recruitment?

In the **InclusiveJobs** platform, matching candidates with accessibility requirements to appropriate corporate job postings required going beyond traditional keyword search.

By combining a **vector embedding index** with **Gemini 2.5 Flash**, we built an intelligent pipeline that evaluates required workplace accommodations alongside candidate technical skills.

\`\`\`python
# RAG Pipeline Configuration with LangChain & Gemini
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI

embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)

def generate_accessibility_match(candidate_profile, job_description):
    query = f"Evaluate accessibility fit: {candidate_profile['needs']}"
    context_docs = vectorstore.similarity_search(query, k=3)
    prompt = f"Given constraints: {context_docs}, generate accommodation synthesis."
    return llm.invoke(prompt).content
\`\`\`

### Results & Performance Metrics

1. **Sub-second Response Time**: Gemini 2.5 Flash reduced generation latency below 700ms.
2. **Match Precision**: Over 92% match accuracy compared to manual expert reviews.
    `
  },
  {
    id: 'post-unity-3d-iot',
    slug: 'unity-3d-multiplayer-and-custom-solidworks-hardware',
    title: 'Créer un Jeu 3D Multijoueur sous Unity avec une Manette IoT Imprimée en 3D',
    titleEn: 'Creating a Multiplayer 3D Game in Unity with a 3D-Printed Hardware Controller',
    excerpt: 'Du schéma CAO sous SolidWorks à la physique Unity en C# : retour sur le développement du projet Warshatin.',
    excerptEn: 'From SolidWorks CAD design to Unity C# physics: building the Warshatin 3D project.',
    category: '3D & IoT',
    categoryEn: '3D & IoT',
    date: '28 Mai 2024',
    dateEn: 'May 28, 2024',
    readTime: '8 min',
    readTimeEn: '8 min read',
    author: {
      name: 'Firas CHABBOUH',
      role: '3D & Software Engineer',
      roleEn: '3D & Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'
    },
    tags: ['Unity 3D', 'C#', 'SolidWorks', 'Impression 3D', 'Blender'],
    coverGradient: 'from-purple-600 to-indigo-600',
    content: `
### L'Union entre l'Ingénierie Matérielle et le Jeu Vidéo 3D

Pendant mon stage chez **CGI Studio**, l'objectif était d'offrir une expérience d'immersion totale pour le jeu multijoueur *Warshatin*. 

Au lieu d'utiliser une manette générique du marché, j'ai pris le parti de concevoir une manette de jeu ergonomique entièrement personnalisée, adaptée au gameplay spécifique.

#### 1. Conception CAO & Modélisation Physique
* **SolidWorks** : Dessin des coques ergonomiques, placement exact des joysticks analogiques et boutons tactiles.
* **UltiMaker Cura** : Paramétrage du slicing FDM (remplissage gyramide à 20% pour concilier légèreté et solidité).

#### 2. Synchronisation Réseau sous Unity
\`\`\`csharp
// Extrait de script Unity C# synchronisant le contrôleur
using UnityEngine;
using Mirror;

public class CustomHardwareController : NetworkBehaviour
{
    [SyncVar] private Vector3 inputDirection;

    void Update()
    {
        if (!isLocalPlayer) return;

        float moveX = Input.GetAxis("CustomHorizontal");
        float moveZ = Input.GetAxis("CustomVertical");
        
        CmdSendMovement(new Vector3(moveX, 0, moveZ));
    }

    [Command]
    void CmdSendMovement(Vector3 dir)
    {
        inputDirection = dir;
    }
}
\`\`\`
    `,
    contentEn: `
### Combining Hardware Engineering with 3D Gaming

During my engineering internship at **CGI Studio**, the goal was to provide an immersive experience for the multiplayer 3D game *Warshatin*.

Instead of relying on off-the-shelf controllers, I designed a custom physical controller specifically engineered for the gameplay.

#### 1. CAD Design & Physical Prototyping
* **SolidWorks**: Ergonomic shell modeling, precise analog joystick and tactile button cutouts.
* **UltiMaker Cura**: FDM slicing parameters optimized for lightweight durability.

#### 2. Real-Time Network Sync in Unity
\`\`\`csharp
using UnityEngine;
using Mirror;

public class CustomHardwareController : NetworkBehaviour
{
    [SyncVar] private Vector3 inputDirection;

    void Update()
    {
        if (!isLocalPlayer) return;
        float moveX = Input.GetAxis("CustomHorizontal");
        float moveZ = Input.GetAxis("CustomVertical");
        CmdSendMovement(new Vector3(moveX, 0, moveZ));
    }

    [Command]
    void CmdSendMovement(Vector3 dir) { inputDirection = dir; }
}
\`\`\`
    `
  },
  {
    id: 'post-uiux-design-system',
    slug: 'designing-accessible-design-systems-with-figma-and-tailwind',
    title: 'Concevoir un Design System Inclusif et Accessible (WCAG 2.1)',
    titleEn: 'Designing an Inclusive and Accessible Design System (WCAG 2.1)',
    excerpt: 'Principes essentiels acquis lors de mes certifications UI/UX pour bâtir des interfaces harmonieuses et inclusives.',
    excerptEn: 'Key insights from UI/UX certifications for crafting accessible and harmonious web interfaces.',
    category: 'UI/UX Design',
    categoryEn: 'UI/UX Design',
    date: '10 Février 2026',
    dateEn: 'February 10, 2026',
    readTime: '5 min',
    readTimeEn: '5 min read',
    author: {
      name: 'Firas CHABBOUH',
      role: 'UI/UX & Full-Stack Engineer',
      roleEn: 'UI/UX & Full-Stack Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'
    },
    tags: ['UI/UX', 'Accessibility', 'Tailwind CSS', 'Design System'],
    coverGradient: 'from-emerald-600 to-teal-500',
    content: `
### Les piliers de l'Accessibilité UI/UX

Lors de ma formation au **Centre Elife** et de ma certification **Uxcel**, j'ai mesuré l'importance cruciale de concevoir des interfaces utilisables par TOUS.

1. **Ratios de Contraste Strict (WCAG AA & AAA)** : Toujours viser un ratio d'au moins 4.5:1 pour les textes normaux.
2. **Navigation au Clavier (Focus States)** : Ne jamais supprimer l'outline du focus sans le remplacer par un ring visible et élégant.
3. **Typography Scaling Optique** : Utiliser des échelles typographiques proportionnelles (Major Third ou Perfect Fourth) avec des tailles minimales de 16px.
    `,
    contentEn: `
### Core Pillars of UI/UX Accessibility

During my training at **Centre Elife** and my **Uxcel** certification, I prioritized inclusive design principles that serve all users.

1. **Strict Contrast Ratios (WCAG AA & AAA)**: Maintaining at least a 4.5:1 contrast ratio for body copy.
2. **Keyboard Focus States**: Always replacing default outline removals with clear, elegant custom focus rings.
3. **Optical Typography Scales**: Using structured step ratios with 16px minimum body sizes.
    `
  }
];

export const CAREER_ROADMAP: CareerRoadmapItem[] = [
  {
    id: 'road-1',
    year: '2021 – 2024',
    title: 'Licence en Génie Logiciel',
    titleEn: 'Bachelor’s Degree in Software Engineering',
    category: 'education',
    categoryLabel: 'Formation Académique',
    categoryLabelEn: 'Academic Education',
    organization: 'ISET Radès',
    summary: 'Acquisition des fondations rigoureuses du génie logiciel : algorithmique avancée, POO, modélisation UML/Bases de données et architectures Web.',
    summaryEn: 'Core software engineering fundamentals: advanced data structures, OOP, UML modeling, relational databases, and full-stack web applications.',
    keyAchievements: [
      'Diplôme obtenu avec la mention Très Bien (PFE 3D & IoT)',
      'Développement de projets d’application Web et bases de données SQL/NoSQL',
      'Maîtrise des concepts de programmation C, C++, Java et Web moderne'
    ],
    keyAchievementsEn: [
      'Graduated with Honors (High Distinction for 3D & IoT Capstone Project)',
      'Built multi-tier Web & Database applications (SQL & NoSQL)',
      'Proficiency in C, C++, Java, and modern Web ecosystem'
    ],
    skills: ['Génie Logiciel', 'Java', 'SQL', 'C/C++', 'Web Dev', 'UML'],
    status: 'completed'
  },
  {
    id: 'road-2',
    year: 'Jan – Fév 2023',
    title: 'Ingénieur d’Études Web Full-Stack',
    titleEn: 'Full-Stack Web Engineer',
    category: 'experience',
    categoryLabel: 'Immersion Entreprise',
    categoryLabelEn: 'Industry Experience',
    organization: 'Dynamo',
    summary: 'Conception et développement d’une plateforme Web RH sur-mesure pour la digitalisation des processus de recrutement.',
    summaryEn: 'Designed and built a custom HR recruitment platform to digitize candidate evaluation and hiring workflows.',
    keyAchievements: [
      'Architecture RESTful sécurisée avec Node.js, Express & MongoDB',
      'Interface utilisateur dynamique sous React.js avec gestion d’état',
      'Système d’authentification sécurisé JWT & rôles utilisateurs'
    ],
    keyAchievementsEn: [
      'Secure RESTful API architecture built with Node.js, Express & MongoDB',
      'Reactive user interface developed in React.js with modular state management',
      'JWT role-based authentication and security guards'
    ],
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    status: 'completed'
  },
  {
    id: 'road-3',
    year: 'Juil – Août 2023',
    title: 'Ingénieur Système Enterprise & ERP',
    titleEn: 'Enterprise Systems & ERP Engineer',
    category: 'experience',
    categoryLabel: 'Immersion Entreprise',
    categoryLabelEn: 'Industry Experience',
    organization: 'Artcom',
    summary: 'Développement d’un système d’information d’entreprise dédié à la gestion globale des stocks et approvisionnements.',
    summaryEn: 'Built an enterprise supply chain system automating inventory tracking and warehouse operations.',
    keyAchievements: [
      'Architecture back-end distribuée avec Spring Boot (Java 17)',
      'Modélisation et optimisation des requêtes PostgreSQL',
      'Tableaux de bord d’analyse des flux de stock sous React'
    ],
    keyAchievementsEn: [
      'Distributed Spring Boot backend (Java 17) following layered architecture',
      'Optimized PostgreSQL relational database queries and schema constraints',
      'Interactive inventory analytics dashboards built with Angular & React'
    ],
    skills: ['Spring Boot', 'Java 17', 'PostgreSQL', 'React', 'RESTful API'],
    status: 'completed'
  },
  {
    id: 'road-4',
    year: 'Fév – Mai 2024',
    title: 'Ingénieur 3D & Concepteur Hardware IoT',
    titleEn: '3D Engineer & Hardware IoT Designer',
    category: 'experience',
    categoryLabel: 'Projet d’Ingénierie & R&D',
    categoryLabelEn: 'R&D Engineering Project',
    organization: 'CGI Studio',
    summary: 'Projet d’ingénierie majeur "Warshatin" : création d’un jeu 3D multijoueur couplé à une manette physique custom conçue sous CAO et imprimée en 3D.',
    summaryEn: 'Flagship project "Warshatin": multiplayer 3D game coupled with a custom 3D-printed physical controller.',
    keyAchievements: [
      'Développement gameplay & réseau sous Unity 3D & C#',
      'Modélisation & rigging 3D de personnages sous Blender',
      'Conception CAO SolidWorks de la manette physique et impression 3D'
    ],
    keyAchievementsEn: [
      'Gameplay & multiplayer networking in Unity 3D & C#',
      '3D character modeling, texturing, and skeletal rigging in Blender & Mixamo',
      'SolidWorks CAD design of custom game controller shell and 3D printing'
    ],
    skills: ['Unity 3D', 'C#', 'Blender', 'SolidWorks', 'UltiMaker Cura', 'IoT'],
    status: 'completed'
  },
  {
    id: 'road-5',
    year: '2024 – 2027',
    title: 'Cycle Ingénieur d’État en Informatique',
    titleEn: 'Master’s Engineering Degree in Computer Science',
    category: 'education',
    categoryLabel: 'Formation d’Ingénieur',
    categoryLabelEn: 'Engineering School',
    organization: 'ISAMM Manouba',
    summary: 'Spécialisation d’excellence en ingénierie logicielle avancée, architectures cloud, vision par ordinateur et intelligence artificielle générative.',
    summaryEn: 'Specialized track in advanced software engineering, distributed cloud architectures, and Generative AI.',
    keyAchievements: [
      'Major de projets d’architectures distribuées et intégration IA',
      'Conception de pipelines RAG (Retrieval-Augmented Generation) complexes',
      'Maîtrise des modèles d’apprentissage profond et embeddings vectoriels'
    ],
    keyAchievementsEn: [
      'Top-tier results in distributed systems and AI integration projects',
      'Designed end-to-end RAG (Retrieval-Augmented Generation) applications',
      'Hands-on expertise with vector search, LLMs, and modern ML pipelines'
    ],
    skills: ['IA Générative', 'RAG / LLMs', 'FastAPI', 'Spring Boot', 'Docker', 'ML/DL'],
    status: 'current'
  },
  {
    id: 'road-6',
    year: '2025 – 2026',
    title: 'Pôle d’Innovation IA & Systèmes Intelligents',
    titleEn: 'AI Innovation & Intelligent Systems Hub',
    category: 'innovation',
    categoryLabel: 'Flagship Innovations',
    categoryLabelEn: 'Flagship Innovations',
    organization: 'Projets R&D Personnels & Hackathons',
    summary: 'Développement d’écosystèmes logiciels augmentés par l’IA : EduInsight AI (RAG éducatif), Agrilens AI (diagnostic agricole) & JobFit AI.',
    summaryEn: 'Building AI-augmented software ecosystems: EduInsight AI (Educational RAG), Agrilens AI (Agricultural Diagnostic) & JobFit AI.',
    keyAchievements: [
      'Intégration d’IA générative multimodale (Gemini 2.5, LangChain)',
      'Vector Databases & recherche sémantique en temps réel (ChromaDB / FAISS)',
      'Visualisations 3D interactives sous Three.js & Tailwind CSS'
    ],
    keyAchievementsEn: [
      'Multimodal Generative AI integration (Gemini 2.5 Flash, LangChain)',
      'Vector databases and real-time semantic retrieval (ChromaDB / Pinecone)',
      'Interactive 3D web visualizations using Three.js & Tailwind CSS'
    ],
    skills: ['Gemini 2.5', 'LangChain', 'RAG', 'Vector DB', 'Three.js', 'FastAPI'],
    status: 'current'
  },
  {
    id: 'road-7',
    year: '2026+',
    title: 'Vision d’Avenir : Lead Software & AI Architect',
    titleEn: 'Future Vision: Lead Software & AI Architect',
    category: 'future',
    categoryLabel: 'Objectifs de Carrière',
    categoryLabelEn: 'Career Goals',
    organization: 'Entreprise Technologique / R&D Cloud & IA',
    summary: 'Pilotage technique et conception d’architectures distribuées hautement scalables intégrant des agents d’IA autonomes, le Edge AI et la 3D temps réel.',
    summaryEn: 'Architecting highly scalable cloud-native systems integrating autonomous AI agents, Edge AI, and real-time 3D.',
    keyAchievements: [
      'Conception de systèmes multi-agents autonomes et fiables',
      'Orchestration Microservices Cloud-Native & MLOps',
      'Déploiement d’expériences immersives haute performance'
    ],
    keyAchievementsEn: [
      'Architecting resilient multi-agent autonomous AI systems',
      'Cloud-native microservices orchestration & MLOps pipelines',
      'High-performance immersive 3D web applications'
    ],
    skills: ['System Architecture', 'Multi-Agent AI', 'MLOps', 'Cloud Native', '3D / AR'],
    status: 'vision'
  }
];

export const RECRUITER_FAQS: FAQItem[] = [
  {
    id: 'faq-availability',
    category: 'recruitment',
    categoryLabelFr: 'Recrutement & Contrat',
    categoryLabelEn: 'Recruitment & Contract',
    popular: true,
    questionFr: 'Quelle est votre disponibilité actuelle et quel type de contrat recherchez-vous ?',
    questionEn: 'What is your current availability and what type of contract are you seeking?',
    answerFr: 'Je suis actuellement immédiatement disponible pour des opportunités en CDI, CDD, ou contrats de projets d\'ingénierie. Je recherche des postes d\'Ingénieur Logiciel Full-Stack, Spécialiste en Intégration d\'IA Générative ou Développeur Web/3D. Mon préavis est court et je suis très réactif pour démarrer rapidement.',
    answerEn: 'I am currently immediately available for full-time roles (CDI/CDD), specialized tech contracts, or engineering projects. I am targeting Software Engineer, Full-Stack Developer, or AI Integration Specialist roles with an immediate or short notice start.'
  },
  {
    id: 'faq-ai-rag',
    category: 'technical',
    categoryLabelFr: 'Compétences IA & Stack',
    categoryLabelEn: 'AI & Tech Stack',
    popular: true,
    questionFr: 'Quelle est votre expérience avec les technologies IA, les LLMs et les architectures RAG ?',
    questionEn: 'What is your hands-on experience with AI, LLMs, and RAG architectures?',
    answerFr: 'J\'ai une expertise solide dans l\'intégration de LLMs (Gemini 2.5, OpenAI, Claude, Ollama local), le développement d\'architectures RAG (Retrieval-Augmented Generation) avec bases vectorielles (Pinecone, ChromaDB, PGVector), et l\'orchestration via LangChain et FastAPI. J\'ai conçu des assistants intelligents avec recherche sémantique en temps réel et agents d\'automatisation.',
    answerEn: 'I have strong practical experience integrating LLMs (Gemini 2.5, OpenAI, Claude, Ollama), building RAG pipelines using vector databases (Pinecone, ChromaDB, PGVector), and orchestrating agent workflows with LangChain and FastAPI. I build real-time semantic search and automated AI agent systems.'
  },
  {
    id: 'faq-tech-stack',
    category: 'technical',
    categoryLabelFr: 'Compétences IA & Stack',
    categoryLabelEn: 'AI & Tech Stack',
    popular: false,
    questionFr: 'Quelle est votre pile technologique (Tech Stack) principale en Full-Stack ?',
    questionEn: 'What is your primary tech stack for Full-Stack engineering?',
    answerFr: '• Front-End : React.js, TypeScript, Next.js, Tailwind CSS, Framer Motion, Three.js & Unity 3D.\n• Back-End & API : Node.js / Express, Python (FastAPI, Flask), Java Spring Boot.\n• Bases de données : PostgreSQL, MongoDB, Redis, Pinecone.\n• DevOps & CI/CD : Docker, Git, GitHub Actions, Linux, Vercel & Render.',
    answerEn: '• Front-End: React.js, TypeScript, Next.js, Tailwind CSS, Framer Motion, Three.js & Unity 3D.\n• Back-End & API: Node.js / Express, Python (FastAPI, Flask), Java Spring Boot.\n• Databases: PostgreSQL, MongoDB, Redis, Pinecone.\n• DevOps & CI/CD: Docker, Git, GitHub Actions, Linux, Cloud Deployments.'
  },
  {
    id: 'faq-english-remote',
    category: 'work_model',
    categoryLabelFr: 'Modalités & Mobilité',
    categoryLabelEn: 'Work Setup & Mobility',
    popular: true,
    questionFr: 'Quel est votre niveau d\'anglais et êtes-vous ouvert au travail à distance ou à l\'international ?',
    questionEn: 'What is your English level and are you open to remote work or relocation?',
    answerFr: 'Mon niveau d\'anglais est professionnel (B2/C1), me permettant de rédiger des spécifications, de mener des réunions techniques et de collaborer au quotidien dans un environnement bilingue. Je suis 100% ouvert au travail en Full Remote, en mode hybride, ainsi qu\'à la mobilité internationale (France, Europe, Amérique du Nord, Golfe).',
    answerEn: 'I have professional English proficiency (B2/C1), fluent for technical documentation, code reviews, and daily standups in global distributed teams. I am 100% open to Full Remote positions, hybrid setups, as well as international relocation.'
  },
  {
    id: 'faq-agile-quality',
    category: 'collaboration',
    categoryLabelFr: 'Méthodes & Qualité',
    categoryLabelEn: 'Agile & Quality',
    popular: false,
    questionFr: 'Comment garantissez-vous la qualité du code et la collaboration en équipe ?',
    questionEn: 'How do you ensure code quality and seamless team collaboration?',
    answerFr: 'J\'applique les principes Clean Code, SOLID, le typage strict avec TypeScript et la modularité applicative. J\'ai l\'habitude des méthodologies Agiles (Scrum, Sprints, Daily, Code Reviews sur GitHub, CI/CD). Je valorise la communication transparente, la documentation claire de l\'architecture et l\'entraide technique.',
    answerEn: 'I rigorously apply Clean Code and SOLID principles, modular architecture, and strict TypeScript typing. Experienced in Agile environments (Scrum, Sprints, GitHub Code Reviews, CI/CD pipelines), I prioritize code maintainability, clear documentation, and proactive peer communication.'
  },
  {
    id: 'faq-hackathons-projects',
    category: 'collaboration',
    categoryLabelFr: 'Méthodes & Qualité',
    categoryLabelEn: 'Agile & Quality',
    popular: false,
    questionFr: 'Avez-vous de l\'expérience sous forte pression (Hackathons, Projets R&D) ?',
    questionEn: 'Do you have experience delivering under tight deadlines (Hackathons, R&D)?',
    answerFr: 'Absolument ! Lauréat de plusieurs hackathons nationaux et internationaux (ex. Hackathon IA ISAMM, Space Apps Challenge), j\'ai appris à transformer une idée en un prototype Full-Stack & IA fonctionnel en 24 à 48 heures. Cette réactivité m\'aide à concevoir rapidement des Minimum Viable Products (MVP) robustes.',
    answerEn: 'Absolutely! Having won awards in national & international hackathons (e.g. ISAMM AI Hackathon, NASA Space Apps), I am trained to rapidly turn complex specifications into fully functional AI & Full-Stack prototypes in 24-48 hours with high architectural standards.'
  },
  {
    id: 'faq-contact-process',
    category: 'recruitment',
    categoryLabelFr: 'Recrutement & Contrat',
    categoryLabelEn: 'Recruitment & Contract',
    popular: true,
    questionFr: 'Comment planifier un premier échange ou un entretien technique ?',
    questionEn: 'How can we schedule a first interview or technical screening?',
    answerFr: 'Vous pouvez m\'envoyer un message via le formulaire de contact ci-dessous, m\'écrire par email à firas.chabouh@gmail.com, ou me joindre directement via WhatsApp au +216 58 711 570. Je réponds très rapidement sous 24h max !',
    answerEn: 'You can reach out directly via the contact form below, send an email to firas.chabouh@gmail.com, or message me directly on WhatsApp at +216 58 711 570. I am very responsive and reply within 24 hours.'
  }
];

