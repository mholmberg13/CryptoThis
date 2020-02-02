console.log("working")



$(() => {

    const userInput = $("#search").val();

    const search = () => {
        
        

        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=2321', 
            type: 'GET',
            
            
        }).then(
            (data)=>{
                console.log("searching")
                console.log(data);
            },
            ()=>{
                console.log('bad request');
            }
        );
    
    }
    
    $('form').on('submit', (event) => {

        
        event.preventDefault();

        search();        

        
    });
    


})