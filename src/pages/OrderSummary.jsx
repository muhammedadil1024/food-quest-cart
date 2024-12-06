import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { getCartTotal } from "../utils/utils";
import { Link } from "react-router-dom";
import orderSummary from "../assets/order-summary.jpg";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import Error from "./Error";

const OrderSummary = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const grandTotal = getCartTotal(cartItems);
    const itemsArray = Object.values(cartItems);

    useEffect(() => {
        return () => {
            dispatch(clearCart());
        };
    }, [dispatch]);

    return itemsArray.length <= 0 ? (
        // error page if cart items length is zero
        <Error />
    ) : (
        <div className="flex flex-col items-center justify-center text-center p-4">
            <div className="flex items-center gap-2 my-4">
                <TbRosetteDiscountCheckFilled color="green" className="w-5 h-5 sm:w-8 sm:h-8" />
                <h1 className="text-xl sm:text-3xl font-bold text-[#1c9a16]">Your Order was Confirmed!</h1>
            </div>
            <img src={orderSummary} alt="Order Confirmed" className="mb-6 w-80 h-72" />
            <p className="text-lg text-gray-700 mb-4">
                Thanks for choosing us! <br /> Your order is being prepared and will be delivered shortly
            </p>
            {/* displaying order details and amount payable */}
            <div className="border-2 rounded-md m-1 p-3 sm:p-6">
                <div className="">
                    {itemsArray.map((item, index) => (
                        <div key={index} className="flex justify-between sm:p-2 py-2 gap-4 sm:gap-16">
                            <span className="font-semibold">{item.name}</span>
                            <span className="ml-2">
                                {item.quantity} serving{item.quantity > 1 ? "s" : ""}
                            </span>
                            <span className="ml-2 text-right">₹{(item.quantity * (item.defaultPrice ?? item.price)) / 100}</span>
                        </div>
                    ))}
                </div>
                <hr className="border-2 border-black" />
                <div className="flex justify-between font-bold py-1">
                    <span className="text-lg">Pay</span>
                    <span className="text-lg">₹{grandTotal}</span>
                </div>
            </div>
            <Link
                to="/"
                className="mt-4 px-6 py-2 bg-[#1c9a16] hover:bg-[#20ab19] text-white rounded-lg shadow transition-all"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default OrderSummary