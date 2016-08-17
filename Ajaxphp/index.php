<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Vi du su dung AJAX</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="styles.css" rel="stylesheet" type="text/css" media="screen" />
<script language="javascript" src="scripts.js">
</script>
</head>
<body bgcolor=#aaggbb> 
<div id="container"> 
  <h4><font color="#0099CC" size="3">Vi Du Minh Hoa </font></h4>
  <h4><font color="#009999" size="+6">Cong Nghe AJAX     </font><br />
  </h4>
  <ul id="minitabs">
    <li></li>
  </ul>
  <div id="theform"> 
    <p align="center" class="label">Nhap vao ten va dia chi email
    </p>
    <p align="center" class="label">Name : 
      <input id="name" name="username" type="text" class="textForm" width="120" onfocus="this.className='textForm_Hover';" onblur="this.className='textForm';checkName(this.value,'');" />
      <br />
      <span class="hidden" id="nameCheckFailed">Ten ban khong hop le. Moi ban nhap lai
	   </span> </p>
    <p align="center" class="label">Email : 
      <input id="email" name="email" type="text" class="textForm" width="120" onfocus="this.className='textForm_Hover';" onblur="this.className='textForm';checkEmail(this.value,'');" />
      <br />
      <span class="hidden" id="emailCheckFailed">Dia chi nay khong hop le. Moi ban nhap lai
      </span> </p>
    <p><input id="register" name="register" type="button" disabled class="buttonForm" value="Ðang ký" onclick="addNew(document.getElementById('name').value, document.getElementById('email').value,'')" />
		</p>
	</div>
	
	<div id="the_error_message" class="hidden">
		<div class="error_message">
			<p>Co loi xay ra khi tao tai khoan</p>
			<p>Click vao lien ket duoi de quay tro lai</p>
		</div>
		<a href="#" onclick="go_back();">Quay lui</a>
	</div>
	
	<div id="the_welcome_message" class="hidden">
		
    <div class="welcome_message"> 
      <p>Tai khoan da duoc tao thanh cong</p>
      <p>Chuc mung ban den voi cong nghe Ajax</p>
		</div>
		<a href="index.php">
    <h1><font color="#0033CC" size="1">ÐANG KÝ M?I</font></h1>
    </a> </div>
</div>
</body>
</html>
