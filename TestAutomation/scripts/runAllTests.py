import os

currentDirectory = os.getcwd()
topDirectory = os.path.dirname(currentDirectory)

manifestPath = topDirectory + "/testCasesExecutables/MANIFEST.MF"
with open(manifestPath, 'w') as manifest:
    manifest.write("Manifest-version: 1.0 \n")
    manifest.write("Main-Class: testCase1")
    manifest.close()
    javaFilePath = topDirectory + "/testCasesExecutables/testCase1.java"
    javaClassPath = topDirectory + "/testCasesExecutables/testCase1.class"
    javaJarPath = topDirectory + "/testCasesExecutables/testCase1.jar"
        
    executeCall = "javac %s" % javaFilePath
    os.system(executeCall)
    executeCall = "jar -cvfm %s %s %s" % (javaJarPath, manifestPath, javaClassPath)
    os.system(executeCall)
    executeCall = "java -jar %s 5" % javaJarPath
    os.system(executeCall)






