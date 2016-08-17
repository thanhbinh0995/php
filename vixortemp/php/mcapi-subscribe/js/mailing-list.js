/*///////////////////////////////////////////////////////////////////////
Ported to jquery from prototype by Joel Lisenby (joel.lisenby@gmail.com)
http://joellisenby.com

original prototype code by Aarron Walter (aarron@buildingfindablewebsites.com)
http://buildingfindablewebsites.com

Distrbuted under Creative Commons license
http://creativecommons.org/licenses/by-sa/3.0/us/
///////////////////////////////////////////////////////////////////////*/

var emailEntered,
	FirstNameVal,
	LastNameVal,
	emailtypeVal;

jQuery(document).ready(function() {
	jQuery(".SendButton",".subscribe").click(function() {

			var form=jQuery(this).closest('.form-subscribe-content');

			jQuery(".error",form).hide();

			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var emailaddressVal = jQuery(".email",form).val();
			
			var required=false;
			jQuery.each(jQuery("input.required",form),function(index,input){
				required=(jQuery(this).val()=='')?true:false;
			});

			if(required) {
				jQuery(".message",form).html('<div class="alert alert-danger">Type the required field</div>');
				return false; 
			}

			if(emailaddressVal == '') {
				jQuery(".message",form).append('<div class="alert alert-danger">Enter your email address before submitting.</div>');
				return false; 
			}
			else if(!emailReg.test(emailaddressVal)) {
				jQuery(".message",form).append("<div class='alert alert-danger'>That is not an email address.&nbsp;  Typo?</div>");
				return false; 
			} 
			else if(!required){
				emailEntered = escape(jQuery('.email',form).val());
			}

			FirstNameVal = escape(jQuery(".firstname",form).val());
			LastNameVal = escape(jQuery(".lastname",form).val());

	});

	jQuery('.subscribe').submit(function() {
		var message=jQuery(this).siblings(".message");
		jQuery(message).html("<div class='alert alert-danger'>Adding your email address...</div>");
		jQuery.ajax({
			url: 'php/mcapi-subscribe/inc/store-address.php', // proper url to your "store-address.php" file
			data: 'ajax=true&email=' + emailEntered +'&firstname=' + FirstNameVal+'&lastname=' + LastNameVal,
			success: function(msg) {
				jQuery(message).html(msg);
			}
		});
		return false;
	});
});
