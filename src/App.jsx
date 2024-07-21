import React from "react";
import ImageBox from "./components/ImageBox.jsx";
import ImageSearch from "./components/ImageSearch.jsx";
import Loader from "./components/Loader/Loader.jsx";

export default function App() {
  const [boxImage, setBoxImage] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [term, setTerm] = React.useState("");

  function fetchImage() {
    fetch(
      `https://pixabay.com/api/?key=45007116-e35d9e9726aea6c6b75528b06&q=${term}&image_type=photo&per_page=21&editors_choice=true`
    )
      .then((res) => res.json())
      .then((val) => {
        setBoxImage(val.hits);
        setLoading(false);
      });
  }

  React.useEffect(() => {
    fetchImage();
  }, [term]);

  return (
    <>
      <ImageSearch searchText={setTerm} />
        {loading ?
        <div className="p-10 bg-gray-100 flex flex-wrap justify-between gap-[60px]">
          {boxImage.map(() => <Loader />)}
        </div>
        : 
        <>
        {term &&
        <h3 className="pt-10 pl-10 text-xl">Searched for : <span className="font-bold text-lg">{term}</span></h3>
        }
        <div className="p-10 bg-gray-100 flex flex-wrap justify-between gap-[60px]">
          {boxImage.map((image) => {
            return <ImageBox key={image.id} image={image} />;
          })}
        </div>
        </>
        }
    </>
  );
}
