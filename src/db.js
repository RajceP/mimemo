import Dexie from 'dexie';

const db = new Dexie('mimemo');
db.version(1).stores({ memos: '++memoid' });

export default db;
