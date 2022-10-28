import { FormEvent, useState,useRef } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import useOnClickOutside from "../hooks/useOnClickOutside";
import SearchCard from "./SearchCard";

type Props = {
  fetchRegion: (value: string) => void;
  fetchName: (value: string) => void;
};
const FilterCard = (props: Props) => {
  const { fetchRegion,fetchName } = props;
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);


  let list = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchName(input)
  }


  useOnClickOutside(ref, () => setOpen(false))
  return (
    <div className="grid place-items-center my-5">
      <form onSubmit={handleSubmit} className="w-[90%] flex flex-col md:flex-row justify-between">
        <SearchCard value={input} onChange={(e) => setInput(e.target.value)} />

        <div ref={ref} className="relative cursor-pointer my-2">
          <div
            className="relative bg-white dark:bg-dark-el shadow-sm rounded-md w-[180px] h-[35px] flex items-center justify-between"
            onClick={() => setOpen(!open)}
          >
            <p className="text-black dark:text-white ml-4 text-base">
              Filter by Region
            </p>
            {open ? (
              <IoChevronUp className="mx-2" />
            ) : (
              <IoChevronDown className="mx-2" />
            )}
          </div>

          {open ? (
            <div className="absolute top-10 bg-white dark:bg-dark-el shadow-sm rounded-md w-[180px] mt-1 py-2 z-10">
              {list.map((text: string, index: number) => (
                <p
                  key={index}
                  className="ml-4 text-black dark:text-white text-base"
                  onClick={() => fetchRegion(text.toLowerCase())}
                >
                  {text}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default FilterCard;
