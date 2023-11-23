import { HTMLProps } from "react";
import IProps from "./IProps";

type BaseProps = HTMLProps<HTMLBaseElement> & IProps;
const Base = (props: BaseProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      fill={props.colorFill}
    >
      {props.children}
    </svg>
  );
};

Base.defaultProps = {
  width: "26",
  height: "26",
  viewBox: "0 0 30 30",
  colorFill: "#FFCB21",
};

export default Base;
