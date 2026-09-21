import PageHeader from "@/components/shared/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when
                you fill out a contact form, subscribe to our newsletter, or
                communicate with us.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to respond to your inquiries,
                improve our services, and communicate with you about our
                programs and events.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                3. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                4. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at info@srilakshmividyaniketan.edu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
