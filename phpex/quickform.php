<?php  
	// set_include_path(get_include_path().PATH_SEPARATOR.'/usr/local/pear/share/pear/');
	// require('HTML/quickform2.php');
	$form = new HTML_Quickform2('loginForm');
	$email = $form->addElement('text','email');
	$email->setLabel('Email address');
	$email->addFilter('trim');
	$email->addRule('require','please enter your email address ')	

?>