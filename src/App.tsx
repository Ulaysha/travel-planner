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

const tripName = 'Cape Town Trip 2026'

const poiCategories = ['Restaurants', 'Hotels', 'Sightseeing', 'Shopping']

const itinerary = [
  { id: 'i1', title: 'Arrive in Cape Town', date: '2026-02-20', notes: 'Check in' },
  { id: 'i2', title: 'Asakusa + Skytree', date: '2026-03-11', notes: 'Sunset view' },
]

const pois = [
  { id: 'p1', name: 'Sushi Dai', category: 'Restaurants', location: 'Tokyo', notes: 'Go early' },
  { id: 'p2', name: 'Hotel Gracery', category: 'Hotels', location: 'Shinjuku', notes: 'Godzilla view' },
  { id: 'p3', name: 'Senso-ji', category: 'Sightseeing', location: 'Asakusa', notes: '' },
  { id: 'p4', name: 'Shibuya 109', category: 'Shopping', location: 'Shibuya', notes: '' },
]

function App() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        <Sidebar className="bg-white/5 backdrop-blur-xl border-white/10">
          <SidebarHeader>
            <div className="py-1 text-lg font-semibold">Travel Planner</div>
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
         <SidebarInset className="bg-transparent flex-1  w-full min-h-screen pl-[var(--sidebar-width)]">
          <div className="p-4">
            <SidebarTrigger />
            <h1 className="mt-4 text-2xl font-bold">{tripName}</h1>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Itinerary</h2>
              <ul className="mt-2 space-y-2">
                {itinerary.map((item) => (
                  <li key={item.id} className="rounded-md border p-3">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                    {item.notes && <div className="text-sm">{item.notes}</div>}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">POI Categories</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {poiCategories.map((c) => (
                  <span key={c} className="rounded-full border px-3 py-1 text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Points of Interest</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pois.map((poi) => (
                  <div
                    key={poi.id}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm transition hover:shadow-md" >
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">{poi.category}</div>
                      <span className="rounded-full border px-2 py-0.5 text-xs">
                        {poi.location}
                      </span>
                    </div>
                    <div className="mt-2 text-lg font-semibold">{poi.name}</div>
                    {poi.notes && <div className="mt-1 text-sm">{poi.notes}</div>}
                  </div>
                ))}
              </div>
            </section>
        </div>
      </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default App