import java.net.*;

public class AddressTest {
	public static void main(String [] args) throws UnknownHostException {
		InetAddress address = InetAddress.getLocalHost();
		System.out.println("로컬 컴퓨터의 이름 : " + address.getHostName());
		System.out.println("로컬 컴퓨터의 IP 주소 : " + address.getHostAddress());

		address = InetAddress.getByName("java.sun.com");
		System.out.println("java.sum.com 도메인 이름과 IP 주소 : " + address);

		InetAddress SW[] = InetAddress.getAllByName("node.blex.kr");
		for(int i=0;i<SW.length;i++) {
			System.out.println(SW[i]);
		}
	}
}
