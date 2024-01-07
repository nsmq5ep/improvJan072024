function putJSONData() {
    var data = {
        "bin": {
            "key1": "CminBacking(6)",
            "key2": "DminBacking(1)",
            "key3": "GMajBacking(3)",
            "key4": "CMajBacking(7)",
            "key5": "DminBacking(3)",
            "key6": "AminBacking(1)",
            "key7": "AminBacking(8)",
            "key8": "AminBacking(2)",
            "key9": "DminBacking(9)",
            "key10": "DMajBacking(2)",
            "key11": "FMajBacking(4)",
            "key12": "DMajBacking(1)",
            "key13": "GMajBacking(1)",
            "key14": "FMajBacking(2)",
            "key15": "GminBacking(8)"            
        }
    };
    $.ajax({
        url: 'https://api.jsonstorage.net/v1/json/86d2965f-cae1-43a2-8f49-cb2da6a5527f/e430f896-84a1-4ddb-a1f8-bedcfb5c1561?apiKey=4d240d29-fad5-4651-addf-68ca76fa5ba8',
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(result) {
            console.log(result);
        },
        error: function(error){
            console.log(error);
        }
    });
}
