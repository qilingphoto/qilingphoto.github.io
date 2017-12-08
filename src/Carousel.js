import React, { Component } from "react";
import Image from "./Image";
import "./app.css";

export default class Carousel extends Component {
  render() {
    // src work from app.css
    const images = [
      {
        story:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque urna a lobortis pharetra. Etiam finibus sem non ligula fermentum, quis pulvinar felis facilisis. Nam sodales sit amet tellus nec auctor.",
        caption:
          "The state-run psychiatric hospital here in Barquisimeto, Venezuela, has long been a forgotten place, filled with forgotten people."
      },
      {
        story:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam placerat ante eget nulla fringilla, ac tristique ante cursus. Praesent pretium sed tortor eu consequat. Ut semper enim ac ipsum dictum dictum.",
        caption:
          "The state-run psychiatric hospital here in Barquisimeto, Venezuela, has long been a forgotten place, filled with forgotten people."
      },
      {
        story:
          "Nullam imperdiet molestie orci sed vulputate. Integer vehicula sit amet sapien a facilisis. Proin iaculis ex id nibh maximus cursus et eu leo. Aliquam erat volutpat. Nam nec tellus bibendum, porttitor magna eu, interdum neque.",
        caption:
          "The state-run psychiatric hospital here in Barquisimeto, Venezuela, has long been a forgotten place, filled with forgotten people."
      }
    ];

    return images.map((image, index) => (
      <Image
        caption={image.caption}
        story={image.story}
        key={index}
        index={index}
      />
    ));
  }
}
