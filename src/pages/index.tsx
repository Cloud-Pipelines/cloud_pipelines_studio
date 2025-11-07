import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import {
  APP_URL,
  DEMO_URL,
  DOCS_URL,
  GITHUB_ISSUES_URL,
  GITHUB_REPO_URL,
  SLACK_CHANNEL,
  WEBSITE_URL,
} from "../../constants";
import HeroSection from "./components/HeroSection/HeroSection";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <img src="/img/logo.png" alt="Oasis Logo" className={styles.logo} />
            <h1 className={clsx("hero__title", styles.heroTitle)}>Oasis</h1>
          </div>
          <div className={styles.heroBody}>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              Accelerate your development. Build machine learning pipelines
              visually. Execute runs smartly and efficiently.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.buttonHero
                )}
                to={APP_URL}
              >
                🚀 Try It Now
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/img/hero-screenshot.png"
            alt="Oasis Pipeline Editor Interface"
            className={styles.heroScreenshot}
          />
        </div>
      </div>
    </header>
  );
}

function DeveloperInfoBanner() {
  return (
    <section className={styles.developerBanner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <div className={styles.developerInfo}>
            <div className={styles.shopifyBrand}>
              <img
                src="/img/shopify_glyph.svg"
                alt="Shopify"
                className={styles.shopifyLogo}
              />
              <span>Developed by Shopify</span>
            </div>
            <p>
              Built by Shopify's Search Team to democratize machine learning
              pipeline development across the organization.
            </p>
          </div>
          <div className={styles.openSourceInfo}>
            <div className={styles.shopifyBrand}>
              <span className={styles.badgeIcon}>📖</span>
              <span>Open Source</span>
            </div>
            <p>
              Based on the open-source pipeline-studio-app editor. Contribute to
              the future of visual ML pipeline development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Drag & Drop Pipeline Editing",
      description:
        "Create complex ML workflows with an intuitive visual interface. Connect components, configure arguments, and build pipelines without writing code.",
      image: "/img/feature-pipeline-editing.png",
      imageAlt: "Drag and drop interface showing pipeline components",
    },
    {
      title: "In-App Component Editor",
      description:
        "Edit and configure components directly within the pipeline editor. Streamline your workflow and reduce context switching.",
      image: "/img/feature-in-app-editor.png",
      imageAlt: "In-app component editor interface",
    },
    {
      title: "Component Management",
      description:
        "Upload, create, and manage reusable ML components. Build a library of custom components that can be shared across teams and projects.",
      image: "/img/feature-component-publishing.png",
      imageAlt: "Component library interface",
    },
    {
      title: "Cached Pipeline Execution",
      description:
        "Execute pipelines with our powerful orchestration backend. Monitor runs, view logs, and track results in real-time. Cached components instantly saves time and resources.",
      image: "/img/feature-pipeline-execution.png",
      imageAlt: "Pipeline execution page",
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Powerful Features for ML Teams</h2>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.featureRow,
              idx % 2 === 1 && styles.featureRowReverse
            )}
          >
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
            <div className={styles.featureImage}>
              <div className={styles.featureImageWrapper}>
                <div className={styles.geometricDecoration}>
                  <div className={styles.decorShape1}></div>
                  <div className={styles.decorShape2}></div>
                  <div className={styles.decorShape3}></div>
                </div>
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className={styles.featureScreenshot}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>Ready to Build Your First Pipeline?</h2>
          <p>
            Start creating machine learning workflows in minutes. Try our
            example pipelines or dive straight into the documentation.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx(styles.button, styles.buttonOutline)}
              to={APP_URL}
            >
              🚀 Get Started
            </Link>
            <Link
              className={clsx(styles.button, styles.buttonOutline)}
              to={DEMO_URL}
            >
              🎮 Try Example Pipelines
            </Link>
            <Link
              className={clsx(styles.button, styles.buttonOutline)}
              to={DOCS_URL}
            >
              📖 View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>
              Have questions about Oasis? Our team is here to help you get
              started with visual ML pipeline development.
            </p>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <span className={styles.contactIcon}>💬</span>
                <div>
                  <strong>Slack</strong>
                  <p>{SLACK_CHANNEL}</p>
                </div>
              </div>
              <Link to={WEBSITE_URL} className={styles.repoLink}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <strong>Website</strong>
                  <p>{WEBSITE_URL}</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.repoInfo}>
            <h3>Open Source</h3>
            <p>
              Oasis is built on open-source foundations. Contribute, report
              issues, or explore the codebase on GitHub.
            </p>
            <div className={styles.repoLinks}>
              <Link to={GITHUB_REPO_URL} className={styles.repoLink}>
                <span className={styles.repoIcon}>📦</span>
                <div>
                  <strong>Main Repository</strong>
                  <p>{GITHUB_REPO_URL.split("https://").pop()}</p>
                </div>
              </Link>
              <Link to={GITHUB_ISSUES_URL} className={styles.repoLink}>
                <span className={styles.repoIcon}>🐛</span>
                <div>
                  <strong>Report Issues</strong>
                  <p>Found a bug? Let us know!</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Visual ML Pipeline Editor`}
      description="Build machine learning pipelines visually with Oasis. Drag-and-drop editor for creating, managing, and executing ML workflows."
    >
      <HeroSection />
      <main>
        <DeveloperInfoBanner />
        <FeaturesSection />
        <CTASection />
        <ContactSection />
      </main>
    </Layout>
  );
}
