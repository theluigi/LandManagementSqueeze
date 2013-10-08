$(document).ready(function() {

  $('#image_container').cycle({
		fx: 'fade',
		timeout: 3000
	});
	
	// fallback for browsers that don't support placeholder text (including IE9-)
	if (!Modernizr.placeholder) {
		$("#firstname").val($("#firstname").attr('placeholder')).on('focus', function(e){
			if ( $(this).val() == $(this).attr('placeholder') ) $(this).val('');
		}).on('blur', function(e){
			if ( $(this).val() == '' ) $(this).val($(this).attr('placeholder'));
		});
		$("#lastname").val($("#lastname").attr('placeholder')).on('focus', function(e){
			if ( $(this).val() == $(this).attr('placeholder') ) $(this).val('');
		}).on('blur', function(e){
			if ( $(this).val() == '' ) $(this).val($(this).attr('placeholder'));
		});
		$("#email").val($("#email").attr('placeholder')).on('focus', function(e){
			if ( $(this).val() == $(this).attr('placeholder') ) $(this).val('');
		}).on('blur', function(e){
			if ( $(this).val() == '' ) $(this).val($(this).attr('placeholder'));
		});
		$("#phone").val($("#phone").attr('placeholder')).on('focus', function(e){
			if ( $(this).val() == $(this).attr('placeholder') ) $(this).val('');
		}).on('blur', function(e){
			if ( $(this).val() == '' ) $(this).val($(this).attr('placeholder'));
		});
		$("#comments").val($("#comments").attr('placeholder')).on('focus', function(e){
			if ( $(this).val() == $(this).attr('placeholder') ) $(this).val('');
		}).on('blur', function(e){
			if ( $(this).val() == '' ) $(this).val($(this).attr('placeholder'));
		});
	}
	if (!Modernizr.input.autofocus) $("#firstname").focus();
	
});

$(window).load(function(){
	
	$("#selectbox").on("change", function(){
		$('#myHiddenField').val(this.value);
	});
	
	if (!Modernizr.input.required) {
		$('#search-form').on('submit', function(e) {
			var _return = true, msg = "", fld = "", cnt = 0;
			var name		= $("#firstname"),
				name2		= $("#lastname"),
				email		= $("#email"),
				phone		= $("#phone"),
				property	= $("#selectbox");
			
			if (name.val() == "" || name.val() == "FIRST NAME*") {
				if (fld == "") fld = name;
				msg += "- Please provide your first name.\n";
				cnt++;
				_return = false;
			}
			if (name2.val() == "" || name2.val() == "LAST NAME*") {
				if (fld == "") fld = name2;
				msg += "- Please provide your last name.\n";
				cnt++;
				_return = false;
			}
			if (email.val() == "") {
				if (fld == "") fld = email;
				msg += "- Please provide your email address.\n";
				cnt++;
				_return = false;
			}
			else if (validateEmailQuick(email.val()) == false) {
				if (fld == "") fld = email;
				msg += "- Invalid email address: "+email.val()+"\n";
				cnt++;
				_return = false;
			}
			if (phone.val() == "" || phone.val() == "PHONE*") {
				if (fld == "") fld = phone;
				msg += "- Please provide your phone number.\n";
				cnt++;
				_return = false;
			}
			if (property.val() == "") {
				if (fld == "") fld = property;
				msg += "- Please select your property of interest.\n";
				cnt++;
				_return = false;
			}
			
			if (!_return) {
				e.preventDefault();
				alert(msg);
				fld.focus();
			}
			else {
				// WARNING: There is a chance the form won't be submitted to the proper place if a javascript redirect is being called immediately upon submittal.
				//			It is highly recommended that the form be submitted for processing and then redirected from the processing page.
				var url = $('#myHiddenField').val();
				window.location.replace(url);
				//e.preventDefault; //<== prevent form submission, IF DESIRED
				$("form").attr("action", url);
			}
			
			function validateEmailQuick(email) {
				if (email.indexOf('@') < 0) return false;
				if (email.indexOf('.') < 0) return false;
				if (email.length < 7) return false;
				var testEmail = email.split('@');
				var domain = testEmail[1].split('.');
				if (testEmail[0] == null || testEmail[0].length < 1) return false;
				if (domain[0] == null || domain[0].length < 2) return false;
				if (domain[1] == null || domain[1].length < 2) return false;
				return true;
			}
		});
	}
	else {
		$('#search-form').on('submit', function(e) {
			// WARNING: There is a chance the form won't be submitted to the proper place if a javascript redirect is being called immediately upon submittal.
			//			It is highly recommended that the form be submitted for processing and then redirected from the processing page.
			var url = $('#myHiddenField').val();
			window.location.replace(url);
			//e.preventDefault; //<== prevent form submission, IF DESIRED
			$("form").attr("action", url);
		});
	}
	
	// not used?
	function redirect(page)
	{
		if (page == 'thankyou1.html')
		{
			window.location = '/thankyou1.html';
		}
		else if (page == 'thankyou2.html')
		{
			window.location = '/thankyou.html';
		}
		else if (page == 'thankyou3.html')
		{
			window.location = '/thankyou.html';
		}
		else if (page == 'thankyouall.html;') {
			window.location = '/thankyouall.html';
		}
	}

});