var now, hour, minute;;
now = new Date();
hour = now.getHours();
minute = now.getMinutes();
document.write("<h1>現在時刻：");
document.write(hour,"時", minute, "分</h1>");
