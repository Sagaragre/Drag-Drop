var dragtasks = document.querySelectorAll(".drag");
var dragcontainer = document.querySelectorAll(".dragcontainer");

var operatorbtn = document.querySelector(".operator");
var restartbtn = document.querySelector(".restart");

operatorbtn.addEventListener('click', function() {
    var tex = operatorbtn.textContent;
    if(tex == 'stop') {
        alert('Drag and drop wil stop');
        operatorbtn.innerHTML = "start";
        for(var i = 0; i < dragtasks.length; i++) {
            dragtasks[i].setAttribute('draggable', 'false');
        }

    } else if(tex == 'start') {
        operatorbtn.innerHTML = "stop";
        console.log("Drag&Drop start");
        dragdrop();
        
    }
})

restartbtn.addEventListener('click',function() {
    window.location.reload(true);
})


function dragdrop() {
    var draggeditem = null;
    for(var i = 0; i < dragtasks.length; i++) {
        var item = dragtasks[i];
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', function(e) {
            draggeditem = e.target;
            // draggeditem.classList.add('hide');
            // console.log(draggeditem);
            setTimeout(function() {
                draggeditem.classList.add('hide');
            },0);
            
        });

        item.addEventListener('dragend', function(e) {
            setTimeout(function() {
                draggeditem.classList.replace('hide','block');
                draggeditem = null;
            }, 0);
        });

    }

    for(var j = 0; j < dragcontainer.length; j++) {
        var container = dragcontainer[j];
        container.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        container.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });

        container.addEventListener('drop', function(e) {
            draggeditem.classList.add("rem");
            this.appendChild(draggeditem);
            e.preventDefault();
            
        });
    }
}






