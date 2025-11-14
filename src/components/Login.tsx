import { useState } from 'react';
import { Mail, Lock, ArrowRight, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Por gentileza, preencha todos os campos');
      return;
    }

    setIsLoading(true);
    
    // Simular login
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login realizado com sucesso!');
      onLogin();
    }, 1000);
  };

  const handleRegister = () => {
    toast.info('Funcionalidade de cadastro em desenvolvimento');
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast.error('Digite seu email para recuperar a senha');
      return;
    }
    toast.success('Instruções enviadas para ' + email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E90FF] via-[#1E90FF] to-[#32CD32] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <FileText className="w-8 h-8 text-[#1E90FF]" />
          </div>
          <h1 className="text-white mb-2">SkillMatch</h1>
          <p className="text-white/90" style={{ fontFamily: 'Modeka, sans-serif' }}>Seu assistente de carreira profissional</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="text-gray-900 text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Bem-vindo de volta!</CardTitle>
            <CardDescription className="text-center" style={{ fontFamily: 'Modeka, sans-serif' }}>
              Entre com sua conta para continuar
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-[#1E90FF] hover:text-[#1E90FF]/80 transition-colors"
                  style={{ fontFamily: 'Modeka, sans-serif' }}
                >
                  Esqueceu a senha?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  'Entrando...'
                ) : (
                  <>
                    Entrar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500" style={{ fontFamily: 'Modeka, sans-serif' }}>Não tem uma conta?</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-[#32CD32] text-[#32CD32] hover:bg-[#32CD32] hover:text-white"
              onClick={handleRegister}
            >
              Cadastre-se gratuitamente
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-white/80 text-sm mt-6" style={{ fontFamily: 'Modeka, sans-serif' }}>
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
}