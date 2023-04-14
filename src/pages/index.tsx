import CardLogo from "@/components/CardLogo";
import Input from "@/components/Input/Input";
import { ReactComponentElement } from "react";


export default function Home(): ReactComponentElement<any> {
  return (
    <div className="container-form">
      <main className="main-login-register">
        <CardLogo />
        <form className="form-login-register">
          <h1 className="h1-login-register">
            Welcome back
          </h1>
          <fieldset className="fields-login-register">
            <h2 className="h2-login-register">Login your account</h2>
            <Input
              type="email"
              name="emailInput"
              text="Email"
            />
            <Input
              type="password"
              name="passwordInput"
              text="Password"
            />
            <button className="button-login-register">
              Login
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  )
}
