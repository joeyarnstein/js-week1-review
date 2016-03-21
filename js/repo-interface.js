var getRepos = require("./../js/get-repos.js").getRepos;
//var myVariable;

$(document).ready(function() {
  $('#api').submit(function() {
    event.preventDefault();
    var profile = $('#getgit').val();
    //var myVariable = profile
    $('#getgit').val("");
    var repoArray = getRepos(profile);
    console.log(repoArray);
  });
});
