// define gsap
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();


// responsive gsap animation
mm.add("(min-width: 1200px)",()=> {
    gsap.to(".steer-career .box", {
        scrollTrigger: {
            trigger: ".steer-career .box:nth-child(2)",
            duration: 1,
            ease: "expo",
            start: '-=450s',
            end: '+=500s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".steer-career .box", {
        scrollTrigger: {
            trigger: ".steer-career .box:nth-child(3)",
            duration: 1,
            ease: "expo",
            start: '-=250s',
            end: '+=250s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".steer-career .box", {
        scrollTrigger: {
            trigger: ".steer-career .box:nth-child(4)",
            duration: 1,
            ease: "expo",
            start: '+=0s',
            end: '+=530s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".steer-career", {
        scrollTrigger: {
            trigger: ".mobile",
            duration: 1,
            start: "-=650s",
            end: '+=1550s',
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });
    
    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                duration: 1,
                ease: "expo",
                start: '+=100s',
                end: '+=200s',
                toggleClass: "box--active",
            }
        })
    });

    gsap.utils.toArray(".steer-career .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".steer-career",
                duration: 2,
                start: "top 55%",
                end: "+=2400",
                toggleActions: "restart reverse restart reverse ",
            }
        })
    }); 

    gsap.to(".steer-career .mobile", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".steer-career",
            duration: 1,
            start: "top 55%",
            end: "+=2480",
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });
    
    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".secure-spot",
                duration: 2,
                start: '+=100',
                end: '+=1500',
                toggleActions: "restart reverse restart reverse ",
            }
        })
    }); 

    gsap.to(".secure-spot .partner", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".secure-spot",
            duration: 2,
            start: '+=100',
            end: '+=1500',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".newsletter", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 2,
            start: '+=50',
            end: '+=1000',
            toggleActions: "restart reverse restart reverse",
        }
    });

    gsap.to('.steer-career .swipe-earn', {
        scrollTrigger: {
            pin: '.steer-career .swipe-earn',
            start: "-=130s",
            end: '+=680s',
            pinSpacing: true,
        },
    });

    gsap.to(".three-clicks", {
        y:0,
        opacity: 1,
        duration: 2,
        ease: "back",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 1,
            start: 'top 90%',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".footer", {
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".footer",
            duration: 1,
            start: 'top 80%',
            toggleActions: "restart reverse restart reverse ",
        }
    });
})

mm.add("(max-width: 1200px)",()=> {
    gsap.to(".steer-career .box", {
        scrollTrigger: {
            trigger: ".steer-career .box:nth-child(2)",
            duration: 1,
            ease: "expo",
            start: '-=500s',
            end: '+=350s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".steer-career .box", {
        scrollTrigger: {
            trigger: ".steer-career .box:nth-child(3)",
            duration: 1,
            ease: "expo",
            start: '-=450s',
            end: '+=150s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".steer-career .box", {
        scrollTrigger: {
            trigger: ".steer-career .box:nth-child(4)",
            duration: 1,
            ease: "expo",
            start: '-=280s',
            end: '+=430s',
            toggleClass: "box--active",
        },
    });
    
    gsap.to(".steer-career .mobile", {
        scrollTrigger: {
            trigger: ".mobile",
            duration: 1,
            start: "top 40%",
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",
        }
    });
    
    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                duration: 1,
                ease: "expo",
                start: 'top 50%',
                end: "bottom 50%",
                toggleClass: "box--active",

            }
        })
    });

    gsap.utils.toArray(".steer-career .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".steer-career .swipe-earn",
                duration: 2,
                start: "top 20%",
                end: "bottom 10%",
                toggleActions: "restart reverse restart reverse ",
            }
        })
    });

    gsap.to(".steer-career .mobile", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".steer-career",
            duration: 1,
            start: "top 60%",
            end: "bottom 95%",
            toggleClass: "active",
            toggleActions: "restart reverse restart reverse ",

        }
    });

    gsap.utils.toArray(".secure-spot .box").forEach((box) => {
        gsap.to(box, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "expo",
            scrollTrigger: {
                trigger: ".secure-spot .about-us",
                duration: 2,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "restart reverse restart reverse ",
            }
        })
    }); 

    gsap.to(".secure-spot .partner", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back",
        scrollTrigger: {
            trigger: ".secure-spot",
            duration: 2,
            start: '-=500s',
            end: 'bottom 30%',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".newsletter", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 1,
            start: "top 65%",
            toggleActions: "restart reverse restart reverse",
        }
    });

    gsap.to(".three-clicks", {
        y:0,
        opacity: 1,
        duration: 2,
        ease: "back",
        scrollTrigger: {
            trigger: ".three-clicks",
            duration: 1,
            start: 'top 90%',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    gsap.to(".footer", {
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: ".footer",
            duration: 1,
            start: 'top 90%',
            toggleActions: "restart reverse restart reverse ",
        }
    });

    
})

mm.add("(max-width: 992px)",()=> {
    gsap.utils.toArray("main .box").forEach((box) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                duration: 2,
                start: '-=300s',
                end: '+=340s',
                toggleClass: "box--active",
            }
        })
    }); 
})

mm.add("(min-width: 1200px)",()=> {
    document.querySelectorAll(".swipe-earn .box").forEach((box) => {
        window.addEventListener("scroll", () => {
            if ( box.id == "swipe" && box.classList.contains("box--active")) {
                document.querySelector(".swipe-earn .mobile").setAttribute("id", "play-swipe")
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-swipe]`).classList.add("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-standout]`).classList.remove("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-connect]`).classList.remove("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-swipe] video`).play();
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-standout] video`).load();
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-connect] video`).load();
            } 
            if ( box.id == "standout" && box.classList.contains("box--active")) {
                document.querySelector(".swipe-earn .mobile").setAttribute("id", "play-standout")
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-standout]`).classList.add("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-swipe]`).classList.remove("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-connect]`).classList.remove("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-standout] video`).play();
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-swipe] video`).load();
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-connect] video`).load();
            } 
            if ( box.id == "connect" && box.classList.contains("box--active")) {
                document.querySelector(".swipe-earn .mobile").setAttribute("id", "play-connect")
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-connect]`).classList.add("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-swipe]`).classList.remove("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-standout]`).classList.remove("active");
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-connect] video`).play();
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-swipe] video`).load();
                document.querySelector(`.swipe-earn .mobile ul li[data-video=play-standout] video`).load();
            } 
        });
    });
})

// play and open popup button
var circlePlayButton = document.getElementById("circle-play-b"),
    closePopUp = document.getElementById("close"),
    iframeSrc= document.querySelector(".popup iframe").src,
    video  = document.querySelector(".popup iframe"),
    player = new Vimeo.Player(video);
	
circlePlayButton.addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
    document.querySelector("body").classList.add("active");
	player.play();
});

closePopUp.addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
    document.querySelector("body").classList.remove("active");
    document.querySelector(".popup iframe").src = iframeSrc;
});

window.addEventListener("click", (e) => {
    if (e.target.className == "content") {
        document.querySelector(".popup").classList.remove("active");
        document.querySelector("body").classList.remove("active");
        document.querySelector(".popup iframe").src = iframeSrc;
    }
  });






// submit form newsletter
function submitForm(e) {
    e.preventDefault();
    var myform = document.getElementById("myform");
    var myName = document.querySelector("#myform #name").value;
    console.log(myName);
    var formData = new FormData(myform);
    fetch("https://show.ratufa.io/json", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("network returns error");
        }
        return response.json();
      })
      .then((resp) => {
        document.querySelector(".newsletter").classList.add("done");
        document.querySelector(".newsletter").innerHTML = `
            <img src="images/icons/thanks.svg">
            <h3>
            Hey ${myName}
            <span>You are on the newsletter!</span>
            </h3>
        `;
        myform.replaceWith(respdiv);
        console.log("resp from server ", resp);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }
  var myform = document.getElementById("myform");
  myform.addEventListener("submit", submitForm);

// partner slider
$('.slides').owlCarousel({
    loop:true,
    items:5,
    autoplay:true,
    mouseDrag: false,
    autoplayTimeout:3000,
    smartSpeed: 1500
});

// fixed navbar
var element = document.querySelector('.nav')
window.addEventListener('scroll', function() {
     window.scrollY > 0 ? 
     element.classList.add('fixed') : 
     element.classList.remove('fixed');
});


