


var work = {
  "jobs": [
/*
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
*/
  ]

};



var bio = {
    name : "Qianling Lin",
    born : ["TaiZhou", [32.4585613, 119.9181228], "Born"],
    role: "Business Informatics",
    biopic : "images/744e2f77.jpg",//"images/20160331_101143.jpg"
    welcomeMessage : "blablablablablablablablablablablablab lablablablablablablablab lablablablablablablablablablab lablablablablablablablablablablablab lablablablablablablablablablab lablablablablablablablablablablab lablablablablablablablablablablabl ablablablablablablablablabl ablablablablablablab lablablablablablablablablablablab lablablablablabla",
    contacts:{
        mobile : "0123456789",
        email : "blabla@hotmail.com",
    },
    skills : ["java", "python", "js", "df", "df", "df", "df"]
};

bio.display = function(){

  
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedBioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMessage);

   

    if(bio.skills.length > 0){

        $("#header").append(HTMLskillsStart);

        var i =0;
        while (i < bio.skills.length){
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);

            $("#skills").append(formattedSkill);

            i++;
        }
    }

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);

};

bio.display();



var education = {
    schools : [
        {
            name :"Uni-DuE",
            location :["Essen", [51.4582235, 7.0158171], "WiInf"],
            major : "Wirtschaftsinformatik",
            degree : "Bachelor of Science",
            date : "2020",
            url : ""
        }
    ]

};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location[0]);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }
};

education.display();

var projects = {
    projects : [
        {
            title :"Software Entwicklung Project",
            dates:"10/2015 - 02/2016",
            description:"A Bomb-man Game Developed Using LibGDX",
            images :["images/deckblatt.jpg", "images/spielanleitung.jpg"]
        },

        {
            title :"Bachelor Project",
            dates:"04/2016 - 08/2016",
            description:"A Project Management Toolkit Developed Using Excel",
            images : ["images/BP1.jpg"]
        }
    ],
    display : function(){

        for(project in projects.projects){
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if(projects.projects[project].images.length>0){
                for(image in projects.projects[project].images){
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();

function displayWork(){
    if(work.jobs.length > 0){

      
        for (job in work.jobs){

           
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDate);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

displayWork();




function nameChanger(oldName) {
    var finalName = oldName;
  

    var firstName = oldName.split(" ")[0];
    var lastName = oldName.split(" ")[1];

    firstName= firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
    lastName = lastName.toUpperCase();

    finalName = firstName + " " +lastName;
    
    return finalName;
}

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

