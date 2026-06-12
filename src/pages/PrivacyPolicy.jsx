import PageLayout from './PageLayout';

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy" description="How we collect, use, and protect your data.">
      <div className="prose max-w-none text-gray-500">
        <h2 className="font-display text-xl font-bold text-dark mt-0">Information We Collect</h2>
        <p className="leading-relaxed">We collect information you provide directly to us, including name, email address, company details, and employee data necessary for attendance management.</p>

        <h2 className="font-display text-xl font-bold text-dark">How We Use Your Information</h2>
        <p className="leading-relaxed">Your information is used to provide and improve our attendance management services, process payroll data, send notifications, and comply with legal obligations.</p>

        <h2 className="font-display text-xl font-bold text-dark">Data Security</h2>
        <p className="leading-relaxed">We implement industry-standard security measures including AES-256 encryption, TLS 1.3, and regular security audits to protect your data. All biometric data is encrypted and stored separately.</p>

        <h2 className="font-display text-xl font-bold text-dark">Data Retention</h2>
        <p className="leading-relaxed">We retain your data for as long as your account is active or as needed to provide services. You can request data deletion at any time.</p>

        <h2 className="font-display text-xl font-bold text-dark">Third-Party Sharing</h2>
        <p className="leading-relaxed">We do not sell your personal information. We may share data with third-party service providers solely for the purpose of delivering our services (e.g., cloud hosting, email delivery).</p>

        <h2 className="font-display text-xl font-bold text-dark">Your Rights</h2>
        <p className="leading-relaxed">You have the right to access, correct, or delete your personal data. You may also request data portability and restrict processing. Contact us at privacy@attendpro.com to exercise these rights.</p>

        <h2 className="font-display text-xl font-bold text-dark">Contact</h2>
        <p className="leading-relaxed">For privacy-related inquiries, contact our Data Protection Officer at dpo@attendpro.com.</p>

        <p className="text-sm text-gray-400 mt-8">Last updated: June 1, 2026</p>
      </div>
    </PageLayout>
  );
}
