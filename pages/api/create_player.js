export default function handler(req, res) {
	if (req.method == "POST") {
		fetch("http://localhost:3000/players.json")
			.then(response => response.json())
			.then(json => 
				res.status(200).json(json))
			
		let fs = require('fs')
		fs.writeFileSync('data/players.json', JSON.stringify(players))
		res.status(200).json({message: "reseted players.json"})
	}
}