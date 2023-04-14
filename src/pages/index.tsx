import CardLogo from "@/components/CardLogo";
import { ReactComponentElement } from "react";


export default function Home(): ReactComponentElement<any> {
  return (
    <div className="container-form">
      <form className="form-login-register">
        <CardLogo />
        <fieldset className="fields-login-register">
          <label htmlFor="input-email">
            <span>Email</span>
            <input type="email" />
          </label>
          <label htmlFor="input-password">
            <span>Password</span>
            <input type="password" />
          </label>
        </fieldset>
      </form>
    </div>
  )
}
