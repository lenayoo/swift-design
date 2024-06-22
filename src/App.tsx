import { useState } from "react";
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container } from "./components/Container";

function App() {
  const [containerList, setContainerList] = useState<JSX.Element[]>([]);
  const addContainer = () => {
    console.log("is clicked");
    setContainerList((prevContainer) => [...prevContainer, <Container />]);
  };
  console.log(containerList);

  return (
    <>
      <div className="pb-2">
        <h1 className="text-3xl font-bold underline">Hello Lena!</h1>
        <Container />
      </div>
      <div onClick={addContainer}>
        <AddCircleIcon fontSize="large" color="action" />
      </div>
      <Container />
      <div>{containerList}</div>
    </>
  );
}

export default App;
