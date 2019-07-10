@ECHO OFF

set argc=0
for %%x in (%*) do Set /A argc+=1

if %argc% == 0 (
    echo "Copyright 2019 BaeJino."
    exit /b
)
if %argc% == 1 (
    set file="%1"
    rem set clean_file=%file:.java=%
)
if %argc% == 2 (
    set curent_path=%cd%
    set file="%2"
    rem set clean_file=%file:.java=%
    cd "%1"
)
if %argc% GTR 2 (
    echo "Copyright 2019 BaeJino."
    exit /b
)

javac *.java
java %file% > result.txt
del *.class
type result.txt

if defined curent_path ( cd %curent_path% )

set argc=
set curent_path=
set file=
set clean_file=