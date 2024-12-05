var admin = require("firebase-admin");
var serviceAccount = require("./clave.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proy-1-5cfd1-default-rtdb.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");

usersRef.set({
    usuarios: {
      name: "Carlos Reyes",
      age: 28,
      salary: 2304.54
    }
  })
  .then(() => {
    console.log("Datos guardados correctamente");
  })
  .catch((error) => {
    console.error("Error al guardar los datos:", error);
  });
  
