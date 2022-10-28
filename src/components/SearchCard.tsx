import { InputHTMLAttributes } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props<T = any> extends InputHTMLAttributes<T> {

};

const SearchCard = (props: Props) => {
  const { onChange, value, ...others } = props;
  return (
    <div className="bg-white dark:bg-dark-el shadow-sm flex items-center rounded-md w-full md:w-[30%] h-[35px] my-2">
      <div className="">
        <IoSearchOutline size={20} className="m-2 mx-3" />
      </div>
      <input
        type="text"
        className="bg-transparent outline-0 border-0 w-full mr-3"
        placeholder="Search for a country"
        value={value}
        onChange={onChange}
        {...others}
      />
    </div>
  );
};

export default SearchCard;
