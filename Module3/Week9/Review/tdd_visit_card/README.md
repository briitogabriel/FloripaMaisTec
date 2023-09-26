# TDD STEPS

## Tests libs instalation:
```
npm install vitest @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom -D
```

## Include in vite.config.js:
```
/// <reference types="vitest"/>
/// <reference types="vite/client"/>

  test: {
    globals: true,
    environment: 'jsdom',
  }
```

## Create COMPONENT.test.jsx (main tests) and add:
```
import '@testing-library/jest-dom'
```

## Tests files can have 2 name formats, and both will be watched by JEST:
- .test
- .spec

## Tests types:
- UNIT (unitários, testam a menor parte de uma Aplicação)
- Integration (testam a integração entre Componentes ou Funções)
- E2E (End to End, testam toda a interação com a Aplicação)