import java.io.*;

public class FileInfo {
    public static void main(String [] args) {
        System.out.println("파일 이름을 넣으세오 : ");
        String name = "";

        try {
            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
            name = in.readLine();
        } catch(Exception e) {
            System.out.println("ERROR : " + e.toString());
        }

        File file = new File(name);
        if(file.exists()) {
            System.out.println("파일 이름 : " + file.getName()); 
            System.out.println("상대 패스 : " + file.getPath()); 
            System.out.println("절대 패스 : " + file.getAbsolutePath()); 
            System.out.println("쓰기 가능 : " + file.canWrite()); 
            System.out.println("읽기 가능 : " + file.canRead()); 
            System.out.println("파일 길이 : " + file.length() + " 바이트"); 
        } else {
            System.out.println("해당 파일은 존재하지 않습니다.");
        }
    }
}