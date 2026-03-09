import { getRank, addScores, hasWon, getHighScore } from './gameUtils';

test('Geef noob terug met score 0', () => {
    const result = getRank(0);
    expect(result).toBe('Noob');
})

test('Geef Pro terug met score >=50', () => {
    const result = getRank(50);
    expect(result).toBe('Pro');
})

test('Tel twee scores bij elkaar op', () => {
    const result = addScores(20, 30);
    expect(result).toBe(50)
})

test('Controleer of speler heeft gewonnen', () => {
    const result = hasWon(100);
    expect(result).toBe(true);
})

test('Geef de hoogste score terug', () => {
    const result = getHighScore(30, 20);
    expect(result).toBe(30);
})
