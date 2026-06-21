let price = 10000
let range = "day"

let rangeRu;
if (range === "month") {
    rangeRu = "месяц";
} else if (range === "day") {
    rangeRu = "день";
} else if (range === "week") {
    rangeRu = "неделю";
}

let result = price + " Деняк в " + rangeRu;
console.log(result);
