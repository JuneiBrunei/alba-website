"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["Work", "Services", "Philosophy", "Contact"];

const PORTFOLIO = [
  {
    id: 1,
    category: "Fashion Shoots",
    title: "Undone",
    img: "/images/first.jpg",
  },
  {
    id: 2,
    category: "Creative Direction",
    title: "Estructura",
    img: "/images/fourth.jpg",
  },
  {
    id: 3,
    category: "Visual Projects",
    title: "Lumière",
    img: "/images/second.jpg",
  },
  {
    id: 4,
    category: "Fashion Shoots",
    title: "Meridian",
    img: "/images/fifth.jpg",
  },
  {
    id: 5,
    category: "Creative Direction",
    title: "Tensione",
    img: "/images/sixth.jpg",
  },
  {
    id: 6,
    category: "Visual Projects",
    title: "Nuance",
    img: "/images/seventh.jpg",
  },
];

const INDIVIDUAL_SERVICES = [
  {
    name: "Personal Styling Experience",
    desc: "A complete transformation of how you exist in the world — from presence to wardrobe to visual narrative.",
  },
  {
    name: "Color Identity",
    desc: "Your palette is not a trend. It is a declaration. We find the spectrum that is entirely yours.",
  },
  {
    name: "Silhouette Strategy",
    desc: "The body as architecture. We shape how your form speaks before you say a word.",
  },
  {
    name: "Face & Visual Harmony",
    desc: "Proportions, contrast, and light — curated to amplify what makes your face unmistakably yours.",
  },
  {
    name: "Wardrobe Architecture",
    desc: "A wardrobe is not a collection. It is a system. We design one that works with intention.",
  },
];

const BRAND_SERVICES = [
  {
    name: "Creative Direction",
    desc: "Visual strategy that aligns your brand's soul with its surface.",
  },
  {
    name: "Styling for Campaigns",
    desc: "Every piece chosen with purpose. Every frame considered.",
  },
  {
    name: "Visual Concept Development",
    desc: "From concept to image — building the visual language your brand deserves.",
  },
];

export default function AlbaMimmi() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];
  const filtered =
    activeFilter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Tenor+Sans&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream: #F5F0EB;
          --bone: #EDE8E1;
          --ink: #1A1714;
          --ink-soft: #3D3830;
          --gold: #C8A97E;
          --gold-light: #E2D4BF;
          --warm-gray: #8C8278;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--cream);
          color: var(--ink);
          font-family: 'Tenor Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .serif { font-family: 'Cormorant Garamond', serif; }

        /* NAV */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 48px;
          transition: all 0.5s ease;
        }
        .nav.scrolled {
          padding: 18px 48px;
          background: rgba(245, 240, 235, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--gold-light);
        }
        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        .nav-links a {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-soft);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.4s ease;
        }
        .nav-links a:hover { color: var(--ink); }
        .nav-links a:hover::after { width: 100%; }

        /* HERO */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 64px 80px 80px;
          position: relative;
          z-index: 2;
        }
        .hero-eyebrow {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: var(--gold);
        }
        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 5.5vw, 80px);
          font-weight: 300;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-bottom: 32px;
        }
        .hero-headline em {
          font-style: italic;
          color: var(--ink-soft);
        }
        .hero-sub {
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--warm-gray);
          margin-bottom: 56px;
          line-height: 1.8;
        }
        .btn-primary {
          display: inline-block;
          padding: 16px 40px;
          border: 1px solid var(--ink);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.4s ease;
          font-family: 'Tenor Sans', sans-serif;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--ink);
          transition: left 0.4s ease;
          z-index: -1;
        }
        .btn-primary:hover { color: var(--cream); }
        .btn-primary:hover::before { left: 0; }

        .hero-right {
          position: relative;
          overflow: hidden;
        }
        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(15%) contrast(1.05);
          transition: transform 8s ease;
        }
        .hero-right:hover img { transform: scale(1.04); }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--cream) 0%, transparent 15%);
          z-index: 1;
        }
        .hero-index {
          position: absolute;
          bottom: 48px;
          left: 48px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--warm-gray);
          writing-mode: vertical-rl;
        }

        /* SECTION SHARED */
        section { padding: 120px 80px; }
        .section-label {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--ink);
        }
        .section-title em { font-style: italic; }
        .divider {
          width: 64px;
          height: 1px;
          background: var(--gold);
          margin: 40px 0;
        }

        /* ABOUT */
        .about {
          background: var(--bone);
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: center;
        }
        .about-img-wrap {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }
        .about-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: transform 6s ease, filter 0.5s ease;
        }
        .about-img-wrap:hover img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }
        .about-img-accent {
          position: absolute;
          top: -16px;
          left: -16px;
          width: 80px;
          height: 80px;
          border-top: 1px solid var(--gold);
          border-left: 1px solid var(--gold);
        }
        .about-img-accent2 {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 80px;
          height: 80px;
          border-bottom: 1px solid var(--gold);
          border-right: 1px solid var(--gold);
        }
        .about-text p {
          font-size: 17px;
          line-height: 1.9;
          color: var(--ink-soft);
          margin-bottom: 24px;
        }
        .about-text p.large {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
          color: var(--ink);
        }
        .about-stats {
          display: flex;
          gap: 48px;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid var(--gold-light);
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 300;
          color: var(--ink);
          line-height: 1;
        }
        .stat-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--warm-gray);
          margin-top: 8px;
        }

        /* WORK */
        .work { background: var(--cream); }
        .work-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }
        .filter-tabs {
          display: flex;
          gap: 4px;
        }
        .filter-btn {
          padding: 10px 24px;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--warm-gray);
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Tenor Sans', sans-serif;
        }
        .filter-btn:hover { color: var(--ink); }
        .filter-btn.active {
          color: var(--ink);
          border-color: var(--ink);
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .portfolio-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .portfolio-item:nth-child(2) { margin-top: 48px; }
        .portfolio-item:nth-child(5) { margin-top: -48px; }
        .portfolio-img {
          aspect-ratio: 2/3;
          overflow: hidden;
        }
        .portfolio-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: grayscale(25%) contrast(1.05);
        }
        .portfolio-item:hover .portfolio-img img {
          transform: scale(1.08);
          filter: grayscale(0%) contrast(1.08);
        }
        .portfolio-meta {
          padding: 20px 0 8px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .portfolio-cat {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .portfolio-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          font-style: italic;
          color: var(--ink);
        }
        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 60px;
          background: rgba(26, 23, 20, 0.0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.4s ease;
        }
        .portfolio-overlay span {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--cream);
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.4s ease;
        }
        .portfolio-item:hover .portfolio-overlay {
          background: rgba(26, 23, 20, 0.35);
        }
        .portfolio-item:hover .portfolio-overlay span {
          opacity: 1;
          transform: translateY(0);
        }

        /* SERVICES */
        .services { background: var(--ink); color: var(--cream); }
        .services .section-title { color: var(--cream); }
        .services .section-label { color: var(--gold); }
        .services .divider { background: var(--gold); }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 64px;
        }
        .services-col-label {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 40px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(200, 169, 126, 0.3);
        }
        .service-item {
          padding: 32px 0;
          border-bottom: 1px solid rgba(245, 240, 235, 0.08);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: start;
          cursor: default;
          transition: border-color 0.3s ease;
        }
        .service-item:hover { border-bottom-color: rgba(200, 169, 126, 0.4); }
        .service-item:first-of-type { padding-top: 0; }
        .service-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 300;
          color: var(--cream);
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .service-desc {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(245, 240, 235, 0.55);
          max-width: 340px;
        }
        .service-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: rgba(200, 169, 126, 0.5);
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        /* PHILOSOPHY */
        .philosophy {
          background: var(--bone);
          text-align: center;
          padding: 140px 80px;
        }
        .philosophy .section-label { justify-content: center; display: flex; }
        .manifesto {
          max-width: 720px;
          margin: 0 auto;
        }
        .manifesto-line {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 8px;
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
        }
        .manifesto-line:nth-child(1) { animation-delay: 0.1s; }
        .manifesto-line:nth-child(2) { animation-delay: 0.25s; font-style: italic; color: var(--ink-soft); }
        .manifesto-line:nth-child(3) { animation-delay: 0.4s; }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .manifesto-caption {
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--warm-gray);
          margin-top: 48px;
        }
        .manifesto-separator {
          width: 1px;
          height: 64px;
          background: var(--gold-light);
          margin: 48px auto;
        }
        .philosophy-pillars {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin-top: 72px;
          flex-wrap: wrap;
        }
        .pillar {
          text-align: center;
        }
        .pillar-symbol {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          font-style: italic;
          color: var(--gold);
          display: block;
          margin-bottom: 12px;
        }
        .pillar-text {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--warm-gray);
        }

        /* CONTACT */
        .contact {
          background: var(--cream);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 0;
        }
        .contact-left {
          padding: 120px 80px;
          background: var(--ink);
          color: var(--cream);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-left .section-label { color: var(--gold); }
        .contact-left .section-title { color: var(--cream); margin-bottom: 24px; }
        .contact-tagline {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(245, 240, 235, 0.6);
          margin-bottom: 56px;
          max-width: 380px;
        }
        .contact-email {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          font-style: italic;
          color: var(--gold);
          text-decoration: none;
          display: block;
          margin-bottom: 40px;
          transition: color 0.3s ease;
        }
        .contact-email:hover { color: var(--cream); }
        .btn-light {
          display: inline-block;
          padding: 16px 40px;
          border: 1px solid var(--gold);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.4s ease;
          font-family: 'Tenor Sans', sans-serif;
        }
        .btn-light::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--gold);
          transition: left 0.4s ease;
          z-index: -1;
        }
        .btn-light:hover { color: var(--ink); }
        .btn-light:hover::before { left: 0; }

        .contact-right {
          padding: 120px 80px;
          background: var(--bone);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-right .location {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--warm-gray);
          margin-bottom: 16px;
        }
        .contact-right .city {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          color: var(--ink);
          line-height: 0.9;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }
        .contact-right .city2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          font-style: italic;
          color: var(--warm-gray);
          line-height: 0.9;
          letter-spacing: -0.02em;
        }
        .contact-social {
          display: flex;
          gap: 32px;
          margin-top: 56px;
          padding-top: 40px;
          border-top: 1px solid var(--gold-light);
        }
        .contact-social a {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--warm-gray);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-social a:hover { color: var(--ink); }

        /* FOOTER */
        footer {
          background: var(--ink);
          padding: 32px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 0.2em;
          color: rgba(245, 240, 235, 0.5);
        }
        .footer-copy {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(245, 240, 235, 0.25);
        }

        /* ANIMATIONS */
        .fade-in {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          nav { padding: 24px 24px; }
          .nav.scrolled { padding: 16px 24px; }
          .nav-links { display: none; }

          .hero {
            grid-template-columns: 1fr;
            height: auto;
          }
          .hero-left {
            padding: 120px 32px 60px;
            order: 2;
          }
          .hero-right {
            height: 55vw;
            min-height: 280px;
            order: 1;
          }
          .hero-overlay {
            background: linear-gradient(to bottom, transparent 60%, var(--cream));
          }
          .hero-index { display: none; }

          section { padding: 80px 32px; }

          .about {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 80px 32px;
          }
          .about-img-wrap { aspect-ratio: 4/3; max-height: 400px; }

          .portfolio-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .portfolio-item:nth-child(2),
          .portfolio-item:nth-child(5) { margin-top: 0; }
          .portfolio-item:nth-child(3) { display: none; }
          .portfolio-item:nth-child(6) { display: none; }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .philosophy { padding: 80px 32px; }
          .philosophy-pillars { gap: 40px; }

          .contact {
            grid-template-columns: 1fr;
          }
          .contact-left, .contact-right { padding: 80px 32px; }
          .contact-right .city, .contact-right .city2 { font-size: 52px; }

          footer { padding: 24px 32px; }
        }

        @media (max-width: 500px) {
          .portfolio-grid { grid-template-columns: 1fr; }
          .portfolio-item:nth-child(3),
          .portfolio-item:nth-child(6) { display: block; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">Alba Mimmi</a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef} id="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Milan · Rome · Worldwide</div>
          <h1 className="hero-headline serif">
            I don't style outfits.<br />
            I shape <em>identities.</em>
          </h1>
          <p className="hero-sub">
            Creative Stylist<br />Visual Storyteller
          </p>
          <a href="#contact" className="btn-primary">Work with me</a>
          <div className="hero-index">Milano — MMXXV</div>
        </div>
        <div className="hero-right">
          <img
            src="/images/alba-hero-2-2.png"
            alt="Alba Mimmi — Creative Stylist"
          />
          <div className="hero-overlay" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about fade-in" id="about">
        <div className="about-img-wrap">
          <img
            src="/images/third.png"
            alt="Alba Mimmi"
          />
          <div className="about-img-accent" />
          <div className="about-img-accent2" />
        </div>
        <div className="about-text">
          <div className="section-label">About</div>
          <h2 className="section-title serif">
            Style as a form<br />of <em>self-authorship</em>
          </h2>
          <div className="divider" />
          <p className="large">
            "I have always believed that the way we dress is the first story we tell — before we speak a single word."
          </p>
          <p>
            Based between Milan and Rome, I work at the intersection of fashion, identity, and visual narrative. My practice is built on a simple conviction: style is not decoration. It is communication. It is authorship.
          </p>
          <p>
            For over a decade, I have worked with individuals and brands to translate the invisible — character, intention, presence — into something the eye can hold.
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num serif">10+</div>
              <div className="stat-label">Years of practice</div>
            </div>
            <div>
              <div className="stat-num serif">200+</div>
              <div className="stat-label">Identities shaped</div>
            </div>
            <div>
              <div className="stat-num serif">40+</div>
              <div className="stat-label">Campaigns directed</div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work fade-in" id="work">
        <div className="work-header">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="section-title serif">Visual <em>narratives</em></h2>
          </div>
          <div className="filter-tabs">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn ${activeFilter === c ? "active" : ""}`}
                onClick={() => setActiveFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="portfolio-grid">
          {filtered.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="portfolio-overlay">
                <span>View Project</span>
              </div>
              <div className="portfolio-meta">
                <span className="portfolio-cat">{item.category}</span>
                <span className="portfolio-title serif">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services fade-in" id="services">
        <div className="section-label">Services</div>
        <h2 className="section-title serif">
          What we<br /><em>create together</em>
        </h2>
        <div className="divider" />
        <div className="services-grid">
          <div>
            <div className="services-col-label">For Individuals</div>
            {INDIVIDUAL_SERVICES.map((s, i) => (
              <div className="service-item" key={s.name}>
                <div>
                  <div className="service-name serif">{s.name}</div>
                  <div className="service-desc">{s.desc}</div>
                </div>
                <div className="service-num serif">0{i + 1}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="services-col-label">For Brands</div>
            {BRAND_SERVICES.map((s, i) => (
              <div className="service-item" key={s.name}>
                <div>
                  <div className="service-name serif">{s.name}</div>
                  <div className="service-desc">{s.desc}</div>
                </div>
                <div className="service-num serif">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy fade-in" id="philosophy">
        <div className="section-label">Manifesto</div>
        <div className="manifesto">
          <div className="manifesto-line serif">Style is identity.</div>
          <div className="manifesto-line serif">Clothing is language.</div>
          <div className="manifesto-line serif">Individuality outlasts every trend.</div>
          <div className="manifesto-separator" />
          <p className="manifesto-caption">The principles that guide every collaboration</p>
        </div>
        <div className="philosophy-pillars">
          <div className="pillar">
            <span className="pillar-symbol serif">I</span>
            <div className="pillar-text">Identity first</div>
          </div>
          <div className="pillar">
            <span className="pillar-symbol serif">N</span>
            <div className="pillar-text">Narrative always</div>
          </div>
          <div className="pillar">
            <span className="pillar-symbol serif">P</span>
            <div className="pillar-text">Precision in vision</div>
          </div>
          <div className="pillar">
            <span className="pillar-symbol serif">A</span>
            <div className="pillar-text">Authenticity over trend</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact fade-in" id="contact">
        <div className="contact-left">
          <div className="section-label">Contact</div>
          <h2 className="section-title serif">
            Let's create<br /><em>something together</em>
          </h2>
          <p className="contact-tagline">
            Every collaboration begins with a conversation. Tell me about your vision — I'll tell you how we shape it.
          </p>
          <a href="mailto:studio@albamimmi.com" className="contact-email serif">
            studio@albamimmi.com
          </a>
          <a href="mailto:studio@albamimmi.com" className="btn-light">
            Start a conversation
          </a>
        </div>
        <div className="contact-right">
          <div className="location">Based in</div>
          <div className="city serif">Bologna</div>
          <div className="city2 serif">Emilia Romagna</div>
          <div className="contact-social">
            <a href="https://www.instagram.com/albamimmi">Instagram</a>
            <a href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40albamimmi&lang=en&enter_method=mandatory">Tik Tok</a>
            <a href="https://www.youtube.com/@albamimmi">Youtube</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo serif">Alba Mimmi</span>
        <span className="footer-copy">© 2026 — All rights reserved</span>
      </footer>

      {/* Scroll animations */}
      <ScrollReveal />
    </>
  );
}

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
