import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardComponent } from './CardComponent';

describe('Suite de testes no caso de sucesso', () => {

  beforeEach(() => {
    render(<CardComponent />);    // REFACTORY -> Fazer com que seja renderizado o Component beforeEach test case
  });

  it('Componente está sendo renderizado na tela', () => {
    // render(<CardComponent />)
    const component = screen.getByTestId('card-testid')
    expect(component).toBeInTheDocument();
    //  find = true/false
    //  get = promise
    //  query = promise
  });

  it('Está redirecionando para o Github', () => {
    // render(<CardComponent />);
    const githubLink = screen.getByTestId('github-link')
    expect(githubLink).toHaveAttribute('href', 'https://github.com')
  });

  it('Está redirecionando para o LinkedIn', () => {
    // render(<CardComponent />);
    const linkedinLink = screen.getByTestId('linkedin-link')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com')
  })

  it('Está exibindo o título do Card correto', () => {
    // render(<CardComponent />);
    const titulo = screen.getByText(/Robert Santos/);
    expect(titulo).toBeInTheDocument();
  })
});