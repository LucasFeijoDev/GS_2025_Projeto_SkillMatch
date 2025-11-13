import { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

interface CreateResumeProps {
  resumeData: any;
  setResumeData: (data: any) => void;
}

export function CreateResume({ resumeData, setResumeData }: CreateResumeProps) {
  const [newSkill, setNewSkill] = useState('');

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { id: Date.now(), company: '', position: '', period: '', description: '' }
      ]
    });
  };

  const removeExperience = (id: number) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp: any) => exp.id !== id)
    });
  };

  const updateExperience = (id: number, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp: any) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { id: Date.now(), institution: '', degree: '', period: '' }
      ]
    });
  };

  const removeEducation = (id: number) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu: any) => edu.id !== id)
    });
  };

  const updateEducation = (id: number, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu: any) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_: any, i: number) => i !== index)
    });
  };

  const saveResume = () => {
    toast.success('Currículo salvo com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1E90FF] to-[#32CD32] shadow-sm sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white">Meu Currículo</h1>
            <p className="text-white/90 mt-1" style={{ fontFamily: 'Modeka, sans-serif' }}>Preencha suas informações profissionais</p>
          </div>
          <Button onClick={saveResume} size="sm" className="bg-white text-[#1E90FF] hover:bg-white/90">
            <Save className="w-4 h-4 mr-2" />
            Salvar
          </Button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Personal Info */}
        <Card className="border-l-4 border-l-[#1E90FF]">
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Seus dados básicos de contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                value={resumeData.name}
                onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={resumeData.email}
                onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={resumeData.phone}
                onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="border-l-4 border-l-[#32CD32]">
          <CardHeader>
            <CardTitle>Resumo Profissional</CardTitle>
            <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Descreva brevemente sua experiência e objetivos</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={resumeData.summary}
              onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
              placeholder="Ex: Profissional com 5 anos de experiência em desenvolvimento de software..."
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="border-l-4 border-l-[#1E90FF]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Experiência Profissional</CardTitle>
                <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Adicione seus trabalhos anteriores</CardDescription>
              </div>
              <Button onClick={addExperience} size="sm" className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <Plus className="w-4 h-4 mr-1" />
                Adicionar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {resumeData.experience.length === 0 ? (
              <p className="text-gray-500 text-center py-4" style={{ fontFamily: 'Modeka, sans-serif' }}>Nenhuma experiência adicionada</p>
            ) : (
              resumeData.experience.map((exp: any) => (
                <div key={exp.id} className="p-4 border border-[#1E90FF]/20 rounded-lg space-y-3 bg-[#F5F5F5]">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-900">Experiência</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(exp.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder="Nome da empresa"
                    />
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      placeholder="Cargo"
                    />
                    <Input
                      value={exp.period}
                      onChange={(e) => updateExperience(exp.id, 'period', e.target.value)}
                      placeholder="Período (ex: Jan 2020 - Dez 2022)"
                    />
                    <Textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Descrição das responsabilidades e conquistas"
                      rows={3}
                    />
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="border-l-4 border-l-[#32CD32]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Formação Acadêmica</CardTitle>
                <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Adicione sua educação formal</CardDescription>
              </div>
              <Button onClick={addEducation} size="sm" className="bg-[#32CD32] hover:bg-[#32CD32]/90">
                <Plus className="w-4 h-4 mr-1" />
                Adicionar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {resumeData.education.length === 0 ? (
              <p className="text-gray-500 text-center py-4" style={{ fontFamily: 'Modeka, sans-serif' }}>Nenhuma formação adicionada</p>
            ) : (
              resumeData.education.map((edu: any) => (
                <div key={edu.id} className="p-4 border border-[#32CD32]/20 rounded-lg space-y-3 bg-[#F5F5F5]">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-900">Formação</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(edu.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      placeholder="Nome da instituição"
                    />
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      placeholder="Curso/Grau"
                    />
                    <Input
                      value={edu.period}
                      onChange={(e) => updateEducation(edu.id, 'period', e.target.value)}
                      placeholder="Período (ex: 2018 - 2022)"
                    />
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="border-l-4 border-l-[#1E90FF]">
          <CardHeader>
            <CardTitle>Habilidades</CardTitle>
            <CardDescription style={{ fontFamily: 'Modeka, sans-serif' }}>Adicione suas competências técnicas e comportamentais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Digite uma habilidade"
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <Button onClick={addSkill} size="sm" className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.length === 0 ? (
                <p className="text-gray-500 text-center w-full py-4" style={{ fontFamily: 'Modeka, sans-serif' }}>Nenhuma habilidade adicionada</p>
              ) : (
                resumeData.skills.map((skill: string, index: number) => (
                  <Badge key={index} className="px-3 py-1.5 bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                    {skill}
                    <button
                      onClick={() => removeSkill(index)}
                      className="ml-2 hover:text-red-200"
                    >
                      ×
                    </button>
                  </Badge>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}