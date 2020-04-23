module.exports = {
  name: "test",
  
  run: async (bot, message, args) =>{
     let reason = args.join(" ")
     
     if(!reason){
       reason == "not ok"
      }
      
      message.channel.send(`Reason: ${reason}`);
  }
}
