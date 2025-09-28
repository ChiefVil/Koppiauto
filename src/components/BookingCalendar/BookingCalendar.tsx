import { useState } from 'react'
import { Calendar, Clock, Euro, Phone } from 'lucide-react'

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [rentalType, setRentalType] = useState<'daily' | 'weekend'>('daily')

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
            Valitse haluamasi päivä ja vuokraustyyppi. Lopullinen varaus tehdään puhelimitse.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
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
                <li>1. Valitse haluamasi päivä kalenterista</li>
                <li>2. Soita numeroon 040 538 2758</li>
                <li>3. Varmista saatavuus ja sovita noudon yksityiskohdat</li>
                <li>4. Maksu suoritetaan noudettaessa</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Huomioi
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Varaus varmistetaan puhelimitse</li>
                <li>• Ajokortti mukaan noudettaessa</li>
                <li>• Palautus tankattuna</li>
                <li>• Peruutus vähintään 24h ennen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingCalendar