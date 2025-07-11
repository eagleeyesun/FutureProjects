"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type FeedbackContextType = {
  message: string;
  type: "success" | "error" | "";
  showMessage: (msg: string, type: "success" | "error") => void;
  clearMessage: () => void;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "">("");

  const showMessage = (msg: string, type: "success" | "error") => {
    setMessage(msg);
    setType(type);
    setTimeout(() => clearMessage(), 3000);
  };

  const clearMessage = () => {
    setMessage("");
    setType("");
  };

  return (
    <FeedbackContext.Provider value={{ message, type, showMessage, clearMessage }}>
      {children}
      {message && (
        <div className={`fixed top-44 right-5 px-4 py-2 rounded text-white ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {message}
        </div>
      )}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error("useFeedback must be used inside FeedbackProvider");
  return context;
};