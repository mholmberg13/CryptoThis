$(() => {

    const $userInput = $("#search").val();


    
    $('search-button').on('submit', () => {
        $.ajax({
            url:'https://sandbox-api.brewerydb.com/v2/' + $userInput + '/?key=adb047b22dc70cbabd24ce699e81c446',
            
        }).then(
            (data)=>{
                console.log(data);
            },
            ()=>{
                console.log('bad request');
            }
        );
    });
    


})