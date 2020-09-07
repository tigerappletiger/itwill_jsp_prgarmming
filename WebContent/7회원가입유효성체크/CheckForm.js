



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
	console.debug(hobby);
	return false;
} 








function CheckID(){
	//새로운 창을 띄어 주자
	window.open("CheckID.html","아이디중복확인","width=500,height=300");
	
}
//아이디 체크 메소드 만들기