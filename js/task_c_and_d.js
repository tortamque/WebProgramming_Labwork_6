document.addEventListener("DOMContentLoaded", async function() {
    InitCollapsibles();

    var data = await fetch("http://127.0.0.1:5000/api", {
        method: 'GET',
    }).then(result => result.json());

    for (var key in data){
        var name = key;
        var text = data[key];
        
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
    }

    InitCollapsibles();
});