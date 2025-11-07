import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./HeroSection.module.css";
import { DEMO_URL } from "../../../../constants";

// Panel data
const panels = [
  {
    title: "Visual Pipeline Editor",
    content:
      "Build complex ML workflows with drag-and-drop simplicity. Connect components visually and see your pipeline come to life.",
  },
  {
    title: "Real-time Execution",
    content:
      "Watch your pipelines run in real-time. Monitor progress, view logs, and get instant feedback on performance.",
  },
  {
    title: "Rich Component Library",
    content:
      "Access pre-built components for data processing, model training, evaluation, and deployment. Customize or create your own.",
  },
  {
    title: "Cloud Native",
    content:
      "Deploy anywhere - from local development to production clusters. Scale automatically based on your workload needs.",
  },

  {
    title: "Version Control",
    content:
      "Track changes, compare versions, and collaborate seamlessly. Every pipeline is versioned and reproducible.",
  },
];

// Define node positions for connection lines
// These match the CSS positions of the geometric shapes
const nodePositions = [
  { id: "shape1", x: 15, y: 20 }, // top-left
  { id: "shape2", x: 75, y: 30 }, // top-right
  { id: "shape3", x: 30, y: 55 }, // bottom-left
  { id: "shape4", x: 70, y: 70 }, // bottom-right
  { id: "shape5", x: 50, y: 45 }, // center
];

// Define connections between nodes
const connections = [
  { from: 0, to: 4 }, // shape1 to shape5 (center)
  { from: 1, to: 4 }, // shape2 to shape5 (center)
  { from: 2, to: 4 }, // shape3 to shape5 (center)
  { from: 3, to: 4 }, // shape4 to shape5 (center)
  { from: 0, to: 1 }, // shape1 to shape2
  { from: 2, to: 3 }, // shape3 to shape4
];

const HeroSection: React.FC = () => {
  const TRANSITION_DURATION = 5500;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate position class for each panel
  const getPanelPositionClass = (panelIndex: number) => {
    const diff = (panelIndex - currentIndex + panels.length) % panels.length;

    // Center panel
    if (diff === 0) return "center";
    // Right side panel
    if (diff === 1) return "right";
    // Left side panel
    if (diff === panels.length - 1) return "left";
    // Far panels, required to visualize smooth rotation
    if (diff === panels.length - 2) return "farLeft";
    if (diff === panels.length - 3) return "farRight";

    return "back";
  };

  // Handle panel click
  const handlePanelClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);

    // Reset the rotation interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start a new interval
    intervalRef.current = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % panels.length);
      }
    }, TRANSITION_DURATION);
  };

  // Automatic rotation
  useEffect(() => {
    const startRotation = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          setCurrentIndex((prev) => (prev + 1) % panels.length);
        }
      }, TRANSITION_DURATION);
    };

    startRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  const handlePanelHover = (index: number, hovering: boolean) => {
    // Handle hover on central panel
    if (index === currentIndex) {
      setIsHovering(hovering);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Left side - Text content */}
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Build & Run
                <br />
                <span className={styles.gradientText}>ML Pipelines</span>
                <br />
                in Your Browser
              </h1>
              <p className={styles.heroDescription}>
                No setup required. Design, test, and deploy machine learning
                workflows with an intuitive visual interface. Transform your
                experiments into production pipelines in minutes, not hours.
              </p>

              <div className={styles.heroButtons}>
                <button
                  className={styles.btnPrimary}
                  onClick={() => (window.location.href = DEMO_URL)}
                >
                  Start Building
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className={styles.btnSecondary}>Watch Demo</button>
              </div>
            </div>

            {/* Right side - Geometric abstraction */}
            <div className={styles.heroVisual}>
              <div className={styles.geometricContainer}>
                {/* Connection lines SVG */}
                <svg
                  className={styles.connectionLines}
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#ec4899", stopOpacity: 0.4 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#6366f1", stopOpacity: 0.3 }}
                      />
                    </linearGradient>

                    {/* Pulsing gradient for active connections */}
                    <linearGradient
                      id="pulseGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }}
                      >
                        <animate
                          attributeName="stop-opacity"
                          values="0.3;0.6;0.3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop
                        offset="100%"
                        style={{ stopColor: "#6366f1", stopOpacity: 0.6 }}
                      >
                        <animate
                          attributeName="stop-opacity"
                          values="0.3;0.6;0.3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </stop>
                    </linearGradient>
                  </defs>

                  {/* Connection lines between nodes */}
                  {connections.map((connection, index) => {
                    const from = nodePositions[connection.from];
                    const to = nodePositions[connection.to];

                    // Calculate control point for curved line
                    const midX = (from.x + to.x) / 2;
                    const midY = (from.y + to.y) / 2;
                    const offsetX = (to.y - from.y) * 0.2;
                    const offsetY = (from.x - to.x) * 0.2;

                    return (
                      <g key={index}>
                        {/* Main connection line */}
                        <path
                          className={styles.connectionLine}
                          d={`M ${from.x} ${from.y} Q ${midX + offsetX} ${
                            midY + offsetY
                          }, ${to.x} ${to.y}`}
                          stroke="url(#lineGradient)"
                          strokeWidth="0.5"
                          fill="none"
                        />
                        {/* Animated pulse overlay */}
                        <path
                          className={styles.connectionPulse}
                          d={`M ${from.x} ${from.y} Q ${midX + offsetX} ${
                            midY + offsetY
                          }, ${to.x} ${to.y}`}
                          stroke="url(#pulseGradient)"
                          strokeWidth="0.3"
                          fill="none"
                          opacity="0.6"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Geometric shapes inside the orbital sphere */}
                <div
                  className={`${styles.geometricShape} ${styles.shape1}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape2}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape3}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape4}`}
                ></div>
                <div
                  className={`${styles.geometricShape} ${styles.shape5}`}
                ></div>

                {/* Mini shapes */}
                <div className={`${styles.miniShape} ${styles.mini1}`}></div>
                <div className={`${styles.miniShape} ${styles.mini2}`}></div>
                <div className={`${styles.miniShape} ${styles.mini3}`}></div>
              </div>

              {/* Orbital carousel of glass panels */}
              <div className={styles.panelsOrbit}>
                {panels.map((panel, index) => {
                  const positionClass = getPanelPositionClass(index);
                  return (
                    <div
                      key={index}
                      className={clsx(
                        styles.glassPanel,
                        styles[`position-${positionClass}`]
                      )}
                      data-index={index}
                      onClick={() => handlePanelClick(index)}
                      onMouseEnter={() => handlePanelHover(index, true)}
                      onMouseLeave={() => handlePanelHover(index, false)}
                    >
                      <div className={styles.panelTitle}>{panel.title}</div>
                      <div className={styles.panelContent}>{panel.content}</div>
                    </div>
                  );
                })}
              </div>

              {/* Orbit controls */}
              <div className={styles.orbitControls}>
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`${styles.orbitDot} ${
                      currentIndex === index ? styles.active : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
