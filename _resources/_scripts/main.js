// $( ".GlobalNavToggle" ).click(function() {
//   $('.GlobalNav ul').toggleClass("Open");
// });

// function loadBrady() {
//   $.getJSON('https://canlis.com/wp-json/wp/v2/posts?filter[p]=2127', function(result) {
//     var output = '';
//     $.each(result, function(i, thing){
//       output += "<p class='LabelText'>" + thing.title.rendered + "</p>" + thing.content.rendered;
//     });
//     output += '';
//     document.getElementById("BradyContainer").innerHTML = output;
//   });
// };

// loadBrady();

console.log("maybe it's working!")

var sticky = new Waypoint.Sticky({
  element: $(".GlobalNav")[0]
})

