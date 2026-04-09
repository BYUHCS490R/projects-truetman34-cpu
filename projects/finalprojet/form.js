document.getElementById('myForm').addEventListener('submit',function(event) {
event.preventDefault();

const fname = document.getElementById('fullname').value;
const email = document.getElementById('email').value;
const yes= document.getElementById('yes').value;
const no = document.getElementById('no').value;
const comment = document.getElementById('comments').value;

if (!fname || !email) {
    alert("You need a name and email.")
    return;
}

if (!yes || !no) {
    alert("You need check yes or no")
    return;
}

if (!comment) {
    alert("You must submit a comment")
    return;
}

const formData = {
    name: fname,
    email:  email,
    yes: yes,
    no: no,
    comments: comment
};

console.log(formData);
const xhr = new XMLHttpRequest();
xhr.open("GET", "submit.json", true);
xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Form submitted successfully!");
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        //document.getElementById('myForm').reset();
        document.getElementById('myForm').innerHTML = '';
        document.getElementById('message').innerText = response.message;
    } else if (xhr.readyState === 4) {
        alert("Error submitting form.");
    }
};
xhr.send(JSON.stringify(formData));
});