import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RootObject } from "./typing";

let searchUrl = "https://restcountries.com/v3.1/name";

const Details = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<RootObject>();

  let value = params?.id;

  const fetchName = async () => {
    setLoading(true);
    const res = await fetch(
      `${searchUrl}/${
        value?.toLowerCase() ?? ""
      }?fields=name,flags,population,region,capital,tld,currencies,languages,subregion,borders`
    );
    const json = await res.json();
    setData(json[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchName();
  }, []);

  let nativeName = Object.values(data?.name.nativeName! ?? {})[0]?.common;
  let currencies = Object.values(data?.currencies! ?? {})[0]?.name;
  let population = new Intl.NumberFormat().format(data?.population ?? 0);
  let languages = Object.values(data?.languages! ?? {});

  let leftItems = [
    {
      name: "Native Name:",
      value: nativeName,
    },
    {
      name: "Population:",
      value: population,
    },
    {
      name: "Region:",
      value: data?.region,
    },
    {
      name: "Sub Region:",
      value: data?.subregion,
    },
    {
      name: "Capital:",
      value: data?.capital.join(","),
    },
  ];

  let rightItems = [
    {
      name: "Top Level Domain:",
      value: data?.tld.join(","),
    },
    {
      name: "Currencies:",
      value: currencies,
    },
    {
      name: "Languages:",
      value: languages.join(","),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="grid place-items-center my-5">
        <div className="w-[90%] ">
          <Button />
          {loading ? (
            <div className="grid place-items-center h-40">
              <ReactLoading type="spin" />
            </div>
          ) : (
            <div className="flex items-center flex-col md:flex-row justify-start md:justify-center w-full mt-20">
              <div className="w-[90%] md:w-fit">
                <img src={data?.flags.png} alt="" className="w-full h-full" />
              </div>

              <div className="md:ml-16 md:flex-[0.7] w-[90%]">
                <h1 className="font-bold text-lg">{data?.name.common}</h1>

                <div className="flex flex-col md:flex-row my-5 md:flex-1">
                  {[leftItems, rightItems].map((items, index: number) => (
                    <div key={index} className={`flex-1`}>
                      {items.map(({ name, value }, index: number) => (
                        <p key={index} className="text-sm p-1 break-all">
                          <strong className="font-bold mr-1">{name}</strong>
                          {value}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {data?.borders?.length! > 0 && (
                  <div className="flex flex-col md:flex-row">
                    <p className="">Border Countries: </p>
                    <div className="flex items-center">
                      {data?.borders.map((border: string, index: number) => (
                        <div
                          key={index}
                          className="flex shadow-md items-center px-4 py-1 bg-white dark:bg-dark-el rounded-sm ml-2"
                        >
                          <p className="text-sm text-black dark:text-white">
                            {border}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex shadow-md items-center px-4 py-1 bg-white dark:bg-dark-el rounded-sm"
      onClick={() => navigate(-1)}
    >
      <IoArrowBack className="text-[20px] mx-1 text-black dark:text-white" />
      Back
    </button>
  );
};
export default Details;
