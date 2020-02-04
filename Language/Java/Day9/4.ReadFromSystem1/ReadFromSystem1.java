public class ReadFromSystem1 {
    public static void main(String [] args) {
        byte [] b = new byte[2048];
        int len=0;
        
        try {
            System.out.println("데이타를 입력하세요:");
            len = System.in.read(b);
            System.out.println(len);
        } catch(Exception e) {
            System.out.println("입력실패!");
        }
        String str = new String(b, 0, len-2);
        System.out.println(str);

        try {
            System.out.println("데이타를 입력하세요:");
            len = System.in.read(b);
            System.out.write(b, 0, len);
            System.in.close();
        } catch(Exception e) {
            System.out.println("입력실패!");
        }
    }
}