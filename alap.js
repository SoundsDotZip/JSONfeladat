fetch("https://gist.githubusercontent.com/seanmtracey/567847581e86a4f4365b/raw/e88d565933a4628af7ef7afbf916928af6226cb8/cats.json")
.then(x => x.json())
.then(y => megjelenit(y));


function megjelenit(adatok){
    console.log(adatok);
    var ind = 0;
    for (elem of adatok.big){
        var div = document.createElement("div");
        div.setAttribute("class","col-sm-2");
        var img = '<img src="'+elem+'" class="big1">';
        div.innerHTML = img;
        document.getElementById("grid"+ind).appendChild(div);
    }
    ind++;
    var div = document.createElement("div");
    div.setAttribute("class","col-sm-1");
    document.getElementById("grid"+ind).appendChild(div);
    for (elem of adatok.kitten){
        var div = document.createElement("div");
        div.setAttribute("class","col-sm-2");
        var img = '<img src="'+elem+'" class="kitten1">';
        div.innerHTML = img;
        document.getElementById("grid"+ind).appendChild(div);
    }
    var div = document.createElement("div");
    div.setAttribute("class","col-sm-1");
    document.getElementById("grid"+ind).appendChild(div);
}