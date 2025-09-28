# CLAUDE.md

## Project Overview
Van rental website for Volkswagen LT35 in Tampere, Finland. Recently rebranded to "Koppiauto" with slogan "Kun tarvitset tilaa". Built with React + TypeScript + Vite + Tailwind CSS.

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint with max 0 warnings
- `npm run preview` - Preview production build
- `npm run test` - Run tests with Vitest

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Calendar**: React Big Calendar
- **Maps**: Leaflet + React Leaflet
- **Icons**: Lucide React
- **Dates**: date-fns

## Project Structure
```
src/
├── components/     # React components (Header, Hero, VanDetails, BookingCalendar, LocationMap, Contact, Footer)
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Main app component
└── main.tsx       # Entry point
```

## Key Features
- Van details and specifications
- Interactive booking calendar
- Location map for Tampere pickup/dropoff
- Responsive design
- Finnish localization
- Pricing: 60€/day, 150€/weekend

## Notes
- Deployed via GitHub Pages (auto-deploy on main branch push)
- Google Calendar integration (see GOOGLE_CALENDAR_SETUP.md)
- Recent rebranding from "Käpylä Vans" to "Koppiauto"
- Uses color scheme optimized for accessibility and brand recognition