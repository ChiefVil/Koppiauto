import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

interface LeafletMap {
  setView: (coords: [number, number], zoom: number) => LeafletMap;
  remove: () => void;
}

interface LeafletStatic {
  map: (element: HTMLElement) => LeafletMap;
  tileLayer: (url: string, options: Record<string, unknown>) => { addTo: (map: LeafletMap) => void };
  marker: (coords: [number, number], options?: Record<string, unknown>) => {
    addTo: (map: LeafletMap) => { bindPopup: (content: string) => { openPopup: () => void } };
  };
  divIcon: (options: Record<string, unknown>) => unknown;
}

declare global {
  interface Window {
    L: LeafletStatic;
  }
}

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    // Load Leaflet dynamically
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined' && !window.L) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.async = true
        document.head.appendChild(script)

        await new Promise((resolve) => {
          script.onload = resolve
        })
      }

      if (mapRef.current && window.L && !mapInstanceRef.current) {
        // Aaltotie 8, 33180 Tampere coordinates (parkkialue)
        const aaltotieCoords: [number, number] = [61.509543, 23.778833]

        // Initialize map
        mapInstanceRef.current = window.L.map(mapRef.current).setView(aaltotieCoords, 13)

        // Add OpenStreetMap tiles
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstanceRef.current)

        // Custom icon for van pickup location
        const vanIcon = window.L.divIcon({
          html: `<div class="bg-primary-600 text-white p-2 rounded-full shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                     <path d="M15 18H9"/>
                     <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/>
                     <circle cx="7" cy="18" r="2"/>
                     <path d="M9 18h6"/>
                     <circle cx="17" cy="18" r="2"/>
                   </svg>
                 </div>`,
          className: 'custom-van-icon',
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        })

        // Add marker for pickup location
        window.L.marker(aaltotieCoords, { icon: vanIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-semibold text-gray-900 mb-1">Noudon sijainti</h3>
              <p class="text-gray-600 text-sm">Aaltotie 8, 33180 Tampere</p>
              <p class="text-gray-600 text-sm">Koppiauto - parkkialueella</p>
            </div>
          `)
          .openPopup()
      }
    }

    loadLeaflet()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section id="location" className="py-16 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <MapPin className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Noudon sijainti
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Koppiauto noudetaan osoitteesta Aaltotie 8, 33180 Tampere (parkkialue).
            Tarkka noutoaika sovitaan varauksen yhteydessä.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                ref={mapRef}
                className="w-full h-96"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Nouto-ohjeet
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    1
                  </span>
                  Soittele etukäteen (mielellään päivää ennen)
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    2
                  </span>
                  Sovitaan milloin tulet hakemaan autoa
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    3
                  </span>
                  Ota ajokortti ja rahat mukaan
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    4
                  </span>
                  Palauta täysi tankki takaisin samaan paikkaan
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aaltotie 8, 33180 Tampere
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Parkkialueella - nouto ja palautus joustavasti sovittuna aikana
              </p>
              <a
                href="#contact"
                className="btn-accent w-full text-center block"
              >
                Ota yhteyttä
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap