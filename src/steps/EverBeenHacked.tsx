import { FC, useState } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import { StepInput } from "../models/Step";
import "./EverBeenHacked.scss";
import { Link } from "react-router-dom";
import "animate.css";
import { motion } from "framer-motion";

const RADIO_BUTTON_GROUP = "hacked-before-radio";
export const HackedBefore: FC<StepInput> = ({ userInput, setUserInput }) => {
  const setAnswer = (answer: boolean) => {
    setUserInput({ hackedBefore: answer });
  };
  return (
    <section>
    <motion.div 
    initial={{ opacity: 0, y: 200 }} 
    animate={{ opacity: 1, y: 0}}
    exit={{ opacity: 0, y: -200 }}
    transition = {{ duration: 1}}
>
      <header>
        <div className="support">
          <img src={CustomerSupportUrl} />
          <p className="support-text">Have you ever been hacked before?</p>
        </div>
      </header>
      <main className="inputs">
        <form>
          <label className="inputs-text">
            <Link to="/instagram-username">
              <input
                className="animate__animated animate__zoomIn animate__delay-3s"
                type="radio"
                name={RADIO_BUTTON_GROUP}
                onClick={() => setAnswer(true)}
                defaultChecked={userInput.hackedBefore}
              />
            </Link>
            <span>Yes, I've been hacked before</span>
          </label>
          <label className="inputs-text">
            <Link to="/instagram-username">
              <input
                className="radio-style"
                type="radio"
                name={RADIO_BUTTON_GROUP}
                onClick={() => setAnswer(false)}
                defaultChecked={userInput.hackedBefore === false}
              />
            </Link>
            <span>No, I've never been hacked</span>
          </label>
        </form>
      </main>
      </motion.div>
    </section>
  );
};
