import java.io.BufferedReader;
import java.io.FileReader;

public class DevReader {
    static public void main(String[] args) {
        String fileName = "../2.DevProcess/dev.output.txt";

        try {
            FileReader fr = new FileReader(fileName);
            BufferedReader br = new BufferedReader(fr);

            String str = "";
            String line = "";

            while (true) {
                line = br.readLine();

                if (line == null) {
                    break;
                }
                System.out.println(line);
            }
            br.close();
            fr.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}