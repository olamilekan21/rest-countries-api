import { useNavigate } from "react-router-dom";
import { RootObject } from "../typing";

const Card = (props: RootObject) => {
  const { flags, name, population, region, capital } = props;

  let num = new Intl.NumberFormat().format(population);

  const navigate = useNavigate();

  return (
    <div
      className="w-52  mx-2 md:mx-6 my-8 rounded-md shadow-sm overflow-hidden flex items-center justify-center flex-col bg-white dark:bg-dark-el mb-auto cursor-pointer"
      onClick={() => navigate(`/${name.common.toLowerCase()}`)}
    >
      <div className="w-full h-32 rounded-md">
        <img src={flags.png} alt="" className="w-full h-full" />
      </div>

      <div className="w-[90%] mb-8">
        <p className="my-2 font-bold text-black dark:text-white">
          {name.common}
        </p>

        <p className="text-sm">
          <strong className="font-medium mr-1">Population:</strong>
          {num}
        </p>
        <p className="text-sm">
          <strong className="font-medium mr-1">Region:</strong>
          {region}
        </p>
        <p className="text-sm">
          <strong className="font-medium mr-1">Capital:</strong>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
