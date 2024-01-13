import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useEffect } from "react";

const serverBaseURL = "http://localhost:8000";

export const callChatbotApi = () => {
  useEffect(() => {
    const fetchData = async () => {
      await fetchEventSource(`${serverBaseURL}/chat`, {
        method: "POST",
        headers: { Accept: "text/event-stream" },
        body: JSON.stringify({
          text: "What is the square root of 8?",
        }),
        onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res);
          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.log("Client-side error ", res);
          }
        },
        onmessage(event) {
          console.log(event.data);
          const parsedData = JSON.parse(event.data);
          console.log(parsedData);
          // setData((data) => [...data, parsedData]); // Important to set the data this way, otherwise old data may be overwritten if the stream is too fast
        },
        onclose() {
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      });
    };
    fetchData();
  }, []);
};
