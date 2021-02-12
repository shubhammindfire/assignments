"use strict";

// This function shows all the API data in tabular format
function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.send();
    xhr.onload = function () {
        if (this.status == 200) {
            // parsing json data received as response from the API
            let json = JSON.parse(this.responseText);
            let html = `
                <table class="table table-hover table-bordered">
                    <thead>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </thead>
                `;

            // looping through all the json objects and adding it to the table
            for (var i in json) {
                html += `
                    <tr onclick="getIndividualData(${json[i].id})" data-toggle="modal" data-target="#myModal">
                        <td>${json[i].userId}</td>
                        <td>${json[i].id}</td>
                        <td>${json[i].title}</td>
                    </tr>
                `;
            }

            html += "</table>";
            // update the complete table in the HTML
            document.getElementById("table").innerHTML = html;
        }
    };
}

// This function shows the individual data in a modal
function getIndividualData(id){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/"+id, true);
    xhr.send();
    xhr.onload = function () {
        if (this.status == 200) {
            // parsing json data received as response from the API
            let json = JSON.parse(this.responseText);
            
            document.getElementById("json-body").innerHTML = json.body;
        }
    };
}

// I wrote JS code similar to the below jQuery but this isn't working
/*
document.getElementById("myModal").addEventListener('hide.bs.modal',function(){
    console.log("hide");
});
*/

// Changing modal body to "Please wait" everytime modal is closed
$("#myModal").on('hide.bs.modal', function(){
    document.getElementById("json-body").innerHTML = "Please wait...";
});