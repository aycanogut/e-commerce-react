import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

export const mockStore = configureMockStore([thunk]);

configure({ adapter: new Adapter() });
