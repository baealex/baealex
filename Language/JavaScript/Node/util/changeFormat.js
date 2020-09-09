function changeFormat(original/*: string */, format/*: string */, sign='*'/*: char */)/*: string */ {
    let idx = 0;
    let result = '';
    for(let f of format) {
        if(f === sign) {
            result += original.charAt(idx++);
        } else {
            result += f;
        }
    }
    return result;
}

console.log(changeFormat('20200612', '****. **. **.')); // 2020. 06. 12.