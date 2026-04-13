import { Metadata } from 'next'
import LegalLayout from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service — MinuteMatters',
  description: 'MinuteMatters Terms of Service — the rules and guidelines for using our platform.',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 2025">
      <section>
        <h2><span className="num">01</span> Use of Service</h2>
        <p>By using Minutematters, you agree to these Terms of Service. Minutematters provides scheduling and appointment-related services with secure OTP-based authentication. Access to our services is conditional on your compliance with these terms.</p>
      </section>

      <section>
        <h2><span className="num">02</span> User Responsibility</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information when using the platform</li>
          <li>Not misuse the platform or attempt to circumvent its features</li>
          <li>Keep your OTP confidential and not share it with others</li>
        </ul>
      </section>

      <section>
        <h2><span className="num">03</span> OTP Verification</h2>
        <p>We use WhatsApp to send One-Time Passwords (OTPs) for login and verification purposes. By using Minutematters, you agree to receive these transactional messages as part of the service. Standard data rates from your carrier may apply.</p>
      </section>

      <section>
        <h2><span className="num">04</span> Prohibited Use</h2>
        <p>You may not:</p>
        <ul>
          <li>Use the service for any illegal or unauthorised purpose</li>
          <li>Attempt to disrupt, hack, or reverse-engineer the platform</li>
          <li>Impersonate other users or third parties</li>
          <li>Transmit harmful, offensive, or malicious content</li>
        </ul>
      </section>

      <section>
        <h2><span className="num">05</span> Limitation of Liability</h2>
        <p>Minutematters is not responsible for:</p>
        <ul>
          <li>Delays in OTP or message delivery caused by network or carrier issues</li>
          <li>Service interruptions or issues caused by third-party providers</li>
          <li>Loss of data or appointments due to unforeseen technical failures</li>
        </ul>
      </section>

      <section>
        <h2><span className="num">06</span> Termination</h2>
        <p>We reserve the right to suspend or permanently terminate access to Minutematters if misuse, fraudulent activity, or a violation of these terms is detected — without prior notice.</p>
      </section>

      <section>
        <h2><span className="num">07</span> Changes to Terms</h2>
        <p>We may update these Terms of Service at any time. Changes will be posted on this page with a revised date. Your continued use of the platform after changes constitutes your acceptance of the new terms.</p>
      </section>
    </LegalLayout>
  )
}
