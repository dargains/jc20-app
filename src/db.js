import Dexie from 'dexie';

const db = new Dexie('JC20')
db.version(1).stores({
  copy: '++id, value',
  user: 'id, name, email, agent',
  units: 'id',
  content: 'page, content',
  status: '++id, label, status',
  images: 'id'
})

export default db;