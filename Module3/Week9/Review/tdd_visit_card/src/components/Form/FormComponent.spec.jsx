import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { FormComponent } from './FormComponent';

// import { vi } from 'vitest';
// const fn = vi.fn();   // Criar mock da função

describe('Suite de testes caso o formulário seja preenchido corretamente', () => {
  beforeEach(() => {
    render(<FormComponent />);
  });

  it('Formulário está sendo renderizado na tela', () => {
    const form = screen.getByTestId('form-testid')
    expect(form).toBeInTheDocument()
  });
  it('Formulário possui o campo nome', () => {
    const input = screen.getByPlaceholderText('Digite seu nome')
    expect(input).toBeInTheDocument()
  });
  it('Formulário possui o campo email', () => {
    const input = screen.getByPlaceholderText('Digite seu e-mail')
    expect(input).toBeInTheDocument()
  });
  it('Formulário possui o botão submit', () => {
    const button = screen.getByRole('button', {type: 'submit'})
    expect(button).toBeInTheDocument()
  });
  it('Envio do formulário está sendo feito com sucesso', () => {
    
  });
});


describe('Suite de testes caso os campos do formulário não sejam preenchidos', () => {
  beforeEach(() => {
    render(<FormComponent />);
  });

  it('Formulário está sendo renderizado na tela', () => {
    const form = screen.getByTestId('form-testid')
    expect(form).toBeInTheDocument()
  });
  it('Formulário possui o campo nome', () => {
    const input = screen.getByPlaceholderText('Digite seu nome')
    expect(input).toBeInTheDocument()
  });
  it('Formulário possui o campo email', () => {
    const input = screen.getByPlaceholderText('Digite seu e-mail')
    expect(input).toBeInTheDocument()
  });
  it('Formulário possui o botão submit', () => {
    const button = screen.getByRole('button', {type: 'submit'})
    expect(button).toBeInTheDocument()
  });
  it('Exibe um erro no envio do formulário', () => {
    const errorMessage = screen.getByText('Campos não foram preenchidos')
    expect(errorMessage).toBeInTheDocument();
  });
  it('Exibe um erro no email pois não foi preenchido', () => {
    const emailInput = screen.getByPlaceholderText('Digite seu e-mail')
    fireEvent.input(emailInput, {value: 'teste@email.com'})

    const errorMessage = screen.getByText('Campos não foram preenchidos')
    expect(errorMessage).toBeInTheDocument();
  });
  it('Exibe um erro no nome pois não foi preenchido', () => {
    const nameInput = screen.getByPlaceholderText('Digite seu nome')
    fireEvent.input(nameInput, {value: 'Teste'})

    const errorMessage = screen.getByText('Campos não foram preenchidos')
    expect(errorMessage).toBeInTheDocument();
  });
});