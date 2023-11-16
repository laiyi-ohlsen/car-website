const baseUrl = "http://car-api-2w8k.onrender.com/"

const colors = ["Green", "Red", "Blue"]
const colorVals = colors.values();




const getCars = async function(color) {
	try {
		const carIDs = await fetch(`${baseUrl}?color=${color}`)
		const carIDsJSON = await carIDs.json()
	
		Object.keys(carIDsJSON).forEach(async (key,value) => {
			try{
			const carResponse = await fetch(`${baseUrl}car/:${carIDsJSON[key]}`)
			const carResponseJSON = await carResponse.json(); 
			console.log(carResponseJSON)
			const list = document.getElementById(`${color}-cars`);
			const tag = document.createElement("li");
      		const text = document.createTextNode(carResponseJSON.name);
			tag.appendChild(text);
			list.appendChild(tag);			
			}
			catch(error){
				console.log(error)
			}
		})
	} catch (error) {
	  console.error(error)
	}
}

for (const i of colorVals){
	//create list for each color
	const lists = document.createElement(`ul`);
	lists.setAttribute('id',`${i}-cars`)
	document.body.appendChild(lists)

	//create header for each color
	const header = document.createElement("h1");
	const headerText = document.createTextNode(`${i} cars include:`);
	header.appendChild(headerText);
	const list = document.getElementById(`${i}-cars`);
	list.appendChild(header);	

	getCars(i)
}



// for (const i of colorVals){
	
// }

