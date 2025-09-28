# Käpylä Vans - Volkswagen LT35 Vuokraus

A modern van rental website for renting a Volkswagen LT35 van in Tampere, Finland. Built with React, TypeScript, and Tailwind CSS.

## 🚐 Features

- **Van Details**: Comprehensive information about the Volkswagen LT35
- **Booking Calendar**: Interactive calendar for checking availability and making reservations
- **Location Map**: Interactive map showing pickup/dropoff location in Tampere
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Finnish Language**: Fully localized for Finnish users

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Calendar**: React Big Calendar
- **Maps**: Leaflet + React Leaflet
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/testi-penkki/kapyla-vans.git
cd kapyla-vans
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest

## 🏗️ Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

This project is configured for GitHub Pages deployment. The site is automatically deployed when changes are pushed to the main branch.

### Manual Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the static files ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation header
│   ├── Hero/            # Hero section
│   ├── VanDetails/      # Van specifications and details
│   ├── BookingCalendar/ # Booking interface
│   ├── LocationMap/     # Interactive map
│   ├── Contact/         # Contact information
│   └── Footer/          # Site footer
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## 🔧 Configuration

The project uses Vite for building and development. Key configuration files:

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🗺️ Location

The van rental service is based in Tampere, Finland. The interactive map shows the exact pickup and dropoff location.

## 💰 Pricing

- **Daily Rate**: 60€/day
- **Weekend Rate**: 150€/weekend

## 📞 Contact

For bookings and inquiries, contact information is available on the website's contact section.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the repository owner.