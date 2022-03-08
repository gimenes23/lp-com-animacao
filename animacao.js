gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-inicial-texto",{
duration: 0.9,
opacity:0,
// da onde vem o eixo
y: -120,
// duraçao da animaçao
stagger:0.4,
});

gsap.from(".animate-inicial-img",{
    duration:0.8,
    opacity:0,
    x:200,
    stagger:1,
})


gsap.from(".animate-artigos",{
    duration:1.2,
    opacity:0,
    x: -50,
    stagger:0.4,
    delay: 2,
})

gsap.from(".animate-final",{
    scrollTrigger:"animate-final",
    duration:1.2,
    opacity:0,
    x: 90,
    stagger:0.4,
    delay: 2,
})