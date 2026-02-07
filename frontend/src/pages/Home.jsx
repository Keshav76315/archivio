/**
 * Home Page
 * ---------
 * Landing page with hero section and featured content
 */

import HeroSection from "../components/Hero/HeroSection";

function Home() {
  return (
    <main>
      {/* Hero with 3D Background */}
      <HeroSection />

      {/* Featured Exhibits Section (can be added later) */}
      <section className="relative py-24 px-4 bg-bg-elevated">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Exhibits</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-12">
            Explore curated collections of the internet's most iconic extinct
            websites
          </p>

          {/* Placeholder grid - will be replaced with ExhibitCard grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["GeoCities", "MySpace", "Flash Games"].map((domain, i) => (
              <div
                key={domain}
                className="card p-6 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] bg-bg-surface rounded-lg mb-4 shimmer" />
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {domain} Archive
                </h3>
                <p className="text-sm text-text-muted">
                  Discover preserved sites from the golden era
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-4 bg-bg-base">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-16">
            We preserve internet history using the Wayback Machine and AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🕸️",
                title: "Discover",
                desc: "Find archived snapshots from Archive.org",
              },
              {
                icon: "🤖",
                title: "Analyze",
                desc: "AI generates historical context",
              },
              {
                icon: "🏛️",
                title: "Exhibit",
                desc: "View in immersive 3D museum",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
