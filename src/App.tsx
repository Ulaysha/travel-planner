//Learning Notes: App.tsx is the root react component for UI


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { Map, Settings, LayoutDashboard, Luggage } from 'lucide-react'
import './App.css'

const items = [
  { title: 'Dashboard', icon: LayoutDashboard },
  { title: 'Trips', icon: Luggage },
  { title: 'Map', icon: Map },
  { title: 'Settings', icon: Settings },
]

function App() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="px-2 py-1 text-lg font-semibold">Travel Planner</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-2 py-1 text-xs text-muted-foreground">v0.1</div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <div className="p-4">
          <SidebarTrigger />
          <h1 className="mt-4 text-2xl font-bold">Dashboard</h1>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
