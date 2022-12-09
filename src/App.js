import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fName, Age, Sex, Proff } from "./state/action-creators/action";

function App() {
  const [value, setValue] = useState("");
  const [age1, setAge1] = useState("");
  const [sex1, setSex1] = useState("");
  const [proff1, setProff1] = useState("");

  const FirstName = useSelector((state) => state.firstName);
  const myAge = useSelector((state) => state.age);
  const mySex = useSelector((state) => state.sex);
  const myProff = useSelector((state) => state.proff);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <div className="sub-container">
          <div className="input">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button onClick={() => dispatch(fName(value))}>Dispatch</button>
          <div className="text-area">{FirstName}</div>
        </div>

        <div className="sub-container">
          <div className="input">
            <input value={age1} onChange={(e) => setAge1(e.target.value)} />
          </div>
          <button onClick={() => dispatch(Age(age1))}>Dispatch</button>
          <div className="text-area">{myAge}</div>
        </div>

        <div className="sub-container">
          <div className="input">
            <input value={sex1} onChange={(e) => setSex1(e.target.value)} />
          </div>
          <button onClick={() => dispatch(Sex(sex1))}>Dispatch</button>
          <div className="text-area">{mySex}</div>
        </div>

        <div className="sub-container">
          <div className="input">
            <input value={proff1} onChange={(e) => setProff1(e.target.value)} />
          </div>
          <button onClick={() => dispatch(Proff(proff1))}>Dispatch</button>
          <div className="text-area">{myProff}</div>
        </div>

        {/*   <div className="sub-container">
          <div className="input">
            <input value={age1} onChange={(e) => setAge1(e.target.value)} />
          </div>
          <button onClick={() => dispatch(Age(age1))}>Dispatch</button>
          <div className="text-area">{myAge}</div>
        </div>
          <div className="sub-container">
          <div className="input">
            <input value={sex1} onChange={(e) => setSex1(e.targrt.value)} />
          </div>
          <button onClick={() => dispatch(sex)}>Dispacth Gender</button>
          <div className="text-area">{sex}</div>
        </div>
       

        <div className="sub-container">
          <div className="input">
            <input
             
              value={proff1}
              onChange={(e) => setProff1(e.targrt.value)}
            />
          </div>
          <button onClick={() => dispatch(proff)}>Dispacth Proffesion</button>
          <div className="text-area">{proff}</div>
        </div> */}
      </div>
      ;
      {/* <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button> */}
    </div>
  );
}

export default App;
