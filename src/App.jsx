import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard";

function App() {
  const [beerData, setBeerData] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeerData(data));
  }, []);

  const filteredData = beerData.filter((i) =>
    i.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-20">
      <input
        type="text"
        className="w-2/4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-400 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
        placeholder="Search"
        onChange={(e) => setSearchBar(e.target.value)}
      />
      {/* card */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8">
        {filteredData.map((item) => (
          <BeerCard key={item.id} beer={item} />
        ))}
      </div>
    </div>
  );
}

export default App;