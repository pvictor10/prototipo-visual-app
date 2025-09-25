import { 
  FileText, 
  BarChart3, 
  Target, 
  CreditCard, 
  TrendingUp, 
  BookOpen 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button className="flex items-center w-full p-3 text-left hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                      <item.icon className="mr-3 h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}