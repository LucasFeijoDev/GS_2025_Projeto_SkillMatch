import { MapPin, Building2, DollarSign, Clock, ExternalLink, Bookmark } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface JobRecommendationsProps {
  resumeData: any;
}

export function JobRecommendations({ resumeData }: JobRecommendationsProps) {
  // Mock job recommendations based on resume data
  const jobs = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack',
      company: 'Tech Solutions Brasil',
      location: 'São Paulo, SP',
      salary: 'R$ 8.000 - R$ 12.000',
      type: 'CLT',
      match: 95,
      posted: '2 dias atrás',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      description: 'Procuramos desenvolvedor full stack para integrar nosso time de tecnologia.'
    },
    {
      id: 2,
      title: 'Engenheiro de Software Sênior',
      company: 'inovaTech',
      location: 'Remoto',
      salary: 'R$ 10.000 - R$ 15.000',
      type: 'PJ',
      match: 88,
      posted: '1 semana atrás',
      skills: ['Python', 'AWS', 'Docker', 'Kubernetes'],
      description: 'Oportunidade para trabalhar com arquitetura de microsserviços em escala.'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Startup Digital',
      location: 'Rio de Janeiro, RJ',
      salary: 'R$ 9.000 - R$ 13.000',
      type: 'CLT',
      match: 82,
      posted: '3 dias atrás',
      skills: ['Gestão de Produtos', 'Agile', 'Analytics', 'UX'],
      description: 'Lidere o desenvolvimento de produtos digitais inovadores.'
    },
    {
      id: 4,
      title: 'Frontend Developer',
      company: 'Design Studio',
      location: 'Belo Horizonte, MG',
      salary: 'R$ 7.000 - R$ 10.000',
      type: 'CLT',
      match: 78,
      posted: '5 dias atrás',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Figma'],
      description: 'Crie interfaces incríveis para nossos clientes premium.'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Cloud Corp',
      location: 'Remoto',
      salary: 'R$ 11.000 - R$ 16.000',
      type: 'PJ',
      match: 75,
      posted: '1 dia atrás',
      skills: ['AWS', 'Terraform', 'CI/CD', 'Monitoring'],
      description: 'Ajude a escalar nossa infraestrutura cloud para milhões de usuários.'
    }
  ];

  const getMatchColor = (match: number) => {
    if (match >= 90) return 'bg-[#32CD32]/20 text-[#32CD32] border-[#32CD32]';
    if (match >= 80) return 'bg-[#1E90FF]/20 text-[#1E90FF] border-[#1E90FF]';
    if (match >= 70) return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    return 'bg-gray-100 text-gray-700 border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#32CD32] to-[#1E90FF] shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-white">Vagas Recomendadas</h1>
          <p className="text-white/90 mt-1" style={{ fontFamily: 'Modeka, sans-serif' }}>Baseadas no seu perfil profissional</p>
        </div>
      </div>

      <div className="px-6 py-6">
        {!resumeData.name && (
          <Card className="mb-4 border-[#1E90FF] bg-[#1E90FF]/10 border-l-4">
            <CardContent className="pt-4">
              <p className="text-[#1E90FF]" style={{ fontFamily: 'Modeka, sans-serif' }}>
                💡 Complete seu currículo para receber recomendações mais precisas!
              </p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow border-l-4 border-l-[#32CD32]">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-gray-900 mb-1">{job.title}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span style={{ fontFamily: 'Modeka, sans-serif' }}>{job.company}</span>
                    </div>
                  </div>
                  <Badge className={`${getMatchColor(job.match)} border`}>
                    {job.match}% match
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-gray-600" style={{ fontFamily: 'Modeka, sans-serif' }}>{job.description}</p>

                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span style={{ fontFamily: 'Modeka, sans-serif' }}>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span style={{ fontFamily: 'Modeka, sans-serif' }}>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span style={{ fontFamily: 'Modeka, sans-serif' }}>{job.posted}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-[#1E90FF] text-[#1E90FF]">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Candidatar-se
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#32CD32] text-[#32CD32] hover:bg-[#32CD32] hover:text-white">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}