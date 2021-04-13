TweenLite.defaultEase = Linear.easeNone;


var controller_1 = new ScrollMagic.Controller({

});


var animationProject1 = new TimelineMax();

animationProject1
  .to(".projects__project-1 > .projects__project__img-1", 1, { y: "20%", ease: Linear.easeNone })
  .to(".projects__project-1 > .projects__project__img-2", 1, { y: "-20%", ease: Linear.easeNone });

var scene_animationProject1 = new ScrollMagic.Scene({
  triggerElement: ".title-1-indicator-end",
  duration: "120%",
  triggerHook: 1,
})
  .setTween(animationProject1)
  .addTo(controller_1);



var animationProject2 = new TimelineMax();

animationProject2
  .to(".projects__project-2 > .projects__project__img-1", 1, { y: "-15%", ease: Linear.easeNone })
  .to(".projects__project-2 > .projects__project__img-2", 1, { y: "20%", ease: Linear.easeNone });

var scene_animationProject2 = new ScrollMagic.Scene({
  triggerElement: ".title-2-indicator-end",
  duration: "120%",
  triggerHook: 1,
})
  .setTween(animationProject2)
  .addTo(controller_1);



var animationProject3 = new TimelineMax();

animationProject3
  .to(".projects__project-3 > .projects__project__img-1", 1, { y: "20%", ease: Linear.easeNone })
  .to(".projects__project-3 > .projects__project__img-2", 1, { y: "-20%", ease: Linear.easeNone });

var scene_animationProject3 = new ScrollMagic.Scene({
  triggerElement: ".title-3-indicator-end",
  duration: "120%",
  triggerHook: 1,
})
  .setTween(animationProject3)
  .addTo(controller_1);



var animationImgVertical = new TimelineMax();

animationImgVertical.to(".about__content__images__img", 1, { scaleY: 2.5, ease: Linear.easeNone });

var scene_animationImgVertical = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "70%",
  triggerHook: 0.4,
})
  .setTween(animationImgVertical)
  .addTo(controller_1);



var animationDescTitle = new TimelineMax();

animationDescTitle.to(".about__content__title-3", 1, { height: "5px" });

var scene_animationDescTitle = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "40%",
  triggerHook: 0.4,
})
  .setTween(animationDescTitle)
  .addTo(controller_1);



var animationSkillLine5 = new TimelineMax();

animationSkillLine5.to(".skill-line-5", 1, { y: 300 });

var scene_animationSkillLine5 = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "30%",
  triggerHook: 0.4,
})
  .setTween(animationSkillLine5)
  .addTo(controller_1);


var animationSkillLine4 = new TimelineMax();

animationSkillLine4.to(".skill-line-4", 1, { y: 300 });

var scene_animationSkillLine4 = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "45%",
  triggerHook: 0.4,
})
  .setTween(animationSkillLine4)
  .addTo(controller_1);


var animationSkillLine3 = new TimelineMax();

animationSkillLine3.to(".skill-line-3", 1, { y: 300 });

var scene_animationSkillLine3 = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "60%",
  triggerHook: 0.4,
})
  .setTween(animationSkillLine3)
  .addTo(controller_1);



var animationSkillLine2 = new TimelineMax();

animationSkillLine2.to(".skill-line-2", 1, { y: 300 });

var scene_animationSkillLine2 = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "75%",
  triggerHook: 0.4,
})
  .setTween(animationSkillLine2)
  .addTo(controller_1);


var animationSkillLine1 = new TimelineMax();

animationSkillLine1.to(".skill-line-1", 1, { y: 300 });

var scene_animationSkillLine1 = new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "90%",
  triggerHook: 0.4,
})
  .setTween(animationSkillLine1)
  .addTo(controller_1);



var animationContactLineVertical = new TimelineMax();

animationContactLineVertical.to(".contact__scroll-line", 1, { height: "100vh"});

var scene_animationContactLineVertical = new ScrollMagic.Scene({
  triggerElement: ".contact",
  duration: "70%",
  triggerHook: 0.5,
})
  .setTween(animationContactLineVertical)
  .addTo(controller_1);

  var animationContactLineHorizontal = new TimelineMax();

  animationContactLineHorizontal.to(".contact__title-line",  1, { width: "100vw"});

var scene_animationContactLineHorizontal = new ScrollMagic.Scene({
  triggerElement: ".contact",
  duration: "50%",
  triggerHook: 0.5,
})
  .setTween(animationContactLineHorizontal)
  .addTo(controller_1);



var controller = new ScrollMagic.Controller();


var animationHomeTitle = new TimelineMax();
animationHomeTitle
  .to(".about__content__title-1 h1", 1, {
    transform: "translate(-50%,250px)",
    yPercent: -50,
    delay: "3",
  })
  .to(".about__content__title-2 h1", 1, {
    transform: "translate(-50%,250px)",
    yPercent: -50,
  });



new ScrollMagic.Scene({
  triggerElement: ".about__content__title-1",
  duration: "10%",
  triggerHook: 0,
})

  .setTween(animationHomeTitle)
  .addTo(controller);

var animationHomeLine = new TimelineMax();

if ($(window).width() > 1200) {
animationHomeLine.to(".about__content__scroll-line", 1, {
  height: "90vh",
}) } else {
    animationHomeLine.to(".about__content__scroll-line", 1, {
        height: "75vh",
    }) 
}



new ScrollMagic.Scene({
  triggerElement: ".about__content__scroll-line__circle",
  duration: "80%",
  triggerHook: 0.4,
})

  .setTween(animationHomeLine)
  .addTo(controller);

var animationProjectsTitle = new TimelineMax();
animationProjectsTitle.to(".projects__title h3", 1, {
  transform: "translate(0,0px)",
});

new ScrollMagic.Scene({
  triggerElement: ".projects__title",
  duration: "50%",
  triggerHook: 1,
})

  .setTween(animationProjectsTitle)
  .addTo(controller);

var animationProjectTitle1Start = new TimelineMax();

animationProjectTitle1Start.to(".project-title-1 h3", 1, {
  top: "50%",
  onStart: function () {
    $(".project-title").css("z-index", "100");
  },
});

new ScrollMagic.Scene({
  triggerElement: ".projects__title",
  duration: "50%",
  triggerHook: 0,
})

  .setTween(animationProjectTitle1Start)
  .addTo(controller);

var animationProjectTitle1End = new TimelineMax();

animationProjectTitle1End.to(".project-title-1 h3", 1, {
  top: "160%",
});

new ScrollMagic.Scene({
  triggerElement: ".title-1-indicator-end",
  duration: "50%",
  triggerHook: 0,
})

  .setTween(animationProjectTitle1End)
  .addTo(controller);

var animationProjectTitle2Start = new TimelineMax();

animationProjectTitle2Start.to(".project-title-2 h3", 1, {
  top: "50%",
});

new ScrollMagic.Scene({
  triggerElement: ".title-2-indicator",
  duration: "50%",
  triggerHook: 0,
})

  .setTween(animationProjectTitle2Start)
  .addTo(controller);

var animationProjectTitle2End = new TimelineMax();

animationProjectTitle2End.to(".project-title-2 h3", 1, {
  top: "160%",
});

new ScrollMagic.Scene({
  triggerElement: ".title-2-indicator-end",
  duration: "50%",
  triggerHook: 0,
})

  .setTween(animationProjectTitle2End)
  .addTo(controller);

var animationProjectTitle3Start = new TimelineMax();

animationProjectTitle3Start.to(".project-title-3 h3", 1, {
  top: "50%",
});

new ScrollMagic.Scene({
  triggerElement: ".title-3-indicator",
  duration: "50%",
  triggerHook: 0,
})

  .setTween(animationProjectTitle3Start)
  .addTo(controller);

var animationProjectTitle3End = new TimelineMax();

animationProjectTitle3End.to(".project-title-3 h3", 1, {
  top: "160%",
});

new ScrollMagic.Scene({
  triggerElement: ".title-3-indicator-end",
  duration: "50%",
  triggerHook: 0,
})

  .setTween(animationProjectTitle3End)
  .addTo(controller);





  var animationContact = new TimelineMax();

  animationContact.to(".contact__title h1", 1, {
    transform: "translate(0,0)"
  }).to(".contact__info-container h5", 1, {
    transform: "translate(0,0)"
  }).to(".contact__back-container h5", 1, {
    transform: "translate(0,0)"
  });
  
  new ScrollMagic.Scene({
    triggerElement: ".contact",
    duration: "60%",
    triggerHook: 0.5,
  })
  
    .setTween(animationContact)
    .addTo(controller);


    var animationContactEmail = new TimelineMax();

    animationContactEmail.to(".contact__links__email a", 1, {
      top: "0"
    });
    
    new ScrollMagic.Scene({
      triggerElement: ".contact",
      duration: "30%",
      triggerHook: 0.5,
    })
    
      .setTween(animationContactEmail)
      .addTo(controller);


      var animationContactGithub = new TimelineMax();

      animationContactGithub.to(".contact__links__github a", 1, {
        top: "0"
      });
      
      new ScrollMagic.Scene({
        triggerElement: ".contact",
        duration: "40%",
        triggerHook: 0.5,
      })
      
        .setTween(animationContactGithub)
        .addTo(controller);



        
      var animationContactLinkedin = new TimelineMax();

      animationContactLinkedin.to(".contact__links__linkedin a", 1, {
        top: "0"
      });
      
      new ScrollMagic.Scene({
        triggerElement: ".contact",
        duration: "50%",
        triggerHook: 0.5,
      })
      
        .setTween(animationContactLinkedin)
        .addTo(controller);