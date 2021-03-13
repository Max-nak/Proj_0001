function print(line) {
    document.write(line)
}

function setLinks(count) {
    for (i = 1; i <= count; i++) {
        num = "lr_"+String(i)+".html"
        print("<a href="+num+" target=_blank>")
        print("ЛабРаб"+String(i))
        print("</a><br>")
    }
}