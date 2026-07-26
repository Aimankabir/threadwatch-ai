$js = (Invoke-WebRequest -Uri "http://127.0.0.1:5500/js/app.js" -UseBasicParsing).Content
Write-Host "length=" $js.Length
Write-Host "safeBind=" $js.Contains("safeBind")
Write-Host "showError=" $js.Contains("showError")
Write-Host "jsErrBar=" $js.Contains("jsErrBar")
Write-Host "windowAddListener=" $js.Contains("window.addEventListener")
