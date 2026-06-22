const baseUrl = import.meta.env?.BASE_URL ?? new URL('../', import.meta.url).pathname;
const assetPath = (path) => `${baseUrl}${path.replace(/^\//, '')}`;

const navItems = [
  { key: 'leistungen', label: 'Leistungen' },
  { key: 'branchen', label: 'Branchen' },
  { key: 'ergebnisse', label: 'Ergebnisse' },
  { key: 'prozess', label: 'Prozess' },
  { key: 'ueber-uns', label: 'Über uns' },
  { key: 'kontakt', label: 'Kontakt' },
];

const services = [
  {
    title: 'Content Produktion',
    text: 'Reels, Kurzvideos, Social Ads, Skripte und Kampagnen-Creatives, die deine Marke sichtbar und wiedererkennbar machen.',
  },
  {
    title: 'Social Media Strategie',
    text: 'Content-Säulen, Redaktionsplan, Posting-System und klare Botschaften für regelmäßige Sichtbarkeit.',
  },
  {
    title: 'Video- & Reels-Konzeption',
    text: 'Hooks, Storylines, Shotlisten und Formate, die Menschen in den ersten Sekunden abholen.',
  },
  {
    title: 'Performance Creatives',
    text: 'Anzeigenmotive und Video-Varianten für Meta, TikTok und Instagram, damit Kampagnen sauber getestet werden können.',
  },
  {
    title: 'Schnitt & Postproduktion',
    text: 'Schnitt, Untertitel, Sound, Motion-Elemente und Formatadaptionen für Feed, Story, Reels und Ads.',
  },
  {
    title: 'Content-Auswertung',
    text: 'Wir analysieren Reichweite, Watchtime, Klicks und Leads, damit die nächsten Inhalte stärker werden.',
  },
];

const sectors = [
  'Lokale Dienstleister',
  'Coaches & Berater',
  'E-Commerce Marken',
  'Immobilien',
  'Gastronomie & Lifestyle',
  'Handwerk & Fachbetriebe',
  'Fitness & Gesundheit',
  'B2B Unternehmen',
];

const industryBanners = [
  {
    claim: 'Mehr Kundschaft',
    sector: 'Gastronomie',
    text: 'Reels, Storys und Anzeigen, die Restaurant, Atmosphäre und Angebot schnell erlebbar machen.',
    image: assetPath('/assets/industry-banners/restaurant.png'),
    alt: 'Modernes Restaurant mit Service und Gästen als Motiv für Gastronomie-Marketing',
  },
  {
    claim: 'Mehr Aufträge',
    sector: 'Handwerk',
    text: 'Content, der Qualität, Vertrauen und echte Arbeit sichtbar macht, bevor der erste Anruf kommt.',
    image: assetPath('/assets/industry-banners/handwerk.png'),
    alt: 'Professionelle Handwerksumgebung mit Werkzeugen und Team als Motiv für Auftragsgewinnung',
  },
  {
    claim: 'Mehr Bewerbungen',
    sector: 'Recruiting',
    text: 'Arbeitgeber-Content, der Einblicke gibt, Kultur zeigt und passende Menschen zur Bewerbung bewegt.',
    image: assetPath('/assets/industry-banners/bewerbungen.png'),
    alt: 'Modernes Teamgespräch in einem Büro als Motiv für Recruiting und Bewerbungen',
  },
  {
    claim: 'Mehr Sichtbarkeit',
    sector: 'Fitness & Gesundheit',
    text: 'Kurzvideos und Social Assets, die Expertise, Nähe und Ergebnisse deiner Dienstleistung transportieren.',
    image: assetPath('/assets/industry-banners/fitness.png'),
    alt: 'Modernes Fitnessstudio mit Training als Motiv für Fitness- und Gesundheitsmarketing',
  },
];

const resultCards = [
  {
    metric: '15+',
    label: 'Content-Pieces pro Monat',
    text: 'Aus einem Drehtag entstehen Reels, Ads, Storys, Shortclips und Material für mehrere Plattformen.',
  },
  {
    metric: '5-8',
    label: 'neue Creative-Varianten',
    text: 'Mehr testbare Motive, Hooks und Blickwinkel für Social Ads und organische Inhalte.',
  },
  {
    metric: '1x',
    label: 'Content-System statt Zufall',
    text: 'Regelmäßige Produktion, klare Freigaben und ein Plan, der deine Kanäle konstant versorgt.',
  },
];

const processSteps = [
  {
    title: 'Analyse',
    text: 'Wir prüfen Marke, Zielgruppe, aktuelle Kanäle, bestehende Inhalte und die stärksten Content-Hebel.',
  },
  {
    title: 'Konzeption',
    text: 'Wir entwickeln Formate, Hooks, Skripte, Shotlisten und eine klare Content-Richtung.',
  },
  {
    title: 'Produktion',
    text: 'Wir produzieren, schneiden und adaptieren Content für Reels, TikTok, Ads, Storys und Feed.',
  },
  {
    title: 'Optimierung',
    text: 'Wir werten Performance aus und verbessern Themen, Hooks, Schnitte und Creatives laufend.',
  },
];

const routeMap = {
  '/': 'start',
  '/leistungen': 'leistungen',
  '/branchen': 'branchen',
  '/ergebnisse': 'ergebnisse',
  '/prozess': 'prozess',
  '/ueber-uns': 'ueber-uns',
  '/kontakt': 'kontakt',
  '/impressum': 'impressum',
  '/datenschutz': 'datenschutz',
};

const pageTitles = {
  start: 'DAZ Media & Marketing | Social Media Marketing Agentur',
  leistungen: 'Leistungen | DAZ Media & Marketing',
  branchen: 'Branchen | DAZ Media & Marketing',
  ergebnisse: 'Ergebnisse | DAZ Media & Marketing',
  prozess: 'Prozess | DAZ Media & Marketing',
  'ueber-uns': 'Über uns | DAZ Media & Marketing',
  kontakt: 'Kontakt | DAZ Media & Marketing',
  impressum: 'Impressum | DAZ Media & Marketing',
  datenschutz: 'Datenschutz | DAZ Media & Marketing',
};

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App-Container wurde nicht gefunden.');
}

const pathFor = (key) => `#/${key === 'start' ? '' : key}`;

const getCurrentPage = () => {
  const normalizedHash = window.location.hash.replace('#', '') || '/';
  return routeMap[normalizedHash] ?? 'start';
};

const renderHeader = (currentPage) => `
  <header class="site-header" aria-label="Hauptnavigation">
    <a class="brand" href="${pathFor('start')}" aria-label="DAZ Media & Marketing Startseite">
      <img class="brand-logo" src="${assetPath('/assets/brand/logo-white.png')}" alt="DAZ Logo" />
      <span class="brand-text">Media & Marketing</span>
    </a>
    <nav class="nav-links" aria-label="Seitennavigation">
      ${navItems
        .map(
          (item) => `
            <a class="${currentPage === item.key ? 'active' : ''}" href="${pathFor(item.key)}">
              ${item.label}
            </a>
          `,
        )
        .join('')}
    </nav>
  </header>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <div>
      <a class="footer-brand" href="${pathFor('start')}">DAZ Media & Marketing</a>
      <p>Social Media Marketing, Content und Performance für Unternehmen, die sichtbar wachsen wollen.</p>
    </div>
    <nav class="footer-links" aria-label="Fußnavigation">
      <a href="${pathFor('leistungen')}">Leistungen</a>
      <a href="${pathFor('kontakt')}">Kontakt</a>
      <a href="${pathFor('impressum')}">Impressum</a>
      <a href="${pathFor('datenschutz')}">Datenschutz</a>
    </nav>
  </footer>
`;

const renderServiceCards = () => `
  <div class="feature-grid">
    ${services
      .map(
        (service) => `
          <article class="feature-card ${service.title === 'Content Produktion' ? 'featured' : ''}">
            <h3>${service.title}</h3>
            <p>${service.text}</p>
          </article>
        `,
      )
      .join('')}
  </div>
`;

const renderIndustryBanners = () => `
  <section class="section industry-section" aria-labelledby="industry-banners-title">
    <div class="industry-heading">
      <p class="eyebrow">Für deine Ziele</p>
      <h2 id="industry-banners-title">Content, der für jede Branche ein klares Ergebnis verkauft.</h2>
      <p>
        Ob mehr Gäste, mehr Aufträge oder mehr Bewerbungen: Wir übersetzen dein Angebot in Bildsprache,
        die deine Zielgruppe sofort versteht.
      </p>
    </div>
    <div class="industry-banner-list">
      ${industryBanners
        .map(
          (banner) => `
            <article class="industry-banner">
              <img src="${banner.image}" alt="${banner.alt}" loading="lazy" />
              <div class="industry-banner-copy">
                <span>${banner.sector}</span>
                <h3>${banner.claim}</h3>
                <p>${banner.text}</p>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>
`;

const revealIndustryBannerText = () => {
  const bannerCopies = document.querySelectorAll('.industry-banner-copy');

  if (!bannerCopies.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    bannerCopies.forEach((copy) => copy.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -18% 0px',
      threshold: 0.2,
    },
  );

  bannerCopies.forEach((copy) => observer.observe(copy));
};

const renderContactPanel = () => `
  <section class="cta-band" aria-label="Kontakt aufnehmen">
    <div>
      <p class="eyebrow">Kostenlose Content-Einschätzung</p>
      <h2>Lass uns prüfen, welche Inhalte deiner Marke aktuell fehlen.</h2>
      <p>
        Schick uns ein paar Eckdaten. Wir melden uns mit einer klaren Einschätzung,
        welche Content-Formate, Reels und Creatives für dein Unternehmen sinnvoll sind.
      </p>
    </div>
    <a class="button primary" href="${pathFor('kontakt')}">Gespräch anfragen</a>
  </section>
`;

const renderStart = () => `
  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Content Produktion für Social Media</p>
        <h1>Content, der sichtbar macht und Kunden überzeugt.</h1>
        <p class="lede">
          DAZ Media & Marketing produziert Reels, Kurzvideos und Social-Media-Creatives,
          die deine Marke professionell zeigen, regelmäßig ausgespielt werden können und in Kampagnen funktionieren.
        </p>
        <div class="actions">
          <a class="button primary" href="${pathFor('kontakt')}">Content-Anfrage starten</a>
          <a class="button secondary" href="${pathFor('leistungen')}">Leistungen ansehen</a>
        </div>
        <dl class="hero-stats" aria-label="Kennzahlen">
          <div>
            <dt>15+</dt>
            <dd>Content-Pieces aus einem Drehtag</dd>
          </div>
          <div>
            <dt>4</dt>
            <dd>Phasen von Konzept bis Auswertung</dd>
          </div>
          <div>
            <dt>100%</dt>
            <dd>auf deine Marke abgestimmt</dd>
          </div>
        </dl>
      </div>
      <div class="hero-visual">
        <img
          src="${assetPath('/assets/daz-marketing-workspace.png')}"
          alt="Moderner Arbeitsplatz für digitales Marketing mit Laptop, Smartphone und Kampagnenmaterial"
        />
      </div>
    </section>

    <section class="section intro-strip">
      <p>Für Marken, Dienstleister und lokale Unternehmen, die regelmäßig professionellen Content brauchen, ohne jedes Mal bei null anzufangen.</p>
    </section>

    ${renderIndustryBanners()}

    <section class="section" id="leistungen">
      <div class="section-heading">
        <p class="eyebrow">Was wir tun</p>
        <h2>Ein Content-System statt einzelner Zufallstreffer.</h2>
        <p>
          Wir verbinden Strategie, Produktion, Schnitt und Auswertung zu einem Auftritt,
          der regelmäßig bespielt werden kann und trotzdem hochwertig wirkt.
        </p>
      </div>
      ${renderServiceCards()}
    </section>

    <section class="section split">
      <div>
        <p class="eyebrow">Warum DAZ</p>
        <h2>Wir produzieren nah an deiner Marke, nicht nur für den Algorithmus.</h2>
        <p>
          Guter Content muss schnell verstanden werden, Vertrauen aufbauen und zur Zielgruppe passen.
          Deshalb denken wir Inhalte von der Idee bis zum fertigen Reel.
        </p>
      </div>
      <div class="proof-list">
        <div>
          <strong>Klare Content-Richtung</strong>
          <span>Damit deine Zielgruppe sofort versteht, wofür du stehst.</span>
        </div>
        <div>
          <strong>Saubere Produktion</strong>
          <span>Skripte, Dreh, Schnitt und Formate greifen ineinander.</span>
        </div>
        <div>
          <strong>Mehr Wiederverwertung</strong>
          <span>Aus einem Produktionstag entsteht Material für viele Touchpoints.</span>
        </div>
      </div>
    </section>

    ${renderContactPanel()}
  </main>
`;

const renderLeistungen = () => `
  <main>
    <section class="page-hero">
      <p class="eyebrow">Leistungen</p>
      <h1>Content Produktion als Grundlage für starke Social-Media-Präsenz.</h1>
      <p>
        Von der Idee über Skript und Dreh bis zu Schnitt, Untertiteln und Formatadaptionen:
        Wir sorgen dafür, dass du konstant hochwertigen Content veröffentlichen kannst.
      </p>
    </section>
    <section class="section">
      ${renderServiceCards()}
    </section>
    <section class="section split muted-band">
      <div>
        <p class="eyebrow">Pakete</p>
        <h2>Flexible Content-Pakete für regelmäßige Sichtbarkeit.</h2>
      </div>
      <div class="package-list">
        <article>
          <h3>Setup</h3>
          <p>Content-Audit, Formate, Tonalität, Themenplan und Produktionsstruktur.</p>
        </article>
        <article>
          <h3>Produktion</h3>
          <p>Drehtag, Skripte, Schnitt, Untertitel und plattformgerechte Exportformate.</p>
        </article>
        <article>
          <h3>Creative-System</h3>
          <p>Mehrere Hook-Varianten, Ad-Creatives, Wiederverwertung und Performance-Auswertung.</p>
        </article>
      </div>
    </section>
    ${renderContactPanel()}
  </main>
`;

const renderBranchen = () => `
  <main>
    <section class="page-hero">
      <p class="eyebrow">Branchen</p>
      <h1>Content für Unternehmen, die sichtbar Expertise zeigen wollen.</h1>
      <p>
        Wir arbeiten besonders gern mit Unternehmen, deren Qualität man erklären, zeigen oder erlebbar machen muss:
        durch Kurzvideos, Reels, Behind-the-Scenes, Expertencontent und starke Creatives.
      </p>
    </section>
    <section class="section">
      <ul class="sector-grid" aria-label="Geeignete Branchen">
        ${sectors.map((sector) => `<li>${sector}</li>`).join('')}
      </ul>
    </section>
    <section class="section split">
      <div>
        <p class="eyebrow">Fokus</p>
        <h2>Jede Branche braucht andere Content-Beweise.</h2>
      </div>
      <p>
        Für manche Unternehmen zählen Vorher-nachher-Clips, für andere Vertrauen,
        Expertise, Einblicke, Kundenstimmen oder ein starker lokaler Ruf. Wir übersetzen diese Beweise
        in Inhalte, die Menschen schnell verstehen.
      </p>
    </section>
  </main>
`;

const renderErgebnisse = () => `
  <main>
    <section class="page-hero">
      <p class="eyebrow">Ergebnisse</p>
      <h1>Guter Content schafft mehr Material, mehr Tests und mehr Vertrauen.</h1>
      <p>
        Die folgenden Beispielwerte zeigen, worauf unsere Content-Produktion ausgerichtet ist:
        planbare Veröffentlichungen, mehr Creative-Varianten und Inhalte, die wiederverwendbar bleiben.
      </p>
    </section>
    <section class="section">
      <div class="result-grid">
        ${resultCards
          .map(
            (card) => `
              <article class="result-card">
                <strong>${card.metric}</strong>
                <h3>${card.label}</h3>
                <p>${card.text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
    <section class="section split muted-band">
      <div>
        <p class="eyebrow">Transparenz</p>
        <h2>Du bekommst keine Nebelwand aus Kennzahlen.</h2>
      </div>
      <p>
        Wir erklären Ergebnisse so, dass du Entscheidungen treffen kannst:
        Was wurde getestet, was hat funktioniert, was wurde gestoppt und wo liegt der nächste Hebel?
      </p>
    </section>
  </main>
`;

const renderProzess = () => `
  <main>
    <section class="page-hero">
      <p class="eyebrow">Prozess</p>
      <h1>Ein klarer Ablauf, damit Content nicht jedes Mal spontan entstehen muss.</h1>
      <p>
        Jede Zusammenarbeit startet mit einer ehrlichen Bestandsaufnahme und führt dann Schritt für Schritt
        zu einem Content-System, das regelmäßig produziert und verbessert werden kann.
      </p>
    </section>
    <section class="section">
      <div class="timeline">
        ${processSteps
          .map(
            (step, index) => `
              <article>
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
    ${renderContactPanel()}
  </main>
`;

const renderUeberUns = () => `
  <main>
    <section class="page-hero">
      <p class="eyebrow">Über uns</p>
      <h1>Wir bauen Marketing, das verständlich bleibt.</h1>
      <p>
        DAZ Media & Marketing steht für klare Strategie, sorgfältige Umsetzung und direkte Kommunikation.
        Wir wollen, dass du jederzeit weißt, warum wir etwas tun und woran Erfolg gemessen wird.
      </p>
    </section>
    <section class="section split">
      <div>
        <p class="eyebrow">Arbeitsweise</p>
        <h2>Pragmatisch, sauber, wachstumsorientiert.</h2>
      </div>
      <div class="proof-list">
        <div>
          <strong>Keine leeren Versprechen</strong>
          <span>Wir sprechen offen über Chancen, Grenzen und notwendige Voraussetzungen.</span>
        </div>
        <div>
          <strong>Kurze Wege</strong>
          <span>Du bekommst klare Ansprechpartner, klare nächste Schritte und klare Auswertungen.</span>
        </div>
        <div>
          <strong>Marke vor Lautstärke</strong>
          <span>Sichtbarkeit soll Vertrauen aufbauen, nicht nur Aufmerksamkeit erzeugen.</span>
        </div>
      </div>
    </section>
  </main>
`;

const renderKontakt = () => `
  <main>
    <section class="page-hero">
      <p class="eyebrow">Kontakt</p>
      <h1>Bereit für regelmäßigen, professionellen Content?</h1>
      <p>
        Schreib uns, welche Inhalte du brauchst und wo du gerade stehst. Wir melden uns mit einer ersten Einschätzung
        und schlagen den sinnvollsten nächsten Produktionsschritt vor.
      </p>
    </section>
    <section class="section contact-layout">
      <form class="contact-form" aria-label="Kontaktformular">
        <label>
          Name
          <input type="text" name="name" autocomplete="name" placeholder="Dein Name" />
        </label>
        <label>
          E-Mail
          <input type="email" name="email" autocomplete="email" placeholder="dein.name@firma.de" />
        </label>
        <label>
          Unternehmen
          <input type="text" name="company" autocomplete="organization" placeholder="Dein Unternehmen" />
        </label>
        <label>
          Website oder Instagram-Profil
          <input type="text" name="profile" autocomplete="url" placeholder="deine-website.de oder @deinprofil" />
        </label>
        <label>
          Was ist dein Ziel?
          <select name="goal">
            <option value="">Bitte auswählen</option>
            <option>Mehr Kunden</option>
            <option>Mehr Bewerbungen</option>
            <option>Mehr Sichtbarkeit</option>
            <option>Besserer Social-Media-Auftritt</option>
            <option>Noch unsicher</option>
          </select>
        </label>
        <label>
          Wobei soll ich dir helfen?
          <textarea name="message" rows="5" placeholder="Zum Beispiel regelmäßige Reels, Kurzvideos, Recruiting-Content, Social Ads, ein monatlicher Drehtag oder eine Einschätzung, welche Inhalte für dein Unternehmen überhaupt Sinn machen."></textarea>
        </label>
        <button class="button primary" type="button">Anfrage vorbereiten</button>
      </form>
      <aside class="contact-aside">
        <h2>Direktkontakt</h2>
        <p>Nutze das Formular als Platzhalter oder ersetze es später durch dein echtes CRM, E-Mail-Postfach oder Buchungstool.</p>
        <a href="mailto:info@daz-media.de">info@daz-media.de</a>
        <span>Antwort in der Regel innerhalb von 24 Stunden.</span>
      </aside>
    </section>
  </main>
`;

const renderImpressum = () => `
  <main>
    <section class="page-hero legal-page">
      <p class="eyebrow">Impressum</p>
      <h1>Impressum</h1>
      <p>
        Bitte ersetze diese Platzhalter vor der Veröffentlichung durch deine echten Anbieterkennzeichnungen.
      </p>
    </section>
    <section class="section legal-content">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>DAZ Media & Marketing<br />Musterstraße 1<br />12345 Musterstadt</p>
      <h2>Kontakt</h2>
      <p>E-Mail: info@daz-media.de</p>
      <h2>Vertreten durch</h2>
      <p>Vorname Nachname</p>
      <h2>Hinweis</h2>
      <p>Die Angaben sind Platzhalter und müssen rechtlich geprüft und vervollständigt werden.</p>
    </section>
  </main>
`;

const renderDatenschutz = () => `
  <main>
    <section class="page-hero legal-page">
      <p class="eyebrow">Datenschutz</p>
      <h1>Datenschutzerklärung</h1>
      <p>
        Diese Seite ist ein deutscher Platzhalter für deine spätere Datenschutzerklärung.
        Vor dem Livegang sollte sie juristisch geprüft werden.
      </p>
    </section>
    <section class="section legal-content">
      <h2>Allgemeine Hinweise</h2>
      <p>
        Der Schutz personenbezogener Daten ist wichtig. Diese Website sollte nur die Daten erfassen,
        die für Kontaktaufnahme, Betrieb und Sicherheit notwendig sind.
      </p>
      <h2>Kontaktformular</h2>
      <p>
        Wenn du ein echtes Formular anschließt, beschreibe hier Zweck, Rechtsgrundlage,
        Speicherdauer und Empfänger der Daten.
      </p>
      <h2>Analyse und Marketing</h2>
      <p>
        Falls später Tracking, Pixel oder Analysewerkzeuge eingebunden werden,
        müssen diese transparent erklärt und korrekt eingebunden werden.
      </p>
    </section>
  </main>
`;

const renderPage = (page) => {
  const pages = {
    start: renderStart,
    leistungen: renderLeistungen,
    branchen: renderBranchen,
    ergebnisse: renderErgebnisse,
    prozess: renderProzess,
    'ueber-uns': renderUeberUns,
    kontakt: renderKontakt,
    impressum: renderImpressum,
    datenschutz: renderDatenschutz,
  };

  document.title = pageTitles[page];
  app.innerHTML = `${renderHeader(page)}${pages[page]()}${renderFooter()}`;
  revealIndustryBannerText();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('hashchange', () => renderPage(getCurrentPage()));

renderPage(getCurrentPage());


