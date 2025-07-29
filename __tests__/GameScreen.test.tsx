import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import GameScreen from '../app/index';

// Mock Alert
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Alert: {
      alert: jest.fn(),
    },
  };
});

import { Alert } from 'react-native';

describe('GameScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with initial values', () => {
    render(<GameScreen />);
    
    // Check if player names are rendered
    expect(screen.getByText('Player 1')).toBeTruthy();
    expect(screen.getByText('Player 2')).toBeTruthy();
    
    // Check if stat labels are rendered
    expect(screen.getAllByText('Resource')).toHaveLength(2);
    expect(screen.getAllByText('Ex Resource')).toHaveLength(2);
    expect(screen.getAllByText('Level')).toHaveLength(2);
    
    // Check if control buttons are rendered
    expect(screen.getByText('Reset')).toBeTruthy();
    expect(screen.getByText('Revert')).toBeTruthy();
    expect(screen.getByText('Show Log')).toBeTruthy();
  });

  it('displays initial values correctly', () => {
    render(<GameScreen />);
    
    // Check initial resource values (should be "10")
    const resourceValues = screen.getAllByText('10');
    expect(resourceValues).toHaveLength(2); // Player 1 and Player 2 resources
    
    // Check initial ex resource values (should be "05")
    const exResourceValues = screen.getAllByText('05');
    expect(exResourceValues).toHaveLength(2); // Player 1 and Player 2 ex resources
    
    // Check initial level values (should be "15")
    const levelValues = screen.getAllByText('15');
    expect(levelValues).toHaveLength(2); // Player 1 and Player 2 levels
  });

  it('increments Player 1 resource when plus button is pressed', () => {
    render(<GameScreen />);
    
    // Get all plus buttons (there should be 4: 2 for each player's resource and ex resource)
    const plusButtons = screen.getAllByText('+');
    
    // Press the first plus button (Player 1 Resource)
    fireEvent.press(plusButtons[0]);
    
    // Check if the value changed to "11"
    expect(screen.getByText('11')).toBeTruthy();
  });

  it('decrements Player 1 resource when minus button is pressed', () => {
    render(<GameScreen />);
    
    // Get all minus buttons
    const minusButtons = screen.getAllByText('-');
    
    // Press the first minus button (Player 1 Resource)
    fireEvent.press(minusButtons[0]);
    
    // Check if the value changed to "09"
    expect(screen.getByText('09')).toBeTruthy();
  });

  it('does not allow resource values to go below 0', () => {
    render(<GameScreen />);
    
    // Get all minus buttons
    const minusButtons = screen.getAllByText('-');
    
    // Press minus button multiple times to try to go below 0
    for (let i = 0; i < 15; i++) {
      fireEvent.press(minusButtons[0]); // Player 1 Resource minus button
    }
    
    // Should not go below "00"
    expect(screen.getByText('00')).toBeTruthy();
    // Should not have negative values
    expect(screen.queryByText('-01')).toBeNull();
  });

  it('increments Player 1 ex resource correctly', () => {
    render(<GameScreen />);
    
    // Get plus buttons - the second one should be Player 1 Ex Resource
    const plusButtons = screen.getAllByText('+');
    
    // Press Player 1 Ex Resource plus button
    fireEvent.press(plusButtons[1]);
    
    // Check if ex resource changed from "05" to "06"
    expect(screen.getByText('06')).toBeTruthy();
  });

  it('shows reset confirmation when reset button is pressed', () => {
    render(<GameScreen />);
    
    const resetButton = screen.getByText('Reset');
    fireEvent.press(resetButton);
    
    // Check if Alert.alert was called with reset confirmation
    expect(Alert.alert).toHaveBeenCalledWith(
      'Reset Game',
      'Are you sure you want to reset all values?',
      expect.arrayContaining([
        expect.objectContaining({ text: 'Cancel', style: 'cancel' }),
        expect.objectContaining({ text: 'Reset', style: 'destructive' }),
      ])
    );
  });

  it('shows no actions message when revert is pressed with empty history', () => {
    render(<GameScreen />);
    
    const revertButton = screen.getByText('Revert');
    fireEvent.press(revertButton);
    
    // Check if Alert.alert was called with no actions message
    expect(Alert.alert).toHaveBeenCalledWith('No actions to revert');
  });

  it('shows empty log message when show log is pressed with no history', () => {
    render(<GameScreen />);
    
    const showLogButton = screen.getByText('Show Log');
    fireEvent.press(showLogButton);
    
    // Check if Alert.alert was called with empty log message
    expect(Alert.alert).toHaveBeenCalledWith('Game Log', 'No actions recorded yet');
  });

  it('Player 2 resource functions work correctly', () => {
    render(<GameScreen />);
    
    // Get all plus buttons - the third one should be Player 2 Resource
    const plusButtons = screen.getAllByText('+');
    
    // Press Player 2 Resource plus button
    fireEvent.press(plusButtons[2]);
    
    // There should now be two "11" values on screen (if we haven't touched Player 1)
    // But since we're only checking Player 2, we just verify the increment happened
    const elevenValues = screen.getAllByText('11');
    expect(elevenValues.length).toBeGreaterThan(0);
  });

  it('formats numbers with leading zeros correctly', () => {
    render(<GameScreen />);
    
    // Initial values should be formatted with leading zeros
    expect(screen.getAllByText('10')).toHaveLength(2); // Resources
    expect(screen.getAllByText('05')).toHaveLength(2); // Ex Resources  
    expect(screen.getAllByText('15')).toHaveLength(2); // Levels
    
    // After decrementing resource to single digits, should show leading zero
    const minusButtons = screen.getAllByText('-');
    fireEvent.press(minusButtons[0]); // Decrement to 9
    
    expect(screen.getByText('09')).toBeTruthy();
  });

  it('level values are displayed but cannot be modified', () => {
    render(<GameScreen />);
    
    // Level should display "15" initially
    const levelValues = screen.getAllByText('15');
    expect(levelValues).toHaveLength(2);
    
    // Level sections should not have plus/minus buttons
    // Since levels don't have adjustment buttons, the total + buttons should be 4 (2 per player for resource and ex resource)
    const plusButtons = screen.getAllByText('+');
    expect(plusButtons).toHaveLength(4);
    
    const minusButtons = screen.getAllByText('-');
    expect(minusButtons).toHaveLength(4);
  });
});
