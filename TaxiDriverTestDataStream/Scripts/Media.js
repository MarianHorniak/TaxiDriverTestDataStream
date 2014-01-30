var Media =
    {
        getNewsSoundFile: function (NewsTitle) {

            var soundFile = "audio/sound_new.mp3";
            var test = "audio/" + Globals.language + "/" + NewsTitle + ".mp3";
            $.ajax({
                url: test,
                type: 'HEAD',
                error: function () {
                    console.log("Sound not exist : " + NewsTitle)
                },
                success: function () {
                    soundFile = test;
                }
            });

               
            
            return soundFile;
        }
    }