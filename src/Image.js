import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./app.css";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.setState({ isVisible: isVisible });
  }

  render() {
    return (
      <VisibilitySensor
        scrollCheck
        /*scrollThrottle={100}*/
        partialVisibility
        intervalDelay={80}
        offset={{ top: 360, bottom: 360 }}
        onChange={this.onChange}
      >
        <div className="image-visibility-sensor">
          {/*}<img
            src={this.props.src}
            alt="qwp"
            className={this.state.isVisible ? "focused" : "blurred"}
          />*/}
          <div
            className={
              (this.state.isVisible ? "focused" : "blurred") +
              " image-container"
            }
          >
            <div className={"image bg-" + this.props.index} />
          </div>
          <p
            className={
              (this.state.isVisible ? "focused" : "blurred") + " image-caption"
            }
          >
            lol who is this doggie!!
          </p>
        </div>
      </VisibilitySensor>
    );
  }
}
