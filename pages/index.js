import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState(null);

  const findHustle = () => {
    const hustles = ['Kurs verkaufen', 'Freelance AI', 'Newsletter starten', 'Affiliate-Blog', 'Digitale Produkte'];
    const idea = hustles[Math.floor(Math.random() * hustles.length)];
    setResult(idea);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px', fontFamily: 'Arial' }}>
      <h1>Side Hustle Finder</h1>
      <p>Finde deinen perfekten digitalen Nebenverdienst 🚀</p>
      <button onClick={findHustle} style={{ padding: '10px 20px', fontSize: '16px' }}>Finde Idee</button>
      {result && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          🚀 Deine Idee: {result}
        </div>
      )}
    </div>
  );
}
