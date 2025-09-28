import { Calendar } from 'lucide-react'

const BookingCalendar = () => {

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Tarkista saatavuus
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tsekkaa kalenterista vapaita päiviä ja soittele sitten! Hinnat on ihan kivoja
            ja auton voi usein noutaa joustavasti eri aikoina.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-6">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tarkista saatavuus kalenterista
                </h3>
                <p className="text-gray-600 mb-6">
                  Näet alla olevasta kalenterista milloin LT35 on vapaana. Tyhjät päivät = auto on saatavilla!
                </p>
              </div>

              {/* Google Calendar Embed */}
              <div className="bg-earth-50 rounded-xl p-4 mb-6 border border-earth-200">
                <div className="w-full">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FHelsinki&showPrint=0&src=ZjViMTZkMjE0MDFkN2UwYzhjZTY4NTE5MTY2ZjY2YWYxYmNiYzk1YmFmYzFhMjVjODMxMzg2NWYwZDgwYjY4NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233f51b5"
                    className="w-full h-[600px] rounded-lg border border-earth-300"
                    title="LT35 Varauskalenteri"
                    style={{ border: 0 }}
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">📅 Miten varaat:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li><strong>1.</strong> Tarkista kalenterista vapaat päivät</li>
                  <li><strong>2.</strong> Soita tai lähetä WhatsApp-viesti</li>
                  <li><strong>3.</strong> Kerro haluamasi päivä ja aika</li>
                  <li><strong>4.</strong> Saat vahvistuksen ja sovitaan yksityiskohdat</li>
                </ol>
              </div>


              <div className="mt-6 p-4 bg-accent-100 rounded-lg text-center">
                <p className="text-sm text-accent-800">
                  <strong>💡 Vinkki:</strong> Jos et näe kalenteria, päivitä sivu tai kokeile eri selainta.
                  Voit aina soittaa jos tulee ongelmia!
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default BookingCalendar