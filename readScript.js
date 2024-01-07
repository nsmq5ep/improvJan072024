// readScript.js

function getJSONData() {
    $.ajax({
        url: 'https://api.jsonstorage.net/v1/json/86d2965f-cae1-43a2-8f49-cb2da6a5527f/e430f896-84a1-4ddb-a1f8-bedcfb5c1561',
        type: 'GET',
        success: function(result) {
            $('#jsonText').val(JSON.stringify(result));
        },
        error: function(error){
            console.log(error);
        }
    });
}
