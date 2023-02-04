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

  it("should render Breadcrumb component with product name", () => {
    expect(wrapper.find("#breadcrumb").text()).toEqual(mockProduct.name);
  });

  it("should render Breadcrumb component with product name", () => {
    wrapper = shallow(<Breadcrumb product={mockProduct} />);
    expect(wrapper.find("#breadcrumb").text()).toEqual(mockProduct.name);
  });
});
