## TDD STEPS

# Tests libs instalation:
npm install vitest @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom -D

# Include in vite.config.js:
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
  test: {
    globals: true,
    environment: 'jsdom',
  }

# Create COMPONENT.test.jsx (main tests) and add:
import '@testing-library/jest-dom'