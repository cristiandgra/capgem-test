/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";

import InputSearch from "./input-search.component";

describe("InputSearch", () => {
  it("should render", () => {
    const wrapper = mount(<InputSearch />);
    expect(wrapper).toBeTruthy();
  });

  it("should render the placeholder", () => {
    const wrapper = mount(<InputSearch placeholder="Search" />);
    expect(wrapper.prop("placeholder")).toEqual("Search");
  });

  it("should render the onChange", () => {
    const wrapper = mount(<InputSearch onChange={() => {}} />);
    expect(wrapper.prop("onChange")).toBeTruthy();
  });
});
