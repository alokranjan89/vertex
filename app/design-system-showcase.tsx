const primary = ["#F97316", "#FB923C", "#FDBA74", "#FED7AA", "#FFEEE5"];
const neutrals = ["#0F172A", "#334155", "#64748B", "#CBD5E1", "#E2E8F0", "#F1F5F9", "#FAFAFC", "#FFFFFF"];

function Mark() {
  return <svg aria-hidden="true" viewBox="0 0 32 28" className="brand-mark"><path fill="currentColor" d="M1 1h30L16 27 1 1Zm8 5 7 12 7-12H9Z" /></svg>;
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bell: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
    search: "m20 20-5-5m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    play: "M9 6v12l10-6-10-6Z",
    file: "M6 3h9l5 5v13H6zM14 3v6h6M9 13h8M9 17h8",
    bookmark: "M6 3h12v18l-6-4-6 4z",
    chart: "M4 20h3v-6H4zm7 0h3V9h-3zm7 0h3V4h-3z",
    clock: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-4v5l3 2",
    user: "M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    arrow: "m9 18 6-6-6-6",
    check: "m5 12 4 4L19 6",
    lock: "M6 10h12v11H6zM9 10V7a3 3 0 0 1 6 0v3",
    target: "M12 3a9 9 0 1 0 9 9m-9-5a5 5 0 1 0 5 5m-5-1 7-7m0 0h-5m5 0v5",
    grid: "M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    external: "M14 4h6v6m-1-5-9 9m4 0v6H4V10h6",
    folder: "M3 6h7l2 2h9v11H3z",
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="icon"><path d={paths[name] ?? paths.check} /></svg>;
}

function Section({ number, title, className = "", children }: { number: string; title: string; className?: string; children: React.ReactNode }) {
  return <section className={`panel ${className}`}><h2 className="section-title"><span>{number}</span>{title}</h2>{children}</section>;
}

export default function DesignSystem() {
  return (
    <main className="design-system">
      <div className="top-grid">
        <header className="panel intro">
          <div className="brand"><Mark /><span>Vertex</span></div>
          <h1>Design System</h1>
          <p className="intro-copy">A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.</p>
          <p className="version">VERSION 1.0 <i /> MAY 2025</p>
        </header>
        <Section number="01" title="Colors" className="colors">
          <p className="label">Primary</p>
          <div className="swatches primary-swatches">{primary.map((color, i) => <div className="swatch" key={color}><span style={{ background: color }} /><small>Primary {500 - i * 100}<br />{color}</small></div>)}</div>
          <p className="label neutral-label">Neutral</p>
          <div className="swatches neutral-swatches">{neutrals.map((color, i) => <div className="swatch" key={color}><span style={{ background: color, border: i > 5 ? "1px solid #eee8e5" : undefined }} /><small>{["Neutral 900", "Neutral 700", "Neutral 500", "Neutral 300", "Neutral 200", "Neutral 100", "Neutral 50", "White"][i]}<br />{color}</small></div>)}</div>
        </Section>
      </div>

      <div className="two-grid">
        <Section number="02" title="Typography" className="typography">
          <div className="type-sample"><b className="playfair">Ag</b><div><strong className="playfair">Playfair Display</strong><p>Elegant <em /> Readable <em /> Timeless</p></div></div>
          <div className="type-sample"><b className="inter-sample">Ag</b><div><strong>Inter</strong><p>Clean <em /> Modern <em /> Highly legible</p></div></div>
        </Section>
        <Section number="03" title="Type Scale" className="type-scale">
          <div className="scale-table"><div className="table-head"><span>Style</span><span>Font</span><span>Size / Line Height</span><span>Weight</span><span>Use</span></div>{[["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"], ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"], ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"], ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"], ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"], ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"], ["Body", "Inter", "14 / 20", "Regular", "Supporting text"], ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"]].map((row) => <div className="table-row" key={row[0]}>{row.map((v) => <span key={v}>{v}</span>)}</div>)}</div>
        </Section>
      </div>

      <div className="two-grid spacing-radius">
        <Section number="04" title="Spacing System" className="spacing">
          <p className="label">Base unit: 4px</p><div className="spacing-bars">{[4, 8, 12, 16, 24, 32, 40, 48, 64].map((n) => <div key={n}><span style={{ height: n * 0.64 }} /><b>{n}</b><small>({n / 16}rem)</small></div>)}</div>
        </Section>
        <Section number="05" title="Radius & Shadows" className="radius">
          <p className="label">Radius</p><div className="radius-row">{[4, 8, 12, 16, 24, 999].map((n, i) => <div key={n}><span style={{ borderRadius: n === 999 ? "50%" : n }} /><small>{["4px", "8px", "12px", "16px", "24px", "Full"][i]}<br />{["(xs)", "(sm)", "(md)", "(lg)", "(xl)", "(circle)"][i]}</small></div>)}</div>
          <p className="label shadow-label">Shadows</p><div className="shadow-row">{["Sm", "Md", "Lg", "Xl"].map((n, i) => <div className={`shadow-card shadow-${i}`} key={n}><b>{n}</b><small>{["0 1px 2px 0", "0 4px 12px -2px", "0 12px 24px -4px", "0 20px 40px -8px"][i]}<br />rgba(15, 23, 42, 0.{["05", "08", "10", "12"][i]})</small></div>)}</div>
        </Section>
      </div>

      <div className="component-grid">
        <Section number="06" title="Icons" className="icons-panel"><p className="label">Outline Style</p><div className="icon-row">{["bell", "search", "play", "file", "bookmark", "chart", "clock", "user", "arrow"].map(n => <Icon key={n} name={n} />)}</div><p className="label">Filled Style</p><div className="icon-row filled-icons">{["bell", "search", "play", "file", "bookmark", "chart", "clock", "user", "arrow"].map(n => <Icon key={n} name={n} />)}</div><p className="label">Icon Specs</p><ul className="spec-list"><li>24×24px grid</li><li>2px stroke width (outline)</li><li>Rounded line caps</li><li>Consistent optical balance</li></ul></Section>
        <Section number="07" title="Buttons" className="buttons-panel"><div className="button-demo"><div className="button-head"><span></span><span>Primary</span><span>Secondary</span><span>Tertiary</span><span>Text</span></div>{["Default", "Hover", "Disabled"].map((state, i) => <div className="button-row" key={state}><span>{state}</span><button className={`btn primary-btn state-${i}`}>Get Started</button><button className={`btn secondary-btn state-${i}`}>Explore Courses</button><button className={`btn tertiary-btn state-${i}`}>View Lesson <Icon name="external" /></button><button className={`btn text-btn state-${i}`}>Watch Video <Icon name="play" /></button></div>)}</div><p className="label specs-label">Button Specs</p><ul className="spec-list horizontal-specs"><li>Height: 44px (default)</li><li>Padding: 0 16px (lg), 0 12px (md)</li><li>Radius: 12px</li><li>Font: Inter Medium (14–16px)</li></ul></Section>
        <Section number="08" title="Inputs" className="inputs-panel"><label className="label" htmlFor="search-demo">Search / Text Input</label><div className="input-wrap"><Icon name="search" /><input id="search-demo" placeholder="Search anything..." /><kbd>⌘ K</kbd></div><label className="label select-label" htmlFor="sort-demo">Select</label><select id="sort-demo" defaultValue="Most Relevant"><option>Most Relevant</option><option>Newest</option></select><p className="label field-spec-label">Field Specs</p><ul className="spec-list"><li>Height: 44px</li><li>Radius: 12px</li><li>Border: 1px solid #E2E8F0</li><li>Padding: 0 16px</li><li>Focus: Border color #FB923C</li></ul></Section>
      </div>

      <div className="three-grid">
        <Section number="09" title="Badges / Tags" className="badge-panel"><div className="badge-columns"><div>Video <b className="badge video-badge">VIDEO</b></div><div>Lesson <b className="badge lesson-badge">LESSON</b></div><div>Popular <b className="badge popular-badge">POPULAR</b></div></div></Section>
        <Section number="10" title="Status / Indicators" className="status-panel"><div className="status-items"><span><i className="progress-ring" />In Progress</span><span><i className="complete-ring"><Icon name="check" /></i>Completed</span><span><i className="playing"><Icon name="play" /></i>Now Playing</span><span><Icon name="lock" />Locked</span></div></Section>
        <Section number="11" title="Progress Bar" className="progress-panel"><div className="progress-display"><span className="progress-track"><i /></span><span><b>35%</b> complete</span></div></Section>
      </div>

      <Section number="12" title="Cards" className="cards-panel"><div className="card-gallery">
        <div><p className="card-label">Course Card</p><article className="demo-card course-card"><div className="course-main"><span className="next-logo">N</span><div><b>Next.js for Production</b><p>Build scalable, high-performance web applications with Next.js.</p></div></div><div className="card-meta"><span><Icon name="chart" />Intermediate</span><span><Icon name="clock" />18h 24m</span><span><Icon name="folder" />12 modules</span></div></article></div>
        <div><p className="card-label">Lesson Card (Video)</p><article className="demo-card lesson-card"><b className="badge video-badge">VIDEO</b><h3>Data Fetching in Server Components</h3><p>Learn how to fetch data in server components using async/await and Next.js best practices.</p><footer><span>Lesson 5.1 ・ 12:45</span><b><Icon name="play" />Watch from 12:45</b></footer></article></div>
        <div><p className="card-label">Lesson Card (Lesson)</p><article className="demo-card lesson-card"><b className="badge lesson-badge">LESSON</b><h3>Data Fetching & Caching</h3><p>Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.</p><footer><span>Module 5</span><b>View lesson <Icon name="external" /></b></footer></article></div>
        <div><p className="card-label">Resource Card</p><article className="demo-card resource-card"><div className="resource-top"><Icon name="file" /><div><h3>Caching and Revalidation Guide</h3><p>Deep dive into Next.js caching strategies.</p></div></div><footer><span>PDF ・ 1.2 MB</span><b><Icon name="external" /></b></footer></article></div>
      </div></Section>

      <div className="bottom-grid">
        <Section number="13" title="Navigation" className="navigation-panel"><div className="nav-content"><div className="nav-brand"><span className="brand"><Mark />Vertex</span><b>Courses</b><span>My Learning</span></div><div className="breadcrumbs"><small>Breadcrumbs</small><p>All Courses <Icon name="arrow" /> Next.js for Production <Icon name="arrow" /> Data Fetching & Caching</p></div><div className="pagination"><small>Pagination</small><p><Icon name="arrow" /> <b>1</b> 2 3 … 8 <Icon name="arrow" /></p></div></div></Section>
        <Section number="14" title="Principles" className="principles-panel"><div className="principles">{[["eye", "Clarity First", "Every element should communicate clearly."], ["grid", "Consistency", "Use components and patterns consistently across the platform."], ["target", "Focus & Calm", "Remove noise and help learners focus on what matters."], ["user", "Accessible", "Design with accessibility and inclusivity in mind."]].map(([icon, title, copy]) => <div key={title}><Icon name={icon} /><span><b>{title}</b><small>{copy}</small></span></div>)}</div></Section>
      </div>
    </main>
  );
}
