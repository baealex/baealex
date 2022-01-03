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
    
    const user = {
        name: 'Jino Bae',
        favorite: {
            game: 'The Sims 4',
            languages: ['Korean', 'English'],
            friends: [
                {
                    name: 'Aram',
                    favorite: {}
                },
                {
                    name: 'Yudai',
                    favorite: {}
                },
                {
                    name: 'Aram',
                    favorite: {}
                },
                {
                    name: 'Yudai',
                    favorite: {}
                },
                {
                    name: 'Aram',
                    favorite: {}
                },
                {
                    name: 'Yudai',
                    favorite: {}
                }
            ]
        }
    }
    
    const copyUser = copyFunc(user)
    
    options.disableConsole || console.log(`before change user1 : ${JSON.stringify(x)}`)
    options.disableConsole || console.log(`before change user2 : ${JSON.stringify(y)}`)
    
    copyUser.favorite.game = 'GTA 5'
    copyUser.favorite.languages.push('Japanese')
    
    options.disableConsole || console.log(`after change user1 : ${JSON.stringify(x)}`)
    options.disableConsole || console.log(`after change user2 : ${JSON.stringify(y)}`)
}

function checkPerformance(label, func, repeat=100) {
    let date = new Date()

    for (var i=0; i<repeat; i++) {
        func()
    }

    console.log(`${label} : ${i}회 반복까지 걸린 시간 : ${new Date() - date}`)
}

(() => {
    checkPerformance('deepCopy1', () => test('deepCopy1', deepCopy1, { disableConsole: true }), 100000)
    checkPerformance('deepCopy2', () => test('deepCopy2', deepCopy2, { disableConsole: true }), 100000)
})()