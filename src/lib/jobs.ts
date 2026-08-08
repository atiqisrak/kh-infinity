export interface JobPosition {
  id: string
  title: string
  department: string
  type: 'remote' | 'onsite' | 'hybrid'
  location: string
  experience: string
  salary: string
  description: string[]
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  status: 'active' | 'closed'
}

export const jobPositions: JobPosition[] = [
  {
    id: 'intl-trade-specialist',
    title: 'International Trade Specialist',
    department: 'Trade Operations',
    type: 'remote',
    location: 'Global Remote',
    experience: '3-5 years',
    salary: '$45,000 - $65,000',
    description: [
      'We are seeking an experienced International Trade Specialist to manage import-export operations and build relationships with global partners. This role requires deep understanding of international trade regulations, customs procedures, and logistics coordination.',
      'The ideal candidate will have proven experience in facilitating cross-border trade, handling documentation, and ensuring compliance with international trade standards.',
    ],
    requirements: [
      'Bachelor’s degree in International Business, Trade, or related field',
      '3-5 years of experience in international trade or import-export operations',
      'Strong knowledge of trade regulations, customs procedures, and documentation',
      'Experience with logistics coordination and freight forwarding',
      'Excellent communication skills in English and preferably additional languages',
      'Proficiency in trade management software and ERP systems',
      'Strong analytical and problem-solving skills',
    ],
    responsibilities: [
      'Manage end-to-end import-export operations for assigned trade routes',
      'Prepare and review trade documentation (Bills of Lading, Certificates of Origin, etc.)',
      'Coordinate with suppliers, freight forwarders, and customs brokers',
      'Ensure compliance with international trade regulations and standards',
      'Monitor shipment status and resolve logistics issues',
      'Build and maintain relationships with international partners',
      'Negotiate terms and pricing with suppliers and buyers',
      'Stay updated on trade regulations and market trends',
    ],
    benefits: [
      'Fully remote work opportunity',
      'Competitive salary with performance bonuses',
      'Health insurance and wellness programs',
      'Professional development opportunities',
      'International travel opportunities',
      'Flexible working hours',
      'Quarterly performance incentives',
    ],
    status: 'active',
  },
  {
    id: 'supply-chain-manager',
    title: 'Supply Chain Manager',
    department: 'Supply Chain',
    type: 'hybrid',
    location: 'Dhaka, Bangladesh / Remote',
    experience: '5-8 years',
    salary: '$50,000 - $75,000',
    description: [
      'Join our team as a Supply Chain Manager to optimize end-to-end supply chain operations for our import-export business. You will be responsible for managing inventory, coordinating logistics, and ensuring efficient flow of goods across borders.',
      'This role requires strategic thinking, strong negotiation skills, and the ability to manage complex supply chains spanning multiple countries.',
    ],
    requirements: [
      'Bachelor’s degree in Supply Chain, Logistics, or Business Administration',
      '5-8 years of experience in supply chain management, preferably in import-export',
      'Strong knowledge of international logistics and freight forwarding',
      'Experience with warehouse management and inventory optimization',
      'Proficiency in supply chain software and ERP systems',
      'Strong negotiation and vendor management skills',
      'Experience managing cross-functional teams',
    ],
    responsibilities: [
      'Develop and implement supply chain strategies to optimize operations',
      'Manage relationships with suppliers, distributors, and logistics partners',
      'Monitor inventory levels and coordinate procurement activities',
      'Optimize logistics costs while maintaining service levels',
      'Ensure compliance with international trade regulations',
      'Lead supply chain improvement projects',
      'Manage risk mitigation and contingency planning',
      'Analyze supply chain metrics and report on performance',
    ],
    benefits: [
      'Hybrid work arrangement (office + remote)',
      'Competitive salary package',
      'Performance-based bonuses',
      'Comprehensive health insurance',
      'International business travel opportunities',
      'Professional certification support',
      'Flexible vacation policy',
    ],
    status: 'active',
  },
  {
    id: 'sales-business-dev',
    title: 'Senior Sales & Business Development Executive',
    department: 'Sales & Business Development',
    type: 'remote',
    location: 'Global Remote',
    experience: '4-7 years',
    salary: '$40,000 - $60,000 + Commission',
    description: [
      'We are looking for a dynamic Sales & Business Development Executive to drive revenue growth and expand our global client base. This role combines sales excellence with strategic business development in the import-export trading sector.',
      'The ideal candidate will have a proven track record in B2B sales, excellent communication skills, and the ability to build strong relationships with international clients.',
    ],
    requirements: [
      'Bachelor’s degree in Business, Marketing, or related field',
      '4-7 years of experience in B2B sales, preferably in trading or import-export',
      'Proven track record of meeting and exceeding sales targets',
      'Strong communication and presentation skills',
      'Ability to build relationships with international clients',
      'Knowledge of import-export operations and trade processes',
      'CRM software proficiency',
      'Self-motivated and target-driven',
    ],
    responsibilities: [
      'Identify and develop new business opportunities in target markets',
      'Maintain and grow relationships with existing clients',
      'Prepare and deliver sales presentations to prospective clients',
      'Negotiate contracts and pricing with clients',
      'Collaborate with internal teams to ensure client satisfaction',
      'Monitor market trends and competitor activities',
      'Provide market feedback to product and operations teams',
      'Meet and exceed quarterly sales targets',
    ],
    benefits: [
      'Unlimited earning potential with competitive commission structure',
      'Fully remote work arrangement',
      'Base salary plus uncapped commissions',
      'Travel opportunities for client meetings',
      'Professional development budget',
      'Health insurance and wellness benefits',
      'Quarterly sales incentive trips',
    ],
    status: 'active',
  },
  {
    id: 'quality-control-specialist',
    title: 'Quality Control & Compliance Specialist',
    department: 'Quality Assurance',
    type: 'remote',
    location: 'Global Remote',
    experience: '3-5 years',
    salary: '$42,000 - $58,000',
    description: [
      'Join our Quality Assurance team as a Quality Control & Compliance Specialist. You will ensure that all products meet international quality standards and regulatory requirements for import-export operations.',
      'This role requires attention to detail, knowledge of quality standards (ISO, HACCP, BSTI), and experience in supplier audits.',
    ],
    requirements: [
      'Bachelor’s degree in Quality Management, Food Science, or related field',
      '3-5 years of experience in quality control, preferably in trading or manufacturing',
      'Knowledge of ISO 22000, HACCP, and international quality standards',
      'Experience with supplier audits and quality inspections',
      'Understanding of regulatory compliance and documentation',
      'Strong analytical and problem-solving skills',
      'Attention to detail and accuracy',
    ],
    responsibilities: [
      'Develop and implement quality control procedures and standards',
      'Conduct pre-shipment inspections and quality audits',
      'Work with suppliers to ensure compliance with quality standards',
      'Review and maintain quality documentation and certificates',
      'Handle non-conformance issues and corrective actions',
      'Train suppliers on quality requirements and standards',
      'Monitor quality metrics and prepare quality reports',
      'Ensure compliance with international trade regulations',
    ],
    benefits: [
      'Remote work option',
      'Competitive salary package',
      'Health and dental insurance',
      'Professional certification support',
      'International supplier site visits',
      'Annual performance bonus',
      'Training and development programs',
    ],
    status: 'active',
  },
  {
    id: 'logistics-coordinator',
    title: 'Logistics Coordinator',
    department: 'Operations',
    type: 'remote',
    location: 'Global Remote',
    experience: '2-4 years',
    salary: '$35,000 - $50,000',
    description: [
      'We are seeking a Logistics Coordinator to manage shipping, customs clearance, and delivery operations. This role involves coordinating with freight forwarders, customs brokers, and carriers to ensure smooth movement of goods.',
      'The ideal candidate should have experience in logistics coordination, understanding of shipping documentation, and excellent organizational skills.',
    ],
    requirements: [
      'Bachelor’s degree in Logistics, Supply Chain, or related field',
      '2-4 years of experience in logistics coordination',
      'Understanding of international shipping and customs procedures',
      'Experience with freight forwarding and carrier management',
      'Knowledge of shipping documentation (Bills of Lading, packing lists, etc.)',
      'Strong organizational and multitasking skills',
      'Proficiency in logistics software and tracking systems',
    ],
    responsibilities: [
      'Coordinate shipping arrangements with freight forwarders and carriers',
      'Prepare and process shipping documentation',
      'Track shipments and provide updates to clients',
      'Coordinate customs clearance activities',
      'Resolve logistics issues and delays',
      'Maintain relationships with logistics partners',
      'Optimize shipping costs and routes',
      'Ensure timely delivery of goods',
    ],
    benefits: [
      'Remote work arrangement',
      'Competitive entry-level salary',
      'Performance-based bonuses',
      'Health insurance coverage',
      'Career growth opportunities',
      'Flexible working hours',
      'Professional development support',
    ],
    status: 'active',
  },
  {
    id: 'trade-finance-analyst',
    title: 'Trade Finance Analyst',
    department: 'Finance & Operations',
    type: 'remote',
    location: 'Global Remote',
    experience: '3-6 years',
    salary: '$45,000 - $62,000',
    description: [
      'We are looking for a Trade Finance Analyst to manage financial transactions, letters of credit, payment terms, and financial risk management for our import-export operations.',
      'The ideal candidate should have experience in trade finance, understanding of international payment methods, and strong analytical skills.',
    ],
    requirements: [
      'Bachelor’s degree in Finance, Accounting, or International Business',
      '3-6 years of experience in trade finance or banking',
      'Understanding of Letters of Credit, documentary collections, and trade finance instruments',
      'Experience with payment terms and currency risk management',
      'Strong analytical and financial modeling skills',
      'Knowledge of international trade finance regulations',
      'Proficiency in financial software and ERP systems',
    ],
    responsibilities: [
      'Structure and negotiate trade finance solutions for transactions',
      'Prepare and process Letters of Credit and trade documents',
      'Manage payment terms with suppliers and buyers',
      'Analyze and mitigate financial risks',
      'Monitor currency exposure and hedging strategies',
      'Prepare financial reports and analysis',
      'Ensure compliance with trade finance regulations',
      'Work with banks and financial institutions',
    ],
    benefits: [
      'Fully remote work',
      'Competitive salary with bonus structure',
      'Comprehensive benefits package',
      'Professional development opportunities',
      'Stock option participation',
      'Quarterly bonus potential',
      'Health and retirement benefits',
    ],
    status: 'active',
  },
  {
    id: 'sre-intern',
    title: 'Site Reliability Engineer (SRE) Intern',
    department: 'Technology & Operations',
    type: 'onsite',
    location: 'Dhaka, Bangladesh',
    experience: 'Entry Level / Students',
    salary: 'up to BDT 15000',
    description: [
      'We are looking for a motivated SRE Intern to join our technology team. This is an excellent opportunity for students or recent graduates to gain hands-on experience in site reliability engineering, infrastructure management, and DevOps practices.',
      'As an SRE Intern, you will work alongside our experienced engineers to monitor system health, deploy infrastructure, and ensure the reliability of our digital platforms. This role offers valuable learning opportunities in a real-world trading environment.',
    ],
    requirements: [
      'Currently pursuing or recently completed Bachelor’s degree in Computer Science, Engineering, or related field',
      'Basic understanding of cloud platforms (AWS, Azure, or GCP)',
      'Familiarity with Linux/Unix systems',
      'Knowledge of containerization (Docker) and orchestration tools',
      'Understanding of version control systems (Git)',
      'Good problem-solving and analytical skills',
      'Eagerness to learn and work in a fast-paced environment',
    ],
    responsibilities: [
      'Assist in monitoring and maintaining system infrastructure and applications',
      'Participate in deployment automation and CI/CD pipeline development',
      'Help troubleshoot infrastructure issues and performance problems',
      'Contribute to documentation of systems and procedures',
      'Learn and apply best practices in infrastructure as code',
      'Assist in implementing monitoring and alerting solutions',
      'Participate in on-call rotations and incident response',
      'Support the team in capacity planning and performance optimization',
    ],
    benefits: [
      'On-site internship opportunity',
      'Mentorship from experienced SRE engineers',
      'Real-world experience with cloud infrastructure',
      'Certificate of completion',
      'Opportunity for full-time conversion',
      'Flexible schedule to accommodate studies',
      'Learning stipend and training resources',
    ],
    status: 'active',
  },
]

export function getJob(id: string): JobPosition | undefined {
  return jobPositions.find((job) => job.id === id)
}

export function getActiveJobs(): JobPosition[] {
  return jobPositions.filter((job) => job.status === 'active')
}

export function getJobsByDepartment(department: string): JobPosition[] {
  return jobPositions.filter((job) => job.department === department)
}

