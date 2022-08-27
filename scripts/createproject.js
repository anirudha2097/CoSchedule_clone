let date = localStorage.getItem("date");

document.getElementById("date").innerText = date;

document.getElementById('create_btn').onclick = () => {
    let project = document.getElementById('proname').value;
    localStorage.setItem('projectName', project);
    location.href = "calender.html";
}