var y = window.matchMedia("(max-width: 700px)");
var z = window.matchMedia("(max-height: 545px)");

window.addEventListener('load', () => {
        const preload = document.querySelector('.preload');
        const spinner = document.querySelector('.spinner');
        const done = document.querySelector('.spinner-done');
        document.querySelector('.preload-message h1').innerHTML = "Thank You!";
        preload.classList.add('preload-finish');
        spinner.style.animation= 'unset';
        done.style.opacity= '1';
        // message.classList.add('spinner-done');

        splitScroll(y,z);
   
} )

function splitScroll(y,z){

    const body0 = document.querySelector("#home");
    const body = document.querySelector(".home-section");
    const body2 = document.querySelector(".bgc-cheese1");
    const body3 = document.querySelector(".intro-text h1");
    const body4 = document.querySelector(".intro-text h5");
    const body5 = document.querySelector(".cta");
    const body6 = document.querySelector(".nav-left");
    const body7 = document.querySelector(".nav-right");
    const textanimation3 = document.querySelector(".intro-top h1");
    const textanimation4= document.querySelector(".project-name");
    const object5= document.querySelectorAll(".project-images,.project-details, .go");
    const textanimation5= document.querySelector(".project-name2");
    const object6= document.querySelectorAll(".project-images2,.project-details2, .go2");
    const textanimation6= document.querySelector(".project-name3");
    const object7= document.querySelectorAll(".project-images3,.project-details3, .go3");
    const textanimation7= document.querySelector(".about-head");
    const object8= document.querySelector(".about-body-right-image img");
    const textanimation8= document.querySelector(".about-body-left h3");
    const textanimation9= document.querySelector(".hire-head h1");
    const textanimation10= document.querySelector(".hire-head h2");
    const object9= document.querySelector(".hire-body");
    const content1 = document.querySelector(".project-title");
    const fSocials = document.querySelector(".f-socials");
    const object10 = document.querySelector(".bgc-cheese2");
    const object11 = document.querySelector(".bgc-cheese3");
    const object12 = document.querySelector(".bgc-cheese4");
    var y = window.matchMedia("(max-width: 700px)");

    TweenLite.defaultOverwrite = 'none';




    var controller = new ScrollMagic.Controller();

    
    
     content1.addEventListener("mousewheel", { passive: false });


    if (y.matches || z.matches) { // If media query matches
        console.log('hi');
      } else {
        console.log('hiiiii');
        const scene1 = new ScrollMagic.Scene({
            duration:'200%',
            triggerElement: content1,
            triggerHook: 0,
        })
        .setPin(content1)
        .addTo(controller);
    }

    const textAnim0 = TweenMax.fromTo(body0,1.5, {x: "-1800",y:"-50", opacity: 0,  skewX:"20deg" }, {x:0, y:0,  opacity:1, ease: Power2.easeOut,  skewX:"0deg" });
    const scene0 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim0)
    
    .addTo(controller);

    const textAnim = TweenMax.fromTo(body,2, {x: "-1800", opacity: 0}, {x:0, opacity:1, ease: Power2.easeOut });
    const scene2 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim)
    
    .addTo(controller);

    const textAnim2 = TweenMax.fromTo(body2,4, {y: "-2000", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene3 = new ScrollMagic.Scene({
        offset:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim2)
    
    .addTo(controller);

    const textAnim3 = TweenMax.fromTo(body3,4.1, {x: "-1800", opacity: 0}, {x:0, opacity:1, ease: Power2.easeIn });
    const scene4 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim3)
   
    .addTo(controller);

    const textAnim4 = TweenMax.fromTo(body4,4.3, {x: "-1500", opacity: 0}, {x:0, opacity:1, ease: Power2.easeIn });
    const scene5 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim4)
    
    .addTo(controller);

    const textAnim5 = TweenMax.fromTo(body5,4.5, {x: "-1000", opacity: 0}, {x:0, opacity:1, ease: Back.easeInOut});
    const scene6 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim5)
  
    .addTo(controller);

    const textAnim6 = TweenMax.fromTo(body6,2.5, {y: "250", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene7 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim6)
   
    .addTo(controller);

    const textAnim7 = TweenMax.fromTo(body7,2.5, {y: "250", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene8 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:body,
        triggerHook:0,
        reverse:false
    })
    .setTween(textAnim7)
   
    .addTo(controller);

    const textAnim8 = TweenMax.fromTo(textanimation3,1.5, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene9 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation3,
        triggerHook:1
    })
    .setTween(textAnim8)
   
    .addTo(controller);

    const textAnim9 = TweenMax.fromTo(textanimation4,1.7, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene10 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation4,
        triggerHook:1
    })
    .setTween(textAnim9)
   
    .addTo(controller);

    const textAnim10 = TweenMax.fromTo(object5,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene11 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object5,
        triggerHook:0.8
    })
    .setTween(textAnim10)
   
    .addTo(controller);

    const textAnim11 = TweenMax.fromTo(textanimation5,1.7, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene12 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation5,
        triggerHook:1
    })
    .setTween(textAnim11)
   
    .addTo(controller);

    const textAnim12 = TweenMax.fromTo(object6,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene13 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object6,
        triggerHook:0.8
    })
    .setTween(textAnim12)
   
    .addTo(controller);

    const textAnim13 = TweenMax.fromTo(textanimation6,1.7, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene14 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation6,
        triggerHook:1
    })
    .setTween(textAnim13)
   
    .addTo(controller);

    const textAnim14 = TweenMax.fromTo(object7,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene15 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object7,
        triggerHook:0.8
    })
    .setTween(textAnim14)
   
    .addTo(controller);

    const textAnim15 = TweenMax.fromTo(textanimation7,1.7, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene16 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation7,
        triggerHook:1
    })
    .setTween(textAnim15)
   
    .addTo(controller);

    const textAnim16 = TweenMax.fromTo(object8,2, {x: "70", opacity: 0}, {x:0, opacity:1, ease: Power2.easeOut });
    const scene17 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object8,
        triggerHook:0.8
    })
    .setTween(textAnim16)
   
    .addTo(controller);

    const textAnim17 = TweenMax.fromTo(textanimation8,1.7, {x: "-100", opacity: 0}, {x:0, opacity:1, ease: Power2.easeOut });
    const scene18 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation8,
        triggerHook:1
    })
    .setTween(textAnim17)
   
    .addTo(controller);
    
    const textAnim18 = TweenMax.fromTo(textanimation9,1.7, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Back.easeInOut });
    const scene19 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation9,
        triggerHook:1
    })
    .setTween(textAnim18)
   
    .addTo(controller);

    const textAnim19 = TweenMax.fromTo(textanimation10,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Back.easeInOut });
    const scene20 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:textanimation10,
        triggerHook:1
    })
    .setTween(textAnim19)
   
    .addTo(controller);

    const textAnim20 = TweenMax.fromTo(object9,2, {y: "50", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene21 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object9,
        triggerHook:0.8
    })
    .setTween(textAnim20)
   
    .addTo(controller); 

    const textAnim21 = TweenMax.fromTo(fSocials,2, {y: "0", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene22 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object9,
        triggerHook:0.5
    })
    .setTween(textAnim21)
   
    .addTo(controller); 

    const textAnim22 = TweenMax.fromTo(object10,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene23 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object10,
        triggerHook:0.5
    })
    .setTween(textAnim22)
   
    .addTo(controller);

    const textAnim23 = TweenMax.fromTo(object11,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene24 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object11,
        triggerHook:0.5
    })
    .setTween(textAnim23)
   
    .addTo(controller);

    const textAnim24 = TweenMax.fromTo(object12,2, {y: "100", opacity: 0}, {y:0, opacity:1, ease: Power2.easeOut });
    const scene25 = new ScrollMagic.Scene({
        duration:0,
        triggerElement:object12,
        triggerHook:0.5
    })
    .setTween(textAnim24)
   
    .addTo(controller);

    
    TweenLite.onOverwrite = function(overwritten, overwriting, target, props) {
        console.log("tween that was overwritten");
        console.log(overwritten);
        
        console.log("tween that did the overwriting")
        console.log(overwriting);
        
        console.log("the target of the overwritten tween");
        console.log(target.innerHTML);
        
        console.log("properties that were overwritten");
        console.log(props);
      }

      var wrapperMenu = document.querySelector('.wrapper-menu');
      var phoneMenu = document.querySelector('.phone-menu');
      var bodyHtml = document.querySelector('body');
      var phoneLinks = document.querySelectorAll('.phone-menu-links li');
      var phoneLinkss = document.querySelectorAll('.phone-menu-links a');
      var socials = document.querySelector('.phone-f-socials');
      var nav = document.querySelector('nav');

    wrapperMenu.addEventListener('click', function(){
        
        if (wrapperMenu.classList.contains('open')){
            phoneLinkss.forEach((links) =>{
                links.style.animation = `fadeOut 2s ease`;
                socials.style.animation = `fadeOut 2s ease`;   
            });
           

            setTimeout(function(){
                wrapperMenu.classList.remove('open');
                phoneMenu.classList.remove('phone-menu-active');
                bodyHtml.classList.remove('noscroll');
                nav.style.position = `absolute`;
            }, 1200 );

        }else{
            console.log("na");
           
            wrapperMenu.classList.add('open');
            phoneMenu.classList.add('phone-menu-active');
            bodyHtml.classList.add('noscroll');
            socials.style.animation = `fade 2s ease forwards ${0.6 }s`;  
            nav.style.position = `fixed`;  
            phoneLinkss.forEach((linkss, index) => {

                linkss.style.animation = `fade 1.5s ease forwards ${index / 7 + 0.3 }s`;  

            });
  
        }
    });

    phoneLinkss.forEach((linkss, index) => {
        
        linkss.addEventListener('click', function(){

            console.log(index / 3 + 1.5);

            console.log((1.5+ (index / 3))*1000);
       
            // for all links
            phoneLinkss.forEach((links) =>{
                links.style.animation = `fadeOut ${(index /  3 + 1.5)}s ease `; 
                socials.style.animation = `fadeOut 2s ease`;  
            });

            // for clicked link
            linkss.style.animation = `fadeOutCurrent ${index / 3 + 1.5 }s ease`;

            setTimeout(function(){
                wrapperMenu.classList.remove('open');
                phoneMenu.classList.remove('phone-menu-active');
                bodyHtml.classList.remove('noscroll');
                nav.style.position = `absolute`;
            }, (0.8 + (index / 3))*1000  );

        }) 
        
        
    });
   
}
TweenLite.defaultOverwrite = 'none';

y.addListener(splitScroll) // Attach listener function on state changes
z.addListener(splitScroll) // Attach listener function on state changes
