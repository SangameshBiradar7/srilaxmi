import PageHeader from "@/components/shared/PageHeader";

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        label="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using this website, you agree to be bound by
                these Terms & Conditions.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                2. Use of Content
              </h2>
              <p>
                All content on this website is the property of Sri Lakshmi
                Vidyaniketan Educational Society and is protected by applicable
                intellectual property laws.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                3. Privacy
              </h2>
              <p>
                Your use of this website is also governed by our Privacy Policy.
                Please review our Privacy Policy to understand our practices.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-midnight mb-4">
                4. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Your
                continued use of the website following any changes indicates your
                acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
