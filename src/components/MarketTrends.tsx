import { TrendingUp, TrendingDown, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface MarketTrendsProps {
  resumeData: any;
}

export function MarketTrends({ resumeData }: MarketTrendsProps) {
  const trends = [
    {
      category: 'Desenvolvimento de Software',
      growth: '+35%',
      trend: 'up',
      demand: 95,
      avgSalary: 'R$ 8.500',
      topSkills: ['React', 'TypeScript', 'Node.js', 'AWS'],
      insights: 'Demanda crescente por desenvolvedores full stack com experiência em cloud.'
    },
    {
      category: 'Inteligência Artificial & ML',
      growth: '+52%',
      trend: 'up',
      demand: 98,
      avgSalary: 'R$ 12.000',
      topSkills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning'],
      insights: 'Área em forte expansão com foco em LLMs e automação inteligente.'
    },
    {
      category: 'DevOps & SRE',
      growth: '+28%',
      trend: 'up',
      demand: 88,
      avgSalary: 'R$ 10.500',
      topSkills: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      insights: 'Crescimento sustentado com foco em observabilidade e automação.'
    },
    {
      category: 'Cybersecurity',
      growth: '+42%',
      trend: 'up',
      demand: 92,
      avgSalary: 'R$ 11.000',
      topSkills: ['Pentest', 'SIEM', 'Compliance', 'Cloud Security'],
      insights: 'Alta demanda por profissionais especializados em segurança cloud.'
    },
    {
      category: 'Product Management',
      growth: '+18%',
      trend: 'up',
      demand: 75,
      avgSalary: 'R$ 9.500',
      topSkills: ['Product Strategy', 'Agile', 'Data Analysis', 'UX'],
      insights: 'Crescimento moderado com foco em produtos digitais e SaaS.'
    },
    {
      category: 'Data Science',
      growth: '+25%',
      trend: 'up',
      demand: 85,
      avgSalary: 'R$ 9.800',
      topSkills: ['Python', 'SQL', 'Statistics', 'Machine Learning'],
      insights: 'Demanda estável com necessidade de skills em análise preditiva.'
    }
  ];

  const emergingSkills = [
    { skill: 'Generative AI', growth: '+180%' },
    { skill: 'Edge Computing', growth: '+95%' },
    { skill: 'Blockchain Development', growth: '+65%' },
    { skill: 'MLOps', growth: '+120%' },
    { skill: 'Quantum Computing', growth: '+75%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1E90FF] to-[#32CD32] text-white">
        <div className="px-6 py-6">
          <h1>Tendências de Mercado</h1>
          <p className="mt-1 text-white/90" style={{ fontFamily: 'Modeka, sans-serif' }}>Análise do mercado de trabalho em tecnologia</p>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Emerging Skills */}
        <Card className="border-[#32CD32] bg-gradient-to-br from-[#32CD32]/10 to-[#1E90FF]/10 border-l-4">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#32CD32]" />
              <CardTitle className="text-gray-900">Habilidades Emergentes</CardTitle>
            </div>
            <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Skills com maior crescimento de demanda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {emergingSkills.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#32CD32]/20">
                  <span className="text-gray-900" style={{ fontFamily: 'Modeka, sans-serif' }}>{item.skill}</span>
                  <Badge className="bg-[#32CD32] text-white hover:bg-[#32CD32]/90">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {item.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Trends */}
        <div className="space-y-4">
          {trends.map((trend, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-[#1E90FF]">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-gray-900 mb-1">{trend.category}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-[#32CD32] text-white hover:bg-[#32CD32]/90">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {trend.growth}
                      </Badge>
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Modeka, sans-serif' }}>crescimento anual</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'Modeka, sans-serif' }}>Nível de Demanda</span>
                    <span className="text-gray-900" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{trend.demand}%</span>
                  </div>
                  <Progress value={trend.demand} className="h-2" />
                </div>

                <div className="flex items-center justify-between p-3 bg-[#1E90FF]/10 rounded-lg">
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'Modeka, sans-serif' }}>Salário Médio</span>
                  <span className="text-gray-900" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{trend.avgSalary}</span>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Modeka, sans-serif' }}>Skills mais demandadas:</p>
                  <div className="flex flex-wrap gap-2">
                    {trend.topSkills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-[#1E90FF] text-[#1E90FF]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-[#32CD32]/10 rounded-lg border border-[#32CD32]/20">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-[#32CD32] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Modeka, sans-serif' }}>{trend.insights}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Insights */}
        <Card className="border-[#1E90FF] bg-[#1E90FF]/10 border-l-4">
          <CardHeader>
            <CardTitle className="text-gray-900">Insights do Mercado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700" style={{ fontFamily: 'Modeka, sans-serif' }}>
                O mercado de tecnologia cresceu 32% em 2024, com destaque para áreas de IA e cloud computing.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700" style={{ fontFamily: 'Modeka, sans-serif' }}>
                Trabalho remoto continua em alta, com 68% das vagas tech oferecendo essa modalidade.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-[#1E90FF] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700" style={{ fontFamily: 'Modeka, sans-serif' }}>
                Soft skills como comunicação e adaptabilidade são cada vez mais valorizadas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}