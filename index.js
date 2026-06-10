/* =========================
   Lenis (스무스 스크롤)
========================= */
const lenis = new Lenis({
    duration: 2.2,
    smoothWheel: true
});

// Lenis RAF (중복 제거 버전)
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ScrollTrigger와 동기화
lenis.on('scroll', ScrollTrigger.update);

// GSAP ticker 충돌 방지
gsap.ticker.lagSmoothing(0);


/* =========================
   ScrollTrigger Refresh (필수)
========================= */
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


/* =========================
   시차스크롤 (video pin)
========================= */
const mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {

    gsap.to(".video", {
        top: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
            trigger: ".video_wrap",
            start: "top top",
            end: "+=240",
            scrub: true,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true
        }
    });
});


/* =========================
   NAV 애니메이션
========================= */
gsap.to(".nav", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out"
});

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else  {
        nav.classList.remove("scrolled");
    }
});


/* =========================
   VIDEO TEXT 애니메이션
========================= */
gsap.fromTo(
    ".video_text > p",
    {
        y: 20,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "none"
    }
);

gsap.fromTo(
    ".video_titlewrap span",
    {
        yPercent: 100
    },
    {
        yPercent: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power3.out"
    }
);


/* =========================
   SECTION 1
========================= */
gsap.to(".section1 .s1_title", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".section1",
        start: () => window.innerWidth <= 980
            ? "top 80%"
            : window.innerWidth <= 1024 ? "top 65%" : "top 50%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".s1_list .s1_item", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".s1_list",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});


/* =========================
   SECTION 2
========================= */
gsap.to(".section2 .s2_item", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section2",
        start: () => window.innerWidth <= 1024 ? "top 65%" : "top 50%",
        toggleActions: "play none none reverse"
    }
});


/* =========================
   CIRCLE ACTIVE (Lenis 대응)
========================= */
lenis.on('scroll', () => {

    const el2 = document.querySelector('.s2_circle');
    const el3 = document.querySelector('.s3_circle');

    const triggerPoint = window.innerHeight * 0.8;

    if (el2) {
        const top2 = el2.getBoundingClientRect().top;
        el2.classList.toggle("active", top2 < triggerPoint);
    }

    if (el3) {
        const top3 = el3.getBoundingClientRect().top;
        el3.classList.toggle("active", top3 < triggerPoint);
    }
});


/* =========================
   BURGER MENU
========================= */
const burgerBtn = document.querySelector('.nav_980px_top > button');
const navBurger = document.querySelector('.nav_burger');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navBurger.classList.toggle('active');
});


gsap.fromTo(
    ".nav_burger",
    {
        y: -100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "none"
    }
);