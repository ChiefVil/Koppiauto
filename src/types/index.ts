export interface VanSpecifications {
  height: string;
  width: string;
  length: string;
  transmission: string;
  towHook: string;
  license: string;
}

export interface PricingInfo {
  daily: {
    price: string;
    hours: string;
    includesKm: string;
  };
  weekend: {
    price: string;
    includesKm: string;
  };
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  location: string;
}

export interface BookingEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  isBooked: boolean;
}