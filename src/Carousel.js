import React, { Component } from "react";
import Image from "./Image";
import "./app.css";

export default class Carousel extends Component {
  render() {
    const images = [
      {
        src:
          "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/23471954_2066325040262331_724211497049084082_n.jpg?oh=5a5950471b79a0e79dcabd669f90c923&oe=5A9BE5E6"
      },
      {
        src:
          "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/23471954_2066325040262331_724211497049084082_n.jpg?oh=5a5950471b79a0e79dcabd669f90c923&oe=5A9BE5E6"
      },
      {
        src:
          "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/23471954_2066325040262331_724211497049084082_n.jpg?oh=5a5950471b79a0e79dcabd669f90c923&oe=5A9BE5E6"
      }
    ];

    return images.map((image, index) => (
      <Image src={image.src} key={index} index={index} />
    ));
  }
}
