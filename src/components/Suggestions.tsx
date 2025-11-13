import { CheckCircle2, XCircle, AlertCircle, Lightbulb, Star, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface SuggestionsProps {
  resumeData: any;
}

export function Suggestions({ resumeData }: SuggestionsProps) {
  // Analyze resume and generate suggestions
  const analysis = {
    score: 0,
    strengths: [] as string[],
    improvements: [] as { title: string; description: string; priority: 'high' | 'medium' | 'low' }[],
    tips: [] as string[]
  };

  // Calculate score
  if (resumeData.name) analysis.score += 10;
  if (resumeData.email) analysis.score += 5;
  if (resumeData.phone) analysis.score += 5;
  if (resumeData.summary) analysis.score += 20;
  if (resumeData.experience.length > 0) analysis.score += 25;
  if (resumeData.experience.length >= 2) analysis.score += 10;
  if (resumeData.education.length > 0) analysis.score += 15;
  if (resumeData.skills.length >= 5) analysis.score += 10;

  // Identify strengths
  if (resumeData.summary && resumeData.summary.length > 50) {
    analysis.strengths.push('Resumo profissional bem detalhado');
  }
  if (resumeData.experience.length >= 2) {
    analysis.strengths.push('Experiência profissional diversificada');
  }
  if (resumeData.skills.length >= 8) {
    analysis.strengths.push('Ampla gama de habilidades');
  }
  if (resumeData.education.length > 0) {
    analysis.strengths.push('Formação acadêmica registrada');
  }

  // Generate improvements
  if (!resumeData.name || !resumeData.email) {
    analysis.improvements.push({
      title: 'Complete suas informações básicas',
      description: 'Adicione nome e email para que recrutadores possam entrar em contato.',
      priority: 'high'
    });
  }

  if (!resumeData.summary || resumeData.summary.length < 100) {
    analysis.improvements.push({
      title: 'Melhore seu resumo profissional',
      description: 'Um resumo de 150-200 caracteres destacando suas principais qualificações pode aumentar suas chances em 40%.',
      priority: 'high'
    });
  }

  if (resumeData.experience.length === 0) {
    analysis.improvements.push({
      title: 'Adicione experiências profissionais',
      description: 'Currículos com pelo menos 2 experiências têm 3x mais chances de receber convites.',
      priority: 'high'
    });
  }

  if (resumeData.skills.length < 5) {
    analysis.improvements.push({
      title: 'Adicione mais habilidades',
      description: 'Liste pelo menos 5-10 habilidades relevantes para sua área de atuação.',
      priority: 'medium'
    });
  }

  if (resumeData.experience.length > 0 && resumeData.experience.some((exp: any) => !exp.description || exp.description.length < 50)) {
    analysis.improvements.push({
      title: 'Detalhe suas experiências',
      description: 'Adicione descrições específicas sobre suas responsabilidades e conquistas em cada posição.',
      priority: 'medium'
    });
  }

  if (!resumeData.phone) {
    analysis.improvements.push({
      title: 'Adicione telefone de contato',
      description: 'Facilite o contato dos recrutadores fornecendo um número de telefone.',
      priority: 'low'
    });
  }

  // General tips
  analysis.tips = [
    'Use verbos de ação como "desenvolvi", "implementei", "liderei" nas descrições',
    'Quantifique suas conquistas sempre que possível (ex: "aumentei vendas em 30%")',
    'Mantenha seu currículo atualizado com suas últimas experiências e habilidades',
    'Personalize seu resumo para cada vaga que se candidatar',
    'Revise seu currículo para evitar erros de ortografia e gramática',
    'Destaque certificações e cursos relevantes para sua área'
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Alta Prioridade';
      case 'medium': return 'Média Prioridade';
      case 'low': return 'Baixa Prioridade';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#32CD32] to-[#1E90FF] text-white">
        <div className="px-6 py-6">
          <h1>Sugestões de Melhoria</h1>
          <p className="mt-1 text-white/90" style={{ fontFamily: 'Modeka, sans-serif' }}>Otimize seu perfil profissional</p>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Overall Score */}
        <Card className="border-[#32CD32] bg-gradient-to-br from-[#32CD32]/10 to-[#1E90FF]/10 border-l-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-gray-900">Pontuação do Currículo</CardTitle>
                <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Análise geral do seu perfil</CardDescription>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#1E90FF]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{analysis.score}</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Modeka, sans-serif' }}>de 100</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={analysis.score} className="h-3" />
            <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Modeka, sans-serif' }}>
              {analysis.score < 40 && 'Seu currículo precisa de melhorias significativas.'}
              {analysis.score >= 40 && analysis.score < 70 && 'Seu currículo está no caminho certo, mas pode melhorar.'}
              {analysis.score >= 70 && analysis.score < 90 && 'Seu currículo está bom! Pequenos ajustes podem otimizá-lo ainda mais.'}
              {analysis.score >= 90 && 'Excelente! Seu currículo está muito completo.'}
            </p>
          </CardContent>
        </Card>

        {/* Strengths */}
        {analysis.strengths.length > 0 && (
          <Card className="border-l-4 border-l-[#32CD32]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#32CD32]" />
                <CardTitle className="text-gray-900">Pontos Fortes</CardTitle>
              </div>
              <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>O que está funcionando bem no seu currículo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {analysis.strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-[#32CD32]/10 rounded-lg border border-[#32CD32]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#32CD32] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700" style={{ fontFamily: 'Modeka, sans-serif' }}>{strength}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Improvements */}
        {analysis.improvements.length > 0 && (
          <Card className="border-l-4 border-l-[#1E90FF]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#1E90FF]" />
                <CardTitle className="text-gray-900">Áreas de Melhoria</CardTitle>
              </div>
              <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Sugestões para fortalecer seu perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {analysis.improvements.map((improvement, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(improvement.priority)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-gray-900">{improvement.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {getPriorityLabel(improvement.priority)}
                    </Badge>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-sm" style={{ fontFamily: 'Modeka, sans-serif' }}>{improvement.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Tips */}
        <Card className="border-l-4 border-l-[#32CD32]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#32CD32]" />
              <CardTitle className="text-gray-900">Dicas Profissionais</CardTitle>
            </div>
            <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Boas práticas para currículos de destaque</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {analysis.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-[#1E90FF]/10 rounded-lg">
                <div className="w-6 h-6 bg-[#1E90FF] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700" style={{ fontFamily: 'Modeka, sans-serif' }}>{tip}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Action Card */}
        {analysis.score < 80 && (
          <Card className="border-[#32CD32] bg-[#32CD32]/10 border-l-4">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#32CD32] flex-shrink-0" />
                <div>
                  <h3 className="text-gray-900 mb-2">Próximos Passos</h3>
                  <p className="text-gray-700 mb-3" style={{ fontFamily: 'Modeka, sans-serif' }}>
                    Foque nas melhorias de alta prioridade para aumentar suas chances em até 60% nas próximas candidaturas!
                  </p>
                  <Badge className="bg-[#32CD32] text-white hover:bg-[#32CD32]/90">
                    Meta: {analysis.score + 20} pontos
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}