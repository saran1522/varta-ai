import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

let conversationHistory = [];

export async function runConversation(query) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Add user input to conversation history
  conversationHistory.push({ role: "user", parts: [{ text: query }] });

  // Prepare the conversation for the API request
  const result = await model.generateContent({
    contents: conversationHistory,
    // generationConfig: {
    //   maxOutputTokens: 500,
    // },
  });

  const response = result.response;
  const text = response.text();

  // Add AI response to conversation history
  conversationHistory.push({
    role: "model",
    parts: [{ text: response.text() }],
  });
  return conversationHistory;
}
