// Inventario de perfiles gamer

//Muestra todos los documentos de la colección registros
db.registros.find({});

//Muestra todos los documentos de la colección registros que tengan la categoría "competitivo"
db.registros.find({ "categoria": "competitivo" });  

//Actualiza el campo activo a false para el documento con nombre "Misión Sigilo"
db.registros.updateOne(
  { "nombre": "Misión Sigilo" },
  { $set: { "activo": false } }
);

//Muestra el documento con nombre "Misión Sigilo" para verificar la actualización
db.registros.find(
  { "nombre": "Misión Sigilo" }
);

//Muestra el documento con nombre "Battle Royale - Solos" para verificar su existencia antes de eliminarlo
db.registros.find({"nombre": "Battle Royale - Solos"});

//Elimina el documento con nombre "Battle Royale - Solos"
db.registros.deleteOne({ "nombre": "Battle Royale - Solos" });