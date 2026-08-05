import { FadeIn } from '../components/common/Badge';
import Badge from '../components/common/Badge';
import CTASection from '../components/common/CTASection';
import { company, leadership, technicians, certifications, facility, values } from '../data/company';
import { usePageTitle } from '../hooks';

export default function AboutPage() {
  usePageTitle('About');

  return (
    <>
      <PageHero title="About Apex" subtitle="Craftsmanship rooted in European automotive mastery." />

      <section className="bg-offwhite py-20 dark:bg-matte">
        <div className="container-premium grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="section-heading">Our Story</h2>
            <p className="section-sub">{company.story}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="border border-silver/40 bg-white p-6 dark:border-carbon dark:bg-carbon">
                <h3 className="font-display text-2xl text-ink dark:text-offwhite">Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-silver/80">{company.mission}</p>
              </div>
              <div className="border border-silver/40 bg-white p-6 dark:border-carbon dark:bg-carbon">
                <h3 className="font-display text-2xl text-ink dark:text-offwhite">Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-silver/80">{company.vision}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-carbon">
        <div className="container-premium">
          <FadeIn>
            <h2 className="section-heading">Leadership</h2>
            <p className="section-sub">Guided by masters of European platforms and hospitality.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <FadeIn key={person.id}>
                <article className="overflow-hidden border border-silver/40 bg-offwhite dark:border-matte dark:bg-matte">
                  <img src={person.image} alt={person.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-display text-xl text-ink dark:text-offwhite">{person.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gold">{person.role}</p>
                    <p className="mt-3 text-sm text-ink/70 dark:text-silver/80">{person.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 dark:bg-matte">
        <div className="container-premium">
          <FadeIn>
            <h2 className="section-heading">Certified Technicians</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technicians.map((tech) => (
              <div key={tech.id} className="border border-silver/40 bg-white p-5 dark:border-carbon dark:bg-carbon">
                <h3 className="font-display text-lg text-ink dark:text-offwhite">{tech.name}</h3>
                <p className="mt-1 text-sm text-gold">{tech.specialty}</p>
                <p className="mt-2 text-xs text-ink/50 dark:text-silver/50">{tech.years} years experience</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tech.certifications.map((c) => (
                    <Badge key={c} variant="silver">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-carbon">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="section-heading">Facility Showcase</h2>
            <p className="section-sub">{facility.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80 dark:text-silver/80">
              {facility.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-gold">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {facility.images.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-dark-section py-20">
        <div className="container-premium">
          <h2 className="font-display text-3xl font-semibold text-offwhite sm:text-4xl">
            Industry Certifications
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span key={c} className="border border-gold/30 px-4 py-2 text-sm text-silver">
                {c}
              </span>
            ))}
          </div>
          <h3 className="mt-14 font-display text-2xl text-offwhite">Company Values</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border border-white/10 p-5">
                <h4 className="font-display text-xl text-gold">{v.title}</h4>
                <p className="mt-2 text-sm text-silver/80">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-matte pb-16 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,81,0.15),transparent_50%)]" />
      <div className="container-premium relative">
        <FadeIn>
          <h1 className="font-display text-4xl font-semibold text-offwhite sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-silver/80">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
