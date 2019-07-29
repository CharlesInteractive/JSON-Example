fetch('/data/data.json')
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json.dataName);
        console.log(json);
        var users = json.users;
        var output = "";
        for(var i = 0; i < users.length; i++) {
            output += "<li>" + users[i].name + "</li>";
        }
        document.getElementById("users").innerHTML = output;
    });