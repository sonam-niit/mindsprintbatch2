class Account{
    constructor(accHolderName,accNo,balance){
        this.accHolderName=accHolderName;
        this.accNo=accNo;
        this.balance=balance
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount;
            console.log(`${amount} debited from you account ${new Date().toLocaleDateString()}
             Available balance: ${this.balance}`);
        }else{
            console.log('Insufficient Balance');
        }
    }
    diposit(amount){
        this.balance+=amount;
        console.log(`${amount} credited to your account ${new Date().toLocaleDateString()}
        Available balance: ${this.balance}`);
    }
    getBalance(){
        return this.balance;
    }
    displayDetails(){
        console.log(`Acc Holder Name: ${this.accHolderName}`);
        console.log(`Acc Number: ${this.accNo}`);
        console.log(`available Balance: ${this.balance}`);
    }
}
class SavingAccount extends Account{
    constructor(accHolderName,accNo,balance,intrest=0.02){
        super(accHolderName,accNo,balance);
        this.intrest=intrest;
    }
    diposit(amount){
        const intrestAmount= amount * this.intrest /100;
        super.diposit(amount+intrestAmount);
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Intrest Rate: ${this.intrest}`);
        
    }
}
class CurrentAccount extends Account{
    constructor(accHolderName,accNo,balance,overDraftLimit=500){
        super(accHolderName,accNo,balance);
        this.overDraftLimit=overDraftLimit;
    }
    withdraw(amount){
        if(this.balance>= this.balance+this.overDraftLimit){
            super.withdraw(amount);
        }else{
            console.log("No sufficient Balance");
        }
    }
    displayDetails(){
        super.displayDetails();
        console.log(`OverDraftLimit: ${this.overDraftLimit}`);
        
    }
}
class UserInterface{
    constructor(){
        this.acc=null;
    }
    createAccount(){
        this.acc= new SavingAccount('Sonam Soni','1234567890000',45678,0.04);
    }
    getBalance(){
        console.log("balance: "+this.acc.getBalance());
    }
    getDetails(){
        this.acc.displayDetails();
    }
    diposit(amount){
        this.acc.diposit(amount);
    }
    withdraw(amount){
        this.acc.withdraw(amount);
    }
}
const ui= new UserInterface();
ui.createAccount();
ui.diposit(3000);
ui.withdraw(2000);
ui.getDetails();
