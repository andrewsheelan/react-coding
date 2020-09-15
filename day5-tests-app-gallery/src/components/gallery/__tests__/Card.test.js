import React from 'react'
const { render } = require("@testing-library/react");
const { default: Card } = require("../Card");

it("renders correctly", () => {
  const { queryByText } = render(<Card>child</Card>);
  expect(queryByText("child")).toBeTruthy()
});
