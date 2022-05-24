import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "./quiz-context";
const QuestionContext = createContext({ questions: [] });

const QuestionProvider = ({ children }) => {
  const navigate = useNavigate();
  const { category } = useQuiz();
  const foodURL =
    "https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=10&region=IN&difficulty=easy&tags=food";
  const movieURL =
    "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&tags=batman,harry_potter,marvel,star_wars,cartoons,james_bond";

  const QuestionReducer = (state, action) => {
    switch (action.type) {
      case "SET_QUESTIONS":
        return { ...state, questions: action.payload };
      default:
        return { ...state };
    }
  };

  const getQuiz = async () => {
    try {
      const categoryUrl = category === "food" ? foodURL : movieURL;
      const questions = await axios(categoryUrl);
      console.log(questions.data);
      dispatch({ type: "SET_QUESTIONS", payload: questions.data });
      navigate("/questions");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [state, dispatch] = useReducer(QuestionReducer, { questions: [] });
  return (
    <QuestionContext.Provider value={{ state, dispatch, getQuiz }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestion = () => useContext(QuestionContext);

export { QuestionProvider, useQuestion };
