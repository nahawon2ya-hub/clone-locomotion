{/* 문서 스무스 스크롤 */}
const lenis = new Lenis({
    duration: 2.2,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


{/* 시차스크롤 */}
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

//=========================================
const mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {

// 기존 gsap.to(".video", { ... }) 코드 자리에 이 코드를 넣어주세요.
    gsap.to(".video", {
        top: 0,             // 🚨 스크롤 내릴 때 상단 여백 없애기
        right: 0,           // 🚨 스크롤 내릴 때 우측 여백 없애기
        width: "100vw",     // 화면 전체 가로폭으로 확장
        height: "100vh",    // 화면 전체 세로높이로 확장
        borderRadius: "0px",// 둥근 테두리 해제
        ease: "none",
        scrollTrigger: {
            trigger: ".video_wrap", // 부모인 .video_wrap이 탑에 닿으면 시작
            start: "top top",            
            end: "+=240",          // 1500px만큼 스크롤하는 동안 애니메이션 진행
            scrub: true,            
            pin: true,              // 화면 고정
            pinSpacing: true,       
            invalidateOnRefresh: true
        }
    });
});

gsap.fromTo(
    ".nav",
    {
        y: -300,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "none"
    }
);

const nav = document.querySelector(".nav");

ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
        if (self.scroll() > 0) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
    }
});

gsap.fromTo(
    ".video_text> p",
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


gsap.to(".section1 .s1_title", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.4, // 클래스가 붙은 요소들만 순서대로 올라옴
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
    stagger: 0.2, // 클래스가 붙은 요소들만 순서대로 올라옴
    scrollTrigger: {
        start: () => window.innerWidth <= 980 
            ? "top -10%" 
            : window.innerWidth <= 1024 ? "top 65%" : "top 50%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".section2 .s2_item", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2, // 클래스가 붙은 요소들만 순서대로 올라옴
    scrollTrigger: {
        trigger: ".section2",
        start: () => window.innerWidth <= 1024 ? "top 65%" : "top 50%",
        toggleActions: "play none none reverse"
    }
});

window.addEventListener('scroll', () => {
  const element = document.querySelector('.s2_circle');
  if (!element) return; // 요소가 없으면 에러 방지

  // 요소의 상단 위치가 '화면 전체 높이의 80%' 지점보다 위로 올라왔는지 체크
  const triggerPoint = window.innerHeight * 0.8;
  const elementTop = element.getBoundingClientRect().top;

  if (elementTop < triggerPoint) {
    element.classList.add('active');
  } else {
    element.classList.remove('active'); // 다시 위로 올리면 원상복구 (원치 않으면 제거)
  }
});

window.addEventListener('scroll', () => {
  const element = document.querySelector('.s3_circle');
  if (!element) return; // 요소가 없으면 에러 방지

  // 요소의 상단 위치가 '화면 전체 높이의 80%' 지점보다 위로 올라왔는지 체크
  const triggerPoint = window.innerHeight * 0.8;
  const elementTop = element.getBoundingClientRect().top;

  if (elementTop < triggerPoint) {
    element.classList.add('active');
  } else {
    element.classList.remove('active'); // 다시 위로 올리면 원상복구 (원치 않으면 제거)
  }
});

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
