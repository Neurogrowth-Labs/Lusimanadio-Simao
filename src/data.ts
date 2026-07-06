import { Project, Experience, Publication, Credential, Endorsement, Language, SpeakingEngagement, Service, Nomination } from './types';

export const PERSONAL_INFO = {
  name: 'Lusimadio S Simao, MBA',
  title: 'Founder & CEO | Strategic Growth & AI Leader | Sustainability & Trade Advocate',
  bioBrief: 'A visionary African executive, entrepreneur, and strategist with extensive leadership experience across artificial intelligence, sustainable development, international trade, investment promotion, media, and governance.',
  bioFull: 'Mr. Lusimadio Soki Simao is widely recognized for founding and scaling impact-driven institutions that align innovation, policy, and inclusive economic growth across Africa. As an executive at the intersection of tech, environmental policy, and trade, his career is defined by strategic leadership, AI-driven innovation, and continental trade development to shape future-ready African institutions and globally competitive enterprises.',
  portraitPath: 'https://media.licdn.com/dms/image/v2/D4D03AQF97hhNCtJS0Q/profile-displayphoto-crop_800_800/B4DZoo4HDmKUAI-/0/1761622390771?e=1784160000&v=beta&t=ne2sUlqerAbBrARFVcXjws8263wGRCLIqh6Rl7wbtZo',
  calendlyUrl: 'https://calendly.com/simao-neurogrowthlabs/30min',
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
    imageSeed: 'ai_studio',
    link: 'https://studio.afritranslate.co.za'
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
    imageSeed: 'waste_data',
    link: 'https://cgwastedata.co.za'
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
    imageSeed: 'trade_os',
    link: 'https://Afritradeos.co.za'
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
    imageSeed: 'trade_os',
    link: 'https://Afriestate.co.za'
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
  },
  {
    id: 'asae-awards',
    role: 'Founder & Chairperson',
    organization: 'ASAE - Angola Southern Africa Awards Excellence',
    duration: '2026 - Present',
    description: 'Directing the premier regional recognition platform designed to honor outstanding merit, corporate leadership, and technological innovation across Angola and Southern Africa.',
    bulletPoints: [
      'Pioneered a prestigious bilateral awards ecosystem designed to celebrate excellence in private enterprise, sustainability initiatives, and technology sectors.',
      'Formulates vetting frameworks to validate outstanding executive and organizational contributions to regional economic growth.',
      'Bridges elite corporate networks, sovereign policy developers, and rising entrepreneurs across key Southern African corridors.'
    ],
    category: 'Leadership'
  },
  {
    id: 'elmwood-fields-alliance',
    role: 'Southern Africa Representative & Convener',
    organization: 'Elmwood Fields Leadership Alliance / Angola Southern Africa Pan African Conference',
    duration: '2025 - Present',
    description: 'Appointed to represent the leadership alliance in Southern Africa and serve as the convener of the Angola Southern Africa Pan African Conference, in joint strategic partnership with Neurogrowth Labs.',
    bulletPoints: [
      'Delivers elite leadership frameworks and policy workshops to C-Suite directors, political actors, and youth cohorts.',
      'Hosts and curates the annual Angola Southern Africa Pan African Conference to foster regional integration, trade alignment, and leadership reformation.',
      'Drives active programmatic collaboration between Neurogrowth Labs and Elmwood Fields to build scalable human-capital solutions.'
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
    type: 'degree',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-2',
    name: 'Bachelor of Business Administration (BBA) - Major in Global Management',
    issuer: 'Monarch Business School Switzerland',
    type: 'degree',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-3',
    name: 'Lean Six Sigma Black Belt Certification (LSSBB)',
    issuer: 'Lean Six Sigma Academy of Amsterdam',
    type: 'certification',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-4',
    name: 'Project Management Capstone Micro Master',
    issuer: 'Rochester Institute of Technology',
    type: 'training',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-5',
    name: 'Design for Frater Efficiency - Edge Green Building Design',
    issuer: 'IFC (World Bank)',
    type: 'training',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-6',
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'Project Management Institute',
    type: 'certification',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-7',
    name: 'Rhetoric: The Art of Persuasive Writing and Public Speaking & Exercising Leadership: Foundational Principles',
    issuer: 'Harvard University',
    type: 'training',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-8',
    name: 'Business Marketing (Micro Master)',
    issuer: 'University of Maryland',
    type: 'training',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-9',
    name: 'National Higher Certificate in Business Management',
    issuer: 'Regenesis Business School',
    type: 'degree',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cred-10',
    name: 'Certified Oil and Gas Safety Management',
    issuer: 'OSHAcademy Safety and Health Training',
    type: 'certification',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'
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

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    id: 'speak-1',
    title: 'AfCFTA Customs Integration & AI Summit 2026',
    event: 'African Union Digital Trade Assembly',
    date: 'September 14 - 16, 2026',
    location: 'Kigali, Rwanda',
    topic: 'Automating Cross-Border Compliance using AfriTrade OS and Machine Learning models.',
    category: 'Trade & Logistics',
    status: 'Upcoming'
  },
  {
    id: 'speak-2',
    title: 'African Green Building & Sustainable Finance Forum 2026',
    event: 'EcoBuild Africa Symposium',
    date: 'October 22 - 24, 2026',
    location: 'Nairobi, Kenya',
    topic: 'Sovereign ESG: Unlocking climate capital for sustainable sub-Saharan municipal waste & infrastructure projects.',
    category: 'Climate & Sustainability',
    status: 'Upcoming'
  },
  {
    id: 'speak-3',
    title: 'African Youth & Women in Tech Summit 2026',
    event: 'Global Advisory & Empowerment Initiative',
    date: 'November 05 - 07, 2026',
    location: 'Cape Town, South Africa',
    topic: 'Democratizing AI Leadership: Upskilling the next-generation workforce in the continental AI Decade.',
    category: 'Leadership',
    status: 'Upcoming'
  },
  {
    id: 'speak-4',
    title: 'SADC Sovereign Investment & Infrastructure Dialogue',
    event: 'Southern Africa Investment Promotion Council',
    date: 'December 10 - 12, 2026',
    location: 'Luanda, Angola',
    topic: 'Digital Registers & Decentralized Ledgers: Streamlining property registry systems & regional risk models.',
    category: 'AI & Tech',
    status: 'Upcoming'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'C-Suite AI & Strategic Growth Advisory',
    targetAudience: 'C-Suite',
    sectors: ['Artificial Intelligence', 'Logistics', 'Enterprise Software', 'Corporate Governance'],
    description: 'High-level strategic advisory helping executives, corporate boards, and directors plan and scale robust Enterprise AI engines, workflow automation models (Afritranste AI Studio), and custom quantitative risk software.',
    iconName: 'Cpu'
  },
  {
    id: 'srv-2',
    title: 'Sovereign ESG & Climate Finance Consulting',
    targetAudience: 'Sovereign & Govt',
    sectors: ['Climate & Sustainability', 'Waste Management', 'Green Infrastructure', 'Investment Promotion'],
    description: 'Partnering with developers, municipalities, and financial hubs to engineer carbon-credit compliant waste trading networks, ESG policies, and sustainable infrastructure frameworks (EcoBuild Africa).',
    iconName: 'Globe'
  },
  {
    id: 'srv-3',
    title: 'Cross-Border Logistics & AfCFTA Readiness Programs',
    targetAudience: 'Mid-Career',
    sectors: ['International Trade', 'Customs Operations', 'Digital Logistics'],
    description: 'Systematic educational readiness courses, digital customs tools optimization, and masterclasses to equip trade operators and corporate managers to trade smoothly across African borders.',
    iconName: 'Navigation'
  },
  {
    id: 'srv-4',
    title: 'Youth & Women Tech Upskilling Partnerships',
    targetAudience: 'Youth & Women',
    sectors: ['Artificial Intelligence', 'Fintech', 'Sovereign Digital Infrastructure'],
    description: 'Bespoke mentorship initiatives, full-stack academies, and tech partnerships targeting women-led startups and youth leaders to master high-density AI modeling, fintech solutions, and mesh software.',
    iconName: 'Users'
  },
  {
    id: 'srv-5',
    title: 'Micro-Enterprise ERP Advisory (Informal Retail & Trade)',
    targetAudience: 'Youth & Women',
    sectors: ['Informal Commerce', 'Fintech', 'Sovereign Economic Inclusivity'],
    description: 'Providing voice-activated financial ledger structures (IBOS) and micro-finance readiness training to help female market traders and youth merchants digitize their operations and secure capital.',
    iconName: 'Smartphone'
  }
];

export const NOMINATIONS: Nomination[] = [
  {
    id: 'nom-1',
    award: 'Mentor of the Year 2023',
    category: 'Mentorship & Volunteerism Excellence',
    year: '2023',
    organization: 'Mentorship and Volunteerism Excellence Awards',
    description: 'Recognized for outstanding mentorship contribution and dedication to shaping high-performance leaders, youth, and professional cohorts.'
  },
  {
    id: 'nom-2',
    award: 'SDGs 8 Excellence Award 2023',
    category: 'Sustainable Development & Decent Work',
    year: '2023',
    organization: 'Mentorship and Volunteerism Excellence Awards',
    description: 'Awarded for exceptional alignment of projects and youth upskilling programs to support decent economic growth, vocational training, and inclusive employment.'
  },
  {
    id: 'nom-3',
    award: 'Excellence in Mentoring Award 2023',
    category: 'Youth & Enterprise Guidance',
    year: '2023',
    organization: 'Mentorship and Volunteerism Excellence Awards',
    description: 'Honored for continuous support and impact-focused coaching in guiding early-stage startups and corporate executives across SADC corridors.'
  },
  {
    id: 'nom-4',
    award: 'Outstanding Volunteer Award 2023',
    category: 'Community Impact & Service',
    year: '2023',
    organization: 'Mentorship and Volunteerism Excellence Awards',
    description: 'Awarded in recognition of selflessness and extensive volunteer leadership in regional development and public-spirited community service programs.'
  },
  {
    id: 'nom-5',
    award: 'Sustainability Award 2023',
    category: 'Environmental & Social Governance',
    year: '2023',
    organization: 'Mentorship and Volunteerism Excellence Awards',
    description: 'Recognized for pioneering local and regional sustainable models that promote eco-consciousness and carbon reduction goals.'
  }
];


