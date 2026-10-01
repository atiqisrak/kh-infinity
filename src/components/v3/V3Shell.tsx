import { anton } from "./fonts";
import { getNavEntries } from "./nav";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import s from "./v3.module.css";

// Page frame for every v3 route: palette + display font, fixed nav, footer.
// Routes rendered this way must also be listed in SiteChrome so the legacy
// header/footer step aside.
export default function V3Shell({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className={`${s.root} ${anton.variable}`}>
      <SiteNav entries={getNavEntries()} />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
