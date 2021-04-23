var item = document.getElementById("item").value;
var lista  = document.getElementById("lista").innerHTML;
var botao = document.getElementById("botao").innerHTML;
var c = 0;

function clique() {
    c++;
    item = document.getElementById("item").value;
    document.getElementById("item").value = "";

    var novoitemli = document.createElement("li");
    var novoitemspan = document.createElement("span");
    var novoitembutton = document.createElement("button");

    novoitemli.id = "novoitemli"+c;
    novoitemspan.id = "novoitemspan"+c;
    novoitembutton.id = "novoitembutton"+c;

    novoitemli.appendChild(novoitemspan);
    novoitemli.appendChild(novoitembutton);

    novoitemspan.appendChild(document.createTextNode(item));
    novoitembutton.appendChild(document.createTextNode("Excluir"));

    document.getElementById("lista").appendChild(novoitemli);

    document.getElementById("novoitembutton"+c).onclick = function() {
        const list = this;
        const pai = list.parentNode
        const avo = pai.parentNode
        avo.removeChild(pai);
        document.getElementById("item").focus(); 
    }

    document.getElementById("item").focus(); 
}
