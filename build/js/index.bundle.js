!function(){"use strict";let e;e=localStorage.settings?JSON.parse(localStorage.getItem("settings")):{language:"en",photoSource:"github",tags:[],blocks:["time","date","greeting","quote","weather","audio","todolist"]};var t=e,n={body:document.querySelector("body"),settingsBtn:document.querySelector(".settings__header"),settingsBlock:document.querySelector(".settings__block"),settingsWrapper:document.querySelector(".settings__wrapper"),radioLangList:document.querySelectorAll(".radio-lang"),radioBg:document.querySelectorAll(".radio-bg"),radioGithub:document.getElementById("github"),radioUnsplash:document.getElementById("unsplash"),radioFlickr:document.getElementById("flickr"),inputTag:document.getElementById("tag"),addTagBtn:document.getElementById("add-tag"),tagList:document.querySelector(".tag-list"),checkWeather:document.getElementById("check-weather"),checkTime:document.getElementById("check-time"),checkDate:document.getElementById("check-date"),checkGreetings:document.getElementById("check-greetings"),checkQuote:document.getElementById("check-quote"),checkTodo:document.getElementById("check-todo"),weatherBlock:document.querySelector(".weather"),weatherIcon:document.querySelector(".weather-icon"),weatherDescription:document.querySelector(".weather-description"),temperature:document.querySelector(".temperature"),wind:document.querySelector(".wind"),humidity:document.querySelector(".humidity"),city:document.querySelector(".city"),weatherError:document.querySelector(".weather-error"),timeBlock:document.querySelector(".time-block"),time:document.querySelector(".time"),date:document.querySelector(".date"),greetingContainer:document.querySelector(".greeting-container"),greeting:document.querySelector(".greeting"),name:document.querySelector(".name"),preloader:document.querySelector("#preloader"),slideNext:document.querySelector(".slide-next"),slidePrev:document.querySelector(".slide-prev"),quoteWrapper:document.querySelector(".quote__wrapper"),quote:document.querySelector(".quote"),author:document.querySelector(".author"),changeQuote:document.querySelector(".change-quote"),todoWrapper:document.querySelector(".todo__wrapper"),todoBlock:document.querySelector(".todo__block"),todoBtn:document.querySelector(".todo__header"),newTaskInput:document.getElementById("new-task"),addTaskBtn:document.getElementById("add-task"),todoList:document.getElementById("todo__list"),todoCountAll:document.getElementById("todo-count-all"),todoCountCompleted:document.getElementById("todo-count-completed"),todoError:document.querySelector(".todo__error")},o=function(){localStorage.setItem("settings",JSON.stringify(t))},c=e=>e>=6&&e<12?"morning":e>=12&&e<17?"afternoon":e>=17&&e<24?"evening":"night",a=function(e,n,c){e.checked?(n.classList.remove("hide"),t.blocks.push(c),o()):(n.classList.add("hide"),t.blocks.forEach(((e,n)=>{e===c&&t.blocks.splice(n,1)})),o())},r=function(){const{timeBlock:e,time:o,date:r,greetingContainer:i,greeting:l,name:s,preloader:d,checkTime:u,checkDate:m,checkGreetings:g}=n;let h=window.location.hash.substr(1);t.blocks.includes("time")||(u.checked=!1,a(u,o,"time")),t.blocks.includes("date")||(m.checked=!1,a(m,r,"date")),t.blocks.includes("greeting")||(g.checked=!1,a(g,i,"greeting")),s.addEventListener("change",(function(){s.value.trim().length&&localStorage.setItem("name",s.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(s.value=localStorage.getItem("name"))})),setInterval(function(e){const t=new Date,n=t.getHours(),a=t.toLocaleTimeString(),i={weekday:"long",month:"long",day:"numeric"};r.textContent="en"===e?(new Date).toLocaleDateString("en-US",i):(new Date).toLocaleDateString("ru",i),o.textContent=a,l.textContent="en"===e?`Good ${c(n)},`:`${(e=>e>=6&&e<12?"Доброе утро":e>=12&&e<17?"Добрый день":e>=17&&e<24?"Добрый вечер":"Доброй ночи")(n)},`,s.placeholder="en"===e?"Your name":"Ваше имя"}(h),1e3),setTimeout((function(){d&&d.remove(),e.style.display="flex"}),1e3),u.addEventListener("change",(()=>{a(u,o,"time")})),m.addEventListener("change",(()=>{a(m,r,"date")})),g.addEventListener("change",(()=>{a(g,i,"greeting")}))},i=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),l=function(){let e=window.location.hash.substr(1);const{weatherBlock:o,weatherIcon:c,weatherDescription:r,weatherError:i,temperature:l,wind:s,humidity:d,city:u,checkWeather:m}=n;async function g(){const t=`https://api.openweathermap.org/data/2.5/weather?q=${u.value}&lang=${e}&appid=34a8094155f7b4c99e972c8d19d77c1a&units=metric`;try{const n=await fetch(t);if(!n.ok)throw new Error("Something went wrong. Check if the query you entered is correct...");const o=await n.json();n.ok&&(c.className="weather-icon owf",c.classList.add(`owf-${o.weather[0].id}`),l.textContent=`${o.main.temp.toFixed(0)}°C`,r.textContent=o.weather[0].description,s.textContent="en"===e?`Wind speed: ${o.wind.speed.toFixed(0)} m/s`:`Скорость ветра: ${o.wind.speed.toFixed(0)} м/с`,d.textContent="en"===e?`Humidity: ${o.main.humidity} %`:`Влажность: ${o.main.humidity} %`,i.textContent="")}catch(e){c.className="weather-icon owf",i.textContent=e.message,l.textContent="",r.textContent="",s.textContent="",d.textContent=""}}u.placeholder="en"===e?"Your city":"Ваш город",localStorage.getItem("city")||(u.value="en"===e?"Moscow":"Москва"),t.blocks.includes("weather")||(m.checked=!1,a(m,o,"weather")),g(),u.addEventListener("change",(function(){g(),""===i.textContent&&localStorage.setItem("city",u.value)})),m.addEventListener("change",(()=>{a(m,o,"weather")})),window.addEventListener("load",(function(){localStorage.getItem("city")&&(u.value=localStorage.getItem("city"))}))},s=function(){let e=window.location.hash.substr(1);const{quoteWrapper:o,quote:c,author:r,changeQuote:l,checkQuote:s}=n;async function d(e){const t=`./files/json/quote-${e}.json`;try{const e=await fetch(t);if(!e.ok)throw new Error("Something went wrong...");const n=await e.json(),o=i(0,n.length-1);c.innerText=n[o].text,r.innerText=n[o].author}catch{o.textContent=""}}t.blocks.includes("quote")||(s.checked=!1,a(s,o,"quote")),s.addEventListener("change",(()=>{a(s,o,"quote")})),window.addEventListener("load",d(e)),l.addEventListener("click",(()=>d(e)))},d=[{songName:"Moonlight Sonata",artist:"Paul Pitman",src:"music-1"},{songName:"Nocturne in B flat minor",artist:"Eduardo Vinuela",src:"music-2"},{songName:"Cello Suite no. 1",artist:"Accou",src:"music-3"},{songName:"Sonata 5 (II) Allegro",artist:"Telemann Trio",src:"music-4"},{songName:"Etude Op. 25 no. 1",artist:"Donald Betts",src:"music-5"},{songName:"Greensleeves to a Ground",artist:"Ariel Martin Bellio",src:"music-6"},{songName:"Twelve Spanish Dances, Op. 37",artist:"Monica Alianello",src:"music-7"}],u=function(){let e=window.location.hash.substr(1);const{body:o,todoBlock:c,todoBtn:r,todoWrapper:i,checkTodo:l,newTaskInput:s,addTaskBtn:d,todoList:u,todoError:m,todoCountAll:g,todoCountCompleted:h}=n;let p;function y(e){let t="";e.forEach((e=>{const n=e.isComplete?"todo__elem-wrapper--complete":"",o=e.isComplete?"checked":"",c=`\n      <div class="todo__elem-wrapper ${n}">\n          <div class="form__row--todo">\n            <label class="form__group">\n              <input class="check-box" type="checkbox" id=${e.id} ${o}/>\n              <span class="check-style"></span>\n              ${e.text}\n            </label>\n            <button class="minus-icon"></button>\n          </div>\n        </div>\n      `;t+=c})),u.innerHTML=t}function k(e){g.textContent=e.length}function f(e){const t=e.filter((e=>e.isComplete));h.textContent=t.length}function S(){localStorage.setItem("tasks",JSON.stringify(p))}s.placeholder="ru"===e?"новая задача":"New task",p=localStorage.tasks?JSON.parse(localStorage.getItem("tasks")):[],t.blocks.includes("todo")||(l.checked=!1,a(l,i,"todo")),p.length&&(y(p),k(p),f(p)),l.addEventListener("change",(()=>{a(l,i,"todo")})),r.addEventListener("click",(()=>{c.classList.toggle("block--active")})),i.addEventListener("click",(e=>{e._isClickWithInSettingsBlock=!0})),o.addEventListener("click",(e=>{e._isClickWithInSettingsBlock||c.classList.remove("block--active")})),d.addEventListener("click",(()=>{const e=s.value.trim();e&&function(e,t){let n=!0;return t.forEach((t=>{t.text===e&&(m.textContent="* Such a task exists",n=!1)})),n}(e,p)&&(function(e){p.push({id:Date.now(),text:e,isComplete:!1})}(e),s.value="",m.textContent="",y(p),k(p),S())})),u.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("check-box")){const e=p.findIndex((e=>e.id===Number(t.id)));p[e].isComplete=!p[e].isComplete,y(p),f(p),S()}})),u.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("minus-icon")){const e=t.closest(".form__row--todo").querySelector(".check-box"),n=p.findIndex((t=>t.id===e.id));p.splice(n,1),y(p),k(p),f(p),S()}}))};location.href=`${window.location.pathname}#${t.language}`;const m={copy:{ru:"Алексеева Татьяна",en:"Alekseeva Tatyana"},settings:{ru:"Настройки",en:"Settings"},language:{ru:"Язык",en:"Language"},english:{ru:"английский",en:"english"},russian:{ru:"русский",en:"russian"},bg:{ru:"Источник фонового изображения",en:"Source for background image"},tag:{ru:"Тег фонового изображения",en:"Background image tag"},"show-block":{ru:"Показать / Скрыть блок",en:"Show / Hide block"},player:{ru:"Аудиоплеер",en:"Audio player"},weather:{ru:"Погода",en:"Weather"},time:{ru:"Время",en:"Time"},date:{ru:"Дата",en:"Date"},greetings:{ru:"Приветствие",en:"Greetings"},todo:{ru:"Список дел",en:"ToDoList"},quote:{ru:"Цитата",en:"Quote"},"todo-title":{ru:"Все задачи",en:"All tasks"},"total-tasks":{ru:"Все задачи:",en:"All tasks:"},"completed-tasks":{ru:"Выполненные задачи:",en:"Сompleted tasks:"}},{body:g,settingsBtn:h,settingsBlock:p,settingsWrapper:y,radioLangList:k,inputTag:f}=n;function S(){location.href=`${window.location.pathname}#${t.language}`}function _(){for(let e in m)document.querySelectorAll(`.lng-${e}`).forEach((n=>{n&&(n.innerHTML=m[e][t.language])}));f.placeholder="en"===t.language?"Enter tag":"Введите тег"}S(),_(),r(),function(){const{body:e,slideNext:a,slidePrev:r,radioBg:l,radioGithub:s,radioUnsplash:d,radioFlickr:u,inputTag:m,addTagBtn:g,tagList:h}=n;let p=0,y=0;function k(t){const n=new Image;n.src=t,n.addEventListener("load",(()=>{e.style.backgroundImage=`url(${n.src})`}))}function f(){const e=(new Date).getHours();return c(e)}function S(){let e="";const n=f();if(t.tags.length){const n=i(0,t.tags.length-1);e=t.tags[n]}"flickr"===t.photoSource?(t.tags.length?v(e,i(0,y-1)):v(n,i(0,y-1)),m.disabled=!1):"unsplash"===t.photoSource?(t.tags.length?w(e):w(n),m.disabled=!1):(_(String(i(1,20)).padStart(2,"0")),m.disabled=!0)}function _(e){const n=f();p=e,k(`./img/${n}/${e}.jpg`),t.tags=[],o(),h.textContent=""}async function w(e){const t=`https://api.unsplash.com/photos/random?query=${e}&client_id=S_pba8IuJJN66g2ksU6QyPjM-6gDhbhsbozGYDpdlag`,n=await fetch(t);k(`${(await n.json()).urls.regular}`)}async function v(e,t){const n=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4ad25702fc121fbc517f23809559c8b4&tags=${e}&extras=url_l&format=json&nojsoncallback=1`,o=await fetch(n),c=await o.json();y=c.photos.photo.length,k(`${c.photos.photo[t].url_l}`)}function E(e){const t=document.createElement("button");t.className="tag-item",t.textContent=e,h.append(t)}function L(){t.tags.forEach((e=>{E(e)}))}function q(){document.querySelectorAll(".tag-item").forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault();const c=t.tags.filter((t=>t!==e.textContent));t.tags=c,h.textContent="",o(),L(),q(),S()}))}))}function b(){m.value.trim()&&!t.tags.includes(m.value.trim())?(t.tags.push(m.value.trim()),E(m.value.trim()),t.tags.push(m.value.trim()),t.tags=[...new Set(t.tags)],m.value="",q(),S()):m.value=""}"github"===t.photoSource&&(s.checked=!0),"unsplash"===t.photoSource&&(d.checked=!0),"flickr"===t.photoSource&&(u.checked=!0),t.tags.length&&(L(),q()),S(),a.addEventListener("click",(function(){"github"===t.photoSource?_(p<20?String(++p).padStart(2,"0"):String(p=1).padStart(2,"0")):S()})),r.addEventListener("click",(function(){"github"===t.photoSource?_(p>1?String(--p).padStart(2,"0"):String(p=20).padStart(2,"0")):S()})),l.forEach((e=>{e.addEventListener("change",(()=>{t.photoSource=e.id,o(),S()}))})),g.addEventListener("click",(e=>{e.preventDefault(),b(),o()})),m.addEventListener("keydown",(e=>{13===e.keyCode&&(e.preventDefault(),b(),o())}))}(),l(),s(),function(){const e=d,n=document.querySelector(".player"),o=document.querySelector(".player__controls-play"),c=document.querySelector(".player__controls-play-prev"),r=document.querySelector(".player__controls-play-next"),i=document.querySelector(".player__controls-play-list"),l=document.querySelector(".player__controls-sound-off"),s=document.querySelector(".player__progress-bar"),u=document.querySelector(".player__progress-area"),m=document.querySelector(".player__progress-current"),g=document.querySelector(".player__progress-duration"),h=document.querySelector(".player__artist"),p=document.querySelector(".player__song-name"),y=document.querySelector(".player__play-list"),k=document.getElementById("check-audio");t.blocks.includes("audio")||(k.checked=!1,a(k,n,"audio"));let f=!1,S=0,_=0;const w=new Audio;function v(){w.src=`./files/music/${e[S].src}.mp3`,w.currentTime=_,w.play(),f=!0,w.addEventListener("loadeddata",(()=>{let t=w.duration,n=Math.floor(t/60),o=Math.floor(t%60);o<10&&(o=`0${o}`),g.innerText=`${n}:${o}`,h.innerText=e[S].artist,p.innerText=e[S].songName})),function(){const e=b().find((e=>Number(e.dataset.id)===S)),t=e.querySelector(".player__controls-play--min");e.classList.add("player__play-item--active"),t.classList.add("player__controls-pause--min")}(),L()}function E(){w.pause(),_=w.currentTime,f=!1,b(),L()}function L(){f?o.classList.add("player__controls-pause"):o.classList.remove("player__controls-pause")}function q(){S=S<e.length-1?S+1:0,_=0,v()}function b(){const e=Array.from(document.querySelectorAll(".player__play-item")),t=Array.from(document.querySelectorAll(".player__controls-play--min"));return e.forEach((e=>{e.classList.remove("player__play-item--active")})),t.forEach((e=>{e.classList.remove("player__controls-pause--min")})),e}e.forEach(((e,t)=>{const n=document.createElement("li");n.classList.add("player__play-item"),n.dataset.id=t,n.innerHTML=`<button class="player__controls-icon player__controls-play--min player__controls-icon--min"></button>\n      <span>${e.artist} - ${e.songName}</span>`,y.append(n)})),Array.from(document.querySelectorAll(".player__controls-play--min")).forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".player__play-item");f?f&&Number(t.dataset.id)===S?E():(E(),S=Number(t.dataset.id),_=0,v()):(S=Number(t.dataset.id),v())}))})),w.addEventListener("timeupdate",(e=>{const t=e.target.currentTime;let n=t/e.target.duration*100;s.style.width=`${n}%`;let o=Math.floor(t/60),c=Math.floor(t%60);c<10&&(c=`0${c}`),m.innerText=`${o}:${c}`})),o.addEventListener("click",(function(){f?E():v()})),r.addEventListener("click",q),c.addEventListener("click",(function(){S=S>0?S-1:e.length-1,_=0,v()})),w.addEventListener("ended",q),i.addEventListener("click",(e=>{y.classList.toggle("player__play-list--active")})),n.addEventListener("click",(e=>{e._isClickWithInPlayList=!0})),document.body.addEventListener("click",(e=>{e._isClickWithInPlayList||y.classList.remove("player__play-list--active")})),u.addEventListener("click",(e=>{let t=u.clientWidth,n=e.offsetX,o=w.duration;_=n/t*o,v()})),l.addEventListener("click",(()=>{w.muted=!w.muted,l.classList.toggle("player__controls-sound-on"),l.classList.toggle("player__controls-sound-off")})),k.addEventListener("change",(()=>{a(k,n,"audio")}))}(),u(),k.forEach((e=>{e.id===t.language&&(e.checked=!0)})),k.forEach((e=>{e.addEventListener("click",(()=>{t.language=e.id,S(),o(),r(),l(),s(),_(),u()}))})),h.addEventListener("click",(()=>{p.classList.toggle("block--active")})),y.addEventListener("click",(e=>{e._isClickWithInSettingsBlock=!0})),g.addEventListener("click",(e=>{e._isClickWithInSettingsBlock||p.classList.remove("block--active")}))}();