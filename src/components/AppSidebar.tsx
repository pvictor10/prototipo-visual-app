import { 
  FileText, 
  BarChart3, 
  Target, 
  CreditCard, 
  TrendingUp, 
  BookOpen,
  DollarSign 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Relatório", icon: FileText },
  { title: "Orçamentos", icon: BarChart3 },
  { title: "Metas", icon: Target },
  { title: "Transações", icon: CreditCard },
  { title: "Análise de Investimentos", icon: TrendingUp },
  { title: "Lições", icon: BookOpen },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r">
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="touch-manipulation">
              <a href="#" className="flex items-center gap-3 p-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-ecofin-blue text-white">
                  <DollarSign className="size-5" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-lg">ECOFIN</span>
                  <span className="truncate text-xs text-muted-foreground">Gestão Financeira</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-2 text-sm font-medium text-muted-foreground">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-1">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="touch-manipulation">
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <item.icon className="size-5 text-ecofin-blue" />
                    <span className="font-medium">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}