let fs = require('fs');

export default function handler(req, res) {
	if ((req.method !== 'POST') && (req.method !== 'GET')) {
	  res.status(405).send({ message: 'Only POST and GET requests allowed' })
	  return
	}

	if (req.method == 'POST') {
		const body = JSON.parse(JSON.stringify(req.body))
		const player = body
		create(player)
		res.status(200).json({message: "successfully added", ...player})
	}

	if (req.method == 'GET') {
		fetch("http://localhost:3000/players.json")
		  .then(response => response.json())
		  .then(json => res.status(200).send(json));
	}
}


function create(player) {
	fetch("http://localhost:3000/players.json")
		  .then(response => response.json())
		  .then(callback1);
}

function callback1(players) {
	const new_players = {
		...players,
		player2: player
	}
	fs.writeFileSync('data/players.json', JSON.stringify(new_players));
}
