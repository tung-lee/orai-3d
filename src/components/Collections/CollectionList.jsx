import { useCollection } from "../../context/CollectionProvider";
import { CollectionItem } from "./CollectionItem";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { callChatbotApi } from "../../api/chatbot";

export const CollectionList = () => {
  callChatbotApi();
  const { collection } = useCollection();

  return (
    <div className="bg-black w-full h-full">
      <div className="bg-black border-r [border-right-style:solid] border-l [border-left-style:solid] border-transparent">
        <div className="">
          <div className="">
            <Header />
            <SearchBar />
            <div className="grid grid-cols-4">
              {collection.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[78.5px]"></div>
    </div>
  );
};
