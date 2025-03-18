let nap = 29;
let napNev = "";
switch (nap % 7) {
    case 0:
        napNev = "vasárnap";
        break;
    case 1:
        napNev = "hétfő";
        break;
    case 2:
        napNev = "kedd";
        break;
    case 3:
        napNev = "szerda";
        break;
    case 4:
        napNev = "csütörtök";
        break;
    case 5:
        napNev = "péntek";
        break;
    case 6:
        napNev = "szombat";
        break;
    case 7:
        napNev = "vasárnap";
        break;
    default:
        napNev = "ismeretlen";
}
console.log(napNev);
