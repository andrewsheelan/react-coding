import React from "react";
import renderer from "react-test-renderer";
import Gallery from "../Gallery";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  gallery: {
    loading: false,
    errors: {
      show: false,
      message: "",
    },
    data: {
      photos: [],
    },
  },
};
const store = mockStore(initialState);

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Gallery />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
