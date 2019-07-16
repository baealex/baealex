class ReferenceObject {
    public String value = "";
}

public class StringTest {

    public void changeString(ReferenceObject src) {
        src.value = "JSP";
    }

    public static void main(String[] args) {
        // System.out.println("ABCD".toLowerCase());
        // System.out.println("ABCD".hashCode());

        ReferenceObject step = new ReferenceObject();
        step.value = "JAVA";
        StringTest st = new StringTest();
        System.out.println(step.value);
        st.changeString(step);
        System.out.println(step.value);
    }
}

// https://okky.kr/article/32431