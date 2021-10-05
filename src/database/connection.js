import sql from 'mssql'


const dbSettings = 
new (require('rest-mssql-nodejs'))({

    user:"celeste",
    password:"Lapaz2021",
    server:"localhost",
    database: "application_institute",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
}); 
export async function getConnection () {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
    
  } catch (error) {
    console.error()
  }
  }
