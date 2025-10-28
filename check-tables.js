require('dotenv').config();
const { pool } = require('./database');

async function checkTables() {
  const [tables] = await pool.query('SHOW TABLES');
  console.log('📊 Tables in database:', tables);
  
  const [appStatus] = await pool.query('SELECT * FROM app_status');
  console.log('📅 App status:', appStatus);
  
  const [countCountries] = await pool.query('SELECT COUNT(*) as total FROM countries');
  console.log('🌍 Total countries:', countCountries[0].total);
  
  process.exit(0);
}

checkTables().catch(console.error);