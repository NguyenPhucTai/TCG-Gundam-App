import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../app/index';

describe('Game Screen', () => {
  it('renders both Player sections', () => {
    render(<App /> as React.ReactElement);
    expect(screen.getByText('Player 1')).toBeTruthy();
    expect(screen.getByText('Player 2')).toBeTruthy();
  });

  it('displays initial stats for both players', () => {
    render(<App /> as React.ReactElement);
    // Resource and Ex Resource labels should appear for each player
    const resources = screen.getAllByText('Resource');
    expect(resources).toHaveLength(2);
    const exRes = screen.getAllByText('Ex Resource');
    expect(exRes).toHaveLength(2);
    // Initial values (0) should appear at least 4 times (resource, exResource, level x2)
    const zeros = screen.getAllByText('0');
    expect(zeros.length).toBeGreaterThanOrEqual(4);
  });

  it('shows control buttons on the screen', () => {
    render(<App /> as React.ReactElement);
    expect(screen.getByText('Reset')).toBeTruthy();
    expect(screen.getByText('Revert')).toBeTruthy();
    expect(screen.getByText('Dice Roll')).toBeTruthy();
  });
});
