import React, { Component } from "react";
import Image from "./Image";
import "./app.css";

export default class Carousel extends Component {
  render() {
    // src work from app.css
    const images = [
      {
        story: "",
        caption:
          "Hajida Dulla, 6, picks up her father Hami Dulla from work with her mother on October 12, 2017. Hajida currently goes to Hart Elementary School as first grader. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Mohamad Hussain walks home after finishing his work at 11:00 pm on September 12, 2017. Hussain says he never feels unsafe to walk home at night. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Mohamad Hussain, left, Zalar Mohamed, center, and Hami Dulla prepares lunch in the kitchen on July 28, 2017, at their one-bedroom apartment on East Rundberg Road in Austin, Texas. They are Rohingya people who originally live on the west coast of Myanmar. Since the Rohingya militants attacked police posts in August, more than 620,000 Rohingya people have fled to Bangladesh following the crackdown by the Burmese security forces. QILING WANG /AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption: ""
      },
      {
        story: "",
        caption:
          "Mohamad Hussain, right, waits for the bus on August 11, 2017. Every Friday, he would take the bus to pray in the nearby mosque before going to work at 1pm."
      },
      {
        story: "",
        caption:
          "Hami Dulla, left, and Mohamad Hussain, right, work at an Indian and Pakistani restaurant in North Austin on July 28, 2017. Dulla is the dishwasher while Hussain is the bread maker. Hussain says he works ten hours a day and six days a week. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Be Bareket coaxes her daughter Hajida to sleep while her son Hamzah watching cartoons on Youtube on October 11, 2017. Bareket used to work at the Austin–Bergstrom International Airport as food preparer but quit her job recently due to her health problems. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Hajida Dulla, 6, left, cries after her mother Be Bareket refuses to buy her the Halloween cupcakes at the Rundberg HEB on October 29, 2017. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Hajida Dulla, 6, puts on Thanaka, a traditional Burmese beauty paste, before going to school on October 18, 2017. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Hamzah Dulla, 8, center, plays phone games with his friends outside his apartment in Austin, Texas on September 19, 2017. The Rundberg neighborhood where he lives has a high population of refugees. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Hamzah Dulla, 8, gets off from the school bus on November 13, 2017. He says his favorite subject at school is science because he gets to do experiments. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Zalar Mohamed, 52, shows the scars on hiS right leg inflicted by the Burmese government soldiers on August 4, 2017. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Zalar Mohamed, 52, shows the photo of his wife who now lives in Bangladesh with their four children on September 22, 2017. They have been separated from each other for 14 years. Mohamed was once a fisherman in Sittwe, the capital of Rakhine State, Burma. QILING WANG / AMERICAN-STATESMAN"
      },
      {
        story: "",
        caption:
          "Hami Dulla, center, and Mohamad Hussain, right, check out the blood glucose meter that Zalar Mohamed, left, got from his medical doctor on November 11, 2017. Mohamed needs to monitor his blood glucose everyday due to his diabetes. QILING WANG / AMERICAN-STATESMAN"
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
