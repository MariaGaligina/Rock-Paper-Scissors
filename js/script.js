import {colors} from './colors.js'
import {getRandomNumber} from './getRandomNumber.js'
import {getBackgroundColor} from './getBackgroundColor.js'
import {getResult} from './getResult.js'
import {modalOpen} from './modalOpen.js'
import {modalClose} from './modalClose.js'
import {resetGameBlocks} from './resetGameBlocks.js'
import {resetStatistic} from './resetStatistic.js'

const doc = document

const rockBlock = doc.querySelector('#rock'),
	paperBlock = doc.querySelector('#paper'),
	scissorsBlock = doc.querySelector('#scissors'),
	start = doc.querySelector('#start'),
	startBtn = doc.querySelector('#start-btn'),
	statistic = doc.querySelector('#statistic'),
	refreshBtn = doc.querySelector('#refresh-btn'),
	finishBtn = doc.querySelector('#finish-btn')

const rpsBlocks = [rockBlock, paperBlock, scissorsBlock]
let win = doc.querySelector('#win'),
	loss = doc.querySelector('#loss'),
	draw = doc.querySelector('#draw'),
	result = doc.querySelector('#result'),
	selectedByPlayer = doc.querySelector('#selected-player'),
	selectedByProgram = doc.querySelector('#selected-program'),
	selectedByPlayerResult = doc.querySelector('#selected-player-result'),
	selectedByProgramResult = doc.querySelector('#selected-program-result')

getBackgroundColor(colors, ...rpsBlocks)

startBtn.addEventListener('click', () => {
	modalClose(start)
})

const gameButtons = doc.querySelector('.game-buttons')

gameButtons.addEventListener('click', (event) => {
	console.log('start')

	if (event.target.closest('div').id !== 'game-buttons') {
		const selectedFigureId = event.target.closest('div').id
		const selectedFigureImg = rpsBlocks
			.filter((figure) => figure.id === selectedFigureId)[0]
			.firstElementChild.cloneNode()

		selectedByPlayer.innerHTML = ''
		selectedByPlayer.dataset.figure = selectedFigureId
		selectedByPlayer.appendChild(selectedFigureImg)
		getBackgroundColor(colors, selectedByPlayer)

		selectedByProgram.innerHTML = ''
		const selectedByProgramFigure = rpsBlocks[getRandomNumber(rpsBlocks.length - 1)]
		selectedByProgram.dataset.figure = selectedByProgramFigure.id
		selectedByProgram.appendChild(selectedByProgramFigure.firstElementChild.cloneNode())
		getBackgroundColor(colors, selectedByProgram)

		selectedByPlayerResult.innerHTML = ''
		selectedByProgramResult.innerHTML = ''
		selectedByPlayerResult.appendChild(selectedFigureImg.cloneNode())
		selectedByProgramResult.appendChild(selectedByProgramFigure.firstElementChild.cloneNode())
	}

	console.log(
		`user id ${selectedByPlayer.dataset.figure} program id ${selectedByProgram.dataset.figure}`
	)
	;[result.textContent, win.textContent, loss.textContent, draw.textContent] = getResult(
		selectedByPlayer.dataset.figure,
		selectedByProgram.dataset.figure,
		result.textContent,
		win.textContent,
		loss.textContent,
		draw.textContent
	)

	console.log('finish')
	console.log(
		doc.querySelector('#win').textContent,
		doc.querySelector('#loss').textContent,
		doc.querySelector('#draw').textContent,
		doc.querySelector('#result').textContent
	)

	setTimeout(() => {
		modalOpen(statistic)
	}, 1000)
})

refreshBtn.addEventListener('click', () => {
	;[selectedByPlayer, selectedByProgram] = resetGameBlocks(selectedByPlayer, selectedByProgram)

	modalClose(statistic)
})

finishBtn.addEventListener('click', () => {
	modalClose(statistic)
	modalOpen(start)
	;[selectedByPlayer, selectedByProgram] = resetGameBlocks(selectedByPlayer, selectedByProgram)
	resetStatistic(result, win, loss, draw)
})
