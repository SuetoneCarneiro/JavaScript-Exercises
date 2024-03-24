/* https://ifpb.github.io/exercises/problems/object-company-collection/ */

class Companies{
    static MAX_NAME_LENGTH = 0

    constructor(){
        this.companies = []
    }

    add(company){
        this.companies.push(company)

        if(company.name.length > Companies.MAX_NAME_LENGTH){
            Companies.MAX_NAME_LENGTH = company.name.length
        }
    }

    show(){
        return this.companies.map((company) => company.show()).join('\n')
    }
}

class Company{

    constructor(name, founded, industry, kind){
        this.name=name
        this.founded=founded
        this.industry=industry
        this.kind=kind
    }
    //name_length = this.name.length
    show(){
        return this.name.padEnd(Companies.MAX_NAME_LENGTH + 3, '.') + this.founded
    }
}

const companies = new Companies

companies.add(
    new Company('Amazon', '1994', ['E-Commerce', 'Cloud'], 'Internet Company')
)

companies.add(
    new Company('Facebook', '2004', ['Social'], 'Internet Company')
)

companies.add(
    new Company('Alphabet Inc.', '2015', ['Search', 'Cloud', 'Advertising'], 'Internet Company')
)

console.log(companies.show())
