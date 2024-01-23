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
        <Home />
        <Canvas
          collectionFound={collectionFound}
          decalImageURL={decalImageURL}
        />
        <Customizer decalImageURL={decalImageURL} setDecalImageURL={setDecalImageURL} />
      </main>
    </>
  );
}

export default App;
