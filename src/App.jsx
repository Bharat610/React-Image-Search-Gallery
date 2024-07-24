import React from "react";
import ImageBox from "./components/ImageBox.jsx";
import ImageSearch from "./components/ImageSearch.jsx";
import Loader from "./components/Loader/Loader.jsx";

export default function App() {
  const [boxImage, setBoxImage] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [term, setTerm] = React.useState("");

  const prevRef = React.useRef(term);


  function fetchImage() {
    fetch(
      `https://pixabay.com/api/?key=45007116-e35d9e9726aea6c6b75528b06&q=${term}&page=${pageNo}&image_type=photo&per_page=21&editors_choice=true`
    )
      .then((res) => res.json())
      .then((val) => {
        if(prevRef.current == term){
          setBoxImage(prev => {
            return [...prev, ...val.hits]
          });
        }
        else{ 
            setBoxImage(val.hits);
            prevRef.current = term;
        }

        setLoading(false);
      });
  }

  React.useEffect(() => {
    fetchImage();
  }, [term, pageNo]);


  function handleClick() {
    setPageNo(prev => prev + 1);
  }

  return (
    <>
      <ImageSearch searchText={setTerm} updatePage={setPageNo} />
        {loading ?
        <div className="p-10 bg-gray-100 flex flex-wrap justify-between gap-[60px]">
          {boxImage.map(() => <Loader />)}
        </div>
        : 
        <>
        {term &&
        <h3 className="pt-10 bg-gray-100 pl-10 text-xl">Searched for : <span className="font-bold text-lg">{term}</span></h3>
        }
        <div className="p-10 bg-gray-100 flex flex-wrap justify-between gap-[60px]">
          {boxImage.map((image) => {
            return <ImageBox key={image.id} image={image} />;
          })}
        </div>
        <div className="p-10 bg-gray-100 flex w-full">
        <button onClick={handleClick} className="cursor-pointer px-7 mx-auto py-2 text-white text-xl bg-teal-500 hover:bg-teal-700">Load More</button>
        </div>
        </>
        }
    </>
  );
}
