const resetStatistic = (result, ...values) => {
	result.innerHTML = ''
	values.forEach((value) => (value.innerHTML = '0'))
	console.log('values', values)
	return values
}

export {resetStatistic}
