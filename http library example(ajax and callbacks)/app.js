const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

const data = {
    title: 'nice title',
    body: 'this is a nice post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});