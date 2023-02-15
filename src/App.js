import { useState } from "react";

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
    }, 1000)
    setMesssage("");
  };

  const handleMessageChange = (e) => {
    setMesssage(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="h-50">
          <ul
            className="list-group list-group-flush"
            style={{ height: "500px", overflowY: "scroll" }}
          >
            {chat.map((item, id) => (
              <li className="list-group-item" key={id}>
                {item.char}: {item.content}
              </li>
            ))}
          </ul>
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
            <button className="input-group-text" id="basic-addon2" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
