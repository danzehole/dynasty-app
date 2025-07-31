import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "Wie viel Zeit kannst du pro Woche investieren?",
      options: ["< 3 Stunden", "3–7 Stunden", "> 7 Stunden"],
      key: "zeit"
    },
    {
      question: "Wie viel Startkapital hast du zur Verfügung?",
      options: ["0–50 €", "50–200 €", "> 200 €"],
      key: "kapital"
    },
    {
      question: "Was ist dir am wichtigsten?",
      options: ["Passives Einkommen", "Schneller Verdienst", "Lernen & Entwicklung"],
      key: "ziel"
    },
  ];

  const hustles = [
    {
      name: "Digitale Produkte",
      zeit: ["< 3 Stunden", "3–7 Stunden", "> 7 Stunden"],
      kapital: ["0–50 €", "50–200 €", "> 200 €"],
      ziel: ["Passives Einkommen", "Lernen & Entwicklung"],
      beschreibung: "Erstelle E-Books, Vorlagen oder Kurse und verkaufe sie online."
    },
    {
      name: "Freelance AI Services",
      zeit: ["3–7 Stunden", "> 7 Stunden"],
      kapital: ["0–50 €", "50–200 €"],
      ziel: ["Schneller Verdienst", "Lernen & Entwicklung"],
      beschreibung: "Biete KI-gestützte Dienstleistungen wie Texterstellung oder Datenanalyse an."
    },
    {
      name: "Newsletter-Business",
      zeit: ["< 3 Stunden", "3–7 Stunden"],
      kapital: ["0–50 €", "50–200 €"],
      ziel: ["Passives Einkommen"],
      beschreibung: "Starte einen themenspezifischen Newsletter und monetarisiere über Werbung."
    },
    {
      name: "Affiliate-Blog",
      zeit: ["3–7 Stunden", "> 7 Stunden"],
      kapital: ["0–50 €"],
      ziel: ["Passives Einkommen", "Lernen & Entwicklung"],
      beschreibung: "Erstelle einen Blog zu einem Trendthema und verdiene an Empfehlungen."
    },
    {
      name: "Digitale Beratung",
      zeit: ["> 7 Stunden"],
      kapital: ["0–50 €", "50–200 €", "> 200 €"],
      ziel: ["Schneller Verdienst", "Lernen & Entwicklung"],
      beschreibung: "Berate Unternehmen bei digitalen Prozessen – z. B. Digitalisierung, Tools, Automatisierung."
    },
    {
      name: "Kanal aufbauen (YouTube, TikTok, Insta)",
      zeit: ["3–7 Stunden", "> 7 Stunden"],
      kapital: ["0–50 €"],
      ziel: ["Passives Einkommen", "Lernen & Entwicklung"],
      beschreibung: "Erstelle regelmäßig Inhalte und wachse organisch – später Monetarisierung durch Werbung."
    },
  ];

  const handleOptionClick = (value) => {
    const key = questions[step].key;
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const getResults = () => {
    return hustles.filter((hustle) =>
      hustle.zeit.includes(answers.zeit) &&
      hustle.kapital.includes(answers.kapital) &&
      hustle.ziel.includes(answers.ziel)
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-12 border border-gray-300">
        <h1 className="text-6xl font-extrabold text-center mb-4 text-indigo-900 tracking-tight drop-shadow-md">Side Hustle Finder</h1>
        <p className="text-center text-xl text-gray-700 mb-10">Finde deinen perfekten digitalen Nebenverdienst – maßgeschneidert, fundiert, zukunftsfähig.</p>

        {step < questions.length ? (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">{questions[step].question}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition transform hover:scale-105 shadow-md"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-indigo-800">Deine individuelle Empfehlung ✨</h2>
            {getResults().length > 0 ? (
              <ul className="space-y-6">
                {getResults().map((h, i) => (
                  <li key={i} className="border border-gray-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{h.name}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{h.beschreibung}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-red-500">Leider passt keine Option zu deinen Angaben. Bitte versuche andere Kombinationen oder kontaktiere uns für eine individuelle Beratung.</p>
            )}
          </div>
        )}
      </div>
      <footer className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dynasty Systems · <a href="#" className="text-indigo-600 hover:underline">Impressum</a> · <a href="#" className="text-indigo-600 hover:underline">Datenschutz</a>
      </footer>
    </div>
  );
}
