const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React Native', 'Node.js' ];

//Anñadir elementos al arreglo 
//tecnologias.push('OpenLayers'); // añade elementos al final del arreglo 
tecnologias.unshift('ElementoAlInicio') // añade elementos al inicio del arreglo

// Tomar una copia del arreglo y agregarle un elemento al final
//const nuevoArreglo = [...tecnologias, 'OpenLayers']

// Tomar una copia del arreglo y agregarle un elemento al inicio
//const nuevoArreglo = ['OpenLayers', ...tecnologias, ]

//Eliminar elementos de un arreglo

//tecnologias.pop() //Eliminar al final
//tecnologias.shift(2) //Eliminar al inicio
///tecnologias.splice(1)


//filtrar datos de un arreglo quitando elementos del mismo 
const nuevoArreglo = tecnologias.filter( function(tech) {
    //console.log(tech)
    return tech !== 'HTML'  && tech !== 'Node.js'
})

//remplazar un elemento en el arreglo 

const nuevoArray = tecnologias.map(function(tech){
    if (tech === 'HTML') {
        return 'Pantilla'
    } else {
        return tech
    }
})


console.table(nuevoArreglo)
//arreglo actualizado utilizando destructuring
console.table(tecnologias)

console.table(nuevoArray)


