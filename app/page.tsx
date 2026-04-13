import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.body} role="main">
      {/* Background elements */}
      <div className={styles.bgBefore} aria-hidden="true" />
      <div className={styles.bgAfter} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />

      <div className={styles.wrapper}>
        <p className={styles.brand}>MinuteMatters</p>

        <h1 className={styles.headline}>
          Your time
          <br />
          is <em className={styles.em}>precious.</em>
        </h1>

        <p className={styles.subline}>
          Book a doctor or a salon chair in seconds — no calls, no queues, no
          wasted minutes.
        </p>

        {/* ── SERVICE CARDS ── */}
        {/* <div className={styles.cards}>
          <a
            className={`${styles.card} ${styles.doctorCard}`}
            href="https://doctor.minutematters.in"
            target="__blank"
            aria-label="Book a Doctor"
          >
            <div
              className={`${styles.cardIcon} ${styles.doctor}`}
              aria-hidden="true"
            >
              🩺
            </div>
            <p className={styles.cardTitle}>Book Doctor</p>
            <p className={styles.cardDesc}>
              Find and book verified doctors near you, instantly.
            </p>
            <span className={styles.cardCta}>
              Book now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <div
            className={`${styles.card} ${styles.salonCard} ${styles.cardDisabled}`}
            aria-disabled="true"
            aria-label="Book Salon — Coming Soon"
          >
            <span className={styles.badge}>Coming Soon</span>
            <div
              className={`${styles.cardIcon} ${styles.salon}`}
              aria-hidden="true"
            >
              ✂️
            </div>
            <p className={styles.cardTitle}>Book Salon</p>
            <p className={styles.cardDesc}>
              Premium salons, real-time slots. Almost here.
            </p>
            <span className={styles.cardCta}>
              Stay tuned
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div> */}
        {/* ── END SERVICE CARDS ── */}

        {/* ── Tagline strip ── */}
        <div className={styles.taglineStrip} aria-label="Features">
          <span className={styles.stripItem}>⚡ Instant booking</span>
          <span className={styles.stripDot} />
          <span className={styles.stripItem}>📍 Near you</span>
          <span className={styles.stripDot} />
          <span className={styles.stripItem}>🕐 Zero wait</span>
        </div>

        {/* ── Social icons ── */}
        {/* Waitlist button commented — uncomment if needed again */}
        <div className={styles.bottomBar}>
          <a
            className={styles.waitlistBtn}
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_gIfgy5M4QZkmJa8owkcP8sbaJNToqbdWHJ0D_JNzFmSlyQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the waitlist"
          >
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" width={14} height={14}>
              <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Join Waitlist
          </a>

          <div className={styles.socialLinks} aria-label="Social links">
            {/* Instagram */}
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/minutemattersindia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MinuteMatters on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/company/minutematters/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MinuteMatters on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M7 10v7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="7.5" r="1" fill="currentColor" />
                <path
                  d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 10v7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              className={styles.socialLink}
              href="https://mail.google.com/mail/?view=cm&to=contact@minutematters.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email MinuteMatters"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M2 8l10 6 10-6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer nav links */}
        {/* <div className={styles.footerLinks}>
          <a href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </a>
          <span className={styles.footerDot} />
          <a href="/terms" className={styles.footerLink}>
            Terms of Service
          </a>
        </div> */}
      </div>
    </main>
  );
}
