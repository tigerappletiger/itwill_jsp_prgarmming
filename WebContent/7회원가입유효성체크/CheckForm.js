
//취미 체크여부확인, 성별 선택 여부 확인 메소드(함수)
function CheckValue(obj){//일로 sex변수의 값이 넘어온다.
	var value=0;
	for(var i=0;i<obj.length;i++){
		if(obj[i].checked==true){//라디오 버튼이 체크되면 1을 가지고있다.
			value =1;
			break;
		}
	}
	if(value==0){//라디오 버튼 또는 체크박스에 선택 또는 체크를 하지않았다면 
		return false;
	}
	else
		return true;
}



//register.html페이지의 값들이 유효한지 체크함수
function CheckForm(){
	//이름을 입력할수있는 input태그 선택해서 가져와서 uName 변수에 저장
	var uName=document.getElementById("uName");
	//id를 입력할수있는  input태그 선택해서 가져와서 uID 변수에 저장
	var uID=document.getElementById("uID");
	//비밀번호를 입력할수있는 input 태그를 선택해서 가져와서 uPWD변수에 저장
	var uPWD=document.getElementById("uPWD");
	//비밀번호를 확인을 입력할수있는 input 태그를 선택해서 가져와서 uPWD_변수에 저장
	var uPWD_Confirm=document.getElementById("uPWD_Confirm");
	//직업을 선택할수있는 select 태그를 선택해서 가져와서 work 변수에 저장
	var work= document.getElementById("work");
	//가입 동기 입력란 textarea태그를 선택해서 가져와서 motivation변수에 저장
	var motivation=document.getElementsByName("motivation");
	//성별 라디오 버튼을 선택해서 sex변수에 저장
	var sex=document.getElementsByName("sex");
	/*두쌍을 배열에 담아서 선택해서 가져온다*/
	var hobby=document.getElementsByName("hobby");
	//취미 체크박스들을 선택해서 hobby변수에 저장
	/*document.getElementsByTagName(태그명)->해당 태그명의 요소를 모두 선택해서 가져옴
	document.getElementById-> id속성값에 해당하는 요소 하나를 선택해서 가져옴
	document.getElementByClassName(class속성의 값)->class 속성값에 해당하는 요소들을 모두 선택해서 가져옴
	document.getElementByName(name 속성의값)-> name속성값을 가지는 요소를 모두 선택해서 옴*/
	console.log(textarea);
	
	//이름을 입력 하지 않았을 경우
	if(uName.value==""){
		alert("이름을 입력해주세요");
		uName.focus();
		return false;
	}
	
	//아이디를 2자미만 또는 5자 보다 초과로 입력했을 경우
	if(uName.value.length <2 || uName.value.length>5){
		alert("이름은 2~5자 이내로 작성하시오");
		//이름을 2자 미만 또는 5자보다 초과로 작성했을경우
		//이름 입력란 input요소에 입력된 텍스트를 선택이 되도록 
		uName.select();
		return false;
	}
	
	
	//비밀번호를 입력하지 않았다면
	if(uPWD.value==""){
		alert("비밀번호를 입력해야합니다.");
		return false;
	}
	
	//비밀번호 입력공간에 입력한 값과 비밀번호 확인 입력공간에 값이 다를 경우
	if(uPWD.value.length<8|| uPWD.value.length>12){
		alert("비밀번호는 8~12사이로 입력해야합니다.");
		//비밀번호 입력 공간에 입력했던 내용을 지우기 위해 빈공백으로 설정
		uPWD.value="";
		//form요소로 false를 리턴하여 action속성의 서버페이지로 전송하는 것을 차단 시키기
		return false;
	}
	
	if(uPWD.value!=uPWD_Confirm.value){
		// 두 비밀번호가 일치하지 않습니다.
		alert("두 비밀번호가 일치하지 않습니다.");
		//비밀번호 확인 입력공간에 입력되어 있는 정보들을 빈공백을 주어 제거하기
		uPWD.value="";
		uPWD_Confirm.value="";
		return false;
	}
	/*//비밀번호가 일치할경우
	else{
		alert("비밀번호가 일치합니다.");
		//uPWD_Confirm.value=uPWD.value; 확인창에 비밀번호를 넣어 확인을 하니깐 다시 값을 넣어줄필요가 없다.!!
		work.focus();
		return false;
	}*/
	//직업을 선택하지 않았을 경우
	if(work.options.selectedIndex ==0){/*아무것도 선택이 안됬을경우를 말한다 왜냐하면 index는 1번부터 시작하기 떄문*/
		alert("직업을 선택해주세요");
		return false;
	}

	//성별을 선택하지 않았을 경우
	if(!CheckValue(sex)){/* input태그의 값들이 배열에 저장되어 그것을 변수에 담아서 가져온다..*/
		alert("성별을 체크해주세요!");
		return false;//form요소로 보내어 jsp페이지로 전송을 차단.
	}
	
	//취미를 체크 하지 않았을 경우
	if(!CheckValue(hobby)){
		alert("취미버튼을 체크해주세요");
		return false;
	}
	
	//가입동기를 입력하지 않았을경우
	if(motivation[0].value==""){
		alert("빈공백은 금지되었습니다.");
		return false;
	}
	
	return false;
	
} 
	
	

function CheckID(){
	//새로운 창을 띄어 주자
	window.open("CheckID.html","아이디중복확인","width=500,height=300");
	
}
//아이디 체크 메소드 만들기