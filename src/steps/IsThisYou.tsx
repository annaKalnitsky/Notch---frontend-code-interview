import { FC } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import profilePictureUrl from "../assets/profilepic.png";
import { StepInput } from "../models/Step";
import Up from "../assets/up.svg";
import PageTitle from "./components/PageTitle/PageTitle";
import Question from "./components/Question/Question";
import "./IsThisYou.scss";

const RADIO_BUTTON_GROUP = "is-this-you";
export const IsThisYou: FC<StepInput> = ({ userInput, setUserInput }) => {
  const setAnswer = (answer: boolean) => {
    setUserInput({ isThisYou: answer });
  };

  return (
    <section id="isThisYou">
      <PageTitle
        title={
          <div className="title-wrapper">
            <button>
              <img src={Up} alt="CustomerSupportImg" />
            </button>
            <div>
              <p className="title-text">
                Roee, What is your Instagram username?<span>@ tomcruise</span>
              </p>
            </div>
          </div>
        }
      />
      <Question
        question={
          <div className="question">
            <img src={CustomerSupportUrl} alt="CustomerSupportImg" />
            <p className="question-text">Is this you?</p>
          </div>
        }
      />
      <main>
        <div id="profile-details">
          <img src={profilePictureUrl} />
          <span>{userInput.instagramUsername}</span>
        </div>
        <div id="is-this-you-questions">
          <label className="questions-btn">
            <input
              type="radio"
              className="custom-radio"
              name={RADIO_BUTTON_GROUP}
              onClick={() => setAnswer(true)}
              defaultChecked={userInput.isThisYou}
            />
            Yes, that's me!
          </label>
          <label>
            <input
              type="radio"
              className="custom-radio"
              name={RADIO_BUTTON_GROUP}
              onClick={() => setAnswer(false)}
              defaultChecked={userInput.isThisYou === false}
            />
            No, that's somebody else
          </label>
        </div>
      </main>
    </section>
  );
};
