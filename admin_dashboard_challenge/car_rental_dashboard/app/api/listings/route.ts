import { NextResponse } from 'next/server'

export type Listing = {
  id: string
  title: string
  description: string
  pricePerDay: number
  status: 'pending' | 'approved' | 'rejected'
}

let listings: Listing[] = [
  { id: '1', title: 'Toyota Fortuner',    description: '7‑seater SUV, ideal for families.', pricePerDay: 80, status: 'pending' },
  { id: '2', title: 'Hyundai i20',        description: 'Compact hatchback, city‑friendly.', pricePerDay: 35, status: 'approved' },
  { id: '3', title: 'Maruti Swift',       description: 'Reliable and fuel‑efficient.', pricePerDay: 30, status: 'rejected' },
  { id: '4', title: 'Honda City',         description: 'Sedan with spacious interior.', pricePerDay: 45, status: 'pending' },
  { id: '5', title: 'Tata Nexon',         description: 'Compact SUV with safety features.', pricePerDay: 50, status: 'approved' },
  { id: '6', title: 'Mahindra XUV700',    description: 'Premium SUV, powerful engine.', pricePerDay: 90, status: 'pending' },
  { id: '7', title: 'Kia Seltos',         description: 'Stylish SUV with tech features.', pricePerDay: 85, status: 'approved' },
  { id: '8', title: 'Renault Kwid',       description: 'Budget hatchback, easy parking.', pricePerDay: 25, status: 'approved' },
  { id: '9', title: 'Volkswagen Polo',    description: 'Premium hatchback, refined ride.', pricePerDay: 40, status: 'rejected' },
  { id: '10', title: 'Skoda Slavia',      description: 'Comfortable sedan, smooth drive.', pricePerDay: 55, status: 'pending' },
  ...Array.from({ length: 90 }, (_, i) => {
    const models = [
      'Toyota Innova', 'Maruti Baleno', 'Honda Jazz', 'Hyundai Creta',
      'MG Hector', 'Ford EcoSport', 'Chevrolet Beat', 'Nissan Magnite',
      'Jeep Compass', 'Skoda Kushaq'
    ];
    const descs = [
      'Great for weekend trips.',
      'Spacious interior with AC.',
      'Compact and easy to drive.',
      'Good mileage on highways.',
      'Perfect for city commuting.',
      'Stylish and comfortable.',
      'Affordable and reliable.',
      'Best-selling compact SUV.',
      'Suitable for road trips.',
      'Premium feel, comfortable ride.'
    ];
    const statuses: Listing['status'][] = ['pending', 'approved', 'rejected'];

    const idx = i + 10; 
    return {
      id: String(idx + 1),
      title: models[i % models.length],
      description: descs[i % descs.length],
      pricePerDay: 30 + ((i * 7) % 61),
      status: statuses[(i * 3 + 1) % statuses.length],
    };
  })
]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '10', 10)

  const filtered = status
    ? listings.filter(listing => listing.status === status)
    : listings

  const start = (page - 1) * limit
  const end = start + limit
  const paginated = filtered.slice(start, end)

  return NextResponse.json({
    listings: paginated,
    total: filtered.length,
    page,
    limit
  })
}

export async function PATCH(req: Request) {
  const { id, status } = await req.json()

  listings = listings.map(listing =>
    listing.id === id ? { ...listing, status } : listing
  )

  return NextResponse.json({ success: true })
}

export async function POST(req: Request) {
  const { title, description, pricePerDay } = await req.json()
  const newListing: Listing = {
    id: Date.now().toString(),
    title,
    description,
    pricePerDay,
    status: 'pending'
  }

  listings.push(newListing)
  return NextResponse.json({ success: true, listing: newListing })
}