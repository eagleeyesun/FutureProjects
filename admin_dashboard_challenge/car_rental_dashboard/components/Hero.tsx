// import { Listing } from '@/app/api/listings/route'
import ListingTable from './ListingTable'


// async function getListings(page = 1): Promise<{
//   listings: Listing[];
//   total: number;
//   page: number;
//   limit: number;
// }> {
//   const res = await fetch(`http://localhost:3000/api/listings?page=${page}&limit=5`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) throw new Error('Failed to fetch listings');
//   return res.json();
// }

const Hero = () => <ListingTable />

export default Hero

