import PageLayout from './PageLayout';

export default function CookiePolicy() {
  return (
    <PageLayout title="Cookie Policy" description="How we use cookies and similar technologies.">
      <div className="prose max-w-none text-gray-500">
        <h2 className="font-display text-xl font-bold text-dark mt-0">What Are Cookies</h2>
        <p className="leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help us provide a better user experience by remembering your preferences and analyzing usage patterns.</p>

        <h2 className="font-display text-xl font-bold text-dark">Types of Cookies We Use</h2>
        <p className="leading-relaxed"><strong>Essential Cookies:</strong> Required for the platform to function properly. These include authentication cookies and security tokens.</p>
        <p className="leading-relaxed"><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform, so we can improve features and performance.</p>
        <p className="leading-relaxed"><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience.</p>

        <h2 className="font-display text-xl font-bold text-dark">Third-Party Cookies</h2>
        <p className="leading-relaxed">We use trusted third-party services (such as analytics providers) that may set their own cookies. These cookies are governed by the respective third-party privacy policies.</p>

        <h2 className="font-display text-xl font-bold text-dark">Managing Cookies</h2>
        <p className="leading-relaxed">You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our platform.</p>

        <h2 className="font-display text-xl font-bold text-dark">Updates</h2>
        <p className="leading-relaxed">We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

        <p className="text-sm text-gray-400 mt-8">Last updated: June 1, 2026</p>
      </div>
    </PageLayout>
  );
}
