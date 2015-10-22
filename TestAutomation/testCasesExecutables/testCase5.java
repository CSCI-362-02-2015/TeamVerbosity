//method retrieved from DatabaseUtils.java
public class testCase5 {
    public static void main(String args[]){
        
        int num = Integer.parseInt(args[0]);
        byte[] arr = new byte[20];
        System.out.println(getKeyLen(arr));
        
    }
    
    
    private static int getKeyLen(byte[] arr) {
        if (arr[arr.length - 1] != 0) {
            return arr.length;
        } else {
            // remove zero "termination"
            return arr.length-1;
        }
    }
}
