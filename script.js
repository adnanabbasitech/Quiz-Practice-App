 // QUESTIONS
let gkQuestions = [
  {q:"Who is the founder of Pakistan?", options:["Allama Iqbal","Quaid-e-Azam","Sir Syed Ahmed Khan","Liaquat Ali Khan"], answer:1},
  {q:"How many colors are there in a rainbow?", options:["Five","Six","Seven","Eight"], answer:2},
  {q:"Which is the national flower of Pakistan?", options:["Rose","Sunflower","Jasmine","Tulip"], answer:2},
  {q:"How many days are there in a week?", options:["5","6","7","10"], answer:2},
  {q:"Which direction does the sun rise in?", options:["West","East","North","South"], answer:1},
  {q:"What is the capital city of Pakistan?", options:["Karachi","Lahore","Islamabad","Quetta"], answer:2},
  {q:"Which of these is a healthy fruit?", options:["Burger","Apple","Chocolate","Pizza"], answer:1},
  {q:"How many months are there in a year?", options:["10","11","12","24"], answer:2},
  {q:"Which is the national game of Pakistan?", options:["Cricket","Football","Hockey","Tennis"], answer:2},
  {q:"Which transport runs on tracks?", options:["Car","Train","Cycle","Bus"], answer:1},

  {q:"How many wheels does a tricycle have?", options:["Two","Three","Four","One"], answer:1},
  {q:"On which date do we celebrate Independence Day?", options:["23rd March","6th September","14th August","25th December"], answer:2},
  {q:"Which of these is an indoor game?", options:["Football","Cricket","Ludo","Hockey"], answer:2},
  {q:"Who is the national poet of Pakistan?", options:["Faiz Ahmed Faiz","Allama Iqbal","Mirza Ghalib","Ahmad Faraz"], answer:1},
  {q:"Which shape has four equal sides?", options:["Triangle","Circle","Square","Star"], answer:2},
  {q:"What do we call a large area of land covered with trees?", options:["Desert","Forest","Ocean","Island"], answer:1},
  {q:"Which is the national bird of Pakistan?", options:["Eagle","Peacock","Chukar Partridge","Sparrow"], answer:2},
  {q:"How many primary colors are there?", options:["Two","Three","Four","Five"], answer:1},
  {q:"Which province is Lahore the capital of?", options:["Sindh","Punjab","Balochistan","KPK"], answer:1},
  {q:"What is the opposite of 'Full'?", options:["Big","Empty","High","Heavy"], answer:1},

  {q:"Which month comes after January?", options:["March","April","February","June"], answer:2},
  {q:"What is the national animal of Pakistan?", options:["Lion","Markhor","Tiger","Camel"], answer:1},
  {q:"Where do you go when you are very sick?", options:["Park","Hospital","Market","Zoo"], answer:1},
  {q:"Which is the national dress of Pakistan?", options:["Pant shirt","Shalwar kameez","Saree","Dhoti"], answer:1},
  {q:"What do we use to stay dry in the rain?", options:["Hat","Umbrella","Gloves","Socks"], answer:1},
  {q:"What is the currency of Pakistan?", options:["Dollar","Rupee","Riyal","Euro"], answer:1},
  {q:"Which is the tallest animal on earth?", options:["Elephant","Giraffe","Zebra","Hippo"], answer:1},
  {q:"On which day do we celebrate Pakistan Day?", options:["14th August","23rd March","6th September","9th November"], answer:1},
  {q:"How many sides does a triangle have?", options:["Two","Three","Four","Five"], answer:1},
  {q:"Which city is known as the 'City of Lights'?", options:["Lahore","Karachi","Islamabad","Quetta"], answer:1},

  {q:"What color do you get by mixing red and yellow?", options:["Green","Orange","Purple","Pink"], answer:1},
  {q:"Which is the national fruit of Pakistan in summer?", options:["Apple","Mango","Guava","Banana"], answer:1},
  {q:"Which of these do we wear on our feet?", options:["Shirt","Shoes","Cap","Watch"], answer:1},
  {q:"Which province is Quetta the capital of?", options:["Punjab","Sindh","Balochistan","KPK"], answer:2},
  {q:"Which is the largest animal in the sea?", options:["Shark","Blue Whale","Dolphin","Octopus"], answer:1},
  {q:"What symbols are on the Pakistani flag?", options:["Sun and Moon","Crescent and Star","Two stars","A flower"], answer:1},
  {q:"Which of these is used to tell the time?", options:["Ruler","Clock","Mirror","Compass"], answer:1},
  {q:"Who was the first Prime Minister of Pakistan?", options:["Quaid-e-Azam","Liaquat Ali Khan","Z.A. Bhutto","Ayub Khan"], answer:1},
  {q:"What is the opposite of 'Fast'?", options:["Quick","Slow","High","Loud"], answer:1},
  {q:"Which province is Peshawar the capital of?", options:["Sindh","Punjab","Khyber Pakhtunkhwa","Balochistan"], answer:2},

  {q:"How many letters are there in the English alphabet?", options:["24","25","26","28"], answer:2},
  {q:"Which mountain is the highest in Pakistan?", options:["Mount Everest","K2","Nanga Parbat","Rakaposhi"], answer:1},
  {q:"Which room in the house is for cooking?", options:["Bedroom","Kitchen","Bathroom","TV Lounge"], answer:1},
  {q:"On which day do we celebrate Defence Day?", options:["14th August","6th September","23rd March","25th December"], answer:1},
  {q:"Which of these is a summer fruit?", options:["Orange","Watermelon","Apple","Almond"], answer:1},
  {q:"Which is the national tree of Pakistan?", options:["Neem","Deodar","Peepal","Mango Tree"], answer:1},
  {q:"What do we call a person who flies an airplane?", options:["Driver","Pilot","Sailor","Chef"], answer:1},
  {q:"What is the national language of Pakistan?", options:["English","Punjabi","Urdu","Sindhi"], answer:2},
  {q:"Which is the first letter of the alphabet?", options:["B","C","A","Z"], answer:2},
  {q:"Which city is famous for its historical Badshahi Mosque?", options:["Karachi","Lahore","Peshawar","Quetta"], answer:1},

  {q:"What is the color of a ripe strawberry?", options:["Green","Blue","Red","Yellow"], answer:2},
  {q:"Which festival do Muslims celebrate after Ramadan?", options:["Eid-ul-Fitr","Eid-ul-Adha","Shab-e-Barat","Holi"], answer:0},
  {q:"Which is an outdoor game?", options:["Chess","Carrom","Football","Cards"], answer:2},
  {q:"Where do Muslims go to offer prayers?", options:["Church","Temple","Mosque","School"], answer:2},
  {q:"Which is the smallest bird in the world?", options:["Sparrow","Hummingbird","Parrot","Crow"], answer:1},
  {q:"Which is the largest province of Pakistan by area?", options:["Punjab","Sindh","Balochistan","KPK"], answer:2},
  {q:"What do we use to keep our hair neat?", options:["Spoon","Comb","Key","Pencil"], answer:1},
  {q:"What do we call the brother of our father?", options:["Mama","Chacha","Nana","Dada"], answer:1},
  {q:"Which of these is a vehicle with three wheels?", options:["Bicycle","Rickshaw","Car","Truck"], answer:1},
  {q:"What is the national beverage of Pakistan?", options:["Tea","Coffee","Sugarcane juice","Milk"], answer:2},

  {q:"Which of these is a land transport?", options:["Ship","Boat","Bus","Airplane"], answer:2},
  {q:"Which province is Karachi the capital of?", options:["Punjab","Sindh","Balochistan","KPK"], answer:1},
  {q:"How many sense organs do humans have?", options:["Three","Four","Five","Six"], answer:2},
  {q:"On which day is Quaid-e-Azam's birthday celebrated?", options:["14th August","23rd March","25th December","9th November"], answer:2},
  {q:"What do we call the person who mends our shoes?", options:["Barber","Cobbler","Tailor","Pilot"], answer:1},
  {q:"What is the national motto of Pakistan?", options:["Peace","Unity, Faith, Discipline","Work hard","Unity is strength"], answer:1},
  {q:"Which direction is opposite to North?", options:["East","West","South","Up"], answer:2},
  {q:"Which is the national mountain of Pakistan?", options:["K2","Nanga Parbat","Broad Peak","Rakaposhi"], answer:0},
  {q:"Which of these is a farm animal?", options:["Lion","Tiger","Cow","Hen"], answer:2},
  {q:"Which is the largest city in Pakistan?", options:["Islamabad","Karachi","Multan","Quetta"], answer:1},

  {q:"What is the color of a dry leaf?", options:["Green","Brown","Blue","Red"], answer:1},
  {q:"How many stars are on the Pakistani flag?", options:["One","Two","Three","Five"], answer:0},
  {q:"Which of these is used for cleaning floors?", options:["Broom","Plate","Pillow","Book"], answer:0},
  {q:"Which place do we visit to see many wild animals?", options:["Park","Zoo","Market","Hospital"], answer:1},
  {q:"What is the color of an orange fruit?", options:["Red","Orange","Blue","Green"], answer:1},
  {q:"What do you call the father of your father?", options:["Nana","Dada","Uncle","Brother"], answer:1},
  {q:"Which of these is a sign of safety on the road?", options:["Running","Using zebra crossing","Playing","Sleeping"], answer:1},
  {q:"Which bird has a very long neck and cannot fly?", options:["Parrot","Ostrich","Sparrow","Snake"], answer:1},
  {q:"What is the color of a crow?", options:["White","Black","Grey","Brown"], answer:1}
];

let scienceQuestions = [
  {q:"Which part of a plant grows under the ground?", options:["Leaves","Flowers","Roots","Soil"], answer:2},
  {q:"What do animals need to breathe?", options:["Food","Air","Sunlight","Water"], answer:1},
  {q:"Which of these is a living thing?", options:["Bird","Rock","Toy Car","Table"], answer:0},
  {q:"What helps a fish swim in water?", options:["Legs","Wings","Fins","Tail"], answer:2},
  {q:"Which part of the plant makes seeds?", options:["Roots","Flower","Stem","Leaf"], answer:1},
  {q:"Which organ do you use to see the colors of a rainbow?", options:["Ears","Eyes","Nose","Tongue"], answer:1},
  {q:"Which sense tells you if a stove is hot?", options:["Sight","Hearing","Touch","Smell"], answer:2},
  {q:"What do we use to chew our food?", options:["Teeth","Eyelids","Elbows","Tongue"], answer:0},
  {q:"Which part of your body helps you breathe air?", options:["Stomach","Lungs","Heart","Brain"], answer:1},
  {q:"How many senses do humans typically have?", options:["Three","Four","Five","Ten"], answer:2},
  {q:"Which object in the sky gives us heat and light during the day?", options:["Moon","Sun","Star","Cloud"], answer:1},
  {q:"What do we call the white, fluffy things that float in the sky?", options:["Clouds","Rocks","Trees","Smoke"], answer:0},
  {q:"Which season comes after Winter and brings new flowers?", options:["Summer","Fall","Spring","Autumn"], answer:2},
  {q:"What shape does the Moon look like when it is a perfect circle?", options:["Crescent","Full Moon","Half Moon","Square"], answer:1},
  {q:"What do we use to stay dry when it is raining?", options:["Sunglasses","Umbrella","Scarf","Swimsuit"], answer:1},
  {q:"Which of these can you see in the sky only at night?", options:["Sun","Stars","Rainbows","Blue Sky"], answer:1},
  {q:"What instrument do we use to measure how hot or cold it is?", options:["Ruler","Scale","Thermometer","Clock"], answer:2},
  {q:"What do we call moving air?", options:["Wind","Water","Dust","Fog"], answer:0},
  {q:"Which planet do we live on?", options:["Mars","Jupiter","Earth","Venus"], answer:2},
  {q:"What appears in the sky when it is sunny and rainy at the same time?", options:["Snow","Rainbow","Thunder","Moon"], answer:1},

  {q:"Which of these animals lives in the ocean?", options:["Rabbit","Whale","Horse","Lion"], answer:1},
  {q:"Where does a bird usually build its home?", options:["Nest","Hive","Den","Stable"], answer:0},
  {q:"Which animal has a hard shell?", options:["Frog","Turtle","Dog","Hamster"], answer:1},
  {q:"A desert is a habitat that is very ________.", options:["Cold","Wet","Dry","Snowy"], answer:2},
  {q:"Which animal is active at night?", options:["Butterfly","Squirrel","Owl","Chicken"], answer:2},
  {q:"What do we call an animal that only eats plants?", options:["Herbivore","Carnivore","Omnivore","Hunter"], answer:0},
  {q:"Which habitat has many trees and lots of rain?", options:["Desert","Rainforest","Arctic","Beach"], answer:1},
  {q:"Which animal hibernates in winter?", options:["Bear","Bird","Shark","Tiger"], answer:0},
  {q:"What does a caterpillar turn into?", options:["Bee","Butterfly","Ant","Spider"], answer:1},
  {q:"Which animal uses a trunk?", options:["Giraffe","Elephant","Hippo","Zebra"], answer:1},

  {q:"What force do you use to move a wagon toward you?", options:["Push","Pull","Gravity","Magnet"], answer:1},
  {q:"What force moves a swing away?", options:["Push","Pull","Friction","Weight"], answer:0},
  {q:"Which object can a magnet pick up?", options:["Plastic toy","Metal paperclip","Wood block","Rubber ball"], answer:1},
  {q:"What force pulls things toward Earth?", options:["Wind","Gravity","Speed","Sound"], answer:1},
  {q:"Which surface is fastest for a toy car?", options:["Grass","Sand","Smooth ice","Carpet"], answer:2},
  {q:"To move a heavy box, you need more ______.", options:["Light","Force","Color","Sound"], answer:1},
  {q:"Fastest way for a person to move?", options:["Walking","Crawling","Running","Hopping"], answer:2},
  {q:"Changing position is called?", options:["Rest","Motion","Size","Shape"], answer:1},
  {q:"Tool with wheels for heavy items?", options:["Wheelbarrow","Ladder","Hammer","Saw"], answer:0},
  {q:"Best material for windows?", options:["Wood","Glass","Metal","Paper"], answer:1},

  {q:"Car tires are made of?", options:["Rubber","Plastic","Glass","Cotton"], answer:0},
  {q:"Which floats in water?", options:["Metal spoon","Rock","Plastic duck","Glass marble"], answer:2},
  {q:"Which material comes from trees?", options:["Plastic","Metal","Wood","Glass"], answer:2},
  {q:"Which is waterproof?", options:["Paper towel","Plastic raincoat","Cotton shirt","Sponge"], answer:1},
  {q:"Soft material for sweaters?", options:["Wool","Stone","Metal","Glass"], answer:0},
  {q:"Water becomes what when very cold?", options:["Boils","Disappears","Ice","Steam"], answer:2},
  {q:"Natural material?", options:["Plastic","Nylon","Rock","Polyester"], answer:2},
  {q:"Healthy snack from tree?", options:["Candy","Apple","Chips","Soda"], answer:1},
  {q:"Best way to wash germs?", options:["Water","Towel","Soap and water","Paper"], answer:2},
  {q:"Brush teeth how many times daily?", options:["Zero","Two","Ten","Once weekly"], answer:1},

  {q:"Which activity keeps heart strong?", options:["Sleeping","Watching TV","Running","Sitting"], answer:2},
  {q:"Why wear a helmet?", options:["Look cool","Stay safe","Go faster","Stay dry"], answer:1},
  {q:"Helps you grow strong?", options:["Games","Vegetables","Late nights","Cake"], answer:1},
  {q:"What to do when coughing?", options:["Cough on friend","Into elbow","Hold breath","Hide"], answer:1},
  {q:"Organ that pumps blood?", options:["Stomach","Brain","Heart","Lungs"], answer:2},
  {q:"Hard parts inside body?", options:["Muscles","Skin","Bones","Hair"], answer:2},
  {q:"Dairy food for strong bones?", options:["Bread","Milk","Apple","Carrot"], answer:1},
  {q:"Natural light source?", options:["Flashlight","Lamp","Sun","Candle"], answer:2},
  {q:"We hear with?", options:["Eyes","Ears","Nose","Hands"], answer:1},
  {q:"Animal that roars?", options:["Lion","Butterfly","Worm","Snail"], answer:0},

  {q:"What is created when light is blocked?", options:["Reflection","Shadow","Rainbow","Fire"], answer:1},
  {q:"Which is transparent?", options:["Brick wall","Wooden door","Glass window","Metal pot"], answer:2},
  {q:"Quiet sound is called?", options:["Shout","Whisper","Honk","Bang"], answer:1},
  {q:"Which makes sound when hit?", options:["Flute","Violin","Drum","Piano"], answer:2},
  {q:"Helps us see in dark?", options:["Fan","Flashlight","Pillow","Book"], answer:1},
  {q:"Non-living thing?", options:["Cat","Flower","Rock","Tree"], answer:2},
  {q:"Gas we breathe?", options:["Water","Oxygen","Food","Dust"], answer:1},
  {q:"What falls from clouds?", options:["Snow","Rain","Hail","Fog"], answer:1},
  {q:"Animal that hatches from egg?", options:["Dog","Chicken","Cow","Pig"], answer:1},
  {q:"Tool to tell time?", options:["Ruler","Clock","Compass","Map"], answer:1},

  {q:"Part of plant that takes water?", options:["Leaves","Flowers","Roots","Seeds"], answer:2},
  {q:"Air around Earth is called?", options:["Atmosphere","Ocean","Ground","Space"], answer:0},
  {q:"Seed needs to grow?", options:["Water & soil","Toys","Shoes","Bed"], answer:0},
  {q:"First stage of butterfly?", options:["Caterpillar","Egg","Pupa","Adult"], answer:1},
  {q:"Tadpole grows into?", options:["Bird","Fish","Frog","Snake"], answer:2},
  {q:"Baby dog is called?", options:["Kitten","Chick","Puppy","Cub"], answer:2},
  {q:"Kitten becomes?", options:["Dog","Cat","Lion","Tiger"], answer:1},
  {q:"Animal with pouch?", options:["Elephant","Kangaroo","Monkey","Bear"], answer:1},
  {q:"Solid keeps shape?", options:["Water","Milk","Wood block","Air"], answer:2},
  {q:"Water state you drink?", options:["Solid","Liquid","Gas","Smoke"], answer:1},

  {q:"Invisible gas?", options:["Air","Juice","Apple","Rock"], answer:0},
  {q:"Recycle means?", options:["Throw away","Make new from old","Break things","Buy more"], answer:1},
  {q:"Turn off to save energy?", options:["Lights","Sun","Breathing","Wind"], answer:0},
  {q:"Trees give us?", options:["Water","Oxygen","Food","Shade"], answer:1},
  {q:"Save water by?", options:["Leave tap","Turn off tap","Long showers","Fill pool"], answer:1},
  {q:"Reuse means?", options:["Reuse","Reject","Remove","Return"], answer:0},
  {q:"Most Earth covered in?", options:["Oceans","Mountains","Deserts","Forests"], answer:0},
  {q:"Pollution is?", options:["Dirty Earth","Cleaning","Planting","Singing"], answer:0},
  {q:"Who protects Earth?", options:["Adults","Teachers","Everyone","Animals"], answer:2},
  {q:"Plant part inside soil?", options:["Flower","Leaf","Root","Stem"], answer:2},

  {q:"Plants need from sun?", options:["Food","Light","Toys","Paper"], answer:1},
  {q:"Animal with long neck?", options:["Lion","Giraffe","Dog","Fish"], answer:1},
  {q:"Living thing?", options:["Rock","Flower","Spoon","Ball"], answer:1},
  {q:"Animals breathe?", options:["Water","Air","Sand","Dirt"], answer:1},
  {q:"Colorful plant part?", options:["Stem","Flower","Root","Bark"], answer:1}
];

// VARIABLES
let questions = [];
let current = 0;
let answers = {};
let timerInterval;

let questionTime = 30;
let currentTime = questionTime;
let totalTimeUsed = 0;

// FORMAT TIME
function formatTime(sec){
  let m = Math.floor(sec/60);
  let s = sec % 60;
  return `${m}:${s<10?'0':''}${s}`;
}

// START QUIZ
function startQuiz(subject){
  questions = subject === 'gk' ? gkQuestions : scienceQuestions;

  current = 0;
  answers = {};
  totalTimeUsed = 0;

  document.getElementById('startScreen').classList.add('d-none');
  document.getElementById('quizScreen').classList.remove('d-none');

  showQuestion();

  timerInterval = setInterval(()=>{
    currentTime--;
    totalTimeUsed++;

    document.getElementById('time').innerText = formatTime(currentTime);

    if(currentTime <= 0){
      if(current < questions.length - 1){
        current++;
        showQuestion();
      } else {
        finishQuiz();
      }
    }

  },1000);
}

// SHOW QUESTION
function showQuestion(){
  let q = questions[current];

  currentTime = questionTime;
  document.getElementById('time').innerText = formatTime(currentTime);

  document.getElementById('question').innerText = q.q;
  document.getElementById('questionCount').innerText = `Question ${current+1} / ${questions.length}`;

  let html = '';
  q.options.forEach((opt,i)=>{
    let active = answers[current]===i ? 'btn-success' : 'btn-outline-primary';
    html += `<button class="btn ${active} w-100 mb-2" onclick="selectOption(${i})">${opt}</button>`;
  });

  document.getElementById('options').innerHTML = html;

  // Disable next if not answered
  document.getElementById('nextBtn').disabled = (answers[current] === undefined);

  // Change button text on last question
  if(current === questions.length - 1){
    document.getElementById('nextBtn').innerText = "Finish";
  } else {
    document.getElementById('nextBtn').innerText = "Next";
  }
}

// SELECT OPTION
function selectOption(i){
  answers[current] = i;

  document.getElementById('nextBtn').disabled = false;

  showQuestion();
}

// NEXT
function nextQuestion(){
  if(current < questions.length - 1){
    current++;
    showQuestion();
  } else {
    finishQuiz(); // ✅ finish on last question
  }
}

// PREVIOUS
function prevQuestion(){
  if(current > 0){
    current--;
    showQuestion();
  }
}

// FINISH
// FINISH
function finishQuiz(){
  clearInterval(timerInterval);

  document.getElementById('quizScreen').classList.add('d-none');
  document.getElementById('resultScreen').classList.remove('d-none');

  let correct = 0;
  let attempted = Object.keys(answers).length;

  questions.forEach((q,i)=>{
    if(answers[i] === q.answer) correct++;
  });

  // ✅ TIME FORMAT FIX (minutes + digital)
  let minutes = Math.floor(totalTimeUsed / 60);
  let seconds = totalTimeUsed % 60;

  document.getElementById('score').innerText = `Score: ${correct} / ${questions.length}`;
  document.getElementById('correct').innerText = `Correct Answers: ${correct}`;
  document.getElementById('attempted').innerText = `Attempted: ${attempted}`;

  document.getElementById('timeTaken').innerText =
    `Time Taken: ${minutes} min ${seconds} sec (${formatTime(totalTimeUsed)})`;
}