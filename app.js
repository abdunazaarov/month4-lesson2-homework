// 1 - Masala

// Musbat bo'lsa 1 ga oshiriladi. Aks holda o'zgartirilmaydi.


// {
//     let a = 5

//     if (a > 0){
//         a += 1
//         console.log(a)
//     }
//     else{
//         console.log(a)
//     }
// }


// 2 - Masala

// Musbat bo'lsa 1 ga oshiriladi. Aks holda 2 ga kamaytiriladi.


// {
//     let a = 0

//     if (a > 0){
//         a += 1
//         console.log(a)
//     }
//     else{
//         a -= 2
//         console.log(a)
//     }
// }

// 3 - Masala

// Musbat bo'lsa 1 ga oshiriladi. Manfiy bo'lsa 2 ga kamaytiriladi. 0 ga teng bo'lsa 10 ni o'zlashtiradi.


// {
//     let a = 0

//     if (a > 0){
//         a += 1
//         console.log(a)
//     }
//     else if(a < 0){
//         a -= 2
//         console.log(a)
//     }
//     else{
//         a = 10
//         console.log(a)
//     }
// }

// 4 - Masala

// Nechta musbat son borligini aniqlaydi.


// {
//     let a = 5
//     let b = 2
//     let c = -1
//     let count = 0

//     if(a > 0){
//         count += 1
//     }
//     if(b > 0){
//         count += 1
//     }
//     if(c > 0){
//         count += 1
//     }

//     console.log(`${count} ta musbat son bor.`)
// }

// 5 - Masala

// Nechta musbat va manfiy sonlarini aniqlaydi.


// {
//     {
//         let a = 5
//         let b = 2
//         let c = -1
//         let countPlus = 0
//         let countMinus = 0
    
//         if(a > 0){
//             countPlus += 1
//         }
//         else if(a < 0){
//             countMinus += 1
//         }
//         if(b > 0){
//             countPlus += 1
//         }
//         else if(b < 0){
//             countMinus += 1
//         }
//         if(c > 0){
//             countPlus += 1
//         }
//         else if(c < 0){
//             countMinus += 1
//         }
    
//         console.log(`${countPlus} ta musbat ${countMinus} ta manfiy son bor.`)
//     }
// }

// 6 - Masala

// Katta sonni aniqlaydi.


// {
//     let a = 4
//     let b = 6

//     if(a > b){
//         console.log(`${a} son ${b} sondan katta`)
//     }
//     else if(b > a){
//         console.log(`${b} son ${a} sondan katta.`)
//     }
//     else{
//         console.log(`Ikki son ham teng`)
//     }
// }

// 7 - Masala

// Kichik sonni tartib raqamini aniqlaydi.


// {
//     let a = 10
//     let b = 20

//     if(a < b){
//         console.log(1)
//     }
//     else if(b < a){
//         console.log(2)
//     }
//     else{
//         console.log("Ikki son teng.")
//     }
// }

// 8 - Masala

// Avval kattasini keyin kichigini ekranga chiqaradi.


// {
//     let a = 10
//     let b = 20

//     if(a > b){
//         console.log(a, b)
//     }
//     else if(b > a){
//         console.log(b, a)
//     }
//     else{
//         console.log("Ikki son teng.")
//     }
// }

// 9 - Masala

// Har qanday holda ham a kichik b katta son bo'ladi va ekranga chiqadi.


// {
//     let a = 18.2
//     let b = 13.75
//     let c = null

//     console.log(`a = ${a} va b = ${b}`)

//     if (a > b){
//         c = a
//         a = b
//         b = c
//     }

//     console.log(`a = ${a} va b = ${b}`)
// }

// 10 - Masala

// Agar sonlar teng bo'lmasa yigindisini o'zlashtiradi. Teng bo'lsa 0 ni o'zlashtiradi.


// {
//     let a = 10
//     let b = 10
//     let c = a

//     if (a === b){
//         a += b
//         b += c
//     }
//     else{
//         a = 0
//         b = 0
//     }

//     console.log(`a = ${a} va b = ${b}`)
// }

// Qo'shimcha

// 11 - Masala

// Agar sonlar teng bo'lmasa ularning kattasini o'zlashtiradi. Teng bo'lsa 0 ni o'zlashtiradi.


// {
//     let a = 10
//     let b = 20

//     if (a !== b){
//         if(a > b){
//             b = a
//             console.log(`a = ${a} va b = ${b}`)
//         }
//         else if(b > a){
//             a = b
//             console.log(`a = ${a} va b = ${b}`)
//         }
//     }
//     else{
//         a = 0
//         b = 0
//         console.log(`a = ${a} va b = ${b}`)
//     }
// }

// 12 - Masala

// Sonlarning eng kichigini aniqlaydi.


// {
//     let a = 7
//     let b = 5
//     let c = 6

//     if(a < b && a < b){
//         console.log(`Eng kichik son a = ${a}`)
//     }
//     else if(b < a && b < c){
//         console.log(`Eng kichik son b = ${b}`)
//     }
//     else if(c < a && c < b){
//         console.log(`Eng kichik son c = ${c}`)
//     }
// }

// 13 - Masala

// Sonlarning o'rtanchasini aniqlaydi.


// {
//     let a = 7
//     let b = 5
//     let c = 6

//     if (a > b && a < c || a > c && a < b){
//         console.log(`O'rtancha son a = ${a}`)
//     }
//     else if (b > a && b < c || b > c && b < a){
//         console.log(`O'rtancha son b = ${b}`)
//     }
//     else{
//         console.log(`O'rtancha son c = ${c}`)
//     }
// }

// 14 - Masala

// Yigindisi eng katta boluvchi ikkita sonni ekranga chiqaradi.


// {
//     let a = 10
//     let b = 6
//     let c = 7

//     if ((a + b) > (a + c) && (a + b) > (b + c)){
//         console.log(`A va B sonlarining yig'indisi ${a+b}`)
//     }
//     else if ((a + c) > (a + b) && (a + c) > (b + c)){
//         console.log(`A va C sonlarining yi'indisi ${a+c}`)
//     }
//     else(
//         console.log(`B va C sonlari yig'indisi ${b+c}`)
//     )
// }

// 15 - Masala

// Sonlar o'sish tartibida bo'lsa ikkilantiradi. Aks holda ishorasi minus bo'ladi.

// {
//     let a = 5
//     let b = 5
//     let c = 6

//     if (a < b && b < c){
//         a *= 2
//         b *= 2
//         c *= 2
//         console.log(`A = ${a}, B = ${b} va C = ${c} ga teng.`)
//     }
//     else{
//         a = a * (-1)
//         b = b * (-1)
//         c = c * (-1)
//         console.log(`A = ${a}, B = ${b} va C = ${c} ga teng.`)
//     }
// }

// 16 - Masala

// Sonlar o'sish yoki kamayish tartibida bo'lsa ikkilantiradi. Aks holda ishorasi minus bo'ladi.


// {
//     let a = 4
//     let b = 5
//     let c = 6

//     if (a < b && b < c || a > b && b > c){
//         a *= 2
//         b *= 2
//         c *= 2
//         console.log(`A = ${a}, B = ${b} va C = ${c} ga teng.`)
//     }
//     else{
//         a = a * (-1)
//         b = b * (-1)
//         c = c * (-1)
//         console.log(`A = ${a}, B = ${b} va C = ${c} ga teng.`)
//     }
// }

// 17 - Masala

// Sonlarni 3 tasi o'zaro teng. Qolgan bittasini tartib raqamini aniqlaydi.


// {
//     let a = 6
//     let b = 5
//     let c = 5

//     if (a === b){
//         console.log(`C ning tartib raqami 3`)
//     }
//     else if (a === c){
//         console.log(`B ning tartib raqami 2`)
//     }
//     else{
//         console.log(`A ning tartib raqami 1`)
//     }
// }

// 18 - Masala

// 4 ta sonlardan 3 tasi o'zaro teng. Qolgan bittasini tartib raqamini aniqlaydi.


// {
//     let a = 4
//     let b = 4
//     let c = 4
//     let d = 5

//     if (a === b && a === c){
//         console.log(`D ning tartib raqami 4`)
//     }
//     else if (a === b && a === d){
//         console.log(`C ning tartib raqami 3`)
//     }
//     else if (a === c && a === d){
//         console.log(`B ning tartib raqami 2`)
//     }
//     else{
//         console.log(`A ning tartib raqami 1`)
//     }
// }

// 19 - Masala

// Son musbat bo'lsa 100 gacha bolgan juft sonlarni chiqaradi. Son manfiy bo'lsa 100 gacha bo'lgan toq sonlarni chiqaradi.


// {
//     let number = 0

// if (number > 0) {
//     for (let i = 2; i <= 100; i += 2) {
//         console.log(i);
//     }
// } 
// else if (number < 0) {
//     for (let i = 1; i <= 100; i += 2) {
//         console.log(i);
//     }
// } 
// else {
//     console.log("Siz 0 ni kiritdingiz.");
// }
// }

// 20 - Masala

// 3 ta sonlardan A nuqtaga eng yaqin nuqta va ular orasidagi masofa toliadi.


// {
//     let a = 7
//     let b = 20
//     let c = 5

//     let distanceToB = Math.abs(a - b);
//     let distanceToC = Math.abs(a - c);

//     if (distanceToB < distanceToC) {
//     console.log(`a nuqtaga eng yaqin nuqta b (${b}) va masofa: ${distanceToB}`);
//     } 
//     else if (distanceToC < distanceToB) {
//     console.log(`a nuqtaga eng yaqin nuqta c (${c}) va masofa: ${distanceToC}`);
//     } 
//     else {
//     console.log(`b (${b}) va c (${c}) nuqtalarining ikkalasi ham a nuqtaga (${a}) bir xil masofada: ${distanceToB}`);
//     }

// }