import { FC, FormEvent, useEffect, useState } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import Up from "../assets/up.svg";
import { StepInput } from "../models/Step";
import "./InstagramUsername.scss";
import PageTitle from "./components/PageTitle/PageTitle";
import Question from "./components/Question/Question";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";






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

  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  const history = useHistory();

  function delayAndGo(e, path) {
    e.preventDefault();
    setTimeout(() => history.push(path), 3000);
  }

  return (    
    <section id="instagram-name"> 
    <motion.div 
      initial={{ opacity: 0, y: -100, }} 
      animate={{ opacity: 1, y: 0, }}
      exit={{ opacity: 0, y: 100 }}
      transition = {{ delay: 1, duration: 1}}
    >  
      <PageTitle
        title={    
            <div className="title-wrapper">
              <Link to='/'>
              <button>
                <img src={Up} alt="CustomerSupportImg" />
              </button>
              </Link>       
            <div>
              <p className="title-text">
                Were you hacked before? <span>{userInput.hackedBefore ? "Yes" : "No"}</span>
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
            <p className="question-text">
              What is your Instagram username?
            </p>
          </div>
        }
      />
      <div className="form-wrapper">
        <form className="instagram-form" onSubmit={submitForm}>
          <Box
          component="form"
          sx={{
            '& > :not(style)': { marginLeft: 3, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          >
            <TextField             
            id={INPUT_ID} 
            label="@ USERNAME" 
            variant="outlined" 
            />
          </Box>
          <Link to='/is-this-you' className="instagram-btn" onClick={(e) => delayAndGo(e, "/is-this-you")} type="submit">Next</Link>                              
        </form>
      </div>
      </motion.div>
     </section>
  );
};
