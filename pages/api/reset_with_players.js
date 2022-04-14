export default function handler(req, res) {
	if (req.method == "POST") {
		const players = {
			player1: {
				id: "player1",
				name: "somename",
				lvl: 2,
				xp: 5
			},
			player2: {
				id: "player2",
				name: "anothername",
				lvl: 3,
				xp: 10
			}
		}
		const empty_players = {}
		let fs = require('fs')
		fs.writeFileSync('data/players.json', JSON.stringify(players))
		res.status(200).json({message: "reseted players.json"})
	}
}