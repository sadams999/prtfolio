//console.log(document.location.search);

document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);




let agent;
let paragraph; 
let learnAboutlink;

const color = params.get('color');
const amount = params.get('amount');
const learningStyle = params.getAll('learningStyle');
const food = params.get('food');
const weekend = params.get('weekend');

console.log(color);
console.log(amount);
console.log(learningStyle);
console.log(food);
console.log(weekend);

function determineAgent() {

    if (weekend == "sister") {  
        agent = 'REYNA';
        pgraph = "Despite her tough exterior, Reyna holds a great burden. Her little sister's life\n was taken in a cruel experiment. On weekends,\nThere's no way Reyna can be at peace without working to find a way to bring her sister back.";
        image = 'images/reyna.png'; 
        return;
    }

    else if (weekend == "pets") {  
        agent = 'SKYE';
        pgraph = "You're just like Skye! Hailing from Australia, she's a huge animal lover with a green thumb!";
        image = 'images/skye.webp'; 
        return;
    }

    else if (weekend == "calm" && food == "jollof") {  
        agent = 'ASTRA';
        pgraph = "You're like Astra! Hailing from Ghana, Astra observes gameplay in her astral form in order to control the map. She enters a meditative pose to initiate her abilities";
        image = 'astra.png'; 
        return;
    }

    else if (weekend == "gaming") { 
        agent = 'CLOVE';
        pgraph = "The youngest of the team, Clove is know for late nights on social media. She's immortal, so she has all the time in the world to game!"
        image = 'clove.png';
        return; 
    }

    else if (learningStyle == "jumpin") { // agents: jett, neon, raze, clove
        if (weekend == "tinkering") { // raze
            agent = 'RAZE';
            pgraph = 'You and Raze both like taking on problems head first. Like Raze, you tend to spend your weekends working on your studying your hobbies and crafts to improve your performance.'
            image = 'raze.webp'; 
        }

        if (weekend == "active") { 
            if (food == "hotpot") { 
                agent = 'JETT';
                pgraph = 'Jett, hailing from South Korea, loves to stay active and work on her accuracy in her free time.'
                image = 'jett.png';
            }

            if (food == "adobo") { 
                agent = 'NEON';
                pgraph = "Neon, hailing from the Phillipines loves to stay active and work on her speed. Her nana's adobo is a hit!"
                image = 'neon.png';
            }

            else if (food !== "hotpot" && weekend !== "adobo") {
                agent = 'VYSE'
                pgraph = "It was hard calculating your perfect agent. You're a bit of a wild card, just like the newest agent added to the rotation, Vyse! There's still alot to learn .. We don't even know if she's human!"
                image = 'vyse.png'  
            }
        }

        if (weekend !== "tinkering" && weekend !== "active") {
            if (color == "blue") {
                agent = 'NEON';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like blue and facing problems head on, so here's Neon!"
                image = 'neon.png';
            }

            else if (color == "orange") {
                agent = 'RAZE';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like orange and facing problems head on, so here's Raze!"
                image = 'raze.webp';
            }

            else if (color == "purple") {
                agent = 'CLOVE';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like pink/purple and facing problems head on, so here's Clove!"
                image = 'clove.png';
            }

            else if (amount >= 7) {
                agent = 'CLOVE';
                pgraph = "The youngest of the team, Clove is know for late nights on social media. One night before a mission, she watched cooking videos until 3am!"
                image = 'clove.png';
            }
        
            else {  
                agent = 'VYSE'
                pgraph = "It was hard calculating your perfect agent. You're a bit of a wild card, just like the newest agent added to the rotation, Vyse! There's still alot to learn .. We don't even know if she's human!"
                image = 'vyse.png'  
            }  
    }
    }

    else if (learningStyle == "observe") { // agents: sage, astra, killjoy, deadlock, viper
        if (weekend == "calm") {  
            if (food == "hotpot") { 
                agent = 'SAGE';
                pgraph = "You're like Sage! Hailing from China, her strength lie in falling back to heal and revive teamate. As a 'peacemaker' meditation during the weekend sounds ideal!"
                image = 'sage.png';
            }
            if (food == "jollof") { 
                agent = 'ASTRA';
                pgraph = "You're like Astra! Hailing from Ghana, Astra observes gameplay in her astral form in order to control the map. She enters a meditative pose to initiate her abilities"
                image = 'astra.png';
            }

            else if (color == "purple") {
                agent = 'ASTRA';
                pgraph = "You're like Astra! Hailing from Ghana, Astra observes gameplay in her astral form in order to control the map. She enters a meditative pose to initiate her abilities"
                image = 'astra.png';
            }

            else if (color == "green") {
                agent = 'SAGE';
                pgraph = "You're like Sage! Hailing from China, her strengths lie in falling back to heal and revive teamate. As a 'peacemaker' meditation during the weekend sounds ideal!"
                image = 'sage.png';
            }

        }

        if (weekend == "tinkering") {  
            if (food == "burgers") { 
                agent = 'VIPER';
                pgraph = "Viper, hailing from the U.S. is the leader/founder of the radiants. She spends her free time working on new inventions to use on missions and defeat enemies."
                image = 'viper.png';
            }
                
            if (color == "blue") {
                agent = 'DEADLOCK';
                pgraph = "Deadlock, hailing from Norway, is fairly new to the team. She has ton's of gadgets that she spends her time working on in order to guarantee success on her next mission."
                image = 'deadlock.png';
            }    
            
            
            if (food == "pretzels") { 
                agent = 'KILLJOY';
                pgraph = "Killjoy, hailing from Germany, is a crucial part of her team, though her teamates kid her as 'Tech Support'. She spends alot of time working on her turrets and alarm bots to throw off the enemy team during missions."
                image = 'killjoy.png';
            }

            else if (color == "yellow") { 
                agent = 'KILLJOY';
                pgraph = "Killjoy, hailing from Germany, is a crucial part of her team, though her teamates kid her as 'Tech Support'. She spends alot of time working on her turrets and alarm bot to throw off the enemy team during missions."
                image = 'killjoy.png';
            }

            else if (color == "green") { 
                agent = 'VIPER';
                pgraph = "Viper, hailing from the U.S. is the leader/founder of the radiants. She spends her free time working on new inventions to use on missions and defeat enemies."
                image = 'viper.png';
            }

            else {
                agent = 'VYSE'
                pgraph = "It was hard calculating your perfect agent. You're a bit of a wild card, just like the newest agent added to the rotation, Vyse! There's still alot to learn .. We don't even know if she's human!"
                image = 'vyse.png'  
            }


        }

        if (weekend !== "calm" && weekend !== "tinkering") {
            if (color == "green") {
                agent = 'VIPER';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like green and and analyzing problems before you tackle them, so here's Viper!"
                image = 'viper.png';
            }

            if (color == "blue") {
                agent = 'DEADLOCK';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like blue and analyzing problems before you tackle them, so here's Dealock!"
                image = 'deadlock.png';
            }

            if (color == "yellow") {
                agent = 'KILLJOY';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like yellow and analyzing problems before you tackle them, so here's Killjoy!"
                image = 'killjoy.png';
            }

            if (color == "purple") {
                agent = 'ASTRA';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like pink/purple and analyzing problems before you tackle them, so here's Astra!"
                image = 'astra.png';
            }
        }

        else if (color !== "green" && color !== "blue"  && color !== "yellow"  && color !== "purple") {  
            agent = 'VYSE'
            pgraph = "It was hard calculating your perfect agent. You're a bit of a wild card, just like the newest agent added to the rotation, Vyse! There's still alot to learn .. We don't even know if she's human!"
            image = 'vyse.png'  
        }  


    }

    else if (learningStyle == "depends") { // agents: reyna, skye, fade, vyse
        if (weekend == "pets") {  
            agent = 'SKYE';
            pgraph = "You're just like Skye! Though she has the means to face enemies head on, she can also bait out information from the enemy team to ensure success. Hailing from Australia, she's a huge animal lover!"
            image = 'skye.webp'; 
        }

        else if (weekend == "calm") {  
            agent = 'FADE';
            pgraph = "You're just like Fade! Hailing from Turkey, though she has the means to face enemies head on by using their worst fears against them, she can also bait out information from the enemy team to ensure success. Curling up with a book sounds like the perfect weekend to her, especially if it's of the horror genre!"
            image = 'fade.png'; 
        }

        else if (weekend == "active") {  
            agent = 'REYNA';
            pgraph = "You're like Reyna. Though her physical strengths lie in facing problems head on, it serves here well to wait for information colllected by her teamates to ensure a successful mission."
            image = 'reyna.png'; 
        }

        else if (weekend !== "active" && weekend !== "calm" && weekend !== "pets" ) {  
            if (color == "purple") {
                agent = 'REYNA';
                pgraph = "You're like Reyna. Though her physical strengths lie in facing problems head on, it serves here well to wait for information colllected by her teamates to ensure a successful mission."
                image = 'reyna.png';
            }
            else if (color == "green") {
                agent = 'SKYE';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like green and adjusting your approach to problems based on what they are, so here's Skye!"
                image = 'skye.webp';
            }
            else if (color == "black") {
                agent = 'FADE';
                pgraph = "We couldn't calculate the 'PERFECT' agent for you, but you like black and adjusting your approach to problems based on what they are, so here's Fade!"
                image = 'fade.png';
            }
            
            else {  
                agent = 'VYSE'
                pgraph = "It was hard calculating your perfect agent. You're a bit of a wild card, just like the newest agent added to the rotation, Vyse! There's still alot to learn .. We don't even know if she's human!"
                image = 'vyse.png'  
            }
        } 

    }

    else {  
        agent = 'VYSE'
        pgraph = "It was hard calculating your perfect agent. You're a bit of a wild card, just like the newest agent added to the rotation, Vyse! There's still alot to learn .. We don't even know if she's human!"
        image = 'vyse.png'  
    }
}


// writing html code
function postData() {

    determineAgent ();
    const container = document.getElementById('results');
    const agentHeader = document.createElement('h1');
    agentHeader.textContent = `${agent}!`;

    const paragraph = document.createElement('p');
    paragraph.textContent = `${pgraph}!`;

    const agentImage = document.createElement('img');
    agentImage.src = image;

    

    // Append the new elements, without clearing the existing content
    container.appendChild(agentHeader);
    container.appendChild(paragraph);
    container.appendChild(agentImage);
    
}
