import { FaChartBar, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header flex justify-center h-[93px] border-b border-black/20 bg-yellow-500  px-4">
      <div className="lg:container flex items-center justify-between bg-yellow-500 ">
        <div className="pl-5">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-gray-900 font-roboto">xenang</span>taiday
          </h1>
        </div>
        <div className="flex  w-full max-w-[951px] items-center justify-center">
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="w-[80%] rounded-md border border-gray-300 p-2"
          />
          <button className="rounded bg-black px-4 py-2 text-white">
            Search
          </button>
        </div>

        <div className="ml-4 flex items-center gap-4 text-black">
          <FaChartBar size={24} />
          <FaHeart size={24} />
          <FaShoppingCart size={24} />
          <FaUser size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
