class Investor {
    static agressive = 0.5
    static conservative = 0.1
    constructor (firstName, money, style){
        this.firstName = firstName
        this.money = money
        this.style = style
    }

howMutchShoulsInvest(){
if (this.style === "agressive"){
    return `${this.firstName} ${this.money * Investor.agressive}`
}
else if (this.style === "conservative") {
    return `${this.firstName} ${this.money * Investor.conservative}`
}
}
}

const Vasya = new Investor('Vasya', 1000000, 'agressive')
const Kolya = new Investor('Kolya', 500000, 'conservative')


console.log(Vasya.howMutchShoulsInvest())
console.log(Kolya.howMutchShoulsInvest())