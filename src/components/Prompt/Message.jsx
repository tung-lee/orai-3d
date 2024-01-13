import "./Message.css";

export const Message = (props) => {
  console.log(props, 1);
  return (
    <div className="message-main">
      <div className="message-item">
        <img src="" style={{ paddingRight: "10px" }} />
        <div
          style={{ width: "300px", overflow: "auto", wordBreak: "break-all" }}
        >
          {props.message}
        </div>
      </div>
    </div>
  );
};
