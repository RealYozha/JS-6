DaysRu = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
DaysEng = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
DaysRuFull = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
DaysEngFull = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


let lang = prompt("Language (en/ru)");

if (lang == 'ru') {
    day = prompt(("Введи твой день недели в этой форме:", DaysRu));
    if (day == DaysRu[0]) {
        alert(DaysRuFull[0]);
    } else if (day == DaysRu[1]) {
        alert(DaysRuFull[1]);
    } else if (day == DaysRu[2]) {
        alert(DaysRuFull[2]);
    } else if (day == DaysRu[3]) {
        alert(DaysRuFull[3]);
    } else if (day == DaysRu[4]) {
        alert(DaysRuFull[4]);
    } else if (day == DaysRu[5]) {
        alert(DaysRuFull[5]);
    } else if (day == DaysRu[6]) {
        alert(DaysRuFull[6]);
    } else {
        alert("Я не знаю такой день недели.");
    }
    let hours = prompt("Сколько времени? (часы)");
    if (hours >= 6 && hours < 12) {
        alert("Доброе утро!");
    } else if (hours >= 12 && hours <= 18) {
        alert("Добрый день!");
    } else {
        alert("Добрый вечер!");
    }
} else if (lang == 'en') {
    day = prompt(("Enter your weekday in this form:", DaysEng));
    if (day == DaysEng[0]) {
        alert(DaysEngFull[0]);
    } else if (day == DaysEng[1]) {
        alert(DaysEngFull[1]);
    } else if (day == DaysEng[2]) {
        alert(DaysEngFull[2]);
    } else if (day == DaysEng[3]) {
        alert(DaysEngFull[3]);
    } else if (day == DaysEng[4]) {
        alert(DaysEngFull[4]);
    } else if (day == DaysEng[5]) {
        alert(DaysEngFull[5]);
    } else if (day == DaysEng[6]) {
        alert(DaysEngFull[6]);
    } else {
        alert("I don't know this language.");
    }
    let hours = prompt("What time is it? (hours)");
    if (hours >= 6 && hours < 12) {
        alert("Good morning!");
    } else if (hours >= 12 && hours <= 18) {
        alert("Good afternoon!");
    } else {
        alert("Good evening!");
    }
} else {
    alert("Такой язык не поддерживается.");
}