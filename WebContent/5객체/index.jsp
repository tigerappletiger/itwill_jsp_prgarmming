
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<!-- was���� dom_ob6.html �������κ��� ��û���� ���������� �Դϴ�.-->
	dom_ob6.html 
	<% 
	//�ڹ��ڵ� 
	//dom_ob6.html(��û�ϴ� ������)-> index.jsp(��û�� �޴� ���� ������)
	//��û�� �ϴ� ���� request ���尴ü �޸� ������ ������ ����� ���鼭 ��û������  ����Ǿ� �����Ǿ� �ִ�/
	// ��û�� ������ request �޸𸮿��� ��������
	String chk1=request.getParameter("subject1");
	out.print("dom_ob6.html���� ��û�ؼ� ������ :"+chk1);
	
	
	%>
</body>
</html>