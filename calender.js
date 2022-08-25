// function displaydate(){
//     document.getElementById("disdate");
 
// let today=new Date();
// let day=`${today.getDate()<10?"0":""}${today.getDate()}`;

// let month=`${(today.getMonth()+1)<10?"0":""}${today.getMonth()+1}`;

// let year=today.getFullYear();
// disdate.textContent=`${day}/${month}/${year}`;
// }
// displaydate();

function displaygrid(){
    let n=29;
    // document.getElementById("calender")="";

    for(let i=1;i<n;i++){
        let div=document.createElement("div");

        let h5=document.createElement("h5");
        h5.innerText= `Sep ${i}`;

        
        div.append(h5);
        document.getElementById("calender").append(div);
    }
}
displaygrid();