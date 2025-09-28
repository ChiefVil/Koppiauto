import { Ruler, Settings, Euro, MapPin } from 'lucide-react'

const VanDetails = () => {
  const specifications = [
    { label: 'Korkeus', value: '190 cm' },
    { label: 'Leveys', value: '170 cm' },
    { label: 'Pituus', value: '330 cm' },
  ]

  const technical = [
    { label: 'Vaihteisto', value: '5-vaihteinen manuaali' },
    { label: 'Ajokortti', value: 'B-kortilla ajettava' },
    { label: 'Vetokoukku', value: '2000kg jarrullinen vetomassa' },
  ]

  const pricing = [
    {
      type: 'Päivävuokra',
      price: '60€',
      duration: 'klo 8-21',
      includes: '150 km sisältyy',
    },
    {
      type: 'Viikonloppuvuokra',
      price: '150€',
      duration: 'La-Su',
      includes: '450 km sisältyy',
    },
  ]

  return (
    <section id="details" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Auton tiedot ja hinnat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siiisti ja luotettava Volkswagen LT35, sopii erinomaisesti muuttoihin,
            kuljetuksiin ja muihin tilavuutta vaativiin tarpeisiin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Tavaratilan mitat */}
          <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Ruler className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Tavaratilan mitat
              </h3>
            </div>
            <div className="space-y-3">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{spec.label}:</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tekniset tiedot */}
          <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Tekniset tiedot
              </h3>
            </div>
            <div className="space-y-3">
              {technical.map((tech, index) => (
                <div key={index}>
                  <span className="text-gray-600">{tech.label}:</span>
                  <p className="font-medium text-gray-900">{tech.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nouto ja palautus */}
          <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Nouto ja palautus
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                Nouto ja palautus joustavasti Tampereen kaupunkialueella
              </p>
              <p className="text-gray-600">
                Palautus tankattuna ellei muuta sovita
              </p>
            </div>
          </div>
        </div>

        {/* Hinnat */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <Euro className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Vuokrahinnat</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricing.map((price, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-xl p-6 text-center"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {price.type}
                </h4>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {price.price}
                </div>
                <p className="text-gray-600 mb-1">{price.duration}</p>
                <p className="text-sm text-primary-700 font-medium">
                  {price.includes}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Sopii erinomaisesti muuttoihin, kuljetuksiin ja muihin tilavuutta vaativiin tarpeisiin!
          </p>
          <a
            href="#booking"
            className="btn-accent"
          >
            Varaa pakettiauto
          </a>
        </div>
      </div>
    </section>
  )
}

export default VanDetails