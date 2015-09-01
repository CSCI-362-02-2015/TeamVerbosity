#! /usr/bin/env python

import subprocess

myList = open("dir.html", 'w')
myList.write("<html>\n")
myList.write(subprocess.check_output(["ls"]))
myList.write("</html>")
myList.close()