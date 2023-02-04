/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Breadcrumb from "./breadcrumb.component";

describe("Breadcrumb component", () => {
  let wrapper;
  const mockProduct = { id: "1", name: "Test Product" };

  beforeEach(() => {
    wrapper = shallow(<Breadcrumb product={mockProduct} />);
  });

  it("should render Breadcrumb component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
