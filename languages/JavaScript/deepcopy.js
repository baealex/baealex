function getTypes(prop) {
    return Object.getPrototypeOf(prop).constructor.name
}

function deepCopy1(props) {
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

function deepCopy2(props) {
    return JSON.parse(JSON.stringify(props))
}

function test(label, copyFunc, options) {
    options.disableConsole || console.log(`===== ${label} =====`)
    
    let x = {
        y: {
            t: '111',
            q: {
                p: '123'.split(''),
                z: '345'
            }
        }
    }
    
    let y = copyFunc(x)
    
    options.disableConsole || console.log(`before change x : ${JSON.stringify(x)}`)
    options.disableConsole || console.log(`before change y : ${JSON.stringify(y)}`)
    
    y.y.t = '222'
    y.y.q.p = '456'.split('')
    
    options.disableConsole || console.log(`after change x : ${JSON.stringify(x)}`)
    options.disableConsole || console.log(`after change y : ${JSON.stringify(y)}`)
}

function checkPerformance(func, repeat=100) {
    let date = new Date()

    for (var i=0; i<repeat; i++) {
        func()
    }

    console.log(`${i}회 반복까지 걸린 시간 : ${new Date() - date}`)
}

(() => {
    checkPerformance(() => test('deepCopy1', deepCopy1, { disableConsole: true }), 100000)
    checkPerformance(() => test('deepCopy2', deepCopy2, { disableConsole: true }), 100000)
})()