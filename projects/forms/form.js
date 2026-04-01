document.getElementById('myForm').addEventListener('submit',function(event) {
event.preventDefault();

const fname = document.getElementById('fname').value;
const email = document.getElementById('email').value;
const hairColor = document.getElementById('haircolor').value;
const gender = document.getElementById('gender').value;
const checkedBox = document.getElementById('check');
const comment = document.getElementById('comments').value;
const age = document.getElementById('age').value;

if (!fname || !email) {
    alert("You need a name and email.")
    return;
}
if (!age || age < 18) {
    alert("You need to be 18")
}

if (!checkedBox.checked) {
    alert("You must agree to the terms.")
    return;
}

const formData = {
    name: fname,
    email:  email,
    hair: hairColor,
    age: age,
    gender: gender,
    checkbox: checkedBox.checked,
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