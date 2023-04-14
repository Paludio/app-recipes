import Image from "next/image";
import { ReactComponentElement } from "react";
import logoPic from '../images/logo-alt.png';

export default function Home(): ReactComponentElement<any> {
  return (
    <div className="container-form">
      <form className="form-login-register">
        <section className="section-logo-alt">
          <Image src={logoPic} alt="logo" className="pic-logo-alt"/>
          <h3>
            Application made by Pablo S. Peixoto.
          </h3>
        </section>
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
