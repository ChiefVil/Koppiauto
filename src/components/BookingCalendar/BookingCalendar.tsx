import { useState } from 'react'
import { Calendar, Clock, Euro, Phone } from 'lucide-react'

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [rentalType, setRentalType] = useState<'daily' | 'weekend'>('daily')
  const [useExternalBooking, setUseExternalBooking] = useState(false)

  // Sample booked dates (in real app, this would come from backend)
  const bookedDates = [
    '2024-10-15',
    '2024-10-20',
    '2024-10-21',
    '2024-10-27',
    '2024-10-28'
  ]

  const generateCalendarDays = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()

    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const daysInMonth = lastDay.getDate()

    const days = []

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const dateString = date.toISOString().split('T')[0]
      const isPast = date < today
      const isBooked = bookedDates.includes(dateString)
      const isSelected = selectedDate === dateString

      days.push({
        day,
        date: dateString,
        isPast,
        isBooked,
        isSelected,
        isAvailable: !isPast && !isBooked
      })
    }

    return days
  }

  const handleDateSelect = (dateString: string, isAvailable: boolean) => {
    if (isAvailable) {
      setSelectedDate(dateString)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fi-FI', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getPrice = () => {
    return rentalType === 'daily' ? '60€' : '150€'
  }

  const getIncludedKm = () => {
    return rentalType === 'daily' ? '150 km' : '450 km'
  }

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

        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <div className="flex">
              <button
                onClick={() => setUseExternalBooking(false)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  !useExternalBooking
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tarkista saatavuus
              </button>
              <button
                onClick={() => setUseExternalBooking(true)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  useExternalBooking
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Google Kalenteri
              </button>
            </div>
          </div>
        </div>

        {useExternalBooking ? (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-6">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Varaa suoraan Google Kalenterista
                </h3>
                <p className="text-gray-600 mb-6">
                  Näet suoraan LT35:n vapaat ajat ja voit ehdottaa varausaikoja!
                </p>
              </div>

              {/* Google Calendar Embed */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FHelsinki&src=YOUR_CALENDAR_ID%40gmail.com&color=%23039BE5&showTitle=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&showNav=1&mode=MONTH"
                    className="w-full h-full rounded-lg border-0"
                    title="LT35 Varauskalenteri"
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">📅 Miten varaat:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li><strong>1.</strong> Tarkista kalenterista vapaat päivät (ei tapahtumia = vapaa)</li>
                  <li><strong>2.</strong> Soita tai lähetä WhatsApp-viesti haluamastasi ajasta</li>
                  <li><strong>3.</strong> Vahvistan saatavuuden ja lisään varauksen kalenteriin</li>
                  <li><strong>4.</strong> Sovitaan nouto ja maksu</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">✅ Google Kalenterin edut:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🗓️ Näet reaaliaikaiset varaukset</li>
                    <li>📱 Toimii kaikilla laitteilla</li>
                    <li>🔄 Päivittyy automaattisesti</li>
                    <li>👥 Helppo jakaa muille</li>
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
        ) : (
          <>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={() => setRentalType('daily')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                    rentalType === 'daily'
                      ? 'border-primary-600 bg-primary-50 text-primary-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold">Päivävuokra</div>
                    <div className="text-sm opacity-75">60€ (klo 8-21)</div>
                  </div>
                </button>

                <button
                  onClick={() => setRentalType('weekend')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                    rentalType === 'weekend'
                      ? 'border-primary-600 bg-primary-50 text-primary-900'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold">Viikonloppuvuokra</div>
                    <div className="text-sm opacity-75">150€ (La-Su)</div>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'].map((day) => (
                  <div key={day} className="p-2 text-center font-medium text-gray-600">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {generateCalendarDays().map((day) => (
                  <button
                    key={day.day}
                    onClick={() => handleDateSelect(day.date, day.isAvailable)}
                    disabled={!day.isAvailable}
                    className={`p-3 text-center rounded-lg transition-colors ${
                      day.isSelected
                        ? 'bg-primary-600 text-white'
                        : day.isAvailable
                        ? 'bg-white text-gray-900 hover:bg-primary-50 border border-gray-200'
                        : day.isBooked
                        ? 'bg-red-100 text-red-600 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {day.day}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border border-gray-200 rounded mr-2"></div>
                  <span className="text-gray-600">Vapaa</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-100 rounded mr-2"></div>
                  <span className="text-gray-600">Varattu</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded mr-2"></div>
                  <span className="text-gray-600">Valittu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {selectedDate && (
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Valittu päivä
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-sm">{formatDate(selectedDate)}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="text-sm">
                      {rentalType === 'daily' ? 'klo 8-21' : 'Viikonloppu'}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Euro className="h-5 w-5 mr-2" />
                    <span className="text-sm">
                      {getPrice()} (sis. {getIncludedKm()})
                    </span>
                  </div>
                </div>

                <a
                  href="tel:0405382758"
                  className="btn-primary w-full text-center block"
                >
                  <Phone className="h-5 w-5 inline mr-2" />
                  Soita ja varaa
                </a>
              </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Varausohje
              </h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li>1. Katso kalenterista milloin olisi kiva noutaa</li>
                <li>2. Soita tai laita viestiä (040 538 2758)</li>
                <li>3. Sovitaan yksityiskohdat ja noutoaika</li>
                <li>4. Maksat noudettaessa - käteinen tai kortti</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Muista näitä!
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Varaus varmistetaan aina puhelimella</li>
                <li>• Ajokortti mukaan kun tulet noutamaan</li>
                <li>• Palauta täyteen tankattu</li>
                <li>• Jos perut, niin ilmoita hyvissä ajoin</li>
              </ul>
            </div>
          </div>
          </>
        )}
      </div>
    </section>
  )
}

export default BookingCalendar