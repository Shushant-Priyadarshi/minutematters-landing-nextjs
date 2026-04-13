import Link from 'next/link'
import styles from './LegalLayout.module.css'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className={styles.page}>
      <div className={styles.bgBefore} aria-hidden="true" />
      <div className={styles.bgAfter} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.backLink} aria-label="Back to home">
          <svg viewBox="0 0 14 14" fill="none" width={14} height={14}>
            <path d="M11.5 7H2.5M6.5 3L2.5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          MinuteMatters
        </Link>
      </header>

      <main className={styles.wrapper}>
        <div className={styles.meta}>
          <span className={styles.brand}>MinuteMatters</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>Last Updated: {lastUpdated}</p>
        </div>

        <div className={styles.content}>
          {children}
        </div>

        <div className={styles.contact}>
          <p>Questions? Reach us at{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&to=contact@minutematters.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.emailLink}
            >
              contact@minutematters.in
            </a>
          </p>
        </div>

        <footer className={styles.footerLinks}>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <span className={styles.footerDot} />
          <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
        </footer>
      </main>
    </div>
  )
}
