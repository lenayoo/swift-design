import { CustomButton } from "./atoms/CustomButton";
import { CustomInput } from "./atoms/CustomInput";

const Header = () => {
  return (
    <form className="flex flex-row justify-center items-center pt-5 pb-3">
      <CustomInput />
      <CustomButton />
    </form>
  );
};

export default Header;
