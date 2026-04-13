import { Metadata } from 'next'
import LegalLayout from '../../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — MinuteMatters',
  description: 'MinuteMatters Privacy Policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 2025">
      <section>
        <h2><span className="num">01</span> Information We Collect</h2>
        <p>Minutematters (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information. We collect the following:</p>
        <ul>
          <li>Phone number (for OTP verification)</li>
          <li>Basic user details (if provided during signup)</li>
          <li>Usage data to improve our services</li>
        </ul>
      </section>

      <section>
        <h2><span className="num">02</span> How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Verify your identity using One-Time Passwords (OTP)</li>
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
        </ul>
        <p><strong>We do NOT send promotional or marketing messages via WhatsApp.</strong></p>
      </section>

      <section>
        <h2><span className="num">03</span> WhatsApp Communication</h2>
        <p>By using Minutematters, you consent to receive transactional messages such as OTPs via WhatsApp. These messages are strictly functional and not used for marketing purposes.</p>
      </section>

      <section>
        <h2><span className="num">04</span> Data Sharing</h2>
        <p>We do not sell or rent your personal data. We may use trusted third-party providers (such as messaging services) solely to deliver OTP messages on our behalf.</p>
      </section>

      <section>
        <h2><span className="num">05</span> Data Security</h2>
        <p>We take reasonable technical and organisational measures to protect your data from unauthorised access, disclosure, or misuse.</p>
      </section>

      <section>
        <h2><span className="num">06</span> Your Rights</h2>
        <p>You may request the deletion or correction of your personal data at any time by contacting us. We will respond to all requests within a reasonable timeframe.</p>
      </section>

      <section>
        <h2><span className="num">07</span> Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of our services constitutes acceptance of the revised policy.</p>
      </section>
    </LegalLayout>
  )
}
