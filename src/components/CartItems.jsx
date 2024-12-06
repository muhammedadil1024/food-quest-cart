import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { IMG_CDN_URL } from "../Config";
import { toast } from "sonner"; 

const CartItems = ({ id, name, price, defaultPrice, quantity, imageId, item }) => {    

    const dispatch = useDispatch();

    return (
        <div className="flex flex-col sm:grid grid-cols-4 gap-2 sm:gap-4 sm:overflow-hidden items-center py-4 border-b">
            {/* Item Column */}
            <div className="max-w-80 flex-col sm:flex-row flex items-center justify-center gap-2">
                <img
                    className="sm:w-20 sm:h-20 object-cover aspect-auto shadow rounded-xl"
                    src={IMG_CDN_URL + imageId}
                    alt="Item img"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
            <h3>
                <span className="font-semibold sm:hidden">Price: </span>₹{defaultPrice ? defaultPrice / 100 : price / 100}
            </h3>
            {/* quantity buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <p className="font-semibold sm:hidden">Quantity:</p>
                <div className="flex items-center gap-4">
                    <button
                        className="px-3 font-bold py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => {
                            dispatch(removeItem(id));
                            toast.info("Cart updated successfully");
                        }}
                    >
                        -
                    </button>
                    <h3 className="font-semibold">{quantity}</h3>
                    <button
                        className="px-3 font-bold py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => {
                            dispatch(addItem(item));
                            toast.info("Cart updated successfully");
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
            {/* Total */}
            <h3>
                <span className="font-semibold sm:hidden">Total: </span>₹{(quantity * (defaultPrice ?? price)) / 100}
            </h3>
        </div>
    );
};

export default CartItems;