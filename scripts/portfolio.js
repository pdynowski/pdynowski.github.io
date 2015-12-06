$(document).ready(function() {

  var projects = [
    {
      project_name: "San Angelo",
      project_image: 'castel-san-angelo.jpg',
      project_info: "View of the Castel San Angelo",
      project_link: "#"
    },
    {
      project_name: "Pyramide",
      project_image: 'pyramide.jpg',
      project_info: 'View of the Pyramide',
      project_link: "#"
    },
    {
      project_name: "Ducal Palace",
      project_image: 'venice-ducal-palace.jpg',
      project_info: 'Ducal Palace in Venice',
      project_link: "#"
    }
  ];

  var index = 0;
  var lastIndex = projects.length - 1;

  function slideshow() {
    document.getElementById("thumbnail").innerHTML = "<img src='../imgs/" + projects[index].project_image + "'>";
    document.getElementById("thumb-info").innerHTML = projects[index].project_info;
    console.log(document.getElementById("projectlist").children[index].children[0]);
    document.getElementById("projectlist").children[index].children[0].className = "current";
    document.getElementById("projectlist").children[lastIndex].children[0].className = "";
    lastIndex = index;
    if(index < projects.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }

  slideshow();
  setInterval(slideshow,3000);  
  
});