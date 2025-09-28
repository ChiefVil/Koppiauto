import { Phone, MessageSquare, Clock, MapPin } from 'lucide-react'

const Contact = () => {
  const whatsappNumber = "358405382758" // Finnish format for WhatsApp
  const phoneNumber = "0405382758"

  const whatsappMessage = encodeURIComponent(
    "Moi! Tarvitsisin pakettiautoa, onko LT35 vapaana? 🚐"
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ota yhteyttä
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soita tai lähetä viestiä niin katsotaan yhdessä miten voidaan auttaa!
            Vastaan yleensä heti tai viimeistään muutaman tunnin sisällä.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Yhteystiedot
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors group"
                >
                  <div className="bg-primary-600 p-3 rounded-lg mr-4 group-hover:bg-primary-700 transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Soita suoraan</p>
                    <p className="text-primary-600 font-medium">{phoneNumber}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                >
                  <div className="bg-green-600 p-3 rounded-lg mr-4 group-hover:bg-green-700 transition-colors">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-green-600 font-medium">Lähetä viesti</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Palvelutiedot
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Aukioloajat</p>
                    <p className="text-gray-600">Ma-Su: Sopimuksen mukaan</p>
                    <p className="text-gray-600 text-sm">Joustavat nouto- ja palautusajat</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Sijainti</p>
                    <p className="text-gray-600">Kantotie 10, Tampere</p>
                    <p className="text-gray-600 text-sm">Noutoaika sovitaan varauksen yhteydessä</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Usein kysytyt kysymykset
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mitä tarvitsen mukaan noudettaessa?
                </h4>
                <p className="text-gray-600 text-sm">
                  Pelkästään ajokortti ja rahat mukaan! Käteinen tai kortti, molemmat käy hyvin.
                  Tankki on aina täynnä kun noudat.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Kuinka nopeasti saan auton?
                </h4>
                <p className="text-gray-600 text-sm">
                  Parhaassa tapauksessa saman tien, jos olen kotona! Yleensä pystyn
                  järjestämään noudossa muutaman tunnin varoitusajalla.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Voiko pitää pidempään kuin sovittiin?
                </h4>
                <p className="text-gray-600 text-sm">
                  Totta kai, kunhan ilmoitat etukäteen! Jos ei ole seuraavaa varausta,
                  niin ei ole kiirettä palauttaa.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Entä jos tulee joku ongelma?
                </h4>
                <p className="text-gray-600 text-sm">
                  Soita vaan heti, niin keksitään ratkaisu yhdessä! Ei ole vielä tullut
                  tilannetta vastaan, johon ei olisi löytynyt järkevää ratkaisua.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800 font-medium">
                💡 Psst: WhatsAppia vilkuilen koko ajan, sieltä saat nopeimmin kiinni!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Valmis vuokraamaan?
            </h3>
            <p className="text-primary-100 mb-6">
              Ota yhteyttä tänään ja varaa luotettava Volkswagen LT35 seuraavaan projektiiisi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                <span className="hidden sm:inline">Soita: {phoneNumber}</span>
                <span className="sm:hidden">Soita</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                <span className="hidden sm:inline">Avaa WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact