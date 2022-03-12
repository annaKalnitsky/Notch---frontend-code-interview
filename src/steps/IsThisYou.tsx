import { FC } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import profilePictureUrl from "../assets/profilepic.png";
import { StepInput } from "../models/Step";
import Up from "../assets/up.svg";
import PageTitle from "./components/PageTitle/PageTitle";
import Question from "./components/Question/Question";
import "./IsThisYou.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RADIO_BUTTON_GROUP = "is-this-you";
export const IsThisYou: FC<StepInput> = ({ userInput, setUserInput }) => {
  const setAnswer = (answer: boolean) => {
    setUserInput({ isThisYou: answer });
  };

  return (
    <section id="isThisYou">   
    <motion.div 
      initial={{ opacity: 0, y: -100, }} 
      animate={{ opacity: 1, y: 0, }}
      exit={{ opacity: 0, y: 100 }}
      transition = {{ delay: 1, duration: 1}}
    >
   
      <PageTitle
        title={
          <div className="title-wrapper">
            <Link to='/instagram-username'>
            <button>
              <img src={Up} alt="CustomerSupportImg"/>
            </button>
            </Link>
            <div>
              <p className="title-text">
                What is your Instagram username?<span>@ tomcruise</span>
              </p>
            </div>
          </div>
        }
      />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 200 }} 
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: -200 }}
      transition = {{ duration: 1}}
    >
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
          <span>tomcruise{userInput.instagramUsername}</span>
        </div>
        <div id="is-this-you-questions">
          <label className="questions-btn">
            <Link className="radio-link"  to=''>
            <input
              type="radio"
              className="custom-radio"
              name={RADIO_BUTTON_GROUP}
              onClick={() => setAnswer(true)}
              defaultChecked={userInput.isThisYou}
            />
            Yes, that's me!</Link>
          </label>
          <label>
            <Link className="radio-link black" to=''>
            <input
              type="radio"
              className="custom-radio"
              name={RADIO_BUTTON_GROUP}
              onClick={() => setAnswer(false)}
              defaultChecked={userInput.isThisYou === false}
            />
            No, that's somebody else</Link>            
          </label>
        </div>
      </main>    
    </motion.div>
    </section>
  );
};
