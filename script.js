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
  {q:"Which part of a plant grows under the ground?", options:["Leaves","Flowers","Roots","Stem"], answer:2},
  {q:"What do animals need to breathe?", options:["Food","Air","Sunlight","Soil"], answer:1},
  {q:"Which of these is a living thing?", options:["Bird","Rock","Toy Car","Spoon"], answer:0},
  {q:"What helps a fish swim in water?", options:["Legs","Wings","Fins","Fingers"], answer:2},
  {q:"Which part of the plant makes seeds?", options:["Roots","Flower","Stem","Bark"], answer:1},
  {q:"Which organ do you use to see the colors of a rainbow?", options:["Ears","Eyes","Nose","Tongue"], answer:1},
  {q:"Which sense tells you if a stove is hot?", options:["Sight","Hearing","Touch","Smell"], answer:2},
  {q:"What do we use to chew our food?", options:["Teeth","Eyelids","Elbows","Knees"], answer:0},
  {q:"Which part of your body helps you breathe air?", options:["Stomach","Lungs","Heart","Liver"], answer:1},
  {q:"How many senses do humans typically have?", options:["Three","Four","Five","Ten"], answer:2},
  {q:"Which object in the sky gives us heat and light during the day?", options:["Moon","Sun","Star","Cloud"], answer:1},
  {q:"What do we call the white, fluffy things that float in the sky?", options:["Clouds","Rocks","Trees","Rain"], answer:0},
  {q:"Which season comes after Winter and brings new flowers?", options:["Summer","Fall","Spring","Autumn"], answer:2},
  {q:"What shape does the Moon look like when it is a perfect circle?", options:["Crescent","Full Moon","Half Moon","Square"], answer:1},
  {q:"What do we use to stay dry when it is raining?", options:["Sunglasses","Umbrella","Scarf","Swimsuit"], answer:1},
  {q:"Which of these can you see in the sky only at night?", options:["The Sun","The Stars","Rainbows","Blue Sky"], answer:1},
  {q:"What instrument do we use to measure how hot or cold it is?", options:["Ruler","Scale","Thermometer","Clock"], answer:2},
  {q:"What do we call moving air?", options:["Wind","Water","Dust","Fog"], answer:0},
  {q:"Which planet do we live on?", options:["Mars","Jupiter","Earth","Venus"], answer:2},
  {q:"What appears in the sky when it is sunny and rainy at the same time?", options:["Snow","Rainbow","Thunder","Moon"], answer:1},

  {q:"Which of these animals lives in the ocean?", options:["Rabbit","Whale","Horse","Lion"], answer:1},
  {q:"Where does a bird usually build its home to keep its eggs safe?", options:["Nest","Hive","Den","Stable"], answer:0},
  {q:"Which animal has a hard shell?", options:["Frog","Turtle","Dog","Hamster"], answer:1},
  {q:"A desert is a habitat that is very ________.", options:["Cold","Wet","Dry","Snowy"], answer:2},
  {q:"Which animal is nocturnal, meaning it is active at night?", options:["Butterfly","Squirrel","Owl","Chicken"], answer:2},
  {q:"What do we call an animal that only eats plants?", options:["Herbivore","Carnivore","Omnivore","Hunter"], answer:0},
  {q:"Which habitat is filled with many trees and lots of rain?", options:["Desert","Rainforest","Arctic","Beach"], answer:1},
  {q:"Which of these animals hibernates(sleeps) during the cold winter?", options:["Bear","Bird","Shark","Tiger"], answer:0},
  {q:"What does a caterpillar turn into after it makes a cocoon?", options:["Bee","Butterfly","Ant","Spider"], answer:1},
  {q:"Which animal uses its long trunk to drink water and grab food?", options:["Giraffe","Elephant","Hippo","Zebra"], answer:1},

  {q:"What force do you use when you move a wagon toward you?", options:["Push","Pull","Gravity","Magnet"], answer:1},
  {q:"What force do you use to move a swing away from you?", options:["Push","Pull","Friction","Weight"], answer:0},
  {q:"Which of these will a magnet pick up?", options:["Plastic toy","Metal paperclip","Wood block","Rubber ball"], answer:1},
  {q:"What force pulls everything toward the Earth?", options:["Wind","Gravity","Speed","Sound"], answer:1},
  {q:"Which surface would a toy car move fastest on?", options:["Grass","Sand","Smooth ice","Carpet"], answer:2},
  {q:"To make a heavy box move, you need to apply more ______.", options:["Light","Force","Color","Sound"], answer:1},
  {q:"Which of these is the fastest way for a person to move?", options:["Walking","Crawling","Running","Hopping"], answer:2},
  {q:"What do we call it when an object changes its position?", options:["Rest","Motion","Size","Shape"], answer:1},
  {q:"Which tool has wheels to help move heavy things easily?", options:["Wheelbarrow","Ladder","Hammer","Saw"], answer:0},
  {q:"Which material  is best for making a window because you can see through it?", options:["Wood","Glass","Metal","Paper"], answer:1},

  {q:"What material are most car tires made of?", options:["Rubber","Plastic","Glass","Cotton"], answer:0},
  {q:"Which of these objects will float in a tub water?", options:["Metal spoon","Rock","Plastic duck","Glass marble"], answer:2},
  {q:"Which material comes from trees?", options:["Plastic","Metal","Wood","Glass"], answer:2},
  {q:"Which is these material is waterproof (does not let water through)?", options:["Paper towel","Plastic raincoat","Cotton shirt","Sponge"], answer:1},
  {q:"Which material is soft and used to make sweaters?", options:["Wool","Stone","Metal","Glass"], answer:0},
  {q:"Whar happens to liquid water when it gets ver,very cold ", options:["It Boils","It Disappears","It turns to ice","It turns to steam"], answer:2},
  {q:"Which of these is a natural material (found in nature)?", options:["Plastic","Nylon","Rock","Polyester"], answer:2},
  {q:"Which of these is a healthy snack that grows on a tree?", options:["Candy","An apple","Potato chips","Soda"], answer:1},
  {q:"What should you use to wash the germs off your hands?", options:["Just water","A towel","Soap and water","Paper"], answer:2},
  {q:"How many times a day should you brush your teeth to keep them clean?", options:["Zero","Two","Ten","Once weekly"], answer:1},

  {q:"Which activity helps keep your heart strong and healthy?", options:["Sleeping","Watching TV","Running","Sitting"], answer:2},
  {q:"Why do we wear a helmet when riding a bike or scooter?", options:["To look cool","to keep our head safe","To go faster","To stay dry"], answer:1},
  {q:"Which of these helps you grow big and strong?", options:["Playing video games","Eating vegetables","Staying up late","Eating cake"], answer:1},
  {q:"What should you do when you need to cough or sneeze?", options:["Cough on a friend","Cough into your elbow","Hold your breath","Hide"], answer:1},
  {q:"Which organ pumps blood to your whole body?", options:["Stomach","Brain","Heart","Lungs"], answer:2},
  {q:"What do we call the hard parts inside our body that make up our skeleton?", options:["Muscles","Skin","Bones","Hair"], answer:2},
  {q:"Which of these is a dairy food that helps make your bones strong?", options:["Bread","Milk","Apple","Carrot"], answer:1},
  {q:"Which of these is a natural source of light?", options:["Flashlight","Lamp","The sun","Candle"], answer:2},
  {q:"What do we use to hear music and voices?", options:["Eyes","Ears","Nose","Hands"], answer:1},
  {q:"Which animal makes a very loud roar sound?", options:["Lion","Butterfly","Worm","Snail"], answer:0},

  {q:"What is created when an object blocks the light?", options:["Reflection","Shadow","Rainbow","Fire"], answer:1},
  {q:"Which of these can you see through clearly?", options:["A brick wall","A wooden door","A glass window","A metal pot"], answer:2},
  {q:"What do we call a sound that is very quiet?", options:["A shout","A whisper","A honk","A bang"], answer:1},
  {q:"Which of these objects makes a sound by being hit?", options:["A flute","A violin","A drum","A piano"], answer:2},
  {q:"What helps us see in a dark room?", options:["A fan","A flashlight","A pillow","A book"], answer:1},
  {q:"Which part of the body do we use to see colors?", options:["Ears","Nose","Eyes","Mouth"], answer:2},
  {q:"When you move your hand back and forth very fast to make a sound, it is called a?", options:["Vibration","Jump","Slide","Spin"], answer:0},
  {q:"Which of these is a non-living thing?", options:["A cat","A flower","A rock","A tree"], answer:2},
  {q:" What does a plant need from the sky to grow?", options:["Moon","Sunlight","Stars","Wind"], answer:1},
  {q:"Which of these animals lives in a very cold, snowy place?", options:["Camel","Polar Bear","Elephant","Monkey"], answer:1},
  {q:"What is the name of the gas we breathe in to stay alive?", options:["Water","Oxygen","Food","Dust"], answer:1},
  {q:"Which of these can be recycled?", options:["Food scraps","Paper","Dirt","Leaves"], answer:1},
  {q:"What do we call the water that falls from clouds?", options:["Snow","Rain","Hail","Fog"], answer:1},
  {q:"Which animal hatches from an egg?", options:["Dog","Chicken","Cow","Pig"], answer:1},
  {q:"What do we use to tell the time?", options:["Ruler","Clock","Compass","Map"], answer:1},

  {q:"Which part of a plant takes in water from the soil?", options:["Leaves","Flowers","Roots","Seeds"], answer:2},
  {q:"What do we call the air that surrounds the Earth?", options:["Atmosphere","Ocean","Ground","Space"], answer:0},
  {q:"What does a tiny seed need to start growing into a plant?", options:["Water & soil","Toys and candy","Shoes and socks","A bed and pillow"], answer:0},
  {q:"What is the first stage in the life of a butterfly?", options:["Caterpillar","Egg","Pupa","Adult"], answer:1},
  {q:"Which animal starts its life as a tadpole swimming in water?", options:["Bird","Fish","Frog","Snake"], answer:2},
  {q:"What do we call a baby dog?", options:["Kitten","Chick","Puppy","Cub"], answer:2},
  {q:"What grows out of a seed first to help the plant get water?", options:["Flowers","Roots","Leaves","Fruit"], answer:1},
  {q:"A kitten grows up to be a", options:["Dog","Cat","Lion","Tiger"], answer:1},
  {q:"What does a caterpillar eat a lot of so it can grow big?", options:["Leaves","Pizza","Bark","Insects"], answer:0},
  {q:"Which animal carries its baby in a pouch?", options:["Elephant","Kangaroo","Monkey","Bear"], answer:1},
  {q:"Which of these is a solid, that keeps its shape?", options:["Water","Milk","A wooden block","Air"], answer:2},
  {q:"What state of matter is the water you drink?", options:["Solid","Liquid","Gas","Smoke"], answer:1},

  {q:"Which of these is a gas that we cannot usually see?", options:["Air","Orange juice","An apple","A rock"], answer:0},
  {q:"Which of these items is hard and does not change shape easily?", options:["Rain","Cloud","A metal spoon","Oil"], answer:2},
  {q:"What does Recycle mean?", options:["To throw away","To turn old things into new things","To break things","To buy more"], answer:1},
  {q:"Which of these should we turn off to save energy?", options:["The lights when we leave","The sun","Our breathing","The wind"], answer:0},
  {q:"Which material is best to recycle instead of throwing in the trash?", options:["Food","Aluminum cans","Dirt","Roks"], answer:1},
  
  {q:"What do trees give us that helps us breathe?", options:["Water","Oxygen","Food","Shade"], answer:1},
  {q:"Why should we use a reusable water bottle?", options:["To be heavy","To reduce plastic waste","To spend money","To make trash"], answer:1},
  {q:"Which of these is a way to save water?", options:["Letting a tap run","Turning off the water while brushing teeth","Taking very long shower","Filling the pool every day"], answer:1},
  {q:"What do we call it when we use something again instead of throwing it away?", options:["Reuse","Reject","Remove","Return"], answer:0},
  {q:"Which part of the Earth is mostly covered in water?", options:["Oceans","Mountains","Deserts","Forests"], answer:0},
  {q:"What is pollution?", options:["Something taht makes the Earth dirty","Planting trees","Cleaning your room","Singing"], answer:0},
  {q:"Who can help take care of the Earth?", options:["Only grown-ups","Only teachers","Everyone","Only animals"], answer:2},
  {q:"Which part of a plant grows inside the soil to take in water?", options:["Flower","Leaf","Root","Stem"], answer:2},

  {q:"What do plants need from the sun to grow big and strong?", options:["Food","Light","Toys","Paper"], answer:1},
  {q:"Which animal has a long neck and likes to eat leaves from tall trees?", options:["Lion","Giraffe","Dog","Fish"], answer:1},
  {q:"Which of these is a living thing?", options:["Rock","Flower","Spoon","Ball"], answer:1},
  {q:"What do animals breathe in to stay alive?", options:["Water","Air","Sand","Dirt"], answer:1},
  {q:"Which part of a plant is usually colorful and smells nice?", options:["Stem","Flower","Root","Bark"], answer:1}
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
