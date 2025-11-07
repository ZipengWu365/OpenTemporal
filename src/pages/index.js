import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const whatsInside = [
  {
    title: 'Representation and structure',
    description:
      'Explore how structure-aware embeddings, decompositions, and symbolic views govern downstream model behaviour.',
  },
  {
    title: 'Wearable, biological, and sensor signals',
    description:
      'Compare data realities across health, industrial, finance, and IoT domains without exposing private pipelines.',
  },
  {
    title: 'Forecasting, anomaly detection, retrieval, and control',
    description:
      'Use shared task templates and evaluation checklists to keep research and engineering teams aligned.',
  },
  {
    title: 'Practical pipelines for real systems',
    description:
      'Follow tools-and-starter-kit guidance for feature stores, monitoring, diagnostics, and governance.',
  },
  {
    title: 'Literature notes and curated resources',
    description:
      'Navigate reading lists that prioritise surveys, reference books, and reputable open-source material.',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.overline}>OpenTemporal</p>
        <h1>Time-Series Intelligence Across Science &amp; Engineering</h1>
        <p className={styles.subtitle}>
          OpenTemporal is a curated space for rigorous concepts, methods, and tools in time-series analysis -- from
          signals and representations to scalable applied workflows.
        </p>
        <p className={styles.note}>
          The site focuses on knowledge maps, method understanding, and application guidance. It does not publish
          unpublished personal research results.
        </p>
        <div className={styles.ctaGroup}>
          <Link className="button button--primary button--lg" to="/docs/knowledge-base/overview">
            Start Learning
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/methods-concepts/overview">
            Explore Methods
          </Link>
          <Link className={`button button--secondary button--lg ${styles.outlineButton}`} to="/collaboration">
            Collaboration &amp; Industry Support
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhatsInside() {
  return (
    <section className={styles.whatsInside}>
      <div className={styles.sectionHeader}>
        <h2>What's inside</h2>
        <p>Concise guides, structured docs, and references that emphasise calm, research-oriented knowledge.</p>
      </div>
      <div className={styles.cardGrid}>
        {whatsInside.map((item) => (
          <article key={item.title} className={styles.infoCard}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Time-Series Intelligence Across Science & Engineering"
      description="OpenTemporal is a calm knowledge hub for time-series concepts, methods, applications, and tooling.">
      <main>
        <Hero />
        <WhatsInside />
      </main>
    </Layout>
  );
}
