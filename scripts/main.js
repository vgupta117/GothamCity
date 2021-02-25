
// All text are from wikipedia 
// https://en.wikipedia.org/wiki/Gotham_(TV_series)
$('.bodyContent').css('opacity','0');

var lastScrollTop = 0;
const initialWidth = $('#batmanLogo').width();

const maxWidth = 10000;
const factor = 550;

var scrolledAmount = 0;
// 19683
// 29524.5
$(window).scroll(function(){

    var image = $('#batmanLogo');
    var bodyContent = $('.bodyContent');
    var st = $(this).scrollTop();

    if(st < 600){
        var slope = (maxWidth - initialWidth )/ factor;
        image.width(slope*st + initialWidth);
        
        var slopeOpacity = 1/factor;
        var opacityResult = -slopeOpacity*st + 1;
        image.css('opacity',opacityResult);

        var opacityForBody = slopeOpacity * st + 0;
        bodyContent.css('opacity',opacityForBody);

        
    }

    
    // The following code isn't used in this assignment
    // I've kept it here in case I need it in the future
    // Recognizing the whether it was scrolling up or down isn't my code
    // It was copied from https://stackoverflow.com/questions/814086/how-can-i-know-whether-the-scroll-of-the-user-is-up-or-down

    // if (st > lastScrollTop){
    //     // downscroll code

    //     var widthToBe = (50-st)
    //     if(image.width() < maxWidth){
    //         image.width(imageWidth+0.1*imageWidth);
    //         image.css('opacity',imageOpacity - 0.1* imageOpacity);
    //     }else{
    //         image.css('opacity','0');
    //         maxHeight = image.height();
    //         image.height(0);
    //     }
    // } else {
    //     // upscroll code
    //     if(image.width() > initialWidth){
    //         if(image.height()==0){
    //             image.height(maxHeight);
    //         }
    //         image.width(imageWidth-0.1*imageWidth);
    //         image.css('opacity',imageOpacity + 0.1* imageOpacity)
    //     }else{
    //         image.css('opacity','1')
    //     }
    // }
    // lastScrollTop = st;
   
    
});


$(".eachCard").click(function(){ 
    $( ".eachCard" ).each(function() {
        $(this).removeClass('selected');
        // $(this).css("background-color", "rgba(0, 0, 0, 0.8)");
    });
    $(this).addClass('selected');
    // $(this).css("background-color", "rgba(70, 70, 70, 0.8)");
    var id = $(this).attr('id');
    var newTitle = '';
    var newDescription = '';
    switch(id) {
        case 'geography':
            newTitle = 'GEOGRAPHY';
            newDescription = "Gotham City, like other cities in the DC Universe, has varied in its portrayals over the decades, but the city's location is traditionally depicted as being in the state of New Jersey. In Amazing World of DC Comics #14 (March 1977), publisher Mark Gruenwald discusses the history of the Justice League and indicates that Gotham City is located in New Jersey. In The World's Greatest Super Heroes (August 13, 1978) comic strip, a map is shown placing Gotham City in New Jersey and Metropolis in Delaware. World's Finest Comics #259 (November 1979) also confirms that Gotham is in New Jersey. New Adventures of Superboy #22 (October 1981) and the 1990 Atlas of the DC Universe both show maps of Gotham City in New Jersey and Metropolis in the state of Delaware.";
            break;
        case 'history':
            newTitle = 'HISTORY';
            newDescription = "The 2011 comic book series Batman: Gates of Gotham details a history of Gotham City in which Alan Wayne (Bruce Wayne's ancestor), Theodore Cobblepot (Oswald Cobblepot's ancestor), and Edward Elliot (Thomas Elliot's ancestor), are the founding fathers of Gotham. In 1881, they constructed three bridges called the Gates of Gotham, each bearing one of their names. Edward became jealous of the Wayne family during this period, jealousy that would spread to his great-great-grandson, Thomas Elliot or Hush. The occult origins of Gotham are further delved into by Peter Milligan's 1990 story arc 'Dark Knight, Dark City',which reveals that some of the American Founding Fathers are involved in summoning a bat-demon which becomes trapped beneath old 'Gotham Town', its dark influence spreading as Gotham City evolves. A similar trend is followed in 2005's Shadowpact #5 by Bill Willingham, which expands upon Gotham's occult heritage by revealing a being who has slept for 40,000 years beneath the land upon which Gotham City was built.";
            break;
        case 'show':
            newTitle = 'TV-SHOW';
            newDescription = "Gotham is an American action crime drama television series developed by Bruno Heller, produced by Warner Bros. Television and based on characters published by DC Comics and appearing in the Batman franchise, primarily those of James Gordon and Bruce Wayne. The series premiered on Fox on September 20, 2013, and concluded on April 25, 2019. The series although initially intended for Gordon and the city,  included the Bruce Wayne character and the origin stories of Batman's rogues gallery. Development for a prequel series based on Batman began in September 2012, with Bruno Heller hired by Fox to serve as a writer and executive producer. In March 2014, Fox originally ordered 16 episodes for its first season before expanding it to 22.. More information can be found here: https://g.co/kgs/G1PcWQ";
            break;
        case 'setting':
            newTitle = 'SETTING';
            newDescription = "Batman writer and editor Dennis O'Neil has said that, figuratively, Batman's Gotham City is akin to 'Manhattan below Fourteenth Street at eleven minutes past midnight on the coldest night in November.' Batman artist Neal Adams has long believed that Chicago has been the basis for Gotham, stating 'one of the things about Chicago is Chicago has alleys (which are virtually nonexistent in New York). Back alleys, that's where Batman fights all the bad guys.'. This has been an important part of Gotham's setting";
            break;
        case 'residents':
            newTitle = 'NOTABLE RESIDENTS';
            newDescription = "Bruce Wayne's place of residence is Wayne Manor, which is located on the outskirts of the city. His butler, Alfred Pennyworth, aids Bruce in his crusade to fight crime in Gotham. Over the years, in various Bat titles in the chronological DC Comics continuity, the caped crusader enlists the help of numerous characters, the first being his trusty sidekick, Robin. Although a singular title, many have donned the mantle of the Boy Wonder over the years. The first being Nightwing, then came Red Hood, Red Robin, and finally Batman's son Damian Wayne. In addition to the Robins or former Robins, there is also Catwoman, Batgirl, and Huntress.";
            break;
        default:
            newTitle = 'GOTHAM';
            newDescription = "Gotham is a fictional city appearing in comic books published by DC Comics, best known as the home of Batman. The city was identified as Batman's place of residence in Batman #4 (December 1940) and has since been the primary setting for stories featuring the character. Gotham is traditionally depicted as being located in the U.S. state of New Jersey. Gotham's look and atmosphere was primarily influenced by New York City and Chicago, although it was designed to more generally resemble any major American city. Strega, the being's servant, says that the 'dark and often cursed character' of the city was influenced by the being who now uses the name 'Doctor Gotham.'";
            break;
    }
    var titleToChange = $('.title');
    var descriptionToChange = $('.initialDescription');
    titleToChange.fadeOut(function(){
        titleToChange.text(newTitle);
        titleToChange.fadeIn();
    });
    descriptionToChange.fadeOut(function(){
        descriptionToChange.text(newDescription);
        descriptionToChange.fadeIn();
    });    
    
});
