function superbowlWin(record) {
    const r = record.find((answer) => answer.result === 'W')
    if (r)
    return r.year
}

// const ridiculous = record.find(({year}) => year === '1969')

// function superbowlWin(ridiculous) {
//         return ridiculous.year
// }