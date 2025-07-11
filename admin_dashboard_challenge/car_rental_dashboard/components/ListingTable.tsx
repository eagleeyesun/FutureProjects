"use client"

import { useFeedback } from "@/context/FeedbackProvider";
import { useEffect, useState } from "react"
import EditModal from "./EditModal";

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
    const [editingListing, setEditingListing] = useState<Listing | null>(null);
    const [pages, setPages] = useState(1)
    const [total, setTotal] = useState(0)
    const [statusFilter, setStatusFilter] = useState("");

    const limit = 10
    const { showMessage } = useFeedback()

    const fetchListings = async () => {
        const res = await fetch(`/api/listings?page=${pages}&limit=${limit}&status=${statusFilter}`);
        const data = await res.json();
        setListings(data.listings);
        setTotal(data.total);
    };

    useEffect(() => {
        fetchListings();
    }, [pages, statusFilter]);

    const updateStatus = async (id: string | number, status: string) => {
        try {
            setLoading(true);
            const res = await fetch("/api/listings", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, status }),
            });

            if (!res.ok) throw new Error("Failed to update");

            await fetchListings();

            showMessage(`Listing ${status} successfully`, "success");
        } catch (err) {
            console.error(err);
            showMessage("Update failed. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    const totalPages = Math.ceil(total / limit)

    return (
        <section className="w-full">
            <h1 className="text-2xl font-bold text-center bg-white py-2">Car Rental Listings</h1>

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
                <table className="min-w-full bg-white shadow-xl">
                    <thead className="bg-white border-1 border-gray-200">
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
                                    <button onClick={() => setEditingListing(listing)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
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

            {editingListing && (
                <EditModal
                    listing={editingListing}
                    onClose={() => setEditingListing(null)}
                    onUpdate={() => {
                        setEditingListing(null); 
                        fetchListings(); 
                    }}
                />
            )}
        </section>
    )
}

export default ListingTable;