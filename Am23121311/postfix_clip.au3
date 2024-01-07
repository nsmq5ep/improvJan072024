#include <Date.au3>
#include <ClipBoard.au3>

; Get current date and time
Local $sDate = _NowCalc()

; Extract year, month, day, and hour
Local $iYear = StringMid($sDate, 3, 2)
Local $iMonth = StringMid($sDate, 6, 2)
Local $iDay = StringMid($sDate, 9, 2)
Local $iHour = StringMid($sDate, 12, 2)

; Generate 6-digit code
Local $sCode = $iYear & $iMonth & $iDay & $iHour

; Put the code in the clipboard
_ClipBoard_Open(0)
_ClipBoard_SetData($sCode)
_ClipBoard_Close()

; Print the code
ConsoleWrite("The 6-digit code is: " & $sCode & @CRLF)
