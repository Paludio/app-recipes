import Image from "next/image";
import { ReactComponentElement } from "react";

import logoPic from '../images/logo-alt.png';

export default function CardLogo (): ReactComponentElement<any> {
  return (
    <section className="section-logo-alt">
      <Image src={logoPic} alt="logo" className="pic-logo-alt"/>
      <h3>
        Application made by Pablo S. Peixoto.
      </h3>
    </section>
  )
}
