import { getConnection } from '../database/connections'

export const getDocentes = async (req, res) => {
   
    const pool = await getConnection();
    const result = await pool.request()
    .query("SELECT * FROM Docente");

    res.json(result)
}; 