const users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    pendingMsg: 4,
    location: "Delhi, India",
    name: "Harshita",
    age: 23,
    interest: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-quill-pen-fill"></i>`, interest: "writing" },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem? Eaque quos modi est? Quia, accusantium voluptate commodi repellendus",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    pendingMsg: 6,
    location: "Indore, India",
    name: "rahul",
    age: 25,
    interest: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-quill-pen-fill"></i>`, interest: "writing" },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem? Eaque quos modi est? Quia, accusantium voluptate commodi repellendus",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    pendingMsg: 10,
    location: "Bangalore, India",
    name: "Komal",
    age: 22,
    interest: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-quill-pen-fill"></i>`, interest: "writing" },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem? Eaque quos modi est? Quia, accusantium",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    pendingMsg: 14,
    location: "Kolkata, India",
    name: "Akshat",
    age: 26,
    interest: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-quill-pen-fill"></i>`, interest: "writing" },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur Eaque quos modi est? Quia, accusantium voluptate commodi repellendus",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;

let isAnimating = false;

function setData(index){
  select(".profileImg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMsg;
  select(".badge h5").textContent = users[index].pendingMsg;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";
  users[index].interest.forEach((interest) => {
    clutter += `<div class="tag flex items-center justify-center bg-white/30 px-3 py-1 rounded-full gap-3">
    ${interest.icon}
    <h3 class="text-sm tracking-tight">${interest.interest}</h3>
  </div>`;
  });

  select(".tags").innerHTML = clutter;

  select(".bio p").innerHTML = users[index].bio
}

(function setInitial() {
  select(".mainCard img").src = users[curr].displayPic;
  select(".incomingCard img").src = users[curr + 1]?.displayPic;
 
  setData(curr)

  curr = 2;
})();


function imgChange () {
  if(!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function() {

        isAnimating = false;

        let main = select(".mainCard")
        let incoming = select(".incomingCard")
  
        incoming.classList.remove("z-[2]")
        incoming.classList.add("z-[3]")
        incoming.classList.remove("incomingCard")
  
        main.classList.remove("z-[3]")
        main.classList.add("z-[2]")
  
        gsap.set(main,{
          scale:1,
          opacity:1
        })
  
        if(curr === users.length) curr = 0;
  
        select(".mainCard img").src = users[curr].displayPic;
        curr++;
  
        main.classList.remove("mainCard")
        incoming.classList.remove("incomingCard")
        incoming.classList.add("mainCard")
        main.classList.add("incomingCard")
      }
  
    })
  
  
    tl.to(".mainCard", {
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: .9
    },"a")
    .from(".incomingCard", {
      scale: .9,
      opacity:0,
      ease: Circ,
      duration: 1.1
    },"a")
  }
}

let deny = select(".deny")
let accept = select(".accept")

deny.addEventListener("click", () =>{
  imgChange();

  setData(curr-1);
  
  gsap.from(".details .element", {
    y:"100%",
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5,
  })
});

accept.addEventListener("click", () =>{
  imgChange();
  setData(curr-1);
  gsap.from(".details .element", {
    y:"100%",
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5,
  })
});


(function containerCreate() {
  document.querySelectorAll(".element").forEach((elem) => {
    let div = document.createElement("div");
    div.classList.add(`${elem.classList[1]}container`, "overflow-hidden");
    div.appendChild(elem)
    select(".details").appendChild(div);
  })
})();

