const pageBloc = document.getElementById("bloc");
const titleBanner = document.getElementById("title-banner");
const title = document.getElementById("bigTitle");

const firstQuote = document.getElementById("quoteOne");
const secondQuote = document.getElementById("quoteTwo");
const thirdQuote = document.getElementById("quoteThree");

const photoFadeIn = document.getElementById("photoJo");

const reikiPicture = document.getElementById("reikiPic");
const breussPicture = document.getElementById("breussPic");
const refPicture = document.getElementById("refPic");

const firstInfoBox = document.getElementById("infoBoxOne");
const secondInfoBox = document.getElementById("infoBoxTwo");
const thirdInfoBox = document.getElementById("infoBoxThree");

const rBox = document.getElementById("r-box");
const bBox = document.getElementById("b-box");
const refBox = document.getElementById("ref-box");
const reikImage = document.getElementById("ReikImage");
const breussImage = document.getElementById("BreussImage");
const refImage = document.getElementById("RefImage");
const firstText = document.getElementById("first-Text");
const secondText = document.getElementById("second-Text");
const thirdText = document.getElementById("third-Text");
const rMedTitle = document.getElementById("r-MedTitle");
const bMedTitle = document.getElementById("b-MedTitle");
const rfMedTitle = document.getElementById("rf-MedTitle");

window.addEventListener("scroll", function () {
    scrollValue =
      (window.innerHeight + window.scrollY) / document.body.offsetHeight;

    if (scrollValue > 0.05) {
       pageBloc.style.transform = "none";
       titleBanner.style.zIndex = "2";
       title.style.color = "#292626";
    }

    if (scrollValue > 0.07) {
      firstQuote.style.opacity = "1";
      firstQuote.style.transform = "none";
    }

    if (scrollValue > 0.15) {
        reikiPicture.style.opacity = "1";
        reikiPicture.style.transform = "none";
        firstInfoBox.style.opacity = "1";
        firstInfoBox.style.transform = "none";

    }

    if (scrollValue > 0.17) {
        breussPicture.style.opacity = "1";
        breussPicture.style.transform = "none";
        secondInfoBox.style.opacity = "1";
        secondInfoBox.style.transform = "none";
    }

    if (scrollValue > 0.19) {
        refPicture.style.opacity = "1";
        refPicture.style.transform = "none";
        thirdInfoBox.style.opacity = "1";
        thirdInfoBox.style.transform = "none";
    }

    if (scrollValue > 0.25) {
      photoFadeIn.style.opacity = "1";

    }

    if (scrollValue > 0.30) {
      secondQuote.style.opacity = "1";
      secondQuote.style.transform = "none";
 
  }

     if (scrollValue > 0.40) {
       thirdQuote.style.opacity = "1";
       thirdQuote.style.transform = "none";
  }

     rBox.addEventListener("mouseenter", () => { 
       reikImage.style.filter = "grayscale(0)";
       firstText.style.opacity = "1";
       rMedTitle.style.opacity = "1";
 });

     bBox.addEventListener("mouseenter", () => { 
       breussImage.style.filter = "grayscale(0)";
       secondText.style.opacity = "1";
       bMedTitle.style.opacity = "1";
});

     refBox.addEventListener("mouseenter", () => { 
       refImage.style.filter = "grayscale(0)";
       thirdText.style.opacity = "1";
       rfMedTitle.style.opacity = "1";

});

     rBox.addEventListener("mouseleave", () => { 
       reikImage.style.filter = "grayscale(5)";
       firstText.style.opacity = "0.5";
       rMedTitle.style.opacity = "0.5";
 });

     bBox.addEventListener("mouseleave", () => { 
       breussImage.style.filter = "grayscale(5)";
       secondText.style.opacity = "0.5";
       bMedTitle.style.opacity = "0.5";
});

     refBox.addEventListener("mouseleave", () => { 
       refImage.style.filter = "grayscale(5)";
       thirdText.style.opacity = "0.5";
       rfMedTitle.style.opacity = "0.5";

});

});