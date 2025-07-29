import React from 'react';

// Interface for Button component props
export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'control';
  disabled?: boolean;
}
