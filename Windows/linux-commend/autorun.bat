@ECHO OFF
doskey ls = dir /b $*
doskey ll = dir $*
doskey cat = type $*

doskey .. = cd..
doskey ~ = cd %HOMEPATH%

doskey grep = find "$1" $2
doskey mv = ren $*
doskey rm = del $*

doskey source = call $*

doskey wget = powershell.exe -c "invoke-webrequest '$1' -outfile .\$2"

@echo activate linux command.