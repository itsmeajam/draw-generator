const playerList = document.querySelector('.playerList ol');

let oriPlayers = ["Ahmad Khairi Bin Mohamed Nawi",
    "Ahmad Shahir Bin Nordin",
    "Mohd Bunyamin Umar",
    "Muhammad Akmal Bin Norazme",
    "Mohd Ashrul Sani B. Mohd Hussain",
    "Muhammad Hilmi Bin Wahid",
    "Adam Bin Abd Rashid",
    "Muhamad Afiq Bin Hamzah",
    "Muhammad Khairul Razikin Bin Abdul Razak",
    "Ahmad Syahid Bin Mohd Shafie",
    "Abu Zarin Abd Rahim",
    "Muhammad Asim Bin Salleh Sani",
    "Ahmad Hanafi",
    "Abdul Qayyum Bin Dzolkifli",
    "Muhammad Fikrie Bin Zeti Akhtar",
    "Sharul Ikhmal",
    "Akbar Bin Azmi",
    "Muhammad Nabil Hasif Bin Samuri",
    "Mohd Muin Bin Sani",
    "Ahmad Fauzan Yahaya",
    "Muhammad Norman Bin Abdullah",
    "Umar Bin Ab Aziz",
    "Mohammad Izzat Bin Mohd Amin",
    "Muhammad Amirul Syafiq Bin Imran",
    "Mohd Faizal Md Taib",
    "Firdan Darwis Bin Mohd Sani",
    "Masrulsyazlie Bin Abu Talib",
    "Mohammad Aidi B. Mohamed Jamal",
    "Muhammad Nizam Bin Zamnihar",
    "Fizal Bin Abdul Jamel",
    "Ahmad Muzhafar",
    "Muhammad Fathurrahman Bin Muslih",
    "Sharir Izzuan Bin Amir",
    "Mat Noor Bin Ramli",
    "Hairul Izwan Abduk Razak",
    "Mahadhir Bin zahar",
    "Mohamed Asry Mohamed Ramly",
    "Mohamad Murizanum Bin Mohamad Mushaari",
    "Mohamad Rofizan Bin Abdul Rahman",
    "Mohd Saufy Zulfadly Bin Ruzailee",
    "Mohd Ismail Ahmad",
    "Wan Ahmad Fadhil",
    "Muhammad Nur Islam Bin Abdul Rahman",
    "Mohd Udzair Bin Mohamad Zaid",
    "Muhammad Faiz Bin Osman",
    "Muhammad Aiman Solahuddin Bin Khairul Izani",
    "Muhammad Shauqi Syahid Bin Ainudin",
    "Ahmad Zuhdi Bin Suradin",
    "Muhammad Hafizuddin Bin Md Yusof",
    "Mohd Badrul Bin Samad",
    "Abdul Hakim Bin Azizul",
    "Abdul Aziz Bin Achsan",
    "Mohd Noradli Bin Hamdan",
    "Thanesh a/l Vadiwil",
    "Muhammad Rafid Bin Anuar",
    "Muhammad Faizal Bin Isahak",
    "Mohd Fauzie Bin Ahmad Osasi",
    "Candra Prabha Pradipta",
    "Mohd Nazib Bin Balahim",
    "Rosiddin Harahap",
    "Yasir Bin Ramlee",
    "Syukur B Mohd Sanusi",
    "Ahmad Hasyimi Bin Che Pa",
    "Mohd Ridzuan Saad"];

let players = ["Ahmad Khairi Bin Mohamed Nawi",
"Ahmad Shahir Bin Nordin",
"Mohd Bunyamin Umar",
"Muhammad Akmal Bin Norazme",
"Mohd Ashrul Sani B. Mohd Hussain",
"Muhammad Hilmi Bin Wahid",
"Adam Bin Abd Rashid",
"Muhamad Afiq Bin Hamzah",
"Muhammad Khairul Razikin Bin Abdul Razak",
"Ahmad Syahid Bin Mohd Shafie",
"Abu Zarin Abd Rahim",
"Muhammad Asim Bin Salleh Sani",
"Ahmad Hanafi",
"Abdul Qayyum Bin Dzolkifli",
"Muhammad Fikrie Bin Zeti Akhtar",
"Sharul Ikhmal",
"Akbar Bin Azmi",
"Muhammad Nabil Hasif Bin Samuri",
"Mohd Muin Bin Sani",
"Ahmad Fauzan Yahaya",
"Muhammad Norman Bin Abdullah",
"Umar Bin Ab Aziz",
"Mohammad Izzat Bin Mohd Amin",
"Muhammad Amirul Syafiq Bin Imran",
"Mohd Faizal Md Taib",
"Firdan Darwis Bin Mohd Sani",
"Masrulsyazlie Bin Abu Talib",
"Mohammad Aidi B. Mohamed Jamal",
"Muhammad Nizam Bin Zamnihar",
"Fizal Bin Abdul Jamel",
"Ahmad Muzhafar",
"Muhammad Fathurrahman Bin Muslih",
"Sharir Izzuan Bin Amir",
"Mat Noor Bin Ramli",
"Hairul Izwan Abduk Razak",
"Mahadhir Bin zahar",
"Mohamed Asry Mohamed Ramly",
"Mohamad Murizanum Bin Mohamad Mushaari",
"Mohamad Rofizan Bin Abdul Rahman",
"Mohd Saufy Zulfadly Bin Ruzailee",
"Mohd Ismail Ahmad",
"Wan Ahmad Fadhil",
"Muhammad Nur Islam Bin Abdul Rahman",
"Mohd Udzair Bin Mohamad Zaid",
"Muhammad Faiz Bin Osman",
"Muhammad Aiman Solahuddin Bin Khairul Izani",
"Muhammad Shauqi Syahid Bin Ainudin",
"Ahmad Zuhdi Bin Suradin",
"Muhammad Hafizuddin Bin Md Yusof",
"Mohd Badrul Bin Samad",
"Abdul Hakim Bin Azizul",
"Abdul Aziz Bin Achsan",
"Mohd Noradli Bin Hamdan",
"Thanesh a/l Vadiwil",
"Muhammad Rafid Bin Anuar",
"Muhammad Faizal Bin Isahak",
"Mohd Fauzie Bin Ahmad Osasi",
"Candra Prabha Pradipta",
"Mohd Nazib Bin Balahim",
"Rosiddin Harahap",
"Yasir Bin Ramlee",
"Syukur B Mohd Sanusi",
"Ahmad Hasyimi Bin Che Pa",
"Mohd Ridzuan Saad"];

function getPlayerList() {
    for (const player of players) {
        // const splitPlayer = player.split(":");
        // const number = splitPlayer[0];
        // const name = splitPlayer[1];
        // const itemText = `${number}. ${name}`;
        const listItem = document.createElement('li');
        listItem.textContent = player;
        playerList.appendChild(listItem);
    }
};

getPlayerList();

// Create element of Group 1
// 1. Alpha 1 - Player 1
const alpha1Player1 = document.querySelector('.alpha1-player1');
const undiAlpha1Player1 = document.querySelector('.undi-alpha1-player1');
undiAlpha1Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha1Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 1 - Player 2
const alpha1Player2 = document.querySelector('.alpha1-player2');
const undiAlpha1Player2 = document.querySelector('.undi-alpha1-player2');
undiAlpha1Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha1Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 1 - Player 1
const bravo1Player1 = document.querySelector('.bravo1-player1');
const undiBravo1Player1 = document.querySelector('.undi-bravo1-player1');
undiBravo1Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo1Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 1 - Player 2
const bravo1Player2 = document.querySelector('.bravo1-player2');
const undiBravo1Player2 = document.querySelector('.undi-bravo1-player2');
undiBravo1Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo1Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 1 - Player 1
const charlie1Player1 = document.querySelector('.charlie1-player1');
const undiCharlie1Player1 = document.querySelector('.undi-charlie1-player1');
undiCharlie1Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie1Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 1 - Player 2
const charlie1Player2 = document.querySelector('.charlie1-player2');
const undiCharlie1Player2 = document.querySelector('.undi-charlie1-player2');
undiCharlie1Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie1Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 1 - Player 1
const delta1Player1 = document.querySelector('.delta1-player1');
const undiDelta1Player1 = document.querySelector('.undi-delta1-player1');
undiDelta1Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta1Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 1 - Player 2
const delta1Player2 = document.querySelector('.delta1-player2');
const undiDelta1Player2 = document.querySelector('.undi-delta1-player2');
undiDelta1Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta1Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 2
// 1. Alpha 2 - Player 1
const alpha2Player1 = document.querySelector('.alpha2-player1');
const undiAlpha2Player1 = document.querySelector('.undi-alpha2-player1');
undiAlpha2Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha2Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 2 - Player 2
const alpha2Player2 = document.querySelector('.alpha2-player2');
const undiAlpha2Player2 = document.querySelector('.undi-alpha2-player2');
undiAlpha2Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha2Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 2 - Player 1
const bravo2Player1 = document.querySelector('.bravo2-player1');
const undiBravo2Player1 = document.querySelector('.undi-bravo2-player1');
undiBravo2Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo2Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 2 - Player 2
const bravo2Player2 = document.querySelector('.bravo2-player2');
const undiBravo2Player2 = document.querySelector('.undi-bravo2-player2');
undiBravo2Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo2Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 2 - Player 1
const charlie2Player1 = document.querySelector('.charlie2-player1');
const undiCharlie2Player1 = document.querySelector('.undi-charlie2-player1');
undiCharlie2Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie2Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 2 - Player 2
const charlie2Player2 = document.querySelector('.charlie2-player2');
const undiCharlie2Player2 = document.querySelector('.undi-charlie2-player2');
undiCharlie2Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie2Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 2 - Player 1
const delta2Player1 = document.querySelector('.delta2-player1');
const undiDelta2Player1 = document.querySelector('.undi-delta2-player1');
undiDelta2Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta2Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 2 - Player 2
const delta2Player2 = document.querySelector('.delta2-player2');
const undiDelta2Player2 = document.querySelector('.undi-delta2-player2');
undiDelta2Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta2Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 3
// 1. Alpha 3 - Player 1
const alpha3Player1 = document.querySelector('.alpha3-player1');
const undiAlpha3Player1 = document.querySelector('.undi-alpha3-player1');
undiAlpha3Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha3Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 3 - Player 2
const alpha3Player2 = document.querySelector('.alpha3-player2');
const undiAlpha3Player2 = document.querySelector('.undi-alpha3-player2');
undiAlpha3Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha3Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 3 - Player 1
const bravo3Player1 = document.querySelector('.bravo3-player1');
const undiBravo3Player1 = document.querySelector('.undi-bravo3-player1');
undiBravo3Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo3Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 3 - Player 2
const bravo3Player2 = document.querySelector('.bravo3-player2');
const undiBravo3Player2 = document.querySelector('.undi-bravo3-player2');
undiBravo3Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo3Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 3 - Player 1
const charlie3Player1 = document.querySelector('.charlie3-player1');
const undiCharlie3Player1 = document.querySelector('.undi-charlie3-player1');
undiCharlie3Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie3Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 3 - Player 2
const charlie3Player2 = document.querySelector('.charlie3-player2');
const undiCharlie3Player2 = document.querySelector('.undi-charlie3-player2');
undiCharlie3Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie3Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 3 - Player 1
const delta3Player1 = document.querySelector('.delta3-player1');
const undiDelta3Player1 = document.querySelector('.undi-delta3-player1');
undiDelta3Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta3Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 3 - Player 2
const delta3Player2 = document.querySelector('.delta3-player2');
const undiDelta3Player2 = document.querySelector('.undi-delta3-player2');
undiDelta3Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta3Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 4
// 1. Alpha 4 - Player 1
const alpha4Player1 = document.querySelector('.alpha4-player1');
const undiAlpha4Player1 = document.querySelector('.undi-alpha4-player1');
undiAlpha4Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha4Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 4 - Player 2
const alpha4Player2 = document.querySelector('.alpha4-player2');
const undiAlpha4Player2 = document.querySelector('.undi-alpha4-player2');
undiAlpha4Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha4Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 4 - Player 1
const bravo4Player1 = document.querySelector('.bravo4-player1');
const undiBravo4Player1 = document.querySelector('.undi-bravo4-player1');
undiBravo4Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo4Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 4 - Player 2
const bravo4Player2 = document.querySelector('.bravo4-player2');
const undiBravo4Player2 = document.querySelector('.undi-bravo4-player2');
undiBravo4Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo4Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 4 - Player 1
const charlie4Player1 = document.querySelector('.charlie4-player1');
const undiCharlie4Player1 = document.querySelector('.undi-charlie4-player1');
undiCharlie4Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie4Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 4 - Player 2
const charlie4Player2 = document.querySelector('.charlie4-player2');
const undiCharlie4Player2 = document.querySelector('.undi-charlie4-player2');
undiCharlie4Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie4Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 4 - Player 1
const delta4Player1 = document.querySelector('.delta4-player1');
const undiDelta4Player1 = document.querySelector('.undi-delta4-player1');
undiDelta4Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta4Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 4 - Player 2
const delta4Player2 = document.querySelector('.delta4-player2');
const undiDelta4Player2 = document.querySelector('.undi-delta4-player2');
undiDelta4Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta4Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 5
// 1. Alpha 5 - Player 1
const alpha5Player1 = document.querySelector('.alpha5-player1');
const undiAlpha5Player1 = document.querySelector('.undi-alpha5-player1');
undiAlpha5Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha5Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 5 - Player 2
const alpha5Player2 = document.querySelector('.alpha5-player2');
const undiAlpha5Player2 = document.querySelector('.undi-alpha5-player2');
undiAlpha5Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha5Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 5 - Player 1
const bravo5Player1 = document.querySelector('.bravo5-player1');
const undiBravo5Player1 = document.querySelector('.undi-bravo5-player1');
undiBravo5Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo5Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 5 - Player 2
const bravo5Player2 = document.querySelector('.bravo5-player2');
const undiBravo5Player2 = document.querySelector('.undi-bravo5-player2');
undiBravo5Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo5Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 5 - Player 1
const charlie5Player1 = document.querySelector('.charlie5-player1');
const undiCharlie5Player1 = document.querySelector('.undi-charlie5-player1');
undiCharlie5Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie5Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 5 - Player 2
const charlie5Player2 = document.querySelector('.charlie5-player2');
const undiCharlie5Player2 = document.querySelector('.undi-charlie5-player2');
undiCharlie5Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie5Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 5 - Player 1
const delta5Player1 = document.querySelector('.delta5-player1');
const undiDelta5Player1 = document.querySelector('.undi-delta5-player1');
undiDelta5Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta5Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 5 - Player 2
const delta5Player2 = document.querySelector('.delta5-player2');
const undiDelta5Player2 = document.querySelector('.undi-delta5-player2');
undiDelta5Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta5Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 6
// 1. Alpha 6 - Player 1
const alpha6Player1 = document.querySelector('.alpha6-player1');
const undiAlpha6Player1 = document.querySelector('.undi-alpha6-player1');
undiAlpha6Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha6Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 6 - Player 2
const alpha6Player2 = document.querySelector('.alpha6-player2');
const undiAlpha6Player2 = document.querySelector('.undi-alpha6-player2');
undiAlpha6Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha6Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 6 - Player 1
const bravo6Player1 = document.querySelector('.bravo6-player1');
const undiBravo6Player1 = document.querySelector('.undi-bravo6-player1');
undiBravo6Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo6Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 6 - Player 2
const bravo6Player2 = document.querySelector('.bravo6-player2');
const undiBravo6Player2 = document.querySelector('.undi-bravo6-player2');
undiBravo6Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo6Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 6 - Player 1
const charlie6Player1 = document.querySelector('.charlie6-player1');
const undiCharlie6Player1 = document.querySelector('.undi-charlie6-player1');
undiCharlie6Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie6Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 6 - Player 2
const charlie6Player2 = document.querySelector('.charlie6-player2');
const undiCharlie6Player2 = document.querySelector('.undi-charlie6-player2');
undiCharlie6Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie6Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 6 - Player 1
const delta6Player1 = document.querySelector('.delta6-player1');
const undiDelta6Player1 = document.querySelector('.undi-delta6-player1');
undiDelta6Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta6Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 6 - Player 2
const delta6Player2 = document.querySelector('.delta6-player2');
const undiDelta6Player2 = document.querySelector('.undi-delta6-player2');
undiDelta6Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta6Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 7
// 1. Alpha 7 - Player 1
const alpha7Player1 = document.querySelector('.alpha7-player1');
const undiAlpha7Player1 = document.querySelector('.undi-alpha7-player1');
undiAlpha7Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha7Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 7 - Player 2
const alpha7Player2 = document.querySelector('.alpha7-player2');
const undiAlpha7Player2 = document.querySelector('.undi-alpha7-player2');
undiAlpha7Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha7Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 7 - Player 1
const bravo7Player1 = document.querySelector('.bravo7-player1');
const undiBravo7Player1 = document.querySelector('.undi-bravo7-player1');
undiBravo7Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo7Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo 7 - Player 2
const bravo7Player2 = document.querySelector('.bravo7-player2');
const undiBravo7Player2 = document.querySelector('.undi-bravo7-player2');
undiBravo7Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo7Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 7 - Player 1
const charlie7Player1 = document.querySelector('.charlie7-player1');
const undiCharlie7Player1 = document.querySelector('.undi-charlie7-player1');
undiCharlie7Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie7Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 7 - Player 2
const charlie7Player2 = document.querySelector('.charlie7-player2');
const undiCharlie7Player2 = document.querySelector('.undi-charlie7-player2');
undiCharlie7Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie7Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 7 - Player 1
const delta7Player1 = document.querySelector('.delta7-player1');
const undiDelta7Player1 = document.querySelector('.undi-delta7-player1');
undiDelta7Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta7Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 7 - Player 2
const delta7Player2 = document.querySelector('.delta7-player2');
const undiDelta7Player2 = document.querySelector('.undi-delta7-player2');
undiDelta7Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta7Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Create element of Group 8
// 1. Alpha 8 - Player 1
const alpha8Player1 = document.querySelector('.alpha8-player1');
const undiAlpha8Player1 = document.querySelector('.undi-alpha8-player1');
undiAlpha8Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha8Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 2. Alpha 8 - Player 2
const alpha8Player2 = document.querySelector('.alpha8-player2');
const undiAlpha8Player2 = document.querySelector('.undi-alpha8-player2');
undiAlpha8Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    alpha8Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 3. Bravo 8 - Player 1
const bravo8Player1 = document.querySelector('.bravo8-player1');
const undiBravo8Player1 = document.querySelector('.undi-bravo8-player1');
undiBravo8Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo8Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 4. Bravo v - Player 2
const bravo8Player2 = document.querySelector('.bravo8-player2');
const undiBravo8Player2 = document.querySelector('.undi-bravo8-player2');
undiBravo8Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    bravo8Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 5. Charlie 8 - Player 1
const charlie8Player1 = document.querySelector('.charlie8-player1');
const undiCharlie8Player1 = document.querySelector('.undi-charlie8-player1');
undiCharlie8Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie8Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 6. Charlie 8 - Player 2
const charlie8Player2 = document.querySelector('.charlie8-player2');
const undiCharlie8Player2 = document.querySelector('.undi-charlie8-player2');
undiCharlie8Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    charlie8Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 7. Delta 8 - Player 1
const delta8Player1 = document.querySelector('.delta8-player1');
const undiDelta8Player1 = document.querySelector('.undi-delta8-player1');
undiDelta8Player1.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta8Player1.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// 8. Delta 8 - Player 2
const delta8Player2 = document.querySelector('.delta8-player2');
const undiDelta8Player2 = document.querySelector('.undi-delta8-player2');
undiDelta8Player2.addEventListener('click', () => {
    let playerIndex = Math.floor(Math.random() * players.length);
    const playerName = players[playerIndex];
    delta8Player2.innerHTML = playerName;
    players = players.filter(a => a !== playerName);
    playerList.textContent = '';
    getPlayerList();  
});

// Knockout
const gameA = [
    'Kumpulan 2',
    'Kumpulan 3',
    'Kumpulan 4',
    'Kumpulan 5'
];







// btnUndi.addEventListener('click', () => {
//     let playerIndex = Math.floor(Math.random() * players.length);
//     const playerName = players[playerIndex];
//     selectedPlayerOutput.innerHTML = playerName
//     players = players.filter(a => a !== playerName);
//     playerList.textContent = '';
//     getPlayerList();

// })

// sumbitJumlahPemain.addEventListener('click', () => {
//     totalPlayer = Number(jumlahPemain.value);
//     const numArray = [];
//     for (let i = 1; i <= totalPlayer; i++) {
//         numArray.push(i);
//     }
//     jumlahPemain.value = '';
//     jumlahPemain.focus();
// });

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

// drawSubmit.addEventListener('click', () => {
//     document.getElementById("demo").innerHTML =
//         Math.floor(Math.random() * totalPlayer) + 1;
// });

