/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

import CartDropdown from "./cart-dropdown.component";

describe("CartDropdown component", () => {
  let wrapper;
  beforeEach(() => {
    const mockUseContext = jest.fn();
    mockUseContext.mockReturnValue({
      cart: [
        { id: 1, storage: "64GB", color: "black", quantity: 1 },
        { id: 2, storage: "128GB", color: "red", quantity: 1 },
      ],
      removeItem: jest.fn(),
    });
    jest.spyOn(React, "useContext").mockImplementation(mockUseContext);
    wrapper = shallow(<CartDropdown />);
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
