import PageLayout from './PageLayout';

export default function TermsOfService() {
  return (
    <PageLayout title="Terms of Service" description="Please read these terms carefully before using AttendPro.">
      <div className="prose max-w-none text-gray-500">
        <h2 className="font-display text-xl font-bold text-dark mt-0">Acceptance of Terms</h2>
        <p className="leading-relaxed">By accessing or using AttendPro, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

        <h2 className="font-display text-xl font-bold text-dark">Account Responsibilities</h2>
        <p className="leading-relaxed">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.</p>

        <h2 className="font-display text-xl font-bold text-dark">Service Usage</h2>
        <p className="leading-relaxed">You agree to use AttendPro in compliance with all applicable laws and regulations. You may not use the service for any unlawful purpose or in violation of any third-party rights.</p>

        <h2 className="font-display text-xl font-bold text-dark">Payment Terms</h2>
        <p className="leading-relaxed">Paid plans are billed in advance on a monthly or annual basis. Cancellation is effective at the end of the current billing period. Refunds are provided as outlined in our refund policy.</p>

        <h2 className="font-display text-xl font-bold text-dark">Data Ownership</h2>
        <p className="leading-relaxed">You retain full ownership of all data you upload to AttendPro. We claim no intellectual property rights over your data.</p>

        <h2 className="font-display text-xl font-bold text-dark">Limitation of Liability</h2>
        <p className="leading-relaxed">AttendPro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>

        <h2 className="font-display text-xl font-bold text-dark">Termination</h2>
        <p className="leading-relaxed">We may terminate or suspend your account for violation of these terms. Upon termination, you may export your data within 30 days.</p>

        <h2 className="font-display text-xl font-bold text-dark">Changes to Terms</h2>
        <p className="leading-relaxed">We reserve the right to modify these terms. We will notify you of material changes via email or through the platform.</p>

        <p className="text-sm text-gray-400 mt-8">Last updated: June 1, 2026</p>
      </div>
    </PageLayout>
  );
}
