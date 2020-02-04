console.log("working")



$(() => {

    const expand1 = () => {
        $('#content1').show();
        $('#crypto-card1').css('width', '500px');
        $('#content1').css('display', 'inline')
        $('#ret').hide();
        $('#col').show();
    }

    const collapse1 = () => {
        $('#crypto-card1').css('width', '300px')
        $('#content1').hide();
        $('#col').hide();
        $('#ret').show();
    }

    const expand2 = () => {
        $('#content2').show();
        $('#crypto-card2').css('width', '500px');
        $('#content2').css('display', 'inline')
        $('#ret2').hide();
        $('#col2').show();
    }

    const collapse2 = () => {
        $('#crypto-card2').css('width', '300px')
        $('#content2').hide();
        $('#col2').hide();
        $('#ret2').show();
    }

    const expand3 = () => {
        $('#content').show();
        $('#crypto-card3').css('width', '500px');
        $('#content3').css('display', 'inline')
        $('#ret3').hide();
        $('#col3').show();
    }

    const collapse3 = () => {
        $('#crypto-card3').css('width', '300px')
        $('#content3').hide();
        $('#col3').hide();
        $('#ret3').show();
    }

    const expand4 = () => {
        $('#content4').show();
        $('#crypto-card4').css('width', '500px');
        $('#content4').css('display', 'inline')
        $('#ret4').hide();
        $('#col4').show();
    }

    const collapse4 = () => {
        $('#crypto-card4').css('width', '300px')
        $('#content4').hide();
        $('#col4').hide();
        $('#ret4').show();
    }

    const retrieve = () => {
        
        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=90', 
            type: 'GET',
            
            
        }).then(
            (response)=>{
                $('#price').html("Current Price: $" + response[0].price_usd)
                $('#rank').html("Rank: " + response[0].rank)
                $('#24change').html("24 hour change: "+ response[0].percent_change_24h)
            },
            ()=>{
                console.log('bad request');
            }
        );
    
    }

    $('#ret').on('click', (event) => {
        event.preventDefault();
        expand1();
        retrieve();        
    });

    $('#col').on('click', (event) => {
        event.preventDefault();
        collapse1();
    });
    
    const retrieve2 = () => {
        
        

        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=80', 
            type: 'GET',
            
            
        }).then(
            (response)=>{
                $('#price2').html("Current Price: $" + response[0].price_usd);
                $('#rank2').html("Rank: " + response[0].rank);
                $('#24change2').html("24 hour change: "+ response[0].percent_change_24h);
            },
            ()=>{
                console.log('bad request');
            }
        );
    }

    $('#ret2').on('click', (event) => {
        event.preventDefault();
        expand2();
        retrieve2();        
    });

    $('#col2').on('click', (event) => {
        event.preventDefault();
        collapse2();
    });

    const retrieve3 = () => {
        
        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=2321', 
            type: 'GET',
            
        }).then(
            (response)=>{
                $('#price3').html("Current Price: $" + response[0].price_usd);
                $('#rank3').html("Rank: " + response[0].rank);
                $('#24change3').html("24 hour change: "+ response[0].percent_change_24h);
            },
            ()=>{
                console.log('bad request');
            }
        );
    }

    $('#ret3').on('click', (event) => {
        event.preventDefault();
        expand3();
        retrieve3();        
    });

    $('#col3').on('click', (event) => {
        event.preventDefault();
        collapse3();
    });


    const retrieve4 = () => {
        $.ajax({
            url:'https://api.coinlore.com/api/ticker/?id=33234', 
            type: 'GET',
        }).then(
            (response)=>{
                $('#price4').html("Current Price: $" + response[0].price_usd);
                $('#rank4').html("Rank: " + response[0].rank);
                $('#24change4').html("24 hour change: "+ response[0].percent_change_24h);
            },
            ()=>{
                console.log('bad request');
            }
        );
    }

    $('#ret4').on('click', (event) => {
        event.preventDefault();
        expand4();
        retrieve4();        
    });

    $('#col4').on('click', (event) => {
        event.preventDefault();
        collapse4();
    });

})