/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la 
propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved;

for (let i = 0; i < alumns.length; i++) {
    if (alumns[i].T1 + alumns[i].T2 + alumns[i].T3 >= 2) {
        console.log(alumns[i].name + ' Tiene 2 o más trimestres aprobados');
        alumns[i].isApproved = true;
    }
    else {
        console.log(alumns[i].name + ' NO Tiene 2 o más trimestres aprobados');
        alumns[i].isApproved = false;
    }
}

console.log(alumns);

