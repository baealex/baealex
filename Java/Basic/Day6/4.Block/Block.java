public class Block {
    String Block = "Funny Movie";

    public static void main(String[] args) {
        String b1 = "Troy";
        System.out.println("Movie:" + b1);

        {
            String b2 = "Space War";
            System.out.println("Movie:" + b2);
            int i = 0;

            for (int j = 0; j < 5; j++) {
                
            }
            // System.out.println("j:" + j);

            for (i = 0; i < 5; i++) {
                
            }
            System.out.println("i:" + i);

        }
        System.out.println("Movie:" + b1);
        // ERROR
        // System.out.println("Movie:" + b2);
        Block mBlock = new Block();
        System.out.println(mBlock.Block);
    }

} 