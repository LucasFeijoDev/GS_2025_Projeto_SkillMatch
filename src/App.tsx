import { useState } from 'react';
import { Home } from './components/Home';
import { CreateResume } from './components/CreateResume';
import { JobRecommendations } from './components/JobRecommendations';
import { MarketTrends } from './components/MarketTrends';
import { Suggestions } from './components/Suggestions';
import { Login } from './components/Login';
import { Home as HomeIcon, FileText, Briefcase, TrendingUp, Lightbulb } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  });

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} resumeData={resumeData} />;
      case 'resume':
        return <CreateResume resumeData={resumeData} setResumeData={setResumeData} />;
      case 'jobs':
        return <JobRecommendations resumeData={resumeData} />;
      case 'trends':
        return <MarketTrends resumeData={resumeData} />;
      case 'suggestions':
        return <Suggestions resumeData={resumeData} />;
      default:
        return <Home onNavigate={setActiveTab} resumeData={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-4 py-2 safe-area-inset-bottom">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'home' ? 'text-[#1E90FF] bg-[#1E90FF]/10' : 'text-gray-600'
            }`}
          >
            <HomeIcon className="w-5 h-5" />
            <span className="text-xs" style={{ fontFamily: 'Modeka, sans-serif' }}>Início</span>
          </button>

          <button
            onClick={() => setActiveTab('resume')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'resume' ? 'text-[#1E90FF] bg-[#1E90FF]/10' : 'text-gray-600'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-xs" style={{ fontFamily: 'Modeka, sans-serif' }}>Currículo</span>
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'jobs' ? 'text-[#32CD32] bg-[#32CD32]/10' : 'text-gray-600'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs" style={{ fontFamily: 'Modeka, sans-serif' }}>Vagas</span>
          </button>

          <button
            onClick={() => setActiveTab('trends')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'trends' ? 'text-[#1E90FF] bg-[#1E90FF]/10' : 'text-gray-600'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs" style={{ fontFamily: 'Modeka, sans-serif' }}>Mercado</span>
          </button>

          <button
            onClick={() => setActiveTab('suggestions')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeTab === 'suggestions' ? 'text-[#32CD32] bg-[#32CD32]/10' : 'text-gray-600'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            <span className="text-xs" style={{ fontFamily: 'Modeka, sans-serif' }}>Dicas</span>
          </button>
        </div>
      </nav>
    </div>
  );
}