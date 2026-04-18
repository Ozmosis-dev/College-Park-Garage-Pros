const highlights = [
  "Free inspection with any repair service",
  "Transparent, no-haggle pricing models",
  "Certified master technicians only"
];

const transformations = [
  {
    before:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6axsXXna8-62_vdc--YVbdzMWxuOa3qxWNviuLmJYJrzFAxAaH4HXGkuHCDvgWgJrYtTDHntYZc-c_qJJ0eOwWiCVmeDB6W4_10oNiGOMSjajtITJRNKNkpHd2YqRKjHpJIdw0Dg6Fmfjl0vw-yppG4n9QiW5CYl3X67syx3Ty3Ljnf-pWZ-Rv2C9Ri-SsdbO6K-7POMmPvLah9SVflNRHrE5HiM6dbnqF87ZkxPmhFPxV4geRN_piyq0Q9tnwf1gBvZ0sFez9M0",
    after:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUdQ-jrxkVuSKEtbS7mN2S9HDnpSiQ_2yl17A5tz6gT74L_KTjyIf_7GBsCHGwz6guFyLSg6zPmRx8SIIzCUp6oeO4Rx41-wL1_j5yniiS0e2z6tMFBqgoWsqgtBiVIwrG7TNxYhX1SILz_k7_YZyGN1hu133F_D9F5GWm1tx_Hu1xBL4rsHPH6cGvXql2jTE_FubDp49fvzB25PXX4UjYbq8_eUhA5p4tmnU1wRjVpql5wZqlCocmNBn7-GFc4mlmP1mG0F6XSDc",
    caption: "Total modern upgrade for a craftsman home in College Park."
  },
  {
    before:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGbGgQIPj7_iIX0KqsYGrzUAP3BzA_VgGbZEmsNhH6qUE18hjPowygSoMtTyKUbAj5821wRsyBoflQVlnQEhAUHomqDTX1rIn9ZFX7nlR7b4oXlj9SycmyFQ7v1LuxynSvB74kMBvxgK29UPepw8B6inM35XvJB6EsgOQKECqmkvHDvldHkwJHbmUdeD8Gb1wAe0Qy0OqDxEIdJCsqsr94P8Q1n38TPdqlRBxp61592lIfwocZtyWVGQN5-EFoAN-vALjokn6JQ3E",
    after:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBF52MqfBfb5OR5spzgpyShTd_4VSn7ld9Dmi14HUMr6pYBP2hDnyp_hQqMmafTEt7TVjDJJchQNUDc4ZbUl0GanZ2hfa6tivgY8y00G5W1TJLAGDVp9lnMyNl3RtTPSKgNtyzWZFhrtASy8KqiYlvzZXjqjChuhr0SWmgHI09_WLqlRIObVNt_3AGAWJ622c4CAyDhrKuP_8KjX19427OR_tiX9SrjKAumhcs7vNxydA1fdoic3O7zMRLOzj_zdXqFYeXa4k3tgI4",
    caption: "Full panel replacement after a minor collision. Restoration complete."
  }
];

const services = [
  {
    icon: "installation",
    title: "Installation",
    description:
      "Premium selection of insulated and high-security doors customized to match your home's unique architectural style.",
    items: ["Wood and steel doors", "Custom sizing", "Wind-load rated"]
  },
  {
    icon: "repair",
    title: "Maintenance and Repair",
    description:
      "Swift resolution for broken springs, off-track doors, and frayed cables. Same-day service available for emergencies.",
    items: ["Spring replacement", "Track realignment", "Safety inspections"]
  },
  {
    icon: "opener",
    title: "Smart Openers",
    description:
      "Upgrade to silent, Wi-Fi enabled openers featuring smartphone control, battery backup, and enhanced security.",
    items: ["LiftMaster experts", "Keypad installation", "Remote programming"]
  }
];

const metrics = [
  { value: "2016", label: "Year founded", accent: true },
  { value: "2,456+", label: "Doors installed" },
  { value: "3,214+", label: "Projects completed" },
  { value: "4.9/5", label: "Average rating" }
];

const benefits = [
  {
    icon: "bolt",
    title: "Same-day urgent response",
    description:
      "We understand a stuck garage door is a security risk. Most repairs are completed within 4 hours of your call."
  },
  {
    icon: "verified",
    title: "Highly experienced technicians",
    description:
      "Every member of our crew undergoes 100+ hours of advanced structural engineering and safety training."
  },
  {
    icon: "estimate",
    title: "Fair and upfront estimates",
    description:
      "No hidden fees, no emergency upcharges. You receive a written estimate before any work begins."
  }
];

const reviews = [
  {
    initials: "SH",
    name: "Sarah H.",
    role: "College Park resident",
    quote:
      "Our garage door spring snapped at 10 PM on a Sunday. They were at our house by 8 AM Monday and had it fixed within an hour. Excellent service!"
  },
  {
    initials: "MT",
    name: "Marcus T.",
    role: "Real estate agent",
    quote:
      "I wanted a modern look to match my home's new renovation. The team recommended a perfect glass-panel door and the installation was flawless. Highly recommend!"
  },
  {
    initials: "JW",
    name: "James W.",
    role: "Homeowner",
    quote:
      "Very professional and transparent about costs. They explained exactly why my old opener was failing and gave me three different options for replacement."
  }
];

const faqs = [
  {
    question: "How quickly can you fix a broken garage door spring?",
    answer:
      "Most spring repairs can be completed same-day. We stock various sizes on our trucks to ensure we can get your door operational in a single visit."
  },
  {
    question: "Do you provide emergency services after hours?",
    answer:
      "Yes, we provide 24/7 emergency services for situations where your garage door is stuck open or prevents you from getting your vehicle out."
  },
  {
    question: "What is the typical lifespan of a new garage door?",
    answer:
      "With proper maintenance, a high-quality steel door can last 15-30 years, while garage door openers typically last 10-15 years."
  }
];

const serviceAreas = [
  "College Park",
  "Atlanta",
  "East Point",
  "Hapeville",
  "South Fulton",
  "Union City"
];

function Icon({ name, className = "" }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    className: `icon ${className}`.trim(),
    "aria-hidden": "true"
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12.8 19.86 19.86 0 0 1 2.08 4.09 2 2 0 0 1 4.06 1.9h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.94a16 16 0 0 0 6.06 6.06l1.59-1.23a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="m5 12 5 5L20 7" />
        </svg>
      );
    case "installation":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "repair":
      return (
        <svg {...commonProps}>
          <path d="m14 5 5 5" />
          <path d="m17 2 5 5" />
          <path d="M3 21 14 10" />
          <path d="m6 15 3 3" />
        </svg>
      );
    case "opener":
      return (
        <svg {...commonProps}>
          <rect x="6" y="4" width="12" height="7" rx="2" />
          <path d="M8 15h8" />
          <path d="M12 11v9" />
          <path d="m9 20 3 2 3-2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...commonProps}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "verified":
      return (
        <svg {...commonProps}>
          <path d="m9 12 2 2 4-4" />
          <path d="M12 3 6 5v6c0 4 2.5 7.5 6 10 3.5-2.5 6-6 6-10V5l-6-2Z" />
        </svg>
      );
    case "estimate":
      return (
        <svg {...commonProps}>
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps}>
          <path d="m12 3 2.9 5.88 6.5.95-4.7 4.58 1.1 6.49L12 17.8l-5.8 3.1 1.1-6.49-4.7-4.58 6.5-.95L12 3Z" />
        </svg>
      );
    case "location":
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 6 5v6c0 4 2.5 7.5 6 10 3.5-2.5 6-6 6-10V5l-6-2Z" />
        </svg>
      );
    case "award":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="m8.5 14.5-1 6 4.5-2 4.5 2-1-6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...commonProps}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function NavLink({ href, children, active = false }) {
  return (
    <a className={`nav-link${active ? " active" : ""}`} href={href}>
      {children}
    </a>
  );
}

function SectionEyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export default function HomePage() {
  return (
    <main>
      <nav className="topbar">
        <div className="shell topbar-inner">
          <a className="brand" href="#top">
            College Park Garage Pros
          </a>
          <div className="nav-links">
            <NavLink href="#top" active>
              Home
            </NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
          </div>
          <div className="topbar-actions">
            <a className="phone-link desktop-only" href="tel:4045550199">
              (404) 555-0199
            </a>
            <a className="button button-primary button-small" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="shell hero-content">
          <div className="hero-copy">
            <SectionEyebrow>Emergency service available</SectionEyebrow>
            <h1>Most Trusted and Affordable Garage Door Experts</h1>
            <p>
              Fast, reliable garage door repairs and installations in College
              Park. We bring technical precision and structural security back
              to your home, 24/7.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                <span>Get a Free Quote</span>
                <Icon name="arrow" />
              </a>
              <a className="button button-glass" href="tel:4045550199">
                <Icon name="phone" />
                <span>(404) 555-0199</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-blueprint" aria-hidden="true">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6mf9hlYZtvtVjRG13v9gD7yfPDsps-To1-6E37kRtbcLv92QFfzNjW0hGIJ2tq0OQdjvQvvr3lErQsTjO3qIEPgd_YDVkiUGtPs-lc5xyqzhfRaYESg2G0i0O36MBd-JZCtAse9KejlhfSZCbYWHpzi8A7sDB47-4pgD5DSwMkO4WDyV681xKEhcdCR4QRZ3n0HG4uIO6gSJih-y4ua-jWUWrXMUOKyOJYKTMFq7a7xEoXkNv9TwPpuNtrKJqJakByoFReKe-W5E"
            alt=""
          />
        </div>
      </section>

      <section className="section section-bright">
        <div className="shell feature-grid">
          <div>
            <h2>
              Top-Quality Garage Door Service At Prices You Can Actually Afford
            </h2>
            <p className="section-copy">
              Whether it&apos;s a snapped spring in the middle of the night or a
              complete upgrade for your home&apos;s curb appeal, we provide
              editorial-grade precision for every bolt and panel.
            </p>
            <ul className="check-list">
              {highlights.map((item) => (
                <li key={item}>
                  <Icon name="check" className="accent-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="image-stack">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHwoEtN7yVm0HD-1KJ3YTLCJtcUieuoZH-EYyc5vTcRAjrNfTRCqHZX_SNlyoAJu0H7SN56SVtms-SlFg9nY2tD5yVhaKJ6BgQhYQxbiCaLY7zeIeIPCuS-e9o6XfgNixNOnG48j79OKh06p3GrWQX8gb-X9P5MxyIn1qYJRP3E80dJJ3tv5vsfRS4Ce0k7JmTtAde_92r8eorNyj7WX3XwXQhmOmHNUBCBh_GRSyMM4XguAOtuqoqcgF-nGCcfhqUfhc_MZ_LvEc"
              alt="Modern garage door installation on a contemporary home."
            />
            <div className="image-accent image-accent-red" />
            <div className="image-accent image-accent-navy" />
          </div>
        </div>
      </section>
      <section className="section section-muted" id="gallery">
        <div className="shell">
          <div className="section-heading section-heading-center">
            <h2>Transformation Results</h2>
            <div className="heading-bar" />
          </div>
          <div className="transformation-grid">
            {transformations.map((item) => (
              <article className="transformation-card" key={item.caption}>
                <div className="before-after-grid">
                  <div>
                    <span className="label muted">Before</span>
                    <img src={item.before} alt="Before garage door project." />
                  </div>
                  <div>
                    <span className="label accent">After</span>
                    <img src={item.after} alt="Completed garage door project." />
                  </div>
                </div>
                <p>{item.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="services">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <h2>Comprehensive Care</h2>
              <p className="section-copy">
                From the smallest spring to the most complex smart-system
                integration, we treat every garage door with architectural
                precision.
              </p>
            </div>
            <a className="inline-link" href="#contact">
              <span>Explore all services</span>
              <Icon name="chevron" />
            </a>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics-band">
        <div className="shell metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <div className={`metric-value${metric.accent ? " accent" : ""}`}>
                {metric.value}
              </div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-default">
        <div className="shell choose-grid">
          <div>
            <h2>The Precision Standard: Why Homeowners Choose Us</h2>
            <div className="benefit-list">
              {benefits.map((benefit) => (
                <article className="benefit-item" key={benefit.title}>
                  <div className="benefit-icon">
                    <Icon name={benefit.icon} className="accent-icon" />
                  </div>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mosaic-grid">
            <img
              className="mosaic-tall"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnuyfanAi9xLlIs2sH7mw9I43yvu__PfImuKLVG1Dz7J1YarW4eAukZyVyKwA80Upo3Tg7NTRLIhi4Ns7yHcRT5npYD_jCxHLmGBe6mdzqYwhxrRm1T-DVt5IM-cg_964QKVbHt4GqZii9NW56ONRA7TU8i-sOiJKpJ3UMt8om5CUJBQhdEAYLvliEM-Xqy6sts9wDeRK46PKjBw433Mx-Lq_JAgtSuTCevNU8IsvsekM9YV-2T1RQ94yTQyKQmcwi6KPecn91Daw"
              alt="Garage door showroom options."
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJskTxJCyQsjFMGewFaK16xQfnG6gnnLWb0Z4FWrblWs-4gRc2fBd4VNxP9Vi_ZswbWGWF0Ijec3U9WZWqBV6fG2uH68Zv-6glGp5p7xpA1c2V2kty-KvpJtTk2s7npG6GWzKtqlD221QqSuaOCmiF3drpTbI5Pd-luVbSO39TEnZ0jHRAzrfBgjBVdn8lhdd_oA3AhwPCVdzaD2RaOrIqWZt1Po0d07NT9gXGFIelHFiXJyJodwHWrCRYtrlwJBeJ1HjZQLqegMY"
              alt="Precision garage door hardware."
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdVuIwCGvMmns1oZ7gco0wdoHwR2Cs7NuP-tfjRBR4J4lKy2jKe9Vw7ulp80seGPm-ASTJTafegAd8cjImb23uws5CS0-k4AYnugWxHYxUnd6TesEuS3DwdX_dzEDQV6xRzS5GnE_jOrll7RH4cZCqh6qxP-0Txkn_00K8fCVAHhIUjREFUz6UpYIszKdpC4mqKUTs5_vfNGVo8Ttdq1y-bh7yzOYdIiFePmBmh3Ch_y7NDhELDIHq_vpSdPzSijXDFCTTZ6xoolI"
              alt="Technician tools prepared for service."
            />
          </div>
        </div>
      </section>

      <section className="section section-high" id="reviews">
        <div className="shell">
          <div className="section-heading section-heading-center">
            <h2>What Our Customers Say</h2>
            <p className="section-copy">
              Real feedback from satisfied College Park residents.
            </p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="star" className="star-icon" />
                  ))}
                </div>
                <p className="review-quote">&quot;{review.quote}&quot;</p>
                <div className="reviewer">
                  <div className="reviewer-badge">{review.initials}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="shell team-grid">
          <div>
            <img
              className="team-photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlUfPIplwUj0lSU3rDYHKqGlb5nTJ_4BHhKm25bWSURabPWHampM6yuhJHb8aTqeYFa3KQhIoYdZ9ysZCex9nFKyfLhFF_6iZEVgCGHFSEqiTouONDqIgeKvsngxC17rIVc-XJnLgMUkR4WoMLaNdKzsE_yk9Y7suoDc166M2rfLxOH21NLFmn-pVCKz0tlzaheZi2gMjwQmQdQsLBJu2h8AE2qRk5nFAtEtUqtUgAjXv7qL0taCYHJQpDaWUGWmDpwz9olT7vXfY"
              alt="Garage door technicians standing by a service vehicle."
            />
          </div>
          <div>
            <h2>Work With Well-Qualified Technicians</h2>
            <p className="section-copy">
              We don&apos;t use subcontractors. Every technician at College Park
              Garage Pros is a background-checked, full-time employee who takes
              pride in structural security and customer satisfaction.
            </p>
            <div className="credential-list">
              <div className="credential-card">
                <Icon name="shield" className="accent-icon" />
                <span>Fully licensed, bonded and insured</span>
              </div>
              <div className="credential-card">
                <Icon name="award" className="accent-icon" />
                <span>Factory certified by major brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-default">
        <div className="shell faq-shell">
          <div className="section-heading section-heading-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell areas-grid">
          <div>
            <h2>Service Areas</h2>
            <p className="section-copy section-copy-light">
              We proudly serve College Park, GA, and all surrounding
              communities with top-tier garage door solutions.
            </p>
            <div className="area-list">
              {serviceAreas.map((area) => (
                <div className="area-item" key={area}>
                  <Icon name="location" className="accent-icon" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-frame">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxI1SJ__Oa7VmX21Pp0yP_01FrE1r03p_02zEpn0kOsZcvmsh40S2MB1PJEOY-laQYDZc_Y_7wdm2kuN5zRVe9sq3j10YBqvDo3QEAnFmFKTnqOYkJ7pSBk8cTwxSmbRDNwRCIJ5KV1yxT-qAQ6gkdVNrCppppi6dA22e_RcyueDqiunr6uIXPCGrwDFNzhkjkInwQJAdr0oTGxd0IQmrSY9EORZ0jB0feUN4z_SW4TKOtYRDZR1R7TGGiNgnTWLGudM6z4KDD0tg"
              alt="Map view of the College Park, Georgia area."
            />
          </div>
        </div>
      </section>

      <section className="section section-white" id="contact">
        <div className="shell">
          <div className="contact-card">
            <div className="contact-sidebar">
              <h2>Ready to Fix, Upgrade, or Replace Your Garage Door?</h2>
              <p>
                Fill out our form for a free, no-obligation estimate or call us
                directly for immediate emergency service.
              </p>
              <a className="contact-phone" href="tel:4045550199">
                <span className="contact-phone-icon">
                  <Icon name="phone" />
                </span>
                <span>(404) 555-0199</span>
              </a>
            </div>
            <div className="contact-form-wrap">
              <form className="quote-form">
                <label>
                  <span>Name</span>
                  <input type="text" placeholder="Your Name" />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="tel" placeholder="Your Phone Number" />
                </label>
                <label className="full">
                  <span>Service Needed</span>
                  <select defaultValue="Repair Service">
                    <option>Repair Service</option>
                    <option>New Installation</option>
                    <option>Opener Repair/Replacement</option>
                    <option>Maintenance Tune-up</option>
                  </select>
                </label>
                <label className="full">
                  <span>Message</span>
                  <textarea placeholder="How can we help?" rows="4" />
                </label>
                <button className="button button-primary full submit-button" type="submit">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <div className="footer-brand">College Park Garage Pros</div>
            <p>
              Professional garage door services for residential and commercial
              properties. Reliable, affordable, and expert-driven.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <a href="#contact">Emergency repairs</a>
            <a href="#services">Installation</a>
            <a href="#services">Maintenance</a>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#top">Service areas</a>
            <a href="#contact">Privacy policy</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div>
            <h3>Contact Info</h3>
            <p>College Park, GA</p>
            <a className="footer-phone" href="tel:4045550199">
              (404) 555-0199
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>Copyright 2026 College Park Garage Pros. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
