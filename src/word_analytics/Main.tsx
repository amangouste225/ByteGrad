import { useEffect, useReducer } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Table from "./components/Table";

const initialValues = {
  words: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "words count":
      return {
        ...state,
        words: action.payload,
      };
    case "reset":
      return initialValues;
    default:
      throw new Error("Error nothing to show");
  }
}

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const { words, characters, facebook, instagram } = state;

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Space") {
        words.length + 1;
      }
    }

    const area = document.querySelector("textarea");
    area?.addEventListener("keydown", handleKeyDown);
  }, [words]);

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-backGround">
      <Header />
      <Table>
        <Container
          words={words}
          characters={characters}
          facebook={facebook}
          instagram={instagram}
          dispatch={dispatch}
        />
      </Table>
    </div>
  );
}
