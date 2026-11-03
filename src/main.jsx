import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const image = (id, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const navigation = [
  ["Home", "#home"],
  ["Vehicles", "#vehicles"],
  ["Roadster", "#roadster"],
  ["Technology", "#technology"],
  ["Energy", "#energy"],
  ["Investment", "#investment"],
  ["Support", "#support"],
];

const vehicles = [
  {
    name: "Model S",
    descriptor: "The long-distance electric sedan.",
    image: "photo-1492144534655-ae79c964c9d7",
    position: "center 56%",
  },
  {
    name: "Model 3",
    descriptor: "A focused, all-electric everyday drive.",
    image: "photo-1503376780353-7e6692767b70",
    position: "center 55%",
  },
  {
    name: "Model X",
    descriptor: "An all-electric SUV, designed around space.",
    image: "photo-1533473359331-0135ef1b58bf",
    position: "center 61%",
  },
  {
    name: "Model Y",
    descriptor: "An all-electric crossover for daily life.",
    image: "photo-1549317661-bd32c8ce0db2",
    position: "center 55%",
  },
  {
    name: "Cybertruck",
    descriptor: "A distinctive, all-electric utility vehicle.",
    image: "photo-1552519507-da3b142c6e3d",
    position: "center 58%",
  },
];

const investmentModels = [
  {
    name: "Model S",
    id: "invest-model-s",
    descriptor:
      "A premium electric sedan. Ask us about vehicle availability and the information relevant to your enquiry.",
    image: "photo-1503376780353-7e6692767b70",
    position: "center 53%",
  },
  {
    name: "Model 3",
    id: "invest-model-3",
    descriptor:
      "An all-electric sedan for everyday driving. Contact our team for current, verifiable vehicle information.",
    image: "photo-1492144534655-ae79c964c9d7",
    position: "center 57%",
  },
  {
    name: "Model X",
    id: "invest-model-x",
    descriptor:
      "An all-electric SUV. We can help with general vehicle questions and the details available for review.",
    image: "photo-1549317661-bd32c8ce0db2",
    position: "center 54%",
  },
  {
    name: "Model Y",
    id: "invest-model-y",
    descriptor:
      "An all-electric crossover. Start a conversation to request accurate, up-to-date information.",
    image: "photo-1533473359331-0135ef1b58bf",
    position: "center 58%",
  },
  {
    name: "Cybertruck",
    id: "invest-cybertruck",
    descriptor:
      "A distinctive electric utility vehicle. Enquire for current details; no investment returns or terms are implied.",
    image: "photo-1552519507-da3b142c6e3d",
    position: "center 60%",
  },
  {
    name: "Roadster",
    id: "invest-roadster",
    descriptor:
      "A future-facing performance vehicle concept. Announced targets are not production specifications or an offer.",
    image: "photo-1504215680853-026ed2a45def",
    position: "center 54%",
  },
];

const energy = [
  {
    number: "01",
    title: "Solar panels",
    text: "Explore home solar as one part of a more considered energy system. Product availability and configuration vary by location.",
    image: "photo-1509391366360-2e959784a276",
    alt: "Rows of solar panels in an open landscape",
  },
  {
    number: "02",
    title: "Powerwall",
    text: "Home battery storage can work alongside solar and the grid. Ask for current product information in your region.",
    image: "photo-1508514177221-188b1cf16e9d",
    alt: "Residential rooftop solar panels",
  },
  {
    number: "03",
    title: "Charging solutions",
    text: "Home and destination charging help make electric driving part of the everyday routine.",
    image: "photo-1593941707882-a5bba14938c7",
    alt: "Electric vehicle connected to a charging station",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#home"
      aria-label="TeslaVolt home"
    >
      Tesla<span>Volt</span>
    </a>
  );
}

function Header({ onSupport }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([label, target]) => (
            <a key={target} href={target} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <button
            type="button"
            className="nav-contact"
            onClick={() => {
              closeMenu();
              onSupport();
            }}
          >
            Contact <Arrow diagonal />
          </button>
        </nav>
      </div>
    </header>
  );
}

function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function VehicleSection() {
  return (
    <section className="vehicles-section section-pad" id="vehicles">
      <div className="section-heading reveal">
        <div>
          <SectionEyebrow>Electric, in its own element</SectionEyebrow>
          <h2>Meet the<br />lineup.</h2>
        </div>
        <p className="section-intro">
          A closer look at six distinctive vehicles. The photography shown is
          representative and does not depict or verify the named models.
          Authorized model-specific imagery and current product details are
          still required.
        </p>
      </div>
      <div className="vehicle-list">
        {vehicles.map((vehicle, index) => (
          <article className="vehicle-feature reveal" key={vehicle.name}>
            <div className="vehicle-image-wrap">
              <img
                src={image(vehicle.image, 1500)}
                alt={`Representative automotive photography for ${vehicle.name}; not a verified image of this model`}
                loading="lazy"
                style={{ objectPosition: vehicle.position }}
              />
              <span className="image-index">0{index + 1} / 05</span>
              <span className="image-note">Representative imagery</span>
            </div>
            <div className="vehicle-copy">
              <SectionEyebrow>Electric vehicle</SectionEyebrow>
              <h3>{vehicle.name}</h3>
              <p>{vehicle.descriptor}</p>
              <a className="text-link" href={`#invest-${vehicle.name.toLowerCase().replace(" ", "-")}`}>
                Explore vehicle <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="roadster-teaser reveal">
        <span>One more, imagined differently.</span>
        <a className="text-link" href="#roadster">
          Discover Roadster <Arrow />
        </a>
      </p>
    </section>
  );
}

function RoadsterSection() {
  return (
    <section className="roadster-section" id="roadster">
      <div className="roadster-image">
        <img
          src={image("photo-1504215680853-026ed2a45def", 2000)}
          alt="Representative sports-car photography; not a verified image of the Roadster"
          loading="lazy"
        />
        <div className="roadster-overlay" />
        <div className="roadster-content reveal">
          <SectionEyebrow>Beyond the expected · concept</SectionEyebrow>
          <h2>Roadster.<br /><span>Still in the making.</span></h2>
          <p>
            A vision for an electric sports car, not a confirmed production
            specification. The available information describes concept-era
            targets; final configuration, timing and capabilities have not
            been independently verified here.
          </p>
          <a className="button button-outline" href="#investment">
            Explore Roadster enquiries <Arrow />
          </a>
        </div>
        <span className="roadster-caption">A concept, not a production vehicle depiction</span>
      </div>
      <div className="roadster-details">
        <div className="roadster-performance reveal">
          <SectionEyebrow>Original reveal · announced targets</SectionEyebrow>
          <div className="performance-stat">
            <strong>&lt;1.9<span> sec</span></strong>
            <span>0–60 mph target</span>
          </div>
          <div className="performance-stat">
            <strong>620<span> mi</span></strong>
            <span>Range target</span>
          </div>
          <p className="fine-print">
            Figures were announced for the Roadster concept; they are not
            independently verified and must not be read as final production
            specifications.{" "}
            <a
              href="https://www.tesla.com/roadster"
              target="_blank"
              rel="noreferrer"
            >
              Reference the manufacturer’s Roadster page
            </a>
            .
          </p>
        </div>
        <div className="concept-features reveal">
          <SectionEyebrow>Concept features · production unconfirmed</SectionEyebrow>
          <h3>Ideas still taking shape.</h3>
          <div className="concept-row">
            <span>01</span>
            <div>
              <h4>Active Aero</h4>
              <p>Concept feature; production fitment and operation are unconfirmed.</p>
            </div>
          </div>
          <div className="concept-row">
            <span>02</span>
            <div>
              <h4>Cold-Gas Thrusters</h4>
              <p>Described for a proposed SpaceX package; not confirmed for a production vehicle.</p>
            </div>
          </div>
          <div className="concept-row">
            <span>03</span>
            <div>
              <h4>Multi-Mode Suction System</h4>
              <p>Technical details and source material have not been provided for verification.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="technology-section section-pad" id="technology">
      <div className="technology-heading reveal">
        <div>
          <SectionEyebrow>Technology</SectionEyebrow>
          <h2>Assistance.<br /><span>With attention.</span></h2>
        </div>
        <p>
          Full Self-Driving (Supervised) is a driver-assistance system. The
          driver must remain attentive and ready to take over at all times.
          Supervised driving is not autonomous driving.
        </p>
      </div>
      <div className="demo-frame reveal" aria-label="Video demonstration placeholder">
        <div className="demo-grid" aria-hidden="true" />
        <div className="demo-placeholder">
          <span className="demo-label"><i /> Authorized media required</span>
          <div className="demo-center">
            <div className="play-mark" aria-hidden="true">
              <span />
            </div>
            <p>Real-world demonstration</p>
            <span>Video placeholder · no demonstration footage supplied</span>
          </div>
          <span className="demo-corner">TeslaVolt / Technology</span>
        </div>
      </div>
      <div className="technology-caption reveal">
        <span>01 — Driver supervision remains essential</span>
        <p>
          A genuine, authorized road demonstration showing real intersections,
          signals, road users and steering activity is needed before this
          section can feature a video.
        </p>
      </div>
    </section>
  );
}

function EnergySection() {
  return (
    <section className="energy-section section-pad" id="energy">
      <div className="energy-heading reveal">
        <SectionEyebrow>Energy, considered as a system</SectionEyebrow>
        <h2>Power that<br /><span>moves with you.</span></h2>
        <p>
          From generation to storage and charging, explore the ideas behind a
          more connected energy experience. Product availability depends on
          location.
        </p>
      </div>
      <div className="energy-list">
        {energy.map((item, index) => (
          <article className="energy-feature reveal" key={item.title}>
            <div className="energy-image">
              <img src={image(item.image, 1200)} alt={item.alt} loading="lazy" />
              <span>{item.number} / 03</span>
            </div>
            <div className="energy-copy">
              <SectionEyebrow>Energy collection</SectionEyebrow>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="text-link" href="#support">
                Ask a question <Arrow />
              </a>
            </div>
            {index === 0 && <span className="energy-side-note">A broader view of home energy</span>}
          </article>
        ))}
      </div>
    </section>
  );
}

function InvestmentSection({ onInvest }) {
  return (
    <section className="investment-section" id="investment">
      <div className="investment-intro section-pad reveal">
        <SectionEyebrow>Investment &amp; vehicle enquiries</SectionEyebrow>
        <h2>A conversation,<br /><span>not a promise.</span></h2>
        <p>
          Select a vehicle to prepare an enquiry for our support team. No
          investment terms, ownership interests, returns, or authorizations
          have been supplied or verified.
        </p>
      </div>
      <div className="investment-list">
        {investmentModels.map((model, index) => (
          <article
            className={`investment-row${index % 2 ? " investment-reverse" : ""}`}
            id={model.id}
            key={model.name}
          >
            <div className="investment-image">
              <img
                src={image(model.image, 1600)}
                alt={`Representative automotive photography for ${model.name}; not a verified image of this model`}
                loading="lazy"
                style={{ objectPosition: model.position }}
              />
              <span>Representative imagery · {String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="investment-copy">
              <SectionEyebrow>Vehicle enquiry · 0{index + 1}</SectionEyebrow>
              <h3>{model.name}</h3>
              <p>{model.descriptor}</p>
              <button
                type="button"
                className="button button-light"
                onClick={() => onInvest(model.name)}
              >
                Invest / enquire <Arrow />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="investment-disclosure section-pad" id="terms">
        <span className="disclosure-mark">!</span>
        <div>
          <SectionEyebrow>Important information</SectionEyebrow>
          <p>
            This website is for general vehicle enquiries only; it is not an
            offer, solicitation, or recommendation to invest in securities or
            any other financial product. No return, profit, valuation, licence,
            regulatory status, or investment opportunity is represented or
            guaranteed. Verify all information independently before making
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

function SupportSection({ onSupport }) {
  return (
    <section className="support-section section-pad" id="support">
      <div className="support-inner reveal">
        <div>
          <SectionEyebrow>Support, when you need it</SectionEyebrow>
          <h2>Let’s talk.</h2>
          <p>
            Have a question about a vehicle or energy? Start a conversation.
            Our Chaport connection becomes available when the existing widget
            installation is added.
          </p>
        </div>
        <button className="button button-outline" type="button" onClick={onSupport}>
          Open customer support <Arrow />
        </button>
      </div>
    </section>
  );
}

function Footer({ onSupport }) {
  return (
    <footer className="site-footer" id="privacy">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand footer />
          <p>A considered look at electric mobility and energy.</p>
          <span className="independent-note">
            TeslaVolt is independent and is not affiliated with, endorsed by,
            or a subsidiary of Tesla, Inc.
          </span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="#vehicles">Vehicles</a>
          <a href="#roadster">Roadster</a>
          <a href="#technology">Technology</a>
          <a href="#energy">Energy</a>
        </div>
        <div className="footer-column">
          <h2>Information</h2>
          <a href="#investment">Investment enquiries</a>
          <a href="#terms">Important information</a>
          <a href="#privacy">Privacy notice placeholder</a>
          <button type="button" onClick={onSupport}>Support</button>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href="mailto:hello@teslavolt.example">hello@teslavolt.example</a>
          <span>Phone: add contact number</span>
          <span>Contact details are placeholders.</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TeslaVolt</span>
        <span>Independent information &amp; customer enquiries</span>
        <a href="#home">Back to top <Arrow diagonal /></a>
      </div>
      <p className="footer-legal">
        Vehicle names are used for identification only. Vehicle photography is
        representative and is not an image of the named model. Product,
        feature, availability and performance information should be confirmed
        from authorized sources. Privacy notice placeholder: this site does not
        collect form submissions; image requests are served by Unsplash, and a
        connected Chaport widget may process visitor data. Publish a complete
        privacy notice before launch.
      </p>
    </footer>
  );
}

function EnquiryDialog({ enquiry, onClose }) {
  const [copyState, setCopyState] = useState("");

  useEffect(() => {
    setCopyState("");
  }, [enquiry?.message]);

  if (!enquiry) return null;

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(enquiry.message);
      setCopyState("Enquiry copied. Paste it into the chat, then review and send.");
    } catch {
      setCopyState("Copy is unavailable here. Select and copy the enquiry text below.");
    }
  };

  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
      >
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close enquiry" autoFocus>
          ×
        </button>
        <SectionEyebrow>{enquiry.chatOpened ? "Chaport opened" : "Enquiry prepared"}</SectionEyebrow>
        <h2 id="enquiry-title">
          {enquiry.chatOpened
            ? "Your message is ready."
            : enquiry.error
              ? "We couldn’t open support."
              : "Support chat setup needed."}
        </h2>
        <p className="dialog-description">
          {enquiry.chatOpened
            ? "Chaport does not document a message-prefill method. Copy the text below, paste it into the open chat, then review and send it yourself."
            : "Your existing Chaport installation is not detected. The enquiry is ready below; once your widget is installed, this action will open it automatically."}
        </p>
        {enquiry.error && <p className="dialog-error">{enquiry.error}</p>}
        <label className="enquiry-label" htmlFor="enquiry-message">Message for Chaport</label>
        <textarea id="enquiry-message" readOnly value={enquiry.message} rows={4} />
        <button className="button button-light dialog-copy" type="button" onClick={copyMessage}>
          Copy enquiry <Arrow />
        </button>
        <p className="copy-feedback" role="status" aria-live="polite">
          {copyState || enquiry.clipboardState || "Nothing is sent automatically. You stay in control of the message."}
        </p>
      </section>
    </div>
  );
}

function App() {
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enquiry) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setEnquiry(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [enquiry]);

  const prepareEnquiry = (modelName) => {
    const message = modelName
      ? `Hello, I'm interested in investing in ${modelName}. Please provide me with more information about this investment.`
      : "Hello, I'd like to contact TeslaVolt support. Please provide me with more information.";
    const chat = window.chaport;
    const canOpenChat = chat && typeof chat.open === "function";
    let error = "";

    if (canOpenChat) {
      try {
        chat.open();
      } catch {
        error = "Chaport could not be opened. Please use the enquiry text below and contact support.";
      }
    }

    setEnquiry({
      message,
      chatOpened: Boolean(canOpenChat) && !error,
      error,
      clipboardState: "Preparing your enquiry for copying…",
    });

    const updateClipboardState = (clipboardState) => {
      setEnquiry((current) =>
        current?.message === message ? { ...current, clipboardState } : current,
      );
    };

    try {
      if (!navigator.clipboard?.writeText) {
        updateClipboardState("Automatic copy is unavailable here. Use Copy enquiry below.");
      } else {
        navigator.clipboard.writeText(message).then(
          () => updateClipboardState("Enquiry copied. Paste it into the chat, then review and send."),
          () => updateClipboardState("Automatic copy is unavailable here. Use Copy enquiry below."),
        );
      }
    } catch {
      updateClipboardState("Automatic copy is unavailable here. Use Copy enquiry below.");
    }
  };

  return (
    <>
      <Header onSupport={() => prepareEnquiry()} />
      <main>
        <section className="hero-section" id="home">
          <img
            className="hero-image"
            src={image("photo-1503376780353-7e6692767b70", 2200)}
            alt="Cinematic representative automotive photography; not an image of a TeslaVolt or named vehicle"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <SectionEyebrow>Electric mobility · Energy · Perspective</SectionEyebrow>
            <h1>A more<br />considered<br /><span>drive.</span></h1>
            <p>
              A considered look at electric vehicles, thoughtful technology
              and the energy that moves us forward.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#vehicles">
                Explore vehicles <Arrow />
              </a>
              <a className="button button-quiet" href="#technology">
                Discover more <Arrow diagonal />
              </a>
            </div>
            <span className="hero-disclaimer">Independent information · No manufacturer affiliation</span>
          </div>
          <div className="hero-bottom">
            <span>01 / 04</span>
            <span className="hero-line" />
            <a href="#vehicles">Scroll to explore <span>↓</span></a>
          </div>
          <span className="hero-image-note">Representative automotive photography</span>
        </section>
        <div className="manifesto-strip" aria-label="TeslaVolt principles">
          <span>Designed for the curious</span>
          <i />
          <span>Built around the journey</span>
          <i />
          <span>Grounded in what’s known</span>
        </div>
        <VehicleSection />
        <RoadsterSection />
        <TechnologySection />
        <EnergySection />
        <InvestmentSection onInvest={prepareEnquiry} />
        <SupportSection onSupport={() => prepareEnquiry()} />
      </main>
      <Footer onSupport={() => prepareEnquiry()} />
      <button
        className="floating-support"
        type="button"
        onClick={() => prepareEnquiry()}
        aria-label="Open customer support"
      >
        <span className="support-indicator" />
        <span>Support</span>
        <Arrow diagonal />
      </button>
      <EnquiryDialog enquiry={enquiry} onClose={() => setEnquiry(null)} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
