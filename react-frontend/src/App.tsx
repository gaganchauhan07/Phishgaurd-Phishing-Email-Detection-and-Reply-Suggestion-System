import { useState } from 'react';
import { Shield, Sun, Moon, AlertTriangle, Home, MessageSquare } from 'lucide-react';
import HomePage from './pages/HomePage';
import DetectionPage from './pages/DetectionPage';
import ReplyGeneratorPage from './pages/ReplyGenratorPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <Shield size={32} color="var(--color-primary)" />
            <h1 className="header-title">PhishGuard</h1>
          </div>
          
          <nav className="nav-links">
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              <Home size={18} />
              Home
            </a>
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'detection' ? 'active' : ''}`}
              onClick={() => setCurrentPage('detection')}
            >
              <AlertTriangle size={18} />
              Detection
            </a>
            <a 
              href="#" 
              className={`nav-link ${currentPage === 'reply' ? 'active' : ''}`}
              onClick={() => setCurrentPage('reply')}
            >
              <MessageSquare size={18} />
              Reply Generator
            </a>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'detection' && <DetectionPage />}
        {currentPage === 'reply' && <ReplyGeneratorPage />}
      </main>
    </div>
  );
}

export default App;