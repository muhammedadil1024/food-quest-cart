import { useDispatch, useSelector } from "react-redux"
import CartItems from "../components/CartItems";
import { clearCart } from "../redux/cartSlice";
import { getCartTotal } from "../utils/utils";
import { useState } from "react";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty-cart.webp"
import { Toaster } from "sonner";

const Cart = () => {

    const cartItems = useSelector((store)  => store.cart.items); //subscribing the specific part of the store - interview
    const totalItemsCount = useSelector((state) => state.cart.totalItemsCount);

    const itemsArray = Object.values(cartItems);
    const dispatch = useDispatch();

    const grandTotal = getCartTotal(itemsArray)

    const [showCheckOut, setShowCheckOut] = useState(false)
    
    return (
        <div className="overflow-x-auto m-4 sm:mx-12 md:mx-32">
            {/* sonner library toaster for toast notifications */}
            <Toaster richColors position="top-center" />
            <h2 className="text-center text-2xl font-bold py-2">Your Cart Items</h2>
            {/* cart items listing */}
            {itemsArray.length > 0 ? (
                <div>
                    <div className="m-2 p-6 rounded-xl shadow-md">
                        <div>
                            <p className="text-lg font-semibold py-1">Total Items: {totalItemsCount}</p>
                        </div>
                        {/* List Headings */}
                        <div className="hidden md:grid grid-cols-4 gap-4 py-4 text-center font-bold border-b-2 border-black">
                            <p>Items</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                        </div>
                        {/* List Items */}
                        {itemsArray.map((item) => (
                            <CartItems key={item.id} {...item} item={item} />
                        ))}
                        <hr className="my-4 border-2 rounded-sm border-black" />
                        <div className="flex items-center justify-between gap-2">
                            <button
                                className="my-2 sm:px-4 p-2 font-semibold rounded bg-[#ff5200] text-white"
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear Cart
                            </button>
                            <h3 className="text-right w-fit text-lg sm:text-xl font-bold">Grand Total: ₹{grandTotal}</h3>
                        </div>
                    </div>
                    {/* checkout button for showing that component - address and payment */}
                    <div className="text-center">
                        <button
                            className="my-2 px-6 py-3 font-semibold rounded bg-[#1c9a16] hover:bg-[#20ab19] text-white"
                            onClick={() => setShowCheckOut(true)}
                        >
                            CHECKOUT
                        </button>
                    </div>
                    {showCheckOut && <Checkout />}
                </div>
            ) : (
                // showing empty cart message if not cart items
                <div className="flex flex-col items-center justify-center my-16">
                    {/* Image for empty cart */}
                    <img src={EmptyCart} alt="Empty cart" className="w-60 h-60 object-contain mb-4" />
                    <div className="text-lg font-semibold text-gray-600 mt-4">Your cart is empty!</div>
                    <p className="text-lg font-semibold mb-4">Add some items from our Menu!</p>
                    <Link className="px-6 py-2 bg-[#1c9a16] hover:bg-[#20ab19] text-white rounded" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart