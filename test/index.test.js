import { expect } from 'chai';
import { BowlingGameScore } from '../src/index';

describe('Bowling Game Score', () => {
    it('allMiss', () => {
        let input = '-- -- -- -- -- -- -- -- -- --';
        expect(BowlingGameScore(input)).to.equal(0);
    })

    it('all 9', () => {
        let input = '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-';
        expect(BowlingGameScore(input)).to.equal(90);
    })

    it('5 and spare', () => {
        let input = '5/ 1- -- -- -- -- -- -- -- --';
        expect(BowlingGameScore(input)).to.equal(12);
    })

    it('10 pairs of 5 and spare', () => {
        let input = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5';
        expect(BowlingGameScore(input)).to.equal(150);
    })

    it('1 strike and 23', () => {
        let input = 'X 23 -- -- -- -- -- -- -- --';
        expect(BowlingGameScore(input)).to.equal(20);
    })

    it('1 strike and 1 spare', () => {
        let input = 'X 5/ -- -- -- -- -- -- -- --';
        expect(BowlingGameScore(input)).to.equal(30);
    })

    it('2 strike in a row', () => {
        let input = 'X X -- -- -- -- -- -- -- --';
        expect(BowlingGameScore(input)).to.equal(30);
    })

    it('3 strike in a row', () => {
        let input = 'X X X -- -- -- -- -- -- --';
        expect(BowlingGameScore(input)).to.equal(60);
    })
    
    it('12 strikes', () => {
        let input = 'X X X X X X X X X X X X';
        expect(BowlingGameScore(input)).to.equal(300);
    })

    it('11 strikes and 5', () => {
        let input = 'X X X X X X X X X X X 5';
        expect(BowlingGameScore(input)).to.equal(295);
    })

    it('10 strikes and 1 spare', () => {
        let input = 'X X X X X X X X X X 5/';
        expect(BowlingGameScore(input)).to.equal(290);
    })
})