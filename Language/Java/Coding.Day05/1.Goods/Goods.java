public class Goods {
    String name;
    int price;
    int numberOfStock;
    int sold;

    public static void main(String[] args) {
        Goods camera = new Goods();
        camera.name = "Nikon";
        camera.price = 400000;
        camera.numberOfStock = 30;
        camera.sold = 50;
        System.out.println("Name  : " + camera.name);
        System.out.println("Price : " + camera.price);
        System.out.println("Stock : " + camera.numberOfStock);
        System.out.println("Sold  : " + camera.sold);
    }
}