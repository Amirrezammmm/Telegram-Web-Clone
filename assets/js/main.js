const tabsContainer = document.querySelector('.folder_tabs');

tabsContainer.addEventListener('wheel', function (e) {
  // اگر فقط اسکرول عمودی انجام شده بود
  if (e.deltaY !== 0) {
    e.preventDefault(); // جلوی اسکرول عمودی رو بگیر
    tabsContainer.scrollLeft += e.deltaY; // اسکرول افقی بده به جای عمودی
  }
});

const tabs = document.querySelectorAll('.tab_item');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active')); // همه رو غیرفعال کن
    tab.classList.add('active'); // فقط همین یکی فعال بشه
    tab.scrollIntoView({
      behavior: 'smooth', // اسکرول نرم
      inline: 'center',   // تب رو در مرکز افقی بیار
      block: 'nearest'    // در راستای عمودی تغییر نکنه
    });
    const tabText = tab.querySelector('.tab')?.textContent.trim();
    const selectedCategory = categories.find(c => c.Name === tabText);
    
    let filteredUsers = [];
    if (selectedCategory?.id === 0) {
      // اگر All انتخاب شده، همه رو نشون بده
      filteredUsers = localUsers;
    } else if (selectedCategory) {
      // فقط کاربران با categoryId مناسب
      filteredUsers = localUsers.filter(user => user.categoryId.includes(selectedCategory.id));
    }

    renderContact(filteredUsers);
  });
});

const categories = [
  {id:0,Name:"All"},
  {id:1,Name:"Contact"},
  {id:2,Name:"Groups"},
  {id:3,Name:"Channels"},
  {id:4,Name:"Bots"},
  {id:5,Name:"News"},
  {id:6,Name:"Music"},
  {id:7,Name:"AI"},
  {id:8,Name:"Design"}
];

const tabItems = document.querySelectorAll(".tab");
tabItems.forEach((item, index) => {
  if (categories[index]) {
    item.textContent = categories[index].Name;
  }
});

tabs.forEach(tab => {
  const innerText = tab.querySelector('.tab')?.textContent || "";
  if (innerText === "All") {
    tab.classList.add('active');
  }
});

const openBtn = document.getElementById("hamergur_menu");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.toggle("show");
    openBtn.classList.toggle("hamergur_selected");
});
// اختیاری: بستن مودال وقتی بیرون کلیک بشه
document.addEventListener("click", function (e) {
  const isClickInside = modal.contains(e.target) || openBtn.contains(e.target);
    if (!isClickInside) {
      modal.classList.remove("show");
      openBtn.classList.remove("hamergur_selected");
    }
});



const users = [
  //---Contact
  {id:0,Name:"Amirreza",Status:"last seen recently",categoryId:[0,1],imageUrl:"assets/images/hajAmir.jpg",MyMessage:[],theyMessage:[]},
  {id:1,Name:"Alireza",Status:"last seen recently",categoryId:[0,1],imageUrl:"assets/images/alireza.jpg",MyMessage:[],theyMessage:[]},
  {id:2,Name:"Mohammad",Status:"last seen recently",categoryId:[0,1],imageUrl:"assets/images/mohammad.jpg",MyMessage:[],theyMessage:[]},
  {id:3,Name:"Reza",Status:"last seen recently",categoryId:[0,1],imageUrl:"assets/images/Reza.jpg",MyMessage:[],theyMessage:[]},
  {id:4,Name:"Armin",Status:"last seen recently",categoryId:[0,1],imageUrl:"assets/images/Armin.jpg",MyMessage:[],theyMessage:[]},
  //---Groups
  {id:5,Name:"خدمات دانشجویی",Status:"2k members",categoryId:[0,2],imageUrl:"assets/images/khadamatDaneshjoei.jpg",MyMessage:[],theyMessage:[]},
  {id:6,Name:"گروه دانستی خودرو",Status:"6 558 members",categoryId:[0,2],imageUrl:"assets/images/danestaniKhodro.jpg",MyMessage:[],theyMessage:[]},
  {id:7,Name:"حل تمرین دانشجویی",Status:"25 465 members",categoryId:[0,2],imageUrl:"assets/images/haleTamrinDaneshjoei.jpg",MyMessage:[],theyMessage:[]},
  {id:8,Name:"گروه گیاه لند",Status:"5k members",categoryId:[0,2],imageUrl:"assets/images/giahLand.jpg",MyMessage:[],theyMessage:[]},
  {id:9,Name:"هشتگ پروژه",Status:"978k members",categoryId:[0,2],imageUrl:"assets/images/hashtag.jpg",MyMessage:[],theyMessage:[]},
  //---Channels
  {id:10,Name:"دانستنی خودرو",Status:"309 subscribers",categoryId:[0,3],imageUrl:"assets/images/danestanichannel.jpg",MyMessage:[],theyMessage:[]},
  {id:11,Name:"گیاه لند",Status:"280 subscribers",categoryId:[0,3],imageUrl:"assets/images/giahLand.jpg",MyMessage:[],theyMessage:[]},
  {id:12,Name:"مجتمع چاپ نیمکت",Status:"51 subscribers",categoryId:[0,3],imageUrl:"assets/images/nimcat.jpg",MyMessage:[],theyMessage:[]},
  {id:13,Name:"Car Company Tycon",Status:"6 985",categoryId:[0,3],imageUrl:"assets/images/carcompanyTycon.jpg",MyMessage:[],theyMessage:[]},
  {id:14,Name:"عینک فلاح",Status:"122 subscribers",categoryId:[0,3],imageUrl:"assets/images/fallah.jpg",MyMessage:[],theyMessage:[]},
  //---Bots
  {id:15,Name:"Premium Bot",Status:"bot",categoryId:[0,4],imageUrl:"assets/images/premium.jpg",MyMessage:[],theyMessage:[]},
  {id:16,Name:"Stikers",Status:"bot",categoryId:[0,4],imageUrl:"assets/images/stickers.jpg",MyMessage:[],theyMessage:[]},
  {id:17,Name:"Spam Info Bot",Status:"bot",categoryId:[0,4],imageUrl:"assets/images/spam.jpg",MyMessage:[],theyMessage:[]},
  {id:18,Name:"Previews",Status:"bot",categoryId:[0,4],imageUrl:"assets/images/previes.jpg",MyMessage:[],theyMessage:[]},
  {id:19,Name:"ثبت آگهی فریلنسری",Status:"bot",categoryId:[0,4],imageUrl:"assets/images/khadamatDaneshjoei.jpg",MyMessage:[],theyMessage:[]},
  //---News
  {id:20,Name:"خبری فوری",Status:"336 subscribers",categoryId:[0,4,5],imageUrl:"assets/images/khabarfori.jpg",MyMessage:[],theyMessage:[]},
  {id:21,Name:"اخبار",Status:"4k subscribers",categoryId:[0,4,5],imageUrl:"assets/images/akhbar.jpg",MyMessage:[],theyMessage:[]},
  {id:22,Name:"خبر نیوز",Status:"56k subscribers",categoryId:[0,4,5],imageUrl:"assets/images/khabarNews.jpg",MyMessage:[],theyMessage:[]},
  {id:23,Name:"خبرگذاری ایسنا",Status:"45k subscribers",categoryId:[0,4,5],imageUrl:"assets/images/isna.jpg",MyMessage:[],theyMessage:[]},
  {id:24,Name:"BBC News",Status:"9m subscribers",categoryId:[0,4,5],imageUrl:"assets/images/BBC.jpg",MyMessage:[],theyMessage:[]},
  //---Music
  {id:25,Name:"Melo Bot",Status:"3 222 subscribers",categoryId:[0,3,6],imageUrl:"assets/images/melobot.jpg",MyMessage:[],theyMessage:[]},
  {id:26,Name:"Music Founder",Status:"25 000 subscribers",categoryId:[0,3,6],imageUrl:"assets/images/musicFinder.png",MyMessage:[],theyMessage:[]},
  {id:27,Name:"Finer Music",Status:"325 subscribers",categoryId:[0,3,6],imageUrl:"assets/images/finer.png",MyMessage:[],theyMessage:[]},
  {id:28,Name:"Real Music",Status:"458 subscribers",categoryId:[0,3,6],imageUrl:"assets/images/realmusic.png",MyMessage:[],theyMessage:[]},
  {id:29,Name:"Music For good",Status:"459 subscribers",categoryId:[0,3,6],imageUrl:"assets/images/musicFinder.png",MyMessage:[],theyMessage:[]},
  //---AI
  {id:30,Name:"ChatGpt",Status:"Bot",categoryId:[0,4,7],imageUrl:"assets/images/chatgpt.jpg",MyMessage:[],theyMessage:[]},
  {id:31,Name:"ChatGpt",Status:"Bot",categoryId:[0,4,7],imageUrl:"assets/images/chatgpt.jpg",MyMessage:[],theyMessage:[]},
  {id:32,Name:"Claude",Status:"Bot",categoryId:[0,4,7],imageUrl:"assets/images/claude.png",MyMessage:[],theyMessage:[]},
  {id:33,Name:"Grok Beta",Status:"Bot",categoryId:[0,4,7],imageUrl:"assets/images/groke beta.png",MyMessage:[],theyMessage:[]},
  {id:34,Name:"Gemini",Status:"Bot",categoryId:[0,4,7],imageUrl:"assets/images/gemini.webp",MyMessage:[],theyMessage:[]},
  //---Design
  {id:35,Name:"web Design",Status:"12k subscribers",categoryId:[0,2,8],imageUrl:"assets/images/webdesign.webp",MyMessage:[],theyMessage:[]},
  {id:36,Name:"UI/UX",Status:" 125 600 subscribers",categoryId:[0,2,8],imageUrl:"assets/images/uiux.png",MyMessage:[],theyMessage:[]},
  {id:37,Name:"VideoCreators",Status:"1 256 subscribers",categoryId:[0,2,8],imageUrl:"assets/images/videocreators.png",MyMessage:[],theyMessage:[]},
  {id:38,Name:"انجمن وب طراحان ایران",Status:"10m subscribers",categoryId:[0,2,8],imageUrl:"assets/images/anjoman.jpg",MyMessage:[],theyMessage:[]},
  {id:39,Name:"طراحی ریسپانسیو",Status:"1m subscribers",categoryId:[0,2,8],imageUrl:"assets/images/resposive.avif",MyMessage:[],theyMessage:[]},
];

const localUsers = JSON.parse(localStorage.getItem('users'));
function renderContact(Users = localUsers){
  
  const mainUsers = document.querySelector('.main_users');
  mainUsers.innerHTML = ''; // Clear existing content
  Users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user';
      userDiv.innerHTML = `
        <div class="user_image">
          <img src="${user.imageUrl}" alt="${user.Name}" class="profile_image">
        </div>
        <div class="user_info">
          <h3>${user.Name}</h3>
          <p class="card_userInfo_status">${user.Status}</p>
          <span class="user_id">${user.id}</span>
        </div>
      `;

      
      userDiv.addEventListener('click', () => {
        const userName = document.querySelector('.user_name');
        const lastSeen = document.querySelector('.last_seen');
        const imageProfile = document.getElementById('profile_image');

        const img = userDiv.querySelector('.user_image img');
        const name = userDiv.querySelector('.user_info h3');
        const status = userDiv.querySelector('.user_info p');

        imageProfile.src = img.src;
        imageProfile.alt = img.alt;
        imageProfile.style.display = 'block';
        userName.textContent = name.textContent;
        lastSeen.textContent = status.textContent;

        document.querySelectorAll('.user').forEach(u => u.classList.remove('selected'));
        userDiv.classList.add('selected');
        const selectedUser = localUsers.find(u => u.id === user.id);
        renderMessage(selectedUser);
      });
      mainUsers.appendChild(userDiv);
  });
}

function sendMessage() {
  const sendBtn = document.getElementById('send_message_button');
  const messageInput = document.getElementById('message_input');

  sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message === "") return;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const selectedUserDiv = document.querySelector('.user.selected');
    if (!selectedUserDiv) return;

    const userId = parseInt(selectedUserDiv.querySelector('.user_id').textContent);
    const userIndex = storedUsers.findIndex(u => u.id === userId);
    if (userIndex === -1) return;

    storedUsers[userIndex].MyMessage.push(message);

    localStorage.setItem('users', JSON.stringify(storedUsers)); // ذخیره پیام
    messageInput.value = '';
    renderMessage(storedUsers[userIndex]);
  });
}



function renderMessage(user = null) {
  const messagesDiv = document.querySelector('.messages');
  messagesDiv.innerHTML = "";

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const selectedUserDiv = document.querySelector('.user.selected');
  if (!selectedUserDiv) return;

  const userId = parseInt(selectedUserDiv.querySelector('.user_id').textContent);
  const selectedUser = user || users.find(u => u.id === userId);
  if (!selectedUser) return;

  // نمایش پیام‌های من
  selectedUser.MyMessage.forEach(message => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'everyMessage my-message';
    msgDiv.textContent = message;
    messagesDiv.appendChild(msgDiv);
  });

  // نمایش پیام‌های دریافتی (در صورت وجود)
  selectedUser.theyMessage.forEach(message => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'everyMessage their-message';
    msgDiv.textContent = message;
    messagesDiv.appendChild(msgDiv);
  });

  // messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function() {
  const storedUsers = localStorage.getItem('users');

  if (!storedUsers) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  renderContact();
  sendMessage();
});


