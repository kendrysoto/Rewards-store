import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from '../../components/Header';


Enzyme.configure({ adapter: new Adapter() });


it('it should show a h1 tag that says Electronics', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<h1>Electronics</h1>)).toBe(true);
});

it("should have an `hr` element", () => {
    const wrapper = shallow(<Header />);
    const hr = wrapper.find("hr").first();
    expect(wrapper.containsMatchingElement(<hr />)).toBe(
        true
    );
});

it("It should show a li tag that says Sort by:", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<li>Sort by: </li>)).toBe(
        true
    );
});