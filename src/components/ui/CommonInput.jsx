import { InputText } from "primereact/inputtext";

const CommonInput = ({
  value,
  onChange,
  style = {},
  className = "",
  ...rest
}) => {
  return (
    <InputText
      type="text"
      value={value}
      onChange={onChange}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default CommonInput;