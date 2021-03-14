/* eslint-disable */ 
import * as React from "react"
import * as renderer from "react-test-renderer"

import { render, fireEvent, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

import { StaticQuery } from "gatsby"
import Index, {IndexPage} from "../../pages/index"
import Graph from "../graph";
global.fetch = require("node-fetch");

describe("Index", () => {
  it("renders the checkboxes", () => {

    const data = {
      prefecturesField: {
        prefData: "[{\"prefCode\":1,\"prefName\":\"北海道\"},{\"prefCode\":2,\"prefName\":\"青森県\"},{\"prefCode\":3,\"prefName\":\"岩手県\"},{\"prefCode\":4,\"prefName\":\"宮城県\"},{\"prefCode\":5,\"prefName\":\"秋田県\"},{\"prefCode\":6,\"prefName\":\"山形県\"},{\"prefCode\":7,\"prefName\":\"福島県\"},{\"prefCode\":8,\"prefName\":\"茨城県\"},{\"prefCode\":9,\"prefName\":\"栃木県\"},{\"prefCode\":10,\"prefName\":\"群馬県\"},{\"prefCode\":11,\"prefName\":\"埼玉県\"},{\"prefCode\":12,\"prefName\":\"千葉県\"},{\"prefCode\":13,\"prefName\":\"東京都\"},{\"prefCode\":14,\"prefName\":\"神奈川県\"},{\"prefCode\":15,\"prefName\":\"新潟県\"},{\"prefCode\":16,\"prefName\":\"富山県\"},{\"prefCode\":17,\"prefName\":\"石川県\"},{\"prefCode\":18,\"prefName\":\"福井県\"},{\"prefCode\":19,\"prefName\":\"山梨県\"},{\"prefCode\":20,\"prefName\":\"長野県\"},{\"prefCode\":21,\"prefName\":\"岐阜県\"},{\"prefCode\":22,\"prefName\":\"静岡県\"},{\"prefCode\":23,\"prefName\":\"愛知県\"},{\"prefCode\":24,\"prefName\":\"三重県\"},{\"prefCode\":25,\"prefName\":\"滋賀県\"},{\"prefCode\":26,\"prefName\":\"京都府\"},{\"prefCode\":27,\"prefName\":\"大阪府\"},{\"prefCode\":28,\"prefName\":\"兵庫県\"},{\"prefCode\":29,\"prefName\":\"奈良県\"},{\"prefCode\":30,\"prefName\":\"和歌山県\"},{\"prefCode\":31,\"prefName\":\"鳥取県\"},{\"prefCode\":32,\"prefName\":\"島根県\"},{\"prefCode\":33,\"prefName\":\"岡山県\"},{\"prefCode\":34,\"prefName\":\"広島県\"},{\"prefCode\":35,\"prefName\":\"山口県\"},{\"prefCode\":36,\"prefName\":\"徳島県\"},{\"prefCode\":37,\"prefName\":\"香川県\"},{\"prefCode\":38,\"prefName\":\"愛媛県\"},{\"prefCode\":39,\"prefName\":\"高知県\"},{\"prefCode\":40,\"prefName\":\"福岡県\"},{\"prefCode\":41,\"prefName\":\"佐賀県\"},{\"prefCode\":42,\"prefName\":\"長崎県\"},{\"prefCode\":43,\"prefName\":\"熊本県\"},{\"prefCode\":44,\"prefName\":\"大分県\"},{\"prefCode\":45,\"prefName\":\"宮崎県\"},{\"prefCode\":46,\"prefName\":\"鹿児島県\"},{\"prefCode\":47,\"prefName\":\"沖縄県\"}]"
      }
}

     const { getAllByTestId } = render(<Index data={data}/>)
   const nodes =  getAllByTestId("gatsby-logo");
    expect(nodes).toHaveLength(47);
});
it("updates graph based on checkbox", async () => {

  //     const data = {
  //       prefecturesField: {
  //         prefData: "[{\"prefCode\":1,\"prefName\":\"北海道\"},{\"prefCode\":2,\"prefName\":\"青森県\"},{\"prefCode\":3,\"prefName\":\"岩手県\"},{\"prefCode\":4,\"prefName\":\"宮城県\"},{\"prefCode\":5,\"prefName\":\"秋田県\"},{\"prefCode\":6,\"prefName\":\"山形県\"},{\"prefCode\":7,\"prefName\":\"福島県\"},{\"prefCode\":8,\"prefName\":\"茨城県\"},{\"prefCode\":9,\"prefName\":\"栃木県\"},{\"prefCode\":10,\"prefName\":\"群馬県\"},{\"prefCode\":11,\"prefName\":\"埼玉県\"},{\"prefCode\":12,\"prefName\":\"千葉県\"},{\"prefCode\":13,\"prefName\":\"東京都\"},{\"prefCode\":14,\"prefName\":\"神奈川県\"},{\"prefCode\":15,\"prefName\":\"新潟県\"},{\"prefCode\":16,\"prefName\":\"富山県\"},{\"prefCode\":17,\"prefName\":\"石川県\"},{\"prefCode\":18,\"prefName\":\"福井県\"},{\"prefCode\":19,\"prefName\":\"山梨県\"},{\"prefCode\":20,\"prefName\":\"長野県\"},{\"prefCode\":21,\"prefName\":\"岐阜県\"},{\"prefCode\":22,\"prefName\":\"静岡県\"},{\"prefCode\":23,\"prefName\":\"愛知県\"},{\"prefCode\":24,\"prefName\":\"三重県\"},{\"prefCode\":25,\"prefName\":\"滋賀県\"},{\"prefCode\":26,\"prefName\":\"京都府\"},{\"prefCode\":27,\"prefName\":\"大阪府\"},{\"prefCode\":28,\"prefName\":\"兵庫県\"},{\"prefCode\":29,\"prefName\":\"奈良県\"},{\"prefCode\":30,\"prefName\":\"和歌山県\"},{\"prefCode\":31,\"prefName\":\"鳥取県\"},{\"prefCode\":32,\"prefName\":\"島根県\"},{\"prefCode\":33,\"prefName\":\"岡山県\"},{\"prefCode\":34,\"prefName\":\"広島県\"},{\"prefCode\":35,\"prefName\":\"山口県\"},{\"prefCode\":36,\"prefName\":\"徳島県\"},{\"prefCode\":37,\"prefName\":\"香川県\"},{\"prefCode\":38,\"prefName\":\"愛媛県\"},{\"prefCode\":39,\"prefName\":\"高知県\"},{\"prefCode\":40,\"prefName\":\"福岡県\"},{\"prefCode\":41,\"prefName\":\"佐賀県\"},{\"prefCode\":42,\"prefName\":\"長崎県\"},{\"prefCode\":43,\"prefName\":\"熊本県\"},{\"prefCode\":44,\"prefName\":\"大分県\"},{\"prefCode\":45,\"prefName\":\"宮崎県\"},{\"prefCode\":46,\"prefName\":\"鹿児島県\"},{\"prefCode\":47,\"prefName\":\"沖縄県\"}]"
  //       }
  // }
  // const { getAllByTestId, findByTestId } = render(<Index data={data}/>)
  // const nodes =  getAllByTestId("gatsby-logo");
  // fireEvent.click(nodes[0])
  // //await waitFor(() => {
  //   console.log(findByTestId('graph'))
  //    expect(findByTestId('graph')).not.toBeInTheDocument()

  const data = {
    id: "岡山県",
    data: [
    {x: 1960, y: 1670454},
      {x: 1965, y: 1645135},
      {x: 1970, y: 1707026},
      {x: 1975, y: 1814305},
    ]
  }
  console.log(data)


  const { queryByTestId } = render(<div style={{height: `500px`}}><Graph data={data}/> </div>)
  console.log(queryByTestId)
    expect(queryByTestId('graph')).toBeInTheDocument()

  // })
       //const { getAllByTestId } = render(<Index data={data}/>)
});
//it("graph updates", () => {


//})


});

describe("BarGraph", () => {
  describe("given two data points at a particular size", () => {
    // const data = {
    //   id: "岡山県",
    //   data: {
    //     0: {x: 1960, y: 1670454},
    //     1: {x: 1965, y: 1645135},
    //     2: {x: 1970, y: 1707026},
    //     3: {x: 1975, y: 1814305},
    //   }
    // }
    const data = {
      id: "岡山県",
      data: [
      {x: 1960, y: 1670454},
        {x: 1965, y: 1645135},
        {x: 1970, y: 1707026},
        {x: 1975, y: 1814305},
      ]
    }

    //const data = [40, 60];
      const size = { width: 500, height: 1000 };

      let graphContainer:any;
      beforeEach(() => {
        const { container } = render(
          <div  style={{height: `500px`}}>
            <Graph data={data} width={size.width} height={size.height} />
          </div>
        );
        console.log(container)
        graphContainer = container;
      });
      console.log(graphContainer)
      expect(graphContainer).toMatchSnapshot()
    test.each`
        index | x         | y
        ${0}  | ${"1960"} | ${"1670454"}
        ${1}  | ${"1965"} | ${"1645135"}
      `("renders rects", async ({ index, x, y }) => {
        // waits for rectangles to appear due to animation in graph library
        await waitFor(() => {
          // Hard coding classes is not ideal but best we have to work with
          const bars = graphContainer.querySelectorAll("graph");
          //console.log(bars)
          //expect(bars[index].getAttribute("height")).toBe(height);
          expect(bars[index].getAttribute("x")).toBe(x);
          expect(bars[index].getAttribute("y")).toBe(y);
        });
      });

  });
});
