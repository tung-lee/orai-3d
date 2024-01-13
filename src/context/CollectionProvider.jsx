import { createContext, useContext, useState } from "react";

const initialState = [
  {
    id: 1,
    name: "Shirt",
    image: "https://i.ebayimg.com/images/g/4IsAAOSwpddgqEwp/s-l1200.jpg",
  },
  {
    id: 2,
    name: "Cup",
    image:
      "https://www.shutterstock.com/image-vector/paper-cup-filled-black-coffee-600nw-1801429321.jpg",
  },
];
const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const [collection, setCollection] = useState(initialState);

  return (
    <CollectionContext.Provider value={{ collection, setCollection }}>
      {children}
    </CollectionContext.Provider>
  );
}

function useCollection() {
  const context = useContext(CollectionContext);
  return context;
}

export { CollectionProvider, useCollection };
