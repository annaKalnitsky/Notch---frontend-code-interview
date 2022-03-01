import { useState } from "react";
import { UserInputs } from "./models/UserInputs";
import { HackedBefore } from "./steps/EverBeenHacked";
import { InstagramUsername } from "./steps/InstagramUsername";
import { IsThisYou } from "./steps/IsThisYou";
import Header from "./steps/components/Header/Header";

function App() {
  const [userInput, setUserInput] = useState<UserInputs>({});

  return (
    <div className="mainWrapper">
      <Header />
      <main>
        <HackedBefore userInput={userInput} setUserInput={setUserInput} />
        {/* <InstagramUsername userInput={userInput} setUserInput={setUserInput} /> */}
        {/* <IsThisYou userInput={userInput} setUserInput={setUserInput} />
        Answers: {JSON.stringify(userInput)} */}
      </main>
    </div>
  );
}

export default App;
