export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  category: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "importing-from-china-to-bangladesh-2026",
    title: "Importing from China to Bangladesh in 2026–27: Duties, What's Surging, and the APTA Rate Most Importers Miss",
    excerpt:
      "China–Bangladesh trade hit US$12.8 billion in H1 2026 alone. Here is the full picture for FY2026–27: duty structure for electronics and machinery, the APTA preferential rate walkthrough, LCL vs FCL decision framework for SMEs, and what the new Chattogram China Economic Zone means for your supply chain.",
    author: {
      name: "Farid Ahmed",
      role: "Senior China Trade Analyst",
      image: "/images/team/farid-ahmed.webp",
    },
    category: "Trade Insights",
    date: "2026-10-01",
    image: "/images/blog/china-bangladesh-imports-2026.webp",
    tags: [
      "china imports bangladesh",
      "importing from china",
      "NBR customs duty 2026",
      "APTA preferential rate",
      "electronics import bangladesh",
      "SME import solutions",
      "Chittagong port",
      "LCL FCL bangladesh",
    ],
    content: `
      <p class="mb-4">China has been Bangladesh's largest import partner for 16 consecutive years — and FY2026–27 looks set to deepen that dependency further. <a href="https://www.tbsnews.net/bangladesh/china-bangladesh-trade-reaches-us128b-first-half-2026-embassy-1559396" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">Bilateral trade reached US$12.8 billion in just the first half of 2026</a>, a 10.6% increase year-on-year according to the Chinese Embassy in Dhaka. China now accounts for roughly 26% of Bangladesh's total imports. For B2B importers in Dhaka, understanding the current duty structure, the APTA preferential rate mechanism, and which categories are growing fastest is the difference between a profitable shipment and an expensive surprise at Chittagong port.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">What Bangladesh Is Actually Buying from China Right Now</h2>
      <p class="mb-4">The composition of Bangladesh's China imports has shifted significantly over the past three years. Textile articles and man-made fabrics still dominate at over 40% of total value, but two categories are now growing at pace:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80"><strong>Electrical and electronic goods:</strong> <a href="https://oec.world/en/profile/bilateral-product/electrical-parts/reporter/bgd" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">Chinese electrical exports to Bangladesh reached US$2.31 billion in 2024</a> (OEC World / UN COMTRADE). Electronic integrated circuits surged 53% in monthly import volumes in 2025, driven by domestic smartphone assembly brands such as Walton and Symphony requiring imported components.</li>
        <li class="text-[#06131d]/80"><strong>Solar panels and green energy equipment:</strong> 614 shipments recorded between March 2025 and February 2026 totalling US$22.93 million (Export Genius trade data). NBR exempts solar panel imports from supplementary duty — making this one of the most cost-efficient import categories from China right now.</li>
        <li class="text-[#06131d]/80"><strong>Consumer gadgets and phone parts:</strong> Alibaba and AliExpress Business have become the primary discovery platforms for Bangladeshi SMEs sourcing small electronics, phone displays, and gadget accessories. Integrated circuits and display assemblies are the two highest-volume sub-categories.</li>
        <li class="text-[#06131d]/80"><strong>Capital machinery:</strong> Textile looms, pharmaceutical equipment, and automated assembly units account for approximately 24% of total Chinese imports. Bangladesh's garment sector capital upgrade cycle remains a steady pull.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Duty Calculation Most Importers Get Wrong</h2>
      <p class="mb-4">The headline customs duty rate is rarely what an importer actually pays. For electronics (HS Chapter 85), the <a href="https://www.thedailystar.net/business/bangladesh-budget-2025-26/news/what-are-the-likely-tax-and-duty-measures-fy26-3907731" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">FY2026 NBR Total Tax Incidence (TTI)</a> stacks as follows:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80"><strong>Customs Duty (CD):</strong> 25%</li>
        <li class="text-[#06131d]/80"><strong>Regulatory Duty (RD):</strong> 3%</li>
        <li class="text-[#06131d]/80"><strong>Supplementary Duty (SD):</strong> 0% (removed on most electronics sub-categories in FY26)</li>
        <li class="text-[#06131d]/80"><strong>Value Added Tax (VAT):</strong> 15%</li>
        <li class="text-[#06131d]/80"><strong>Advance Income Tax (AIT):</strong> 5%</li>
      </ul>
      <p class="mb-4">Effective TTI on a landed cost basis: approximately 52–58% depending on sub-category. NBR's FY26 budget reform removes supplementary duty on 622 product lines and proposes zero import duty on 100 raw material categories — verify your HS code against the updated First Schedule before filing.</p>

      <div class="bg-orange-50 border-l-4 border-[#fa6a25] p-5 mb-6 rounded-r-xl">
        <p class="font-semibold text-[#0b2c3d] mb-1">FY2026–27 Reform Note</p>
        <p class="text-[#06131d]/80">NBR is aligning import duties for 60 products with WTO Bound Duty in three phases of 20 products each. If you import machinery or electronic sub-assemblies, check whether your HS code falls in any of the three tranches — it could meaningfully reduce your TTI.</p>
      </div>

      <h2 class="text-2xl font-bold mt-8 mb-4">The APTA Form: A Preferential Rate Most SMEs Never Claim</h2>
      <p class="mb-4">Bangladesh is a signatory to the Asia-Pacific Trade Agreement (APTA). Under APTA, qualifying goods imported from China attract a preferential customs duty rate — sometimes 5–10 percentage points below the standard MFN rate. Yet the vast majority of Bangladeshi SME importers never claim it because they are unaware of the Form A requirement at Chittagong customs.</p>
      <p class="mb-4">To claim the APTA preferential rate:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80">Request a valid <strong>APTA Certificate of Origin (Form A)</strong> from your Chinese supplier before shipment. The supplier must obtain it from the local Chamber of Commerce or CCPIT in China.</li>
        <li class="text-[#06131d]/80">Submit the Form A at Chittagong Customs along with your Bill of Entry. It must be original (not a photocopy) and match the invoice exactly.</li>
        <li class="text-[#06131d]/80">Verify your product's HS code is in the APTA concession schedule — not all chapters qualify. Chapter 85 electronics and Chapter 84 machinery have broad coverage.</li>
        <li class="text-[#06131d]/80">Declare the APTA origin claim on the Bill of Entry under the correct preference code.</li>
      </ul>
      <p class="mb-6">If you have been importing from China for years without Form A, you have almost certainly been overpaying duty. K.H. Infinity's <a href="/services/customs" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">customs clearance support team</a> can walk through the APTA documentation checklist with you before your next shipment.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Seven Pain Points at Chittagong — and How to Avoid Them</h2>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li class="text-[#06131d]/80"><strong>LC documentation mismatches.</strong> Discrepancies between the commercial invoice, packing list, and Bill of Lading are the single largest cause of customs delays. Ensure quantity, weight, and description match exactly across all three documents before the vessel sails.</li>
        <li class="text-[#06131d]/80"><strong>BTRC approval bottleneck.</strong> Electronics including mobile phones, routers, and telecom equipment require Bangladesh Telecommunications Regulatory Commission (BTRC) type approval before customs clearance. BTRC lead times are unpredictable — apply early and track the approval number.</li>
        <li class="text-[#06131d]/80"><strong>IRC requirement for new importers.</strong> Importers without a valid Import Registration Certificate (IRC) cannot open Letters of Credit at Bangladeshi banks. New market entrants often discover this too late.</li>
        <li class="text-[#06131d]/80"><strong>FX friction for SMEs.</strong> Bank wire transfers to Chinese suppliers carry high intermediary fees and unfavorable BDT/CNY conversion. Explore approved B2B fintech corridors, but only through licensed channels to stay compliant with Bangladesh Bank FX regulations.</li>
        <li class="text-[#06131d]/80"><strong>APTA Form under-utilisation.</strong> As detailed above — the single most commonly missed cost-saving mechanism for China imports.</li>
        <li class="text-[#06131d]/80"><strong>Alibaba MOQ mismatch.</strong> Alibaba targets enterprise buyers. AliExpress Business is more accessible for smaller orders but payment confirmation delays remain. For consolidated LCL imports under US$25,000, a <a href="/services/sme-import-solutions" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">managed consolidated import programme</a> reduces MOQ friction significantly.</li>
        <li class="text-[#06131d]/80"><strong>Quality at origin.</strong> Without a pre-shipment inspection or a sourcing agent at the factory, counterfeit or substandard goods — especially electronics — are a recurring problem. Budget for a third-party inspection on first orders from any new Chinese supplier.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">LCL vs. FCL: The SME Decision Framework</h2>
      <p class="mb-4">The choice between Less-than-Container Load (LCL) and Full Container Load (FCL) has a direct impact on landed cost and lead time:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80"><strong>LCL is typically cost-effective under US$25,000 cargo value</strong> — your goods are consolidated with other shipments. Lead times are longer (consolidation + deconsolidation at Chittagong), and there is a higher risk of damage during handling.</li>
        <li class="text-[#06131d]/80"><strong>FCL makes sense above US$25,000–30,000</strong> — faster port clearance, lower damage risk, and unit economics improve sharply above this threshold.</li>
        <li class="text-[#06131d]/80">For Bangladesh SMEs importing from Alibaba for the first time, KHI's <a href="/services/sme-import-solutions" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">SME Import Solutions programme</a> consolidates multiple SME orders into a single FCL, giving small buyers FCL economics on LCL volumes.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Chattogram China Economic Zone: What It Means for 2027 and Beyond</h2>
      <p class="mb-6">The China Economic and Industrial Zone in Chattogram launched in July 2026 with a US$500 million investment target. Initially focused on electronics, IT, biomedicine, and green energy manufacturing, this zone will — within two to three years — create a domestic supply of goods that Bangladesh currently imports from China. For importers planning their 2027–28 sourcing strategy, tracking which product categories move into domestic production first is essential to avoiding stranded inventory and adapting procurement timelines.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Get the China Import Process Right</h2>
      <p class="mb-4">K.H. Infinity is a direct B2B importer with in-house NBR customs clearance, APTA documentation support, and a consolidated import programme for Bangladesh SMEs sourcing from China. Whether you are importing electronics components, machinery, or consumer goods, our team handles the full clearance and documentation workflow so you are not navigating Chittagong customs alone.</p>
      <p class="mb-4"><a href="/quote" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">Request a China import quote</a> or <a href="/services/sme-import-solutions" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">explore our SME consolidated import programme</a>.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Key Sources</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-sm">
        <li class="text-[#06131d]/70"><a href="https://www.tbsnews.net/bangladesh/china-bangladesh-trade-reaches-us128b-first-half-2026-embassy-1559396" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">TBS News: China–Bangladesh trade reaches US$12.8B in H1 2026 — Chinese Embassy Dhaka</a></li>
        <li class="text-[#06131d]/70"><a href="https://oec.world/en/profile/bilateral-product/electrical-parts/reporter/bgd" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">OEC World / UN COMTRADE: Bangladesh electrical imports data</a></li>
        <li class="text-[#06131d]/70"><a href="https://www.thedailystar.net/business/bangladesh-budget-2025-26/news/what-are-the-likely-tax-and-duty-measures-fy26-3907731" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">The Daily Star: FY2026 budget tax and duty measures — NBR</a></li>
        <li class="text-[#06131d]/70"><a href="https://www.eximpedia.app/blog/bangladesh-imports-data-with-active-importers" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">Eximpedia: Bangladesh imports data 2025–26</a></li>
      </ul>
    `,
  },
  {
    id: "india-bangladesh-imports-2026",
    title: "India to Bangladesh Imports in 2026–27: SAFTA, Land Ports, and What's on the Rise",
    excerpt:
      "India exported US$9.73 billion to Bangladesh in FY2025–26 — and trade kept surging even as political relations cooled. The complete guide for FY2026–27: SAFTA Form A walkthrough, Benapole vs Bhomra port comparison, seasonal import calendar, and the motorcycle parts sourcing opportunity most Dhaka distributors are missing.",
    author: {
      name: "Nusrat Jahan",
      role: "India–Bangladesh Trade Specialist",
      image: "/images/team/nusrat-jahan.webp",
    },
    category: "Trade Insights",
    date: "2026-10-01",
    image: "/images/blog/india-bangladesh-trade-2026.webp",
    tags: [
      "india imports bangladesh",
      "importing from india",
      "SAFTA Form A",
      "Benapole port",
      "Bhomra port",
      "motorcycle parts import",
      "india bangladesh trade 2026",
      "land port clearance",
    ],
    content: `
      <p class="mb-4">Bangladesh–India trade is one of the most politically charged yet commercially resilient corridors in South Asia. <a href="https://thediplomat.com/2025/10/why-bangladesh-india-trade-is-surging-despite-strong-anti-india-sentiment/" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">The Diplomat's October 2025 analysis</a> captures the paradox precisely: anti-India sentiment surged after the 2024 political transition, yet <a href="https://www.ibef.org/indian-exports/india-bangladesh-trade" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">India exported US$9.73 billion to Bangladesh in FY2025–26</a> (through February 2026) and bilateral trade for the full year hit US$13.51 billion. The trade does not care about the politics — because Bangladesh's garment sector, pharmaceutical supply chain, and motorcycle industry are structurally dependent on Indian supply. For FY2026–27 importers, the opportunity is in optimising the landed cost through SAFTA, choosing the right port, and riding the categories that are actually growing.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">What Bangladesh Buys from India — and Why It Cannot Stop</h2>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li class="text-[#06131d]/80"><strong>Cotton yarn and fabrics — the structural dependency.</strong> <a href="https://www.tbsnews.net/economy/rmg/why-bangladeshs-rmg-turns-imported-yarn-fabrics-despite-local-supply-1047421" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">India supplies 82% of Bangladesh's total yarn imports</a> — a US$1.85 billion category that grew 31.1% year-on-year in CY2024. Bangladesh's ready-made garment sector, which generates 84% of the country's export earnings, cannot substitute Indian yarn at scale. This is not a trend; it is a structural reality.</li>
        <li class="text-[#06131d]/80"><strong>Motorcycle and auto parts — a growing import opportunity.</strong> <a href="https://tradingeconomics.com/india/exports/bangladesh/parts-accessories-motor-vehicles-headings-8701-8705" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">India exported US$93.22 million in auto and motorcycle parts to Bangladesh in 2024</a>. India supplies 94% of Bangladesh's motorcycle and scooter imports. With Bangladesh's motorcycle fleet expanding rapidly in Dhaka, Chittagong, and secondary cities, demand for spare parts — oil tanks, chain sprockets, brake assemblies, engine filters — is rising faster than local availability.</li>
        <li class="text-[#06131d]/80"><strong>Pharmaceutical APIs and formulations.</strong> <a href="https://tradingeconomics.com/india/exports/bangladesh/pharmaceutical-products" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">India exported US$128.89 million in pharmaceutical products to Bangladesh in 2025</a> (UN COMTRADE). Indian generic APIs are a critical input for Bangladesh's domestic drug manufacturing industry and cannot easily be sourced elsewhere at equivalent price-to-quality ratios.</li>
        <li class="text-[#06131d]/80"><strong>Petroleum products, FMCG, and construction materials.</strong> Refined petroleum remains India's largest single export line to Bangladesh by value. Lentils, onions, spices, and edible oils are highly seasonal and price-sensitive. Construction materials — steel, iron, cement clinker — track Bangladesh's infrastructure spending cycle.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Benapole vs. Bhomra: Which Port for Your Goods?</h2>
      <p class="mb-4">Bangladesh has two primary land ports for India trade. Choosing the right one affects clearance time, cost, and reliability:</p>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li class="text-[#06131d]/80"><strong>Benapole-Petrapole ICP</strong> is the largest bilateral land crossing and handles roughly 30% of all land-based India–Bangladesh trade. <a href="https://www.tbsnews.net/economy/benapole-port-still-trade-slump-imports-down-75746-tonnes-1297256" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">Import volumes were 20.38 lakh tonnes in 2024</a>, down slightly from 21.14 lakh tonnes in 2023. Average customs clearance time is 2–4 days due to infrastructure constraints and periodic congestion. Best for: FMCG, produce, consumer goods destined for Dhaka and the southwest corridor.</li>
        <li class="text-[#06131d]/80"><strong>Bhomra Land Port</strong> has grown steadily — FY25 throughput reached Tk3,406.95 crore with 10.23% YoY growth. Clearance times are generally faster for smaller consignments. Best for: construction materials, machinery parts, and cargo originating from West Bengal or Odisha industrial clusters.</li>
        <li class="text-[#06131d]/80"><strong>Sea route via Kolkata port</strong> remains the best option for heavy goods (steel, capital machinery) where land port weight limits or congestion would add cost. Kolkata–Chittagong sea transit is typically 3–5 days.</li>
      </ul>
      <p class="mb-6"><strong>Key risk in 2025–26:</strong> India's port restrictions barring Bangladeshi ready-made garments, processed food, plastic products, and wooden furniture from entering via land ports changed the truck-load economics for bilateral traders. Return trucks are harder to fill, raising the effective freight cost per tonne for importers using those same routes.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">SAFTA Form A: The Preferential Duty Most Importers Never Claim</h2>
      <p class="mb-4">Under the South Asian Free Trade Area (SAFTA) agreement, qualifying goods imported from India attract preferential customs duty rates — typically significantly below the MFN rate. Yet a large proportion of Bangladeshi importers do not claim SAFTA benefits because of documentation gaps or unfamiliarity with the Form A process.</p>
      <p class="mb-4">How to claim SAFTA preferential duty:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80">Request a <strong>SAFTA Certificate of Origin (Form A)</strong> from your Indian supplier. The supplier obtains this from the Export Inspection Council or relevant issuing authority in India.</li>
        <li class="text-[#06131d]/80">The Form A must be original, signed, and match the invoice, packing list, and Bill of Lading exactly. Any discrepancy will cause it to be rejected at Benapole or Bhomra customs.</li>
        <li class="text-[#06131d]/80">Check India's Sensitive List — approximately 25 product categories are excluded from SAFTA duty-free treatment. Your HS code must not appear on the Sensitive List for the preferential rate to apply.</li>
        <li class="text-[#06131d]/80">Declare the SAFTA origin preference on your Bill of Entry at Bangladesh customs. Your customs agent must know which preference code to use.</li>
      </ul>
      <p class="mb-6">KHI's <a href="/services/customs" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">customs clearance team</a> regularly handles SAFTA Form A verification and can flag errors before your consignment reaches the border — avoiding rejected claims and re-assessment delays.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Seasonal Import Calendar for FY2026–27</h2>
      <p class="mb-4">India–Bangladesh trade is heavily seasonal for food commodities. Planning purchases around these windows avoids price spikes and availability gaps:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80"><strong>October – January:</strong> Onion and produce imports surge as Bangladesh's domestic post-monsoon supply gap opens. Indian harvest timing drives Benapole volumes sharply upward.</li>
        <li class="text-[#06131d]/80"><strong>February – April:</strong> Cotton yarn imports peak ahead of the pre-Eid garment production rush. Book Indian yarn suppliers and LC capacity early — spot rates tighten in March.</li>
        <li class="text-[#06131d]/80"><strong>November – February:</strong> Petroleum and LPG demand rises with winter industrial and heating cycles.</li>
        <li class="text-[#06131d]/80"><strong>October – March:</strong> Construction materials track the dry-season construction window. Plan steel and cement clinker orders for October arrival to take advantage of project mobilisation demand.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Key Risks to Watch in FY2026–27</h2>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li class="text-[#06131d]/80"><strong>India's food export bans.</strong> India has periodically restricted exports of wheat, sugar, and rice since 2022 to manage domestic inflation. These bans create sudden supply gaps for Bangladeshi food importers. Maintaining alternative origin options (Ukraine/Argentina for wheat, Brazil/Thailand for sugar) is now a risk management necessity, not a luxury.</li>
        <li class="text-[#06131d]/80"><strong>Anti-dumping duties on Bangladeshi jute.</strong> In September 2026, India imposed fresh anti-dumping duties of US$59–US$445 per tonne on jute yarn and twine, US$88 on hessian, and US$283 on sacking bags. <a href="https://www.thedailystar.net/business/news/india-imposes-fresh-anti-dumping-duties-bangladesh-jute-goods-4285161" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">This signal of political friction is worth monitoring</a> — if retaliatory measures follow, land port clearance dynamics could tighten further.</li>
        <li class="text-[#06131d]/80"><strong>Perishable loss risk at Benapole.</strong> Average 2–4 day clearance times mean perishable imports — onions, fresh produce — carry meaningful spoilage risk during peak congestion periods. Insurance coverage and cold-chain handoff arrangements at the border should be confirmed before shipment.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Motorcycle and Auto Parts: The Fastest-Growing Import Opportunity</h2>
      <p class="mb-4">India supplies 94% of Bangladesh's motorcycle and scooter imports, and the spare parts market is growing in proportion. With motorcycle registrations rising in Dhaka, Chittagong, Sylhet, and secondary cities, demand for consumable parts — oil tanks, chain and sprocket sets, brake pads, engine filters — is outpacing local distributor inventory.</p>
      <p class="mb-4">For importers entering this category:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-[#06131d]/80">Verify <strong>BIS or ISI certification</strong> for safety-critical parts (brake components, fuel tanks). Indian-certified parts carry significantly lower BSTI scrutiny at Bangladesh customs.</li>
        <li class="text-[#06131d]/80">Confirm <strong>OEM fitment documentation</strong> with your Indian supplier — part numbers, compatible models, and year ranges. Mismatched parts are the leading cause of returns in this category.</li>
        <li class="text-[#06131d]/80">HS Chapter 87.14 covers most motorcycle parts. Verify the TTI for your specific sub-heading against the current Bangladesh Customs Tariff — rates vary between original equipment parts and aftermarket.</li>
        <li class="text-[#06131d]/80">K.H. Infinity is expanding into consolidated motorcycle parts imports from India. <a href="/quote" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">Contact us</a> if you are a Dhaka or Chittagong distributor looking for a cleared, door-delivered supply.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Start Your India Import the Right Way</h2>
      <p class="mb-4">K.H. Infinity handles in-house NBR customs clearance, SAFTA Form A verification, and consolidated LCL imports from India for Bangladesh B2B buyers. Our team knows Benapole and Bhomra clearance timelines, knows which categories India restricts on short notice, and provides Total Tax Incidence (TTI) transparency upfront — so your cost model is accurate before your goods move.</p>
      <p class="mb-4"><a href="/quote" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">Request an India import quote</a> or speak to our <a href="/services/customs" class="text-[#fa6a25] underline font-medium hover:text-[#d9531a]">customs and trade support desk</a>.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Key Sources</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-sm">
        <li class="text-[#06131d]/70"><a href="https://www.ibef.org/indian-exports/india-bangladesh-trade" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">IBEF: India–Bangladesh Trade Relations FY2025–26</a></li>
        <li class="text-[#06131d]/70"><a href="https://thediplomat.com/2025/10/why-bangladesh-india-trade-is-surging-despite-strong-anti-india-sentiment/" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">The Diplomat (Oct 2025): Why Bangladesh–India trade is surging despite anti-India sentiment</a></li>
        <li class="text-[#06131d]/70"><a href="https://www.tbsnews.net/economy/rmg/why-bangladeshs-rmg-turns-imported-yarn-fabrics-despite-local-supply-1047421" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">TBS News: Bangladesh RMG sector yarn imports — India's 82% share</a></li>
        <li class="text-[#06131d]/70"><a href="https://www.tbsnews.net/economy/benapole-port-still-trade-slump-imports-down-75746-tonnes-1297256" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">TBS News: Benapole port trade volumes 2024</a></li>
        <li class="text-[#06131d]/70"><a href="https://tradingeconomics.com/india/exports/bangladesh/parts-accessories-motor-vehicles-headings-8701-8705" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">Trading Economics / UN COMTRADE: India auto and motorcycle parts exports to Bangladesh</a></li>
        <li class="text-[#06131d]/70"><a href="https://www.thedailystar.net/business/news/india-imposes-fresh-anti-dumping-duties-bangladesh-jute-goods-4285161" target="_blank" rel="noopener noreferrer" class="text-[#fa6a25] underline hover:text-[#d9531a]">The Daily Star: India anti-dumping duties on Bangladesh jute goods (Sep 2026)</a></li>
      </ul>
    `,
  },
  {
    id: "exporter-guide-bangladesh",
    title: "The Exporter's Guide to Bangladesh: 5 Products to Source Beyond Apparel",
    excerpt:
      "Discover diverse sourcing opportunities in Bangladesh beyond RMG. Explore jute, leather, agro-products, and other growing export sectors.",
    author: {
      name: "Sarah Chen",
      role: "International Trade Specialist",
      image: "/images/team/sarah-chen.webp",
    },
    category: "Product Spotlights",
    date: "2025-01-10",
    image: "/images/blog/bangladesh-textile-success.webp",
    tags: ["bangladesh exports", "sourcing", "jute", "leather", "agro-products", "international trade"],
    content: `
      <p class="mb-4">Bangladesh's export landscape extends far beyond ready-made garments. Discover five dynamic product categories that are reshaping international trade opportunities.</p>

      <h2 class="text-2xl font-bold mb-4">1. Jute and Jute Goods</h2>
      <p class="mb-6">Bangladesh is the world's largest exporter of jute, offering sustainable alternatives to synthetic packaging materials. From jute bags and carpets to eco-friendly textiles, the jute industry continues to expand globally.</p>

      <h2 class="text-2xl font-bold mb-4">2. Leather and Leather Products</h2>
      <p class="mb-6">With a strong foothold in footwear and accessories, Bangladesh's leather sector is gaining international recognition for quality craftsmanship and competitive pricing.</p>

      <h2 class="text-2xl font-bold mb-4">3. Agricultural Products</h2>
      <p class="mb-6">The country's rich agricultural sector offers a variety of commodities including rice, fish, prawns, and fresh produce that meet international quality standards.</p>
    `,
  },
  {
    id: "import-guide-bangladesh",
    title: "How to Import Goods to Bangladesh: A 5-Step Sourcing & Compliance Guide",
    excerpt:
      "Navigate the import process to Bangladesh with confidence. Learn about L/C procedures, customs documentation, and compliance requirements for seamless importing.",
    author: {
      name: "Michael Zhang",
      role: "Import-Export Compliance Manager",
      image: "/images/team/michael-zhang.webp",
    },
    category: "Guides",
    date: "2025-01-08",
    image: "/images/blog/bangladesh-imports-2025.webp",
    tags: ["importing", "compliance", "sourcing", "bangladesh trade", "customs", "documentation"],
    content: `
      <p class="mb-4">Importing goods to Bangladesh requires understanding local regulations, documentation, and compliance requirements. Follow these five essential steps to streamline your import process.</p>

      <h2 class="text-2xl font-bold mb-4">Step 1: Determine Import Eligibility</h2>
      <p class="mb-6">First, verify that your product is permitted for import under current Bangladeshi regulations. Check for any restrictions, bans, or special licensing requirements.</p>

      <h2 class="text-2xl font-bold mb-4">Step 2: Secure Import Registration</h2>
      <p class="mb-6">Obtain necessary registration with the Registrar of Joint Stock Companies and Enterprises (RJSC) and obtain an Import Registration Certificate from the Chief Controller of Imports and Exports.</p>

      <h2 class="text-2xl font-bold mb-4">Step 3: Process Letter of Credit</h2>
      <p class="mb-6">Open an L/C through an authorized dealer bank, ensuring all terms and conditions align with your supplier agreement.</p>
    `,
  },
  {
    id: "lc-vs-tt-payment",
    title: "L/C vs. T/T: Choosing the Right Payment Term for Your International Trade Deal",
    excerpt:
      "Understand the differences between Letters of Credit and Telegraphic Transfers. Learn which payment method best suits your trade transaction and risk profile.",
    author: {
      name: "Emma Green",
      role: "Trade Finance Specialist",
      image: "/images/team/emma-green.webp",
    },
    category: "Trade Insights",
    date: "2025-01-05",
    image: "/images/blog/trade-regulations-2025.webp",
    tags: ["letter of credit", "telegraphic transfer", "payment terms", "trade finance", "international trade"],
    content: `
      <p class="mb-4">Selecting the appropriate payment method is crucial for international trade success. Compare L/C and T/T options to make informed decisions that protect both buyers and suppliers.</p>

      <h2 class="text-2xl font-bold mb-4">Letter of Credit (L/C)</h2>
      <p class="mb-6">L/Cs provide security through bank guarantees, ensuring payment only upon proper documentation. Ideal for high-value transactions or new trading relationships where trust needs to be established.</p>

      <h2 class="text-2xl font-bold mb-4">Telegraphic Transfer (T/T)</h2>
      <p class="mb-6">T/T offers faster processing and lower fees, making it suitable for established partnerships with proven track records. However, it provides less protection for both parties.</p>

      <h2 class="text-2xl font-bold mb-4">When to Choose Each</h2>
      <p class="mb-6">Consider transaction value, relationship history, and risk tolerance when selecting your payment method.</p>
    `,
  },
  {
    id: "bangladesh-jute-sustainable",
    title: "Why Bangladeshi Jute is the Sustainable Sourcing Choice for 2026",
    excerpt:
      "Explore how Bangladesh's jute industry is leading the sustainable sourcing movement. Learn about eco-friendly alternatives and market opportunities.",
    author: {
      name: "Rahul Sharma",
      role: "Sustainable Trade Analyst",
      image: "/images/team/rahul-sharma.webp",
    },
    category: "Sustainable Practices",
    date: "2025-01-03",
    image: "/images/blog/bangladesh-jute-export.webp",
    tags: ["jute", "sustainability", "eco-friendly", "bangladesh exports", "green materials"],
    content: `
      <p class="mb-4">As global sustainability becomes a priority, Bangladeshi jute emerges as a leading eco-friendly material solution for businesses worldwide.</p>

      <h2 class="text-2xl font-bold mb-4">The Environmental Advantage</h2>
      <p class="mb-6">Jute is 100% biodegradable and recyclable, requiring minimal water and pesticides during cultivation. This makes it a superior alternative to synthetic materials.</p>

      <h2 class="text-2xl font-bold mb-4">Growing Market Demand</h2>
      <p class="mb-6">With increasing environmental regulations and consumer awareness, demand for jute products continues to rise across packaging, textiles, and construction industries.</p>

      <h2 class="text-2xl font-bold mb-4">Quality and Versatility</h2>
      <p class="mb-6">Bangladeshi jute offers exceptional durability and adaptability, suitable for everything from high-strength packaging to fashionable accessories.</p>
    `,
  },
  {
    id: "nbr-customs-update-2025",
    title: "NBR Customs Update: What the Latest 2025 SROs Mean for Your Import Duties",
    excerpt:
      "Stay updated on recent NBR statutory regulatory orders affecting import duties and customs procedures. Understand how these changes impact your trade operations.",
    author: {
      name: "James Wilson",
      role: "International Trade Documentation Specialist",
      image: "/images/team/james-wilson.webp",
    },
    category: "Trade Insights",
    date: "2024-12-28",
    image: "/images/blog/trade-regulations-2025.webp",
    tags: ["NBR", "customs", "import duties", "SRO", "regulations", "compliance"],
    content: `
      <p class="mb-4">The National Board of Revenue (NBR) has issued multiple Statutory Regulatory Orders (SROs) in 2025 that significantly impact import duties and customs procedures.</p>

      <h2 class="text-2xl font-bold mb-4">Key Changes in 2025</h2>
      <p class="mb-6">SRO updates have affected duties across various product categories including textile machinery, consumer goods, and industrial equipment.</p>

      <h2 class="text-2xl font-bold mb-4">Impact on Import Costs</h2>
      <p class="mb-6">Review how updated tariff structures may affect your import costs and pricing strategies for 2025 and beyond.</p>

      <h2 class="text-2xl font-bold mb-4">Compliance Requirements</h2>
      <p class="mb-6">Ensure your documentation and declarations align with new SRO requirements to avoid delays and penalties.</p>
    `,
  },
  {
    id: "china-vs-india-sourcing",
    title: "Sourcing from China vs. Sourcing from India: A Cost-Benefit Analysis for Bangladeshi Businesses",
    excerpt:
      "Compare the advantages and challenges of sourcing from China versus India. Make data-driven decisions based on cost, quality, and logistics considerations.",
    author: {
      name: "Mohammad Hossain",
      role: "Strategic Sourcing Manager",
      image: "/images/team/mohammad-hossain.webp",
    },
    category: "Business Growth",
    date: "2024-12-25",
    image: "/images/blog/supplier-research-tools.webp",
    tags: ["sourcing", "china", "india", "supply chain", "cost analysis", "logistics"],
    content: `
      <p class="mb-4">Choosing between Chinese and Indian suppliers requires careful analysis of multiple factors including cost, quality, lead times, and geopolitical considerations.</p>

      <h2 class="text-2xl font-bold mb-4">China: Advantages and Challenges</h2>
      <p class="mb-6">China offers scale, sophisticated manufacturing capabilities, and established supply chains. However, rising labor costs and geopolitical tensions present challenges.</p>

      <h2 class="text-2xl font-bold mb-4">India: Emerging Opportunities</h2>
      <p class="mb-6">India's competitive labor costs, growing manufacturing sector, and favorable trade policies make it an attractive alternative for certain product categories.</p>

      <h2 class="text-2xl font-bold mb-4">Making the Right Choice</h2>
      <p class="mb-6">Analyze your specific product requirements, volume needs, and risk tolerance to determine the optimal sourcing strategy.</p>
    `,
  },
  {
    id: "pre-shipment-inspection",
    title: "The Importance of Pre-Shipment Inspection (PSI) When Sourcing from Asia",
    excerpt:
      "Learn why pre-shipment inspections are critical for maintaining quality control. Discover how PSI protects your business from costly defects and compliance issues.",
    author: {
      name: "Aisha Rahman",
      role: "Quality Assurance Director",
      image: "/images/team/aisha-rahman.webp",
    },
    category: "Guides",
    date: "2024-12-20",
    image: "/images/blog/sustainable-sourcing-bangladesh.webp",
    tags: ["quality control", "PSI", "inspection", "supply chain", "quality assurance"],
    content: `
      <p class="mb-4">Pre-shipment inspection is a critical quality control process that ensures your goods meet specifications before leaving the supplier's facility.</p>

      <h2 class="text-2xl font-bold mb-4">What is PSI?</h2>
      <p class="mb-6">PSI involves comprehensive inspection of goods, packaging, and documentation before shipment to verify compliance with purchase orders and quality standards.</p>

      <h2 class="text-2xl font-bold mb-4">Benefits of Inspection</h2>
      <p class="mb-6">Early detection of defects prevents costly rejections, returns, and customer dissatisfaction. PSI also ensures regulatory compliance and protects your brand reputation.</p>

      <h2 class="text-2xl font-bold mb-4">When is PSI Essential?</h2>
      <p class="mb-6">High-value orders, new suppliers, complex specifications, and products subject to strict regulations all benefit from professional PSI services.</p>
    `,
  },
  {
    id: "global-supply-chain-trends-2025",
    title: "Global Supply Chain Trends 2025: How Geopolitics Will Impact Your Sourcing Strategy",
    excerpt:
      "Examine how geopolitical shifts, trade tensions, and regional conflicts are reshaping global supply chains. Adapt your sourcing strategy for 2025.",
    author: {
      name: "Emma Green",
      role: "Trade Finance Specialist",
      image: "/images/team/emma-green.webp",
    },
    category: "Trade Insights",
    date: "2024-12-18",
    image: "/images/blog/sustainable-trade.webp",
    tags: ["supply chain", "geopolitics", "sourcing strategy", "global trade", "risk management"],
    content: `
      <p class="mb-4">Geopolitical developments in 2025 are fundamentally altering global supply chain dynamics, requiring businesses to adapt their sourcing strategies accordingly.</p>

      <h2 class="text-2xl font-bold mb-4">Reshoring and Nearshoring</h2>
      <p class="mb-6">Supply chain disruptions are driving companies toward regional sourcing and reduced dependence on distant suppliers.</p>

      <h2 class="text-2xl font-bold mb-4">Diversification Imperative</h2>
      <p class="mb-6">Single-source dependencies pose significant risks. Businesses are building multi-region supplier networks to enhance resilience.</p>

      <h2 class="text-2xl font-bold mb-4">Technology and Transparency</h2>
      <p class="mb-6">Advanced tracking and compliance technologies are becoming essential for managing complex global supply networks.</p>
    `,
  },
  {
    id: "sourcing-partner-advantages",
    title: "Struggling with Sourcing? How a Trading Partner Simplifies Importing Industrial Machinery",
    excerpt:
      "Discover how partnering with an experienced trading company streamlines complex industrial machinery imports. Learn about documentation, logistics, and compliance support.",
    author: {
      name: "James Wilson",
      role: "International Trade Documentation Specialist",
      image: "/images/team/james-wilson.webp",
    },
    category: "Business Growth",
    date: "2024-12-15",
    image: "/images/blog/bangladesh-imports-2025.webp",
    tags: ["trading partner", "industrial machinery", "importing", "sourcing", "logistics"],
    content: `
      <p class="mb-4">Importing industrial machinery involves complex regulations, specialized documentation, and technical requirements that can overwhelm even experienced buyers.</p>

      <h2 class="text-2xl font-bold mb-4">Complexity of Machinery Imports</h2>
      <p class="mb-6">Industrial equipment often requires special handling, certifications, compliance documentation, and technical specifications that vary by jurisdiction.</p>

      <h2 class="text-2xl font-bold mb-4">Role of Trading Partners</h2>
      <p class="mb-6">Experienced trading companies handle documentation, logistics, customs clearance, and compliance, allowing you to focus on your core business operations.</p>

      <h2 class="text-2xl font-bold mb-4">Cost and Time Savings</h2>
      <p class="mb-6">Professional trading partners leverage relationships and expertise to reduce costs, minimize delays, and ensure smooth operations.</p>
    `,
  },
  {
    id: "made-in-bangladesh-pharmaceuticals-food",
    title: "The Rise of 'Made in Bangladesh': Exploring New Opportunities in Pharmaceuticals and Food Products",
    excerpt:
      "Discover emerging opportunities in Bangladesh's pharmaceutical and food processing sectors. Learn about quality standards, market growth, and export potential.",
    author: {
      name: "Farah Rahman",
      role: "Market Development Specialist",
      image: "/images/team/farah-rahman.webp",
    },
    category: "Product Spotlights",
    date: "2024-12-12",
    image: "/images/blog/bangladesh-textile-success.webp",
    tags: ["bangladesh", "pharmaceuticals", "food products", "exports", "manufacturing"],
    content: `
      <p class="mb-4">Bangladesh is rapidly expanding beyond textiles into pharmaceuticals and food processing, presenting new opportunities for international trade.</p>

      <h2 class="text-2xl font-bold mb-4">Pharmaceutical Growth</h2>
      <p class="mb-6">The pharmaceutical sector is emerging as a major export industry, with local manufacturers meeting international quality standards including WHO-GMP compliance.</p>

      <h2 class="text-2xl font-bold mb-4">Food Processing Expansion</h2>
      <p class="mb-6">Food processing industries are leveraging Bangladesh's agricultural abundance to produce value-added products for domestic and export markets.</p>

      <h2 class="text-2xl font-bold mb-4">Investment Opportunities</h2>
      <p class="mb-6">Government incentives and infrastructure development are attracting investment in these high-growth sectors with strong export potential.</p>
    `,
  },
  {
    id: "bill-of-lading-guide",
    title: "Understanding Bill of Lading: A Comprehensive Guide",
    excerpt:
      "Learn everything about Bills of Lading, from types and requirements to digital transformation in shipping documentation.",
    author: {
      name: "James Wilson",
      role: "International Trade Documentation Specialist",
      image: "/images/team/james-wilson.webp",
    },
    category: "Guides",
    date: "2024-03-22",
    image: "/images/blog/bill-of-lading-guide.webp",
    tags: [
      "bill of lading",
      "shipping documents",
      "trade documentation",
      "international trade",
    ],
    content: `
      <p class="mb-4">In the complex world of international trade, few documents are as crucial as the Bill of Lading (B/L). This vital document serves as the backbone of international shipping transactions.</p>

      <h2 class="text-2xl font-bold mb-4">What is a Bill of Lading?</h2>
      <p class="mb-6">A Bill of Lading is a legal document issued by a carrier to a shipper that serves three primary functions:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Receipt of goods</li>
        <li>Contract of carriage</li>
        <li>Document of title</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Key Components of a Bill of Lading</h2>
      <p class="mb-4">Every B/L must include these essential elements:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Shipper details</li>
        <li>Consignee information</li>
        <li>Notify party (if applicable)</li>
        <li>Vessel name and voyage number</li>
        <li>Port of loading and discharge</li>
        <li>Description of goods</li>
        <li>Number of packages and weight</li>
        <li>Freight charges and payment terms</li>
        <li>Date of issue</li>
        <li>Signature of carrier or agent</li>
      </ul>
    `,
  },
];

export const blogCategories = [
  {
    id: "product-spotlights",
    name: "Product Spotlights",
    icon: "box",
  },
  {
    id: "trade-insights",
    name: "Trade Insights",
    icon: "chart-line",
  },
  {
    id: "guides",
    name: "Guides",
    icon: "book",
  },
  {
    id: "global-food-security",
    name: "Global Food Security",
    icon: "wheat-awn",
  },
  {
    id: "sustainable-practices",
    name: "Sustainable Practices",
    icon: "leaf",
  },
  {
    id: "business-growth",
    name: "Business Growth",
    icon: "chart-bar",
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogCategories() {
  return blogCategories;
}

