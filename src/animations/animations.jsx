import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
	tl.to("body", {
		duration: 0.05,
		css: { overflowY: "hidden" },
		ease: "power3.inOut",
	})
		.to(".landing", {
			duration: 0.03,
			css: { overflowY: "hidden", height: "90vh" },
		})
		.to(".loader", {
			duration: 0,
			opacity: 1,
			ease: "Power3.easeOut",
		})
		.to(".loader l-orbit", {
			duration: 2,
			opacity: 0,
			ease: "power3.easeOut",
		})
		.to(".landing", {
			duration: 0.03,
			css: { overflowY: "hidden", height: "unset" },
		})
		.to("body", {
			duration: 0.05,
			css: { overflowY: "scroll" },
			ease: "power3.inOut",
		})
		.from(".landing__top .sub", {
			duration: 0.5,
			opacity: 0,
			y: 80,
			ease: "expo.easeOut",
		})
		.to(".preloader", {
			duration: 0.5,
			height: "0vh",
			ease: "Power3.easeOut",
			onComplete: mobileLanding(),
		}, "-=1")
		.from(".landing__main .text", {
			duration: 1,
			y: 10,
			opacity: 0,
			stagger: {
				amount: 1,
			},
			ease: "power3.easeInOut",
		})
		.from(".links .item", {
			duration: 0.25,
			opacity: 0,
			delay: window.innerWidth < 763 ? -1.5 : -0.3,
			stagger: {
				amount: 0.25,
			},
			ease: "expo.easeOut",
			onComplete: animateMainShape(),
		})
		.to(".preloader", {
			duration: 0,
			css: { display: "none" },
		});
};

export const openMenu = () => {
	const tl = gsap.timeline();
	tl.to("body", {
		duration: 0.05,
		css: { overflowY: "hidden" },
		ease: "power3.out",
	})
		.to(".hamburger-menu", {
			duration: 0.05,
			css: { display: "block" },
		})
		.to(".header-item", {
			duration: 0.05,
			css: { background: "none" },
		})
		.to(".cls-1", {
			duration: 0.05,
			delay: 0.15,
			css: { fill: "#ffffff" },
		})
		.to([".nav-secondary", ".nav-primary"], {
			duration: 0.4,
			height: "100%",
			transformOrigin: "right top",
			stagger: {
				amount: 0.05,
			},
			ease: "power3.inOut",
		}, "-=0.25")
		.from(".nav-link", {
			duration: 0.25,
			x: -80,
			opacity: 0,
			stagger: {
				amount: 0.25,
			},
			ease: "Power3.in",
		}, "-=0.15");
};

export const closeMenu = () => {
	const tl = gsap.timeline();
	tl.to("body", {
		duration: 0.025,
		css: { overflowY: "scroll" },
		ease: "power3.inOut",
	})
		.to([".nav-primary", ".nav-secondary"], {
			duration: 0.4,
			height: "0",
			transformOrigin: "right top",
			stagger: {
				amount: 0.05,
			},
			ease: "power3.inOut",
		})
		.to(".cls-1", {
			duration: 0.05,
			delay: -0.15,
			css: { fill: "#08e7f3" },
		})
		.to(".header-item", {
			duration: 0.25,
			css: { background: "rgba(11,11,15,.8)" },
		})
		.to(".hamburger-menu", {
			duration: 0.025,
			css: { display: "none" },
		});
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
	tl.from(el, {
		y: 150,
		duration: 0.5,
		delay,
		opacity: 0,
		ease: "power3.Out",
	});
};

export const mobileLanding = () => {
	window.innerWidth < 763 &&
		tl.from(".landing__main2", {
			duration: 0.5,
			delay: 0,
			opacity: 0,
			y: 80,
			ease: "expo.easeOut",
		});
};

const animateShapes = () => {
	const infiniteTl = gsap.timeline({ repeat: -1 });
	infiniteTl
		.to(".shapes .shape", {
			duration: 2,
			rotate: 360,
			delay: -0.5,
			ease: "power3.easeInOut",
			stagger: 1,
		})
		.to(".shapes .shape-3", {
			duration: 0.5,
			rotate: 360,
			delay: -1,
			ease: "power3.easeInOut",
		})
		.to(".shapes .shape", {
			duration: 1.5,
			rotate: 0,
			ease: "power3.easeInOut",
			stagger: 0.5,
		})
		.to(".shapes .shape", {
			duration: 0.5,
			opacity: 0,
			delay: -0.5,
			ease: "power3.easeInOut",
			stagger: 0.5,
		})
		.to(".shapes .shape", {
			duration: 0.75,
			opacity: 1,
			ease: "power3.easeInOut",
			stagger: 0.5,
		});
};

const animateMainShape = () => {
	const infiniteTl = gsap.timeline({ repeat: -1 });
	infiniteTl
		.to(".shapes .main-circle", {
			duration: 3,
			x: -30,
			y: -50,
			ease: "expo.easeOut",
		})
		.to(".shapes .main-circle", {
			duration: 3,
			x: -30,
			y: 50,
			ease: "expo.easeOut",
		})
		.to(".shapes .main-circle", {
			duration: 2,
			x: 0,
			y: 0,
			ease: "expo.easeOut",
		});
};

export const boxHover = (e) => {
	const tl = gsap.timeline();
	window.innerWidth >= 986 &&
		tl
			.to(e.target.querySelector(".link"), {
				duration: 0,
				opacity: 1,
			})
			.from(e.target.querySelectorAll(".box-anim"), {
				duration: 0.15,
				opacity: 0,
				y: 30,
				stagger: 0.05,
				ease: "Power3.easeOut",
			});
};

export const boxExit = (e) => {
	window.innerWidth >= 986 &&
		gsap.to(e.target.querySelector(".link"), {
			duration: 0,
			opacity: 0,
		});
};

export const fadeIn = (el) => {
	gsap.to(el, {
		duration: 1,
		opacity: 1,
		y: -60,
		ease: "power4.out",
	});
};

export const fadeOut = (el) => {
	gsap.to(el, {
		duration: 0.5,
		opacity: 0,
		y: -20,
		ease: "power4.out",
	});
};
