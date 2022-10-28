import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Cards from "./components/Cards";
import FilterCard from "./components/FilterCard";
import Navbar from "./components/Navbar";
import { RootObject } from "./typing";

let url = "https://restcountries.com/v3.1/all";
let regionUrl = "https://restcountries.com/v3.1/region";
let searchUrl = "https://restcountries.com/v3.1/name";

function App() {
  const [data, setData] = useState<RootObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      `${url}?fields=name,flags,population,region,capital`
    );
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchRegion = async (value: string) => {
    setLoading(true);
    const res = await fetch(
      `${regionUrl}/${value.toLowerCase()}?fields=name,flags,population,region,capital`
    );
    const json = await res.json();
    setData(json);
    setLoading(false);
  };
  const fetchName = async (value: string) => {
    if (value.length > 0) {
      setLoading(true);
      const res = await fetch(
        `${searchUrl}/${value.toLowerCase()}?fields=name,flags,population,region,capital`
      );
      const json = await res.json();
      setData(json);
      setLoading(false);
    } else {
      fetchData();
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <FilterCard fetchRegion={fetchRegion} fetchName={fetchName} />
        {loading ? (
          <div className="grid place-items-center h-40">
            <ReactLoading type="spin" />
          </div>
        ) : (
          <Cards data={data} />
        )}
      </main>
    </div>
  );
}

export default App;
