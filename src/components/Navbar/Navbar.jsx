import { Menu } from "lucide-react"
import { IoIosMenu } from "react-icons/io"
import { IoChevronDown } from "react-icons/io5"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <div>
            <nav className="bg-yellow-500 p-4 text-black flex justify-center items-center">
                <div className="lg:container mx-auto flex gap-36">
                    <div className="flex items-center justify-between  gap-2">
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 whitespace-nowrap capitalize"> <Menu /> shop by department</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Chair</a></li>
                                <li><a>Pant</a></li>
                                <li><a>Shirt</a></li>
                                <li><a>T-Shirt</a></li>
                                <li><a>T-Shirt</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-6">

                        <NavLink className='flex items-center gap-2'><span className="cursor-pointer text-base/10 font-roboto capitalize">Home</span>
                            <IoChevronDown size={19} /></NavLink>
                        <NavLink className='flex items-center gap-2'> <span className="cursor-pointer text-base/10 font-roboto capitalize">Shop</span>
                            <IoChevronDown size={19} /></NavLink>
                        <NavLink className='flex items-center gap-2'> <span className="cursor-pointer text-base/10 font-roboto capitalize">Page</span>
                            <IoChevronDown size={19} /></NavLink>
                        <NavLink className='flex items-center gap-2'><span className="cursor-pointer text-base/10 font-roboto capitalize">Blogs</span>
                            <IoChevronDown size={19} /></NavLink>
                        <NavLink className='flex items-center gap-2'><span className="cursor-pointer text-base/10 font-roboto capitalize">Eng</span>
                            <IoChevronDown size={19} /></NavLink>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar