@ECHO OFF

set argc=0
for %%x in (%*) do Set /A argc+=1

if %argc% == 0 (
    echo "JAVA EASY COMPILE & RUN "
    echo "========================"
    echo ":: EXAMPLE ::"
    echo "run FILE"
    echo "run DIR FILE"
    echo "FILE = Public Class"
)
if %argc% == 1 (
    set file="%1"
    set clean_file=%file:.java=%
    javac *.java
    java %clean_file% > result.txt
    del *.class
    type result.txt
)
if %argc% == 2 (
    set curent_path=%cd%
    cd "%1"
    set file="%2"
    set clean_file=%file:.java=%
    javac *.java
    java %clean_file% > result.txt
    del *.class
    type result.txt
    cd %curent_path%
)
if %argc% GTR 2 (
    echo "Copyright 2019 BaeJino."
)