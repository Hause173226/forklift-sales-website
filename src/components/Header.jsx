import { FaChartBar, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="h-[100px] border-b-[0.5px] border-black bg-yellow-500 p-4">
      <div className="flex justify-between bg-yellow-500 p-4">
        <div className="">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-gray-900">xenang</span>taiday
          </h1>
        </div>
        <div className="flex w-full items-center justify-center">
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
