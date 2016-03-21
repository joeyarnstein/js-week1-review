var apiKey = require('./../.env').apiKey;
//var myVar = require('./../js/repo-interface.js');

exports.getRepos = function(myVar){
  $.get('https://api.github.com/users/' + myVar + '/repos?access_token=' + apiKey).then(function(response){
    var arrayOfObjects = response;
    arrayOfObjects.forEach(function(obj){
      console.log(obj.name);
      console.log(obj.description);
      var name = obj.name;
      var description = obj.description;

      $(".apiResponse").append("<li>" + name + "<ul><li>"+description+"</li></ul></li>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

// exports.apiCall = function(url){
//   $.get(url).then(function(response){
//     console.log(response);
//     for(var i=0; i<10; i++){
//       var current = response.response.groups[0].items[i].venue;
//       console.log(current.photos.groups[0]);
//       var venue = new Venue(current.name, current.rating, current.location.lat, current.location.lng, current.location.address, current.photos.groups[0].items[0].suffix);
//       createMarker(venue);
//     }
//   })
// };
