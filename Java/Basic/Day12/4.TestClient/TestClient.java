import java.io.*;
import java.net.*;

public class TestClient {
	public static void main(String [] args) {
		System.out.println("client util start!");

		Socket socket = null;
		try {
			socket = new Socket(args[0], 12345);

			System.out.println("connected server");

			InetAddress ia = socket.getInetAddress();
			int port = socket.getLocalPort();
			String ip = ia.getHostAddress();

			System.out.println("접속한 서버 정보 : " + "Local Port: " + port + " IP: " + ip);
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));

			String line = reader.readLine();
			System.out.println(line);
		} catch(IOException ioe) {
			System.out.println("Exception generated...");
		} finally { 
            try {
                socket.close();
                System.out.println("서버와의 접속을 종료합니다.");
            } catch(Exception ignored) {}
        }

		InputStream is = System.in;
		try {
			is.read();
		} catch(Exception e) {

		}
		System.out.println("client exit");
	}
}
