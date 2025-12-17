import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/predict"; // Flask API endpoint

const App: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [probability, setProbability] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setProbability(null);

    try {
      const response = await axios.post(API_URL, {
        subject: subject,
        body: body,
      });

      setResult(response.data.prediction);
      setProbability(`Phishing Probability: ${response.data.phishing_probability.toFixed(2)}`);
    } catch (err) {
      setError("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="glassmorphism w-full max-w-lg p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Phishing Email Detector</h1>

        <h2 className="section-title">Analyze Suspicious Email</h2>

        <div className="mb-4">
          <label className="block text-white font-semibold">📩 Email Subject:</label>
          <textarea
          className="textarea"
          placeholder="Paste the suspicious email content here..."
          value={subject}

          onChange={(e) => setSubject(e.target.value)}
        />
        </div>

        <div className="mb-4">
  
          <label className="block text-white font-semibold">✉️ Email Body:</label>
          <textarea
          className="textarea"
          placeholder="Paste the suspicious email content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </div>

        <button
          className="w-full bg-white/20 text-white p-3 rounded-lg font-semibold hover:bg-white/30 transition duration-300"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "🔍 Detect Phishing"}
        </button>

        {error && <p className="text-red-200 mt-3 text-center">{error}</p>}
        {result && <p className="text-lg mt-4 font-bold text-center text-white">{result}</p>}
        {probability && <p className="text-gray-300 text-center">{probability}</p>}
      </div>
    </div>
  );
};

export default App;
