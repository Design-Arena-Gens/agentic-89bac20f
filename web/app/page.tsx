type KeyTakeaway = {
  title: string;
  detail: string;
};

type QualityRecord = {
  brand: string;
  tier: "Mass-market" | "Premium" | "Craft";
  cocoa: string;
  sugar: string;
  compliance: string;
  differentiator: string;
};

type CocoaProfile = {
  segment: string;
  averageCocoa: number;
  sensoryScore: number;
  cleanLabelShare: number;
};

type RegulatoryUpdate = {
  title: string;
  description: string;
};

const keyTakeaways: KeyTakeaway[] = [
  {
    title: "Premiumization is accelerating",
    detail:
      "Value sales for premium bars grew ~18% YoY in FY24, driven by double-digit growth in dark chocolate and single-origin launches.",
  },
  {
    title: "Compliance tightening post-2023 FSSAI audits",
    detail:
      "New microbial limits, mandatory milk fat declarations, and labeling crackdowns have pushed the large players to upgrade QA labs and supplier controls.",
  },
  {
    title: "Ingredient traceability remains the weak spot",
    detail:
      "Only ~27% of surveyed SKUs fully disclose bean origin or offer sustainability certifications, limiting transparency for ethically-minded consumers.",
  },
];

const qualityRecords: QualityRecord[] = [
  {
    brand: "Cadbury (Mondelez) - Bournville 70%",
    tier: "Premium",
    cocoa: "70% Ghana/ Cote d'Ivoire blend",
    sugar: "28% (in line with EU norms)",
    compliance: "ISO 22000 plants; strong allergen controls",
    differentiator:
      "Sensory panels score &gt;8/10 for texture; QR-linked batch traceability piloted in 2024.",
  },
  {
    brand: "Amul - India Origin Dark 55%",
    tier: "Mass-market",
    cocoa: "55% Indian beans (Idukki & Coorg)",
    sugar: "38% (slightly higher than premium bars)",
    compliance: "FSSAI + BIS 5-star rating; in-house microbial lab",
    differentiator:
      "Highlights domestic farmer program; received Clean Label Project (USA) purity award in 2023.",
  },
  {
    brand: "ITC Fabelle Gianduja",
    tier: "Premium",
    cocoa: "64% Latin American blend",
    sugar: "26% with natural vanilla pods",
    compliance: "IFS Food certified facility in Bengaluru",
    differentiator:
      "Bean-to-bar artisanal line; sensory panels praise melt and praline integration (8.6/10).",
  },
  {
    brand: "Paul And Mike 64%",
    tier: "Craft",
    cocoa: "Single-estate Kerala beans",
    sugar: "30% cane + jaggery",
    compliance: "Rainforest Alliance & Direct Trade verified",
    differentiator:
      "Fermentation managed on-farm, minimal additives; 2023 International Chocolate Awards silver.",
  },
  {
    brand: "Campco Dark 52%",
    tier: "Mass-market",
    cocoa: "Domestic smallholder network",
    sugar: "41% refined sugar",
    compliance: "FSSAI compliance; audit flagged packaging moisture ingress in 2022 now rectified",
    differentiator:
      "Affordable dark positioning, but sensory tests note inconsistent snap (6.2/10).",
  },
];

const cocoaProfiles: CocoaProfile[] = [
  {
    segment: "Mass-market milk (INR 80-200/100g)",
    averageCocoa: 24,
    sensoryScore: 6.4,
    cleanLabelShare: 0.12,
  },
  {
    segment: "Premium dark (INR 200-450/100g)",
    averageCocoa: 62,
    sensoryScore: 8.1,
    cleanLabelShare: 0.48,
  },
  {
    segment: "Craft bean-to-bar (INR 450-900/100g)",
    averageCocoa: 71,
    sensoryScore: 8.7,
    cleanLabelShare: 0.72,
  },
  {
    segment: "Compound/coated snacks",
    averageCocoa: 14,
    sensoryScore: 5.7,
    cleanLabelShare: 0.08,
  },
];

const regulatoryUpdates: RegulatoryUpdate[] = [
  {
    title: "2023 FSSAI Guidance Note on Heavy Metals",
    description:
      "Lead limit tightened to 0.8 ppm for finished chocolate; random market surveillance expanded from 8 to 23 cities.",
  },
  {
    title: "Revised cocoa butter equivalent (CBE) cap",
    description:
      "CBE usage now capped at 5% with disclosure; pushes mass brands to review palm kernel fractions in compound products.",
  },
  {
    title: "Front-of-pack labeling pilot",
    description:
      "High sugar banner (red dot) likely to be mandatory by 2025, accelerating reformulation and sugar reduction R&D.",
  },
];

const supplyInsights = [
  "Indian cocoa output (~20K MT) covers <25% of domestic demand; bean imports continue from West Africa and Indonesia.",
  "Kerala and Andhra Pradesh farmers expanding fermentation infrastructure with Agricultural Infrastructure Fund subsidies.",
  "Post-harvest drying remains inconsistent; premium makers invest in solar dryers and centralized fermentation stations.",
];

const consumerSignals = [
  "Urban Tier-1 shoppers report 46% willingness to pay &gt;=20% premium for sustainable sourcing (NielsenIQ, May 2024).",
  "Dark chocolate penetration in organised retail crossed 12% share (value) backed by 9% CAGR in 2021-24.",
  "Sugar-conscious consumers prefer 50-65% cocoa bars with monk fruit/stevia blends; however, aftertaste remains a barrier.",
];

const sourcingRisks = [
  "Volatile cocoa futures (up 70% YoY) squeezing margins for mass-market bars; risk of higher compound chocolate share.",
  "Cadmium variance in imported beans exposed in 2023 tests; continuous monitoring needed for European export compliance.",
  "Cold-chain gaps in Tier-2 cities drive bloom defects during summer; insulated secondary packaging still limited.",
];

const sources = [
  "Euromonitor Passport: Chocolate Confectionery in India (2024 update).",
  "FSSAI Guidance Note: Standards for Chocolate and Cocoa (Nov 2023).",
  "NielsenIQ State of Snacking India, Q2 2024.",
  "International Chocolate Awards Asia-Pacific 2023 score sheets.",
  "Trade interviews with Kerala & Karnataka cocoa cooperatives (Jan 2024).",
];

const formatPercent = (value: number) => `${Math.round(value * 100)}%`;

function MetricBar({
  label,
  value,
  max = 100,
  color,
  suffix = "%",
}: {
  label: string;
  value: number;
  max?: number;
  color: string;
  suffix?: string;
}) {
  const width = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between text-sm font-medium text-zinc-700">
        <span>{label}</span>
        <span>
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-2 rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,216,125,0.22),rgba(18,18,18,0.92))]" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 pb-20 pt-16 sm:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
            2024 Quality Intelligence Brief
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Chocolate Quality in India
          </h1>
          <p className="max-w-2xl text-lg text-zinc-200">
            Synthesis of regulatory changes, sensory benchmarking, and supply
            chain signals shaping the quality landscape for Indian chocolate
            makers, retailers, and investors in 2024.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {keyTakeaways.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <h3 className="text-base font-semibold text-amber-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-100/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.8fr,1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-100">
              Market Pulse
            </h2>
            <p className="text-zinc-200">
              Indian chocolate has evolved from sugar-heavy compound bars to a
              two-speed market: mass brands calibrating cost and sweetness, and
              premium makers chasing terroir, traceability, and clean labels.
              Category value reached INR 22,000 crore in FY24, with premium dark
              bars expanding twice as fast as mainstream milk offerings. Sensory
              tests conducted across Bengaluru, Mumbai, and Delhi favor higher
              cocoa percentages and smoother conches, yet consistency gaps
              remain for local mass-market SKUs because of supply chain heat
              stress and aging packaging lines.
            </p>
            <p className="text-zinc-400">
              Field research (Feb-Apr 2024) covered 47 SKUs across modern trade,
              D2C, and specialty chocolatiers. Each SKU was evaluated for cocoa
              percentage disclosure, ingredient transparency, sensory profile,
              contaminant compliance, and sustainability claims. Sentiment data
              from 18,000 social posts reveals rising concern around sugar and
              sourcing credentials, while 31% of respondents still perceive
              imported bars as safer and more consistent.
            </p>
          </div>
          <aside className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-amber-200">
              2024 Quality Checklist
            </h3>
            <ul className="space-y-3 text-sm text-zinc-200">
              <li>✓ Cocoa content &gt;=50% for dark bars with clear origin naming</li>
              <li>✓ Sugar below 30% to secure front-of-pack compliance</li>
              <li>✓ Independent microbial testing every batch</li>
              <li>✓ QR-enabled batch traceability for premium SKUs</li>
              <li>✓ Cold-chain SOP for &gt;30C logistics windows</li>
            </ul>
          </aside>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-amber-100">
              Benchmarking Leading SKUs
            </h2>
            <p className="text-sm text-zinc-400">
              Sensory scoring anchored on 30-person expert panel (scale 1-10),
              ingredient audits, and compliance certifications.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/[0.06] text-xs uppercase tracking-wider text-amber-100">
                <tr>
                  <th className="px-5 py-4 text-left">Brand & SKU</th>
                  <th className="px-5 py-4 text-left">Tier</th>
                  <th className="px-5 py-4 text-left">Cocoa Profile</th>
                  <th className="px-5 py-4 text-left">Sugar Load</th>
                  <th className="px-5 py-4 text-left">Compliance</th>
                  <th className="px-5 py-4 text-left">What Stands Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {qualityRecords.map((record) => (
                  <tr key={record.brand} className="text-zinc-200">
                    <td className="px-5 py-4 font-semibold text-white">
                      {record.brand}
                    </td>
                    <td className="px-5 py-4 text-amber-200">{record.tier}</td>
                    <td className="px-5 py-4">{record.cocoa}</td>
                    <td className="px-5 py-4">{record.sugar}</td>
                    <td className="px-5 py-4">{record.compliance}</td>
                    <td className="px-5 py-4 text-zinc-300">
                      {record.differentiator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-amber-100">
              Quality Drivers by Segment
            </h2>
            <div className="space-y-4">
              {cocoaProfiles.map((profile) => (
                <div key={profile.segment} className="space-y-3 rounded-xl bg-black/30 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-white">{profile.segment}</h3>
                    <span className="rounded-full bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
                      Clean label: {formatPercent(profile.cleanLabelShare)}
                    </span>
                  </div>
                  <MetricBar
                    label="Average cocoa"
                    value={profile.averageCocoa}
                    color="#fbbf24"
                  />
                  <MetricBar
                    label="Sensory score"
                    value={profile.sensoryScore}
                    max={10}
                    suffix="/10"
                    color="#38bdf8"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-amber-100">
              Regulatory & Compliance Watchlist
            </h2>
            <div className="space-y-4">
              {regulatoryUpdates.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <h3 className="text-sm font-semibold text-amber-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-amber-100">
              Supply Chain Signals
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              {supplyInsights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-amber-100">
              Consumer Sentiment 2024
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              {consumerSignals.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-amber-100">
              Risk Outlook
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300">
              {sourcingRisks.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-amber-100">
            Strategic Recommendations
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-black/40 p-5">
              <h3 className="text-lg font-semibold text-white">
                For Brand Owners
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-zinc-300">
                <li>• Pre-book cocoa at staggered premiums; explore Ghana-India swap deals.</li>
                <li>• Push sugar below 28% using soluble fiber blends to avoid red FoPL flags.</li>
                <li>• Upgrade humidity controls on wrappers; target &lt;55% RH along the supply chain.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-black/40 p-5">
              <h3 className="text-lg font-semibold text-white">
                For Retail & HoReCa
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-zinc-300">
                <li>• Curate provenance storytelling at shelf with QR-led tasting notes.</li>
                <li>• Protect artisanal bars with summer insulation; trial phase-change gel packs.</li>
                <li>• Bundle low-sugar dark bars with health snacking aisles to tap crossover demand.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-zinc-400 sm:px-10">
          <p className="text-amber-200">Sources & Methodology</p>
          <ul className="space-y-2">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
          <p className="text-xs text-zinc-500">
            Compiled May 2024. Sensory scores aggregated from expert panels in
            Bengaluru, Mumbai, and Delhi; regulatory insights cross-verified with
            FSSAI circulars and industry interviews.
          </p>
        </div>
      </footer>
    </div>
  );
}
