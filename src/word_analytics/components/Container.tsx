import {
  GrPowerReset,
  GrDownload,
  GrTumblr,
  GrAppleAppStore,
  GrClose,
} from "react-icons/gr";

const icons = [
  { icon: GrDownload },
  { icon: GrPowerReset },
  { icon: GrTumblr },
  { icon: GrAppleAppStore },
  { icon: GrClose },
];

export default function Container({
  words,
  characters,
  facebook,
  instagram,
  dispatch,
}) {
  // Count number of Words
  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }

  // Count number of sentences
  const countSentences = (text) => {
    return text.split(/[.?!]/g).filter(Boolean).length;
  };

  // Count number of paragraph

  const countParagraphs = (text) => {
    return text.split(/\r?\n|\r/).length;
  };

  // Function icons

  const handleButton = (icon) => {
    if (icon === GrPowerReset) {
      dispatch({ type: "reset" });
    }

    alert("Resetting");
  };

  return (
    <div className="grid grid-cols-8 grid-rows-6 bg-backGround w-full h-full">
      <div className="col-span-1 mx-10 my-1 row-span-3">
        <div className="w-full h-full border-[1px] border-black overflow-hidden divide-black flex flex-col justify-center items-center divide-y-[1px] ">
          <span className="w-full h-full flex justify-between items-center flex-col">
            {icons.map((icon, i) => (
              <span
                onClick={() => handleButton(icon.icon)}
                key={i}
                className="hover:bg-blue-500 bg-white w-full flex-1 flex justify-center items-center border"
              >
                <icon.icon size={20} />
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="col-span-5 row-span-4 my-5 bg-white  border-black border-[1px] px-2">
        <div className="cards w-full border-b-[1px] border-b-black min-h-28 pb-5 grid grid-cols-5 text-center items-center divide-x-[1px] divide-black">
          <div>
            <h2>characters</h2>
            <span>{!words ? 0 : words.length}</span>
          </div>
          <div>
            <h2>words</h2>
            <span>{countWords(words)}</span>
          </div>
          <div>
            <h2>sentences</h2>
            <span>{countSentences(words)}</span>
          </div>
          <div>
            <h2>paragraphs</h2>
            <span>{!words ? 0 : countParagraphs(words)} </span>
          </div>
          <div>
            <h2>pages</h2>
            <span>0</span>
          </div>
        </div>
        <div className="h-[10vw] my-1">
          <textarea
            value={words}
            onChange={(e) =>
              dispatch({
                type: "words count",
                payload: e.target.value,
              })
            }
            placeholder="Type or paste your text"
            className="w-full h-full p-5 font-medium font-rob text-black"
          ></textarea>
        </div>
      </div>
      <div className="col-span-2 bg-white row-span-3 mx-10 my-2">
        <div className="w-full  border-[1px] border-black">
          <div className="w-full flex flex-col items-center justify-center p-5 border uppercase ">
            <span className="font-bold">instagram</span>
            <span className="inline-block text-xl font-semibold text-blue-500">
              {280 - words.length}
            </span>
          </div>
          <div className="w-full flex flex-col items-center justify-center p-5 border uppercase ">
            <span className="font-bold">facebook</span>
            <span className="inline-block text-xl font-semibold text-blue-500">
              {2200 - words.length}
            </span>
          </div>
          <div className="w-full flex flex-col items-center justify-center p-5 border uppercase ">
            <span className="font-bold">twitter</span>
            <span className="inline-block text-xl font-semibold text-blue-500">
              {50 - words.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
