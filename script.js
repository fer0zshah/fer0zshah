const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));