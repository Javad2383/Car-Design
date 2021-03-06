$(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.alert').alert();
});

window.addEventListener('load', () => document.querySelector('.preloader')
    .classList.add('hidePreloader'));

// --------------- inventory variable ---------------------
const InAllBtn = document.getElementById("InventoryAllBtn");
const InAmericanBtn = document.getElementById("InventoryAmericanBtn");
const InGermanBtn = document.getElementById("InventoryGermanBtn");
const InCard1 = document.getElementById("InventoryCard1");
const InCard2 = document.getElementById("InventoryCard2");
const InCard3 = document.getElementById("InventoryCard3");
const InCard4 = document.getElementById("InventoryCard4");
const InCard5 = document.getElementById("InventoryCard5");
const InCard6 = document.getElementById("InventoryCard6");
const InCard7 = document.getElementById("InventoryCard7");
const InCard8 = document.getElementById("InventoryCard8");
const InCard9 = document.getElementById("InventoryCard9");
const InCard10 = document.getElementById("InventoryCard10");
const InCard11 = document.getElementById("InventoryCard11");
const InCard12 = document.getElementById("InventoryCard12");
const InBottomBtnDown = document.getElementById("InventoryBottomBtnDown")
const InBottomBtnUp = document.getElementById("InventoryBottomBtnUp")

// ---------- American Inventory Btn -----------------
InAmericanBtn.addEventListener("click", AmericanFunction)

function AmericanFunction() {
    InCard2.style.display = "none";
    InCard4.style.display = "none";
    InCard6.style.display = "none";
    InCard8.style.display = "none";
    InCard10.style.display = "none";
    InCard12.style.display = "none";
    InCard1.style.display = "flex";
    InCard3.style.display = "flex";
    InCard5.style.display = "flex";
    InCard7.style.display = "flex";
    InCard9.style.display = "flex";
    InCard11.style.display = "flex";
    InBottomBtnDown.style.display = "none"
}

// ---------- German Inventory Btn -----------------
InGermanBtn.addEventListener("click", GermanFunction)

function GermanFunction() {
    InCard2.style.display = "flex";
    InCard4.style.display = "flex";
    InCard6.style.display = "flex";
    InCard8.style.display = "flex";
    InCard10.style.display = "flex";
    InCard12.style.display = "flex";
    InCard1.style.display = "none";
    InCard3.style.display = "none";
    InCard5.style.display = "none";
    InCard7.style.display = "none";
    InCard9.style.display = "none";
    InCard11.style.display = "none";
    InBottomBtnDown.style.display = "none"
}

// ---------- All Inventory Btn -----------------
InAllBtn.addEventListener("click", AllFunction)

function AllFunction() {
    InCard1.style.display = "flex";
    InCard2.style.display = "flex";
    InCard3.style.display = "flex";
    InCard4.style.display = "flex";
    InCard5.style.display = "flex";
    InCard6.style.display = "flex";
    InBottomBtnDown.style.display = "flex"
    InCard7.style.display = "none";
    InCard8.style.display = "none";
    InCard9.style.display = "none";
    InCard10.style.display = "none";
    InCard11.style.display = "none";
    InCard12.style.display = "none";
}

// ---------- More Inventory Item -----------------
InBottomBtnDown.addEventListener("click", MoreInventoryFunc)

function MoreInventoryFunc() {
    InCard7.style.display = "flex";
    InCard8.style.display = "flex";
    InCard9.style.display = "flex";
    InCard10.style.display = "flex";
    InCard11.style.display = "flex";
    InCard12.style.display = "flex";
    InBottomBtnUp.style.display = "flex";
    InBottomBtnDown.style.display = "none"
}

// ---------- Fever Inventory Item -----------------
InBottomBtnUp.addEventListener("click", FeverInventoryFunc)

function FeverInventoryFunc() {
    InCard7.style.display = "none";
    InCard8.style.display = "none";
    InCard9.style.display = "none";
    InCard10.style.display = "none";
    InCard11.style.display = "none";
    InCard12.style.display = "none";
    InBottomBtnUp.style.display = "none";
    InBottomBtnDown.style.display = "flex"
}

// ----------- Featured Variable ------------------
const FeaturedBtn1 = document.getElementById("FeaturedButton1");
const FeaturedBtn2 = document.getElementById("FeaturedButton2");
const FeaturedBtn3 = document.getElementById("FeaturedButton3");
const FeaturedBtn4 = document.getElementById("FeaturedButton4");
const FeaturedBtn5 = document.getElementById("FeaturedButton5");
const FeaturedImg = document.getElementById("FeaturedImg");

// ----------- Featured Events ------------------
FeaturedBtn1.addEventListener("click", Featured1F)
FeaturedBtn2.addEventListener("click", Featured2F)
FeaturedBtn3.addEventListener("click", Featured3F)
FeaturedBtn4.addEventListener("click", Featured4F)
FeaturedBtn5.addEventListener("click", Featured5F)

// ----------- Featured Functions 1 ------------------
function Featured1F() {
    FeaturedImg.src = "./img/car-german-1.jpeg"
}

// ----------- Featured Functions 2 ------------------
function Featured2F() {
    FeaturedImg.src = "./img/car-german-6.jpg"
}

// ----------- Featured Functions 3 ------------------
function Featured3F() {
    FeaturedImg.src = "./img/carousel-car-1.jpg"
}

// ----------- Featured Functions 4 ------------------
function Featured4F() {
    FeaturedImg.src = "./img/car-american-4.jpeg"
}

// ----------- Featured Functions 5 ------------------
function Featured5F() {
    FeaturedImg.src = "./img/Featured.jpeg"
}

// ----------- newsletters variable ------------------
const newsEmail = document.getElementById("newslettersEmail");
const newsButton = document.getElementById("newslettersButton");

// ----------- newsletters Event ------------------
newsButton.addEventListener("click", newsEmptyFunction)

function newsEmptyFunction()
{
    newsEmail.value = "";
}