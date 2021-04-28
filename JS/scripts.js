//-----------------------PART 1------------------------//

// const color = prompt('Введите цвет!').toLowerCase()

// const color1 = 'red'
// const color1Rus = 'красный'
// const color2 = 'orange'
// const color2Rus = 'оранжевый'
// const color3 = 'yellow'
// const color3Rus = 'желтый'
// const color4 = 'green'
// const color4Rus = 'зеленый'
// const color5 = 'blue'
// const color5Rus = 'голубой'
// const color6 = 'indigo'
// const color6Rus = 'синий'
// const color7 = 'violet'
// const color7Rus = 'фиолетовый'

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// const colorsRus = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый']

// if (color === colors[0] || color === colorsRus[0]) {
//     document.body.style.background = color1
// } else if (color === colors[1] || color === colorsRus[1]) {
//     document.body.style.background = color2
// } else if (color === colors[2] || color === colorsRus[2]) {
//     document.body.style.background = color3
// } else if (color === colors[3] || color === colorsRus[3]) {
//     document.body.style.background = color4
// } else if (color === colors[4] || color === colorsRus[4]) {
//     document.body.style.background = color5
// } else if (color === colors[5] || color === colorsRus[5]) {
//     document.body.style.background = color6
// } else if (color === colors[6] || color === colorsRus[6]) {
//     document.body.style.background = color7
// }

//------------------------------PART 2----------------------------//

let colors = {
    красный: 'red',
    оранжевый: 'orange',
    желтый: 'yellow',
    зеленый: 'green',
    голубой: 'blue',
    синий: 'indigo',
    фиолетовый: 'violet',
}

const color = prompt('Введите цвет!').toLowerCase()
document.body.style.background = colors[color]
