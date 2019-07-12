public class ArrayWhile {

    public static void main(String[] args) {
        String[] movies = { "Gravity", "Mamamia", "AVANGERSE", "SpiderMan", "X-MAN" };
        int[] year = {2014,2008,2012,2013,2014};

        int cnt = -1;

        System.out.println("Count : " + movies.length); // 8
        while (cnt < movies.length - 1) {
            cnt = cnt + 1;
            System.out.println(movies[cnt]+"-"+year[cnt]); // 0 ~ 7
        }
    }

}