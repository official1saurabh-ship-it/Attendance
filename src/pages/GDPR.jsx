import PageLayout from './PageLayout';

export default function GDPR() {
  return (
    <PageLayout title="GDPR Compliance" description="Our commitment to data protection and privacy under GDPR.">
      <div className="prose max-w-none text-gray-500">
        <h2 className="font-display text-xl font-bold text-dark mt-0">Our Commitment</h2>
        <p className="leading-relaxed">AttendPro is fully committed to compliance with the General Data Protection Regulation (GDPR). We have implemented comprehensive measures to protect the personal data of individuals in the European Economic Area (EEA).</p>

        <h2 className="font-display text-xl font-bold text-dark">Data Processing Agreement</h2>
        <p className="leading-relaxed">We provide a Data Processing Agreement (DPA) to all our customers, outlining the terms and conditions of data processing in compliance with GDPR Article 28.</p>

        <h2 className="font-display text-xl font-bold text-dark">Data Protection Officer</h2>
        <p className="leading-relaxed">We have appointed a Data Protection Officer who oversees our GDPR compliance. You can contact our DPO at dpo@attendpro.com.</p>

        <h2 className="font-display text-xl font-bold text-dark">Your Rights Under GDPR</h2>
        <p className="leading-relaxed"><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</p>
        <p className="leading-relaxed"><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data.</p>
        <p className="leading-relaxed"><strong>Right to Erasure:</strong> You can request deletion of your personal data (right to be forgotten).</p>
        <p className="leading-relaxed"><strong>Right to Restrict Processing:</strong> You can request restriction of data processing under certain circumstances.</p>
        <p className="leading-relaxed"><strong>Right to Data Portability:</strong> You can request your data in a machine-readable format.</p>
        <p className="leading-relaxed"><strong>Right to Object:</strong> You can object to processing of your personal data for certain purposes.</p>

        <h2 className="font-display text-xl font-bold text-dark">Data Transfers</h2>
        <p className="leading-relaxed">We ensure appropriate safeguards are in place for any transfer of personal data outside the EEA, including Standard Contractual Clauses (SCCs).</p>

        <h2 className="font-display text-xl font-bold text-dark">Security Measures</h2>
        <p className="leading-relaxed">We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption, access controls, and regular security assessments.</p>

        <h2 className="font-display text-xl font-bold text-dark">Subprocessors</h2>
        <p className="leading-relaxed">We maintain an up-to-date list of our subprocessors. You can request a copy by contacting our DPO.</p>

        <h2 className="font-display text-xl font-bold text-dark">Contact</h2>
        <p className="leading-relaxed">For GDPR-related inquiries, contact our Data Protection Officer: dpo@attendpro.com or write to us at AttendPro, GDPR Compliance, San Francisco, CA.</p>

        <p className="text-sm text-gray-400 mt-8">Last updated: June 1, 2026</p>
      </div>
    </PageLayout>
  );
}
