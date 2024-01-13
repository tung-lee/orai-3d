import { useState } from "react";
import "./Prompt.css";

export const Prompt = ({ toggleSidebar }) => {
  const [value, setValue] = useState("");

  return (
    <div className="prompt-main">
      <div className="chat-header">
        <button className={`absolute left-0`} onClick={toggleSidebar}>
          Close
        </button>
        <div className="account-info">
          <div className="network">Ethereum</div>
          <img src="" />
        </div>
      </div>
      <div className="message-ul">
        <ul>
          {/* {messages.map((message, index) => (
            <li key={index}>
              {index % 2 == 1 ? (
                <Message index={index} message={message} />
              ) : (
                <Message
                  index={index}
                  message={message?.Comment}
                  back={{ action: message?.Action, arg: message?.Parameters }}
                  setValue={setValue}
                />
              )}
            </li>
          ))} */}
        </ul>
      </div>
      {/* {isCode == true ? (
        <div className="code-select">
          <div className="select-item" onClick={handleCode("/assets")}>
            <h2>/assets</h2>
            <p>Show my all crypto assets</p>
          </div>
          <div className="select-item" onClick={handleCode("/history")}>
            <h2>/history</h2>
            <p>My transaction history</p>
          </div>
        </div>
      ) : null} */}
      <div className="prompt">
        <textarea
          className="prompt-input"
          rows={4}
          //   value={value}
          //   onBlur={handleBlur}
          //   ref={textareaRef}
          //   onChange={handleValueChange}
          //   typeof="text"
          //   onKeyDown={handleKeyDown}
        />
        <button>Send</button>
      </div>
      <button className="new-chat">New Chat</button>
    </div>
  );
};
