import type { Product } from '@/lib/products'

type ProductBnOverlay = Partial<
  Pick<
    Product,
    | 'name'
    | 'description'
    | 'benefits'
    | 'packaging'
    | 'qualityNote'
    | 'faqs'
    | 'documents'
    | 'processSteps'
    | 'useCases'
    | 'trustBadges'
    | 'geoAnchor'
    | 'commercial'
  >
> & {
  specLabels?: Record<string, string>
  specValues?: Record<string, string>
  sourcing?: Partial<Product['sourcing']>
}

export const bnProductOverlays: Record<string, ProductBnOverlay> = {
  'sunflower-oil': {
    name: 'সূর্যামুখী তেল',
    description:
      'বিশ্বের সেরা উৎপাদকদের কাছ থেকে সংগৃহীত উচ্চমানের, হৃদয়-স্বাস্থ্যকর সূর্যামুখী তেল। ভিটামিন E ও স্বাস্থ্যকর চর্বিতে সমৃদ্ধ।',
    specLabels: {
      Purity: 'বিশুদ্ধতা',
      'Available Sizes': 'উপলব্ধ আকার',
      'Smoke Point': 'স্মোক পয়েন্ট',
      Color: 'রং',
    },
    specValues: {
      Purity: '১০০% খাঁটি সূর্যামুখী তেল',
      'Available Sizes': '১ লিটার ও ৫ লিটার পাত্র',
      'Smoke Point': '২৩০°C/৪৫০°F',
      Color: 'স্বচ্ছ, হালকা অ্যাম্বার রং',
    },
    benefits: [
      'ভিটামিন E ও স্বাস্থ্যকর চর্বিতে সমৃদ্ধ',
      'হৃদয়ের স্বাস্থ্যে সহায়ক',
      'অ্যান্টিঅক্সিডেন্ট ধারণ করে',
      'ত্বকের স্বাস্থ্যে উপকারী',
    ],
    packaging: ['১ লিটার PET বোতল', '৫ লিটার বোতল', '১৫ লিটার কার্টন বাক্স', 'কাস্টম কন্টেইনার'],
    sourcing: {
      countries: ['ইউক্রেন', 'রাশিয়া', 'আর্জেন্টিনা'],
      certifications: ['BSTI', 'ISO 22000', 'HACCP', 'COA প্রদত্ত'],
    },
  },
  'milk-powder': {
    name: 'স্কিমড দুগ্ধ পাউডার',
    description:
      'উচ্চ পুষ্টিগুণ ও ধারাবাহিক মানসহ প্রিমিয়াম স্কিমড দুগ্ধ পাউডার। দুগ্ধ প্রক্রিয়াকরণের জন্য আদর্শ।',
    specLabels: {
      Type: 'ধরন',
      'Protein Content': 'প্রোটিনের পরিমাণ',
      Moisture: 'আর্দ্রতা',
      'Fat Content': 'চর্বির পরিমাণ',
    },
    specValues: {
      Type: 'স্কিমড দুগ্ধ পাউডার',
      'Protein Content': '৩৪–৩৬%',
      Moisture: 'সর্বোচ্চ ৪%',
      'Fat Content': 'সর্বোচ্চ ১.৫%',
    },
    benefits: [
      'উচ্চ প্রোটিনের পরিমাণ',
      'দীর্ঘ মেয়াদ সংরক্ষণ',
      'সহজে পুনর্গঠনযোগ্য',
      'ধারাবাহিক মান',
    ],
    packaging: ['২৫ কেজি বহুস্তর কাগজের ব্যাগ', '৫০ কেজি ব্যাগ', 'কাস্টম ব্র্যান্ডিং'],
    sourcing: {
      countries: ['নিউজিল্যান্ড', 'অস্ট্রেলিয়া', 'নেদারল্যান্ডস'],
      certifications: ['Halal', 'ISO 22000', 'HACCP', 'COA প্রদত্ত'],
    },
  },
  almonds: {
    name: 'মার্কিন বাদাম',
    description:
      'স্বাস্থ্যসচেতন বাংলাদেশি বাজারের জন্য প্রিমিয়াম মার্কিন বাদাম। BSTI সম্মতি ও রেডিওঅ্যাক্টিভিটি যাচাইসহ।',
    specLabels: {
      Origin: 'উৎপত্তি',
      Grade: 'গ্রেড',
      Packaging: 'প্যাকেজিং',
      Certification: 'সার্টিফিকেশন',
    },
    specValues: {
      Origin: 'যুক্তরাষ্ট্র (California)',
      Grade: 'প্রিমিয়াম গ্রেড A',
      Packaging: '২৫ কেজি ভ্যাকুয়াম ব্যাগ',
      Certification: 'BSTI সম্মত, Halal উপলব্ধ',
    },
    benefits: [
      'প্রিমিয়াম মার্কিন উৎপত্তির নিরাপত্তা',
      'উচ্চ প্রোটিন ও স্বাস্থ্যকর চর্বি',
      'রিটেইল ও HRI-প্রস্তুত',
      'Ramadan ও উৎসবের চাহিদা',
    ],
    packaging: ['২৫ কেজি ভ্যাকুয়াম ব্যাগ', '৫০ কেজি বাল্ক ব্যাগ', 'কাস্টম রিটেইল প্যাক'],
    sourcing: {
      countries: ['যুক্তরাষ্ট্র'],
      certifications: ['BSTI সম্মত', 'Halal উপলব্ধ', 'অ্যাফ্লাটক্সিন পরীক্ষিত'],
    },
  },
  'medjool-dates': {
    name: 'মেজজুল খেজুর',
    description:
      'Ramadan প্রোগ্রাম ও স্বাস্থ্যকর স্ন্যাকিং রিটেইলের জন্য প্রিমিয়াম মেজজুল খেজুর। BSTI সম্মতি ও ১২+ মাস মেয়াদ।',
    specLabels: {
      Variety: 'জাত',
      Grade: 'গ্রেড',
      'Shelf Life': 'মেয়াদ',
      Certification: 'সার্টিফিকেশন',
    },
    specValues: {
      Variety: 'মেজজুল',
      Grade: 'প্রিমিয়াম গ্রেড A',
      'Shelf Life': '১২+ মাস (সিল প্যাক)',
      Certification: 'BSTI সম্মত, Halal',
    },
    benefits: [
      'Ramadan-এর চূড়া চাহিদা',
      'প্রিমিয়াম মধ্যবিত্ত অবস্থান',
      'দীর্ঘ মেয়াদ',
      'HRI ও রিটেইল-প্রস্তুত',
    ],
    packaging: ['৫ কেজি গিফট বক্স', '১০ কেজি কার্টন', '২০ কেজি বাল্ক কন্টেইনার'],
    sourcing: {
      countries: ['সৌদি আরব', 'জর্ডান', 'UAE'],
      certifications: ['BSTI সম্মত', 'Halal', 'প্রিমিয়াম গ্রেড'],
    },
  },
  potato: {
    name: 'প্রিমিয়াম আলু',
    description:
      'বাংলাদেশের সেরা খামার থেকে তাজা, উচ্চমানের আলু। রপ্তানিতে টারপলিন দ্বারা সুরক্ষিত।',
    specLabels: {
      Variety: 'জাত',
      Size: 'আকার',
      Quality: 'মান',
      Storage: 'সংরক্ষণ',
    },
    specValues: {
      Variety: 'Russet, Red, Yellow আলু',
      Size: '৫০–৮০ মি.মি. ব্যাস',
      Quality: 'গ্রেড A',
      Storage: 'তাপমাত্রা নিয়ন্ত্রিত',
    },
    benefits: [
      'স্থানীয় খামার থেকে তাজা',
      'উচ্চ পুষ্টিগুণ',
      'বহুমুখী রান্নার অপশন',
      'দীর্ঘ মেয়াদ',
    ],
    packaging: ['২৫ কেজি মেশ ব্যাগ', '৫০ কেজি পাটের ব্যাগ', 'টারপলিন সুরক্ষাসহ কাস্টম প্যাকেজিং'],
    sourcing: {
      countries: ['বাংলাদেশ'],
      certifications: ['BSTI', 'রপ্তানি মান', 'জৈব উপলব্ধ'],
    },
  },
  handicrafts: {
    name: 'হস্তশিল্প',
    description:
      'স্থানীয় শিল্প ও সাংস্কৃতিক ঐতিহ্য প্রদর্শনকারী প্রামাণিক বাংলাদেশি হস্তশিল্প।',
    specLabels: {
      Materials: 'উপাদান',
      Origin: 'উৎপত্তি',
      Quality: 'মান',
      Variety: 'বৈচিত্র্য',
    },
    specValues: {
      Materials: 'পাট, কাঠ, মাটি, বাঁশ',
      Origin: 'বাংলাদেশ',
      Quality: 'হস্তনির্মিত প্রিমিয়াম',
      Variety: 'বহুমুখী শিল্পকলা',
    },
    benefits: [
      'প্রামাণিক সাংস্কৃতিক ঐতিহ্য',
      'হস্তনির্মিত মান',
      'অনন্য ডিজাইন',
      'টেকসই উপাদান',
    ],
    packaging: ['কার্টন প্যাক', 'বাল্ক কন্টেইনার', 'কাস্টম রিটেইল প্যাকেজিং'],
    sourcing: {
      countries: ['বাংলাদেশ'],
      certifications: ['হস্তনির্মিত', 'ন্যায্য বাণিজ্য', 'রপ্তানি মান'],
    },
  },
  pulses: {
    name: 'ডাল',
    description:
      'বিশ্বের সেরা উৎপাদকদের কাছ থেকে প্রিমিয়াম মসুর, ছোলা ও অন্যান্য ডাল।',
    specLabels: {
      Types: 'ধরন',
      'Protein Content': 'প্রোটিনের পরিমাণ',
      Quality: 'মান',
      Storage: 'সংরক্ষণ',
    },
    specValues: {
      Types: 'মসুর, ছোলা, শিম, মটর',
      'Protein Content': 'উচ্চ প্রোটিনের পরিমাণ',
      Quality: 'গ্রেড A',
      Storage: 'আর্দ্রতা নিয়ন্ত্রিত',
    },
    benefits: [
      'উচ্চ পুষ্টিগুণ',
      'প্রোটিন ও ফাইবারে সমৃদ্ধ',
      'দীর্ঘ মেয়াদ',
      'বহুমুখী রান্নার ব্যবহার',
    ],
    packaging: ['২৫ কেজি পাটের ব্যাগ', '৫০ কেজি পাটের ব্যাগ', 'কাস্টম প্যাকেজিং'],
    sourcing: {
      countries: ['অস্ট্রেলিয়া', 'কানাডা', 'তুরস্ক', 'ভারত'],
      certifications: ['BSTI', 'ISO 22000', 'গ্রেড A', 'COA প্রদত্ত'],
    },
  },
  tarpaulin: {
    name: 'টারপলিন',
    description:
      'বিভিন্ন শিল্প ও বাণিজ্যিক প্রয়োগের জন্য টেকসই ও আবহাওয়া-প্রতিরোধী টারপলিন।',
    specLabels: {
      Material: 'উপাদান',
      Thickness: 'পুরুত্ব',
      Sizes: 'আকার',
      Waterproof: 'জলরোধী',
    },
    specValues: {
      Material: 'PE/PVC শক্তিশালী',
      Thickness: '১২–১৬ GSM',
      Sizes: '২×৩ মি. থেকে ২০×৩০ মি.',
      Waterproof: '১০০% জলরোধী',
    },
    benefits: [
      'আবহাওয়া-প্রতিরোধী',
      'দীর্ঘস্থায়ী',
      'UV সুরক্ষা',
      'খরচ-কার্যকর সুরক্ষা',
    ],
    packaging: ['রোল প্যাক', 'ভাঁজ করে প্যাক', 'কাস্টম আকার'],
    sourcing: {
      countries: ['চীন', 'ভারত', 'বাংলাদেশ'],
      certifications: ['ISO 9001', 'CE', 'UV সুরক্ষিত'],
    },
  },
  cumin: {
    name: 'জিরা',
    description:
      'স্বতন্ত্র গন্ধ ও স্বাদসহ প্রিমিয়াম জিরা, বিশ্বস্ত আন্তর্জাতিক সরবরাহকারীদের কাছ থেকে।',
    specLabels: {
      Purity: 'বিশুদ্ধতা',
      Origin: 'উৎপত্তি',
      Quality: 'মান',
      Aroma: 'গন্ধ',
    },
    specValues: {
      Purity: '১০০% খাঁটি জিরা',
      Origin: 'ভারত, ইরান, তুরস্ক, মিশর',
      Quality: 'আন্তর্জাতিক গ্রেড A',
      Aroma: 'সমৃদ্ধ ও তীব্র',
    },
    benefits: [
      'সমৃদ্ধ গন্ধ ও স্বাদ',
      'রান্নায় বহুমুখী',
      'সংরক্ষণে স্থিতিশীল',
      'ধারাবাহিক মান',
    ],
    packaging: ['২৫ কেজি PP ব্যাগ', '৫০ কেজি পাটের ব্যাগ', 'আর্দ্রতা বাধা লাইনার'],
    sourcing: {
      countries: ['ভারত', 'ইরান', 'তুরস্ক', 'মিশর'],
      certifications: ['Halal', 'ISO 22000', '১০০% খাঁটি', 'গ্রেড A'],
    },
  },
  sugar: {
    name: 'চিনি',
    description:
      'খাদ্য প্রক্রিয়াকরণ ও রান্নার জন্য আদর্শ প্রিমিয়াম refined সাদা চিনি।',
    specLabels: {
      Type: 'ধরন',
      Purity: 'বিশুদ্ধতা',
      Color: 'রং',
      Moisture: 'আর্দ্রতা',
    },
    specValues: {
      Type: 'ICUMSA 45 refined সাদা চিনি',
      Purity: '৯৯.৯% sucrose',
      Color: 'সাদা',
      Moisture: 'সর্বোচ্চ ০.০৪%',
    },
    benefits: [
      'উচ্চ বিশুদ্ধতা',
      'ধারাবাহিক মান',
      'দীর্ঘ মেয়াদ',
      'বহুমুখী ব্যবহার',
    ],
    packaging: ['৫০ কেজি PP ব্যাগ', '২৫ কেজি বহুস্তর ব্যাগ', 'বাল্ক কন্টেইনার'],
    sourcing: {
      countries: ['ব্রাজিল', 'ভারত', 'থাইল্যান্ড'],
      certifications: ['BSTI', 'ICUMSA 45', 'ISO 22000', 'COA প্রদত্ত'],
    },
  },
  'soyabean-oil': {
    name: 'সয়াবিন তেল',
    description:
      'উচ্চ পুষ্টিগুণ ও রান্নার বৈশিষ্ট্যসহ প্রিমিয়াম সয়াবিন তেল।',
    specLabels: {
      Purity: 'বিশুদ্ধতা',
      'Available Sizes': 'উপলব্ধ আকার',
      'Smoke Point': 'স্মোক পয়েন্ট',
      Color: 'রং',
    },
    specValues: {
      Purity: '১০০% খাঁটি সয়াবিন তেল',
      'Available Sizes': '১ লিটার ও ৫ লিটার পাত্র',
      'Smoke Point': '২৩২°C',
      Color: 'স্বচ্ছ, হালকা হলুদ',
    },
    benefits: [
      'Omega-3 ফ্যাটি অ্যাসিডে সমৃদ্ধ',
      'উত্তম রান্নার বৈশিষ্ট্য',
      'উচ্চ স্মোক পয়েন্ট',
      'বহুমুখী রান্নার ব্যবহার',
    ],
    packaging: ['১ লিটার PET বোতল', '৫ লিটার বোতল', 'বাল্ক কন্টেইনার'],
    sourcing: {
      countries: ['যুক্তরাষ্ট্র', 'ব্রাজিল', 'আর্জেন্টিনা'],
      certifications: ['BSTI', 'ISO 22000', 'HACCP', 'COA প্রদত্ত'],
    },
  },
  chickpeas: {
    name: 'ছোলা',
    description:
      'উচ্চ পুষ্টিগুণ ও রান্নার বৈশিষ্ট্যসহ প্রিমিয়াম ছোলা।',
    specLabels: {
      Type: 'ধরন',
      Protein: 'প্রোটিন',
      Quality: 'মান',
      Moisture: 'আর্দ্রতা',
    },
    specValues: {
      Type: 'Desi ও Kabuli জাত',
      Protein: 'উচ্চ প্রোটিনের পরিমাণ',
      Quality: 'গ্রেড A',
      Moisture: 'সর্বোচ্চ ১২%',
    },
    benefits: [
      'উচ্চ প্রোটিনের পরিমাণ',
      'ফাইবারে সমৃদ্ধ',
      'বহুমুখী রান্না',
      'দীর্ঘ মেয়াদ',
    ],
    packaging: ['২৫ কেজি PP ব্যাগ', '৫০ কেজি পাটের ব্যাগ', 'কাস্টম প্যাকেজিং'],
    sourcing: {
      countries: ['অস্ট্রেলিয়া', 'কানাডা', 'তুরস্ক'],
      certifications: ['Halal', 'ISO 22000', 'গ্রেড A', 'COA প্রদত্ত'],
    },
  },
  'soy-sauce': {
    name: 'সয় সস ও কন্ডিমেন্ট',
    description:
      'বাংলাদেশের সম্প্রসারিত খাদ্য প্রক্রিয়াকরণ ও HRI খাতের জন্য প্রিমিয়াম সয় সস। BSTI ও BFSA সম্মত।',
    specLabels: {
      Types: 'ধরন',
      Grade: 'গ্রেড',
      Certification: 'সার্টিফিকেশন',
      Target: 'লক্ষ্য খাত',
    },
    specValues: {
      Types: 'সয় সস, ভিনেগার, এশিয়ান কন্ডিমেন্ট',
      Grade: 'প্রিমিয়াম HRI গ্রেড',
      Certification: 'BSTI ও BFSA সম্মত',
      Target: 'HRI ও খাদ্য প্রক্রিয়াকরণ',
    },
    benefits: [
      'HRI খাত বিশেষজ্ঞতা',
      'বিশ্বব্যাপী ব্র্যান্ড সোর্সিং',
      'ধারাবাহিক মান সরবরাহ',
      'নিয়ন্ত্রক নথি অন্তর্ভুক্ত',
    ],
    packaging: ['১ লিটার বোতল', '৫ লিটার কন্টেইনার', '২০ লিটার বাল্ক ড্রাম'],
    sourcing: {
      countries: ['চীন', 'থাইল্যান্ড', 'জাপান'],
      certifications: ['BSTI সম্মত', 'BFSA মান', 'ISO 22000', 'Halal উপলব্ধ'],
    },
  },
}
