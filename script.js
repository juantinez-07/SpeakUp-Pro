/* SpeakUp Pro - Lógica Principal (script.js) */

const courseData=[
  {id:1,title:"Saludos",icon:"👋",level:"A1",reward:100,desc:"A1 - Saluda y preséntate.",
   phrases:[{en:"Hello, nice to meet you!",es:"¡Hola, encantado de conocerte!",img:"👋"},{en:"What's your name?",es:"¿Cómo te llamas?",img:"❓"},{en:"My name is John.",es:"Mi nombre es John.",img:"🪪"},{en:"How are you?",es:"¿Cómo estás?",img:"😊"},{en:"I'm fine, thanks!",es:"¡Estoy bien, gracias!",img:"👍"}],
   quiz:[{q:"'Nice to meet you':",options:["Adiós","Encantado de conocerte","Noche"],answer:1},{q:"Presentarte:",options:["Hungry","Hi, I'm John","Bye"],answer:1},{q:"Responde 'How are you?':",options:["I'm fine!","My name","See you"],answer:0}]},
  {id:2,title:"Información Personal",icon:"🪪",level:"A1",reward:120,desc:"A1 - Datos personales.",
   phrases:[{en:"Where are you from?",es:"¿De dónde eres?",img:"🌍"},{en:"I'm from Spain.",es:"Soy de España.",img:"🇪🇸"},{en:"What do you do?",es:"¿A qué te dedicas?",img:"💼"},{en:"I'm a student.",es:"Soy estudiante.",img:"🎓"},{en:"How old are you?",es:"¿Cuántos años tienes?",img:"🎂"}],
   quiz:[{q:"Preguntar origen:",options:["Time?","Where are you from?","Much?"],answer:1},{q:"'I'm a student':",options:["Trabajo","Soy estudiante","No sé"],answer:1},{q:"Preguntar profesión:",options:["What do you do?","Live?","When?"],answer:0}]},
  {id:3,title:"Hobbies",icon:"🎨",level:"A2",reward:150,desc:"A2 - Tus gustos.",
   phrases:[{en:"What do you like to do?",es:"¿Qué te gusta hacer?",img:"🎨"},{en:"I enjoy reading.",es:"Disfruto leer.",img:"📚"},{en:"I love traveling.",es:"Me encanta viajar.",img:"✈️"},{en:"We have a lot in common.",es:"Tenemos mucho en común.",img:"🤝"},{en:"That sounds interesting!",es:"¡Suena interesante!",img:"💡"}],
   quiz:[{q:"Preguntar hobbies:",options:["Do you have hobbies?","Time?","Hungry?"],answer:0},{q:"'in common':",options:["Lejos","En común","Solo"],answer:1},{q:"Mostrar interés:",options:["Tired","That sounds interesting!","Bye"],answer:1}]},
  {id:4,title:"Small Talk",icon:"☕",level:"A2",reward:170,desc:"A2 - Charla casual.",
   phrases:[{en:"Nice weather today!",es:"¡Buen clima hoy!",img:"☀️"},{en:"How was your weekend?",es:"¿Cómo fue tu finde?",img:"📅"},{en:"Did you do anything fun?",es:"¿Hiciste algo divertido?",img:"🎉"},{en:"I know what you mean.",es:"Sé a qué te refieres.",img:"🤔"},{en:"It was great talking to you.",es:"Fue genial hablar contigo.",img:"💬"}],
   quiz:[{q:"Small talk:",options:["El clima","Problemas","Política"],answer:0},{q:"'How was your weekend?':",options:["¿Hora?","¿Cómo fue tu finde?","¿Dónde?"],answer:1},{q:"Despedida:",options:["Great talking to you","Hate this","Money"],answer:0}]},
  {id:5,title:"Opiniones",icon:"💭",level:"B1",reward:200,desc:"B1 - Expresa opiniones.",
   phrases:[{en:"In my opinion...",es:"En mi opinión...",img:"💭"},{en:"I totally agree.",es:"Totalmente de acuerdo.",img:"✅"},{en:"I see your point.",es:"Entiendo tu punto.",img:"👀"},{en:"What are your thoughts?",es:"¿Qué opinas?",img:"🧠"},{en:"That makes sense.",es:"Eso tiene sentido.",img:"💡"}],
   quiz:[{q:"Dar opinión:",options:["In my opinion","Bye","Much?"],answer:0},{q:"'I totally agree':",options:["No acuerdo","Totalmente de acuerdo","No entiendo"],answer:1},{q:"Pedir opinión:",options:["What are your thoughts?","Where?","Time?"],answer:0}]},
  {id:6,title:"Amistad",icon:"🤝",level:"B1",reward:230,desc:"B1 - Construye amistad.",
   phrases:[{en:"Let's keep in touch!",es:"¡Mantengámonos en contacto!",img:"📱"},{en:"We should hang out.",es:"Deberíamos salir.",img:"🍻"},{en:"Can I get your number?",es:"¿Me das tu número?",img:"📞"},{en:"You're easy to talk to.",es:"Es fácil hablar contigo.",img:"😊"},{en:"Let's grab a coffee.",es:"Tomemos un café.",img:"☕"}],
   quiz:[{q:"'Keep in touch':",options:["Adiós","En contacto","No conozco"],answer:1},{q:"Proponer salir:",options:["Hang out","Leaving","Food"],answer:0},{q:"'Your number?':",options:["¿Hora?","¿Tu número?","¿Dónde?"],answer:1}]}
];

const motivationalQuotes=[
  {en:"The limits of my language are the limits of my world.",es:"Los límites de mi idioma son los límites de mi mundo.",author:"Wittgenstein"},
  {en:"A different language is a different vision of life.",es:"Un idioma diferente es una visión diferente de la vida.",author:"Fellini"},
  {en:"Practice makes progress, not perfection.",es:"La práctica hace el progreso, no la perfección.",author:"Anonymous"},
  {en:"Every expert was once a beginner.",es:"Todo experto fue alguna vez un principiante.",author:"Helen Hayes"},
  {en:"Small steps every day lead to big results.",es:"Pequeños pasos cada día llevan a grandes resultados.",author:"Anonymous"}
];

const surpriseIncentives=[
  {icon:"🎁",title:"¡Caja Sorpresa!",desc:"Tu constancia merece un premio. ¡Sigue así!",pts:50},
  {icon:"🍀",title:"¡Momento de la Suerte!",desc:"El destino premia a los que estudian.",pts:75},
  {icon:"🚀",title:"¡Impulso Extra!",desc:"Estás en racha. Aquí va un empujón.",pts:60},
  {icon:"⭐",title:"¡Estrella del Día!",desc:"Tu dedicación brilla. ¡Recompensa especial!",pts:80},
  {icon:"💎",title:"¡Diamante Oculto!",desc:"Encontraste un tesoro por estudiar.",pts:100}
];

const achievementsList=[
  {id:"first_step",icon:"🌱",title:"Primer Paso",desc:"Completa Nivel 1"},
  {id:"srs_10",icon:"🔁",title:"Repasador",desc:"10 repasos SRS"},
  {id:"srs_master",icon:"🧠",title:"Memoria de Acero",desc:"Domina 10 tarjetas"},
  {id:"pomo_1",icon:"🍅",title:"Primer Pomodoro",desc:"Completa una sesión"},
  {id:"pomo_4",icon:"🔥",title:"Maratonista",desc:"4 sesiones Pomodoro"},
  {id:"focus",icon:"🎯",title:"Concentrado",desc:"Usa modo enfoque"},
  {id:"surprise",icon:"🎁",title:"Afortunado",desc:"Gana incentivo sorpresa"},
  {id:"perfect_quiz",icon:"💯",title:"Perfeccionista",desc:"100% en quiz"},
  {id:"points_500",icon:"⭐",title:"Coleccionista",desc:"500 pts"},
  {id:"streak_3",icon:"🔥",title:"En Racha",desc:"3 días"},
  {id:"youglish",icon:"📺",title:"Cinéfilo",desc:"Usa YouGlish"},
  {id:"master",icon:"👑",title:"Maestro",desc:"Todos los niveles"}
];
const ranks=[{min:0,name:"Novato"},{min:300,name:"Aprendiz"},{min:700,name:"Conversador"},{min:1200,name:"Avanzado"},{min:1800,name:"Experto"},{min:2500,name:"Maestro"}];
const botPlayers=[{name:"Emma 🇬🇧",avatar:"👩‍🦰",points:2840},{name:"Carlos 🇲🇽",avatar:"🧔",points:2150},{name:"Yuki 🇯🇵",avatar:"👧",points:1920},{name:"Hans 🇩🇪",avatar:"👨",points:1450},{name:"Sofia 🇮🇹",avatar:"👩",points:1100},{name:"Liu 🇨🇳",avatar:"🧑",points:880},{name:"Ana 🇧🇷",avatar:"👩‍🦱",points:620}];

let user=null,selectedAvatar="👨‍🎓";

function saveData(){if(user)localStorage.setItem('speakup_neuro',JSON.stringify(user));}
function loadData(){const s=localStorage.getItem('speakup_neuro');if(s){user=JSON.parse(s);return true;}return false;}
function createUser(name,email,avatar,level){
    const progress={};courseData.forEach(l=>progress[l.id]={unlocked:l.id===1,completed:false,score:0});
    return {name,email,avatar,cefr:level,points:0,progress,achievements:[],lastLogin:new Date().toDateString(),streak:1,srs:[],pomoSessions:0,studyMinutes:0,actionCount:0};
}

document.getElementById('avatarPicker').addEventListener('click',e=>{
    if(e.target.classList.contains('avatar-option')){
        document.querySelectorAll('.avatar-option').forEach(a=>a.classList.remove('selected'));
        e.target.classList.add('selected');selectedAvatar=e.target.dataset.avatar;
    }
});
function doLogin(){
    const name=document.getElementById('loginName').value.trim()||"Estudiante";
    const email=document.getElementById('loginEmail').value.trim();
    const level=document.getElementById('loginLevel').value;
    let returning=false;
    if(loadData()&&user.name===name){checkStreak();returning=true;}
    else{user=createUser(name,email,selectedAvatar,level);}
    saveData();
    document.getElementById('loginScreen').classList.add('hidden');
    showWelcome(returning);
    initApp();
}
function checkStreak(){
    const today=new Date().toDateString();const last=new Date(user.lastLogin);
    const diff=Math.floor((new Date(today)-last)/86400000);
    if(diff===1){user.streak++;if(user.streak>=3)unlockAchievement('streak_3');}
    else if(diff>1){user.streak=1;}
    user.lastLogin=today;
}

function showWelcome(returning){
    const q=motivationalQuotes[Math.floor(Math.random()*motivationalQuotes.length)];
    const hour=new Date().getHours();
    let greeting=hour<12?"Good morning":hour<18?"Good afternoon":"Good evening";
    document.getElementById('welcomeTitle').textContent=`${greeting}, ${user.name}! 👋`;
    document.getElementById('welcomeSubtitle').textContent=returning?`¡Bienvenido de nuevo! Llevas ${user.streak} día(s) de racha. 🔥`:"¡Bienvenido a tu viaje de aprendizaje!";
    document.getElementById('quoteEn').textContent=`"${q.en}"`;
    document.getElementById('quoteEs').textContent=`"${q.es}" — ${q.author}`;
    document.getElementById('welcomeOverlay').classList.add('active');
}
function closeWelcome(){document.getElementById('welcomeOverlay').classList.remove('active');}

function initApp(){
    updateUserUI();renderLevels();renderAchievements();renderLeaderboard();renderSRS();pomoReset();
}
function updateUserUI(){
    document.getElementById('headerAvatar').textContent=user.avatar;
    document.getElementById('headerName').textContent=user.name;
    document.getElementById('headerPoints').textContent='⭐ '+user.points;
    document.getElementById('totalPoints').textContent=user.points;
    document.getElementById('streakDays').textContent=user.streak;
    document.getElementById('srsCount').textContent=user.srs.length;
    document.getElementById('pomoSessions').textContent=user.pomoSessions;
    document.getElementById('heroStreak').textContent=user.streak;
    document.getElementById('heroMinutes').textContent=user.studyMinutes;
    document.getElementById('heroReviews').textContent=getDueCards().length;
}

function addPoints(p){
    user.points+=p;
    if(user.points>=500)unlockAchievement('points_500');
    user.actionCount=(user.actionCount||0)+1;
    if(user.actionCount%7===0)triggerSurprise();
    updateUserUI();renderLeaderboard();saveData();
}
function triggerSurprise(){
    const s=surpriseIncentives[Math.floor(Math.random()*surpriseIncentives.length)];
    user.points+=s.pts;unlockAchievement('surprise');launchConfetti();
    setTimeout(()=>{showReward(s.icon,s.title,s.desc,s.pts);},300);
    updateUserUI();saveData();
}
function unlockAchievement(id){
    if(!user.achievements.includes(id)){
        user.achievements.push(id);const a=achievementsList.find(x=>x.id===id);
        saveData();renderAchievements();
        setTimeout(()=>showReward(a.icon,"¡Logro Desbloqueado!",a.title+" - "+a.desc,50),400);
        user.points+=50;updateUserUI();
    }
}
function renderAchievements(){
    const g=document.getElementById('achievementsGrid');g.innerHTML='';
    achievementsList.forEach(a=>{
        const u=user.achievements.includes(a.id);
        const d=document.createElement('div');d.className='achievement'+(u?' unlocked':'');
        d.innerHTML=`<div class="ach-icon">${a.icon}</div><h4>${a.title}</h4><small>${a.desc}</small>`;
        g.appendChild(d);
    });
}

function launchConfetti(){
    const colors=['#6366f1','#ec4899','#fbbf24','#10b981','#ef4444'];
    for(let i=0;i<60;i++){
        const c=document.createElement('div');c.className='confetti';
        c.style.left=Math.random()*100+'vw';c.style.top='-20px';
        c.style.background=colors[Math.floor(Math.random()*colors.length)];
        c.style.animationDelay=Math.random()*0.8+'s';
        c.style.borderRadius=Math.random()>0.5?'50%':'0';
        document.body.appendChild(c);
        setTimeout(()=>c.remove(),3500);
    }
}

function renderLevels(){
    const grid=document.getElementById('levelsGrid');grid.innerHTML='';
    courseData.forEach(level=>{
        const s=user.progress[level.id];
        const c=document.createElement('div');c.className='level-card'+(s.unlocked?'':' locked');
        c.innerHTML=`${!s.unlocked?'<div class="lock-overlay">🔒</div>':''}${s.completed?'<div class="lock-overlay">✅</div>':''}
            <span class="level-badge badge-${level.level}">${level.level}</span>
            <div class="level-icon">${level.icon}</div><h3>Nivel ${level.id}: ${level.title}</h3><p>${level.desc}</p>
            <div class="reward-tag">🎁 +${level.reward} pts</div>
            <div class="level-progress"><div class="level-progress-fill" style="width:${s.completed?'100':'0'}%"></div></div>
            <button class="btn" style="width:100%;font-size:0.92rem;padding:0.65rem;${!s.unlocked?'opacity:0.5;cursor:not-allowed;':''}" ${s.unlocked?`onclick="openLevel(${level.id})"`:'disabled'}>${s.unlocked?(s.completed?'🔄 Repasar':'▶️ Comenzar'):'🔒'}</button>`;
        grid.appendChild(c);
    });
    updateGlobalProgress();
}
function updateGlobalProgress(){
    const c=Object.values(user.progress).filter(p=>p.completed).length;
    const pct=Math.round((c/courseData.length)*100);
    const b=document.getElementById('globalProgress');b.style.width=pct+'%';b.textContent=pct+'%';
    if(c===courseData.length)unlockAchievement('master');
}
function openLevel(id){
    const level=courseData.find(l=>l.id===id);
    document.getElementById('modalTitle').textContent=`${level.icon} ${level.title}`;
    let html='<p style="margin-bottom:1.2rem;color:var(--gray);">Estudia. Al aprobar, estas frases entran a tu repaso SRS. 🔊🎬</p>';
    level.phrases.forEach(p=>{const safe=p.en.replace(/'/g,"\\'");
        html+=`<div style="background:#f8fafc;border-left:4px solid var(--primary);padding:1rem;margin-bottom:0.8rem;border-radius:10px;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
            <div><div style="font-size:2rem;">${p.img}</div><div style="font-weight:600;">${p.en}</div><div style="color:var(--gray);font-size:0.85rem;">${p.es}</div></div>
            <div style="display:flex;gap:0.4rem;"><button style="background:var(--primary);color:white;border:none;width:42px;height:42px;border-radius:50%;cursor:pointer;" onclick="speak('${safe}')">🔊</button><button style="background:#ff0000;color:white;border:none;width:42px;height:42px;border-radius:50%;cursor:pointer;" onclick="openYouGlish('${safe}')">🎬</button></div></div>`;});
    html+=`<button class="btn" style="width:100%;margin-top:1rem;background:var(--gradient);color:white;" onclick="closeModal('levelModal');startQuiz(${id})">📝 Cuestionario (+${level.reward} pts)</button>`;
    document.getElementById('modalBody').innerHTML=html;
    document.getElementById('levelModal').classList.add('active');
}

let cQ={levelId:null,index:0,correct:0};
function startQuiz(id){cQ={levelId:id,index:0,correct:0};document.getElementById('quizModal').classList.add('active');renderQ();}
function renderQ(){const l=courseData.find(x=>x.id===cQ.levelId);const q=l.quiz[cQ.index];
    let h=`<p style="color:var(--gray);">Pregunta ${cQ.index+1}/${l.quiz.length}</p><div class="quiz-question">${q.q}</div><div class="quiz-options">`;
    q.options.forEach((o,i)=>h+=`<div class="quiz-option" onclick="ansQ(${i})">${o}</div>`);h+='</div>';
    document.getElementById('quizBody').innerHTML=h;}
function ansQ(sel){const l=courseData.find(x=>x.id===cQ.levelId);const q=l.quiz[cQ.index];
    const opts=document.querySelectorAll('.quiz-option');opts.forEach(o=>o.style.pointerEvents='none');
    opts[q.answer].classList.add('correct');if(sel===q.answer)cQ.correct++;else opts[sel].classList.add('incorrect');
    setTimeout(()=>{cQ.index++;if(cQ.index<l.quiz.length)renderQ();else quizResult();},1000);}
function quizResult(){
    const l=courseData.find(x=>x.id===cQ.levelId);const total=l.quiz.length;
    const score=Math.round((cQ.correct/total)*100);const passed=score>=60;
    const s=user.progress[cQ.levelId];const was=s.completed;
    if(passed){
        s.completed=true;s.score=Math.max(s.score,score);
        const nx=courseData.find(x=>x.id===cQ.levelId+1);if(nx)user.progress[nx.id].unlocked=true;
        if(score===100)unlockAchievement('perfect_quiz');if(cQ.levelId===1)unlockAchievement('first_step');
        if(!was){addCardsToSRS(l);addPoints(l.reward);}
        saveData();renderLevels();
    }
    document.getElementById('quizBody').innerHTML=`<div style="text-align:center;padding:1.5rem;">
        <div class="score-circle">${score}%</div><h2>${passed?'🎉 ¡Aprobado!':'😕 Reintenta'}</h2>
        <p>Acertaste ${cQ.correct}/${total}.</p>
        <p style="margin-top:1rem;color:var(--gray);">${passed?(was?'Ya completado.':`¡+${l.reward} pts! Frases añadidas al SRS 🔁`):'Necesitas 60%.'}</p>
        <button class="btn" style="margin-top:1.2rem;background:var(--gradient);color:white;" onclick="closeModal('quizModal')${passed&&!was?`;showReward('${l.icon}','¡Nivel Completado!','Frases añadidas al SRS',${l.reward})`:''}">${passed?'✅ Continuar':'🔄 Reintentar'}</button></div>`;
}

function addCardsToSRS(level){
    level.phrases.forEach(p=>{
        if(!user.srs.find(c=>c.en===p.en)){
            user.srs.push({en:p.en,es:p.es,img:p.img,ease:2.5,interval:0,reps:0,due:Date.now()});
        }
    });
    saveData();
}
function getDueCards(){
    if(!user)return [];
    const now=Date.now();
    return user.srs.filter(c=>c.due<=now);
}
let currentCard=null;
function renderSRS(){
    if(!user)return;
    const due=getDueCards();
    const newCards=user.srs.filter(c=>c.reps===0).length;
    const mastered=user.srs.filter(c=>c.interval>=14).length;
    document.getElementById('srsNew').textContent=newCards;
    document.getElementById('srsDue').textContent=due.length;
    document.getElementById('srsDone').textContent=mastered;
    const container=document.getElementById('srsContainer');
    if(user.srs.length===0){
        container.innerHTML=`<div class="srs-card"><div class="srs-body" style="text-align:center;padding:3rem 2rem;"><div style="font-size:4rem;">📭</div><h3>Tu mazo está vacío</h3><p style="color:var(--gray);margin:1rem 0;">Completa niveles para añadir frases.</p><button class="btn" style="background:var(--gradient);color:white;" onclick="showTab('niveles')">📚 Ir a Niveles</button></div></div>`;
        return;
    }
    if(due.length===0){
        container.innerHTML=`<div class="srs-card"><div class="srs-body" style="text-align:center;padding:3rem 2rem;"><div style="font-size:4rem;">🎉</div><h3>¡Todo repasado por hoy!</h3><p style="color:var(--gray);margin:1rem 0;">Vuelve más tarde.</p></div></div>`;
        return;
    }
    currentCard=due[0];
    const safe=currentCard.en.replace(/'/g,"\\'");
    container.innerHTML=`<div class="srs-card">
        <div class="srs-img">${currentCard.img}</div>
        <div class="srs-body">
            <div class="srs-front">${currentCard.en}</div>
            <button class="btn btn-sm" style="background:var(--primary);color:white;" onclick="speak('${safe}')">🔊 Escuchar</button>
            <div class="srs-back" id="srsBack">
                <hr style="margin:1.2rem 0;border:none;border-top:1px solid #e2e8f0;">
                <div class="srs-translation">${currentCard.es}</div>
                <div class="srs-context">Repetición #${currentCard.reps+1} • Intervalo: ${currentCard.interval} día(s)</div>
                <button class="btn btn-sm" style="background:#ff0000;color:white;margin-bottom:0.5rem;" onclick="openYouGlish('${safe}')">🎬 YouGlish</button>
                <p style="font-size:0.8rem;color:var(--gray);margin:0.5rem 0;">¿Qué tan bien lo recordaste?</p>
                <div class="srs-grades">
                    <button class="grade-btn grade-again" onclick="gradeCard(0)">😵<br>Otra vez</button>
                    <button class="grade-btn grade-hard" onclick="gradeCard(1)">😓<br>Difícil</button>
                    <button class="grade-btn grade-good" onclick="gradeCard(2)">🙂<br>Bien</button>
                    <button class="grade-btn grade-easy" onclick="gradeCard(3)">😎<br>Fácil</button>
                </div>
            </div>
            <button class="btn" id="showAnswerBtn" style="background:var(--gradient);color:white;width:100%;margin-top:1rem;" onclick="flipCard()">👁️ Mostrar Respuesta</button>
        </div></div>`;
    speak(currentCard.en);
}
function flipCard(){
    document.getElementById('srsBack').classList.add('show');
    document.getElementById('showAnswerBtn').style.display='none';
}
function gradeCard(grade){
    const c=currentCard;c.reps++;
    if(grade===0){c.interval=0;c.ease=Math.max(1.3,c.ease-0.2);c.due=Date.now()+60000;}
    else{
        if(c.reps===1)c.interval=grade===3?4:1;
        else if(c.reps===2)c.interval=grade===3?7:3;
        else c.interval=Math.round(c.interval*c.ease);
        if(grade===1){c.ease=Math.max(1.3,c.ease-0.15);c.interval=Math.max(1,Math.round(c.interval*0.6));}
        if(grade===3)c.ease+=0.15;
        c.due=Date.now()+c.interval*86400000;
    }
    const reviews=(user.srsReviews||0)+1;user.srsReviews=reviews;
    if(reviews>=10)unlockAchievement('srs_10');
    const mastered=user.srs.filter(x=>x.interval>=14).length;
    if(mastered>=10)unlockAchievement('srs_master');
    addPoints(grade===0?5:15);
    saveData();renderSRS();updateUserUI();
}

let pomo={work:25,break:5,long:15,phase:'work',timeLeft:25*60,total:25*60,interval:null,running:false,cycle:0};
function syncPomoUI(){
    const m=Math.floor(pomo.timeLeft/60),s=pomo.timeLeft%60;
    const str=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    ['pomoBigTimer','fabTimer'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=str;});
    const pct=(pomo.timeLeft/pomo.total)*100;
    ['pomoBigRing','fabRing'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.width=pct+'%';});
    const isWork=pomo.phase==='work';
    const label=isWork?'📖 Tiempo de Estudio':(pomo.phase==='long'?'🌟 Descanso Largo':'☕ Descanso');
    const labelEl=document.getElementById('pomoPhaseLabel');
    if(labelEl){labelEl.textContent=label;labelEl.className='pomo-phase '+(isWork?'phase-work':'phase-break');}
    const fab=document.getElementById('fabPhase');
    if(fab){fab.textContent=isWork?'📖 Estudio':'☕ Descanso';fab.className='pomo-phase '+(isWork?'phase-work':'phase-break');}
}
function pomoStart(){
    if(pomo.running)return;
    pomo.running=true;
    document.getElementById('pomoToggle').classList.add('running');
    pomo.interval=setInterval(()=>{
        pomo.timeLeft--;
        if(pomo.phase==='work'&&pomo.timeLeft%60===0){user.studyMinutes++;updateUserUI();saveData();}
        syncPomoUI();
        if(pomo.timeLeft<=0)pomoComplete();
    },1000);
    syncPomoUI();
}
function pomoPause(){pomo.running=false;clearInterval(pomo.interval);document.getElementById('pomoToggle').classList.remove('running');}
function pomoReset(){pomoPause();pomo.phase='work';pomo.timeLeft=pomo.work*60;pomo.total=pomo.work*60;syncPomoUI();}
function pomoComplete(){
    pomoPause();playBeep();
    if(pomo.phase==='work'){
        pomo.cycle++;user.pomoSessions++;
        if(user.pomoSessions===1)unlockAchievement('pomo_1');
        if(user.pomoSessions>=4)unlockAchievement('pomo_4');
        addPoints(30);
        if(pomo.cycle%4===0){pomo.phase='long';pomo.timeLeft=pomo.long*60;pomo.total=pomo.long*60;
            showReward('🌟','¡4 Sesiones Completadas!','Te mereces un descanso largo. 🚶',30);launchConfetti();}
        else{pomo.phase='break';pomo.timeLeft=pomo.break*60;pomo.total=pomo.break*60;
            showReward('☕','¡Sesión Completada!','¡Excelente enfoque! Descansa. 💧',30);}
    }else{
        pomo.phase='work';pomo.timeLeft=pomo.work*60;pomo.total=pomo.work*60;
        showReward('📖','¡Descanso Terminado!','¡A seguir aprendiendo! 🧠',0);
    }
    syncPomoUI();updateUserUI();saveData();
    setTimeout(()=>pomoStart(),2000);
}
function playBeep(){
    try{const ctx=new(window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator();const g=ctx.createGain();
        o.connect(g);g.connect(ctx.destination);o.frequency.value=800;o.type='sine';g.gain.setValueAtTime(0.3,ctx.currentTime);
        o.start();g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.5);o.stop(ctx.currentTime+0.5);}catch(e){}
}
document.querySelectorAll('.preset-chip').forEach(chip=>{
    chip.addEventListener('click',function(){
        document.querySelectorAll('.preset-chip').forEach(c=>c.classList.remove('active'));
        document.querySelectorAll('.preset-chip[data-w="'+this.dataset.w+'"]').forEach(c=>c.classList.add('active'));
        pomo.work=parseInt(this.dataset.w);pomo.break=parseInt(this.dataset.b);pomo.long=parseInt(this.dataset.l);
        const cw=document.getElementById('customWork');if(cw){cw.value=pomo.work;document.getElementById('customBreak').value=pomo.break;document.getElementById('customLong').value=pomo.long;}
        pomoReset();
    });
});
function applyCustomPomo(){
    pomo.work=parseInt(document.getElementById('customWork').value)||25;
    pomo.break=parseInt(document.getElementById('customBreak').value)||5;
    pomo.long=parseInt(document.getElementById('customLong').value)||15;
    document.querySelectorAll('.preset-chip').forEach(c=>c.classList.remove('active'));
    pomoReset();
    showReward('⚙️','¡Configuración Aplicada!',`Estudio: ${pomo.work}min • Descanso: ${pomo.break}min`,0);
}
function togglePomodoro(start){showTab('pomodoro');if(start)setTimeout(pomoStart,500);}
function togglePomodoroPanel(){document.getElementById('pomoPanel').classList.toggle('open');}

function toggleFocus(){const on=document.getElementById('focusToggle').checked;applyFocus(on);document.getElementById('focusToggle2').checked=on;}
function toggleFocus2(){const on=document.getElementById('focusToggle2').checked;applyFocus(on);document.getElementById('focusToggle').checked=on;}
function applyFocus(on){
    document.body.classList.toggle('focus-mode',on);
    if(on){unlockAchievement('focus');showReward('🎯','Modo Enfoque Activado','Distracciones minimizadas. 🧘',0);}
}

function speak(t){if('speechSynthesis'in window){const u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=0.9;speechSynthesis.speak(u);}}

let ygW=null,ygModalW=null,ygInitialized=false;
function ensureYG(){
    if(!ygInitialized&&typeof YG!=='undefined'){
        try{ygW=new YG.Widget("ygWidget",{width:0,components:9});}catch(e){}
        try{ygModalW=new YG.Widget("ygModalWidget",{width:0,components:9});}catch(e){}
        ygInitialized=true;
    }
}
function searchYouGlish(){
    const q=document.getElementById('ygInput').value.trim();
    if(!q){alert('Escribe una palabra o frase para buscar.');return;}
    ensureYG();
    try{ygW.fetch(q,"english");}
    catch(e){document.getElementById('ygWidget').innerHTML=`<p style="text-align:center;padding:2rem;color:var(--gray);">Visita <a href="https://es.youglish.com/pronounce/${encodeURIComponent(q)}/english" target="_blank" style="color:var(--primary);">YouGlish para "${q}" ↗</a></p>`;}
    unlockAchievement('youglish');
}
function openYouGlish(term){
    document.getElementById('ygModal').classList.add('active');
    ensureYG();
    setTimeout(()=>{try{ygModalW.fetch(term.replace(/[^\w\s]/g,''),"english");}
        catch(e){document.getElementById('ygModalWidget').innerHTML=`<p style="text-align:center;padding:2rem;"><a href="https://es.youglish.com/pronounce/${encodeURIComponent(term)}/english" target="_blank" style="color:var(--primary);">Ver "${term}" en YouGlish ↗</a></p>`;}},300);
    unlockAchievement('youglish');
}

function renderLeaderboard(){
    const players=[...botPlayers,{name:user.name+' (Tú)',avatar:user.avatar,points:user.points,me:true}];
    players.sort((a,b)=>b.points-a.points);
    const body=document.getElementById('leaderboardBody');body.innerHTML='';
    const medals=['🥇','🥈','🥉'];
    players.forEach((p,i)=>{
        const row=document.createElement('div');row.className='lb-row'+(p.me?' me':'');
        row.innerHTML=`<div class="lb-rank">${i<3?`<span style="font-size:1.5rem;">${medals[i]}</span>`:(i+1)}</div><div class="lb-avatar">${p.avatar}</div><div class="lb-name">${p.name}</div><div class="lb-points">⭐ ${p.points}</div>`;
        body.appendChild(row);
    });
}

function openProfile(){
    const c=Object.values(user.progress).filter(p=>p.completed).length;
    document.getElementById('profileBody').innerHTML=`<div style="text-align:center;">
        <div style="font-size:4rem;">${user.avatar}</div><h2>${user.name}</h2>
        <p style="color:var(--gray);">Nivel MCER: ${user.cefr}</p>
        <div style="display:flex;justify-content:center;gap:1.3rem;margin:1.5rem 0;flex-wrap:wrap;">
            <div><div style="font-size:1.7rem;font-weight:800;color:var(--primary);">${user.points}</div><small>Puntos</small></div>
            <div><div style="font-size:1.7rem;font-weight:800;color:var(--success);">${user.srs.length}</div><small>Tarjetas SRS</small></div>
            <div><div style="font-size:1.7rem;font-weight:800;color:var(--warning);">${user.pomoSessions}</div><small>Pomodoros</small></div>
            <div><div style="font-size:1.7rem;font-weight:800;color:#c2410c;">${user.studyMinutes}</div><small>Min. Estudio</small></div>
        </div>
        <button class="btn" style="background:var(--danger);color:white;" onclick="logout()">🚪 Cerrar Sesión</button></div>`;
    document.getElementById('profileModal').classList.add('active');
}
function logout(){if(confirm('¿Cerrar sesión? Tu progreso queda guardado.'))location.reload();}

function showReward(icon,title,desc,points){
    document.getElementById('rewardIcon').textContent=icon;
    document.getElementById('rewardTitle').textContent=title;
    document.getElementById('rewardDesc').textContent=desc;
    const pe=document.getElementById('rewardPoints');
    if(points>0){pe.style.display='inline-block';pe.textContent='+'+points+' puntos';}else{pe.style.display='none';}
    document.getElementById('rewardPopup').classList.add('active');
}
function closeReward(){document.getElementById('rewardPopup').classList.remove('active');}

function showTab(name){
    document.querySelectorAll('.tab-content').forEach(t=>t.classList.add('hidden-section'));
    const el=document.getElementById('tab-'+name);if(el)el.classList.remove('hidden-section');
    document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===name));
    if(name==='repaso')renderSRS();
    window.scrollTo({top:document.querySelector('.tabs').offsetTop-80,behavior:'smooth'});
}
function closeModal(id){document.getElementById(id).classList.remove('active');}
window.onclick=e=>{if(e.target.classList.contains('modal'))e.target.classList.remove('active');};

window.addEventListener('load',()=>{
    if(loadData()){
        document.getElementById('loginName').value=user.name;
        document.getElementById('loginEmail').value=user.email||'';
        document.getElementById('loginLevel').value=user.cefr||'A1';
        selectedAvatar=user.avatar;
        document.querySelectorAll('.avatar-option').forEach(a=>a.classList.toggle('selected',a.dataset.avatar===user.avatar));
    }
});
