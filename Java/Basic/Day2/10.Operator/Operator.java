public class Operator { 
    public static void main(String[] args) { 
        int i = 10; 
        int j = 20; 
        
        i += j;  // i = i + j; i = 10 + 20 
        System.out.println("i += j: " + i); //30 
        
        i -= j; // i = i - j; i = 30 - 20 
        System.out.println("i -= j: " + i); //10 
    } 
} 
