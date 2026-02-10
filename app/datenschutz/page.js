import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'Datenschutzerklärung — Marcel Weigel',
  description: 'Datenschutzerklärung / Privacy Policy',
};

export default function DatenschutzPage() {
  const imp = siteConfig.impressum;

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[700px] mx-auto">
        <h1 className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-extrabold mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose-brand font-body text-base space-y-6">

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mt-0 mb-2">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Datenerfassung auf dieser Website</h3>
            <p>
              <strong className="text-brand-text">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
              {imp.fullName}<br />
              {imp.email}<br /><br />
              Weitere Angaben finden Sie im <a href="/impressum" className="text-accent-light hover:text-accent">Impressum</a>.
            </p>

            <p>
              <strong className="text-brand-text">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. über das Kontaktformular). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p>
              <strong className="text-brand-text">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p>
              <strong className="text-brand-text">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen sowie ein Recht auf Datenübertragbarkeit. Ferner steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">2. Hosting</h2>
            <p>
              Diese Website wird bei IONOS (1&1 IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland) gehostet. Wenn Sie diese Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p>
              Details entnehmen Sie der Datenschutzerklärung von IONOS:<br />
              <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent break-all">
                https://www.ionos.de/terms-gtc/datenschutzerklaerung/
              </a>
            </p>
            <p>
              Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Datenschutz</h3>
            <p>
              Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              {imp.fullName}<br />
              E-Mail: {imp.email}
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem der Verantwortliche seinen Sitz hat.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Auskunft, Löschung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-brand-text font-heading text-base font-semibold mt-4 mb-1">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">5. Schriftarten</h2>
            <p>
              Diese Website nutzt keine externen Schriftarten-Dienste (wie z.B. Google Fonts). Alle Schriftarten werden lokal von diesem Server geladen. Es findet keine Verbindung zu Drittanbietern statt.
            </p>
          </div>

          <div>
            <h2 className="text-brand-text font-heading text-lg font-bold mb-2">6. Cookies</h2>
            <p>
              Diese Website verwendet derzeit keine Cookies und keine Tracking-Tools. Sollte sich dies in Zukunft ändern, wird diese Datenschutzerklärung entsprechend aktualisiert.
            </p>
          </div>

          <div className="pt-4 border-t border-accent/10">
            <p className="text-brand-muted/60 text-sm">
              Stand: Februar 2026
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
