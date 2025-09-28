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
                  Varaa aika suoraan kalenterista!
                </h3>
                <p className="text-gray-600 mb-6">
                  Voit varata LT35:n suoraan alla olevasta kalenterista. Valitse sopiva aika ja saat vahvistuksen!
                </p>
              </div>

              {/* Google Calendar Appointment Scheduler */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2mS7lU2do4x-KnWc-pOdl3vCt60KSyWsql2bGXtmU17NKjO7SvvHkmgFmov_4xiiim15DS7UWs?gv=true"
                    className="w-full h-full rounded-lg border-0"
                    title="LT35 Varauskalenteri"
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Suora varaus:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li><strong>1.</strong> Valitse sopiva aika kalenterista</li>
                  <li><strong>2.</strong> Täytä yhteystietosi</li>
                  <li><strong>3.</strong> Saat automaattisen vahvistuksen</li>
                  <li><strong>4.</strong> Soitan vielä varmistamaan yksityiskohdat</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">✅ Varauskalenterin edut:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>⚡ Välitön varaus ilman puheluita</li>
                    <li>📅 Näet vapaat ajat reaaliajassa</li>
                    <li>📱 Toimii puhelimessa ja tietokoneessa</li>
                    <li>📧 Automaattiset muistutukset</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">📋 Muista:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>📞 Varaus varmistetaan aina puhelimitse</li>
                    <li>💰 Maksu noudettaessa (käteinen/kortti)</li>
                    <li>📍 Kantotie 10, Tampere</li>
                    <li>⏰ Noutoaika sovitaan joustavasti</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg text-center">
                <p className="text-sm text-blue-800">
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