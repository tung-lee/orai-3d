export const UserMsg = ({ message }) => {
  return (
    <div className="flex flex-col items-end justify-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex items-center p-[24px] relative flex-[0_0_auto] bg-[#603dc7] rounded-[24px_24px_0px_24px]">
        <div className="overflow-wrap break-word relative w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-[#ffffff] text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-normal [font-style:var(--text-font-style)]">
          {message}
        </div>
      </div>
    </div>
  );
};
