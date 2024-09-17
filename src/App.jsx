import { useState } from "react";
import { runConversation } from "../utils/getGeminiResponse";
import Markdown from "markdown-to-jsx";
import { VscSend } from "react-icons/vsc";
import { RiRobot3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import Questions from "./Questions";

function App() {
  const [query, setQuery] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);

  function handleQuery(question) {
    setQuery(question);
  }
  async function handleSearch() {
    try {
      const tempRes = await runConversation(query);
      setConversationHistory(tempRes);
      setQuery("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="p-2 overflow-hidden flex justify-center items-center h-screen w-screen bg-no-repeat bg-cover bg-center bg-gray-900 text-gray-200">
      <div className="flex h-full flex-col justify-between md:w-[75%]">
        {conversationHistory.length === 0 ? (
          <div className="box-border flex flex-col gap-10 items-center justify-center">
            <h1 className="text-center text-8xl bg-gradient-to-r from-purple-700 via-blue-400 to-pink-500 text-transparent bg-clip-text">
              Varta-AI
            </h1>
            <Questions handleQuery={handleQuery} />
            <h3 className="text-gray-600">Model: Gemini 1.5 flash</h3>
          </div>
        ) : (
          <div className="overflow-auto h-5/6 p-2 font-quick tracking-widest text-slate-300 custom-scrollbar">
            <h2 className="text-center font-semibold text-3xl mb-4 bg-gradient-to-br from-[#6d30f9] to-[#e40ab5] text-transparent bg-clip-text">
              Varta-AI
            </h2>
            <div className="scrollbar-w-2 flex flex-col gap-6">
              {conversationHistory.map((convo, item) => (
                <div>
                  <div
                    key={item}
                    className="flex items-start gap-2 text-lg leading-9"
                  >
                    <span className="text-gray-500 mt-2 text-lg border-2 rounded-full p-2 border-gray-500">
                      {convo.role === "user" ? <FaRegUser /> : <RiRobot3Line />}
                    </span>
                    <Markdown className="bg-[#ffffff0a] px-5 py-3 rounded-2xl ">
                      {convo.parts[0].text}
                    </Markdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="p-2 overflow-hidden flex justify-between rounded-3xl text-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-gray-800">
          <input
            type="text"
            name="qury"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="ask something..."
            className="placeholder-gray-500 text-gray-300 px-4 py-5 text-2xl w-10/12 outline-none focus:outline-none bg-transparent"
          />
          <button
            className="border-l-2 border-l-gray-500 p-4 overflow-hidden font-extralight"
            onClick={handleSearch}
          >
            <VscSend className="text-gray-500 backdrop-blur-xl text-4xl font-extralight overflow-hidden" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
