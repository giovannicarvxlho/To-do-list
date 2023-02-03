let counter = 0;
let input = document.getElementById('inputTask');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById ('listArea');

function addTask() {
    let valorInput = input.value;
    if ((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)){
        
        ++counter;
        
        let newitem = `<div id="${counter}" class="item">
        <div onclick="markTask(${counter})" class="item-icon">
            <i id= item_"${counter}" class="material-icons">radio_button_unchecked</i>
        </div>
        <div onclick="markTask(${counter})" class="item-name">
            ${valorInput}
        </div>
        <div class="item-bottom">
            <button onclick="deletar(${counter})" class="delete">
                <i>
                    <span class="material-icons">delete</span>
                </i>
            </button>
        </div>
    </div>`;

    main.innerHTML += newitem;
    input.value = "";
    input.focus();
    }
}

function deletar(id){
    var task = document.getElementById(id);
    task.remove();
}

function markTask(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe=="item"){
        item.classList.add('check');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove("materialIcons-radio_button_unchecked");
        icone.classList.add('check_circle');
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})