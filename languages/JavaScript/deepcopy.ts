function getTypes(prop: any) {
    return Object.getPrototypeOf(prop).constructor.name
}

function getFuncName(func: Function) {
    const temp = func.toString().substr('function '.length);
    return temp.substr(0, temp.indexOf('('));
}

function deepCopy1(props: any): Object {
    if (typeof props !== 'object') {
        return props;
    }

    return Object.keys(props).reduce((acc, key) => {
        const curProp = props[key];
        if (typeof curProp === 'object') {
            const copiedProp = deepCopy1(curProp);
            return {...acc, [key]: copiedProp };
        }
        return {...acc, [key]: curProp };
    }, {})
}

function deepCopy2(props: any): Object {
    return JSON.parse(JSON.stringify(props))
}

function test(copyFunc: Function) {
    console.log(`===== ${getFuncName(copyFunc)} =====`);
    
    let x = {
        y: {
            t: '111',
            q: {
                p: '123'.split(''),
                z: '345'
            }
        }
    }
    
    let y = copyFunc(x) as typeof x
    
    console.log(`before change x : ${JSON.stringify(x)}`)
    console.log(`before change y : ${JSON.stringify(y)}`)

    // issue1 : y.y.q.p type is Object on deepCopy1
    console.log(`before change x.y.q.p type : ${getTypes(x.y.q.p)}`)
    console.log(`before change y.y.q.p type : ${getTypes(y.y.q.p)}`)
    
    y.y.t = '222'
    y.y.q.p = '456'.split('')
    
    console.log(`after change x : ${JSON.stringify(x)}`)
    console.log(`after change y : ${JSON.stringify(y)}`)
    
    console.log(`after change x.y.q.p : ${JSON.stringify(x.y.q.p)}`)
    console.log(`after change y.y.q.p : ${JSON.stringify(y.y.q.p)}`)
}

(() => {
    test(deepCopy1)
    test(deepCopy2)
})()