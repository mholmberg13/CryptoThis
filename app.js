console.log("working")



$(() => {

    const retrieve = () => {
        
        

        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=90', 
            type: 'GET',
            
            
        }).then(
            (response)=>{
                console.log("searching")
                console.log(response[0].name);
                // $('#name').append(response[0].name)
                // $('#price').append(response[0].price_usd)
                // $('#rank').append(response[0].rank)
                // $('#24change').append(response[0].percent_change_24h)
            },
            ()=>{
                console.log('bad request');
            }
        );
    
    }

    $('#ret').on('click', (event) => {

        
        event.preventDefault();

        retrieve();        

        
    });
    
    const retrieve2 = () => {
        
        

        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=80', 
            type: 'GET',
            
            
        }).then(
            (response)=>{
                console.log("searching")
                console.log(response[0].name);
                // $('#name').append(response[0].name)
                // $('#price').append(response[0].price_usd)
                // $('#rank').append(response[0].rank)
                // $('#24change').append(response[0].percent_change_24h)
            },
            ()=>{
                console.log('bad request');
            }
        );
    
    }

    $('#ret2').on('click', (event) => {

        
        event.preventDefault();

        retrieve2();        

        
    });

    const retrieve3 = () => {
        
        

        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=2321', 
            type: 'GET',
            
            
        }).then(
            (response)=>{
                console.log("searching")
                console.log(response[0].name);
                // $('#name').append(response[0].name)
                // $('#price').append(response[0].price_usd)
                // $('#rank').append(response[0].rank)
                // $('#24change').append(response[0].percent_change_24h)
            },
            ()=>{
                console.log('bad request');
            }
        );
    
    }

    $('#ret3').on('click', (event) => {

        
        event.preventDefault();

        retrieve3();        

        
    });

    const retrieve4 = () => {
        
        

        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=33234', 
            type: 'GET',
            
            
        }).then(
            (response)=>{
                console.log("searching")
                console.log(response[0].name);
                // $('#name').append(response[0].name)
                // $('#price').append(response[0].price_usd)
                // $('#rank').append(response[0].rank)
                // $('#24change').append(response[0].percent_change_24h)
            },
            ()=>{
                console.log('bad request');
            }
        );
    
    }

    $('#ret4').on('click', (event) => {

        
        event.preventDefault();

        retrieve4();        

        
    });
    


})