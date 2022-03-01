import { FC, FormEvent } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import Up from "../assets/up.svg";
import { StepInput } from "../models/Step";
import "./InstagramUsername.scss";
import PageTitle from "./components/PageTitle/PageTitle";
import Question from "./components/Question/Question";

const INPUT_ID = "ig-username-input";
export const InstagramUsername: FC<StepInput> = ({
  userInput,
  setUserInput,
}) => {
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    const {
      "ig-username-input": { value },
    } = event.target as unknown as { "ig-username-input": { value: string } };
    setUserInput({ instagramUsername: value });
    event.preventDefault();
  };

  return (
    <section id="instagram-name">
      <PageTitle
        title={
          <div className="title-wrapper">
            <button>
              <img src={Up} alt="CustomerSupportImg" />
            </button>
            <div>
              <p className="title-text">
                Were you hacked before? <span>No</span>
              </p>
            </div>
          </div>
        }
      />
      <Question
        question={
          <div className="question">
            <img src={CustomerSupportUrl} alt="CustomerSupportImg" />
            <p className="question-text">
              Roee, What is your Instagram username?
            </p>
          </div>
        }
      />
      <div className="form-wrapper">
        <form className="instagram-form" onSubmit={submitForm}>
          <input
            className="instagram-input"
            placeholder="@ USERNAME"
            type="text"
            id={INPUT_ID}
          />
          <input className="instagram-btn" type="submit" value="Next" />
        </form>
      </div>
    </section>
  );
};
