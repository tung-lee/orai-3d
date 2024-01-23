import { useState } from "react";
import { CloseButton } from "./CloseButton";
import { UserMsg } from "./UserMsg";
import { BotMsg } from "./BotMsg";
import { Loader } from "../Loader";
import { ToastContainer } from "react-toastify";

export const Chatbot = ({
  isExpanded,
  setIsExpanded,
  genImgAndUploadToEueno,
  prompt,
  setPrompt,
  messages,
  setMessages,
  isLoading,
}) => {
  const [isPromptForLogo, setIsPromptForLogo] = useState(true);

  function toggleSidebar() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      {isExpanded ? (
        <div className="absolute left-0" style={{ top: "-10px" }}>
          <div className="relative rounded-[24px] overflow-hidden">
            <div className="h-[450px] w-[370px] bg-black">
              <CloseButton toggleSidebar={toggleSidebar} />
              <div className="flex flex-col items-start relative top-[30px]">
                <div className="flex flex-col h-[275px] items-start gap-[16px] px-[24px] py-0 relative self-stretch w-full flex-[0_0_auto] overflow-auto">
                  {messages.map((message) => {
                    if (message.type === "text" && message.isUser) {
                      return <UserMsg message={message.message} />;
                    } else if (message.type === "text" && !message.isUser) {
                      return <BotMsg type="text" message={message.message} />;
                    } else if (message.type === "image" && !message.isUser) {
                      return <BotMsg type="image" message={message.message} />;
                    }
                  })}
                  {isLoading && <Loader />}  
                    <ToastContainer
                      position="top-left"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                </div>
                <div className="flex flex-col items-start gap-[10px] px-[23px] py-[16px] relative self-stretch w-full flex-[0_0_auto] bg-black">
                  <div className="flex items-center justify-between px-[16px] py-[17px] relative self-stretch w-full flex-[0_0_auto] rounded-[16px] border-2 border-solid border-[#818181]">
                    <input
                      className="w-[133px] relative w-fit font-text font-[number:var(--text-font-weight)] text-text-color text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]"
                      value={prompt}
                      placeholder="Ask something ..."
                      style={{ background: "none" }}
                      onChange={(evt) => setPrompt(evt.target.value)}
                    />

                    <div className="flex w-[199.33px] items-center justify-end gap-[6px] relative">
                      <div className="inline-flex items-center justify-end gap-[4px] relative flex-[0_0_auto]">
                        <div
                          className={`inline-flex items-center justify-end gap-[10px] px-[8px] py-[4px] relative flex-[0_0_auto] ${
                            isPromptForLogo
                              ? "bg-[#ffffff] "
                              : "text-text-color"
                          }`}
                        >
                          <button
                            className={`relative w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]`}
                            onClick={() => {
                              setIsPromptForLogo((prev) => !prev);
                            }}
                          >
                            Logo
                          </button>
                        </div>
                        <div
                          className={`inline-flex items-center justify-end gap-[10px] px-[8px] py-[4px] relative flex-[0_0_auto]  rounded-[6px] ${
                            !isPromptForLogo
                              ? "bg-[#ffffff]"
                              : "text-text-color"
                          }`}
                        >
                          <button
                            onClick={() => {
                              setIsPromptForLogo((prev) => !prev);
                            }}
                            className={`relative w-fit mt-[-1.00px] font-text font-[number:var(--text-font-weight)] text-purple-text text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] whitespace-nowrap [font-style:var(--text-font-style)]`}
                          >
                            Full
                          </button>
                        </div>
                      </div>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setMessages((prev) => [
                            ...prev,
                            {
                              isUser: true,
                              type: "text",
                              message: prompt,
                            },
                          ]);
                          genImgAndUploadToEueno(prompt);
                        }}
                        className="relative w-[40px] h-[40px]"
                        alt="Arrow up square"
                        src="/arrow-up-square.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
