var moviesArray = [];
var selectedIndex = -1;

//store the records in local storage
function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.moviesRecord) {
        moviesArray = JSON.parse(localStorage.moviesRecord);
        for (var i = 0; i < moviesArray.length; i++) {
            prepareTableCell(i, moviesArray[i].moviename, moviesArray[i].releasedate, moviesArray[i].movierating, moviesArray[i].filmindustry)
        }
    }
}

function onInsertRecord() {
    var movieName = document.getElementById("moviename").value;
    var releaseDate = document.getElementById("releasedate").value;
    var movieRating = document.getElementById("movierating").value;
    var filmIndustry = document.getElementById("filmindustry").value;
    var movieObj = { moviename: movieName, releasedate: releaseDate, movierating: movieRating, filmindustry: filmIndustry };



    if (movieName.length != 0 && releaseDate.length != 0 && movieRating.length != 0 && filmIndustry.length != 0) {} else {
        alert("Fields cannot be empty!")
        return false;
    }

    if (selectedIndex === -1) {
        moviesArray.push(movieObj);
    } else {
        moviesArray.splice(selectedIndex, 1, movieObj);
    }

    localStorage.moviesRecord = JSON.stringify(moviesArray); //convert arrays into JSON strings 

    init();

    document.getElementById("moviename").value = "";
    document.getElementById("releasedate").value = "";
    document.getElementById("movierating").value = "";

}

//prepare table for user's input
function prepareTableCell(index, movieName, releaseDate, movieRating, filmIndustry) {
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var action = '<button  class="form__button2" onclick="onEditRecord(' + index + ')"><i class="fas fa-edit"></i></button><br/><button  class="form__button2" onclick="onDeleteRecord(' + index + ')"><i class="fas fa-trash"></i></button>';
    var movieNameCell = row.insertCell(0);
    var releaseDateCell = row.insertCell(1);
    var movieRatingCell = row.insertCell(2);
    var filmIndustryCell = row.insertCell(3);
    var actionCell = row.insertCell(4);

    movieNameCell.innerHTML = movieName;
    releaseDateCell.innerHTML = releaseDate;
    movieRatingCell.innerHTML = movieRating;
    filmIndustryCell.innerHTML = filmIndustry;
    actionCell.innerHTML = action;

}


//delete a row by updating not only the UI but also the local storage
function onDeleteRecord(index) {
    if (confirm("Do you want to delete this record?")) {
        moviesArray.splice(index, 1); //to delete a particular row in a given index & replace it with a new 1
        localStorage.moviesRecord = JSON.stringify(moviesArray);
        init();
    }
}

function onEditRecord(index) {
    selectedIndex = index;
    var movieObj = moviesArray[index];
    document.getElementById("moviename").value = movieObj.moviename;
    document.getElementById("releasedate").value = movieObj.releasedate;
    document.getElementById("movierating").value = movieObj.movierating;
    document.getElementById("filmindustry").value = movieObj.filmindustry;
    document.getElementById("submit").innerHTML = "Update"; //when edit is clicked the insert record will be changed to Update 

}