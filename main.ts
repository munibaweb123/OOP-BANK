//OOP Bank console app

interface ibankaccount{
    credit (amount:number) : void;
    debit (amount:number) : void;
}

class Bankaccount implements ibankaccount {
    accountBalance : number;
    constructor(accountbalance:number){
        this.accountBalance = accountbalance;
    }
    public credit (amount:number){
        if(amount>0){
            this.accountBalance+=amount;
            console.log("Credit successfully get into new account and balance is:"+this.accountBalance)
            
        }
    }
    public debit(amount: number) {
        if(amount>0 && amount<this.accountBalance){
            this.accountBalance-=amount
            console.log("debit successfully share to new account balance:"+this.accountBalance)
        }
        else{
            console.log("debit unsuccessfully")
        }
    }

}
class customer{
    person:{
        firstname:string;
        lastname:string;

    }
    age:number
    gender:string
    mobilenumber:number
    bankaccount:Bankaccount

    constructor(person:{firstname:string,lastname:string},age:number,gender:string,mobilenumber:number,bankaccount:Bankaccount){
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobilenumber = mobilenumber;
        this.bankaccount = bankaccount;
    }
    public display(){
        console.log("Name:"+this.person.firstname+" "+this.person.lastname);
        console.log("Age:",this.age);
        console.log("Gender:",this.gender);
        console.log("Mobile Number:",this.mobilenumber);
        console.log("Amount in bank:",this.bankaccount.accountBalance);

    }
}
const a1 = new Bankaccount(95000)
const c1 = new customer({firstname:"Muniba",lastname:"Ahmed"},25,"female",3420024683,a1)
c1.display()
c1.bankaccount.debit(500)
const a2 = new Bankaccount(0)
const c2 = new customer({firstname:"Shayan",lastname:"Ali"},27,"Male",554565778,a2)
c2.display()
c2.bankaccount.debit(700)
c2.bankaccount.credit(5000)
c2.bankaccount.debit(1500)
