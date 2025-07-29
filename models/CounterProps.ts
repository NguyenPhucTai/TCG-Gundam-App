// Interface for Counter component props
export interface CounterProps {
  label: string;
  value: number;
  hasButtons?: boolean;
  formatValue?: (value: number) => string;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
