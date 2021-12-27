var people = [
    {
        name: 'Arailson Santos de Aragão',
        tel:  '+55 (11) 94985-6602',
        xp: true
    },
    {
        name: 'Rosangela Bayma de Oliveira',
        tel:  '+55 (11) 94985-6602',
        xp: false
    },
    {
        name: 'Manuella Bayma dos Santos',
        tel:  '+55 (11) 94985-6602',
        xp: false
    },
    {
        name: 'Pietro Bayma dos Santos',
        tel:  '+55 (11) 94985-6602',
        xp: false
    },
];


for (person in people){
    document.querySelector('table.lista tbody').innerHTML+=`
    <tr style= "background-color: ${((person % 2 == 0) ? '#fff' : '#ddd')}">
        <td>
            ${people[person].name}
        </td>
        <td>
            ${people[person].tel}
        </td>
        <td>
            ${(people[person].xp ? '<strong style= "color: green"> Sim </strong>' : '<strong style= "color: red"> Não </strong>')}
        </td>
        <td>
            <button> Alterar </button>
        </td>

    </tr>`
}