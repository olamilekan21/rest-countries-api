import { RootObject } from "../typing";
import Card from "./Card";

type Props = {
  data: RootObject[];
};


const Cards = ({ data }: Props) => {
  return (
    <div className="grid place-items-center my-5">
      <div className="w-[90%] flex flex-wrap items-center justify-center">
        {data.map((item: RootObject, index: number) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
