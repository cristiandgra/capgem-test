/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import CartItem from "./cart-item.component";

describe("CartItem component", () => {
  let wrapper;
  let mockUseContext;
  const mockCartItem = {
    id: 1,
    storage: "16GB",
    color: "black",
    quantity: 2,
  };

  beforeEach(() => {
    mockUseContext = jest.fn(() => ({
      removeItem: jest.fn(),
    }));
    jest.spyOn(React, "useContext").mockImplementation(mockUseContext);
    wrapper = shallow(<CartItem cartItem={mockCartItem} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render CartItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
