package Day10;

import java.io.*;
import java.util.*;

public class ProTest2 {
	public static void main(String [] args) {
		String myinfoPath = "myinfo.properties";
		FileInputStream fis = null;
		Properties pro = new Properties();
		
		try {
			fis = new FileInputStream(myinfoPath);
			pro.load(fis);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		Iterator iter = pro.keySet().iterator();
		
		System.out.println("이름:"+pro.getProperty("name"));
        System.out.println("전화번호:"+pro.getProperty("phone"));
        System.out.println("주소:"+pro.getProperty("address"));
	}
}
