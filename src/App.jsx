import Canvas from "./canvas";

import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "./context/CollectionProvider";

function App() {
  const [prompt, setPrompt] = useState("");
  const [decalImageURL, setDecalImageURL] = useState(null);

  let { id } = useParams();
  const { collection } = useCollection();
  const collectionFound = collection.find((item) => {
    return item.id == id;
  });
  console.log(collectionFound);

  async function promptBot(prompt) {
    try {
      const respBot = await fetch(
        `${import.meta.env.VITE_BACKEND_BOT_ENDPOINT}/chatimage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            number_image: 1,
            size: "256x256",
          }),
        }
      );
      const data = await respBot.json();
      console.log(data);

      // const dataTest = {
      //   image_url:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      // };

      const respEueno = await fetch(
        `${import.meta.env.VITE_BACKEND_EUENO_ENDPOINT}/eueno/upload-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataEueno = await respEueno.json();
      const { file } = dataEueno.data;

      setDecalImageURL(file);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <main className="app transition-all ease-in">
        <input
          style={{ background: "red" }}
          value={prompt}
          onChange={(evt) => setPrompt(evt.target.value)}
        />
        <button onClick={() => promptBot(prompt)}>Send</button>
        <Home />
        <Canvas
          collectionFound={collectionFound}
          decalImageURL={decalImageURL}
        />
        <Customizer />
      </main>
    </>
  );
}

export default App;
