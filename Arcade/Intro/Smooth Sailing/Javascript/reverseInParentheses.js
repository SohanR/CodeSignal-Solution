//https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function reverseInParentheses(inputString) {
    if (inputString.includes('(')) {
        return reverseInParentheses(reverseIt(inputString));
    } else {
        return inputString;
    }
}

function reverseIt(s) {
    const regexp = /\(([^()]*)\)/i;
    let substr = regexp.exec(s)[1];
    substr = substr.split('').reverse().join('');
    return s.replace(regexp, substr);
}
