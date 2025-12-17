import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/generate-reply"; // Flask API endpoint

const ReplyGenerator: React.FC = () => {
  const [emailContent, setEmailContent] = useState("");
  const [generatedReply, setGeneratedReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateReply = async () => {
    setLoading(true);
    setError(null);
    setGeneratedReply(null);

    try {
      const response = await axios.post(API_URL, { email_content: emailContent });

      setGeneratedReply(response.data.reply);
    } catch (err) {
      setError("Failed to generate reply. Check API or network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 p-6">
      <div className="glassmorphism w-full max-w-lg p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">✉️ AI Email Reply Generator</h1>

        <div className="mb-4">
          <label className="block text-white font-semibold">📨 Email Content:</label>
          <textarea
          className="textarea"
          placeholder="Paste the suspicious email content here..."
          value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
        />
        </div>

        <button
          className="w-full bg-white/20 text-white p-3 rounded-lg font-semibold hover:bg-white/30 transition duration-300"
          onClick={handleGenerateReply}
          disabled={loading}
        >
          {loading ? "Generating Reply..." : "💬 Generate Reply"}
        </button>

        {error && <p className="text-red-200 mt-3 text-center">{error}</p>}
        {generatedReply && (
          <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/30 text-white">
            <h3 className="font-semibold">💡 Suggested Reply:</h3>
            <p>{generatedReply}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplyGenerator;
