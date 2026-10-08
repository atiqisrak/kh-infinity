// ─── Product FAQs and references ───────────────────────────────────────────
// Answer-first buyer questions (rendered on the product page and emitted as
// FAQPage schema for search and AI answer engines) plus authoritative external
// references. Keep answers short, factual and self-contained: each one should
// make sense quoted on its own. Every reference URL was checked before adding.

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductReference {
  label: string;
  href: string;
}

interface ProductExtras {
  faqs: ProductFaq[];
  references: ProductReference[];
}

const WCO_8524 = {
  label: "WCO — HS 2022 heading 8524 (flat panel display modules)",
  href: "https://www.wcotradetools.org/en/harmonized-system/2022/en/168524",
};
const NBR_TARIFF = { label: "NBR — Bangladesh customs tariff schedule", href: "https://nbr.gov.bd/taxtype/tariff-schedule/eng" };

const EXTRAS: Record<string, ProductExtras> = {
  "iphone-displays": {
    faqs: [
      {
        question: "What is the difference between Soft OLED, Hard OLED and Incell iPhone screens?",
        answer:
          "Soft OLED uses a flexible OLED panel and is the closest aftermarket match to the original screen. Hard OLED uses a rigid OLED panel: true OLED colour at a lower price, with a slightly thicker glass stack. Incell is an LCD with the touch layer built in — the lowest-cost grade, with less contrast and higher power use than OLED.",
      },
      {
        question: "Will an aftermarket screen show a message on the iPhone?",
        answer:
          "Yes. On recent iPhones, any non-Apple display shows an \"Unknown Part\" or display message in Settings, and True Tone may be unavailable. The phone keeps working normally; the message is informational. Tell customers before the repair.",
      },
      {
        question: "Which iPhone models does K.H. Infinity supply screens for?",
        answer:
          "iPhone X through iPhone 17 Pro Max, from supplier brands DD, GX, JK, RJ and ZY, in Soft OLED, Hard OLED, Incell FHD and Incell HD grades. The full model list is in the catalogue on this page.",
      },
      {
        question: "What HS code are iPhone replacement displays imported under in Bangladesh?",
        answer:
          "K.H. Infinity imports iPhone display assemblies under HS 8524.91.00 (flat panel display modules). Duty and VAT follow the current Bangladesh First Schedule; we calculate the full landed cost on every quote.",
      },
    ],
    references: [
      { label: "Apple Support — About genuine iPhone displays", href: "https://support.apple.com/en-us/HT210321" },
      { label: "Apple Support — iPhone parts and service history", href: "https://support.apple.com/en-us/102658" },
      { label: "iFixit — iPhone repair guides", href: "https://www.ifixit.com/Device/iPhone" },
      WCO_8524,
    ],
  },
  "android-displays": {
    faqs: [
      {
        question: "Should I buy an OLED or Incell screen for a Samsung or Pixel repair?",
        answer:
          "Use OLED when the phone shipped with OLED and has an in-display fingerprint sensor — optical sensors usually do not work through an Incell or LCD replacement. Incell is cheaper and suits budget repairs where the customer accepts lower contrast.",
      },
      {
        question: "What does \"with frame\" mean on an Android screen listing?",
        answer:
          "A screen with frame comes pre-mounted in the phone's middle frame, so the technician moves the internals across instead of separating glued glass. It costs more but is faster and less risky to fit.",
      },
      {
        question: "Why does the exact model number matter?",
        answer:
          "Android phones are sold in regional variants (for example Galaxy SM-A166B and SM-A166P) that can differ in connector or frame. Confirm the model number in Settings or on the SIM tray label before ordering.",
      },
      {
        question: "Which Android brands does K.H. Infinity supply?",
        answer:
          "Samsung Galaxy, Google Pixel, OnePlus, Realme, Xiaomi / Redmi / POCO, Honor, Huawei and Motorola, in OLED/AMOLED, Incell/TFT and LCD grades. Browse the catalogue on this page by brand and panel type.",
      },
    ],
    references: [
      { label: "Samsung — Self-repair with genuine parts", href: "https://www.samsung.com/us/support/self-repair/" },
      { label: "iFixit — Genuine Google Pixel parts", href: "https://www.ifixit.com/Parts/Google_Phone" },
      { label: "iFixit — Samsung Galaxy A repair guides", href: "https://www.ifixit.com/Device/Samsung_Galaxy_A" },
      WCO_8524,
    ],
  },
  "phone-batteries": {
    faqs: [
      {
        question: "What documents do phone batteries need for import into Bangladesh?",
        answer:
          "Lithium-ion batteries are dangerous goods. Each shipment needs a UN38.3 test summary, a safety data sheet (MSDS/SDS) and correct Class 9 marking, alongside the commercial invoice and packing list. K.H. Infinity supplies all of these with every battery shipment.",
      },
      {
        question: "What is a diagnostic (TI) iPhone battery?",
        answer:
          "A diagnostic-compatible (TI solution) battery is an aftermarket cell whose management chip reports battery health and cycle count in iOS Settings. A standard aftermarket cell often shows no health reading. Behaviour can vary by iOS version.",
      },
      {
        question: "Which battery grade should a repair shop stock?",
        answer:
          "Genuine service-pack cells for premium repairs, diagnostic (TI) cells for iPhone owners who check battery health, high-capacity aftermarket cells for budget repairs, and ORG-grade cells for Android. Most shops stock two grades per popular model.",
      },
      {
        question: "Can phone batteries be shipped by air?",
        answer:
          "Batteries shipped on their own (UN3480) can only fly on cargo aircraft, at no more than 30% state of charge, under IATA Packing Instruction 965. Rules change with each IATA DGR edition, so confirm with the forwarder before booking.",
      },
    ],
    references: [
      { label: "IATA — Lithium batteries guidance", href: "https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/" },
      { label: "Apple Support — About genuine iPhone batteries", href: "https://support.apple.com/en-us/103269" },
      { label: "Apple Support — iPhone battery and performance", href: "https://support.apple.com/en-us/101575" },
      { label: "ICAO — Dangerous goods", href: "https://www.icao.int/safety/DangerousGoods/Pages/default.aspx" },
    ],
  },
  "ipad-displays": {
    faqs: [
      {
        question: "What is the difference between an iPad LCD and an LCD + digitizer assembly?",
        answer:
          "An LCD-only panel replaces the display underneath the touch glass, which suits non-laminated iPads such as the base iPad models. An LCD + digitizer assembly is laminated glass and display in one part — required for iPad Air, iPad mini and iPad Pro, and faster to fit.",
      },
      {
        question: "How do I find the right iPad model before ordering a screen?",
        answer:
          "Check the A-number on the back case or in Settings > General > About (tap the part number to reveal the model number). WiFi and Cellular versions of the same iPad have different A-numbers.",
      },
      {
        question: "Which iPad generations does K.H. Infinity supply displays for?",
        answer:
          "iPad 2 to iPad 10, iPad Air 1 to iPad Air 6 (M2), iPad mini 2 to iPad mini 7, and iPad Pro 9.7-inch, 11-inch and 12.9-inch generations. See the catalogue on this page for each listing.",
      },
    ],
    references: [
      { label: "Apple Support — Identify your iPad model", href: "https://support.apple.com/en-us/108043" },
      { label: "Apple Support — Find the model number of your device", href: "https://support.apple.com/en-us/106343" },
      { label: "iFixit — iPad repair guides", href: "https://www.ifixit.com/Device/iPad" },
      WCO_8524,
    ],
  },
  "macbook-parts": {
    faqs: [
      {
        question: "Why do MacBook parts have to match the A-number?",
        answer:
          "MacBooks with the same marketing name, such as \"13-inch MacBook Pro 2020\", can be different machines with different displays, top cases and batteries. The A-number printed on the bottom case identifies the exact model, so parts are listed and ordered by A-number.",
      },
      {
        question: "What MacBook display grades are available?",
        answer:
          "Premium new assemblies, refurbished assemblies and OEM-pull (used original) assemblies, plus LCD panels only for shops that rebuild displays. Grade is shown on each catalogue listing.",
      },
      {
        question: "Do replacement parts work on Apple silicon MacBooks?",
        answer:
          "Yes, but on Apple silicon Macs running recent macOS, some replaced parts may show as unknown in System Information until calibrated with Apple's Repair Assistant. The part still works.",
      },
    ],
    references: [
      { label: "Apple Support — Identify your MacBook Pro model", href: "https://support.apple.com/en-us/108052" },
      { label: "Apple Support — Identify your MacBook Air model", href: "https://support.apple.com/en-us/102869" },
      { label: "Apple Support — Repair Assistant for Mac", href: "https://support.apple.com/en-us/123128" },
      { label: "Apple — Self Service Repair", href: "https://support.apple.com/self-service-repair" },
    ],
  },
  "charging-accessories": {
    faqs: [
      {
        question: "What is a GaN charger?",
        answer:
          "A GaN charger uses gallium nitride transistors instead of silicon. They switch faster and run cooler, so a GaN charger delivers the same wattage in a much smaller body — a 65W GaN charger can be close to the size of an old 5W cube.",
      },
      {
        question: "What is USB Power Delivery (USB PD)?",
        answer:
          "USB Power Delivery is the USB-IF fast-charging standard for USB-C. Charger and device negotiate voltage and current; USB PD 3.1 allows up to 240W. Most modern phones and laptops charge fastest on a PD charger.",
      },
      {
        question: "How can a wholesaler avoid dangerous counterfeit chargers?",
        answer:
          "Buy from factories that supply test reports and CE/RoHS documentation, and check samples for fuses, proper creepage distance between mains and USB sides, and honest output ratings. Investigations have found most fake chargers fail basic electrical safety tests.",
      },
    ],
    references: [
      { label: "USB-IF — USB Charger (USB Power Delivery)", href: "https://www.usb.org/usb-charger-pd" },
      {
        label: "Electrical Safety First — Fake phone charger investigation",
        href: "https://www.electricalsafetyfirst.org.uk/news-and-insights/beware-of-dodgy-phone-chargers-watchdog-investigation/",
      },
      { label: "IATA — Lithium batteries (power banks) guidance", href: "https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/" },
      NBR_TARIFF,
    ],
  },
};

export function getProductExtras(id: string): ProductExtras {
  return EXTRAS[id] ?? { faqs: [], references: [] };
}
