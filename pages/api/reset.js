export default function handler(req, res) {
	if (req.method == "POST") {
		let fs = require('fs')
		fs.writeFileSync('data/players.json', JSON.stringify({}))
		res.status(200).json({message: "reseted players.json"})
	}
}