
## Week 3 - BirthdayAlarm

### Javascript DOM, Interval, Timeout. Enunciated below in portuguese:

**[M1S03] Ex 4 - Alarme de Aniversário**

Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela deve dizer quantos dias faltam para chegar a data.
Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo.
- const d1  = '2021-10-05';
- const d2    = '2021-11-12';
- const diffInMs   = new Date(d2) - new Date(d1)
- const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
- console.log(diffInDays) // 38
## Stack

#### Vite, Javascript, CSS, HTML
## Local use

#### You must have node installed
Clone

```bash
  git clone https://github.com/briitogabriel/FloripaMaisTec.git
```

Access project's directory

```bash
  cd Module1/Week3/BirthdayAlarm
```

Install dependencies

```bash
  npm install
```

Run server

```bash
  npm run dev
```

Open the browser and access the server address

```bash
  http://127.0.0.1:5173/
```
