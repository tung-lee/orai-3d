export const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="all-[unset] box-border inline-flex items-center justify-center gap-[10px] px-[24px] py-[8px] relative bg-[#39393980] rounded-[7px]"
    >
      <div className="relative w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-white text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]">
        Try
      </div>
    </button>
  );
};
