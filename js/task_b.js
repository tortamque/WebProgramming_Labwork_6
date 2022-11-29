async function SaveItems(){
    var coll = document.getElementsByClassName("collapsible-wrapper");
    var payload = {};

    for (var i = 0; i < coll.length; i++) {
        var name = coll[i].children[0].innerHTML;
        var content = coll[i].children[1].children[0].innerHTML;
        
        payload[name] = content;
    }

    console.log(payload);

    await fetch("http://127.0.0.1:5000/api", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(payload)
    });
}