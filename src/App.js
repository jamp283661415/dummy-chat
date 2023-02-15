import { useRef, useState } from "react";
import cx from "classnames";

function App() {
  const [message, setMesssage] = useState("");
  const [chat, setChat] = useState([
    {
      char: "You",
      content: "Hi?",
    },
    {
      char: "Bot",
      content: "Yes? How may I help?",
    },
  ]);
  const chatAreaRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setChat([
      ...chat,
      {
        char: "You",
        content: message,
      },
    ]);

    setTimeout(() => {
      setChat((chat) => [
        ...chat,
        {
          char: "Bot",
          content: "Bot Message here",
        },
      ]);

      setTimeout(() => {
        chatAreaRef.current.scrollTo(0, chatAreaRef.current.scrollHeight);
      }, 500);
    }, 1000);
    setMesssage("");
    
  };

  const handleMessageChange = (e) => {
    setMesssage(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Dummy Chat</h1>
        <p>A demo of a chat simulation with no AI.</p>
        <div className="h-50 my-3" style={{ maxHeight: "500px", overflowY: "scroll" }} ref={chatAreaRef}>
          {chat.map((item, id) => (
            <div
              className={cx(
                "py-1 px-2 rounded my-2 border",
                item.char === "You" ? "text-end bg-success text-light" : "bg-body-secondary text-dark"
              )}
              key={id}
            >
              {item.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="What do you want to say?"
              aria-label="chat content"
              aria-describedby="basic-addon2"
              onChange={handleMessageChange}
              value={message}
            />
            <button
              className="input-group-text"
              id="basic-addon2"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
