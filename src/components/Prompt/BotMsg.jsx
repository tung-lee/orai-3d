export const BotMsg = ({ type, message }) => {
  return (
    <>
      {type === "text" && (
        <div className="inline-flex items-center p-[24px] relative flex-[0_0_auto] bg-[#f1f1f1] rounded-[24px_24px_24px_0px]">
          <p className="overflow-wrap break-word relative w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-[#64568b] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-normal [font-style:var(--text-font-style)]">
            {message}
          </p>
        </div>
      )}
      {type === "image" && (
        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[100px] items-center justify-center gap-[10px] relative rounded-[12px] overflow-hidden">
              <img
                className="relative w-[100px] h-[100px] object-cover"
                alt="A cat"
                src={message}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
