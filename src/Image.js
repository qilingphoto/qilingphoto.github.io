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
    // if (isVisible) {
    //   document
    //     .getElementsByClassName("focused image-container")[0]
    //     .scrollIntoView();
    //   this.focusedDiv.scrollIntoView();
    // }
  }

  render() {
    return (
      <VisibilitySensor
        scrollCheck
        scrollThrottle={100}
        partialVisibility
        intervalDelay={0}
        offset={{
          top: 324,
          bottom: 360
        }}
        onChange={this.onChange}
      >
        <div className="image-visibility-sensor">
          <div
            className={
              (this.state.isVisible ? "focused" : "blurred") +
              " image-container"
            }
            ref={div => {
              this.focusedDiv = div;
            }}
          >
            <div className={"image bg" + this.props.index} />
            <p className="image-caption">{this.props.caption}</p>
          </div>
          <p
            className={
              (this.state.isVisible ? "focused" : "blurred") + " image-story"
            }
          >
            {this.props.story}
          </p>
        </div>
      </VisibilitySensor>
    );
  }
}
