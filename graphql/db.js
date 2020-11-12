export const people = [
    {
        id: 1,
        name: 'jhero',
        age: 18,
        gender: 'female'
    },
    {
        id: 2,
        name: 'jiwon',
        age: 32,
        gender: 'male'
    },
    {
        id: 3,
        name: 'sangone',
        age: 12,
        gender: 'female'
    },
    {
        id: 4,
        name: 'jinseok',
        age: 29,
        gender: 'male'
    },
    {
        id: 5,
        name: 'minsuck',
        age: 22,
        gender: 'female'
    },
    {
        id: 6,
        name: 'whois',
        age: 20,
        gender: 'female'
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]
};