class Person {
	String name;
	String phone;
	static int ID;

	public void setName(String s) {
		name = s;
	}

	public String getPhone() {
		return phone;
	}
	
	// 스태틱으로 생성된 메서드이므로 오버라이딩할 수 없다.
	/* public static int getID() { */
	public int getID() {
		return ID;
	}
}

class Professor extends Person {

	//  접근 지정자는 슈퍼 클래스의 메소드의 접근 지정자 보다 좁아질 수 없다.
	/* protected void setName(String s) { */
	public void setName(String s) {
		
	}

	public String getPhone() {
		return phone;
	}
	
	// 오버로딩의 필수 조건은 매개변수의 갯수나 타입이 달라야 한다는 것이다. 반환형으로 오버로딩 할 수 없다.
	/* public void getPhone() { */
	public String getPhone(String name) {
		return name+":"+phone;
	}
	
	public int getID() {
		return ID;
	}
}