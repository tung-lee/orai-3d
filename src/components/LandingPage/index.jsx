import Spline from "@splinetool/react-spline";
import styles from "./LandingPage.module.css";
import { Header } from "../Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const LandingPage = () => {
  const infiniteTextMove = useRef(null);
  const secondInfiniteTextMove = useRef(null);

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    // gsap.set(infiniteTextMove.current, {
    //   left: infiniteTextMove.current.getBoundingClientRect().width,
    // });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    // if (xPercent > 0) {
    //   xPercent = -100;
    // }
    // if (xPercent <= -100) {
    //   xPercent = 0;
    // }

    gsap.set(infiniteTextMove.current, { xPercent: xPercent });
    gsap.set(secondInfiniteTextMove.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;

    requestAnimationFrame(animate);
  };

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
          <Header />
          <div className="flex w-[1512px] items-end justify-between relative flex-[0_0_auto]">
            <div className="flex items-center gap-[10px] px-[45px] py-0 relative flex-1 border-r [border-right-style:solid] border-collection-1-line">
              <div
                style={{ width: "16%", position: "relative" }}
              >
                <Spline scene="https://prod.spline.design/alh1qMHwFi0cy2MG/scene.splinecode" />
              </div>
              <p className="relative w-fit mt-[-1.00px] pl-[20px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[70px] tracking-[-7.00px] leading-[normal] border-l [border-left-style:solid] border-collection-1-line">
                The Evolution
                <br />
                of 3d Design Tools
              </p>
            </div>
            <div className="inline-flex justify-center px-[45px] py-[24px] self-stretch border-l [border-left-style:solid] border-collection-1-line items-center gap-[10px] relative flex-[0_0_auto]">
              <p className="w-[395px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                Built on the foundation of AIright <br /> Orai3D revolutionizes{" "}
                <br />
                the way creators interact with NFTs
              </p>
            </div>
          </div>
          <div className="relative w-[1512px] h-[408px] overflow-hidden border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <div className="relative w-[4196px] h-[377px] top-[31px]">
              <div className="inline-flex items-center gap-[100px] px-[45px] py-0 absolute top-0 left-0">
                <div className={styles.slider}>
                  <p
                    className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[225px] tracking-[-22.50px] leading-[normal]"
                    ref={infiniteTextMove}
                  >
                    NFTs IN A NUTSHELLL
                  </p>
                  <p
                    className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca-Light',Helvetica] font-light text-[#ffffff] text-[225px] tracking-[-22.50px] leading-[normal]"
                    ref={secondInfiniteTextMove}
                  >
                    NFTs IN A NUTSHELLL
                  </p>
                </div>
              </div>
              {/* <img className="absolute w-[488px] h-[205px] top-[172px] left-[510px]" alt="Frame" src="frame-2.svg" /> */}
            </div>
          </div>
          <div className={styles.wrapper}>
            <Spline
              className={styles.spline}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              scene="https://prod.spline.design/fqT4izJ4Lt3Bdfkj/scene.splinecode"
            />
          </div>
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
                <p className="w-[450px] mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)] leading-5">
                  Orai3D is an innovative platform that offers a dynamic
                  environment for designing and <br /> collaborating on
                  decentralized 3D assets.
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-0 py-[24px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
                  continue
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-[1512px] items-end justify-center px-0 py-[24px] relative flex-[0_0_auto]"
            style={{ zIndex: 2 }}
          >
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
                <div
                  className="relative w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]"
                  style={{ opacity: 0.7 }}
                >
                  How It Works
                </div>
              </div>
              <div className="flex w-[691px] justify-center items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="w-[646px] mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)] leading-5">
                  Orai3D simplifies the process of designing and minting NFTs by
                  integrating AI-generated images and user interaction through
                  Weminal's assistance. The platform securely stores the
                  generated images on Eueno's decentralized storage. <br /> We
                  encourages users to share their creations with other artists
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
                  Artwork Upload
                </div>
              </div>
              <div className="flex w-[678px] justify-end items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-right tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)] leading-5">
                  Users can upload their own artwork, <br /> giving them
                  complete creative freedom over their object designs. <br />{" "}
                  Objects can be uploaded from Blender, Unity, or other plugins
                  using the .glb file format.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[1512px] items-center justify-between px-[45px] py-0 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
            <div
              className="flex w-[562px] items-start flex-col relative"
              style={{ padding: "40px 0" }}
            >
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] relative leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  3D Preview and Weminal Assistance
                </div>
              </div>
              <div className="flex w-[563px] mr-[-1.00px] items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="flex-1 mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] relative leading-[var(--text-line-height)] [font-style:var(--text-font-style)] leading-5">
                  Users can view their customized object in real-time using the
                  3D Preview feature. This enables them to see how the final
                  design will look from different angles before completing it.
                  <br />
                  <br />
                  Weminal can assist users by answering questions about which
                  design prompts or themes may be most suitable for their
                  project. Weminal is also able to generate original image
                  concepts through AI, which may inspire new creative ideas
                </p>
              </div>
            </div>
            <div className="flex w-[379px] h-[423px] border-l [border-left-style:solid] border-collection-1-line justify-center items-center">
              <img className="" src="frame-5.svg" alt="" />
            </div>
            <div className="flex w-[379px] h-[423px] items-center justify-center gap-[10px] px-0 py-[24px] relative border-l [border-left-style:solid] border-collection-1-line">
              <div className="relative w-[100px] h-[100px]">
                <div className="relative h-[100px] bg-[#ffffff] rounded-[50px]">
                  <div className="top-[6px] absolute left-[30px] font-header-1 font-[number:var(--header-1-font-weight)] text-black text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1512px] items-center justify-between px-[26px] py-0 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-collection-1-line">
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
            <div className="inline-flex items-start flex-[0_0_auto] flex-col relative">
              <div className="inline-flex items-center justify-center gap-[10px] pt-[24px] pb-0 px-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] relative leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
                  Mint NFTs and Share <br /> Your Creation
                </div>
              </div>
              <div className="flex w-[676px] justify-end items-center gap-[10px] relative flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] text-left tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                  With a completed custom design saved in their Eueno workspace,
                  users mint it as an NFT to proves their ownership on the
                  blockchain and allows others to purchase and admire the work.
                  <br />
                  <br />
                  Users have options to showcase their NFTs on social profiles.
                  Shared links allow friends and communities to view the
                  high-quality 3D renderings without the need to purchase.
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
