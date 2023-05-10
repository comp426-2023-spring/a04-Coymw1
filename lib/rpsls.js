
export function rps(shot) {

    const items = ['rock', 'paper', 'scissors'];
    
    //opponent picks random item
    var cpu = items[(Math.random() * 3)]

    if (shot == undefined) {
        var x = {'player': cpu};
        return x;
    }

    
    shot = shot.toLowerCase()

    //throws error 
    if (!items.includes(shot)) {return error;}
    var x = {'player': shot, 'opponent': cpu}

    if (shot === cpu) {
        x.result = 'tie';
    }

    if (shot === 'rock') {
        if (cpu === 'paper') {x.result = 'lose'}
        if (cpu === 'scissors') {x.result = 'win'}
    }

    if (shot == 'paper') {
        if (cpu === 'scissors') {x.result = 'lose'}
        if (cpu === 'rock') {x.result = 'win'}
    }

    if (shot == 'scissors') {
        if (cpu === 'rock') {x.result = 'lose'}
        if (cpu === 'paper') {x.result = 'win'}
    }
    
    return x;

}


//same as previous but with added items and interactions
export function rpsls(shot) {

    shot = shot.toLowerCase()
    const items = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if (shot == undefined) {
        var x = {'player': items[(Math.random() * items.length)]};
        return x;
    }

    if (!items.includes(shot)) {return error;}
    var cpu = items[(Math.random() * 3)]
    var x = {'player': shot, 'opponent': cpu}

    if (shot === cpu) {
        x.result = 'tie';
    }

    if (shot === 'rock') {
        if (cpu === 'paper') {x.result = 'lose'}
        if (cpu === 'scissors') {x.result = 'win'}
        if (cpu === 'lizard') {x.result = 'win'}
        if (cpu === 'spock') {x.result = 'lose'}
    }

    if (shot === 'paper') {
        if (cpu === 'scissors') {x.result = 'lose'}
        if (cpu === 'rock') {x.result = 'win'}
        if (cpu === 'lizard') {x.result = 'lose'}
        if (cpu === 'spock') {x.result = 'win'}
    }

    if (shot === 'scissors') {
        if (cpu === 'rock') {x.result = 'lose'}
        if (cpu === 'paper') {x.result = 'win'}
        if (cpu === 'lizard') {x.result = 'win'}
        if (cpu === 'spock') {x.result = 'lose'}
    }

    if (shot === 'lizard') {
        if (cpu === 'rock') {x.result = 'lose'}
        if (cpu === 'paper') {x.result = 'win'}
        if (cpu === 'scissors') {x.result = 'lose'}
        if (cpu === 'spock') {x.result = 'win'}
    }

    if (shot === 'spock') {
        if (cpu === 'rock') {x.result = 'lose'}
        if (cpu === 'paper') {x.result = 'win'}
        if (cpu === 'lizard') {x.result = 'win'}
        if (cpu === 'scissors') {x.result = 'lose'}
    }
    
    return x;

}