function getTypes(prop: any) {
    return Object.getPrototypeOf(prop).constructor.name
} 

function deepCopy(props: any): Object {
    if (typeof props !== 'object') {
        return props;
    }

    return Object.keys(props).reduce((acc, key) => {
        const curProp = props[key];
        if (typeof curProp === 'object') {
            const copiedProp = deepCopy(curProp);
            return {...acc, [key]: copiedProp };
        }
        return {...acc, [key]: curProp };
    }, {})
}

let x = {
    y: {
        t: '111',
        q: {
            p: '123'.split(''),
            z: '345'
        }
    }
}

let y = deepCopy(x) as typeof x

console.log(`before change x : ${JSON.stringify(x)}`)
console.log(`before change y : ${JSON.stringify(y)}`)

// issue1 : y.y.q.p type is Object
console.log(`before change x.y.q.p type : ${getTypes(x.y.q.p)}`)
console.log(`before change y.y.q.p type : ${getTypes(y.y.q.p)}`)

y.y.t = '222'
y.y.q.p = '456'.split('')

console.log(`after change x : ${JSON.stringify(x)}`)
console.log(`after change y : ${JSON.stringify(y)}`)

console.log(`after change x.y.q.p : ${JSON.stringify(x.y.q.p)}`)
console.log(`after change y.y.q.p : ${JSON.stringify(y.y.q.p)}`)
