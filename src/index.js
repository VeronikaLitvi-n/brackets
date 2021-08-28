module.exports = function check(str, bracketsConfig) {
    const OPEN_BRACKETS = bracketsConfig.map(i => i[0])
    const BRACKETS_PAIR = Object.fromEntries(bracketsConfig)

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (OPEN_BRACKETS.includes(currentSymbol) && currentSymbol !== BRACKETS_PAIR[currentSymbol]) {
            stack.push(currentSymbol)
        }else if (OPEN_BRACKETS.includes(currentSymbol) && currentSymbol === BRACKETS_PAIR[currentSymbol]){
            if (stack[stack.length-1] === currentSymbol){
                stack.pop() 
            }else {
                stack.push(currentSymbol)
            }
        } else {
            if (stack.length === 0) {
                return false;
            }
            let topElement = stack[stack.length - 1];
            if (BRACKETS_PAIR[topElement] === currentSymbol) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;

}
