let projectName = localStorage.getItem("projectName");
let id = localStorage.getItem('id');
console.log(projectName,id)
function displaygrid(){
    let n=29;
    // document.getElementById("calender")="";

    for(let i=1;i<n;i++){
        let div=document.createElement("div");
        div.setAttribute("id",i);
        let h5=document.createElement("h5");
        h5.innerText= `Sep-${i}`;
        let selectedDate;
        if(i<10){
            selectedDate = `0${i}/09/2022`
        } else{
            selectedDate = `${i}/09/2022`
        }
        h5.onclick = () => {
            localStorage.setItem("date", selectedDate);
            localStorage.setItem("id", i);
            location.href = "createproject.html"
        }
        
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
addTask (projectName)
function addTask (projectName) {
    let taskDivadd = document.getElementById(id);
    if(projectName!=""){    
        let div1 = document.createElement("div");
        div1.setAttribute=("id","taskDiv")
        let projectNameH6 = document.createElement("h6");
        let removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove"
        removeBtn.onclick = () => {
            projectName = "";
            localStorage.setItem('projectName',projectName);
            location.href = "calender.html";
        }
        projectNameH6.innerText = projectName;
        div1.append(projectNameH6, removeBtn)
        taskDivadd.append(div1);
    } 
}