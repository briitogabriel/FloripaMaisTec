
// QUERY EXECUTION EXAMPLES

(async() => {
  const database = require('./db');

  // ---------- CREATE TABLE (Config file)
  const Equipment = require('./equipment');

  await database.sync();

  // ---------- INSERT INTO
  // const newEsteira = await Equipment.create({
  //   nome: 'Esteira',
  //   preco: 2000,
  //   descricao: 'Alto impacto'
  // });

  // ---------- INSERT INTO
  // const newBicicleta = await Equipment.create({
  //   nome: 'Bicicleta',
  //   preco: 1200,
  //   descricao: '12 marchas'
  // });

  // ---------- SELECT * FROM
  const Allequipments = await Equipment.findAll();
  console.log(Allequipments);

  // ---------- SELECT ... WHERE
  // const secondEquipment = await Equipment.findByPk(2);  // 2 = second equipment
  // console.log(secondEquipment);

  // ---------- UPDATE .... SET (WHERE COMES FROM THE SELECT ABOVE)
  // secondEquipment.descricao = '18 marchas';
  // await secondEquipment.save();
  // console.log(secondEquipment);

  // ---------- DELETE FROM (WHERE COMES FROM THE SELECT ABOVE)
  // await secondEquipment.destroy();

  // ---------- SELECT ... WHERE
  const thirdEquipment = await Equipment.findByPk(3);
  console.log(thirdEquipment);

})();