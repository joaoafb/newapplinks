var segunda = document.querySelector("#segunda")
var terca = document.querySelector("#terca")
var quarta = document.querySelector("#quarta")
var quinta = document.querySelector("#quinta")
var sexta = document.querySelector("#sexta")
var option = document.querySelector(".option")
var admin = document.querySelector("#admin")
document.querySelector(".boxs").style.display = "none"
document.querySelector(".divuser").style.display = "none"
document.querySelector(".boxcad").style.display = "none"
document.querySelector("#divadmin").style.display = "none"

segunda.onclick = function() {
    option.style.display = "none"
    document.querySelector(".boxs").style.display = "block"
}


terca.onclick = function() {
    option.style.display = "none"
    document.querySelector(".boxs").style.display = "block"
}


quarta.onclick = function() {
    option.style.display = "none"
    document.querySelector(".boxs").style.display = "block"
}


quinta.onclick = function() {
    option.style.display = "none"
    document.querySelector(".boxs").style.display = "block"
}

sexta.onclick = function() {
    option.style.display = "none"
    document.querySelector(".boxs").style.display = "block"
}

admin.onclick = function() {
    document.querySelector("#divadmin").style.display = "block"
    document.querySelector(".divuser").style.display = "none"
    document.getElementById("notif").style.display = "none"
    document.querySelector(".boxnotif").style.display = "none"
    document.querySelector(".body").style.display = "none"
}


document.getElementById("notif").onclick = function abrirnotif() {
    document.querySelector(".boxnotif").style.display = "block"
    document.getElementById("notif").style.display = "none"
    document.querySelector(".body").style.display = "none"
    document.querySelector(".body").style.filter = "blur(5px)"
    document.querySelector(".divuser").style.display = "none"



}


document.getElementById("msg").onclick = function abrirmsg() {
    document.querySelector("#divadmin").style.display = "none"
    document.querySelector(".boxnotif").style.display = "block"

    document.getElementById("notif").style.display = "none"
    document.querySelector(".body").style.display = "none"
    document.querySelector(".body").style.filter = "blur(5px)"
    document.querySelector(".divuser").style.display = "none"


}

document.querySelector("#close").onclick = function fecharnotif() {
    document.querySelector("#divadmin").style.display = "none"
    document.querySelector(".boxnotif").style.display = "none"
    document.getElementById("notif").style.display = "block"
    document.querySelector(".body").style.display = "block"
    document.querySelector(".body").style.filter = "blur(0px)"

}

document.querySelector("#home").onclick = function abrirhome() {
    document.querySelector("#divadmin").style.display = "none"
    document.querySelector(".boxnotif").style.display = "none"
    document.getElementById("notif").style.display = "block"
    document.querySelector(".body").style.display = "block"
    document.querySelector(".body").style.filter = "blur(0px)"
    document.querySelector(".divuser").style.display = "none"

}



document.querySelector("#user").onclick = function() {
    document.querySelector("#divadmin").style.display = "none"
    document.querySelector(".body").style.display = "none"
    document.querySelector(".divuser").style.display = "block"
    document.querySelector(".boxnotif").style.display = "none"


    document.getElementById("exibirnome").innerHTML = localStorage.getItem("nome").toUpperCase()
    document.getElementById("exibirmatricula").innerHTML = localStorage.getItem("matricula").toUpperCase()
    document.getElementById("exibircurso").innerHTML = localStorage.getItem("curso") + localStorage.getItem("ano").toUpperCase()

}

if (localStorage.getItem("cadastro") != "sim") {
    document.querySelector(".boxcad").style.display = "block"
    document.querySelector(".body").style.display = "none"
    document.querySelector(".menu").style.display = "none"
}


document.querySelector("#recadastrar").onclick = function() {
    localStorage.setItem("cadastro", "nao")
    location.reload()
}

document.getElementById("curso").onclick = function() {
    document.querySelector(".submit").style.display = "block"
}


function cadastrarusuario() {
    var nome = document.getElementById("nome").value
    var matricula = document.getElementById("matricula").value
    var curso = document.getElementById("curso").value
    var ano = document.getElementById("ano").value


    localStorage.setItem("nome", nome)
    localStorage.setItem("matricula", matricula)
    localStorage.setItem("curso", curso)
    localStorage.setItem("ano", ano)
    localStorage.setItem("cadastro", "sim")


    db.collection("usuario").doc(localStorage.getItem("nome")).set({
            nome: localStorage.getItem("nome").toUpperCase(),
            matricula: localStorage.getItem("matricula").toUpperCase(),
            curso: localStorage.getItem("curso").toUpperCase(),
            ano: localStorage.getItem("ano").toUpperCase(),
            horariocadastrado: firebase.firestore.FieldValue.serverTimestamp(),

        })
        .then(() => {
            console.log("Cadastrado Com Sucesso!");
            setInterval(() => {
                location.reload()
            }, 1000);
        })
        .catch((error) => {
            console.log("Erro ao Cadastrar");
        });




}