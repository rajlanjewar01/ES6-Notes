function makeAjaxRequest(url, method = 'GET'){
    console.log(url,method);
}


console.log(makeAjaxRequest('https://google.com','GET'));
console.log(makeAjaxRequest('https://facebook.com'));
console.log(makeAjaxRequest('https://amazon.com',null));
console.log(makeAjaxRequest('https://netflix.com',undefined));