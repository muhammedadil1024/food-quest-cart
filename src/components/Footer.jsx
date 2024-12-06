import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex items-center justify-between px-4 sm:px-12 md:px-24 gap-2 py-4 border-t-4">
            <div className="text-lg sm:text-xl font-bold">
                <Link to="/">Food Quest</Link>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
                <FaRegCopyright />
                <a href="https://github.com/muhammedadil1024">{new Date().getFullYear()} Muhammed Adil</a>
            </div>
            <div className="">
                <Link to="/">Home</Link>
            </div>
        </footer>
    );
}

export default Footer