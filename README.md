# TestSoyYo
_______________________________________________________________________________
API hecha en AdonisJs un framework de NodeJs

Pasos para ejecutar el código en local:

1. descargar el código del repositorio git clone https://github.com/cjat07/TestSoyYo.git
2. instalar los modulos de node con el comando -> npm install
3. crear un archivo .env en la carpeta del proyecto con el siguiente contenido:
_______________________________________________
        PORT=3333
        HOST=0.0.0.0
        NODE_ENV=development
        APP_KEY=l5q7563IgIQgw_SnuLo-Xfs84rGD62lw
        DRIVE_DISK=local
 _______________________________________________

4. para arrancar el API se necesita estar en la carpeta del proyecto y ejecutar el comando -> node ace serve --watch

________________________________________
        Nota: la ruta para filtrar es -> 127.0.0.1:3333//entities/filter  y enviando un JSON
        {
                "parameters": "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16"
                //"parameters": "Rango deseado de tipo string"
        }
________________________________________

_______________________________________________________________________________________________________

Pasos para ejecutar las Unit Test

1. ejecutar el comando -> node ace test 

_______________________________________________________________________________________________________

Nota: para crear la imagen es
_______________________________________________________
 docker build -t co.com.soyyo.entity.filter-dev-1_0_0 .
_______________________________________________________ 
para crear el contenedor es: 
___________________________________________________________________________
docker create -p3333:3333 --name soyyo co.com.soyyo.entity.filter-dev-1_0_0
___________________________________________________________________________
