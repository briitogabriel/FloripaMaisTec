import React from 'react'

export const CardComponent = () => {
  return (
    <div data-testid="card-testid">
      <h1>Gabriel Brito</h1>
      <a href="https://github.com" target="_blank" rel="noreferrer" data-testid="github-link">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" data-testid="linkedin-link">LinkedIn</a>
    </div>
  )
}
