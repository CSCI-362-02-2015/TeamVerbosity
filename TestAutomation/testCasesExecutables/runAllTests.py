import os

currentDirectory = os.getcwd()
topDirectory = os.path.dirname(currentDirectory)


def testCase1():
    print "executing testCase1"
    os.system("javac testCase1.java")
    os.system("jar -cvfe testCase1.jar testCase1 testCase1.class")
    os.system("java -jar testCase1.jar 5")


def testCase2():
    print "executing testCase2"
    os.system("javac testCase2.java")
    os.system("jar -cvfe testCase2.jar testCase2 testCase2.class")
    os.system("java -jar testCase2.jar WHERE ' '")



def testCase3():
    print "executing testCase3"
    os.system("javac testCase3.java")
    os.system("jar -cvfe testCase3.jar testCase3 testCase3.class")
    os.system("java -jar testCase3.jar 'hello true'")

def testCase4():
    print "executing testCase4"
    os.system("javac testCase4.java")
    os.system("jar -cvfe testCase4.jar testCase4 testCase4.class")
    os.system("java -jar testCase4.jar WHERE WHERE")

def testCase5():
    print "executing testCase5"
    os.system("javac testCase5.java")
    os.system("jar -cvfe testCase5.jar testCase5 testCase5.class")
    os.system("java -jar testCase5.jar 20")

def main():
    testCase1()
    testCase2()
    testCase3()
    testCase4()
    testCase5()



main()