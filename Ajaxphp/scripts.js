	/*
	Tao object XmlHttpRequest. Vi trinh duyet IE va Mozilla ap dung ky thuat nay theo 2 cach khac nhau,
	de dam bao tinh tuong thich, chung ta se can phai kiem tra xem nguoi dung dang su dung trinh duyet nao
	va tao doi tuong XmlHttpRequest theo phuong thuc ho tro boi trinh duyet do.
	*/
	var req;
	var email_OK = false;
	var name_OK = false;
	function loadXMLDoc(url) 
	{
		// branch for native XMLHttpRequest object
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			req.onreadystatechange = processReqChange;
			req.open("GET", url, true);
			req.send(null);
		// branch for IE/Windows ActiveX version
		} else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
			if (req) {
				req.onreadystatechange = processReqChange;
				req.open("GET", url, true);
				req.send();
			}
		}
	}
	
	/*
	Ham (function) processReqChange la ham chiu trach nhiem chinh xu ly viec goi du lieu va nhan du lieu.
	Cac buoc ma ham nay thuc hien:
	1. Doi cho den khi may chu gui phan hoi thong bao la no da xu ly xong
	2. Doc thong bao tu may chu (may chu se gui status=200 nen xu ly thanh cong, 404 neu file khong tim thay,...). 
	Neu may chu noi la xu ly thanh cong, tiep tuc buoc tiep theo
	3. Nhan du lieu ve duoi dang XML. Su dung DOM de phan tich du lieu XML. 
	File XML nhan ve se cung cap cac thong tin: 
		a) Ten ham goi ban dau (giua 2 the <method> va </method>)
		b) Gia tri thong bao ket qua thuc hien ham do (giua 2 the <result> va </result>)
	Biet duoc 2 thong tin tren, goi lai ham do (eval) voi gia tri tra ve de cap nhap giao dien
	Vi du, ham checkName() goi thong tin len may chu hoi, may chu tra ve ten ham la checkName va ket qua la 1. Ta se goi:
		checkName('',1);
	*/
	function processReqChange() 
	{
		if (req.readyState == 4) // only if req shows "complete"
		{
			if (req.status == 200) // only if "OK"
			{
				response  = req.responseXML.documentElement;
				A_Method  = response.getElementsByTagName('method')[0].firstChild.data;
				A_Result    = response.getElementsByTagName('result')[0].firstChild.data;
				if (A_Method!='addNew')
				{
					eval(A_Method + '(\'\', A_Result)');
				}
				else
				{
					eval(A_Method + '(\'\',\'\', A_Result)');
				}
			} 
			else 
			{
				alert("There was a problem retrieving the XML data:\n" + req.statusText);
			}
		}
	}
	
		/*
	Chu y o day la ham checkName se lam hai nhiem vu cung mot luc: gui thong tin va cap nhat thong tin sau khi 
	nhan duoc ket qua, tuy theo thong so dua vao.
	
	Neu response!='' tuc la da nhan duoc ket qua, ham checkName se kiem tra ket qua nhan duoc va thuc hien cac
	thay doi tuong ung tren giao dien
	
	Nguoc lai, neu response=='' thi ham checkName se chuan bi du lieu de gui len may chu yeu cau kiem tra/xu ly
	*/
	function checkName(input, response)
	{
		
		if (response != '')
		{ 
			message   = document.getElementById('nameCheckFailed');
			if (response == 0){
				document.getElementById("name").focus();
				message.className = 'error';
			  	document.getElementById("name").className="textForm_Error";
			  name_OK = false;
			} else {
			  message.className = 'hidden';
			  document.getElementById("name").className="textForm_Accept";
			  name_OK = true;
			} 
			checkReady();
	  	}
		else
		{
			if(input!='')
			{
				url  = 'http://localhost/moodle/WebMinhHoa/Ajax-php/process.php?task=1&q=' + input;
				loadXMLDoc(url);
			}
			else
			{
				name_OK = false;
			}
	  	}
	}
	
	// Cac ham duoi day deu co nguyen tac hoat dong tuong tu nhu ham checkName o tren
	function checkEmail(input, response)
	{
		if (response != '')
		{ 
			message   = document.getElementById('emailCheckFailed');
			if (response == 0){
				document.getElementById("email").focus();
				message.className = 'error';
				document.getElementById("email").className="textForm_Error";
				email_OK = false;
			}else{
			  message.className = 'hidden';
			  document.getElementById("email").className="textForm_Accept";
			  email_OK = true;
			} 
			checkReady();
	  	}
		else
		{
			if (input!='')
			{
				url  = 'http://localhost/moodle/WebMinhHoa/Ajax-php/process.php?task=2&q=' + input;
				loadXMLDoc(url);
			}
			else
			{
				email_OK = false;
			}
	  	}
	}
	
	function addNew(name, email, response)
	{
		if (response != '')
		{ 
			
			if (response == 0){
				document.getElementById("theform").className="hidden";
				document.getElementById("the_error_message").className="display";
			}
			else
			{
			  	document.getElementById("theform").className="hidden";
				document.getElementById("the_welcome_message").className="display";
			} 
	  	}
		else
		{
				url  = 'http://localhost/moodle/WebMinhHoa/Ajax-php/process.php?task=3&name=' + name+'&email='+email;
				loadXMLDoc(url);
	  	}
	}
	
	// kiem tra xem du lieu da san sang va hop le chua. Neu hop le thi "enable" nut nhan cho phep nguoi dung nhan vao
	// de tao tai khoan. Nguoc lai thi "disable" nut do di.
	function checkReady()
	{
		ButtonObject = document.getElementById('register');
		if (name_OK && email_OK)
		{
			ButtonObject.disabled = false;
		} 
		else
		{
			ButtonObject.disabled = true;
		}
	}
	
	function go_back()
	{
		document.getElementById("theform").className="display";
		document.getElementById("the_error_message").className="hidden";
	}