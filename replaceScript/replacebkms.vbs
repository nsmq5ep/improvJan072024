Option Explicit

Dim fso

' Create a FileSystemObject
Set fso = CreateObject("Scripting.FileSystemObject")

' Define the source file (new file) and the destination file (old file)
Dim sourceFile, destFile
sourceFile = "C:\Users\papa\Downloads\index.html"
destFile = "D:\CODING_BACKUP\javascript work\newScripts\bookmarks_fenix\index.html"

' Check if the source file exists
If fso.FileExists(sourceFile) Then
    ' Check if the destination file exists
    If fso.FileExists(destFile) Then
        ' Delete the destination file
        fso.DeleteFile destFile
    End If

    ' Copy the source file to the destination
    fso.CopyFile sourceFile, destFile

    ' Delete the source file
    fso.DeleteFile sourceFile
Else
    WScript.Echo "Source file does not exist."
End If
