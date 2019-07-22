public class InterImpl implements Inter{ 
    public int add(int i, int j){ 
        return i+j; 
    } 
    public int sub(int i, int j){ 
        return i-j; 
    } 
    public static void main(String[] args) { 
        InterImpl interImpl = new InterImpl(); 
        System.out.println(interImpl.add(10, 5)); 
        System.out.println(interImpl.sub(10, 5)); 
         
        //인터페이스는 기능이 구현되어 있지않음으로  
        //객체를 생성할 수 없습니다. 
        //---------------------------------------- 
        //Inter inter = new Inter(); 
         
        //인터페이스는 구현 클래스를 할당 받을 수 있습니다. 
        //인터페이스 = 구현 클래스 
        //---------------------------------------- 
         Inter inter2 = new InterImpl(); 
         System.out.println(inter2.add(100, 50)); 
         System.out.println(inter2.sub(100, 50)); 
    }
}