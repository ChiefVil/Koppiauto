import { Truck, Phone, MessageSquare, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Truck className="h-8 w-8 text-primary-400" />
              <div>
                <h3 className="text-xl font-bold">Van Vuokraus</h3>
                <p className="text-gray-400 text-sm">Volkswagen LT35</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Luotettava pakettiauto vuokraus Tampereen alueella.
              Sopii erinomaisesti muuttoihin, kuljetuksiin ja
              muihin tilavuutta vaativiin tarpeisiin.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Yhteystiedot</h4>
            <div className="space-y-3">
              <a
                href="tel:0405382758"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>040 538 2758</span>
              </a>
              <a
                href="https://wa.me/358405382758"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Käpylä, Tampere</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Palvelut</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Päivävuokra (60€)</li>
              <li>• Viikonloppuvuokra (150€)</li>
              <li>• Joustava nouto ja palautus</li>
              <li>• B-kortilla ajettava</li>
              <li>• Vetokoukku 2000kg</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Van Vuokraus. Kaikki oikeudet pidätetään.
            </p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">
              Volkswagen LT35 - Luotettava valinta kuljetuksiin
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer