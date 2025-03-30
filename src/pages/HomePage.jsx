import { IoIosMenu } from 'react-icons/io';
import { IoChevronDown } from 'react-icons/io5';
import Header from '../components/Header';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Header />
      {/* Navigation */}
      <nav className="bg-yellow-500 p-4 text-black">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center justify-between gap-2">
            <IoIosMenu size={30} />
            <span className="text-xl font-bold">Shop by Department</span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center gap-2">
              <span className="cursor-pointer text-xl">Home</span>
              <IoChevronDown size={24} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="cursor-pointer text-xl">Shop</span>
              <IoChevronDown size={24} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="cursor-pointer text-xl">Page</span>
              <IoChevronDown size={24} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="cursor-pointer text-xl">Blogs</span>
              <IoChevronDown size={24} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <span className="cursor-pointer text-xl">Eng</span>
              <IoChevronDown size={24} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-6 grid grid-cols-3 gap-4">
        {/* Featured Banner */}
        {/* <div className="col-span-2 bg-gray-100 p-8"> */}
        {/* <h2 className="text-lg text-blue-600">Limited Edition</h2>
          <h1 className="text-2xl font-bold">
            SCANDINAVIAN COLLECTION FOR YOUR BEDROOM JUST{' '}
            <span className="text-green-600">$599</span>
          </h1>
          <button className="mt-4 rounded bg-yellow-500 px-4 py-2 text-black">
            Shop Now
          </button> */}
        <Slider />
        {/* </div> */}
        {/* Promotions */}
        <div className="h-full space-y-4">
          <div className="flex h-[50%] items-center justify-between bg-gray-200 p-4">
            <div>
              <h3 className="text-lg font-bold">Unio Leather Bags</h3>
              <span className="text-sm text-gray-600">
                100% leather handmade
              </span>
            </div>
            <span className="rounded bg-red-500 px-2 py-1 text-white">
              20% OFF
            </span>
          </div>
          <div className="flex h-[50%] items-center justify-between bg-gray-200 p-4">
            <div>
              <h3 className="text-lg font-bold">iPhone 6+ 32Gb</h3>
              <span className="text-sm text-gray-600">
                Best smartphone in the world
              </span>
            </div>
            <span className="rounded bg-red-500 px-2 py-1 text-white">
              40% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
