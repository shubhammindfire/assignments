"use strict";

// This function shows all the API data in tabular format
function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status == 200) {
            // parsing json data received as response from the API
            let json = JSON.parse(this.responseText);
            let html = `
                <table>
                    <thead>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </thead>
                `;

            // looping through all the json objects and adding it to the table
            for (var i in json) {
                // replacing \n escape sequence with a blank space
                json[i].body = (json[i].body).replace("\n", " ");

                console.log(json[i].body);

                html += `
                    <tr onclick="getIndividualData(${json[i].userId},${json[i].id},'${json[i].title}')">
                        <td>${json[i].userId}</td>
                        <td>${json[i].id}</td>
                        <td>${json[i].title}</td>
                        <td>${json[i].body}</td>
                    </tr>
                `;


                /*html += `
                    <tr class='row'>
                        <td>${json[i].userId}</td>
                        <td>${json[i].id}</td>
                        <td>${json[i].title}</td>
                        <td>${json[i].body}</td>
                    </tr>
                `;*/
            }

            html += "</table>";
            // update the complete table in the HTML
            document.getElementById("table").innerHTML = html;

            //var row = document.getElementsByClassName("row");
            //row[0].addEventListener("click",getIndividualData(11,23,'title','body'));

        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.send();
}

// This function shows the individual data in tabular format
function getIndividualData(userId,id,title,body){
    let table = `
        <table>
            <thead>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </thead>
            <tr>
                <td>${userId}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${body}</td>
            </tr>
        </table>
    `;

    // update table in the HTML
    document.getElementById('data').innerHTML = table;
}