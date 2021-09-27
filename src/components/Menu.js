import "./EnglishTest.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";


function Menu() {
  const {setGameState, setUserName} = useContext(
    GameStateContext
  );

  const handleChange = (e) =>{
    setUserName(e.target.value);
	}


  return (
    <div className="Quiz-Menu">
      <label className="text-capitalize">Write your name</label>
      <form>
        <input
          type="text"
          placeholder="Your email"
          onChange={handleChange}
          required
        />
        <button
          className="text-uppercase"
          type="submit"
          onClick={()=>setGameState('playing')}
        >
        Start Test
        </button>
      </form>
    </div>
  );
}

export default Menu;