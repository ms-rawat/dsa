public class ReverseArray {
    void reversearrayfuntionc(int[] arr){
        int t=arr.length;

    }
    public static void main(String[] args) {
        // reverse the array 
        int[] array ={1,2,3,4,5,6,7,8,9};
        int[] ReverseArray= new int[9] ;
       
         for (int i : array) {
           ReverseArray[--t]=array[i-1];
        }
  for(int i=0;i<ReverseArray.length;i++)
  {
     System.out.println(ReverseArray[i]);
  }


    }
    
}
