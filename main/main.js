function callConverter(sourceFile){
    fileName = 'test_recording.wav'

    $.ajax({
            type:'POST',
            url: "~/converter.py",
            data: {param: fileName}
            
        }).done(function(){

        })
}

