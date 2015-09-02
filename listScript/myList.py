#! /usr/bin/env python

import subprocess, webbrowser, sys

myList = open("dir.html", 'w')
if sys.platform == "win32":
	com = 'dir'
else:
	com = 'ls'

myList.write("<html>\n")
myStr = (subprocess.check_output([com]))
for s in (myStr.split()):
	myList.write(s + "<br>")
myList.write("\n</html>")
myList.close()

webbrowser.open("dir.html")
sys.exit()
print "Did not close"
