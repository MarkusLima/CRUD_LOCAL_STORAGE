var add_or_update = 'add';
var id_cliente = 0;
var clientes = localStorage.getItem("clientes");
clientes = JSON.parse(clientes);

if (clientes == null) {
    clientes = [];
}


function Add() {
    if(add_or_update == 'add'){
        var client = JSON.stringify({
            Name: document.getElementById('txtName').value,
            Phone: document.getElementById('txtPhone').value,
            Email: document.getElementById('txtEmail').value,
        })
    
        clientes.push(client);
    
        localStorage.setItem('clientes', JSON.stringify(clientes));
        alert('Cliente salvo com sucesso!');
        window.location.reload();
    }else{
        clientes[id_cliente]= JSON.stringify({
            Name: document.getElementById('txtName').value,
            Phone: document.getElementById('txtPhone').value,
            Email: document.getElementById('txtEmail').value,
        })
        localStorage.setItem("clientes", JSON.stringify(clientes));
        alert('Cliente atualizado com sucesso!');
        window.location.reload();
    }
}

function List() {
    for (var i in clientes) {
        var cli = JSON.parse(clientes[i]);
        var br = document.createElement('br');
        var hr = document.createElement('hr');

        var buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = "Editar";
        buttonEdit.id = i;
        buttonEdit.onclick = getEdit;

        var buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = "DELETAR";
        buttonDelete.id = i;
        buttonDelete.onclick = deletar;

        document.querySelector('#tblList').append(
            "--" + cli.Name + "-" +
            "--" + cli.Phone + "-" +
            "--" + cli.Email + "-"
        );

        document.querySelector('#tblList').append(buttonEdit);
        document.querySelector('#tblList').append(buttonDelete);
        document.querySelector('#tblList').append(br);
        document.querySelector('#tblList').append(hr);
    }
}

List()

function removeAll(){
    localStorage.removeItem('clientes');
    window.location.reload();
}

function deletar(e){

    clientes.splice(e.target.id, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Cliente deletado com sucesso!");
    window.location.reload();
}

function getEdit(e){
    var cli = JSON.parse(clientes[e.target.id]);
    document.getElementById('txtName').value = cli.Name;
    document.getElementById('txtPhone').value = cli.Phone;
    document.getElementById('txtEmail').value = cli.Email;

    add_or_update = 'update';
    id_cliente = e.target.id;

}