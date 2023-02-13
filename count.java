import javax.print.attribute.standard.ColorSupported;

public class count {
    public static void main(String[] args) {
        startCount(8);

    }

    public static void startCount(int k) {
        int count = 0;
        for (int i = 0; i < k; i++) {
            System.out.println(count);
            count=count+i;
            // System.out.println(count);
        }

    }
}
