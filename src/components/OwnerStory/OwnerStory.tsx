import { Heart, Wrench, Users } from 'lucide-react'

const OwnerStory = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-earth-50 to-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Miksi vuokraan LT35:ää?
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Moi! Oon Matti ja tää Volkswagen LT35 on ollut mun kumppani jo pari vuotta.
                Ostin sen alun perin omiin projekteihin, mutta huomasin että se seisoo pihassa
                aika paljon tyhjillään.
              </p>

              <p className="leading-relaxed">
                Ajattelin että miksei auttaisi muita samalla kun auto pysyy käytössä!
                Ite oon muuttanut sillä varmaan kymmenen kertaa ja vienyt vaikka mitä
                huonekaluja, puutavaraa ja kaikkea mahdollista.
              </p>

              <p className="leading-relaxed">
                Auto on luotettava vanhan liiton vehje - ei mitään turhia härpäkkeitä,
                vaan yksinkertaisesti toimiva ja tilava. Juuri sellainen kun tarvitsee
                viedä tavaraa paikasta A paikkaan B.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mukava auttaa</h3>
                <p className="text-sm text-gray-600">
                  Kiva kun voin auttaa muuttoja ja projekteja eteenpäin
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Huollettu hyvin</h3>
                <p className="text-sm text-gray-600">
                  Pidän autosta hyvää huolta, aina tankattu ja siisti
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Joustava meininki</h3>
                <p className="text-sm text-gray-600">
                  Ei tiukkoja sääntöjä, katsotaan yhdessä miten järjestyy
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium mb-2">Kuva omistajasta ja autosta</p>
                  <p className="text-sm">
                    (Lisää henkilökohtainen kuva tähän myöhemmin)
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">Matti & LT35</h3>
                <p className="text-sm text-gray-600">Tampereella vuodesta 2022</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium">Paikallinen palikoija</p>
              <p className="text-xs opacity-90">Tampereelta Tampereelle</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mitä asiakkaat sanoo?
            </h3>
            <p className="text-gray-600">
              Muutama kommentti niiltä jotka on käyttäneet autoa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
              <p className="text-gray-700 mb-4 italic">
                "Matti oli todella joustava aikataulujen kanssa ja auto oli siistissä kunnossa.
                Muutto sujui hyvin!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-800 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anna</p>
                  <p className="text-sm text-gray-600">Opiskelija, muutto Hervantaan</p>
                </div>
              </div>
            </div>

            <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
              <p className="text-gray-700 mb-4 italic">
                "Hyvä auto ja mukava kaveri! Sain noudettua IKEA-ostokset helposti ja hinta oli reilu."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-800 font-semibold">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jukka</p>
                  <p className="text-sm text-gray-600">Remontti projektit</p>
                </div>
              </div>
            </div>

            <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
              <p className="text-gray-700 mb-4 italic">
                "Nopea vastaus WhatsAppiin ja auto oli saatavilla lyhyellä varoitusajalla. Suosittelen!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-800 font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sanna</p>
                  <p className="text-sm text-gray-600">Pikamuutto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OwnerStory