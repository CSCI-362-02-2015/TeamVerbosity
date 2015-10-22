//method retrieved from DatabaseUtils.java
public class testCase2 {
    
    
    public static void main(String args[]){
        
        StringBuilder stringBuilder = new StringBuilder();
        String string = args[0];
        appendEscapedSQLString(stringBuilder, string);
        System.out.println(stringBuilder.toString());
        
    }

    
    public static void appendEscapedSQLString(StringBuilder sb, String sqlString) {
        sb.append('\'');
        if (sqlString.indexOf('\'') != -1) {
            int length = sqlString.length();
            for (int i = 0; i < length; i++) {
                char c = sqlString.charAt(i);
                if (c == '\'') {
                    sb.append('\'');
                }
                sb.append(c);
            }
        } else
            sb.append(sqlString);
        sb.append('\'');
    }
}
