import sql from 'mssql'

const dbsettings = {
    user: "administrador",
    password: "admin",
    server: "localhost",
    database: "BD_Integracion_st_mary",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection(){
   try {
    const pool = await sql.connect(dbsettings);
    return pool;
   }catch(error){
        console.error(error);
   }

   
}

export { sql }
