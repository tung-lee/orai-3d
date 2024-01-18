import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex w-[1512px] items-center justify-between px-[45px] py-[21px] relative flex-[0_0_auto] bg-black border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
      <Link to="/">
        <img
          className="relative w-[57.69px] h-[67px]"
          alt="Logo"
          src="logo_2.svg"
        />
      </Link>
      <div className="inline-flex items-center justify-center gap-[65px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[32px] relative flex-[0_0_auto]">
          <div className="inline-flex items-end gap-[60px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              Docs
            </div>
            <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              Community
            </div>
            <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              Launch Owallet
            </div>
            <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              Product
            </div>
            <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              <Link to="/collections">Collections</Link>
            </div>
            <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              Connect Wallet
            </div>
          </div>
        </div>
        <img
          className="relative w-[45px] h-[46px]"
          alt="Frame"
          src="avatar_2.svg"
        />
      </div>
    </div>
  );
};
