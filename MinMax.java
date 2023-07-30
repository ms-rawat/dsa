public class MinMax {
    //Find the minimum and maximum element in an array.
    public static void main(String[] args) {
        int[] array={3,4,-56,5,6,1,11,77};
        int min ;
        int max;
        min=max=array[0];
        for (int i : array) {
            if(i<min)
            {
                min=i;
            }
            if(i>max)
            {
                max=i;
            }
        }
        System.out.println("min "+min+" max "+max);
    }
}
