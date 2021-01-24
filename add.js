var resortArray = [];
var bigSkyRegex = /^Big Sky(\s\w*)?/i;
var discoRegex = /^disco(\w*?\s*?)?/i;
var lostTrailRegex = /^lost trail(\s*\w*)*?/i;
var showdownRegex = /^showdown(\s\w*)?/i;
var bridgerRegex = /^bridger(\s\w*)*?/i;
document.getElementById("add").onclick = function() {
    var text = document.getElementById("resort").value;
    var img = document.createElement("img");
    if (text.match(bigSkyRegex)){
        text = "Big Sky Resort";
        img.src="https://www.explorebigsky.com/wp-content/uploads/2017/02/Lennon-Big-Sky-Resort.jpg";
    } else if (text.match(discoRegex)){
        text = "Discovery Ski Area";
        img.src="https://www.planetware.com/wpimages/2019/10/montana-best-ski-resorts-great-divide-ski-area.jpg";
    } else if (text.match(lostTrailRegex)){
        text = "Lost Trail Powder Mountain";
        img.src="https://montana-wild.com/wp-content/uploads/2014/02/facebook-6.jpg";
    } else if (text.match(showdownRegex)){
        text = "Showdown";
        img.src = "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/0/41/0415569f-23c0-5b4b-9cd2-5eea9eb5e2a3/5e307f1c064dd.image.jpg?resize=1200%2C701";
    } else if (text.match(bridgerRegex)){
        text = "Bridger Bowl";
        img.src ="https://img2.onthesnow.com/image/la/38/bridger_bowls_ridge_terrain_389911.jpg";
    }
    else {
        alert("Not a valid resort");
        return;
    }
    img.classList.add("list-image");
    var node = document.createElement("Li");
    text = text + ' - 24 hr snowfall: ' + '  |  48 hr snowfall: ';
    var textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById("resort-list").appendChild(img);
    document.getElementById("resort-list").appendChild(node);
}
