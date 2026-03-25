# Travel Planner

A React + TypeScript travel planning app that lets you create trips, manage itineraries, and visualize points of interest on a map.

## Features

- **Multiple Trips** — Create and switch between different trips
- **Itinerary Management** — Add activities with dates and notes, visualized as a timeline stepper
- **Points of Interest (POIs)** — Add restaurants, hotels, sightseeing spots, and shopping locations with coordinates
- **Interactive Map** — View all POIs plotted on a map using mapcn (MapLibre GL)
- **Trip Organization** — Each trip has its own itinerary and POIs


## Example Data

The app comes with **Cape Town Trip 2026** as an example. This includes:

- **Itinerary**: Sample activities on specific dates
- **POIs**: Example restaurants, hotels, sightseeing spots, and shopping areas in Cape Town with coordinates

You can delete this trip and create your own, or modify it as needed.
 **Note**: The Cape Town data is example data only. For now, all the trips and POI's will be stored in a local state. A future imporvement will be to persist the data so the data isnt deleted once the page is refreshed


## Usage

1. **Create a Trip** — Click "+ New Trip" in the sidebar
2. **Add Itinerary Items** — Click "+ Add Item" and enter activity details
3. **Add POIs** — Click "+ Add POI" and provide coordinates (lat/lng)
4. **View on Map** — POIs automatically appear on the map section
5. **Switch Trips** — Click any trip name in the sidebar to switch

## Project Status
Future improvements may include:

- Geocoding addresses to coordinates automatically
- Persist data to localStorage or a database
- Edit/delete functionality for itinerary items and POIs
- Trip sharing and collaboration
- Calendar view for itinerary

---



