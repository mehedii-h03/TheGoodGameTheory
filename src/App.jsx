// App.js
import { useEffect, useState } from "react";
import BeerCard from "./components/BeerCard";
import { Button, Input, Spinner } from "@material-tailwind/react";

function App() {
  // States
  const [beerData, setBeerData] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        setBeerData(data);
        setIsLoadingInitial(false);
      });
  }, []);

  const searchHandler = () => {
    setIsLoadingSearch(true);

    const updatedData = beerData.filter((item) =>
      item.name.toLowerCase().includes(searchBar.toLowerCase())
    );

    if (updatedData.length === 0) {
      setNoDataFound(true);
    } else {
      setFilteredData(updatedData);
      setNoDataFound(false);
    }

    setIsLoadingSearch(false);
  };

  return (
    <div className="flex flex-col items-center lg:px-32 mt-14">
      <div className="relative flex w-2/4 gap-2 mb-5">
        <Input
          type="search"
          label="Search"
          className="pr-20"
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <Button
          size="sm"
          className="!absolute right-1 top-1 rounded"
          onClick={searchHandler}
        >
          Search
        </Button>
      </div>
      {noDataFound ? (
        <p className="text-center text-2xl mt-20">No data found</p>
      ) : isLoadingInitial ? (
        <Spinner className="h-12 w-12 mt-20" />
      ) : (
        <BeerCardList data={filteredData.length === 0 ? beerData : filteredData} isLoading={isLoadingSearch} />
      )}
    </div>
  );
}

function BeerCardList({ data, isLoading }) {
  return (
    <div className={`mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center ${isLoading ? 'opacity-50' : ''}`}>
      {data.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default App;
