function helloWorld(language){
    //let lanchoice = window.prompt("Enter the language")

    if(language =="en"){
        window.alert("Hello world");

    }else if(language == "it"){
        window.alert("Ciao Mondo");
    }else if(language =="de"){
        window.alert("Hall welt");
    }else if(language == "ትግ"){
        window.alert("ሰላም ከምይ");
    }else if (language == "wo"){
        window.alert("Nangah deff");
    }
}

var userLan = prompt("Enter language");
window.alert(helloWorld(userLan));
