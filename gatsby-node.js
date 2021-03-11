 const fetch = require(`node-fetch`)

 exports.sourceNodes = async ({
   actions: { createNode },
   createContentDigest,
 }) => {
   // get data from GitHub API at build time
   const result = await fetch(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, {
     method: 'GET',
     headers: {
     'X-API-KEY': process.env.API_KEY
   }
   })
   const resultData = await result.json();

   //create node for build time
   createNode({
     prefData: JSON.stringify(resultData.result),
     id: `prefecture-names`,
     parent: null,
     children: [],
     internal: {
       type: `prefecturesField`,
       contentDigest: createContentDigest(resultData),
       content: JSON.stringify(resultData)
     },
   })
 }
