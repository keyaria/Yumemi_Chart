import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Graph from "../components/graph"

import { graphql, useStaticQuery } from "gatsby"


const Index = (props: any) => {
  const data = useStaticQuery(graphql`
    query {
      prefecturesField {
        prefData
        internal {
          contentDigest
          content
        }
      }
    }
  `);
  //console.log(props.data, "sdfewee", data);
  let prefectures = JSON.parse(props.data.prefecturesField.prefData  || data.prefecturesField.prefData)

  return <IndexPage  prefectures={prefectures} />
}
export const IndexPage = ({prefectures}: any) => {
console.log(prefectures)
  const [graphList, setGraphList] = useState([])
  // const data = useStaticQuery(graphql`
  //   query {
  //     prefecturesField {
  //       prefData
  //       internal {
  //         contentDigest
  //         content
  //       }
  //     }
  //   }
  // `);
  // Will have to reconfigure to use useEffect as rerender is not triggered
  const getGraphData = (e: any) => {
    let prefName = e.target.name
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${
        e.target.value
      }`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": process.env.API_KEY,
        },
      }
    )
      .then(response => response.json())
      .then(resultData => {
        let result = resultData.result.data[0]
        let graphPlots = {
          id: prefName,
          data: result.data.map((datapoint: any) => {
            return {
              x: datapoint.year,
              y: datapoint.value,
            }
          }),
        }
        setGraphList([...graphList, graphPlots])
      })
  }
  return(
    <div>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {prefectures.map((prefecture: any) => (
          <div key={prefecture.prefCode}>
            <input
              type="checkbox"
              data-testid="gatsby-logo"
              key={prefecture.prefCode}
              id={prefecture.prefCode}
              name={prefecture.prefName}
              value={prefecture.prefCode}
              onClick={event => getGraphData(event)}
            />
            <label > {prefecture.prefName}</label>
          </div>
        ))}
      </div>
      <div style={{ height: `500px`, width: `80%` }}>
        <Graph data={graphList} />
      </div>
    </div>
  );
}

export default Index
