"use client"
import { useState } from "react"

type Listing = {
  id: string | number;
  title: string;
  description: string;
  status: string;
  pricePerDay: number;
};

type Props = {
  listing: Listing;
  onClose: () => void;
  onUpdate: () => void;
};

const EditModal = ({ listing, onClose, onUpdate }: Props) => {
  const [formData, setFormData] = useState(listing);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: name === "pricePerDay" ? Number(value) : value,
  }));
};

  const handleSubmit = async () => {
    setLoading(true);
    await fetch("/api/listings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData })
    });
    setLoading(false);
    onUpdate(); 
    onClose();  
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-xl font-bold mb-4">Edit Listing</h2>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 mb-2"
          placeholder="Title"
        />
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 mb-2"
          placeholder="Description"
        />
        <input
          name="pricePerDay"
          type="number"
          value={formData.pricePerDay}
          onChange={handleChange}
          className="w-full border p-2 mb-2"
          placeholder="Price per day"
        />
        <div className="flex justify-end gap-3 mt-3">
          <button onClick={onClose} className="px-4 py-1 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} disabled={loading} className="px-4 py-1 bg-blue-600 text-white rounded">
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;