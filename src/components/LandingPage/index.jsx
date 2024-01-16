import Spline from "@splinetool/react-spline";

export const LandingPage = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-[1512px] h-[2690px] relative">
        {/* <div className="flex w-[1728px] items-end gap-[90px] px-[45px] py-0 absolute top-[2393px] left-[-1826px]">
          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                Partnerships
              </div>
            </div>
            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="w-[646px] mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore
                nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan,
                nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col w-[1512px] items-start absolute top-px left-0">
          <div className="flex w-[1512px] items-center justify-between px-[45px] py-[21px] relative flex-[0_0_auto] bg-black border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <img
              className="relative w-[57.69px] h-[67px]"
              alt="Logo"
              src="logo_2.svg"
            />
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
                    Collection
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
          <div className="flex w-[1512px] items-end justify-between relative flex-[0_0_auto]">
            <div className="flex items-center gap-[10px] px-[45px] py-0 relative flex-1 grow border-r [border-right-style:solid] border-collection-1-line">
              <img
                className="relative w-[240.5px] h-[176px] object-cover"
                alt="Image"
                src="circle.png"
              />
              <p className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[70px] tracking-[-7.00px] leading-[normal]">
                The Evolution
                <br />
                of 3d Design Tools
              </p>
            </div>
            <div className="inline-flex justify-center px-[45px] py-[24px] self-stretch border-l [border-left-style:solid] border-collection-1-line items-center gap-[10px] relative flex-[0_0_auto]">
              <p className="w-[395px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                Loren ipsun dolor sit anet,
                <br />
                consectetur adipisci elit, consectetur adipisci elit, sed
                eiusnod tenpor incidunt ut labore et dolore nagna aliqua
              </p>
            </div>
          </div>
          <div className="relative w-[1512px] h-[408px] overflow-hidden border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <div className="relative w-[4196px] h-[377px] top-[31px]">
              <div className="inline-flex items-center gap-[100px] px-[45px] py-0 absolute top-0 left-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[225px] tracking-[-22.50px] leading-[normal]">
                  NFTs IN A NUTSHELLL
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[225px] tracking-[-22.50px] leading-[normal]">
                  NFTs IN A NUTSHELLL
                </div>
              </div>
              {/* <img className="absolute w-[488px] h-[205px] top-[172px] left-[510px]" alt="Frame" src="frame-2.svg" /> */}
              
            </div>
          </div>
          <Spline
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                scene="https://prod.spline.design/fqT4izJ4Lt3Bdfkj/scene.splinecode"
              />
          <div className="flex w-[1512px] items-center justify-between px-[45px] py-0 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <img
              className="relative w-[379px] h-[321px]"
              alt="Frame"
              src="frame-3.svg"
            />
            <div className="inline-flex items-end flex-[0_0_auto] flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  What Is Orai3D ?
                </div>
              </div>
              <div className="flex w-[691px] justify-end items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="w-[646px] mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                  Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                  eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut
                  enin ad ninin venian, quis nostrun exercitationen ullan
                  corporis suscipit laboriosan, nisi ut aliquid ex ea connodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit
                  esse cillun dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-0 py-[24px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
                  continue
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1512px] items-end justify-center px-0 py-[24px] relative flex-[0_0_auto]">
            <div className="flex items-start justify-between px-[45px] py-0 relative flex-1 grow">
              <div className="relative w-[60px] h-[60px] bg-[#ffffff] rounded-[30px]" />
              <div className="relative w-[50px] h-[50px] bg-[#1b1b1b] rounded-[25px]" />
              <div className="relative w-[40px] h-[40px] bg-[#9b9b9b] rounded-[20px]" />
              <div className="relative w-[30px] h-[30px] bg-[#ffffff] rounded-[15px]" />
              <div className="relative w-[20px] h-[20px] bg-[#1b1b1b] rounded-[10px]" />
              <div className="relative w-[10px] h-[10px] bg-[#9b9b9b] rounded-[5px]" />
            </div>
            <div className="inline-flex items-center justify-center flex-[0_0_auto] flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  How It Works
                </div>
              </div>
              <div className="flex w-[691px] justify-center items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="w-[646px] mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                  Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                  eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut
                  enin ad ninin venian, quis nostrun exercitationen ullan
                  corporis suscipit laboriosan, nisi ut aliquid ex ea connodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit
                  esse cillun dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between px-[45px] py-0 relative flex-1 grow">
              <div className="relative w-[10px] h-[10px] bg-[#9b9b9b] rounded-[5px]" />
              <div className="relative w-[20px] h-[20px] bg-[#1b1b1b] rounded-[10px]" />
              <div className="relative w-[30px] h-[30px] bg-[#ffffff] rounded-[15px]" />
              <div className="relative w-[40px] h-[40px] bg-[#9b9b9b] rounded-[20px]" />
              <div className="relative w-[50px] h-[50px] bg-[#1b1b1b] rounded-[25px]" />
              <div className="relative w-[60px] h-[60px] bg-[#ffffff] rounded-[30px]" />
            </div>
          </div>
          <div className="flex w-[1512px] items-center justify-between px-[45px] py-0 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <div className="flex w-[379px] h-[321px] items-center justify-center gap-[10px] px-0 py-[24px] relative border-r [border-right-style:solid] border-collection-1-line">
              <div className="relative w-[100px] h-[100px]">
                <div className="relative h-[100px] bg-[#ffffff] rounded-[50px]">
                  <div className="absolute top-[6px] left-[33px] font-header-1 font-[number:var(--header-1-font-weight)] text-black text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative w-[379px] h-[321px] ml-[-7px]"
              alt="Frame"
              src="frame-4.svg"
            />
            <div className="inline-flex items-end flex-[0_0_auto] ml-[-7px] flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] relative leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  Loren ipsun
                </div>
              </div>
              <div className="flex w-[678px] justify-end items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                  Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                  eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut
                  enin ad ninin venian, quis nostrun exercitationen ullan
                  corporis suscipit laboriosan, nisi ut aliquid ex ea connodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit
                  esse cillun dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[1512px] items-center justify-between px-[45px] py-0 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <div className="flex w-[562px] items-start flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] relative leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  Loren ipsun
                </div>
              </div>
              <div className="flex w-[563px] mr-[-1.00px] items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="flex-1 mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                  Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                  eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut
                  enin ad ninin venian, quis nostrun exercitationen ullan
                  corporis suscipit laboriosan, nisi ut aliquid ex ea connodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit
                  esse cillun dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <img
              className="relative w-[379px] h-[321px]"
              alt="Frame"
              src="frame-5.svg"
            />
            <div className="flex w-[379px] h-[321px] items-center justify-center gap-[10px] px-0 py-[24px] relative border-l [border-left-style:solid] border-collection-1-line">
              <div className="relative w-[100px] h-[100px]">
                <div className="relative h-[100px] bg-[#ffffff] rounded-[50px]">
                  <div className="top-[6px] absolute left-[30px] font-header-1 font-[number:var(--header-1-font-weight)] text-black text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1512px] items-center justify-between px-[45px] py-0 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <div className="flex w-[379px] h-[321px] items-center justify-center gap-[10px] px-0 py-[24px] relative border-r [border-right-style:solid] border-collection-1-line">
              <div className="relative w-[100px] h-[100px]">
                <div className="relative h-[100px] bg-[#ffffff] rounded-[50px]">
                  <div className="top-[5px] absolute left-[30px] font-header-1 font-[number:var(--header-1-font-weight)] text-black text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative w-[379px] h-[321px] ml-[-6px]"
              alt="Frame"
              src="frame-6.svg"
            />
            <div className="inline-flex items-end flex-[0_0_auto] ml-[-6px] flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] relative leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  Loren ipsun
                </div>
              </div>
              <div className="flex w-[676px] justify-end items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                  Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                  eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut
                  enin ad ninin venian, quis nostrun exercitationen ullan
                  corporis suscipit laboriosan, nisi ut aliquid ex ea connodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit
                  esse cillun dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[1512px] items-center px-[45px] py-0 relative flex-[0_0_auto]">
            <div className="inline-flex items-start justify-center px-[40px] py-0 self-stretch flex-[0_0_auto] flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[70px] tracking-[-7.00px] leading-[normal] whitespace-nowrap">
                  Ecosystem
                </div>
              </div>
            </div>
            <div className="relative flex-[0_0_auto] h-[188px] bg-black border-l [border-left-style:solid] border-collection-1-line" />
          </div>
          <img
            className="relative w-[1512px] h-[175px]"
            alt="Frame"
            src="frame-7.svg"
          />
        </div>
      </div>
    </div>
  );
};
