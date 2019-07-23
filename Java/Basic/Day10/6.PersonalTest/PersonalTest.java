import java.io.*;

class Personal implements Serializable {
    String name;
    transient String secretInfo; // Serializable 제외
    int age;
    transient int secretNum;
    Personal(String name, String sinfo, int age, int snum) {
        this.name = name;
        secretInfo = sinfo;
        this.age = age;
        secretNum = snum;
    }

    public void showPersonal() {
        System.out.println("name:"+name);
        System.out.println("secretInfo:"+secretInfo);
        System.out.println("age:"+age);
        System.out.println("secretNum:"+secretNum);
    }
}

public class PersonalTest {
    public static void main(String [] args) throws IOException, ClassNotFoundException {
        Personal p = new Personal("Jone", "baby", 3, 42);
        p.showPersonal();

        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("Object2.ser"));

        out.writeObject(p);
        out.close();

        ObjectInputStream in = new ObjectInputStream(new FileInputStream("Object2.ser"));

        Personal p2 = (Personal)in.readObject();

        System.out.println(" >>>> 복원된 Personal");
        p2.showPersonal();
        in.close();
    }
}