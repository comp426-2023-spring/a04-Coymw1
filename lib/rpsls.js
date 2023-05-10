
export function rps(shot) {

    const items = ['rock', 'paper', 'scissors'];
    
    

    if (shot == undefined) {
        var x = {'player': items[Math.floor(Math.random() * 3)]};
        return x;
    }

    
    shot = shot.toLowerCase()

    //throws error 
    if (!items.includes(shot)) {return error;}
    //opponent picks random item
    var cpu = items[Math.floor(Math.random() * 3)]

    if (shot === cpu) {
        return {'player': shot, 'opponent': cpu, 'result': 'tie'}
    }

    if (
        shot === 'rock' && cpu === 'scissors' || 
        shot === 'paper' && cpu === 'rock' || 
        shot == 'scissors' && cpu === 'paper' ) {
            return {'player': shot, 'opponent': cpu, 'result': 'win'}
    } else {return {'player': shot, 'opponent': cpu, 'result': 'lose'}}

    

}


//same as previous but with added items and interactions
export function rpsls(shot) {

    const items = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if (shot == undefined) {
        var x = {'player': items[Math.floor(Math.random() * 3)]};
        return x;
    }

    
    shot = shot.toLowerCase()

    if (!items.includes(shot)) {return error;}

    var cpu = items[Math.floor(Math.random() * 3)]
    

    if (shot === cpu) {
        return {'player': shot, 'opponent': cpu, 'result': 'tie'}
    }

    if(
        (shot === 'rock' && cpu === 'lizard') || (shot === 'rock' && cpu === 'scissors') ||
        (shot === 'paper' && cpu === 'paper') || (shot === 'paper'&& cpu === 'spock') ||
        (shot === 'scissors' && cpu === 'paper') || (shot == 'scissors' && cpu === 'lizard') ||
        (shot === 'lizard' && cpu === 'spock') || (shot === 'lizard' && cpu === 'paper') ||
        (shot === 'spock' && cpu === 'scissors') || (shot === 'spock' && cpu === 'rock')
        
        ) {
            return {'player': shot, 'opponent': cpu, 'result': 'win'};
        } else {
            return {'player': shot, 'opponent': cpu, 'result': 'lose'};
        }

}