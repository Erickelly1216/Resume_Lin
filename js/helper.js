
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">E-mail</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button class="button" id="button">deu</button>';
var googleMap = '<div id="map"></div>';


var d_projects = "Projekts";
var d_role = "Wirtschaftsinformatik";
var d_education = "Ausbildugen";
var d_places = "Wo ich leben und studiert";
var d_skills_h3 = 'Fähigkeiten auf einen Blick';
var d_contact = 'Kontakt';
var d_workExperience = "Berufserfahrungen";

var e_projects = "Projects";
var e_role = "Business Informatics";
var e_education = "Education";
var e_places = "Places I studied and lived";
var e_skills_h3 = 'Skills at a Glance';
var e_contact = 'Contact';
var e_workExperience = 'Work Experience';


$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = nameChanger($name.text()) || function(){};
    $name.html(iName);

    var s = $('#button');

    if($('#button').text()=='deu'){

      $('#role').html(d_role);

      $('#skills-h3').html(d_skills_h3);

      $("#t_projects").html(d_projects);

      $("#t_education").html(d_education);

      $("#t_places").html(d_places);

      $("#t_contact").html(d_contact);
      
      $("#t_workExperience").html(d_workExperience);
    }

    if($('#button').text()=='eng'){

      $('#role').html(e_role);

      $('#skills-h3').html(e_skills_h3);

      $("#t_projects").html(e_projects);

      $("#t_education").html(e_education);

      $("#t_places").html(e_places);

      $("#t_contact").html(e_contact);
      
      $("#t_workExperience").html(e_workExperience);
    }

    s.html(s.text() == 'deu' ? 'eng' : 'deu');

  });
});







var mymap 
function initializeMap() {

 
  function locationFinder() {

    var locations = [];

    locations.push(bio.born);
    console.log("bio:" + locations);

    if(education.schools.length > 0){
      education.schools.forEach(function(school){
        console.log("education:" + school.location);
        locations.push(school.location);
      });
    }

    if(work.jobs.length > 0){
      work.jobs.forEach(function(job){
        console.log("work:" + job.location);
        locations.push(job.location);
      });
    }

    return locations;
  }
  //locations = locationFinder();
  //console.log(locations);



    mymap = L.map('map');
    markersList = locationFinder();

    //console.log(markersList);

    var markers = [];
    for (var i = 0; i < markersList.length; i++) {
        markers.push(new L.marker(markersList[i][1]).bindPopup("<b>"+markersList[i][0]+"</b>"+"<br />"+markersList[i][2]).openPopup());
    }

    var group = new L.featureGroup(markers).addTo(mymap);
    mymap.fitBounds(group.getBounds());


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        minZoom: 1,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        maxNativeZoom: 18
    }).addTo(mymap);


}
//
window.addEventListener('load', initializeMap);
