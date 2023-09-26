const BeerCard = (beer) => {
    const { name, tagline, description, image_url } = beer.beer;
    return (
        <div className="w-full max-w-xs box-border overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-contain w-72 h-56" src={image_url} />
            <div className="p-8">
                <h2 className="block text-xl font-bold text-gray-800 mb-1">
                    {name.length > 20 ? `${name.substring(0, 20)}...` : name}
                </h2>
                <p className="text-lg text-gray-950 mb-2">{tagline}</p>
                <p className="text-sm text-gray-700" title={description}>
                    <span className="font-semibold">Description:</span>{" "}
                    {description.length > 120
                        ? `${description.substring(0, 100)}...`
                        : description}
                </p>
                <button className="px-3 mt-5 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-80000 focus:ring-opacity-80">
                    Show Details
                </button>
            </div>
        </div>
    );
};

export default BeerCard;
