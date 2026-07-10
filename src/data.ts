import { Project, Experience, Publication, Credential, Endorsement, Language, SpeakingEngagement, Service, Nomination, Membership } from './types';

export const PERSONAL_INFO = {
  name: 'Lusimanadio Soki Simao, MBA',
  title: 'Founder & CEO | Strategic Growth & AI Leader | Sustainability & Trade Advocate',
  bioBrief: 'A visionary African executive, entrepreneur, and strategist with extensive leadership experience across artificial intelligence, sustainable development, international trade, investment promotion, media, and governance.',
  bioFull: 'Mr. Lusimanadio Soki Simao, MBA is widely recognized for founding and scaling impact-driven institutions that align innovation, policy, and inclusive economic growth across Africa. As an executive at the intersection of tech, environmental policy, and trade, his career is defined by strategic leadership, AI-driven innovation, and continental trade development to shape future-ready African institutions and globally competitive enterprises.',
  portraitPath: 'https://media.licdn.com/dms/image/v2/D4D03AQF97hhNCtJS0Q/profile-displayphoto-crop_800_800/B4DZoo4HDmKUAI-/0/1761622390771?e=1784160000&v=beta&t=ne2sUlqerAbBrARFVcXjws8263wGRCLIqh6Rl7wbtZo',
  calendlyUrl: 'https://cal.eu/neurogrowthlabs',
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
    category: 'Business Communication',
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
    category: 'Construction Demolishing Waste Management',
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
    category: 'Intra Trade Digital Infrastructure',
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
    category: 'Fintech Infrastructure',
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
    category: 'REIT Management Infrastructure',
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
    category: 'EdTech Infrastructure',
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
    category: 'Network Management Infrastructure',
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
    category: 'Social and Community',
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
    category: 'Informal Business Digital Infrastructure',
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
    category: 'Autonomous Disaster Response Software',
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
    description: 'A comprehensive playbook and practical guide for African startup founders and corporate executives seeking to scale business operations efficiently.',
    link: 'https://www.amazon.com.br/ENTREPRENEURS-HANDBOOK-Practical-Mastering-Entrepreneur-ebook/dp/B0FXHLX3SG?ref_=ast_author_dp&th=1&psc=1'
  },
  {
    id: 'pub-2',
    title: 'The New Era of Leader - Reforming and Redefining leadership',
    publisher: 'Golden Mind Publications',
    year: '2024',
    type: 'book',
    description: 'A transformative perspective on reforming, redefining, and modernizing leadership styles to align with contemporary continental and organizational goals.',
    link: 'https://www.amazon.com.br/New-Era-Leaders-Transforming-Leadership-ebook/dp/B0FX72XNFH'
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
    description: 'A deep behavioral and physiological manual outlining neurodiverse growth strategies, mental fitness, and high-performance adaptation.',
    link: 'https://www.amazon.com.br/Overcoming-ADHD-Personal-Understanding-Managing-ebook/dp/B0FXHMGCPN?ref_=ast_author_dp&th=1&psc=1'
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
    title: 'Masterclass: Competing in the Global Market - Actionable Strategies for Seamless Continental and Global Market Expansion',
    publisher: 'EduLight International',
    year: '2026',
    type: 'engagement',
    description: 'A masterclass delivering operational blueprints, tariff navigation models, and market entry tactics for scaling African ventures globally.'
  },
  {
    id: 'pub-8',
    title: 'Workshop: The New Era of Leaders - Redefining Leadership for Modern Time Leaders',
    publisher: 'Africa Youth Future Forward Summit',
    year: '2025',
    type: 'engagement',
    description: 'Facilitated a leadership masterclass on modernizing executive values, digital-era adaptability, and team enablement frameworks.'
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
    name: 'Associate Member',
    issuer: 'CIM Chartered Managers Canada',
    type: 'certification',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQFgAy9QQf53iA/profile-treasury-image-shrink_8192_8192/B4DZ2s995THcAg-/0/1776723419732?e=1783980000&v=beta&t=M48mWsUUy-TiG52j2U0Fac71h-HRRpLG5b2my7PT7PI',
    description: 'This certificate recognizes that the recipient has successfully met the official membership requirements established by CIM Chartered Managers Canada. Consequently, the holder is granted all the professional rights, privileges, and status associated with being an Associate Member of the Institute.',
    year: '2026'
  },
  {
    id: 'cred-2',
    name: 'Oil and Gas Safety Management',
    issuer: 'OSHAcademy Occupational Safety & Health Training',
    type: 'certification',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQEPZddG4bdISg/profile-treasury-image-shrink_800_800/B4DZheYjx.GkAY-/0/1753930154726?e=1783980000&v=beta&t=h_XNBasDpMDs_Oimen5KERwySc6lBonkeLj0cSUwxIM',
    description: 'This certificate certifies that Lusimadio Soki Simao has successfully completed all academic and exam requirements for the Oil and Gas Safety Management training course. The program verifies proficiency in critical safety areas including hazard prevention, safety culture, writing safety policies, and conducting on-the-job training in compliance with industry standards.',
    year: '2025'
  },
  {
    id: 'cred-3',
    name: 'Introduction to OSHAcademy',
    issuer: 'OSHAcademy Occupational Safety & Health Training',
    type: 'training',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQET_ZSq6cCeLw/profile-treasury-image-shrink_800_800/B4DZhIcA3AHAAc-/0/1753561961665?e=1783980000&v=beta&t=q8c6vzIM7Rcd6xzOyo_BBTdHwlBHgvNtzMvB8OTYjS8',
    description: "This certificate verifies that the recipient has successfully completed all assignments and exam requirements for the 'Introduction to OSHAcademy' course. The training program covers essential system navigation, student dashboard management, and certification validation procedures required to effectively utilize OSHAcademy resources.",
    year: '2025'
  },
  {
    id: 'cred-4',
    name: 'ISO 14001:2015 Environmental Management System Awareness',
    issuer: 'The Knights of Safety',
    type: 'training',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQFb7Znfn3aKJg/profile-treasury-image-shrink_800_800/B4DZfm0Tt1GYAY-/0/1751924162809?e=1783980000&v=beta&t=o5EAGVU4qDLOWW_-N1HFi0dD8B3uYVgNy4iKabiTiDg',
    description: 'This certificate demonstrates successful completion of the ISO 14001:2015 Environmental Management System Awareness course by Lusimadio Soki Simao. Issued by The Knights of Safety, the credential validates foundational knowledge of international standards for environmental management systems.',
    year: '2025'
  },
  {
    id: 'cred-5',
    name: 'ISO 9001:2015 Quality Management System Foundations',
    issuer: 'The Knights of Safety',
    type: 'training',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQGkdj-Cmeq83A/profile-treasury-image-shrink_800_800/B4DZfh0PmLHMAY-/0/1751840259849?e=1783980000&v=beta&t=AIpd-UlGgZyujqY-5uu0RB5yWJRepHYNKhnzHRQdQIQ',
    description: 'This certificate confirms that Lusimadio Soki Simao has successfully completed the course on ISO 9001:2015 Quality Management System Foundations. Issued by The Knights of Safety, the credential verifies foundational knowledge and understanding of international quality management principles and standards.',
    year: '2025'
  },
  {
    id: 'cred-6',
    name: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    type: 'training',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQGJOwsZO8auJQ/profile-treasury-document-cover-images_480/B4DZVO1okjGkAw-/0/1740784439432?e=1783980000&v=beta&t=8jPKdQF5FNXK5WEJzO8IICcsdNh4BOm2GLM1MKNoW1o',
    description: 'This certificate verifies that the recipient has successfully completed the Data Analytics Essentials course offered through the Cisco Networking Academy program. The credential demonstrates foundational knowledge in data analytics concepts and methodologies as certified by the issuing organization.',
    year: '2025'
  },
  {
    id: 'cred-7',
    name: 'Designing for Greater Efficiency',
    issuer: 'IFC (World Bank)',
    type: 'training',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQEU4D0YJ16ouQ/profile-treasury-image-shrink_800_800/B4DZVIpItjHwAc-/0/1740680499559?e=1783980000&v=beta&t=GNBq582im1DqGQ1mbNQ32_RbLjqYFawPFJe-ov0edzM',
    description: "This certificate is awarded by the International Finance Corporation to verify the successful completion of the 'Designing for Greater Efficiency' online course. It recognizes the recipient's demonstrated knowledge of climate-responsive and resource-efficient building design.",
    year: '2025'
  },
  {
    id: 'cred-8',
    name: 'Introduction to Critical Infrastructure Protection',
    issuer: 'OPSWAT Academy',
    type: 'training',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQHLDf0QgJl05w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738932193620?e=1783980000&v=beta&t=KUbnqV2uoTyvTDqA2YXRQAveIeAdBh0Gh8Ta1VehheQ',
    description: 'This credential certifies that the recipient has successfully met the standards and requirements to graduate from the Introduction to Critical Infrastructure Protection (CIP) program. Authorized by OPSWAT Academy, this certification validates foundational knowledge in protecting critical infrastructure assets from modern cybersecurity threats.',
    year: '2025'
  },
  {
    id: 'cred-9',
    name: 'Certified Lean Six Sigma Black Belt',
    issuer: 'Six Sigma Academy Amsterdam',
    type: 'certification',
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQEHrng2stPeJg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732472115554?e=1783980000&v=beta&t=mx_rsnUYI_kDJW5bBw8vo9J4PRspNnr2cNGvnyoNras',
    description: 'This professional credential certifies successful completion of the curriculum and associated evaluation for the Certified Lean Six Sigma Black Belt program at the Six Sigma Academy Amsterdam. The program is an accredited activity carrying 15 CPD credits, validating advanced expertise in continuous improvement and process optimization methodologies.',
    year: '2024'
  },
  {
    id: 'cred-11',
    name: 'Certified John Maxwell Leadership Team Member',
    issuer: 'John Maxwell Leadership Academy',
    type: 'certification',
    description: 'This professional credential validates successful completion of the leadership licensing program. It certifies expertise in team leadership, executive coaching frameworks, and interpersonal development systems.',
    year: '2025'
  },
  {
    id: 'cred-12',
    name: 'Accredited TESOL/TEFL Teacher',
    issuer: 'World TESOL Academy',
    type: 'certification',
    description: 'An internationally accredited teaching credential validating proficiency in English language pedagogy, foreign language learning theories, lesson development, and classroom management strategies.',
    year: '2025'
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
    quote: "At NeuroGrowth Labs, Lusimanadio and his software development teams did not just build standard analytics; they created custom corporate governance instruments that bridged complex regional compliance protocols. His technical foresight is outstanding.",
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
    quote: "Publishing premium regional wellness literatures and steering modern business growth playbooks require a Rare leader. Lusimanadio Soki Simao possesses the unique capability of driving high-density executive ideas into actionable, scaled enterprises.",
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
  },
  {
    id: 'srv-6',
    title: 'Green Building Consulting - EDGE',
    targetAudience: 'Sovereign & Govt',
    sectors: ['Climate & Sustainability', 'Green Building Standards', 'Resource Efficiency', 'Carbon-Reduction Modeling'],
    description: 'Providing technical expertise, carbon-reduction modeling, and compliance audits aligned with IFC EDGE standards to certify climate-responsive, resource-efficient properties.',
    iconName: 'Building'
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
  },
  {
    id: 'nom-6',
    award: 'African Entrepreneurs and Business Professionals Award 2023',
    category: 'Entrepreneurship & Business Leadership',
    year: '2023',
    organization: 'City Scope Africa',
    description: 'Recognized for outstanding entrepreneurship, corporate strategy, and business excellence across the African continent.'
  },
  {
    id: 'nom-7',
    award: 'Caballero Universal Angola 2025',
    category: 'Cultural Diplomacy & International Representation',
    year: '2025',
    organization: 'Caballero Universal - International Male Pageant Organization',
    description: 'Appointed as the national representative to promote Angolan culture, leadership excellence, and social development initiatives on the global stage.'
  }
];

export const MEMBERSHIPS: Membership[] = [
  {
    id: 'mb-1',
    role: 'Permanent Advisory Seat Holder',
    organization: 'African Union ECOSOCC under the Africa Youth Forum International'
  },
  {
    id: 'mb-2',
    role: 'Associate Member',
    organization: 'Charter Managers Canada - CIM'
  },
  {
    id: 'mb-3',
    role: 'Member',
    organization: 'South Africa AI Association'
  }
];



