// find out the rockbands.json file to make a page with 2 dropdown lists,
// the 1 st one is filled with the band and the 2nd one is filled with the
// artist after selecting a band from its dropdown list. Once the user
// selects an artist of the band; open his link.

var bandsSelect = document.getElementById("bands");
var artistSelect = document.getElementById("artest");
var selectContainer = document.getElementsByClassName("selectContainer")[0];
var Loader = document.getElementsByClassName("Loader")[0];
var EmptyState = document.getElementsByClassName("EmptyState")[0];
var Err = document.getElementsByClassName("Error")[0];
var xhrBands = new XMLHttpRequest();
xhrBands.open("get", "Band.json");
// xhrBands.open("get", "Empty.json");
xhrBands.send();
xhrBands.addEventListener("readystatechange", function(){
    if(this.readyState == 3){
        Loader.classList.remove("Loader");
    }
    if(this.readyState == 4){
        if(this.status == 200){
            setTimeout(function(){
                Loader.classList.add("Loader");
                var data = JSON.parse(xhrBands.response);
                if(data.length == 0){
                    EmptyState.classList.remove("EmptyState");
                }else{
                    createBandSelect(data);
                    bandsSelect.addEventListener("change", function(){
                        var bandN = this.value;
                        createArtiestSelect(data, bandN);
                    });
                    artistSelect.addEventListener("change", function(){
                        var urlBand = this.value;
                        if(urlBand){
                            window.location.href= urlBand;
                        }
                    });
                }
            },2000);
        }
    }else{
        Err.classList.remove("Error");
        Loader.classList.add("Loader");
    }
});

function createBandSelect(data){
    var bands = data[0];
    var bandName = [];
    for(var band in bands){
        bandName.push(band);
        var option = document.createElement("option");
        option.innerText = band;
        option.value = band;
        bandsSelect.appendChild(option);
    }
}

function createArtiestSelect(data, bandN){
    artistSelect.innerHTML = "";
    var bands = data[0];
    var artist = bands[bandN];
    artist.forEach(function(ele){
        var option = document.createElement("option");
        option.innerText = ele.name;
        option.value = ele.value;
        artistSelect.appendChild(option);

    });
}