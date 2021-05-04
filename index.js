// function superbowlWin(record) {
//     const r = record.find((answer) => answer.result === 'W')
//     if (r)
//     return r.year
// }

// ar result = record.find(({year}) => year === '1969')
function superbowlWin(record) {
    const result = record.find(({year}) => year === '1969')
    if (result) {
        return result.year
    }
}