function displaygrid(){
    let n=29;
    // document.getElementById("calender")="";

    for(let i=1;i<n;i++){
        let div=document.createElement("div");
        div.setAttribute("id",i);

        let h5=document.createElement("h5");
        h5.innerText= `Sep-${i}`;

        
        div.append(h5);
        document.getElementById("calender").append(div);
    }
}
displaygrid();

document.querySelector(".addpro").addEventListener("click",function(){
    window.location.href="createproject.html";
});


document.getElementById("calenderHomeBtn").onclick = () => {
    location.href = "sidebar.html";
}
document.getElementById("calenderBtn").onclick = () => {
    location.href = "calender.html";
}
document.getElementById("analyticsBtn").onclick = () => {
    location.href = "analytics.html";
}
document.getElementById('requeBtn').onclick = () => {
    location.href = "Reqeue.html";
}