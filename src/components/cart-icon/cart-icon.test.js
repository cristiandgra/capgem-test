/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import CartIcon from "./cart-icon.component";

describe("CartIcon component", () => {
  let wrapper = shallow(<CartIcon />);

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
