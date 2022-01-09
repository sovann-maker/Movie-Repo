function onInsertRecord() {
    var movieName = document.getElementById("movieName").value;
    var releaseDate = document.getElementById("releaseDate").value;
    var movieRating = document.getElementById("movieRating").value;
    var filmIndustry = document.getElementById("film industry").value;

    var table = document.getElementById("regtable");
    var row = table.insertRow();
    var movieNameCell = row.insertCell(0);
    var releaseDateCell = row.insertCell(1);
    var movieRatingCell = row.insertCell(2);
    var filmIndustryCell = row.insertCell(3);

    movieNameCell.innerHTML = movieName;
    releaseDateCell.innerHTML = releaseDate;
    movieRatingCell.innerHTML = movieRating;
    filmIndustryCell.innerHTML = filmIndustry;

}