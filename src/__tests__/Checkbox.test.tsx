import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from '../components/primitives/Checkbox/Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Checkbox label="Test Checkbox" description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('handles click on wrapper', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Test Checkbox" onChange={handleChange} />);

    const wrapper = screen.getByText('Test Checkbox').closest('.checkbox__wrapper');
    fireEvent.click(wrapper!);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: true }),
      })
    );
  });

  it('handles click on checkbox box', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Test Checkbox" onChange={handleChange} />);

    const checkboxBox = screen
      .getByText('Test Checkbox')
      .closest('.checkbox__wrapper')
      ?.querySelector('.checkbox__box');
    fireEvent.click(checkboxBox!);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: true }),
      })
    );
  });

  it('toggles checked state correctly', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Checkbox label="Test Checkbox" checked={false} onChange={handleChange} />
    );

    const wrapper = screen.getByText('Test Checkbox').closest('.checkbox__wrapper');
    fireEvent.click(wrapper!);

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: true }),
      })
    );

    rerender(<Checkbox label="Test Checkbox" checked={true} onChange={handleChange} />);
    fireEvent.click(wrapper!);

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: false }),
      })
    );
  });

  it('does not trigger onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Test Checkbox" disabled onChange={handleChange} />);

    const wrapper = screen.getByText('Test Checkbox').closest('.checkbox__wrapper');
    fireEvent.click(wrapper!);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows error message', () => {
    render(<Checkbox label="Test Checkbox" error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(
      <Checkbox label="Test Checkbox" variant="solid" size="lg" className="custom-class" />
    );

    const checkboxGroup = container.querySelector('.checkbox-group');
    expect(checkboxGroup).toHaveClass('checkbox-group--solid');
    expect(checkboxGroup).toHaveClass('checkbox-group--lg');
    expect(checkboxGroup).toHaveClass('custom-class');
  });
});
