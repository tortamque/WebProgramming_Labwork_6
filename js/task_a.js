function AddText(){
    InitCollapsibles();

    var name = document.getElementById("enter-name").value;
    var text = document.getElementById("enter-text").value;
    
    var wrapper =  document.createElement("div");
    wrapper.className = "collapsible-wrapper";

    var collapsibleButton = document.createElement("button");
    collapsibleButton.className = "collapsible";
    collapsibleButton.innerHTML = name;

    var paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    var collapsibleContent = document.createElement("div");
    collapsibleContent.className = "content";
    collapsibleContent.appendChild(paragraph)


    wrapper.appendChild(collapsibleButton);
    wrapper.appendChild(collapsibleContent);

    document.getElementsByClassName("third")[0].appendChild(wrapper);

    InitCollapsibles();
}

async function ClearItems(){
    var request = 'clear';

    await fetch("http://127.0.0.1:5000/api", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(request)
    });

    var coll = document.getElementsByClassName("collapsible-wrapper");
    for (var i = 0; i < coll.length; ){
        coll[i].remove();
    }
}