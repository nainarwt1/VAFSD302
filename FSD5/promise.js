const printMessage =(msg)=>{
    console.log(msg);
}
const wait=(msg,sec)=>{
    setTimeOut(()=>{
        printMessage(msg);
        3,sec);
    }
    const bookTicket=()=>{
        printMessage("Welcome!");
        wait("Login successfully",3000);
        .then(()=> wait("seat has been selected succesfully",2000));
        .then(()=> wait("seat confirmed",1000));
        .then(()=>wait("Payment has been done",2000));
        .then(()=>wait("Tickeet issued  successfully",2000));
        .then(()=>printMessage("Thankyou for visiting our site"));
    }