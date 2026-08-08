export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingBody: string;
  issueDate: string;
  expiryDate?: string;
  certificateNumber: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    issuingBody: "International Organization for Standardization",
    issueDate: "2025-09-20",
    certificateNumber: "ISO-BD-2025-001",
    description:
      "Quality Management System certification demonstrating our commitment to excellence.",
  },
  {
    id: "trade-license",
    name: "Trade License Certificate",
    issuingBody: "Dhaka South City Corporation",
    issueDate: "2024-01-15",
    certificateNumber: "TL-2024-001234",
    description:
      "Authorized to engage in import-export trade activities in Bangladesh.",
  },
  {
    id: "import-export-certificate",
    name: "Import-Export Certificate",
    issuingBody: "Chief Controller of Imports and Exports",
    issueDate: "2024-02-10",
    certificateNumber: "IEC-2024-567890",
    description:
      "Licensed to conduct international trade operations across multiple product categories.",
  },
];

export const awards: Award[] = [
  {
    id: "excellence-trade-2025",
    title: "Excellence in International Trade",
    organization: "Bangladesh International Chamber of Commerce",
    date: "2025-06-15",
    description:
      "Recognized for outstanding performance in facilitating international trade and strong supplier relationships.",
  },
  {
    id: "sustainable-business-2024",
    title: "Sustainable Business Practices Award",
    organization: "Bangladesh Green Business Council",
    date: "2024-11-20",
    description:
      "Acknowledged for commitment to environmental responsibility and sustainable sourcing practices.",
  },
  {
    id: "best-trading-company",
    title: "Best Trading Company of the Year",
    organization: "Dhaka Chamber of Commerce & Industry",
    date: "2024-09-10",
    description:
      "Voted as the top trading company demonstrating excellence in international business operations.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ahmed Hassan",
    company: "Global Sourcing Solutions Ltd.",
    role: "CEO",
    quote:
      "K.H. Infinity has been our trusted partner for over 5 years. Their expertise in international trade and attention to detail has helped us streamline our supply chain operations significantly.",
  },
  {
    id: "testimonial-2",
    name: "Lisa Thompson",
    company: "Premium Food Imports Inc.",
    role: "Procurement Director",
    quote:
      "Working with K.H. Infinity has transformed our import process. They handle all the complex documentation and compliance requirements, allowing us to focus on growing our business.",
  },
  {
    id: "testimonial-3",
    name: "Rajesh Kumar",
    company: "Asia Pacific Trading Co.",
    role: "Managing Director",
    quote:
      "The team at K.H. Infinity truly understands international trade. Their proactive approach and problem-solving skills have saved us time and money on multiple occasions.",
  },
  {
    id: "testimonial-4",
    name: "Fatima Ali",
    company: "Middle East Trading Group",
    role: "Operations Manager",
    quote:
      "Exceptional service and reliability. K.H. Infinity consistently delivers on their promises and goes above and beyond to ensure our shipments arrive on time and in perfect condition.",
  },
];

export function getCertifications(): Certification[] {
  return certifications;
}

export function getAwards(): Award[] {
  return awards;
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
