import { getConnection, sql} from '../database/connections'

export const getStudents = async (req, res) => {

    const pool = await getConnection();

    const result = await pool.request()
    .query('SELECT * FROM VW_Estudiantes');

    res.json(result.recordset)
}