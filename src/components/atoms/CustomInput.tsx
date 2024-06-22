import { TextField } from "@mui/material";

export const CustomInput = ({
  changeHandler,
  value
}: {
  changeHandler: React.ChangeEventHandler;
  value: string;
}) => {
  return (
    <div className="mr-5">
      <TextField
        label="what is your 100days for?"
        style={{ width: 300 }}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};
