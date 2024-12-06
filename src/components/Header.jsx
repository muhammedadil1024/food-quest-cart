import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/logo.png"

const Header = () => {

    const cartCount = useSelector((store) => store.cart.totalItemsCount);
    const location = useLocation();

    return (
        <header className="flex items-center justify-between px-4 sm:px-12 md:px-24 py-2 md:py-4 shadow-md sticky top-0 z-10 bg-white">
            <Link to={"/"} className="flex items-center gap-1">
                <img className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full" src={Logo} alt="Logo" />
                <h1 className="text-xl md:text-4xl font-bold">Food Quest</h1>
            </Link>
            <nav className="nav-items">
                <ul className="flex list-none p-2">
                    <li className="hidden md:list-item px-2 md:px-4 text-lg hover:text-[#ff5200]">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="hidden md:list-item px-4 text-lg hover:text-[#ff5200]">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="hidden md:list-item px-4 text-lg hover:text-[#ff5200]">
                        <Link to={"/contact"}>Contacts</Link>
                    </li>
                    <li className="px-2 md:px-4 text-lg hover:text-[#ff5200]">
                        {/* when we in order-summary page the cart nav link will disappear */}
                        {location.pathname !== "/order-summary" && (
                            <Link className="relative flex items-center gap-2" to={"/cart"}>
                                <span className="relative hover:text-[#ff5200]">
                                    <svg
                                        className="stroke-width fill-[#fff] stroke-[#282c3f] h-8 w-7 hover:stroke-[#ff5200]"
                                        viewBox="-1 0 37 32"
                                        height="20"
                                        width="20"
                                        fill="#686b78"
                                    >
                                        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                                    </svg>
                                    <span className="absolute text-sm top-[50%] left-[50%] transform-t">{cartCount}</span>
                                </span>
                                Cart
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header