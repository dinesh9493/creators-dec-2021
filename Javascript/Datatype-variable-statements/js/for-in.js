let batchesOfKalpita = {
    "2019": {
        batchName: "Newtons", 
        totalNumberOfPeople: 10, 
        names: ["Nikhil", "Karthi", "Pavni", "Pearlin", "Swathi"],
        image: "assets/images/Newtons.png"
    },
    "2020": {
        batchName: "Mavricks", 
        totalNumberOfPeople: 10, 
        image: "assets/images/mavericks.jpg",
        names: ["Sameer", "Pallavi", "Golamma", "Nethra"],
    },
    "2021": {
        batchName: "Creators", 
        totalNumberOfPeople: 19, 
        image: "assets/images/Creators.jpg",
        names: [
            "Sumanth",
            "Nandha",
            "Raja",
            "Laya",
            "Narendra",
            "Saisudha",

            "Bishal",
            "Sammed",
            "Manish",
            "Pranay",
            "Atul",
            "Pradeep",

            "Meghana",
            "Bhushan",
            "Bhavana",
            "Harinatha",
            "Anusha",
            "Nandish",
            "Gorakh",
        ]
    }
};

const templateOfCard = `
<div class="card" style="width: 18rem;">
<img src="***image path***" class="card-img-top" alt="***image alt***">
<div class="card-body">
  <h5 class="card-title">***Card title***</h5>
  <p class="card-text">*** Card Text ***</p>
</div>
<ul class="list-group list-group-flush" ***id of ul***>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
</div>
`;

const cardElement = document.getElementById("loading-card-area");

function fetchDataFromJSON() {
    for(let keyName in  batchesOfKalpita) {
        let temp = templateOfCard;
        temp.replace("***Card title***", keyName);
        cardElement.innerHTML = temp;
    }
};

fetchDataFromJSON();