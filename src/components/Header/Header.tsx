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

          <div className="flex items-center space-x-4">
            <a
              href="tel:0405382758"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">040 538 2758</span>
            </a>
            <a
              href="#booking"
              className="btn-primary"
            >
              Varaa nyt
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header