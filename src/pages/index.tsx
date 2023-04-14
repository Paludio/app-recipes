import { FormEvent, ReactComponentElement, useState } from "react";
import CardLogo from "@/components/cardLogo/CardLogo";
import Input from "@/components/Inputs/Input";


export default function Home(): ReactComponentElement<any> {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const enableButton = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailInput) && passwordInput.length > 4) {
      return false;
    }
    return true;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('farei algo');
    
  }

  return (
    <div className="container-form">
      <main className="main-login-register">
        <CardLogo />
        <form
          className="form-login-register"
          onSubmit={(event) => handleSubmit(event)}
        >
          <h1 className="h1-login-register">
            Welcome back
          </h1>
          <fieldset className="fields-login-register">
            <h2 className="h2-login-register">Login your account</h2>
            <Input
              type="email"
              name="emailInput"
              text="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <Input
              type="password"
              name="passwordInput"
              text="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
              typeof="submit"
              className={
                enableButton()
                  ? "disable-button"
                  : "button-login-register"
              }
              disabled={enableButton()}
            >
              Login
            </button>
          </fieldset>
          <section className="account-management">
            <h3 className="new-account">Create Account</h3>
            <h3 className="new-password">Forgot Password?</h3>
          </section>
        </form>
      </main>
    </div>
  )
}
