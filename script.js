/* ---------- Reviewer data ---------- */
const reviewers = [
  { grade: 7, quarter: 1, subject: "Math", url: "https://docs.google.com/document/d/1f9gt8UPtW41NCb2LUu-tt7NN4-BUlAxAPa1VnWHJi1k/edit?usp=sharing" },
  { grade: 7, quarter: 1, subject: "Science", url: "https://docs.google.com/document/d/19k452wyhFKLeZOXwK9tWMtJLYlBVH5tJmIIFyxPGOQw/edit?usp=sharing" },
  { grade: 7, quarter: 1, subject: "English", url: "https://docs.google.com/document/d/1eaKLHBxS77X1X0eYjOggkTgeoYPP0SgBitfQpnJpFhs/edit?usp=sharing" },

  { grade: 7, quarter: 2, subject: "Math", url: "https://docs.google.com/document/d/1cA-i6ZMEOPqFX2hoh0aRbMjNHJhTLk4udJIyMcsTW68/edit?usp=sharing" },
  { grade: 7, quarter: 2, subject: "Science", url: "https://docs.google.com/document/d/1Y7ZIaUANR7lVsKFfmCVAlVjxXzBwg2wiPJOSjklRqrQ/edit?usp=sharing" },
  { grade: 7, quarter: 2, subject: "English", url: "https://docs.google.com/document/d/11FAqaaxbChsUBFyli7-veM_z-ueuZYnFJcypV36_GKs/edit?usp=sharing" },

  { grade: 7, quarter: 3, subject: "Math", url: "https://docs.google.com/document/d/15CD1Uwn-ws4NhwF54xoYlsqAObf-GROEEHnHBxesFiI/edit?usp=sharing" },
  { grade: 7, quarter: 3, subject: "Science", url: "https://docs.google.com/document/d/1Tuwk9AeFtzXsi1MoRacbEBuk8f8slr5C7TzoVzQWkQY/edit?usp=sharing" },
  { grade: 7, quarter: 3, subject: "English", url: "https://docs.google.com/document/d/13nClPpFsdki3ohH4gNKJOYMAnyH7xW2LgpXLjTUf0Lo/edit?usp=sharing" },

  { grade: 7, quarter: 4, subject: "Math", url: "https://docs.google.com/document/d/1cwDMv1PO0ze3eIguzBJ9wKIIG--Mol_xJRy2I9ZTZbo/edit?usp=sharing" },
  { grade: 7, quarter: 4, subject: "Science", url: "https://docs.google.com/document/d/1s7CHYphkhCmRGlQgeyalfAglyNyTnri_FJfKkxzV_jM/edit?usp=sharing" },
  { grade: 7, quarter: 4, subject: "English", url: "https://docs.google.com/document/d/1E8B-zNx9B_ZQ3utYKRnhhkaJg19vDtQ7AM18U-5Ioc8/edit?usp=sharing" },

  { grade: 8, quarter: 1, subject: "Math", url: "https://docs.google.com/document/d/1ZVBnQIBPM7wmcmebSk7F9e-KSl7NN4I5Dw-tVMn4vU8/edit?usp=sharing" },
  { grade: 8, quarter: 1, subject: "Science", url: "https://docs.google.com/document/d/1nlmCecuv9OCcIw6vjWyc0keJ0iAyN3-WD80AeSmS6ZY/edit?usp=sharing" },
  { grade: 8, quarter: 1, subject: "English", url: "https://docs.google.com/document/d/1cUJwYEH0isJwVIymShDEGL7TSMUVODKivqH1xlAg3o4/edit?usp=sharing" },

  { grade: 8, quarter: 2, subject: "Math", url: "https://docs.google.com/document/d/1YdyX8nViPJZAbWDwJ2oLzAlCIs3kP8GkfNVzmAoQ2M8/edit?usp=sharing" },
  { grade: 8, quarter: 2, subject: "Science", url: "https://docs.google.com/document/d/1eE4zn7Rxo1O9iUiFl6VwHZXwVF2XuHvMcXO4yRuHb5M/edit?usp=sharing" },
  { grade: 8, quarter: 2, subject: "English", url: "https://docs.google.com/document/d/1-F4WV7KpMh4RR9x_5sQqW3yYcvRJ6unD7-C9U4oC81U/edit?usp=sharing" },

  { grade: 8, quarter: 3, subject: "Math", url: "https://docs.google.com/document/d/1D6tQh263_PfB5nOrd73G3-m1ZaKLGK2TW4YoWKUjzA8/edit?usp=sharing" },
  { grade: 8, quarter: 3, subject: "Science", url: "https://docs.google.com/document/d/15jH8oK0X-NZQMJAK3xsR55lOOXRdX0B5m0Wncfm5jpI/edit?usp=sharing" },
  { grade: 8, quarter: 3, subject: "English", url: "https://docs.google.com/document/d/1I3va9Ll8pvvgYkx5aPCu9-Whr5nw8ed6z7AGrubnZsM/edit?usp=sharing" },

  { grade: 8, quarter: 4, subject: "Math", url: "https://docs.google.com/document/d/1rjbTS_L8itWecMXWovs-cGhVYtFJmsuv8tPW82HE6cY/edit?usp=sharing" },
  { grade: 8, quarter: 4, subject: "Science", url: "https://docs.google.com/document/d/18tEa9MeBdofmiW6tvrLB7JOX85ffYNzYcQ5LaGeHbvU/edit?usp=sharing" },
  { grade: 8, quarter: 4, subject: "English", url: "https://docs.google.com/document/d/1Ur9UWk4SMMD5UiFFAt53JFR2agaSQ93mXuktJzxDfvY/edit?usp=sharing" },

  { grade: 9, quarter: 1, subject: "Math", url: "https://docs.google.com/document/d/1H5MQ_ynNIdouhTocf6FwpJsVbXSuHZC9a4YnfzTtzXU/edit?usp=sharing" },
  { grade: 9, quarter: 1, subject: "Science", url: "https://docs.google.com/document/d/17rzNpm1i9RbsV5vcUMHCHaTYHdUufQnGtcVUEDwMbwQ/edit?usp=sharing" },
  { grade: 9, quarter: 1, subject: "English", url: "https://docs.google.com/document/d/1l9bciwD3-QpQuSGJTNc64gxuMKVYGVeqyitnv9hH2tU/edit?usp=sharing" },

  { grade: 9, quarter: 2, subject: "Math", url: "https://docs.google.com/document/d/1dC8f27V2UTCKcS_4z0A8J84rRMCwQdmB3fkvZOxsbRo/edit?usp=sharing" },
  { grade: 9, quarter: 2, subject: "Science", url: "https://docs.google.com/document/d/1ZbwfUAJDnfAKbx-AYssaf2vAqjUHhy21O2c_hJBNGo4/edit?usp=sharing" },
  { grade: 9, quarter: 2, subject: "English", url: "https://docs.google.com/document/d/1GHkN6Lozb8az3OiruS3okEF2LF8Y_7eWpyd6PicMyUI/edit?usp=sharing" },

  { grade: 9, quarter: 3, subject: "Math", url: "https://docs.google.com/document/d/1cbJumxcEY-0aCTSszXUf88uCSrZAqO_M-AaRLn0Zi8M/edit?usp=sharing" },
  { grade: 9, quarter: 3, subject: "Science", url: "https://docs.google.com/document/d/1OxHxKVouwDVz8E1OcxJJcMPgCUxyManSsRJMo9f_KXE/edit?usp=sharing" },
  { grade: 9, quarter: 3, subject: "English", url: "https://docs.google.com/document/d/1LRTcbMpogDSxWEIPEhAJhb71ZjIfQB8xDXioijuaZwM/edit?usp=sharing" },

  { grade: 9, quarter: 4, subject: "Math", url: "https://docs.google.com/document/d/1r7LtCG-_16oN1l0ls7de1ADuJO43bkJFdYE8yXTx_xk/edit?usp=sharing" },
  { grade: 9, quarter: 4, subject: "Science", url: "https://docs.google.com/document/d/1IWgHK9g6GBRjiGkEWckN-gjZOcJvCtAlRudNHr8Jb7s/edit?usp=sharing" },
  { grade: 9, quarter: 4, subject: "English", url: "https://docs.google.com/document/d/1KcpXfORHt7IeC50rRvENYOQCPVwW_flkbL6TamiLfuQ/edit?usp=sharing" },

  { grade: 10, quarter: 1, subject: "Math", url: "https://docs.google.com/document/d/123KhLv-zB4HsnncNnoUzoOBnj06q-xDcSkvzLK-upYI/edit?usp=sharing" },
  { grade: 10, quarter: 1, subject: "Science", url: "https://docs.google.com/document/d/1HxEWhjCpro1eJCM3JejNtp6Ue2fnkDvOQHI0pnTdS0c/edit?usp=sharing" },
  { grade: 10, quarter: 1, subject: "English", url: "https://docs.google.com/document/d/1fMdWm_grunT9Q5sJXWQOi-ZD6aP_TzEebUDofj900-Y/edit?usp=sharing" },

  { grade: 10, quarter: 2, subject: "Math", url: "https://docs.google.com/document/d/130y3lGCwDGsdDsr9nh84WCwRn2wJzn7C4s37tMR4omg/edit?usp=sharing" },
  { grade: 10, quarter: 2, subject: "Science", url: "https://docs.google.com/document/d/16aICdfog4R5nmN8XBu2w1wk4qNVvEKEYXelP3puYjzA/edit?usp=sharing" },
  { grade: 10, quarter: 2, subject: "English", url: "https://docs.google.com/document/d/1twAcF2NWrNdBST_ZdQRYxXKpD6BoaHxVrOL0kT-HuT4/edit?usp=sharing" },

  { grade: 10, quarter: 3, subject: "Math", url: "https://docs.google.com/document/d/1koXYWga91gp5FldK-aw5RT1mU-SV0IZdXew-ouelBTo/edit?usp=sharing" },
  { grade: 10, quarter: 3, subject: "Science", url: "https://docs.google.com/document/d/1BL0fKvil0VEX51uqUr0DSGnUoggIEsP9jSUa8hauGCc/edit?usp=sharing" },
  { grade: 10, quarter: 3, subject: "English", url: "https://docs.google.com/document/d/1SIPwIw-jG56NxUO0aRZhw1r3G27-_y0-5-l4lvnK6yM/edit?usp=sharing" },

  { grade: 10, quarter: 4, subject: "Math", url: "https://docs.google.com/document/d/1cRZ8P9c_VTz5_RhsxlUeOkbMf5fjYFO6VcXZllxsXng/edit?usp=sharing" },
  { grade: 10, quarter: 4, subject: "Science", url: "https://docs.google.com/document/d/1zzazBwhCWElp42M1ZoYR7OkLj_lBLmTxIfM2-Yd_GUI/edit?usp=sharing" },
  { grade: 10, quarter: 4, subject: "English", url: "https://docs.google.com/document/d/1116GhqbkPl8OfhMQ0OuLbWuA6bb6ehGNFM9vTM8xtXg/edit?usp=sharing" }
];

/* ---------- Tab navigation ---------- */
const tabLinks = document.querySelectorAll(".tab-link");
const sections = document.querySelectorAll(".section, .hero");

function setActiveTab(id){
  tabLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.target === id);
  });
}

tabLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = document.getElementById(link.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.getElementById("tabs").classList.remove("open");
  });
});

document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => {
  document.getElementById("tabs").classList.toggle("open");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id && entry.target.id !== "top"){
      setActiveTab(entry.target.id);
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });

document.querySelectorAll(".section[id]").forEach(sec => observer.observe(sec));

/* ---------- Reviewer filtering ---------- */
const gradeFilter = document.getElementById("filter-grade");
const subjectFilter = document.getElementById("filter-subject");
const quarterFilter = document.getElementById("filter-quarter");
const reviewerGrid = document.getElementById("reviewer-grid");
const reviewerEmpty = document.getElementById("reviewer-empty");

function renderReviewers(){
  const g = gradeFilter.value;
  const s = subjectFilter.value;
  const q = quarterFilter.value;

  const filtered = reviewers.filter(r =>
    (g === "all" || r.grade === Number(g)) &&
    (s === "all" || r.subject === s) &&
    (q === "all" || r.quarter === Number(q))
  );

  reviewerGrid.innerHTML = "";

  if (filtered.length === 0){
    reviewerEmpty.hidden = false;
    return;
  }
  reviewerEmpty.hidden = true;

  filtered
    .sort((a, b) => a.grade - b.grade || a.quarter - b.quarter || a.subject.localeCompare(b.subject))
    .forEach(r => {
      const card = document.createElement("a");
      card.href = r.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = "reviewer-card";
      card.innerHTML = `
        <span class="reviewer-tag">Grade ${r.grade} · Quarter ${r.quarter}</span>
        <span class="reviewer-name">${r.subject}</span>
        <span class="reviewer-meta">Open reviewer</span>
      `;
      reviewerGrid.appendChild(card);
    });
}

[gradeFilter, subjectFilter, quarterFilter].forEach(el => {
  el.addEventListener("change", renderReviewers);
});

renderReviewers();

/* ---------- Star field canvas ---------- */
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}

function makeStars(){
  const count = Math.floor((canvas.width * canvas.height) / 22000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.2,
    speed: Math.random() * 0.015 + 0.005,
    phase: Math.random() * Math.PI * 2
  }));
}

let t = 0;
function drawStars(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    const twinkle = Math.sin(t * s.speed * 40 + s.phase) * 0.4 + 0.6;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(233, 202, 148, ${s.baseAlpha * twinkle})`;
    ctx.fill();
  });
  t += 1;
  requestAnimationFrame(drawStars);
}

function initStars(){
  resizeCanvas();
  makeStars();
}

window.addEventListener("resize", initStars);
window.addEventListener("load", initStars);
initStars();
requestAnimationFrame(drawStars);
