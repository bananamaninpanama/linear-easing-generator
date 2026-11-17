//this is just a basic function that gives you an svg path with that many bounces
function f(x) {
    return Array.from({ length: x })
        .reduce((acc, valUSELESS, idx) => {
            const n = idx + 1
            const [
        dxONE,
        dyONE,
        dx,
        dy,
          ] = [
        2 ** (-1 - n),
        2 ** (3 - (2*n)),
        2 ** (0 - n),
        0,
    ]
    const NumbsStr = [dxONE, dyONE, dx, dy].join(' ')
    const TermValue = " q " + NumbsStr
    return acc + TermValue
        }, "m 0 0");
}
