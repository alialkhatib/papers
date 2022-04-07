// THIS IS NOT SUPPORTED BY INSTRUCTURE, Edited and Tested as of 12-7-2018
$(document).ready(function() {
	if(ENV.current_user_roles.indexOf('teacher') >= 0 || ENV.current_user_roles.indexOf('admin') >= 0){
		//items to show to teachers and admins
		var trayLinks = [
			{key: 'http://www.usfca.edu/library/' , val: 'Gleeson Library', target: '_blank'},
			{key: 'https://myusf.usfca.edu/services/canvas' , val: 'USF Canvas Support', target: '_blank'},
			{key: 'https://usfca.bluera.com/usfca' , val: 'Teaching Effectiveness Survey', target: '_blank'}
		];
	
	} else if (ENV.current_user_roles.indexOf('student') >= 0) {
		//items to show to students
		var trayLinks = [
			{key: 'http://www.usfca.edu/library/' , val: 'Gleeson Library', target: '_blank'},
			{key: 'https://myusf.usfca.edu/services/canvas' ,  val: 'USF Canvas Support', target: '_blank'},
			{key: 'https://usfca.bluera.com/usfca' ,  val: 'Teaching Effectiveness Survey', target: '_blank'}
		];
	
	} else {
		//items to show to people who are not teachers, students or admins
		var trayLinks = [
			{key: 'http://www.usfca.edu/library/' , val: 'Gleeson Library', target: '_blank'},
			{key: 'https://myusf.usfca.edu/services/canvas' , val: 'USF Canvas Support', target: '_blank'}
		];
	}

	var slide_out_title = "USF Resources" //Changes the title on the slide out menu
	var global_nav_name = "USF <br> Resources" //Change the title on the global navigation menu

	var footerContent = ''; //Changes the text of the bottom on the slide out tray
	
	if(ENV.current_user_roles.indexOf('teacher') >= 0 || ENV.current_user_roles.indexOf('admin') >= 0){
		//items to show to teachers and admins
	
		addMenuItem('Teaching <br> Effectiveness <br> Surveys', 'https://usfca.instructure.com/users/6166514/external_tools/108864', 'icon-peer-review', '_blank'); 
		
	}
	
	else if (ENV.current_user_roles.indexOf('student') >= 0) {
		//items to show to students
	
		addMenuItem('Teaching <br> Effectiveness <br> Surveys', 'https://usfca.instructure.com/users/6166514/external_tools/108863', 'icon-peer-review', '_blank'); 
	
	}
	
/*MyUSF Early Alerts*/	
	if(ENV.current_user_roles.indexOf('teacher') >= 0 || ENV.current_user_roles.indexOf('admin') >= 0){
		//items to show to teachers and admins
	
		addMenuItem('Early Alerts', 'https://myusf.force.com', 'icon-eye', '_blank'); 
		
	}
	else if (ENV.current_user_roles.indexOf('student') >= 0) {
		//items to show to students
		
	   i=null /* Empty */ ;  
	}

	
	//add to nav menu function
var styleAdded = false;    
    function addMenuItem(linkText, linkhref, icon, target) {    
        var iconHtml = '',    
            itemHtml,  
            linkId = linkText.split(' ').join('_'),    
            iconCSS = '<style type="text/css">' +    
                '   i.custom_menu_list_icon:before {' +    
                '       font-size: 27px;' +    
                '       width: 27px;' +    
                '       line-height: 27px;' +    
                '   }' +    
                '   i.custom_menu_list_icon {' +    
                '       width: 27px;' +    
                '       height: 27px;' +    
                '   }' +    
                '   body.primary-nav-expanded .menu-item__text.custom-menu-item__text {' +    
                '       white-space: normal;' +  
                '       padding: 0 1px;' +    
                '   }' +    
                '</style>';    
        if (icon !== '') {    
            // If it is a Canvas icon    
            if (icon.indexOf('icon') === 0) {    
                iconHtml = '<div class="menu-item-icon-container" role="presentation"><i class="' + icon + ' custom_menu_list_icon"></i></div>';    
            // for an svg or other image    
            } else if (icon !== '') {    
                iconHtml = '<div class="menu-item-icon-container" role="presentation">' + icon + '</div>';    
            }    
        }  
        // Process Target  
        if (target !== undefined && target !== null && target !== '') {  
            target = ' target="' + target + '"';  
        } else {  
            target = '';  
        }  
        // Build item html    
        itemHtml = '<li class="ic-app-header__menu-list-item ">' +    
                '   <a id="global_nav_' + linkId + '" href="' + linkhref + '" class="ic-app-header__menu-list-link" ' + target + '>' + iconHtml +    
                '       <div class="menu-item__text custom-menu-item__text">' + linkText + '</div>' +    
                '   </a>' +    
                '</li>';    
        $('#menu').append(itemHtml);    
        // Add some custom css to the head the first time    
        if (!styleAdded) {    
            $('head').append(iconCSS);    
            styleAdded = true;    
        }    
    }  

//Hide user setting links to course evaluations
  $('a.context_external_tool_108864').hide();
  $('a.context_external_tool_108863').hide();

// Blackboard Ally Modification
// MRF, 07/03/2018
// begin Ally
  	window.ALLY_CFG = {
    'baseUrl': 'https://prod.ally.ac',
    'clientId': 2171
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');
// end Ally

/*************************************************************************
* CAN-223 Make it easier to find All Courses page
**************************************************************************/

if ($("h1.ic-Dashboard-header__title").length == 1) {
$("h1.ic-Dashboard-header__title").after('<a href=\"/courses\" class=\"Button button-sidebar-wide\">View All Courses</a>');
}


/*************************************************************************
* CAN-201 Add Course Unpublished warning to home page
**************************************************************************/

if ($(".ui-button.disabled.btn-unpublish").length == 1) {
$('#content-wrapper').prepend('<div align="center" style="margin-bottom:10px; background-color:#edd; border:2px solid #a44; border-radius:5px; padding:5px;">  \
  <p>This course is not published. Students cannot access the course and notifications will not be sent.</p>  \
  <div align="center" > \
  <form action=""> \
  <input type="button" class="btn" id="stanford_home_warning_publish" value="Publish Course"> \
  </form> \
  </div></div>');
} else {
// do nothing
}

$("#stanford_home_warning_publish").click(function () {
$('#course_status_form').find(":submit").click()
});

/*************************************************************************
* CAN-202 Add warning in Announcements about lack of notifications for unpublished course
**************************************************************************/

if ($(".announcements.active").length == 1) {
var url = "https://" + window.location.host + "/api/v1/courses/" + ENV["COURSE_ID"];
var homeurl = "https://" + window.location.host + "/courses/" + ENV["COURSE_ID"];
$.ajax(url, {
statusCode: {
// status will be 200 if the namespace custom data does exist
200: function (response) {
console.log("200");
console.log(response);
if (response.workflow_state == "unpublished") { //checks to make sure that the data value is indeed true
$('#content-wrapper').prepend('<div align="center" style="margin-bottom:10px; background-color:#edd; border:2px solid #a44; border-radius:5px; padding:5px;">  \
            <p>Notifications will not be sent for any announcements posted before the course is published.</p> \
            <div align="center"> \
            <form action=""> \
            <input type="button" class="btn" id="stanford_annc_warning_publish" value="Publish Course">  \
            </form> \
            </div> \
            </div>');

$("#stanford_annc_warning_publish").click(function () {
var publishurl = "https://" + window.location.host + "/api/v1/courses/" + ENV["COURSE_ID"];

$.ajax({
url: publishurl,
type: "PUT",
data: "course[event]=offer",
statusCode: {
200: function (response) {
location.reload();
}
}
});
});
} else {
// to nothing
}
}
}
});
}


	////////////////////////////////////////////////////////////////////////////////
	//DO NOT EDIT ANYTHING BELOW THIS LINE!
	////////////////////////////////////////////////////////////////////////////////

	//Browser Detection
	navigator.agentDetect = (function(){
	    var ua= navigator.userAgent, tem,
	    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	    if(/trident/i.test(M[1])){
	        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
	        return 'IE '+(tem[1] || '');
	    }
	    if(M[1]=== 'Chrome'){
	        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
	        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	    }
	    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	    return M;
	})();

	//Array, 0 = browser, 1 = version
	var agent = navigator.agentDetect;
	var reactId;

	switch(agent[0]) {
	    case "Firefox":
	        reactId = "2";
	        break;
	    case "Safari":
	        reactId = "2";
	        break;
	    default:
	        reactId = "1";
	        break;
	}

	var displayVals = '';

	function displayLinks(element, index, array, target) {
		displayVals += '<li>';
		displayVals += '<a href="' + element.key + '"'+ ' target =' + element.target + '>' + element.val + '</a>';
		displayVals += '</li>';
	}

	trayLinks.forEach(displayLinks);

	var trayHtml = '<div style="position:absolute;background:#fff;" class="ReactTray__Content ReactTray__Content--after-open " tabindex="-1" data-reactid=".' +
   reactId + '.0"><div class="ReactTray__layout" data-reactid=".' +
   reactId + '.0.0"><div class="ReactTray__primary-content" data-reactid=".' +
   reactId + '.0.0.0"><div class="ic-NavMenu__header" data-reactid=".' +
   reactId + '.0.0.0.0"><h1 class="ic-NavMenu__headline" data-reactid=".' +
   reactId + '.0.0.0.0.0">' +
   slide_out_title + '</h1><button class="Button Button--icon-action ReactTray__closeBtn" type="button" data-reactid=".' +
   reactId + '.0.0.0.0.1"><i class="icon-x" data-reactid=".' +
   reactId + '.0.0.0.0.1.0"></i><span class="screenreader-only" data-reactid=".' +
   reactId + '.0.0.0.0.1.1">Close</span></button></div><ul class="ReactTray__link-list" data-reactid=".' +
   reactId + '.0.0.0.1">' +
   displayVals + '</ul></div><div class="ReactTray__secondary-content" data-reactid=".' +
   reactId + '.0.0.1"><div class="ReactTray__info-box" data-reactid=".' +
   reactId + '.0.0.1.0">' +
   footerContent + '</div></div></div></div>' +
   '<script>$(\'.Button.Button--icon-action.ReactTray__closeBtn, .Button.Button--icon-action.ReactTray__closeBtn .icon-x\').click(function () {$(\'.ReactTrayPortal div\').removeAttr(\'style\');$(\'.ReactTrayPortal div\').removeAttr(\'class\');$(\'.ReactTrayPortal div\').html("");$(\'#menu, .menu-item.ic-app-header__menu-list-item a\').removeClass(\'ui-state-disabled\').removeAttr(\'disabled\');$(\'#customTrayOverlay\').hide();$(\'#custom_nav\').css(\'background-color\', \'\');$(\'.icon-resources\').css(\'color\', \'#fff\');});</script>';

	trayHtml = trayHtml.replace(/(?:\r\n|\r|\n|  )/g, '');
	
	
	var menu = $('#menu');
	if (!menu.length) return;
	var custom_nav = $('<li/>', {
		'id': 'custom_nav',
		'class': 'menu-item ic-app-header__menu-list-item',
		html: '<a id="global_nav_resources_link" href="javascript:void(0)" class="ic-app-header__menu-list-link">' +
		'<div class="menu-item-icon-container" aria-hidden="true">' +
		'<i class="icon-link"></i></div>' +
		'<div class="menu-item__text">' + global_nav_name +
		'</div></a></li>'
	});

	// Comment out broken USF Resources button at bottom of left-side navigation bar
	// MRF, 07/02/2018
	//menu.append(custom_nav);

	$('body').append('<div id="customTrayOverlay" style="width:' + $('#menu').width() + 'px;height: ' + $('#menu').height() + 'px;position: absolute;left: 0;top: 87px;z-index: 999;display:none;"></div>');

	$('#global_nav_resources_link').click(function () {
		$('.ReactTrayPortal div').addClass('ReactTray__Overlay ReactTray__Overlay--after-open');
		$('.ReactTrayPortal div').css({
			'position' : 'fixed',
			'top' : '0px',
			'left': '0px',
			'right' : '0px',
			'bottom': '0px'
		});

		$('.ReactTrayPortal div').append(trayHtml);
		$('#menu, .menu-item.ic-app-header__menu-list-item a').addClass('ui-state-disabled').attr('disabled', 'disabled');
		$('#customTrayOverlay').show();
		$('#custom_nav').css('background-color', '#fff');

	});
});