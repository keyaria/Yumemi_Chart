import * as React from "react"
import * as renderer from "react-test-renderer"
import {cleanup, fireEvent, render} from '@testing-library/react';

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    // const tree = renderer
    //   .create(<Header siteTitle="Default Starter" />)
    //   .toJSON()
    // expect(tree).toMatchSnapshot()
    const {queryByLabelText, getByLabelText} = render(<Header />);
  
  })
})
