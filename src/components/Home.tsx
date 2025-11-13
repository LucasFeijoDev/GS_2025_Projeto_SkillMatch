import { FileText, Briefcase, TrendingUp, Lightbulb, ChevronRight, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface HomeProps {
  onNavigate: (tab: string) => void;
  resumeData: any;
}

export function Home({ onNavigate, resumeData }: HomeProps) {
  const completionPercentage = () => {
    let score = 0;
    if (resumeData.name) score += 20;
    if (resumeData.email) score += 10;
    if (resumeData.summary) score += 20;
    if (resumeData.experience.length > 0) score += 25;
    if (resumeData.education.length > 0) score += 15;
    if (resumeData.skills.length > 0) score += 10;
    return score;
  };

  const completion = completionPercentage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-gray-900">Olá, {resumeData.name || 'Visitante'}!</h1>
              <p className="text-gray-600 mt-1" style={{ fontFamily: 'Modeka, sans-serif' }}>Bem-vindo ao seu assistente de carreira</p>
            </div>
            <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-[#1E90FF]" />
            </div>
          </div>

          {/* Progress Card */}
          <Card className="bg-gradient-to-r from-[#1E90FF] to-[#32CD32] text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontFamily: 'Modeka, sans-serif' }}>Progresso do Currículo</span>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{completion}%</span>
              </div>
              <Progress value={completion} className="h-2 bg-white/30" />
              <p className="text-sm text-white/90 mt-2" style={{ fontFamily: 'Modeka, sans-serif' }}>
                {completion < 100 ? 'Continue preenchendo seu currículo!' : 'Currículo completo!'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6 space-y-4">
        <h2 className="text-gray-900">Ações Rápidas</h2>

        <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-[#1E90FF]" onClick={() => onNavigate('resume')}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1E90FF]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#1E90FF]" />
                </div>
                <div>
                  <CardTitle className="text-gray-900">Criar Currículo</CardTitle>
                  <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Preencha suas informações profissionais</CardDescription>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-[#32CD32]" onClick={() => onNavigate('jobs')}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#32CD32]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#32CD32]" />
                </div>
                <div>
                  <CardTitle className="text-gray-900">Vagas Recomendadas</CardTitle>
                  <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Encontre oportunidades ideais para você</CardDescription>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-[#1E90FF]" onClick={() => onNavigate('trends')}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1E90FF]/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#1E90FF]" />
                </div>
                <div>
                  <CardTitle className="text-gray-900">Tendências de Mercado</CardTitle>
                  <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Análise das áreas mais promissoras</CardDescription>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-[#32CD32]" onClick={() => onNavigate('suggestions')}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#32CD32]/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[#32CD32]" />
                </div>
                <div>
                  <CardTitle className="text-gray-900">Sugestões de Melhoria</CardTitle>
                  <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Otimize seu perfil profissional</CardDescription>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}