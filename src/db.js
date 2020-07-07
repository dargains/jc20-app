import Dexie from 'dexie';

const db = new Dexie('JC20')
db.version(1).stores({
  copy: '++id, value',
  units: 'id'
})

export default db;