window.onload = function() {
    console.log('--- Page fully loaded ---');

    const httpResponse = document.getElementById('httpResponse');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const httpMethod = 'GET';

    let httpReq = new XMLHttpRequest();
    httpReq.open(httpMethod, apiUrl);

    httpReq.onreadystatechange = function() {

        if (httpReq.readyState === 4 && httpReq.status === 200) {
            console.log(JSON.parse(httpReq.responseText));
            httpResponse.innerText = httpReq.responseText;
        } else {
            console.log('Error while fetching data from API Url');
            console.log(httpReq.readyState);
            console.log(httpReq.status);

        }
    };

    httpReq.send();
};
