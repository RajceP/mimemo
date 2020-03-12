import Dexie from 'dexie';

const db = new Dexie('ReactSampleDB');
db.version(1).stores({ memos: '++memoid' });

export default db;