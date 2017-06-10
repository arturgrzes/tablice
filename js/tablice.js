'use script'

var imiona = ['Monika' , 'Krystian' , 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';
console.log(imiona);

imiona.forEach(function(element, i) {
    console.log('Element nr' + i + '=' + element);
})

