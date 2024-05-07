const getResult = (playerFigure, programFigure, result, win, loss, draw) => {
	console.log('all', playerFigure, programFigure, win, loss, draw)
	if (playerFigure === programFigure) {
		console.log(' = = draw')
		result = 'Ничья!'
		draw = Number(draw) + 1
		console.log(`res win ${win} loss ${loss} draw ${draw}`)
	} else {
		switch (playerFigure) {
			case 'rock':
				if (programFigure === 'scissors') {
					console.log('r s win')
					result = 'Победа!'
					win = Number(win) + 1
					console.log(`res win ${win} loss ${loss} draw ${draw}`)
				} else {
					console.log('r p loss')
					result = 'Поражение'
					loss = Number(loss) + 1
					console.log(`res win ${win} loss ${loss} draw ${draw}`)
				}
				break
			case 'paper':
				if (programFigure === 'rock') {
					console.log('p r win')
					result = 'Победа!'
					win = Number(win) + 1
					console.log(`res win ${win} loss ${loss} draw ${draw}`)
				} else {
					result = 'Поражение'
					loss = Number(loss) + 1
					console.log('p s loss')
					console.log(`res win ${win} loss ${loss} draw ${draw}`)
				}
				break
			case 'scissors':
				if (programFigure === 'paper') {
					result = 'Победа!'
					win = Number(win) + 1
					console.log('s p win')
					console.log(`res win ${win} loss ${loss} draw ${draw}`)
				} else {
					console.log('s r loss')
					result = 'Поражение'
					loss = Number(loss) + 1
					console.log(`res win ${win} loss ${loss} draw ${draw}`)
				}
		}
	}
	return [result, win, loss, draw]
}

export {getResult}
