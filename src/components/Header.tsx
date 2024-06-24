import { useState } from "react";
import { CustomButton } from "./atoms/CustomButton";
import { CustomInput } from "./atoms/CustomInput";

const Header = ({ updateList }: { updateList: (value: string) => void }) => {
  const [purpose, setPurpose] = useState<string>("");

  const purposeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurpose(e.target.value);
  };

  const setHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateList(purpose);
    setPurpose("");
  };

  return (
    <form
      className="flex flex-col justify-center items-center pt-5 pb-3"
      onSubmit={setHandler}
    >
      <CustomInput changeHandler={purposeHandler} value={purpose} />
      <CustomButton />
    </form>
  );
};

export default Header;
