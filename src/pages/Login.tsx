import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import loginBackground from '@/assets/login-background.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação
    console.log('Login attempt:', formData);
    navigate('/dashboard'); // Redirecionar para dashboard após login
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header com imagem de fundo */}
      <div 
        className="h-64 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${loginBackground})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold text-foreground mb-8">
            Entre na sua conta
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="usuario" className="text-sm font-medium text-foreground">
                *Usuário:
              </Label>
              <Input
                id="usuario"
                type="text"
                placeholder="Clara"
                value={formData.usuario}
                onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                className="h-12 border-ecofin-gray-light bg-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-sm font-medium text-foreground">
                *Senha:
              </Label>
              <div className="relative">
                <Input
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={formData.senha}
                  onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                  className="h-12 border-ecofin-gray-light bg-white pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ecofin-gray"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-medium rounded-lg"
            >
              Entrar
            </Button>

            <div className="text-center">
              <span className="text-ecofin-gray text-sm">Não possui uma conta? </span>
              <Link 
                to="/register" 
                className="text-primary font-medium text-sm hover:underline"
              >
                Cadastre-se
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;