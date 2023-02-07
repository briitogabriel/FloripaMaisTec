    // ----------------------- EX 1
  const students = [
    {
      name: 'Gabriel',
      height: 1.80,
      age: 28,
      gender: 'Male',
      class: 'Trindade'
    },
    {
      name: 'Fulano',
      height: 1.75,
      age: 23,
      gender: 'Male',
      class: 'Campeche'
    },
    {
      name: 'Glauberto',
      height: 1.60,
      age: 34,
      gender: 'Male',
      class: 'Barra'
    },
    {
      name: 'Jucilene',
      height: 1.74,
      age: 38,
      gender: 'Female',
      class: 'Centro'
    },
    {
      name: 'Lala',
      height: 1.45,
      age: 18,
      gender: 'Female',
      class: 'Córrego Grande'
    }
  ]
  console.log('Exercício 1: array de alunos')
  console.log(students)

  // ----------------------- EX 2
  const students2 = [
    {
      name: 'Gabriel',
      height: 1.80,
      age: 28,
      gender: 'Male',
      classRoom: 'Trindade',
      mathGrade: 10
    },
    {
      name: 'Fulano',
      height: 1.75,
      age: 23,
      gender: 'Male',
      classRoom: 'Campeche',
      mathGrade: 7
    },
    {
      name: 'Glauberto',
      height: 1.60,
      age: 34,
      gender: 'Male',
      classRoom: 'Barra',
      mathGrade: 6
    },
    {
      name: 'Jucilene',
      height: 1.74,
      age: 38,
      gender: 'Female',
      classRoom: 'Centro',
      mathGrade: 8
    },
    {
      name: 'Lala',
      height: 1.45,
      age: 18,
      gender: 'Female',
      classRoom: 'Córrego Grande',
      mathGrade: 5
    }
  ];

  let sumOfGrades = 0;
  let totalStudents = students2.length;

  students2.forEach(student => {
    sumOfGrades = sumOfGrades + student.mathGrade
    // totalStudents = totalStudents + 1
  });
  
  console.log('Exercício 2: média das notas')
  console.log(students2)
  console.log(sumOfGrades / totalStudents)

  // ----------------------- EX 3
  const students3 = [];
  const approvedGrade = 7;

  students2.forEach(student => {
    let isApproved = student.mathGrade >= approvedGrade ? 'Yes' : 'No';

    students3.push({
      name: student.name,
      mathGrade: student.mathGrade,
      approved: isApproved
    })
  })

  console.log(`Exercício 3: aprovados (média >= ${approvedGrade})`)
  console.log(students3)
  
  // ----------------------- EX 4
  console.log('Exercício 4: publicar no github')