/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("jianlu");


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
    name : "林倩玲",
    role: "",
    // biopic : "/Users/eric/Documents/studium/ws17:18/Udacity/JS/Javascript基础/project_Ma/images/fry.jpg",
    // 这里因为文件位于同一根目录下，所以图片地址不需要所有前缀
    biopic : "images/20160331_101143.jpg",
    // 这里若无空格，那么整段文字将会被作为一个单词处理=> 无分段，占据一整行
    welcomeMessage : "blablablablablablablablablablablablab lablablablablablablablab lablablablablablablablablablab lablablablablablablablablablablablab lablablablablablablablablablab lablablablablablablablablablablab lablablablablablablablablablablabl ablablablablablablablablabl ablablablablablablab lablablablablablablablablablablab lablablablablabla",
    contacts:{
        mobile : "015125865092",
        email : "jan100212@hotmail.com",
        location : "Taizhou(Jiangsu)"
    },
    skills : ["java", "python", "js", "df", "df", "df", "df"]
};

bio.display = function(){

    /*
    var name = "jianlu";
    var role = "master";
    */
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedBioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMessage);

    /*
    $("#header").prepend("asdfafd");
    $("#header").prepend("dfasfsaf");
    这样子添加到“header”的文字将不会被显示，因为他们不是h1的形式，参考“helper.js“中的formattedName
    */


    if(bio.skills.length > 0){

        // HTMLskillsStart is in file helper.js
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
            name :"胖兔纸大学",
            location :"Changzhou",
            major : "卖萌",
            degree : "Unfinished",
            date : "2011",
            url : ""
        },
        {
            name :"Uni-DuE",
            location :"Essen",
            major : "Wirtschaftsinformatik",
            degree : "Bachelor of Science",
            date : "2020",
            url : ""
        },
    ],

/*
    onlineCourses : [
        {
            title : "Front-End Web Developer Nanodegree",
            school : "udacity",
            dates : "2014 - 2015",
            url : "https://www.udacity.com/course/nd001"
        },
        {
            title : "udacityhtml & css",
            school :"udacity",
            dates : "ws1718",
            url :"hahhahahahah"
        }
    ]
*/
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
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
            //["https://github.com/Erickelly1216/Resume/blob/master/images/BP1.jpg"]
            //["http://www.google.com/intl/en_com/images/logo_plain.png"]
            //["/Users/eric/Downloads/img&gif/funny/WhatsApp_Image_2018-01-28_at_20.22.21.jpg"]
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

        // $("#workExperience").append(HTMLworkStart) 写在这里将会使得所有 工作-头衔 写作一行
        // $("#workExperience").append(HTMLworkStart);

        for (job in work.jobs){

            // 写在这里可以使得所有 工作-头衔 写作一列，因为 HTMLworkStart只是一个div “work-entry”，并没有内容
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;


            // 这样无法成功写入 formattedEmployerTitle，因为 work-entry不是一个id 而是一个class
            // $("#work-entry").append(formattedEmployerTitle);

            // 这样会在每一个 work-entry 元素后面写入当前 formattedEmployerTitle
            // $(".work-entry").append(formattedEmployerTitle);

            // 这里使得写入的 formattedEmployerTitle 作为 workExperience 下属元素 而非 work-entry
            //$("#workExperience").append(formattedEmployerTitle);

            // :last jQuery 选择器用于返回列表中与 :last 前面的内容完全匹配的 最后一个元素。
            // 因此对于 work-entry:last，如果存在 3 个 work-entry 元素，则将仅返回第 3 个 work-entry 元素。
            // 这里使得写入的 formattedEmployerTitle 作为 work-entry 下属元素
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDate);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

displayWork();

function locationizer(work_obj) {
    var locations =[];
    /*
    for(job in work_obj.jobs){
        // 注意这里不要写成 job.location，因为job是index而非数组的元素
        locations.push(work.jobs[job].location);
    }
    */

    work_obj.jobs.forEach(function(job){
        locations.push(job.location);
    });

    return locations;
}

/*
projects.display = function(){

    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
}
*/
//projects.display();

/*
var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
img.src = "/Users/eric/Documents/studium/ws17:18/Udacity/JS/Javascript基础/images/fry.jpg";

//var src = document.getElementById("main");
//src.appendChild(img);
// oder
$("#main").append(img);
*/


// 这个函数将会在“helper。js”中被调用,用于将姓的字母全部大写
function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var firstName = oldName.split(" ")[0];
    var lastName = oldName.split(" ")[1];

    firstName= firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
    lastName = lastName.toUpperCase();

    finalName = firstName + " " +lastName;
    // Don't delete this line!
    return finalName;
}

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
