import {ChangeEvent} from "react";
export default interface IInput {
  type: string;
  name: string;
  text: string;
  value: string;  
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}