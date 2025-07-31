// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

const questions = [
  {
    question: 'Wie viel Zeit kannst du pro Woche investieren?',
    options: ['< 3 Stunden', '3–7 Stunden', '> 7 Stunden'],
    key: 'zeit',
  },
  {
    question: 'Wie viel Startkapital hast du zur Verfügung?',
    options: ['0–50 €', '50–200 €', '> 200 €'],
    key: 'kapital',
  },
  {
    question: 'Was ist dir am wichtigsten?',
    options: ['Passives Einkommen', 'Schneller Verdienst', 'Lernen & Entwicklung'],
    key: 'ziel',
  },
];

const hustles = [
  {
    name: 'Digitale Produkte',
    zeit: ['< 3 Stunden', '3–7 Stunden', '> 7 Stunden'],
    kapital: ['0–50 €', '50–200 €', '> 200 €'],
    ziel: ['Passives Einkommen', 'Lernen & Entwicklung'],
    beschreibung: 'Erstelle E-Books, Vorlagen oder Kurse und verkaufe sie online.',
  },
  {
    name: 'Freelance AI Services',
    zeit: ['3–7 Stunden', '> 7 Stunden'],
    kapital: ['0–50 €', '50–200 €'],
    ziel: ['Schneller Verdienst', 'Lernen & Entwicklung'],
    beschreibung: 'Biete KI-gestützte Dienstleistungen wie Texterstellung oder Datenanalyse an.',
  },
  {
    name: 'Newsletter-Business',
    zeit: ['< 3 Stunden', '3–7 Stunden'],
    kapital: ['0–50 €', '50–200 €'],
    ziel: ['Passives Einkommen'],
    beschreibung: 'Starte einen themenspezifischen Newsletter und monetarisiere über Werbung.',
  },
  {
    name: 'Affiliate-Blog',
    zeit: ['3–7 Stunden', '> 7 Stunden'],
    kapital: ['0–50 €'],
    ziel: ['Passives Einkommen', 'Lernen & Entwicklung'],
    beschreibung: 'Erstelle einen Blog zu einem Trendthema und verdiene an Empfehlungen.',
  },
  {
    name: 'Digitale Beratung',
    zeit: ['> 7 Stunden'],
    kapital: ['0–50 €', '50–200 €', '> 200 €'],
    ziel: ['Schneller Verdienst', 'Lernen & Entwicklung'],
    beschreibung: 'Berate Unternehmen bei digitalen Prozessen – z. B. Digitalisierung, Tools, Automatisierung.',
  },
  {
    name: 'Kanal aufbauen (YouTube, TikTok, Insta)',
    zeit: ['3–7 Stunden', '> 7 Stunden'],
    kapital: ['0–50 €'],
    ziel: ['Passives Einkommen', 'Lernen & Entwicklung'],
    beschreibung: 'Erstelle regelmäßig Inhalte und wachse organisch – später Monetarisierung durch Werbung.',
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

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
    <>
      <Head>
        <title>Side Hustle Finder</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-3xl w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-4">Side Hustle Finder</h1>
          <p className="text-center text-lg text-gray-600 mb-10">Finde deinen perfekten digitalen Nebenverdienst 🚀</p>

          {step < questions.length ? (
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">{questions[step].question}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {questions[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-base font-medium shadow-md hover:shadow-xl transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center mb-8">Deine Side Hustle Ergebnisse 🚀</h2>
              {getResults().length > 0 ? (
                <ul className="space-y-6">
                  {getResults().map((h, i) => (
                    <li key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">{h.name}</h3>
                      <p className="text-gray-700 leading-relaxed">{h.beschreibung}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500">Keine passenden Ergebnisse gefunden. Bitte versuche andere Kombinationen.</p>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
