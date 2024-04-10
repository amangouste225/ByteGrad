import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import { useEffect, useReducer } from "react";
import CountButton from "./CountButton";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      if (state.number < 5) return { ...state, number: state.number + 1 };
      return { ...state, text: "LIMIT! BUY PRO FOR > 5" };

    case "decrease":
      return { ...state, number: state.number - 1, text: "fancy counter" };
    case "erase":
      return initials;
    default:
      throw new Error("Nothing to show !");
  }
}

const initials = {
  number: 0,
  text: "fancy counter",
};
export default function Card() {
  const [state, dispatch] = useReducer(reducer, initials);

  const { text, number } = state;

  useEffect(() => {
    function handleSpace(e) {
      if (e.code === "Space") {
        dispatch({ type: "increase" });
      }
    }
    window.addEventListener("keydown", handleSpace);

    return () => window.removeEventListener("keydown", handleSpace);
  }, [dispatch]);

  return (
    <div className="max-w-[35vw] w-[30em] bg-black rounded-xl overflow-hidden h-[35vw]">
      <div className="bg-[#fff000] h-[85%]  flex justify-center flex-col items-center">
        <h2 className="text-center uppercase text-[2.5vw] leading-none font-medium xl:px-20">
          <span>{text}</span>
        </h2>
        <span className="xl:text-[15vw] font-semibold leading-none">
          {number}
        </span>
        <ResetIcon
          onClick={() => dispatch({ type: "erase" })}
          className="w-20 h-20 cursor-pointer"
        />
      </div>
      <div className="h-[15%] text-[4vw] flex items-center justify-between divide-x-[1px] divide-[#fff000] text-[#fff000] ">
        <CountButton onClick={() => dispatch({ type: "decrease" })}>
          <MinusIcon className="h-10 w-10" />
        </CountButton>
        <CountButton onClick={() => dispatch({ type: "increase" })}>
          <PlusIcon className="h-10 w-10" />
        </CountButton>
      </div>
    </div>
  );
}
