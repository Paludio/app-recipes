import { ReactComponentElement } from "react";
import IInput from "./interface/IInput";

export default function Input (props: IInput): ReactComponentElement<any> {
  return (
    <div className="form-input">
      <label htmlFor={`input-${props.name}`} className="label-input">
        <input type={props.type} autoComplete="off" required/>
        <span className="content-name">
            {props.text}
        </span>
      </label>
    </div>
  )
}