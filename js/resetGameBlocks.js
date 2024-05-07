const resetGameBlocks = (...blocks) => {
	const questionMark = `<img src="../images/icons8-вопросительный-знак-100.png" alt="not found" />`
	blocks.forEach((block) => {
		block.style.backgroundColor = 'transparent'
		block.innerHTML = questionMark
		console.log(block)
	})
	return blocks
}

export {resetGameBlocks}
