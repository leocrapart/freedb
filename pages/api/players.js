export default function handler(req, res) {

	if (req.method == "GET") {
		fetch("http://localhost:3000/players.json")
			.then(response => response.json())
			.then(json => 
				res.status(200).json(json))
	}
}