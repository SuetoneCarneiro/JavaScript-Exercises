/* https://ifpb.github.io/exercises/problems/object-company-collection/ */

const companies = [
    {
        name: 'Amazon',
        founded: '1994',
        industry: 'E-commerce, Cloud',
        kind: 'Internet Company'
    },
    {
        name: 'Facebook',
        founded: '2004',
        industry: 'Social',
        kind: 'Internet Company'
    },
    {
        name: 'Alphabet Inc.',
        founded: '2015',
        industry: 'Search, Cloud, Advertising',
        kind: 'Internet Company'
    }
]

companies.map((company) => console.log(company.name.padEnd(19, '.') + company.founded))
