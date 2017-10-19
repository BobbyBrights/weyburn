$(document).ready(function(){
    
    visualizeTemperature(getTemperature());

    function getTemperature(){
        var zip = "90024";
        var api_url = 'http://api.openweathermap.org/data/2.5/forecast?zip=90024,us&units=imperial&appid=cd0f1716ca7d723e3acabb9118b11226';
        var temp_dict = {
                        "Date": [],
                        "Temp": []
                    };

        $.ajax({
            url: api_url,
            method: 'GET',
            success: function(data){
                var temp = data.list;
                times = temp.dt;
                console.log(times);

                for(i=0; i<temp.length; i++){
                    console.log(temp[i].dt);
                    var date = new Date(temp[i].dt*1000);
                    
                    var clist = temp_dict["Date"];
                    clist.push(date);
                    temp_dict["Date"] = clist;

                    var date_temp = temp[i].main.temp;
                    var clist = temp_dict["Temp"];
                    clist.push(date_temp);
                    temp_dict["Temp"] = clist;
                }

                console.log("Success", temp_dict);
            }
        })

        return temp_dict;
    }

    function visualizeTemperature(temp_dict){
    
    }

    
    $(".data_temperature").click(function(){
        $(".data_display").empty();        
        console.log("temp");
    });

    $(".data_humidity").click(function(){
        $(".data_display").empty();
        $(".data_display").prepend('<img src="other/water_usage.png" />');
    });

    $(".data_sunlight").click(function(){
        $(".data_display").empty();
        console.log("temp");
    });

    $(".data_nutrition").click(function(){
        $(".data_display").empty();
        console.log("temp");
    }); 
});

