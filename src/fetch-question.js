/* 
// https://catfact.ninja/fact
async function runSolution() {}

runSolution();
*/
// @ts-ignore
let cachedJson = null;

async function getFactAndLog() {
    // @ts-ignore
  if (cachedJson == null) {
    const catURL = "https://catfact.ninja/fact";
    cachedJson = "In Progress"
    const resp = await fetch(catURL);
    const json = await resp.json()
    cachedJson = json;
  }
  // @ts-ignore
  return cachedJson;
}

// https://catfact.ninja/fact
async function runSolution() {
  const jsons = await Promise.all([getFactAndLog(),getFactAndLog()]);
  console.log(jsons);
  /* const json1 = await getFactAndLog();
  console.log(json1);
  const json2 = await getFactAndLog();
  console.log(json2); */
}

runSolution();