let form = prompt("do u want to Login or Sign up / Changepassword ?")



// ^ Name :


if (form == "ok") {
    let name1 = prompt("type your name here")
// * name lenght
    while (name1.split(" ").join("").length < 5) {
        name1 = prompt("type your name here 2")
    }

// *Upper case 1 and 2
    name1 = name1.trim()

    let arr = name1.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(" ");


// * include
while (name1.includes("@" || "#" || "*" || "-" || "+" || "/")) {
    name1 = prompt("Do not type special characters @ , # , - , + , * , / ") 
}
console.log(name1);
console.log(str2);


// ^ Email :

let email = prompt("Type Your Email here")
// *email trim spaces
let email2 = email.trim().toLowerCase()
// * email lenght
while (email2.includes(" ") || email2.length < 10 ) {
    email2 = prompt("The email is short or it containes spaces")
}
// * email @ includes
while (email2 =! email.includes("@")) {
    email = prompt("Ops ! You forget the '@'")
}

// * Unique



// ! AGE 

let ageUser = prompt('please entre your age')
while ((ageUser.includes(" ")) || (ageUser == "") || (ageUser.length >= 3) || (ageUser == 0) || (isNaN(ageUser))) {
    ageUser = prompt('try again')
    // if (isNaN(ageUser)) {
    //     ageUser = prompt('try again')
    // }
}

console.log(ageUser);

}
