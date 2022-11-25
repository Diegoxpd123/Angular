const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from pokemon'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})



//agregar equipo
router.post('/',( req, res)=>{
    const{name, img, hp, experiencia , ataque, defensa, especial} = req.body

    let sql = `insert into pokemon(name, img, hp, experiencia , ataque, defensa, especial) values('${name}','${img}','${hp}','${experiencia}','${ataque}','${defensa}','${especial}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pokemon agregado'})
        }
    })
})



module.exports = router