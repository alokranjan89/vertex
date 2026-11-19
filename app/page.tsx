
import Image from "next/image";
import Link from "next/link";

function Icon({ name }: { name: "bell" | "search" | "arrow" | "level" | "clock" | "file" }) {
  const paths = {
    bell: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
    search: "m20 20-5-5m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    arrow: "M5 12h14m-7-7 7 7-7 7",
    level: "M3 19h2v-5H3zm6 0h2V9H9zm6 0h2V5h-2zm6 0h2v-8h-2z",
    clock: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-4v5l3 2",
    file: "M6 3h9l5 5v13H6zM14 3v6h6",
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" className={`home-icon home-icon-${name}`}><path d={paths[name]} /></svg>;
}

const courses = [
  { title: "Next.js for Production", description: "Build scalable, high-performance web applications with Next.js.", level: "Intermediate", duration: "18h 24m", modules: "12 modules", image: "/course-next.png", alt: "Next.js logo" },
  { title: "Docker Essentials", description: "Containerize applications and streamline your development workflow.", level: "Beginner", duration: "10h 12m", modules: "8 modules", image: "/course-docker.png", alt: "Docker logo" },
  { title: "TypeScript Deep Dive", description: "Go beyond the basics and write safer, more expressive code.", level: "Intermediate", duration: "14h 36m", modules: "10 modules", image: "/course-typescript.png", alt: "TypeScript logo" },
];

export default function Home() {
  return (
    <main className="home-shell">
      <header className="home-header">
        <Link className="home-brand" href="/" aria-label="Vertex home">
          <svg aria-hidden="true" viewBox="0 0 32 28"><path fill="currentColor" d="M1 1h30L16 27 1 1Zm8 5 7 12 7-12H9Z" /></svg>
          <span>Vertex</span>
        </Link>
        <nav aria-label="Main navigation" className="home-nav">
          <Link href="/courses">Courses</Link>
          <Link href="/my-learning">My Learning</Link>
        </nav>
        <div className="home-account">
          <button type="button" aria-label="Notifications" className="notification-button"><Icon name="bell" /></button>
          <Image src="/vertex-avatar.png" width={52} height={52} alt="Your profile" className="profile-avatar" />
        </div>
      </header>

      <section className="home-hero" aria-labelledby="hero-title">
        <span className="hero-eyebrow">Intelligent Learning</span>
        <h1 id="hero-title">Search your learning<br className="desktop-break" /> in plain English.</h1>
        <p>Vertex understands what you want to learn and<br className="desktop-break" /> finds the exact lessons across all your courses.</p>
        <Link href="/courses" className="explore-button">Explore Courses <Icon name="arrow" /></Link>
        <form className="home-search" action="/search" method="get" role="search">
          <Icon name="search" />
          <label className="sr-only" htmlFor="learning-query">Search your learning</label>
          <input id="learning-query" name="q" placeholder="Ask anything about your learning..." />
          <kbd aria-hidden="true"><span>⌘</span> K</kbd>
        </form>
      </section>

      <section className="home-catalog" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <h2 id="catalog-title">All Courses</h2>
          <Link href="/courses">View all courses <Icon name="arrow" /></Link>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <Link className="home-course-card" href="/courses" key={course.title}>
              <Image src={course.image} alt={course.alt} width={74} height={76} className="course-logo" />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span><Icon name="level" />{course.level}</span>
                <span><Icon name="clock" />{course.duration}</span>
                <span><Icon name="file" />{course.modules}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="weekly-note"><span aria-hidden="true">☆</span><p>New courses and lessons added every week.</p></div>
        <div className="home-art" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </section>
    </main>
  );
}
