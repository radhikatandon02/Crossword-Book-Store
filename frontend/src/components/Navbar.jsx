import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Dashboard", href:"/"},
    {name: "Orders", href:"/orders"},
    {name: "Cart", href:"/cart"},
    {name: "Checkout", href:"/checkout"}
]
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

  const {currentUser, logout} = useAuth();

  const handleLogout = () => {
    logout()
  }
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            {/* left side */}
            <div className="flex items-center md:gap-16 gap-4">
                <Link to="/">
                    <IoBookSharp className="size-8"/>
                </Link>
                {/* search field */}
                <div className="relative sm:w-72 w-40 space-x-2">
                    <IoIosSearch className="absolute inline-block left-3 inset-y-2"/>
                    <input type="text"placeholder="Search here" 
                    className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                </div>
            </div>

            {/* right side */}
            <div className="relative flex items-center md:space-x-3 space-x-2">
                <div>
                    {
                        currentUser ? <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                            </button>
                            {/* show dropdown */}
                            {
                                isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-40">
                                        <ul className="py-2">
                                            {
                                                navigation.map((item) => (
                                                    <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                            <li>
                                                <button 
                                                onClick={handleLogout}
                                                className="block px-4 w-full text-left py-2 text-sm hover:bg-gray-100 rounded-md">Logout</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </> : <Link to="/login"><FaUserCircle className="size-6" /></Link>
                    }
                </div>

                <button className="hidden sm:block">
                    <IoMdHeartEmpty className="size-6" />
                </button>

                <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md">
                    <AiOutlineShoppingCart className="size-6" />
                    {
                        cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
                    }
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar