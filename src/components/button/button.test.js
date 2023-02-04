/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Button from "./button.component";

describe("Button component", () => {
  let wrapper = shallow(<Button />);

  it("should render Button component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Button component with props", () => {
    const mockProps = {
      children: "Button",
      onClick: () => {},
      type: "button",
      className: "btn btn-primary",
      disabled: false,
    };
    wrapper = shallow(<Button {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Button component with props disabled", () => {
    const mockProps = {
      children: "Button",
      onClick: () => {},
      type: "button",
      className: "btn btn-primary",
      disabled: true,
    };
    wrapper = shallow(<Button {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
