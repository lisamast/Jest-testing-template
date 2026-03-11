import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    // TODO: Render ProfileCard met name="Piet" en age={30}
    // TODO: Check of tekst "Leeftijd: 30" op het scherm staat
    // Hint: gebruik screen.getByText()
    render(<ProfileCard name="Piet" age={30} />);
    const ageText = screen.getByText('Leeftijd: 30');
    expect(ageText).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('toont bio als die er is', () => {
    // TODO: Render ProfileCard met bio="Ik hou van programmeren"
    // TODO: Check of die tekst op het scherm staat
    render(<ProfileCard name="Piet" age={30} bio="Dit is een bio" />);
    const bioText = screen.getByText('Dit is een bio');
    expect(bioText).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    // TODO: Render ProfileCard ZONDER bio prop
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
    render(<ProfileCard name="Piet" age={30} />);
    const fallbackText = screen.getByText('Geen bio beschikbaar');
    expect(fallbackText).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

});
