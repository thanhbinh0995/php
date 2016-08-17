<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>login</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<div class="container">
		
		<form action="" method="get" accept-charset="utf-8" name="form1">
			<script>
			function validate () {
				if (document.form1.username.value == "") {
					alert("please enter username");
					return ;
				}
				if (document.form1.password1.value == "") {
					alert("please enter password");
					return ;
				}
				if (document.form1.password2.value == "") {
					alert("please enter corfirm password");
					return ;
				}
				if (document.form1.firstname.value == "") {
					alert("please enter username");
					return ;
				}
				if (document.form1.lastname.value == "") {
					alert("please enter username");
					return ;
				}
				if (document.form1.email.value == "") {
					alert("please enter username");
					return ;
				}
				if (document.form1.address.value == "") {
					alert("please enter username");
					return ;
				}
				if (document.form1.phone.value == "") {
					alert("please enter username");
					return ;
				}
				document.forms[0].action = ;
				document.forms[0].submit();
			}

		</script>
			<table>
				<caption>New user registration</caption>
				<tr>
					<td><h3>Username: </h3></td>
					<td><input type="text" name="username" value="" placeholder="Enter username"><td>
				</tr>
				<tr>
					<td><h3>Password: </h3></td>
					<td><input type="text" name="password1" value="" placeholder="Enter password"><td>
				</tr>
				<tr>
					<td><h3>Confirm Password: </h3></td>
					<td><input type="text" name="password2" value="" placeholder="Enter again password"><td>
				</tr>
				<tr>
					<td><h3>FirstName: </h3></td>
					<td><input type="text" name="firstname" value="" placeholder="Enter firstname"><td>
				</tr>
				<tr>
					<td><h3>LastName: </h3></td>
					<td><input type="text" name="lastname" value="" placeholder="Enter lastname"><td>
				</tr>
				<tr>
					<td><h3>email: </h3></td>
					<td><input type="text" name="email" value="" placeholder="Enter email"><td>
				</tr>
				<tr>
					<td><h3>Address: </h3></td>
					<td><input type="text" name="address" value="" placeholder="Enter address"><td>
				</tr>
				<tr>
					<td><h3>Phone: </h3></td>
					<td><input type="text" name="phone" value="" placeholder="Enter phone"><td>
				</tr>
			</table>
		</form>	
	</div>
</body>
</html>