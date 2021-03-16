import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"

import Graph from "../components/graph"
import Header from "../components/header"
import { graphql, useStaticQuery } from "gatsby"
import "../components/index.scss"

const Index = (props: {data: {prefecturesField: {prefData: string}}} ) => {
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
  `)

  const prefectures = JSON.parse(
    props.data !== undefined
      ? props.data.prefecturesField.prefData
      : data.prefecturesField.prefData
  )
  return <IndexPage prefectures={prefectures} />
}
export const IndexPage = ({prefectures}: IndexProps) => {
  const [graphList, setGraphList] = useState([])

  const getGraphData = (e: any) => {
    const prefName = e.target.name
    if (graphList.some(graphLine => graphLine.id === prefName)) {
      setGraphList(graphList.filter(plot => plot.id != prefName))
    } else {
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
          console.log('resultdata', resultData)
          const result = resultData.result.data[0]
          const graphPlots = {
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
        console.log('entered')
    }
  }
  return (
    <div>
      <Header siteTitle={"人口構成"} />
      <div className="container">
        <h1 style={{ fontSize: `30px`, marginBottom: `40px` }}>
          {" "}
          都道府県{" "}
        </h1>
        <div style={{ marginBottom: `1.45rem` }} className="check">
          {prefectures.map(
            (prefecture: { prefCode: string; prefName: string }) => (
              <div key={prefecture.prefCode} className="checkbox path">
                <input
                  type="checkbox"
                  data-testid="gatsby-logo"
                  key={prefecture.prefCode}
                  id={prefecture.prefCode}
                  name={prefecture.prefName}
                  value={prefecture.prefCode}
                  onClick={event => getGraphData(event)}
                />
                <svg viewBox="0 0 21 21">
                  <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
                </svg>
                <label> {prefecture.prefName}</label>
              </div>
            )
          )}
        </div>
        <div style={{ height: `500px` }} className="graph">
          {graphList.length > 0 ? (
            <Graph data={graphList}     data-testid="graph"/>
          ) : (
            <h1> 都道府県の追加</h1>
          )}
        </div>
      </div>
    </div>
  )
}

interface IndexProps {
  prefectures: Array<{
    prefCode: string,
    prefName: string
  }>
}

export default Index
