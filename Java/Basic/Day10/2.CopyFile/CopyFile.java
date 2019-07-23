import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class CopyFile {
    public static void main(String [] args) {
        try {
            if(args.length != 2) {
                System.out.println("--------- 에러 발생 --------");
                System.out.println("usege: java CopyFile <Original> <Destination>");
                System.exit(1);
            }

            File inputFile = new File(args[0]);
            File outputFile = new File(args[1]);

            FileReader in = new FileReader(inputFile);
            FileWriter out = new FileWriter(outputFile);

            int c;

            while((c = in.read()) != -1) {
                out.write(c);
            }

            System.out.println("파일 복사가 완료되었습니다.");
            in.close();
            out.close();
        } catch(Exception e) {
            System.out.println(e.toString());
        }
    }
}