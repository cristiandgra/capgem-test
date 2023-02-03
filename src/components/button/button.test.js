/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Button from "./button.component";

describe("Button component", () => {
  let wrapper = shallow(<Button />);

  it("should render Button component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
