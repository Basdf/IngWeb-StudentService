# Student Service

Api rest creada con node.js express y mongodb para el manejo de un grupo de estudiando de una materia en especifico. la aplicacion corre en el puerto 3505. Para la configuracion de la base de datos cambiar la url de conexion en "app\config\db.config.js".

# Metodos
La api tiene los siguientes metodos.

## create
Metodo Post para crear un estudiando en la coleccion. El metodo se consume como una petición POST con la siguiente url "localhost:3505/api/Students/" y enviando en el cuerpo de la petición el siguiente json:
```json
{
	"firstName":"Eduardo",
	"lastName":"Velasquez Velez",
	"email":"eduardo.velaquezv@udea.edu.co",
	"id":"11555554577",
	"career":"ingenieria de sistemas",
	"semester":"8",
	"note":4.2
}
```
## findAll
Metodo Get para traer todos los documentos dentro de la coleccion. El metodo se consume como una peticion GET con la siguiente url
"localhost:3505/api/Students/"

## findOne
Metodo Get para traer un documentos dentro de la coleccion. El metodo se consume como una peticion GET con la siguiente url
"localhost:3505/api/Students/id/:id"

## findByCareer
Metodo Get para traer todos los  documentos dentro de la coleccion identificados por su carrera. El metodo se consume como una peticion GET con la siguiente url "localhost:3505/api/Students/career/:career".

## findBySemester
Metodo Get para traer todos los  documentos dentro de la coleccion identificados por su semestre. El metodo se consume como una peticion GET con la siguiente url "localhost:3505/api/Students/semester/:semester".

## update
Metodo Put para modificar un documento dentro de la coleccion identificado por su id. El metodo se consume con una peticion PUT con la siguiente url "localhost:3505/api/Students/id/:id" y enviando en el cuerpo de la peticion los campos a modificar como en el sigiente json.
```json
{
	"semester":"7",
	"note":3
}
```
## updateByCareer
Metodo Put para modificar todos los documento dentro de la coleccion identificado por su carrera. El metodo se consume con una peticion PUT con la siguiente url "localhost:3505/api/Students/career/:career" y enviando en el cuerpo de la peticion los campos a modificar como en el sigiente json.
```json
{
	"email":"correoDePrueba1@udea.edu.co"
}
```
## updateBySemester
Metodo Put para modificar todos los documento dentro de la coleccion identificado por su semestre. El metodo se consume con una peticion PUT con la siguiente url "localhost:3505/api/Students/semester/:semester" y enviando en el cuerpo de la peticion los campos a modificar como en el sigiente json.
```json
{
	"email":"correoDePrueba1@udea.edu.co"
}
```
## delete
Metodo Delete para eliminar un documento dentro de la coleccion identificado por su id. El metodo se consume con una peticion DELETE
con siguiente url "localhost:3505/api/Students/id/:id".

## deleteAll
Metodo Delete para eliminar todos los documentos dentro de la coleccion. El metodo se consume con una peticion DELETE
con siguiente url "localhost:3505/api/Students/".

## average
Metodo Get que trae el promedio de nota de todos los estudiantes en la coleccion. el metodo se El metodo se consume con una peticion GET
con siguiente url "localhost:3505/api/Students/average".
