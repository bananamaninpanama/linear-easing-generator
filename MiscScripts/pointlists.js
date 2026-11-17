//i am using this to convert the thing into a list of points so i can put it in desmos
//if it lacks a percantage it breaks.
//just fix it manually by replacing it with the average of the percentages of the things next to it
function g(string) {
    return '[' + string.split(', ').map(item => {
        const temparray = item.split(' ')
        const seconditemfix = temparray[1].slice(0, -1).split('.')
        console.log(seconditemfix)
        const tmpitm = seconditemfix[0].padStart(2, 0)
        seconditemfix[0] = tmpitm.slice(0, -2) + '.' + tmpitm.slice(-2);
        temparray[1] = seconditemfix.join('')
        return '(' + temparray.join(', ') + ')'
    }).join(', ') + ']'
}
