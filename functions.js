const { bot } = require('./index');

module.exports = {
    sleep: function(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    },
    randomInArray: function (anArray){
        //TODO : Check if anArray is really an array.	
    
        var randomIndex=Math.floor(Math.random()*anArray.length)	
        return anArray[randomIndex];
    }
}