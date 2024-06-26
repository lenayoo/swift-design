import { useState } from "react";
import Header from "./Header";
import Countdown from "./Countdown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../App.css";

export const Container = () => {
  const [newList, setNewList] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const listHandler = (purpose: string) => {
    setNewList(purpose);
  };

  const removeHandler = () => {
    console.log("remove is clicked");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="w-[310px] min-h-[200px] bg-blue border border-gray-300 rounded shadow-lg mt-5 mb-1 p-5 relative card">
        <div className="absolute -top-3 -right-3" onClick={removeHandler}>
          <HighlightOffIcon fontSize="large" color="action" />
        </div>
        <Header updateList={listHandler} />
        <h1>{newList}</h1>
        {newList && <Countdown />}
      </div>
    )
  );
};
