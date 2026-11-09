const projects = [
  {id:1,title:"Pick Me",short:"Unity · Arduino · Interactive",thumbnail:"assets/thumbnails/01_pick_me.jpg",video:"assets/videos/01.mp4"},
  {id:2,title:"Bike Controlled Game",short:"Unity · Arduino · Physical Controller",thumbnail:"assets/thumbnails/02_bike_controlled_game.jpg",video:"assets/videos/02.mp4"},
  {id:3,title:"Biscuit Ninja",short:"Unity · Gameplay",thumbnail:"assets/thumbnails/03_biscuit_ninja.jpg",video:"assets/videos/03.mp4"},
  {id:4,title:"Spin Wheel",short:"Unity · Giveaway System",thumbnail:"assets/thumbnails/04_spin_wheel.jpg",video:"assets/videos/04.mp4"},
  {id:5,title:"Penalty Shoot",short:"Unity · Gameplay",thumbnail:"assets/thumbnails/05_penalty_shoot.jpg",video:"assets/videos/05.mp4"},
  {id:6,title:"Juice Ninja",short:"Unity · Gameplay",thumbnail:"assets/thumbnails/06_juice_ninja.jpg",video:"assets/videos/06.mp4"},
  {id:7,title:"Surfer",short:"Unity · Gameplay",thumbnail:"assets/thumbnails/07_surfer.jpg",video:"assets/videos/07.mp4"},
  {id:8,title:"Super Mario",short:"Unity · Platformer",thumbnail:"assets/thumbnails/08_super_mario.jpg",video:"assets/videos/08.mp4"},
  {id:9,title:"Cannon Shoot",short:"Unity · Aiming",thumbnail:"assets/thumbnails/09_cannon_shoot.jpg",video:"assets/videos/09.mp4"},
  {id:10,title:"Proximity Spray",short:"Arduino · Interactive Installation",thumbnail:"assets/thumbnails/10_proximity_spray.jpg",video:"assets/videos/10.mp4"},
  {id:11,title:"VR Find Me",short:"Unity · VR · Quest",thumbnail:"assets/thumbnails/11_vr_find_me.jpg",video:"assets/videos/11.mp4"},
  {id:12,title:"Controller Prototype",short:"Unity · Systems",thumbnail:"assets/thumbnails/12_character_ai_prototype.jpg",video:"assets/videos/12.mp4"},
  {id:13,title:"Press the Button",short:"Unity · Arduino · Hardware",thumbnail:"assets/thumbnails/13_press_the_button.jpg",video:"assets/videos/13.mp4"},
  {id:14,title:"Hit the Product",short:"Unity · VR · Quest",thumbnail:"assets/thumbnails/14_hit_the_product.jpg",video:"assets/videos/14.mp4"},
  {id:15,title:"Slot Machine",short:"Unity · Giveaway System",thumbnail:"assets/thumbnails/15_slot_machine.jpg",video:"assets/videos/15.mp4"},
  {id:16,title:"Steer the Bus",short:"Unity · Gameplay",thumbnail:"assets/thumbnails/16_steer_the_bus.jpg",video:"assets/videos/16.mp4"},
  {id:17,title:"Subway Surfer",short:"Unity · Endless Runner",thumbnail:"assets/thumbnails/17_subway_surfer.jpg",video:"assets/videos/17.mp4"},
  {id:18,title:"Collect",short:"Unity · Gameplay",thumbnail:"assets/thumbnails/18_collect.jpg",video:"assets/videos/18.mp4"},
  {id:19,title:"Puzzle",short:"Unity · Puzzle",thumbnail:"assets/thumbnails/19_puzzle.jpg",video:"assets/videos/19.mp4"},
  {id:20,title:"Quiz",short:"Unity · Quiz",thumbnail:"assets/thumbnails/20_quizz.jpg",video:"assets/videos/20.mp4"},
  {id:21,title:"Drag and Drop",short:"Unity · Drag & Drop",thumbnail:"assets/thumbnails/21_drag.jpg",video:"assets/videos/21.mp4"}
];

const softwareOrder=[14,11,17,5,7,12,3,6,8,9,16,18,4,15,19,20,21];
const hardwareOrder=[2,13,1,10];
const byId=id=>projects.find(p=>p.id===id);

function card(p){
  return `<div class="entry work-entry">
    <button class="project-open" type="button" data-open-project="${p.id}" aria-label="Play ${p.title}">
      <div class="entry-image" style="background-image:url('${p.thumbnail}');background-size:cover;background-position:center"></div>
      <div class="work-entry-hover">
        <div class="work-entry-content">
          <div class="work-entry-title">${p.title}</div>
          <div class="work-entry-cat">${p.short}</div>
        </div>
      </div>
    </button>
  </div>`;
}

document.getElementById("software-grid").innerHTML=softwareOrder.map(id=>card(byId(id))).join("");
document.getElementById("hardware-grid").innerHTML=hardwareOrder.map(id=>card(byId(id))).join("");
document.getElementById("year").textContent=new Date().getFullYear();

const modal=document.getElementById("project-modal");
const video=document.getElementById("modal-video");

function openProject(id){
  const p=byId(Number(id));
  if(!p)return;
  video.poster=p.thumbnail;
  video.src=p.video;
  video.load();
  if(typeof modal.showModal==="function") modal.showModal();
  else modal.setAttribute("open","");
  document.body.classList.add("modal-open");
  video.play().catch(()=>{});
}

function closeProject(){
  video.pause();
  video.removeAttribute("src");
  video.removeAttribute("poster");
  video.load();
  if(modal.open && typeof modal.close==="function") modal.close();
  else modal.removeAttribute("open");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click",e=>{
  const project=e.target.closest("[data-open-project]");
  if(project) openProject(project.dataset.openProject);
});

document.querySelector("[data-modal-close]").addEventListener("click",closeProject);
modal.addEventListener("click",e=>{ if(e.target===modal) closeProject(); });
modal.addEventListener("cancel",e=>{ e.preventDefault(); closeProject(); });
