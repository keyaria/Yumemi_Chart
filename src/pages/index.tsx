import React, {useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
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
    const [graphList, setGraphList] = useState([])

     // Will have to reconfigure to use useEffect as rerender is not triggered
     const getGraphData = (e) => {
       console.log(e.target.value);
       let prefName = e.target.name
       fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${e.target.value}`, {
         method: 'GET',
         headers: {
         'X-API-KEY': process.env.API_KEY
       }
       })
         .then(response => response.json())
         .then(resultData => {
           let result = resultData.result.data[0];
           setGraphList([...graphList, {name: prefName, result}]);
           console.log(graphList)
         })
     }
     let prefectures = JSON.parse(data.prefecturesField.prefData);
    return (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {prefectures.map((prefecture) => (
        <div>
        <input type="checkbox" key={prefecture.prefCode} id={prefecture.prefCode} name={prefecture.prefName} value={prefecture.prefCode} onClick={(event) => getGraphData(event)}/>
         <label for={prefecture.prefName}> {prefecture.prefName}</label>
         </div>
      ))}

    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
}

export default IndexPage
