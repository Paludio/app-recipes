import { ReactComponentElement, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import IInput from "./interface/IInput";

export default function Input (props: IInput): ReactComponentElement<any> {
  const [seePassword, setSeePassword] = useState(false);
  const verifyType = props.type === "password";

  const type = () => {
    if (props.type !== "password") {
      return props.type;
    }
    if (verifyType && seePassword) {
      return "text";
    }
    if (verifyType && !seePassword) {
      return "password";
    }
  }

  return (
    <div className="form-input">
      <label htmlFor={`input-${props.name}`} className="label-input">
        <input
          type={type()}
          autoComplete="off"
          required
          value={props.value}
          onChange={props.onChange}
        />
        <span className="content-name">
            {props.text}
        </span>
      </label>
      {
        verifyType && (
          <button
            type="button"
            className="see-password"
            onClick={() => setSeePassword(!seePassword)}
          >
            {
              !seePassword
              ? (
                <AiOutlineEyeInvisible
                  size={21}
                  color="var(--color-dark-orange)"
                />
              )
              : (
                  <AiOutlineEye
                    size={21}
                    color="var(--color-dark-orange)"
                  />
                )
            }
          </button>
        )
      }
    </div>
  )
}