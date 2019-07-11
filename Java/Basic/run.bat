@ECHO OFF

SET argc=0
FOR %%x in (%*) do SET /A argc+=1

IF %argc% == 0 (
    ECHO JAVA EASY RUN 0.0.1
    ECHO =================================
    ECHO run FILE
    ECHO run DIR FILE
    ECHO =================================
    ECHO FILE = Public Class
    EXIT /b
)
IF %argc% == 1 (
    SET FILE_NAME="%1"
)
IF %argc% == 2 (
    SET CURENT_PATH=%CD%
    SET FILE_NAME="%2"
    CD "%1"
)
IF %argc% GTR 2 (
    ECHO Copyright 2019 BaeJino.
    EXIT /b
)

javac *.java
java %FILE_NAME% > result.txt
DEL *.class
TYPE result.txt

IF DEFINED CURENT_PATH ( CD %CURENT_PATH% )

SET argc=
SET FILE_NAME=
SET CURENT_PATH=