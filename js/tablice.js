'use script'

var imiona = ['Monika' , 'Krystian' , 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';
console.log(imiona);

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);

console.log(Array.isArray(zbiorImion));
console.log(zbiorImion.slice(2,5));

zbiorImion.splice(2,3,"Julek", "Krzyś");
console.log(zbiorImion);





