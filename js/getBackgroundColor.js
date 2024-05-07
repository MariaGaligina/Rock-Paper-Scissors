import {getRandomNumber} from './getRandomNumber.js'

const getBackgroundColor = (colors, ...blocks) => {
	const newColors = [...colors]
	let colorsLength = newColors.length - 1
	return blocks.map((block) => {
		const colorIndex = getRandomNumber(colorsLength)
		block.style.backgroundColor = newColors[colorIndex]
		newColors.splice(colorIndex, 1)
		colorsLength -= 1
	})
}

export {getBackgroundColor}
