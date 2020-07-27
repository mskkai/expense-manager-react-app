import React from "react";
import Header from "../../components/Header";
import { shallow } from "enzyme";

test("should render Header correctly using react test renderer", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
