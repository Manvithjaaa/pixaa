[gsap.set("#cursor", { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" })];

const xto = gsap.quickTo("#cursor", "x", { duration: 0.4, ease: "power3"})
const yto = gsap.quickTo("#cursor", "y", { duration: 0.4, ease: "power3"})

window.addEventListener("mousemove", (e) => {
    xto(e.clientX);
    yto(e.clientY);
})

// [gsap.set("#scroll", { xPercent: -50, yPercent: -50 })];

// const xto = gsap.quickTo("#scroll", "x", { duration: 0.001, ease: "power3"})
// const yto = gsap.quickTo("#scroll", "y", { duration: 0.001, ease: "power3"})

// window.addEventListener("mousemove", (e) => {
//     xto(e.clientX);
//     yto(e.clientY);
// })