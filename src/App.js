import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getPicture();
  }, []);

  const getPicture = async () => {
    const api = await fetch(`https://api.waifu.im/random`);
    const data = await api.json();
    console.log(data.images);
    setImage(data.images);
  };

  return (
    <div className="w-full bg-[url('https://wallpapercave.com/wp/wp2771916.jpg')]  bg-cover bg-center h-screen bg-repeat">
      <h1 className="pt-8 text-4xl font-semibold text-center text-rose-600 lg:text-5xl">
        Random Anime Waifu
      </h1>
      <div className="flex flex-col items-center justify-center">
        {image.map((waifu) => {
          return (
            <img
              src={waifu.url}
              key={waifu.image_id}
              alt={waifu.file}
              className="shrink-0 flex justify-center items-center container w-10/12 mx-auto object-contain  max-w-[1700px] max-h-[500px] my-4 sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px]"
            />
          );
        })}

        <button
          onClick={getPicture}
          className="flex items-center justify-center h-8 mb-4 shadow-xl rounded-xl w-28 bg-rose-500 sm:w-32 sm:h-11 md:w-36 md:h-14 lg:w-40 lg:h-16 hover:scale-110 shadow-violet-900"
        >
          <h1 className="text-3xl text-white hover:scale-110">Next</h1>
        </button>
      </div>
    </div>
  );
}

export default App;
