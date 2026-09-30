// SVG flags (country-flag-icons, 3:2). Emoji flags don't render on Windows, so we
// ship real SVGs. Only the countries the catalogue and lanes reference are imported.

import { AE, AR, AU, BD, BR, CA, CN, EG, IN, IR, JO, JP, NL, NZ, RU, SA, TH, TR, UA, US } from "country-flag-icons/react/3x2";

const FLAGS = { AE, AR, AU, BD, BR, CA, CN, EG, IN, IR, JO, JP, NL, NZ, RU, SA, TH, TR, UA, US };

export type FlagCode = keyof typeof FLAGS;

const NAME_TO_CODE: Record<string, FlagCode> = {
  Argentina: "AR",
  Australia: "AU",
  Bangladesh: "BD",
  Brazil: "BR",
  Canada: "CA",
  China: "CN",
  Egypt: "EG",
  India: "IN",
  Iran: "IR",
  Japan: "JP",
  Jordan: "JO",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Russia: "RU",
  "Saudi Arabia": "SA",
  Thailand: "TH",
  Turkey: "TR",
  UAE: "AE",
  USA: "US",
  "United States": "US",
  Ukraine: "UA",
};

export function flagCodeFor(country: string): FlagCode | undefined {
  return NAME_TO_CODE[country];
}

export default function Flag({ code, className = "h-3.5 w-[21px]" }: { code: FlagCode; className?: string }) {
  const Svg = FLAGS[code];
  return <Svg aria-hidden="true" className={`${className} shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]`} />;
}
