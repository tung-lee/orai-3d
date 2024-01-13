export const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-[10px] px-[45px] py-[40px] relative flex-[0_0_auto]">
      <div className="flex items-center justify-center gap-[10px] px-[24px] py-[16px] relative flex-1 grow rounded-[12px] border border-solid border-collection-1-line">
        <div className="relative flex-1 font-big-text font-[number:var(--big-text-font-weight)] text-text-color text-[length:var(--big-text-font-size)] tracking-[var(--big-text-letter-spacing)] leading-[var(--big-text-line-height)] [font-style:var(--big-text-font-style)]">
          <input
            className="w-full"
            type="text"
            placeholder="search collection"
            style={{ background: "transparent", color: "inherit" }}
          />
        </div>
        <img
          className="relative w-[32px] h-[32px]"
          alt="Search Icon"
          src="search-icon.svg"
        />
      </div>
    </div>
  );
};
