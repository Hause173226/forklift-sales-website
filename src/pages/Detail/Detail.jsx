import Slider from "../../components/Slider"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar/Navbar"
import { NavLink } from "react-router-dom"

const Detail = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Navbar */}
            <Navbar />
            {/* navbar  bottom */}
            <div className="navbar_bottom flex px-4 h-[60px] bg-[#F1F1F1]">
                <div className="lg:container flex gap-1 items-center ">
                    <NavLink ><span className="capitalize font-roboto text-[#029FAE] transition-colors duration-300 hover:text-red-300 ">home</span><span className="mx-2 text-gray-400">/</span></NavLink>
                    <NavLink ><span className="capitalize font-roboto text-[#029FAE] transition-colors duration-300 hover:text-red-300">shop</span><span className="mx-2 text-gray-400">/</span></NavLink>
                    <p className="capitalize font-roboto text-[#6666]">apple macbook retina display 12</p>
                </div>
            </div>

        </div>
    )
}

export default Detail