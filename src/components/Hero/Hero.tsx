import { MapPin, Euro } from 'lucide-react'

const Hero = () => {
  return (
    <>
      {/* Brand Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold">
              <span className="text-accent-100">Koppiauto</span> - <span className="text-primary-100">Kun tarvitset tilaa!</span>
            </p>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">Koppiauto</span>
              <span className="block text-gray-700">Volkswagen LT35</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Oma LT35 on ollut mukana lukemattomissa muutoissa ja projekteissa
              vuosien varrella. Luotettava vanha tuttu, joka vie tavarat perille
              turvallisesti. Huollettu säännöllisesti ja aina tankattuna valmiina!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Euro className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hinnoittelu</p>
                  <p className="text-sm text-gray-600">60€/päivä • 150€/vkl</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Aaltotie 8</p>
                  <p className="text-sm text-gray-600">33180 Tampere</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="btn-accent text-center"
              >
                Tarkista saatavuus
              </a>
              <a
                href="#contact"
                className="btn-secondary text-center"
              >
                Ota yhteyttä
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <img
                src="images/van.jpeg"
                alt="Volkswagen LT35 pakettiauto"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium">Helppo ajaa!</p>
              <p className="text-xs opacity-90">B-kortti riittää</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero