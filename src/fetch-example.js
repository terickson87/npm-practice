// HTML
{/*
<button onclick="callWs()">
Click
</button>
<br/>
<b>Response Status :</b>
<div id="result"></div>
<br/>
<b>JSON Object :</b>
<div id="result_json"></div>
<b>JSON.parse():</b>
<div id="result_obj"></div>
*/}


//JS code:
const callWs = () => {
	// The Endpoint URL
	let url = 'https://jsonplaceholder.typicode.com/posts/1';
	fetch(url)
  .then((response) => {
  	// Render the Response Status
  	// @ts-ignore
  	document.getElementById('result').innerHTML = response.status.toString();
    // Parse the body as JSON
    return response.json();
  })
  .then((json) => {
  	// Render the parsed body
    for (let i=0; i<3; i++) {
    	// @ts-ignore
    	const existing = document.getElementById('result_json').innerHTML;
    	// @ts-ignore
    	document.getElementById('result_json').innerHTML = existing + "<br/>" + JSON.stringify(json);
    }
    console.log(json);
    // @ts-ignore
    document.getElementById('result_obj').innerText =
    `User ID: ${json.userId}
    ID: ${json.id}
    Title: ${json.title}
    Body: ${json.body}`;
  })
}