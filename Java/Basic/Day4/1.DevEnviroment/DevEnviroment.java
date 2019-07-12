public class DevEnviroment {
    public static void main(String [] args) {
        String [] lang = new String[4];

        lang[0] = "JAVA";
        lang[1] = "JSP";
        lang[2] = "Spring/MyBATIS";
        lang[3] = "Project";

        System.out.println(lang[0]);
        System.out.println(lang[1]);
        System.out.println(lang[2]);
        System.out.println(lang[3]);

        String [] lang2 = new String[3];
        String [] script = new String[3];
        String [] dbms = {"Oracle", "ms-sql", "my-sql"};

        lang2[0] = "JAVA";
        lang2[1] = "C#";
        lang2[2] = "C";
        script[0] = "JSP";
        script[1] = "ASP.NET";
        script[2] = "PHP";

        for(int i=0; i<=2; i++) {
            System.out.println(lang2[i] + " - " + script[i] + " - " + dbms[i]);
        }
    }
}