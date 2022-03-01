import { FC } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import { StepInput } from "../models/Step";
import "./EverBeenHacked.scss";

const RADIO_BUTTON_GROUP = "hacked-before-radio";
export const HackedBefore: FC<StepInput> = ({ userInput, setUserInput }) => {
  const setAnswer = (answer: boolean) => {
    setUserInput({ hackedBefore: answer });
  };

  return (
    <section id="hacked">
      <header>
        <div className="support">
          <img src={CustomerSupportUrl} />
          <p className="support-text">Have you ever been hacked before?</p>
        </div>
      </header>
      <main className="inputs">
        <label className="inputs-text">
          <input
            type="radio"
            name={RADIO_BUTTON_GROUP}
            onClick={() => setAnswer(true)}
            defaultChecked={userInput.hackedBefore}
          />
          <span>Yes, I've been hacked before</span>
        </label>
        <label className="inputs-text">
          <input
            type="radio"
            name={RADIO_BUTTON_GROUP}
            onClick={() => setAnswer(false)}
            defaultChecked={userInput.hackedBefore === false}
          />
          <span>No, I've never been hacked</span>
        </label>
      </main>
    </section>
  );
};
