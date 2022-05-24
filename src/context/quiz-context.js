import { createContext, useContext, useState } from "react";

const QuizContext = createContext({ username: "", category: "" });

const QuizProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{ username, category, setUsername, setCategory, score, setScore }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
