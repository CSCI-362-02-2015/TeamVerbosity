//method retrieved from DatabaseUtils.java
public class testCase5 {
    public static void main(String args[]){
        
        System.out.println("Hello world");
        
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
