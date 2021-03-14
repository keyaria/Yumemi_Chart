/* eslint-disable */

import * as React from "react"
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {

    const {queryByText, getByText} = render(<Header />);
    expect(queryByText("人口構成")).toBeInTheDocument();

  });
});
