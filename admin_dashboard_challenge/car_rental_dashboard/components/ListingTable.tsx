"use client"

import { useEffect, useState } from "react"

type Listing = {
    id: string | number;
    title: string;
    description: string;
    status: string;
    pricePerDay: number;
};

function ListingTable() {
    const [listings, setListings] = useState<Listing[]>([])
        const [loading, setLoading] = useState(false);

    const [pages, setPages] = useState(1)
    const [total, setTotal] = useState(0)
    const [statusFilter, setStatusFilter] = useState("");

    const limit = 9


    useEffect(() => {
        const fetchListings = async () => {
            const res = await fetch(`/api/listings?page=${pages}&limit=${limit}&status=${statusFilter}`);
            const data = await res.json()
            setListings(data.listings)
            setTotal(data.total)
        }
        fetchListings()
    }, [pages, statusFilter])

    const updateStatus = async (id: string | number, status: string) => {
        setLoading(true)
        await fetch('/api/listings', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, status }),
        });

        const res = await fetch(`/api/listings?page=${pages}&limit=${limit}&status=${statusFilter}`);
        const data = await res.json();
        setListings(data.listings);
        setTotal(data.total);
        setLoading(false);
    };

    const totalPages = Math.ceil(total / limit)

    return (
        <section className="w-full">
            <h1 className="text-2xl font-bold text-center bg-white py-5">Car Rental Listings</h1>

            <div className="bg-white">
                <select
                    onChange={(e) => {
                        setPages(1);
                        setStatusFilter(e.target.value);
                    }}
                    value={statusFilter}
                    className="py-2 border rounded outline-none ml-5 mb-2 bg-white"
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
                <table className="min-w-full bg-white pb-5 shadow-xl">
                    <thead className="bg-white ">
                        <tr>
                            <th className="py-3 px-4 text-left">Car</th>
                            <th className="py-3 px-4 text-left">Description</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Price/Day</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((listing) => (
                            <tr key={listing.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4">{listing.title}</td>
                                <td className="py-3 px-4">{listing.description}</td>
                                <td className="py-3 px-4">{listing.status}</td>
                                <td className="py-3 px-4">{listing.pricePerDay}</td>
                                <td className="py-3 px-4 flex gap-2">
                                    <button disabled={loading} onClick={() => updateStatus(listing.id, 'approved')}
                                        className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                                    <button disabled={loading} onClick={() => updateStatus(listing.id, 'rejected')}
                                        className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex gap-3 justify-center mt-5">
                <button
                    onClick={() => setPages((p) => Math.max(1, p - 1))}
                    disabled={pages === 1}
                    className="px-3 py-1 border rounded bg-gray-100"
                >
                    Prev
                </button>
                <span className="px-3 py-1">{pages} / {totalPages}</span>
                <button
                    onClick={() => setPages((p) => Math.min(totalPages, p + 1))}
                    disabled={pages === totalPages}
                    className="px-3 py-1 border rounded bg-gray-100"
                >
                    Next
                </button>
            </div>
        </section>
    )
}

export default ListingTable