import os

currentDirectory = os.getcwd()
topDirectory = os.path.dirname(currentDirectory)
print topDirectory
print currentDirectory

manifestPath = "./testCasesExecutables/MANIFEST.MF"
testCaseString = "./testCasesExecutables/testCase1"
javaFilePath = "./testCasesExecutables/testCase1.java"
javaClassPath = "./testCasesExecutables/testCase1.class"
javaJarPath = "./testCasesExecutables/testCase1.jar"

executeCall = "javac %s" % javaFilePath
print executeCall
os.system(executeCall)
executeCall = "jar -cvfm %s %s %s" % (javaJarPath, manifestPath, javaClassPath)
print executeCall
os.system(executeCall)
executeCall = "java -jar %s 5" % javaJarPath
print executeCall
os.system(executeCall)






