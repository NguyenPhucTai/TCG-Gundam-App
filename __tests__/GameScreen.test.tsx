import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Counter from '../components/Counter';
import Button from '../components/Button';

describe('Counter Component', () => {
  it('renders correctly with basic props', () => {
    render(<Counter label="Resource" value={10} /> as React.ReactElement);
    
    expect(screen.getByText('Resource')).toBeTruthy();
    expect(screen.getByText('10')).toBeTruthy();
  });

  it('renders buttons when hasButtons is true', () => {
    render(<Counter label="Resource" value={10} hasButtons={true} /> as React.ReactElement);
    
    expect(screen.getByText('+')).toBeTruthy();
    expect(screen.getByText('-')).toBeTruthy();
  });

  it('formats value correctly', () => {
    const formatValue = (value: number) => value.toString().padStart(2, '0');
    render(<Counter label="Ex Resource" value={5} formatValue={formatValue} /> as React.ReactElement);
    
    expect(screen.getByText('05')).toBeTruthy();
  });
});

describe('Button Component', () => {
  it('renders correctly', () => {
    const mockPress = jest.fn();
    render(<Button onPress={mockPress}>Test Button</Button> as React.ReactElement);
    
    expect(screen.getByText('Test Button')).toBeTruthy();
  });
});
