import java.io.*;
import java.net.*;

public class TestServer {
	public static void main(String [] args) {
		System.out.println("Server Strard on 12345");
		ServerSocket server = null;
		try {
			server = new ServerSocket(12345);
			while(true) {
				System.out.println("HHHHHHHHHHHHHHIIIIIIIIIIIIIIIII");
				Socket client = server.accept();

				InetAddress ia = client.getInetAddress();
				int port = client.getLocalPort();
				String ip = ia.getHostAddress();
				System.out.println("Client_Connect " + "Local Port: " + port + ", IP: " + ip);
				BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(client.getOutputStream()));

				writer.write("Welcome!");
				writer.flush();
				try {
					client.close();
				}
				catch(IOException e) {
					System.out.println("ERROR");
				}
			}
		}
		catch(IOException ioe) {
			System.out.println("ERROR in oprn server.");
		} finally {
			try {
				server.close();
				System.out.println("Server force stop.");
			}
			catch(IOException e) {

			}
			System.out.println("Server closed.");
		}
	}
}
