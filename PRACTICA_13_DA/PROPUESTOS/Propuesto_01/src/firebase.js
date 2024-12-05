const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-app-id.appspot.com' 
});

const db = admin.firestore();
const storage = admin.storage().bucket();

module.exports = { db, storage };
