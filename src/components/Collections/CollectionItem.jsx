import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
export const CollectionItem = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, image } = item;
  return (
    <div className="mx-[45px] mb-[40px] inline-flex flex-col items-center justify-center gap-[16px] p-[24px] relative rounded-[24px] border border-solid border-collection-1-line">
      <img
        className="relative w-[188px] h-[210px]"
        alt="Rectangle"
        src={image}
      />
      <div className="flex items-end justify-between self-stretch w-full relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-white text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
            {name}
          </div>
          <div className="relative w-fit font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
            Free
          </div>
        </div>
        <Button
          className="!flex-[0_0_auto]"
          onClick={() => navigate(`${id}`)}
        />
      </div>
    </div>
  );
};
