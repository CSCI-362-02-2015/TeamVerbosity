//method retrieved from DatabaseUtils.java
public class testCase3 {
    public static void main(String args[]){
        
        
        String string = args[0];
        StringBuilder stringBuilder = new StringBuilder();
        appendValueToSql(stringBuilder, string);
        System.out.println(sql.toString());
    }
    
    
    /**
     * Appends an Object to an SQL string with the proper escaping, etc.
     */
    public static final void appendValueToSql(StringBuilder sql, Object value) {
        if (value == null) {
            sql.append("NULL");
        } else if (value instanceof Boolean) {
            Boolean bool = (Boolean)value;
            if (bool) {
                sql.append('1');
            } else {
                sql.append('0');
            }
        } else {
            appendEscapedSQLString(sql, value.toString());
        }
    }
}
