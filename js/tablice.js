'use script'

var imiona = ['Monika' , 'Krystian' , 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';
console.log(imiona);


imiona.push('Gerald');
console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert'));
console.log(imiona);


console.log(imiona.shift());
console.log(imiona);
