// method retrieved from DatabaseUtils.java
public class testCase4 {
    public static void main(String args[]){
        
        
        String where1 = args[0];
 
        String where2 = args[1];

        System.out.println(concatenateWhere(where1, where2));
        
    }
    
    /**
     * Concatenates two SQL WHERE clauses, handling empty or null values.
     * @hide
     */
    public static String concatenateWhere(String a, String b) {
        if ("".equals(a)) {
            return b;
        }
        if ("".equals(b)) {
            return a;
        }
        
        return "(" + a + ") AND (" + b + ")";
    }
}
