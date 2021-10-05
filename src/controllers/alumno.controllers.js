import { getConnection } from "../database/connection";


export const getAlumno = async (req, res) => {
    try { const pool = await getConnection();
        const result = await pool.request().query("SELECT * from Alumno");
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }

};

export const createNewAlumno = (req,res) => {
    res.json('new alumno')
}