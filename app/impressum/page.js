import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'Impressum',
  description: 'Impressum / Legal Notice — Marcel Weigel',
  robots: { index: false },
};

export default function ImpressumPage() {
  const imp = siteConfig.impressum;

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[700px] mx-auto">
        <h1 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-8">
          Impressum
        </h1>

        <div className="prose-brand font-body text-base space-y-6">

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mt-0 mb-2">Angaben gemäß § 5 DDG</h2>
            <p style={{ whiteSpace: 'pre-line' }}>
              {imp.fullName}{'\n'}
              {imp.address}
            </p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">Kontakt</h2>
            {imp.phone && <p>Telefon: {imp.phone}</p>}
            <p>E-Mail: <a href={`mailto:${imp.email}`} className="text-accent-light hover:text-accent">{imp.email}</a></p>
          </div>

          {imp.vatId && (
            <div>
              <h2 className="text-brand-text font-heading text-lg font-bold mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />{imp.vatId}</p>
            </div>
          )}

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>{imp.responsibleForContent}<br />{imp.address.split('\n')[0]}<br />{imp.address.split('\n').slice(1).join(', ')}</p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">Haftungsausschluss</h2>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Haftung für Inhalte</h3>
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Haftung für Links</h3>
            <p>
              Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Urheberrecht</h3>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
