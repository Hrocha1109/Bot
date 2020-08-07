const Discord = require("discord.js");

const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('ready', () => {
    console.log('Eustou pronto')
})
bot.on('message', msg => {
    if(msg.content.toLowerCase() == "banana"){
        msg.reply('Mamaco :sunglasses:')
    }
})
bot.on('message', msg => {
    if(msg.content.toLowerCase() == "bana"){
        msg.reply('Yum Yum totoso')
    }
})
bot.on('message', msg => {
    if(msg.content.toLowerCase() == "roleta russa"){
        var random3 = Math.floor(Math.random()*6)+1
        if(random3 == 6){
            msg.reply('Você morreu :gun:')
        }
        else{
            msg.reply('Vc tá vivo!')
        }
    }})
bot.on('message', msg => {
    if (msg.content.toLowerCase().endsWith('é gay?')){
        var random2 = Math.floor(Math.random()*3)
        if(random2 == 0){
            msg.reply('De acordo com os meus calculos SIM')
        }
        else if(random2 == 1){
            msg.reply('De acordo com os meus calculos NÃO')
        }
        else if(random2 == 2){
            msg.reply('De acordo com os meus calculos TALVEZ')
        }
        else {
            msg.reply('Alguma coisa deu errado')
        }
        return;
    }

})
   
bot.on('message', msg => {
    if (msg.content.toLowerCase() === 'paradoxo'){
        var random = Math.floor(Math.random() * 11)+1;
          
        if(random == 1) {
              msg.reply('Para ir para qualquer lugar, primeiro, você deve andar até metade do caminho, depois trilhar a metade da distância restante, posteriormente, andar mais metade do percurso restante e assim por diante, até o infinito. Ou seja, o movimento não existe')
          }
         else if(random == 2) {
            msg.reply('Se um barco tiver toda a sua madeira restaurada, ele continuará sendo o mesmo barco?')
        }
        else if(random == 3) {
            msg.reply('Um ser onipotente seria capaz de criar uma pedra tão pesada que nem ele é capaz de erguer?')
        }
        else if(random == 4) {
            msg.reply('Dizemos que uma palavra é heteológica quando ela expressa uma qualidade que não possui. Seria, então, a palavra “heteológico” heterológica? ')
        }
        else if(random == 5) {
            msg.reply('Pilotos de guerra podem se afastar dos combates se provarem que estão psicologicamente afetados, porém, todos que tentam sair provam que estão sãos')
        }
        else if(random == 6) {
            msg.reply('100 gramas de batata equivale a 99% de água. Porém, se a batata é ressecada e se torna 98% água, ela passa a pesar 50 gramas')
        }
        else if(random == 7) {
            msg.reply('Se há apenas 23 pessoas em um mesmo quarto, existe uma grande chance de que pelo menos duas delas tenham a mesma data de aniversário')
        }
        else if(random == 8) {
            msg.reply('Se não há nada particular sobre a Terra, então deveria haver outras civilizações em nossa galáxia. Todavia, nunca foi encontrada outra forma de vida inteligente no universo')
        }
        else if(random == 9) {
            msg.reply('Uma pessoa volta no tempo e mata, no passado, aquele que seria o seu avô no futuro. Ora, se o avô foi morto ainda criança, então a pessoa que cometeu o crime não poderia ter nascido. Mas se ela não tivesse nascido, quem teria cometido o crime contra o avô?')
        }
        else if(random == 10) {
            msg.reply('Epiménides disse: "Todos os cretenses são mentirosos". Sendo que ele mesmo era um cretense. Ora, se todos os cretenses são mentirosos, será que ele está falando a verdade? E se estiver falando a verdade, a sua afirmação já não será correta, pois ele não estaria dizendo uma mentira.')
        }
        return;
    }

})

let censor = "Eu sou Gay com orgulho"; /* Replace this with what you want */
bot.on('message', message => {
    if(message.content.toLocaleLowerCase().includes('jogo')){
    let edit = message.content.replace(/jogo/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
}
})

bot.on('message', msg => {
    if(msg.content.toLocaleLowerCase().startsWith('bom') || msg.content.toLocaleLowerCase().startsWith('boa') || msg.content.toLocaleLowerCase().startsWith('etion') || msg.content.toLocaleLowerCase().startsWith('aid')){
        var Bom = msg.content.toLocaleLowerCase().split(' ')[1];
        switch(Bom){
            case bom = 'dia': msg.reply('Bom dia!')
            break;
            case bom = 'noite': msg.reply('Boa noite!')
            break;
            case bom = 'mob': msg.reply('Bom dia!')
            break;
            case bom = 'aob': msg.reply('Boa noite!')
            break;
        }
    }
})

bot.on('message', msg =>{
    var sorte = Math.floor(Math.random() * 10)+1;
    if(!msg.author.bot){
        return;
    }
    switch(sorte){
        case sorte=1 : msg.channel.send('Eu poderia fazer isso se Hugo não tivesse preguisça');
    
    break;
        case sorte = 6: msg.channel.send('<@572301609305112596> Você quer sair algum dias desses :point_right: :point_left:');
    break;
    }
})