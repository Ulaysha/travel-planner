//Learning Notes: App.tsx is the root react component for UI
//Created grid with 2 columns to show itinerary and POI cards
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
import { Map as MapIcon, Settings, LayoutDashboard, Luggage } from 'lucide-react'
import './App.css'
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from "@/components/ui/map"
const items = [
  { title: 'Dashboard', icon: LayoutDashboard },
  { title: 'Trips', icon: Luggage },
  { title: 'Map', icon: MapIcon},
  { title: 'Settings', icon: Settings },
]

const tripName = 'Cape Town Trip 2026'

const poiCategories = ['Restaurants', 'Hotels', 'Sightseeing', 'Shopping']

const itinerary = [
  { id: 'i1', title: 'Arrive in Cape Town', date: '2026-02-20', notes: 'Check in' },
  { id: 'i2', title: 'Asakusa + Skytree', date: '2026-03-11', notes: 'Sunset view' },
]

const pois = [
  { id: 'p1', name: 'Kloof Street House', category: 'Restaurants', location: 'Gardens', notes: 'Book ahead', lat: -33.9341, lng: 18.4128 },
  { id: 'p2', name: 'The Table Bay Hotel', category: 'Hotels', location: 'V&A Waterfront', notes: 'Harbor view', lat: -33.9064, lng: 18.4200 },
  { id: 'p3', name: 'Table Mountain', category: 'Sightseeing', location: 'Table Mountain NP', notes: 'Go early', lat: -33.9628, lng: 18.4098 },
  { id: 'p4', name: 'V&A Waterfront', category: 'Shopping', location: 'Waterfront', notes: '', lat: -33.9066, lng: 18.4199 },
]

function App() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-screen flex">
        <Sidebar className="bg-white/5 backdrop-blur-xl border-white/10 w-64">
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
         <SidebarInset className="bg-transparent flex-1 min-h-screen">
          <div className="w-full px-0">
            <SidebarTrigger />
            <h1 className="mt-4 text-2xl font-bold">{tripName}</h1>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
              <section className="mt-6 lg:w-[35%]">
                <h2 className="text-lg font-semibold">Itinerary</h2>
                <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 shadow-sm">
                  <ul className="space-y-4">
                    {itinerary.map((item, index) => (
                      <li key={item.id} className="relative pl-1">
                        {index !== itinerary.length - 1 && (
                          <span className="absolute left-[2px] top-6 h-full w-px bg-white/20" />
                        )}
                        <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" />
                        <div>
                          <div className="font-medium text-grey">{item.title}</div>
                          <div className="text-sm text-white/70">{item.date}</div>
                          {item.notes && <div className="text-sm text-white/80">{item.notes}</div>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              //Points of Interest Section  
              <section className="mt-6 lg:ml-auto lg:w-[60%]">
                <h2 className="text-lg font-semibold">Points of Interest</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pois.map((poi) => (
                    <div
                      key={poi.id}
                      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm transition hover:shadow-md">
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

//Map Section using mapcn
            <section className="mt-8">
              <h2 className="text-lg font-semibold">Map</h2>
              <div className="mt-4 h-[360px] w-full overflow-hidden rounded-2xl border border-white/10">
                <Map
                  className="h-full w-full"
                  center={[18.4241, -33.9249]} // [lng, lat] for Cape Town
                  zoom={12} >
                  <MapControls showZoom showLocate />
                  {pois.map((poi) => (
                    <MapMarker
                      key={poi.id}
                      longitude={poi.lng}
                      latitude={poi.lat}
                    >
                      <MarkerContent />
                      <MarkerPopup>
                        <div className="text-sm font-medium">{poi.name}</div>
                        <div className="text-xs">{poi.category}</div>
                      </MarkerPopup>
                    </MapMarker>
                  ))}
                </Map>
              </div>
            </section>
        </div>
      </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default App