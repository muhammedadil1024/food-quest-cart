import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";

const Checkout = () => {
    // default selectable addresses
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "John Doe",
            house: "Greenwood Tower, 47B ",
            location: "Indiranagar, Bangalore",
            contact: "1234567890",
        },
        {
            id: 2,
            name: "Jane Smith",
            house: "Sunset Apartments, 982",
            location: "BTM Layout, Bangalore",
            contact: "0987654321",
        },
    ]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        location: "",
        house: "",
    });

    // setting selected address
    const handleAddressSelect = (id) => {
        setSelectedAddress(id);
    };

    // form data address handling
    const handleSaveAddress = () => {
        // for required fields
        if (!formData.name || !formData.contact || !formData.location || !formData.house) {
            toast.error("Please fill required fields");
        } else {
            const newAddress = {
                id: addresses.length + 1,
                ...formData,
            };
            setAddresses([...addresses, newAddress]);
            setSelectedAddress(newAddress.id);
            setFormData({ name: "", contact: "", location: "", house: "" });
        }
    };

    const isPlaceOrderEnabled = selectedAddress && paymentMethod;

    return (
        <div className="max-w-5xl mx-auto p-2 sm:p-6 space-y-6">
            <Toaster richColors position="top-center" />
            <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Checkout</h2>
            <h3 className="text-lg sm:text-xl font-semibold py-2">Enter your address or Please select an address:</h3>
            {/* Form and Address Selection */}
            <div className="flex gap-6 flex-col sm:flex-row">
                {/* Address Form */}
                <form className="bg-white p-4 shadow rounded w-full sm:w-1/2 space-y-4 h-fit">
                    <h3 className="text-lg font-semibold">Enter New Address</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Name*</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Contact Number*</label>
                            <input
                                type="tel"
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter your contact number"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block font-medium mb-1">Location*</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter your location"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block font-medium mb-1">House/Building Number*</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter house/building number"
                                value={formData.house}
                                onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={handleSaveAddress}
                    >
                        Save Address
                    </button>
                </form>
                {/* saved Addresses */}
                <div className="w-full sm:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">Select an Address</h3>
                    <div className="flex gap-4 flex-col-reverse">
                        {addresses.map((address) => (
                            <div
                                key={address.id}
                                className={`border rounded p-4 cursor-pointer ${
                                    selectedAddress === address.id ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"
                                }`}
                                onClick={() => handleAddressSelect(address.id)}
                            >
                                <p className="font-medium">{address.name}</p>
                                <p>
                                    {address.house}, {address.location}
                                </p>
                                <p>Contact: {address.contact}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Payment Options */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
                <div className="flex gap-4 flex-col sm:flex-row">
                    <button
                        type="button"
                        className={`flex items-center gap-2 px-4 py-2 rounded border ${
                            paymentMethod === "COD" ? "bg-[#ff5200] text-white" : "border-[#ff6c28] hover:border-2"
                        }`}
                        onClick={() => setPaymentMethod("COD")}
                    >
                        <TbTruckDelivery />
                        Cash on Delivery
                    </button>
                    <button
                        type="button"
                        className={`flex items-center gap-2 px-4 py-2 rounded border ${
                            paymentMethod === "DebitCard" ? "bg-[#ff5200] text-white" : "border-[#ff6c28] hover:border-2"
                        }`}
                        onClick={() => setPaymentMethod("DebitCard")}
                    >
                        <FaCreditCard />
                        Debit Card
                    </button>
                </div>
            </div>
            {/* Place Order */}
            <Link
                to={"/order-summary"}
                className={`block w-full text-center py-3 rounded text-white ${
                    isPlaceOrderEnabled ? "bg-[#1c9a16] hover:bg-[#20ab19] text-white" : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={(e) => {
                    if (!isPlaceOrderEnabled) e.preventDefault();
                }}
            >
                Place Order
            </Link>
        </div>
    );
};

export default Checkout;