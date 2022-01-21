import caesarCipher from './caesarCipher';

test('"hello" shifted by 5 should be "mjqqt"', () => {
	expect(caesarCipher('hello', 5)).toBe('mjqqt');
});
test('"hello" shifted by -5 should be "czggj"', () => {
	expect(caesarCipher('hello', -5)).toBe('czggj');
});
test('"hello" shifted by 1000 should be "tqxxa"', () => {
	expect(caesarCipher('hello', 1000)).toBe('tqxxa');
});
test('"hello" shifted by -1000 should be "vszzc"', () => {
	expect(caesarCipher('hello', -1000)).toBe('vszzc');
});

test('"HellO" with uppercase shifted by 5 should be "MjqqT"', () => {
	expect(caesarCipher('HellO', 5)).toBe('MjqqT');
});
test('"hello, guys!!!" with punctuation shifted by 5 should be "mjqqt, lzdx!!!"', () => {
	expect(caesarCipher('hello, guys!!!', 5)).toBe('mjqqt, lzdx!!!');
});
