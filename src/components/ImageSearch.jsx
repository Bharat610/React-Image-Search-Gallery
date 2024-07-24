import React from "react";

export default function ImageSearch(props) {
  const [text, setText] = React.useState("");
  const [bgImage, setBgImage] = React.useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.searchText(text);
    props.updatePage(1);
  }

  React.useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=45007116-e35d9e9726aea6c6b75528b06&q=nature+mountains&image_type=photo&orientation=horizontal&per_page=10"
    )
      .then((res) => res.json())
      .then((val) => {
        setBgImage(val.hits[Math.floor(Math.random()*10)].largeImageURL);
      });
  }, []);

  const styles = {
    backgroundImage: `url(${bgImage})`,
    backgroundColor: "rgba(0,0,0,0.6)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "multiply",
  };
    
  return (
    <>
      <header className="w-full bg-transparent p-3">
        <img src="./src/images/pix-logo.jpg" className="w-14 h-14" alt="logo" />
      </header>
      <div
        style={styles}
        className="h-[500px] flex flex-col justify-center items-center -mt-24"
      >
        <div className="max-w-6xl">
            <h1 className="text-4xl font-bold text-white mb-2.5">
            Browse the Best Editor's Choice Royalty-Free Images
            </h1>
            <p className="text-white font-normal text-base mb-5">
            Download Editor's Pick High-Quality Stock Photos from Pixabay
            </p>
          <form onSubmit={(e) => handleSubmit(e)} className="w-full">
            <div className="flex items-stretch bg-white rounded-full py-2 px-2">
              <input
                onChange={(e) => handleChange(e)}
                value={text}
                className="appearance-none bg-transparent border-none w-full text-lg text-gray-700 mx-3 py-2.5 px-2.5 leading-tight focus:outline-none"
                type="text"
                placeholder="Search Image Term..."
              />
              <button
                className="flex-shrink-0 px-24 bg-teal-500 rounded-full hover:bg-teal-700 text-lg text-white font-medium"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
