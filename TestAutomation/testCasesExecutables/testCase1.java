// methods retrieved from CursorWindow.java

public class testCase1 {
    
    public int mStartPos;
    
    public static void main(String args[]){
        
        testCase1 obj = new testCase1();
        int integer = Integer.parseInt(args[0]);
        obj.setStartPosition(integer);
        System.out.println(obj.getStartPosition());
        
    }
    
    public int getStartPosition(){
        return mStartPos;
    }
    
    public void setStartPosition(int pos){
        mStartPos = pos;
    }
}
