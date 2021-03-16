/* eslint-disable */

import * as React from "react"
import {render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {

    const {getByText} = render(<Header siteTitle={"人口構成"}/>);
    expect(getByText("人口構成")).toBeInTheDocument();

});
});
