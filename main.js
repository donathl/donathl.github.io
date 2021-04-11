let currentPhoto = 0;
let ImagesData = [
    {
        photo: `Images/photo1.png`,
        title: "Premier League",
        description: `Top Teams of Premier League`,
    },
    {
        photo: `Images/photo2.png`,
        title: "Manchester United",
        description: `Top Champions of the Premier League`,
    },
    {
        photo: `Images/photo3.png`,
        title: "Manchester City",
        description: `Blue side of Manchester`,
    },
    {
        photo: `Images/photo4.png`,
        title: "Liverpool",
        description: `Top Teams of the Mersey-side`,
    },
    {
        photo: `Images/photo5.png`,
        title: "Chelsea",
        description: `Sponsored by Abramovics`,
    },
    {
        photo: `Images/photo6.png`,
        title: "Arsenal",
        description: `The Unbeaten Teams in 2004`
    },
    {
        photo: `Images/photo7.jpg`,
        title: "Tottenham",
        description: `The Spurs`
    },
    {
        photo: `Images/photo1.png`,
        title: "Premier League",
        description: `Top Teams of Premier League`,
    },
    {
        photo: `Images/photo2.png`,
        title: "Manchester United",
        description: `Top Champions of the Premier League`,
    },
    {
        photo: `Images/photo3.png`,
        title: "Manchester City",
        description: `Blue side of Manchester`,
    },
    {
        photo: `Images/photo5.png`,
        title: "Chelsea",
        description: `Sponsored by Abramovics`,
    },
    {
        photo: `Images/photo6.png`,
        title: "Arsenal",
        description: `The Unbeaten Teams in 2004`
    },
    {
        photo: `Images/photo7.jpg`,
        title: "Tottenham",
        description: `The Spurs`
    }
];

ImagesData.forEach((item, index) => {
    $('#thumbnails').append(
        `<section>
        <p>${item.title}</p>
        <div class="thumbnail" data-index="${index}">
        <img src="${item.photo}" data-index = "${index}"></div>
        </section>`);



    $('.thumbnail').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        // indexClicked is now a string! if you need it as a number you have to change it
        // because for example "1" + 1 is going to be "11" and not 2
        currentPhoto = parseInt(indexClicked);
        // now numberIndex is a number
        loadPhoto(currentPhoto)
    });
});


let loadPhoto = (photoNumber) => {
    $(`#photo`).attr(`src`, ImagesData[photoNumber].photo);
    $(`#photo_title`).text(ImagesData[photoNumber].title);
    $(`#photo_desc`).text(ImagesData[photoNumber].description);
//fotó kiválasztás törlése
    for(let i=0; i<ImagesData.length; i++) {
        document.getElementsByClassName(`thumbnail`) [i].classList.remove(`selected`)
    }
//fotó kiválasztás megjelenítése
    document.getElementsByClassName(`thumbnail`) [currentPhoto].classList.add(`selected`)


};

loadPhoto(currentPhoto)

$("#right_arrow").click(() => {
    if (currentPhoto < ImagesData.length - 1) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto)
})

$("#left_arrow").click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto)
})

