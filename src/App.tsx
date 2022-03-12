import { useState } from "react";
import { UserInputs } from "./models/UserInputs";
import { HackedBefore } from "./steps/EverBeenHacked";
import { InstagramUsername } from "./steps/InstagramUsername";
import { IsThisYou } from "./steps/IsThisYou";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./steps/components/Header/Header";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { AnimatePresence } from "framer-motion";



const theme = createTheme({
  palette: {
    primary: {
      main: '#CB5CFF'
    }
  }
})

function App() {
  const location = useLocation();
  const [userInput, setUserInput] = useState<UserInputs>({});
 
  return (
    <>
    <AnimatePresence>
    <ThemeProvider theme={theme}>
      <Header/>
      <Routes location={location} key={location.pathname}>       
        <Route path='/' element={<HackedBefore userInput={userInput} setUserInput={setUserInput} />}/> 
        <Route path='/instagram-username' element={<InstagramUsername userInput={userInput} setUserInput={setUserInput}/>}/>
        <Route path='/is-this-you' element={<IsThisYou userInput={userInput} setUserInput={setUserInput} />}/>        
        Answers: {JSON.stringify(userInput)}
      </Routes>  
      </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default App;

