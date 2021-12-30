function getTypes(prop: any) {
    return Object.getPrototypeOf(prop).constructor.name
}

function deepCopy1(props: any): Object {
    if (typeof props !== 'object') {
        return props;
    }

    return Object.keys(props).reduce((acc, key) => {
        const curProp = props[key];
     
        if (typeof props === 'object') {
            if (getTypes(curProp) === 'Array') {
                return {...acc, [key]: [...curProp] };
            }
            
            if (getTypes(curProp) === 'Object') {
                const copiedProp = deepCopy1(curProp);
                return {...acc, [key]: copiedProp };
            }
        }

        return {...acc, [key]: curProp };
    }, {})
}

function deepCopy2(props: any): Object {
    return JSON.parse(JSON.stringify(props))
}

function test(label: string, copyFunc: Function) {
    console.log(`===== ${label} =====`);
    
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
    
    y.y.t = '222'
    y.y.q.p = '456'.split('')
    
    console.log(`after change x : ${JSON.stringify(x)}`)
    console.log(`after change y : ${JSON.stringify(y)}`)
}

(() => {
    test('deepCopy1', deepCopy1)
    test('deepCopy2', deepCopy2)
})()