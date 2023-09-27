import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { CounterComponent } from './CounterComponent';

// import { vi } from 'vitest';
// const fn = vi.fn();   // Criar mock da função

describe('Suite de testes do CounterComponent', () => {

  beforeEach(() => {
    render(<CounterComponent />);    // REFACTORY -> Fazer com que seja renderizado o Component beforeEach test case
  });

  it('Componente está sendo renderizado na tela', () => {
    const component = screen.getByTestId('counter-testid')
    expect(component).toBeInTheDocument()
  });

  it('Componente possui botão com o título "Clique Aqui"', () => {
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Clique Aqui')
  });

  it('Componente inicializa com o valor zerado', () => {
    const value = screen.getByTestId('counter-value')
    expect(value).toHaveTextContent("0")
  });

  it('Clique no botão está alterando contador', () => {
    const button = screen.getByText(/Clique Aqui/)
    fireEvent.click(button)
    // expect(fn).toBeCalled()

    const value = screen.getByTestId('counter-value')
    expect(value).toHaveTextContent("1")
  });
});