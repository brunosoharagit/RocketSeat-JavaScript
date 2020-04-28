var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var products = JSON.parse(localStorage.getItem('list_prds')) || [];

function renderPrd()
{
    listElement.innerHTML = '';

    for(product of products)
    {
        //Renderiza a lista
        var prdElement = document.createElement('li');
        var prdText = document.createTextNode(product);

        prdElement.appendChild(prdText);
        listElement.appendChild(prdElement);


        //Cria um link de remoção de um item
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir'); 

        linkElement.setAttribute('href', '#');

        var pos = products.indexOf(product);
        linkElement.setAttribute('onclick', 'removePrd('+pos+')');

        linkElement.appendChild(linkText);
        prdElement.appendChild(linkElement);

        listElement.appendChild(prdElement);
    }
};

renderPrd();


function addPrd()
{
    var prdText = inputElement.value;

    products.push(prdText);
    inputElement.value = '';
    renderPrd();
    saveData();
}


buttonElement.onclick = addPrd;

function removePrd(pos)
{
    products.splice(pos, 1);
    renderPrd();
}

function saveData()
{
    localStorage.setItem('list_prds', JSON.stringify(products));
}