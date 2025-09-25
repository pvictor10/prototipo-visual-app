import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { User, FileText, BarChart3, Home, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1">
          {/* Mobile Header */}
          <div className="bg-ecofin-blue text-white p-4 safe-area-top">
            <div className="flex justify-between items-center">
              <SidebarTrigger className="text-white hover:bg-white/10 p-2 rounded-lg touch-manipulation" />
              <h1 className="text-lg font-semibold">ECOFIN</h1>
              <User className="w-7 h-7 touch-manipulation" />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="p-4 space-y-4 pb-20">
            {/* Saldo Total */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h2 className="text-lg text-muted-foreground">Saldo Total</h2>
                  <p className="text-3xl font-bold text-foreground">R$ 4.250,00</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Receitas: R$ 5.500,00</span>
                    <span className="text-muted-foreground">Despesas: R$ 1.250,00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orçamento Mensal */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Orçamento Mensal</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">R$ 1.250,00 de R$ 2.000,00</span>
                    <span className="text-muted-foreground">62.5%</span>
                  </div>
                  <Progress value={62.5} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Alerta de Gastos Excessivos */}
            <Alert className="border-destructive">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-destructive">
                <span className="font-semibold">Alerta de Gasto Excessivos</span>
                <br />
                Você gastou R$ 1200 em alimentação, R$ 200 acima da cota de R$ 1000. Considere rever suas despesas.
              </AlertDescription>
            </Alert>

            {/* Botões de Ação */}
            <div className="flex gap-4">
              <Button className="flex-1 bg-ecofin-blue hover:bg-ecofin-blue-dark">
                <FileText className="w-4 h-4 mr-2" />
                Relatórios
              </Button>
              <Button className="flex-1 bg-ecofin-blue hover:bg-ecofin-blue-dark">
                <BarChart3 className="w-4 h-4 mr-2" />
                Orçamentos
              </Button>
            </div>

            {/* Transações Recentes */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Transações Recentes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Supermercado</p>
                      <p className="text-sm text-muted-foreground">Alimentação</p>
                    </div>
                    <span className="text-destructive font-medium">- R$ 150,75</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Salário</p>
                      <p className="text-sm text-muted-foreground">Receitas</p>
                    </div>
                    <span className="text-green-600 font-medium">+ R$ 3000,75</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Uber</p>
                      <p className="text-sm text-muted-foreground">Transporte</p>
                    </div>
                    <span className="text-destructive font-medium">- R$ 25,75</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Netflix</p>
                      <p className="text-sm text-muted-foreground">Transporte</p>
                    </div>
                    <span className="text-destructive font-medium">- R$ 39,90</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 safe-area-bottom">
            <div className="flex justify-center gap-8">
              <Button variant="ghost" size="sm" className="text-ecofin-blue flex flex-col items-center gap-1 touch-manipulation">
                <Home className="w-6 h-6" />
                <span className="text-xs">Início</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;