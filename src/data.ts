import { Project, Experience, Publication, Credential, Endorsement, Language } from './types';

export const PERSONAL_INFO = {
  name: 'Lusimadio S Simao, MBA',
  title: 'Founder & CEO | Strategic Growth & AI Leader | Sustainability & Trade Advocate',
  bioBrief: 'A visionary African executive, entrepreneur, and strategist with extensive leadership experience across artificial intelligence, sustainable development, international trade, investment promotion, media, and governance.',
  bioFull: 'Mr. Lusimadio Soki Simao is widely recognized for founding and scaling impact-driven institutions that align innovation, policy, and inclusive economic growth across Africa. As an executive at the intersection of tech, environmental policy, and trade, his career is defined by strategic leadership, AI-driven innovation, and continental trade development to shape future-ready African institutions and globally competitive enterprises.',
  portraitPath: 'https://media.licdn.com/dms/image/v2/D4D03AQF97hhNCtJS0Q/profile-displayphoto-crop_800_800/B4DZoo4HDmKUAI-/0/1761622390771?e=1784160000&v=beta&t=ne2sUlqerAbBrARFVcXjws8263wGRCLIqh6Rl7wbtZo',
  contacts: [
    { label: 'Primary Email', value: 'simao@thevoiceofwellness.co.za' },
    { label: 'NeuroGrowth Labs', value: 'Simao@neurogrowthlabs.co.za' },
    { label: 'EcoBuild Africa', value: 'Soki.Simao@ecobuilafrica.co.za' },
    { label: 'Phone', value: '+27 67 617 1261' }
  ],
  awards: [
    'Africa Business Professionals and Entrepreneurs Award'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'afritranste-ai-studio',
    title: 'Afritranste AI Studio',
    subtitle: 'Enterprise AI & Automation Engine',
    description: 'An AI-driven technical workspace for enterprise transformation, designed to streamline corporate workflows and support intelligent policy analysis.',
    category: 'AI & Software',
    details: {
      problem: 'African enterprises face unique scale, language, and operational friction that off-the-shelf Western AI tools fail to address, causing low local adoption and slow policy alignment.',
      solution: 'A highly customized, lightweight LLM orchestrator and document intelligence hub tailored specifically to corporate governance, regional languages, and local compliance standards.',
      impact: 'Boosted operational efficiency in pilot companies by 40%, enabling automatic parsing of regional regulatory frameworks and reducing enterprise compliance review times from weeks to minutes.',
      techStack: ['TypeScript', 'Gemini Pro SDK', 'Vector DB', 'Vite', 'Node.js']
    },
    imageSeed: 'ai_studio'
  },
  {
    id: 'cg-waste-data',
    title: 'CG Waste Data',
    subtitle: 'Circular Economy Intelligence Platform',
    description: 'A data platform optimizing municipal solid waste management, logistics route tracking, and circular-economy resource trading in metropolitan areas.',
    category: 'Climate & Sustainability',
    details: {
      problem: 'Uncoordinated waste collection and a lack of real-time supply chain transparency in South African cities leads to severe environmental hazards, clogged drainages, and massive landfill pressure.',
      solution: 'An end-to-end telemetry and logistics dashboard that connects waste aggregators, recycling facilities, and local municipalities to schedule and track collections dynamically.',
      impact: 'Helped recycle over 12,000 tons of waste through streamlined route coordination, lowering municipal carbon emissions by roughly 18% and empowering over 200 informal waste workers.',
      techStack: ['React', 'D3.js', 'PostgreSQL', 'Express', 'TailwindCSS']
    },
    imageSeed: 'waste_data'
  },
  {
    id: 'afritrade-os',
    title: 'AfriTrade OS',
    subtitle: 'Intra-African Trade & Logistics System',
    description: 'A smart digital logistics operating system enabling intra-African cross-border commerce, duty calculations, and trade alignment under the AfCFTA framework.',
    category: 'Trade & Logistics',
    details: {
      problem: 'Intra-African trade is bogged down by opaque customs processes, manual paperwork, and shifting bilateral agreements, making cross-border shipping more expensive than intercontinental trade.',
      solution: 'A unified digital platform featuring smart customs document generation, real-time tariff lookup, and automated compliance verification mapped precisely to the AfCFTA guidelines.',
      impact: 'Reduced cross-border transit administration delays by 35% for regional trade corridors, saving member SMEs significant operational overhead and clearing customs backlogs.',
      techStack: ['Node.js', 'Drizzle ORM', 'TypeScript', 'TailwindCSS', 'REST APIs']
    },
    imageSeed: 'trade_os'
  },
  {
    id: 'afriquant-x-fintech',
    title: 'AfriQuant X Fintech',
    subtitle: 'AI Financial Intelligence & Investment Hub',
    description: 'A digital ecosystem providing quantitative AI analytics and structured fintech opportunities to support capital allocation in emerging markets.',
    category: 'AI & Software',
    details: {
      problem: 'High investment risks and a lack of granular market intelligence in emerging economies inhibit capital flow and digital innovation within African financial markets.',
      solution: 'An algorithmic fintech intelligence dashboard that executes quantitative risk modeling, real-time liquidity analysis, and optimized investment matching.',
      impact: 'Successfully facilitated millions in capital allocation with a 25% reduction in cross-border financial risk assessment times.',
      techStack: ['React', 'GraphQL', 'TailwindCSS', 'Tailwind CSS v4', 'Redis']
    },
    imageSeed: 'neuro_growth'
  },
  {
    id: 'afriestate',
    title: 'AfriEstate',
    subtitle: 'Digital Real Estate & Land Registry',
    description: 'A decentralized platform designed to streamline real estate registration, property trade, and land title management across regional borders.',
    category: 'Trade & Logistics',
    details: {
      problem: 'Opaque land registers and slow title transfer workflows create legal insecurity and inhibit institutional real estate investments.',
      solution: 'A cryptographically secure property ledger integrating smart contracts and automated ownership verification.',
      impact: 'Halved transaction times for property transfers and reduced title disputes in pilot regions by over 60%.',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express']
    },
    imageSeed: 'trade_os'
  },
  {
    id: 'cognisacra',
    title: 'CogniSacra',
    subtitle: 'Cultural & Intellectual Asset Archiving',
    description: 'An AI-driven archive and semantic network preserving African cultural heritage, oral histories, and indigenous knowledge.',
    category: 'AI & Software',
    details: {
      problem: 'Rapid urbanization and lack of structured digital documentation risk erasing rich African oral histories and indigenous practices.',
      solution: 'A cognitive natural language engine that processes, indexes, and semantically links recorded oral testimonies and historical logs.',
      impact: 'Successfully cataloged over 5,000 indigenous records, creating a semantic cultural asset map accessible to global researchers.',
      techStack: ['React', 'Gemini Pro SDK', 'Python', 'TailwindCSS']
    },
    imageSeed: 'ai_studio'
  },
  {
    id: 'neuro-networks',
    title: 'Neuro NetWorks',
    subtitle: 'Distributed Broadband & Compute Systems',
    description: 'A decentralized telecommunications mesh network designed to optimize local broadband sharing and edge compute power in dense communities.',
    category: 'AI & Software',
    details: {
      problem: 'Prohibitive infrastructure costs and centralized network congestion lead to slow, expensive, and unstable internet in dense urban spaces.',
      solution: 'A software-defined community mesh protocol enabling peer-to-peer compute sharing and dynamic bandwidth allocation.',
      impact: 'Enhanced average bandwidth speeds by 30% and lowered network connectivity costs by 45% across pilot neighborhoods.',
      techStack: ['Rust', 'WebSockets', 'C++', 'Node.js']
    },
    imageSeed: 'rescue_bot'
  },
  {
    id: 'enoviq-ai-sommelier',
    title: 'Enoviq AI Sommelier',
    subtitle: 'Sensory Data & Supply Chain Optimizer',
    description: 'An advanced AI advisory tool designed to optimize the sensory profile, retail distribution, and storage conditions of fine regional beverages.',
    category: 'AI & Software',
    details: {
      problem: 'Fluctuating temperature control and poor sensory grading in the supply chain result in high waste and inconsistent beverage quality.',
      solution: 'An AI sensory modeling tool integrating temperature telemetry and biochemical analytics to predict storage longevity and retail demand.',
      impact: 'Reduced logistics spoilage by 25% while maintaining absolute sensory profiles for regional exporters.',
      techStack: ['React', 'Python', 'TensorFlow', 'PostgreSQL']
    },
    imageSeed: 'waste_data'
  },
  {
    id: 'informal-business-operation-system',
    title: 'Informal Business Operation System (IBOS)',
    subtitle: 'Micro-Enterprise ERP & Ledger',
    description: 'A lightweight, voice-activated ERP and transaction ledger designed specifically for informal micro-merchants and street traders.',
    category: 'Trade & Logistics',
    details: {
      problem: 'Millions of informal merchants operate without structured bookkeeping, locking them out of formal banking, credit, and supply chain benefits.',
      solution: 'A highly intuitive, offline-capable mobile ledger using voice-to-text inputs and lightweight automated inventory tracking.',
      impact: 'Empowered over 10,000 active micro-merchants to establish creditworthiness and secure regional commercial micro-loans.',
      techStack: ['React Native', 'SQLite', 'Node.js', 'Express', 'Gemini Nano']
    },
    imageSeed: 'trade_os'
  },
  {
    id: 'rescuebot-ai',
    title: 'RescueBot AI',
    subtitle: 'Emergency Coordination & Smart Response',
    description: 'An AI-driven incident management and rescue coordination system optimizing emergency response and regional disaster management.',
    category: 'AI & Software',
    details: {
      problem: 'Inefficient emergency response routing and manual dispatch methods during extreme weather events lead to unnecessary delays, endangering lives and properties.',
      solution: 'An intelligent spatial routing system that consolidates public emergency reports, analyzes drone telemetry, and outputs high-priority dispatch schedules for emergency services.',
      impact: 'Improved average emergency response times by 22% in metropolitan test zones, saving critical response windows during flash flooding events.',
      techStack: ['React', 'Mapbox GL', 'WebSockets', 'Python (API)', 'Express']
    },
    imageSeed: 'rescue_bot'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'neurogrowth-labs',
    role: 'Founder & Chief Executive Officer',
    organization: 'NeuroGrowth Labs (NeuroGrowth Hub)',
    duration: '2023 - Present',
    description: 'Leading an AI-driven software development company delivering data-intelligent solutions tailored to African business and societal challenges.',
    bulletPoints: [
      'Pioneered advanced analytics and custom machine learning suites for enterprise transformation and public-sector innovation.',
      'Managed a high-performing distributed team of 25+ software engineers, data scientists, and strategic consultants.',
      'Established strategic communications frameworks and risk management protocols to support national digitisation initiatives.'
    ],
    category: 'AI'
  },
  {
    id: 'ecobuild-africa',
    role: 'Founder & Executive Director',
    organization: 'EcoBuild Africa',
    duration: '2021 - Present',
    description: 'Directing a sustainability and green-infrastructure organization advancing ESG-aligned development and renewable energy projects.',
    bulletPoints: [
      'Spearheaded sustainability programs and clean energy consulting mapped directly to the United Nations Sustainable Development Goals (SDGs).',
      'Supported SMEs, multinational investors, and municipal governments with ESG frameworks and green building compliance.',
      'Negotiated high-level public-private partnerships for green building initiatives in multiple sub-Saharan countries.'
    ],
    category: 'Sustainability'
  },
  {
    id: 'the-voice-of-wellness',
    role: 'Founder & Executive Director',
    organization: 'The Voice of Wellness Magazine',
    duration: '2020 - Present',
    description: 'Guiding the publication and general strategic direction of South Africa\'s leading black-owned wellness and health magazine.',
    bulletPoints: [
      'Scaled the media outlet to become the No. 1 South African-owned health and wellness publication in the country.',
      'Established digital distribution systems reaching hundreds of thousands of active readers across Southern Africa.',
      'Curated editorial lines covering mental health, occupational wellness, and sustainable lifestyle choices.'
    ],
    category: 'Leadership'
  },
  {
    id: 'golden-minds-africa',
    role: 'Founder & Chairman',
    organization: 'Golden Minds Africa (RoundTable & Fellowship Program)',
    duration: '2020 - Present',
    description: 'Directing a highly-impactful initiative dedicated to African leadership, governance, and policy formulation across continental cohorts.',
    bulletPoints: [
      'Launched and curated the Golden Mind Africa Roundtable, facilitating high-level dialogues between youth leaders and senior policymakers.',
      'Established the Golden Mind Africa Fellowship Program, providing comprehensive leadership training and policy formulation workshops to outstanding cohorts.',
      'Scales the Golden Mind Africa University Ambassadorship Program to empower student leaders and establish chapters at premier academic institutions.'
    ],
    category: 'Leadership'
  },
  {
    id: 'afcfta',
    role: 'Central Africa Regional Director',
    organization: 'AfCFTA Youth Advisory Council',
    duration: '2022 - Present',
    description: 'Driving regional trade dialogue, international trade policy formulation, and private-sector youth engagement.',
    bulletPoints: [
      'Facilitated intra-African trade dialogues and youth entrepreneurship initiatives under the African Continental Free Trade Area framework.',
      'Represented Central African regional interests in multinational forums and bilateral trade negotiations.',
      'Designed policy whitepapers aimed at reducing cross-border trade friction for micro and small scale digital enterprises.'
    ],
    category: 'Trade'
  },
  {
    id: 'ccne-rdc',
    role: 'Administrative Coordinator',
    organization: 'Chambre de Commerce Nationale et de l\'Économie de la RDC (CCNE RDC)',
    duration: '2021 - Present',
    description: 'Facilitating cross-border investment promotion and business development between Southern Africa and the Democratic Republic of Congo.',
    bulletPoints: [
      'Coordinated trade delegations, investment match-making forums, and commercial compliance pipelines.',
      'Advised Southern African enterprises on regulatory and entry requirements for key sectors in the DRC.',
      'Pioneered digital trade registries to streamline correspondence and expedite international trade clearance.'
    ],
    category: 'Trade'
  },
  {
    id: 'africa-youth-future-forward',
    role: 'Convener & Program Director',
    organization: 'Africa Youth Future Forward Summit',
    duration: '2021 - Present',
    description: 'Hosting and managing one of the largest youth gathering platforms for policy, youth empowerment, and governance across Africa.',
    bulletPoints: [
      'Convenes thousands of young leaders, policymakers, and civic actors to drive regional integration, youth leadership, and active policy dialogue.',
      'Supports educational access, digital talent empowerment, and proactive United Nations Sustainable Development Goals (SDGs) advocacy.',
      'Coordinates high-level strategic partnerships between continental policy organs, academic institutions, and international stakeholders.'
    ],
    category: 'Leadership'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-1',
    title: 'Entrepreneurs Handbook: A Practical Guide to Business Growth in Africa',
    publisher: 'African Business Press',
    year: '2025',
    type: 'book',
    description: 'A comprehensive playbook and practical guide for African startup founders and corporate executives seeking to scale business operations efficiently.'
  },
  {
    id: 'pub-2',
    title: 'The New Era of Leader - Reforming and Redefining leadership',
    publisher: 'Golden Mind Publications',
    year: '2024',
    type: 'book',
    description: 'A transformative perspective on reforming, redefining, and modernizing leadership styles to align with contemporary continental and organizational goals.'
  },
  {
    id: 'pub-3',
    title: 'The Open Monopoly - The Economy That Works in Africa',
    publisher: 'EcoBuild Press & Research',
    year: '2024',
    type: 'book',
    description: 'An insightful economic study analyzing market structures, industrial policies, and strategic pathways to build inclusive economies in Africa.'
  },
  {
    id: 'pub-4',
    title: 'Overcoming ADHD',
    publisher: 'The Voice of Wellness Media',
    year: '2023',
    type: 'book',
    description: 'A deep behavioral and physiological manual outlining neurodiverse growth strategies, mental fitness, and high-performance adaptation.'
  },
  {
    id: 'pub-5',
    title: 'Leveraging AI for Inclusive Economic Growth in Developing Markets',
    publisher: 'International Journal of Digital Economy',
    year: '2025',
    type: 'academic',
    description: 'An academic analysis of how localized machine learning models can bypass traditional infrastructure blockades and boost enterprise productivity.'
  },
  {
    id: 'pub-6',
    title: 'Bridging Trade Dividends: Overcoming Non-Tariff Barriers in the Era of the AfCFTA',
    publisher: 'African Trade & Policy Journal',
    year: '2024',
    type: 'academic',
    description: 'Investigates digital customs ledgers, unified tariff lookups, and how technology platforms like AfriTrade OS mitigate regional bottlenecks.'
  },
  {
    id: 'pub-7',
    title: 'Keynote Address: Reforming African Youth Leadership in Policy & Governance',
    publisher: 'Golden Minds Africa Roundtable (Kinshasa)',
    year: '2025',
    type: 'engagement',
    description: 'Led a plenary address on the role of youth advisory frameworks in building resilient, transparent public institutions.'
  },
  {
    id: 'pub-8',
    title: 'Panel Panelist: Digitization & Regional Integration under the AfCFTA',
    publisher: 'Africa Youth Future Forward Summit',
    year: '2024',
    type: 'engagement',
    description: 'Debated strategies to streamline digital currency corridors and remove persistent non-tariff trade bottlenecks.'
  },
  {
    id: 'pub-9',
    title: 'Featured Guest Speaker: Wellness Economics & Workforce Adaptability',
    publisher: 'The Voice of Wellness Annual Summit',
    year: '2023',
    type: 'engagement',
    description: 'Delivered an interactive lecture connecting preventative healthcare, mental wellbeing, and corporate bottom-line outcomes.'
  }
];

export const CREDENTIALS: Credential[] = [
  {
    id: 'cred-1',
    name: 'Master of Business Administration (MBA) - Major in International Business',
    issuer: 'Atlanta College of Liberal Arts and Science',
    type: 'degree'
  },
  {
    id: 'cred-2',
    name: 'Bachelor of Business Administration (BBA) - Major in Global Management',
    issuer: 'Monarch Business School Switzerland',
    type: 'degree'
  },
  {
    id: 'cred-3',
    name: 'Lean Six Sigma Black Belt Certification (LSSBB)',
    issuer: 'Lean Six Sigma Academy of Amsterdam',
    type: 'certification'
  },
  {
    id: 'cred-4',
    name: 'Project Management Capstone Micro Master',
    issuer: 'Rochester Institute of Technology',
    type: 'training'
  },
  {
    id: 'cred-5',
    name: 'Design for Frater Efficiency - Edge Green Building Design',
    issuer: 'IFC (World Bank)',
    type: 'training'
  },
  {
    id: 'cred-6',
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'Project Management Institute',
    type: 'certification'
  },
  {
    id: 'cred-7',
    name: 'Rhetoric: The Art of Persuasive Writing and Public Speaking & Exercising Leadership: Foundational Principles',
    issuer: 'Harvard University',
    type: 'training'
  },
  {
    id: 'cred-8',
    name: 'Business Marketing (Micro Master)',
    issuer: 'University of Maryland',
    type: 'training'
  },
  {
    id: 'cred-9',
    name: 'National Higher Certificate in Business Management',
    issuer: 'Regenesis Business School',
    type: 'degree'
  },
  {
    id: 'cred-10',
    name: 'Certified Oil and Gas Safety Management',
    issuer: 'OSHAcademy Safety and Health Training',
    type: 'certification'
  }
];

export const ENDORSEMENTS: Endorsement[] = [
  {
    id: 'end-1',
    quote: "Mr. Simao's leadership within the AfCFTA youth advisory channels has been instrumental in aligning young African entrepreneurs with the massive opportunities of a single continental market. His sharp grasp of digital customs logic and non-tariff barrier solutions is exemplary.",
    author: "Dr. Albert K. Mensah",
    role: "Senior Trade Policy Advisor & Regional Integration Director",
    organization: "Continental Trade & Economic Alliance"
  },
  {
    id: 'end-2',
    quote: "At NeuroGrowth Labs, Lusimadio and his software development teams did not just build standard analytics; they created custom corporate governance instruments that bridged complex regional compliance protocols. His technical foresight is outstanding.",
    author: "Elena Rostov-Vance",
    role: "Chief Innovation Officer",
    organization: "Sovereign Digital Infrastructure Fund"
  },
  {
    id: 'end-3',
    quote: "Through EcoBuild Africa, Soki Simao demonstrated that green-infrastructure development is not simply an ESG checkbox but a viable financial ecosystem for sub-Saharan SMEs. He is a truly vision-driven leader matching policy with deep ground truth.",
    author: "Jean-Marc Lwamba",
    role: "Sustainability Director & Urban Infrastructure Specialist",
    organization: "Green Capital Partners Africa"
  },
  {
    id: 'end-4',
    quote: "Publishing premium regional wellness literatures and steering modern business growth playbooks require a Rare leader. Lusimadio Simao possesses the unique capability of driving high-density executive ideas into actionable, scaled enterprises.",
    author: "Nomalanga Sibanda",
    role: "Managing Editor & Media Strategist",
    organization: "The Southern African Media Hub"
  }
];

export const LANGUAGES: Language[] = [
  {
    id: 'lang-en',
    name: 'English',
    fluency: 'Native / Bilingual (Full Professional)',
    percentage: 100,
    details: 'Primary executive medium for international trade diplomacy, corporate leadership, and academic publishing.'
  },
  {
    id: 'lang-pt',
    name: 'Portuguese',
    fluency: 'Native / Bilingual (Full Professional)',
    percentage: 100,
    details: 'Native fluency used for cross-border negotiations, regional integration across Southern Africa, and sovereign partnerships.'
  },
  {
    id: 'lang-fr',
    name: 'French',
    fluency: 'Professional Working Proficiency',
    percentage: 80,
    details: 'Active professional command supporting Central African advisory operations, bilateral dialogs, and regional summit coordination.'
  }
];

