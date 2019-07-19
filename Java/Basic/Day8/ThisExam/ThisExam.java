class ThisData{ 
    int i;
    int j;
    int k;
    
    public ThisData(){ 
        this.i=0; 
        this.j=0; 
        this.k=0; 
    } 
     
    public ThisData(int i){ 
        this.i=i; 
    } 
     
    public ThisData(int i, int j){ 
        this(i);
        this.j=j; 
    } 
} 

public class ThisExam { 
    public static void main(String[] args) { 
        ThisData od = new ThisData(100, 90); 
         
        System.out.println("od.i: " + od.i); 
        System.out.println("od.j: " + od.j); 
        System.out.println("od.k: " + od.k);         
    } 
}