import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import VanDetails from './components/VanDetails/VanDetails'
import BookingCalendar from './components/BookingCalendar/BookingCalendar'
import LocationMap from './components/LocationMap/LocationMap'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <VanDetails />
      <BookingCalendar />
      <LocationMap />
      <Contact />
      <Footer />
    </div>
  )
}

export default App