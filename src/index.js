export const BowlingGameScore = (input) => {
    let frames = input.replace(/-/g, '0').split(' ');
    let total = 0;
    frames.forEach((frame, i) => {
        if(i > 9) return;
        let score = 0;
        if(frame.includes('/')) {
            score += 10;
            if(i === 9) {
                score += get1stRollScore(frame);
            } else {
                score += get1stRollScore(frames[i+1]);
            }
        } else if(frame.includes('X')) {
            score += 10;
            score += getFrameScore(frames[i+1]) + getFrameScore(frames[i+2]);
        }else {
            score = getFrameScore(frame);
        }
        total += score
    });
    return total;
}

function getFrameScore(frame) {
    if(!frame) return 0;
    if(frame.includes('X')) return 10;
    if(frame.includes('/')) return 10;
    return get1stRollScore(frame) + get2ndRollScore(frame);
}

function get2ndRollScore(frame) {
    if(frame.length < 2) return 0;
    return parseInt(frame.substring(1));
}

function get1stRollScore(frame) {
    return parseInt(frame.substring(0, 1));
}
