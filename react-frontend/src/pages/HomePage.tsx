import { Shield, AlertTriangle, MessageSquare, Brain } from 'lucide-react';

function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-title">Protect Yourself from Phishing Attacks</h1>
        <p className="hero-subtitle">
          Advanced AI-powered tool to detect phishing attempts and generate safe responses.
          Stay secure in the digital world with PhishGuard.
        </p>
      </section>

      <div className="features-grid">
        <div className="feature-card">
          <Shield className="feature-icon" size={32} />
          <h3 className="feature-title">Smart Detection</h3>
          <p className="feature-description">
            Our advanced AI algorithms analyze emails for potential phishing threats
            using multiple security indicators and patterns.
          </p>
        </div>

        <div className="feature-card">
          <AlertTriangle className="feature-icon" size={32} />
          <h3 className="feature-title">Risk Assessment</h3>
          <p className="feature-description">
            Get detailed risk analysis with clear explanations of potential threats
            and security concerns in suspicious emails.
          </p>
        </div>

        <div className="feature-card">
          <MessageSquare className="feature-icon" size={32} />
          <h3 className="feature-title">Safe Responses</h3>
          <p className="feature-description">
            Generate professional and secure responses to suspicious emails while
            protecting your sensitive information.
          </p>
        </div>

        <div className="feature-card">
          <Brain className="feature-icon" size={32} />
          <h3 className="feature-title">AI-Powered</h3>
          <p className="feature-description">
            Utilizing cutting-edge artificial intelligence to provide accurate
            threat detection and intelligent response suggestions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;