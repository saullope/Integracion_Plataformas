import { getConnection ,sql } from '../database/connections'

export const getEducator = async (req, res) => {
   
    const pool = await getConnection();
    const result = await pool.request()
    .query("SELECT * FROM Docente");

    res.json(result.recordset)
}; 

export const getEmailEducator = async (req, res) => {

        try{
            const correo = req.body;

            const pool = await getConnection();
            const result = await pool.request()
            .input('correo', sql.VarChar, correo)
            .query('SELECT * FROM Docente WHERE correo = @correo')

            let valor = result.recordset.length;
            if (valor > 0){
                res.json(result.recordset)
            }else{
                res.json({ msg: "Este correo no existe!" })
            }

        }catch(error){
            console.error("Lo seintimos ha ocurrido un error: ",error);
            res.status(500);
            res.json(
                { msg: "Algo esta pasando :("
                })
        }

};

/** 
export const createNewEducator = async (req, res) => {
    
    const { name, apellidos } = req.body;

    if (name === null || apellidos === null) {
        return res.status(400).json({ msg: 'Bad Request, llena todos los campos' })
    }

        const pool = await getConnection();
        await pool.request()
            .input()
            .query('EXEC ')

};
*/

export const sessionEducator = async (req, res) => {
    try{

        const { correo, contrasena } = req.body;

        const pool = await getConnection();
        const result = await pool.request()
        .input('correo', sql.VarChar, correo)
        .input('contrasena', sql.VarChar, contrasena)
        .query('EXEC SP_ValidarSessionDocente @correo, @contrasena')

        let valor = result.recordset.length
        
        if (valor > 0){
             res.json(result.recordset);
         }else {
             res.json({ msg: "Reistro no encontrado." })
         }

    }catch(error){
        res.status(500)
        res.send("Algo ha salido mal: ",error)
    }
};