import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    senhaConfirmar: ''
  });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações básicas
    if (formData.senha !== formData.senhaConfirmar) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive"
      });
      return;
    }

    if (formData.senha.length < 6) {
      toast({
        title: "Erro", 
        description: "A senha deve ter pelo menos 6 caracteres",
        variant: "destructive"
      });
      return;
    }

    // Aqui você implementaria a lógica de cadastro
    console.log('Register attempt:', formData);
    
    toast({
      title: "Sucesso",
      description: "Conta criada com sucesso!"
    });

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Crie sua conta
          </h1>
          <p className="text-ecofin-gray text-sm">
            Crie uma conta gratuitamente e faça parte da nossa comunidade.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-sm font-medium text-foreground">
              *Nome:
            </Label>
            <Input
              id="nome"
              type="text"
              placeholder="Insira seu nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="h-12 border-ecofin-gray-light bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              *Email:
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Insira seu melhor email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 border-ecofin-gray-light bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha" className="text-sm font-medium text-foreground">
              *Senha:
            </Label>
            <Input
              id="senha"
              type="password"
              placeholder="Insira sua senha mais forte"
              value={formData.senha}
              onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
              className="h-12 border-ecofin-gray-light bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senhaConfirmar" className="text-sm font-medium text-foreground">
              *Senha confirmar:
            </Label>
            <Input
              id="senhaConfirmar"
              type="password"
              placeholder="Insira sua senha mais forte"
              value={formData.senhaConfirmar}
              onChange={(e) => setFormData({ ...formData, senhaConfirmar: e.target.value })}
              className="h-12 border-ecofin-gray-light bg-white"
              required
            />
          </div>

          <div className="pt-8">
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-medium rounded-lg"
            >
              Finalizar cadastro
            </Button>
          </div>

          <div className="text-center">
            <span className="text-ecofin-gray text-sm">Já possui uma conta? </span>
            <Link 
              to="/login" 
              className="text-primary font-medium text-sm hover:underline"
            >
              Entre
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;