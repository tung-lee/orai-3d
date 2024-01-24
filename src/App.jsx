import Canvas from "./canvas";

import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "./context/CollectionProvider";

function App() {
  const [decalImageURL, setDecalImageURL] = useState(null);

  let { id } = useParams();
  const { collection } = useCollection();
  const collectionFound = collection.find((item) => {
    return item.id == id;
  });
  console.log(collectionFound);

  return (
    <>
      <main className="app transition-all ease-in">
        <div
          className="absolute w-[400px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          role="alert"
          style={{ zIndex: 1 }}
        >
          <span className="block sm:inline">
            Because our server is running on Eueno, in order to interact with
            images, you will need to request the developer to generate a project
            key for you
          </span>
        </div>
        <Home />
        <Canvas
          collectionFound={collectionFound}
          decalImageURL={decalImageURL}
        />
        <Customizer
          decalImageURL={decalImageURL}
          setDecalImageURL={setDecalImageURL}
        />
      </main>
    </>
  );
}

export default App;
