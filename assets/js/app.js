const projects = [
  {id:1,title:"Pick Me",description:"An interactive product-information project combining Arduino and C++ with Unity and C# for on-screen product information visualization.",short:"Physical interaction connected to on-screen product information in Unity.",tech:["Unity","C#","Arduino","C++"],categories:["hardware"],thumbnail:"assets/thumbnails/01_pick_me.jpg",video:"assets/videos/01.mp4"},
  {id:2,title:"Bike Controlled Game",description:"An interactive game where a real exercise bike controls an on-screen bottle-filling mechanic, combining Arduino C++ with Unity C#.",short:"A real exercise bike becomes the controller for a Unity bottle-filling game.",tech:["Unity","C#","Arduino","C++"],categories:["hardware"],thumbnail:"assets/thumbnails/02_bike_controlled_game.jpg",video:"assets/videos/02.mp4"},
  {id:3,title:"Biscuit Ninja",description:"A Fruit Ninja-style game built in Unity, adapted into a biscuit-themed playable experience.",short:"A fast slicing game built in Unity around a Fruit Ninja-style mechanic.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/03_biscuit_ninja.jpg",video:"assets/videos/03.mp4"},
  {id:4,title:"Spin Wheel",description:"A configurable gift giveaway system built in Unity and C#, with inventory management for distributing giveaways.",short:"A configurable Unity giveaway system with prize inventory management.",tech:["Unity","C#","Inventory"],categories:["systems"],thumbnail:"assets/thumbnails/04_spin_wheel.jpg",video:"assets/videos/04.mp4"},
  {id:5,title:"Penalty Shoot",description:"A challenging penalty-shooting game made in Unity and C#, where the player tries to score penalties.",short:"A focused penalty challenge game developed in Unity and C#.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/05_penalty_shoot.jpg",video:"assets/videos/05.mp4"},
  {id:6,title:"Juice Ninja",description:"A Fruit Ninja-style slicing game made in Unity and adapted into a juice-themed experience.",short:"A juice-themed slicing game based on Fruit Ninja-style mechanics.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/06_juice_ninja.jpg",video:"assets/videos/06.mp4"},
  {id:7,title:"Surfer",description:"A surfing game made in Unity, focused on a lightweight arcade-style gameplay loop.",short:"A surfing game prototype developed in Unity.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/07_surfer.jpg",video:"assets/videos/07.mp4"},
  {id:8,title:"Super Mario",description:"A Super Mario-style game made in Unity as a platforming gameplay implementation.",short:"A Unity platformer inspired by classic Super Mario gameplay.",tech:["Unity","C#","Platformer"],categories:["game"],thumbnail:"assets/thumbnails/08_super_mario.jpg",video:"assets/videos/08.mp4"},
  {id:9,title:"Cannon Shoot",description:"An aiming game made in Unity and C#, centered on controlling a cannon and shooting targets.",short:"A cannon aiming and shooting game developed in Unity.",tech:["Unity","C#","Aiming"],categories:["game"],thumbnail:"assets/thumbnails/09_cannon_shoot.jpg",video:"assets/videos/09.mp4"},
  {id:10,title:"Proximity Spray",description:"An interactive spray-bottle mockup made with Arduino and C++. The bottle sprays scent when a user gets near it.",short:"A proximity-triggered scent installation built with Arduino and C++.",tech:["Arduino","C++","Installation"],categories:["hardware"],thumbnail:"assets/thumbnails/10_proximity_spray.jpg",video:"assets/videos/10.mp4"},
  {id:11,title:"VR Find Me",description:"An Oculus Quest VR game made in Unity and C#, focused on immersive headset-based gameplay.",short:"An Oculus Quest VR experience developed in Unity and C#.",tech:["Unity","C#","VR","Quest"],categories:["vr","game"],thumbnail:"assets/thumbnails/11_vr_find_me.jpg",video:"assets/videos/11.mp4"},
  {id:12,title:"Controller Prototype",description:"A Unity prototype focused on character and enemy controller systems.",short:"A Unity prototype for character and enemy controller behavior.",tech:["Unity","C#","Controllers"],categories:["systems"],thumbnail:"assets/thumbnails/12_character_ai_prototype.jpg",video:"assets/videos/12.mp4"},
  {id:13,title:"Press the Button",description:"An interactive hardware game made with Arduino C++ combined with Unity C#.",short:"A physical button game connecting Arduino hardware directly to Unity.",tech:["Unity","C#","Arduino","C++"],categories:["hardware"],thumbnail:"assets/thumbnails/13_press_the_button.jpg",video:"assets/videos/13.mp4"},
  {id:14,title:"Hit the Product",description:"An Oculus Quest VR game made in Unity and C#, using a core mechanic similar to Beat Saber where the player hits target products in virtual space.",short:"A Quest VR game using a Beat Saber-style product-hitting mechanic.",tech:["Unity","C#","VR","Quest"],categories:["vr","game"],thumbnail:"assets/thumbnails/14_hit_the_product.jpg",video:"assets/videos/14.mp4"},
  {id:15,title:"Slot Machine",description:"A configurable gift giveaway system built in Unity and C#, with inventory management for distributing giveaways.",short:"A slot-machine-style giveaway system with configurable prize inventory.",tech:["Unity","C#","Inventory"],categories:["systems"],thumbnail:"assets/thumbnails/15_slot_machine.jpg",video:"assets/videos/15.mp4"},
  {id:16,title:"Steer the Bus",description:"An obstacle-avoidance game made in Unity and C#, built around steering a bus while avoiding hazards.",short:"A Unity obstacle-avoidance game built around steering a bus.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/16_steer_the_bus.jpg",video:"assets/videos/16.mp4"},
  {id:17,title:"Subway Surfer",description:"A challenging Unity game based on Subway Surfers-style core mechanics, including lane movement and obstacle avoidance.",short:"A Unity runner inspired by Subway Surfers core movement mechanics.",tech:["Unity","C#","Endless Runner"],categories:["game"],thumbnail:"assets/thumbnails/17_subway_surfer.jpg",video:"assets/videos/17.mp4"},
  {id:18,title:"Collect",description:"A compact game made in Unity around a simple collection-focused gameplay loop.",short:"A small Unity game built around a straightforward collection mechanic.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/18_collect.jpg",video:"assets/videos/18.mp4"},
  {id:19,title:"Puzzle",description:"A simple puzzle game built in Unity,The project focuses on clear gameplay flow, responsive interactions, and easy-to-understand puzzle mechanics.",short:"A simple Unity puzzle game focused on logic, interaction, and problem-solving.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/19_puzzle.jpg",video:"assets/videos/19.mp4"},
  {id:20,title:"Quizz",description:"An interactive quiz game built in Unity where the player is presented with multiple-choice questions and must select the correct answer. The system handles answer validation , collecting data, feedback, scoring, and progression through the questions.",short:"A Unity quiz game where players choose the correct answer and progress through a series of questions.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/20_quizz.jpg",video:"assets/videos/20.mp4"},
  {id:21,title:"Drag and Drop",description:"An interactive drag-and-drop game built in Unity where the player must identify the correct item and place it in the matching target area. The project focuses on intuitive controls, visual feedback, and accurate object placement.",short:"A Unity drag-and-drop game where players match and place the correct items into their target positions.",tech:["Unity","C#","Gameplay"],categories:["game"],thumbnail:"assets/thumbnails/21_drag.jpg",video:"assets/videos/21.mp4"}
];

const softwareOrder=[14,11,17,5,7,12,3,6,8,9,16,18,4,15,19,20,21];
const hardwareOrder=[2,13,1,10];
const $=(q,s=document)=>s.querySelector(q);
const $$=(q,s=document)=>[...s.querySelectorAll(q)];
const projectById=id=>projects.find(p=>p.id===Number(id));

function projectCard(p){
  return `<button class="project-card reveal" type="button" data-open-project="${p.id}" aria-label="Open ${p.title}">
    <span class="project-card-media"><img loading="lazy" src="${p.thumbnail}" alt="${p.title} thumbnail"></span>
    <span class="project-card-body"><h3>${p.title}</h3><p>${p.short}</p><span class="project-card-tech">${p.tech.join(" · ")}</span></span>
  </button>`;
}

function renderProjects(){
  $("#software-grid").innerHTML=softwareOrder.map(id=>projectCard(projectById(id))).join("");
  $("#hardware-grid").innerHTML=hardwareOrder.map(id=>projectCard(projectById(id))).join("");
}

const modal=$("#project-modal"),modalVideo=$("#modal-video");
function openProject(id){
  const p=projectById(id);if(!p)return;
  $("#modal-title").textContent=p.title;
  $("#modal-description").textContent=p.description;
  $("#modal-meta").innerHTML=p.tech.map(t=>`<span>${t}</span>`).join("");
  modalVideo.poster=p.thumbnail;
  modalVideo.src=p.video;
  modalVideo.load();
  if(typeof modal.showModal==="function")modal.showModal();else modal.setAttribute("open","");
  document.body.classList.add("modal-open");
  modalVideo.play().catch(()=>{});
}
function closeProject(){
  modalVideo.pause();modalVideo.removeAttribute("src");modalVideo.load();
  if(modal.open&&typeof modal.close==="function")modal.close();else modal.removeAttribute("open");
  document.body.classList.remove("modal-open");
}

function bindProjects(){document.addEventListener("click",e=>{const t=e.target.closest("[data-open-project]");if(t)openProject(t.dataset.openProject)})}
function bindModal(){
  $("[data-modal-close]").addEventListener("click",closeProject);
  modal.addEventListener("click",e=>{if(e.target===modal)closeProject()});
  modal.addEventListener("cancel",e=>{e.preventDefault();closeProject()});
}
function bindNav(){
  const nav=$("[data-nav]"),toggle=$("[data-menu-toggle]"),header=$("[data-header]");
  toggle.addEventListener("click",()=>{const open=!nav.classList.contains("is-open");nav.classList.toggle("is-open",open);toggle.setAttribute("aria-expanded",String(open))});
  $$("a",nav).forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false")}));
  const update=()=>header.classList.toggle("is-scrolled",scrollY>18);update();addEventListener("scroll",update,{passive:true});
}
function bindReveal(){
  const els=$$(".reveal");
  if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("is-visible"));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add("is-visible");io.unobserve(x.target)}}),{threshold:.08,rootMargin:"0px 0px -24px"});
  els.forEach(e=>io.observe(e));
}
function bindGlow(){
  const glow=$("[data-glow]");if(!glow||!matchMedia("(pointer:fine)").matches)return;
  addEventListener("pointermove",e=>{glow.style.setProperty("--mx",`${e.clientX}px`);glow.style.setProperty("--my",`${e.clientY}px`)},{passive:true});
}

renderProjects();bindProjects();bindModal();bindNav();bindReveal();bindGlow();$("#year").textContent=new Date().getFullYear();
