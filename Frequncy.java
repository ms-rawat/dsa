public class Frequncy {
   static int counting(int[] array,int num)
    {
        int count=0;
        for (int i : array) {
            if(i==num)
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        int[] array={2,3,4,4,6,6,6,6,6,6,3,3,5,34,33, 5,6};
        int num=6;
        
        
        System.out.println(counting(array,num));

    }
}
