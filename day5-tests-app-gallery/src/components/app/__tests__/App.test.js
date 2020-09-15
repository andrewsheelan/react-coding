import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";
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
  const { queryByTestId, } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(queryByTestId("app")).toBeTruthy();

  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
