import { FormEvent, useState } from "react";
import { runConversation } from "../utils/getGeminiResponse";

function App() {
  const [query, setQuery] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  async function handleSearch(e) {
    e.preventDefault();
    try {
      const tempRes = await runConversation(query);
      setConversationHistory(tempRes);
      setQuery("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" p-2 flex justify-center items-center h-screen w-screen bg-no-repeat bg-cover bg-center bg-[url('/bg1.png')]">
      <div className="flex h-full flex-col justify-betwee w-[70%]">
        <div className="overflow-auto h-5/6 p-2">
          {conversationHistory.map((convo, item) => (
            <div key={item}>
              <p>{convo.role}</p>
              <p className="leading-8">{convo.parts[0].text}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSearch}
          className="flex rounded-xl p-2 text-xl shadow-[0_0_15px_rgba(0,0,0,0.2)]"
        >
          <input
            type="text"
            name="qury"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="p-4 bg-transparent w-10/12 outline-none focus:outline-none placeholder:text-gray-600"
            placeholder="ask something..."
          />
          <button className="bg-transparent borde p-4 w-2/12 border-l border-l-gray-700">
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
