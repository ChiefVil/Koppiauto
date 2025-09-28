import { Truck, Phone } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Truck className="h-8 w-8 text-primary-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Van Vuokraus</h1>
              <p className="text-sm text-gray-600">Volkswagen LT35</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="tel:0405382758"
              className="flex items-center space-x-1 sm:space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium hidden sm:inline">040 538 2758</span>
              <span className="font-medium sm:hidden">Soita</span>
            </a>
            <a
              href="#booking"
              className="btn-primary text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-3"
            >
              Varaa
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header