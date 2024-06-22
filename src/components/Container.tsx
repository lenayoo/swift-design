import { useState } from "react";
import Header from "./Header";

export const Container = () => {
  const [newList, setNewList] = useState<string>("");

  const listHandler = (purpose: string) => {
    setNewList(purpose);
  };

  return (
    <div className="w-[450px] h-[200px] bg-blue border border-gray-300 rounded shadow-lg mt-5 mb-3s">
      <Header updateList={listHandler} />
      <h1>{newList}</h1>
    </div>
  );
};
