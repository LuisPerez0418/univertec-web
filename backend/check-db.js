import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to Atlas.');
    const adminDb = mongoose.connection.db.admin();
    const dbs = await adminDb.listDatabases();
    console.log('Databases:', dbs.databases.map(d => d.name));
    
    // Check 'univertec' database specifically
    const univertecDb = mongoose.connection.client.db('univertec');
    const progs = await univertecDb.collection('programas').find().toArray();
    console.log('Programas in univertec DB:', progs.length);
    
    process.exit(0);
  })
  .catch(console.error);
