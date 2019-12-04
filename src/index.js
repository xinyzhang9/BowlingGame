export const BowlingGameScore = (input) => {
    let frames = input.replace(/-/g, '0').split(' ');
    let total = 0;
    for(let i =0; i < 10; i++) {
        total += getCurrentFrameScore(frames, i)
    }
    return total;
}

function getCurrentFrameScore(frames, i) {
    if(frames[i].includes('/')) return 10 + (i === 9 ? getSpareBonus(frames[i]) : get1stRollScore(frames[i+1]));
    if(frames[i].includes('X')) return (frames[i+1].includes('X')) ? 20 + get1stRollScore(frames[i+2]) : 10 + getFrameScore(frames[i+1]);
    return getFrameScore(frames[i]);
}

function getFrameScore(frame) {
    if(frame.includes('X') || frame.includes('/')) return 10;
    return get1stRollScore(frame) + get2ndRollScore(frame);
}

function get2ndRollScore(frame) {
    return parseInt(frame.substring(1));
}

function get1stRollScore(frame) {
    if(frame.includes('X')) return 10;
    return parseInt(frame.substring(0, 1));
}

function getSpareBonus(frame) {
    return parseInt(frame.substring(2));
}
