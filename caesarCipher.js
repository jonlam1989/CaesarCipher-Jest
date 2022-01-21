const caesarCipher = (str, shiftNum) => {
	let newStr = '';

	for (let char of str) {
		let charCode = char.toLowerCase().charCodeAt(0);
		if (charCode >= 97 && charCode <= 122) {
			newStr += isUpperCase(char)
				? shiftedLetter(charCode, shiftNum).toUpperCase()
				: shiftedLetter(charCode, shiftNum);
		} else {
			newStr += char;
		}
	}

	return newStr;
};

function isUpperCase(str) {
	return str === str.toUpperCase();
}

function shiftedLetter(charCode, shiftNum) {
	let newCharCode = shiftNum > 0 ? charCode + shiftNum : charCode + shiftNum + 26;
	while (newCharCode > 122) newCharCode -= 26;
	while (newCharCode < 97) newCharCode += 26;
	return String.fromCharCode(newCharCode);
}

export default caesarCipher;
