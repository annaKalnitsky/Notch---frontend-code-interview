
import { FC, useState } from "react";
import CustomerSupportUrl from "../assets/customerSupport.png";
import { StepInput } from "../models/Step";
import "./EverBeenHacked.scss";
import { Link } from "react-router-dom";
import 'animate.css'; 
import SyncLoader from "react-spinners/SyncLoader";


const RADIO_BUTTON_GROUP = "hacked-before-radio";
export const HackedBefore: FC<StepInput> = ({ userInput, setUserInput }) => {
  const setAnswer = (answer: boolean) => {
    setUserInput({ hackedBefore: answer });
  };

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState("#ffffff");
  
  return (
    <section>
      <header >
        <div className="support">
          <img src={CustomerSupportUrl} />
          <p className="support-text">Have you ever been hacked before?</p>
        </div>
      </header>
      <main className="inputs">
        <form>
        <label className="inputs-text">        
        
          <input
          value={'#000'}
          onChange={(input) => setColor(input.target.value)} 
          className="animate__animated animate__zoomIn animate__delay-3s"            
            type="radio"
            name={RADIO_BUTTON_GROUP}
            onClick={() => setAnswer(true)}
            defaultChecked={userInput.hackedBefore}          
          />          
          
          <span onClick={handleClick}>           
            Yes, I've been hacked before</span>
        </label>
        <label className="inputs-text">
          <Link to='/instagram-username'>
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
    </section>
  );
};



// import { FC, useState } from "react";
// import CustomerSupportUrl from "../assets/customerSupport.png";
// import "./EverBeenHacked.scss";
// import { StepInput } from "../models/Step";
// import 'animate.css'; 



// export const HackedBefore: FC<StepInput> = () => {

//   const [pageCount, setPageCount] = useState(0);


//   return (
//     <section>
//       {pageCount === 0 && <div>Page 0</div>}
//       {pageCount === 1 && <div>Page 1</div>}
//       {pageCount === 2 && <div>Page 2</div>}
//       {pageCount > 0 && (
//         <button noClick ={() => setPageCount(pageCount - 1)}>Prev</button>
//       )}
//       {pageCount < 2 && (
//         <button noClick ={() => setPageCount(pageCount + 1)}>Next</button>
//       )}



//       <header >
//         <div className="support">
//           <img src={CustomerSupportUrl} />
//           <p className="support-text">Have you ever been hacked before?</p>
//         </div>
//       </header>
//       <main className="inputs">
//         <form>
//         <label className="inputs-text">                 
//           <input 
//           className="animate__animated animate__zoomIn animate__delay-3s"            
//             type="radio"
//           />
                           
//           <span>Yes, I've been hacked before</span>
          
//         </label>
//         <label className="inputs-text">          
//           <input
//             className="radio-style"
//             type="radio"
//           />         
//           <span>No, I've never been hacked</span>
//         </label>
//         </form>
//       </main>
//     </section>
//   );
// };
