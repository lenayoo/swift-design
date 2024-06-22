import { useState } from "react";
import { CustomButton } from "./atoms/CustomButton";
import { CustomInput } from "./atoms/CustomInput";

const Header = () => {
  const [purpose, setPurpose] = useState<string>("");

  const purposeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurpose(e.target.value);
  };

  return (
    <form className="flex flex-row justify-center items-center pt-5 pb-3">
      <CustomInput changeHandler={purposeHandler} value={purpose} />
      <CustomButton />
    </form>
  );
};

export default Header;
