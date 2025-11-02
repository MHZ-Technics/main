var Choose =document.getElementById("Choose");
var SelectNameCnt = 0;
var SelectSurahCnt =0;
var SwitchSupport = document.getElementById("Supportme");
var Repeat = document.getElementById("Repeat");
var CurrentTimeEl = document.getElementsByClassName("StartAudio")[0];
var DurationTimeEl = document.getElementsByClassName("EndAudio")[0];
var RepeatCNT=0;
const hidMoshafDown=document.getElementById("DownloadMoshaf");
const hidMoshafExt=document.getElementById("DownloadMoshafExt");
function Close(){
    SwitchSupport.style.display="none"
}
function RepeatSurah(){
    RepeatCNT++;
    Repeat.style.color='#fcb040';
    if (RepeatCNT==2) {
    Repeat.style.color='black';
    RepeatCNT=0;
        }

}

function OpenSupport(){
        SwitchSupport.style.display="block"

}
function ClickFunc() {
    Choose.style.display = "block";
    hidMoshafDown.style.display="none";
    hidMoshafExt.style.display="none";
}
function GetSurahName() {
    var SurahSelected = document.getElementsByName('SurahName')
    for (i = SurahSelected.length-1; i >=0 ; i--) {
        if (SurahSelected[i].checked) {
            var SurahSelection = SurahSelected[i].value;
            var SelectSurahCnt = SurahNameWIndex.SurahNameEnglish.indexOf(SurahSelection);
            StgIndex = SurahNameWIndex.SurahIndex[SelectSurahCnt];
            SurahNameF = SurahNameWIndex.SurahNameEnglish[SelectSurahCnt];
        }
    }
}

function GetSheikhName() {
    var SheikhSelected = document.getElementsByName('SheikhName')
    for (i = 0; i < SheikhSelected.length; i++) {
        if (SheikhSelected[i].checked) {
            var SheikhSelection = SheikhSelected[i].value;
            SelectNameCnt=
            SheikhNameWIndex.SheikhFileIndex.indexOf(SheikhSelection);
            SheikhName = SheikhNameWIndex.SheikhFileIndex[SelectNameCnt];
            SheikhIndex = SheikhNameWIndex.SheikhFileIndex[SelectNameCnt];
        }
        loadQuran(SurahNameF);
        Choose.style.display="none";
        hidMoshafDown.style.display="block";
        hidMoshafExt.style.display="block";

    }

}

var IsPlaying = false;
const StartPlay = document.getElementById("startButton");
const forward = document.getElementById("forwardButton");
const backward = document.getElementById("backwardButton");
const Progress = document.getElementById("progress");
var nameSh = document.getElementById("name");
var SheikhIndex = "";
var SheikhName = "";
var Index = 1;
var index = 0;
var StgIndex = "";
var Initial = true;
var SurahIndex = 0;
var SurahNameF = "";
var HossamAbady = true;
var audioElement = new Audio("media/Sheikh-AhmadAlajmy/001.mp3");
audioElement.addEventListener('ended',function(){
    StartPlay.classList.replace("fa-pause", "fa-play");
    if(RepeatCNT==1){
    start();
}}) ;
const SurahNameWIndex = {
    SurahNameEnglish: [
 "Al-Fatihah"
, "Al-Baqarah"
, "Al-‘Imran"
, "An-Nisa’"
, "Al-Ma’idah"
, "Al-An’am"
, "Al-A’raf"
, "Al-Anfal"
, "Al-Bara’"
, "Yunus"
, "Hud"
, "Yusuf"
, "Ar-Ra’d"
, "Ibrahim"
, "Al-Hijr"
, "An-Nahl"
, "Bani Isra’il"
, "Al-Kahf"
, "Maryam"
, "TaHa"
, "Al-Anbiya’"
, "Al-Hajj"
, "Al-Mu’minun"
, "An-Nur"
, "Al-Furqan"
, "Ash-Shu’ara’"
, "An-Naml"
, "Al-Qasas"
, "Al-‘Ankabut"
, "Ar-Rum"
, "Luqman"
, "As-Sajdah"
, "Al-Ahzab"
, "Al-Saba’"
, "Al-Fatir"
, "YaSin"
, "As-Saffat"
, "Sad"
, "Az-Zumar"
, "Al-Mu’min"
, "HaMim"
, "Ash-Shura"
, "Az-Zukhruf"
, "Ad-Dukhan"
, "Al-Jathiyah"
, "Al-Ahqaf"
, "Muhammad"
, "Al-Fath"
, "Al-Hujurat"
, "Qaf"
, "Ad-Dhariyat"
, "At-Tur"
, "An-Najm"
, "Al-Qamar"
, "Ar-Rahman"
, "Al-Waqi’ah"
, "Al-Hadid"
, "Al-Mujadilah"
, "Al-Hashr"
, "Al-Mumtahanah"
, "As-Saff"
, "Al-Jumu’ah"
, "Al-Munafiqun"
, "At-Taghabun"
, "At-Talaq"
, "At-Tahrim"
, "Al-Mulk"
, "Al-Qalam"
, "Al-Haqqah"
, "Al-Ma’arij"
, "Nuh"
, "Al-Jinn"
, "Al-Muzzammil"
, "Al-Muddaththir"
, "Al-Qiyamah"
, "Al-Insan"
, "Al-Mursalat"
, "An-Naba’"
, "An-Nazi’at"
, "‘Abasa"
, "At-Takwir"
, "Al-Infitar"
, "At-Tatfif"
, "Al-Inshiqaq"
, "Al-Buruj"
, "At-Tariq"
, "Al-A’la"
, "Al-Ghashiyah"
, "Al-Fajr"
, "Al-Balad"
, "Ash-Shams"
, "Al-Lail"
, "Ad-Duha"
, "Al-Inshirah"
, "At-Tin"
, "Al-‘Alaq"
, "Al-Qadr"
, "Al-Bayyinah"
, "Al-Zilzal"
, "Al-‘Adiyat"
, "Al-Qari’ah"
, "At-Takathur"
, "Al-‘Asr"
, "Al-Humazah"
, "Al-Fil"
, "Al-Quraish"
, "Al-Ma’un"
, "Al-Kauthar"
, "Al-Kafirun"
, "An-Nasr"
, "Al-Lahab"
, "Al-Ikhlas"
, "Al-Falaq"
, "An-Nas"
    ],
    SurahName: ["الفاتحة"
    , "البقرة"
    , "آل عمران"
    , "النساء"
    , "المائدة"
    , "الأنعام"
    , "الأعراف"
    , "الأنفال"
    , "التوبة"
    , "يونس"
    , "هود"
    , "يوسف"
    , "الرعد"
    , "إبراهيم"
    , "الحجر"
    , "النحل"
    , "الإسراء"
    , "الكهف"
    , "مريم"
    , "طه"
    , "الأنبياء"
    , "الحج"
    , "المؤمنون"
    , "النور"
    , "الفرقان"
    , "الشعراء"
    , "النمل"
    , "القصص"
    , "العنكبوت"
    , "الروم"
    , "لقمان"
    , "السجدة"
    , "الأحزاب"
    , "سبأ"
    , "فاطر"
    , "يس"
    , "الصافات"
    , "ص"
    , "الزمر"
    , "غافر"
    , "فصلت"
    , "الشورى"
    , "الزخرف"
    , "الدخان"
    , "الجاثية"
    , "الأحقاف"
    , "محمد"
    , "الفتح"
    , "الحجرات"
    , "ق"
    , "الذاريات"
    , "الطور"
    , "النجم"
    , "القمر"
    , "الرحمن"
    , "الواقعة"
    , "الحديد"
    , "المجادلة"
    , "الحشر"
    , "الممتحنة"
    , "الصف"
    , "الجمعة"
    , "المنافقون"
    , "التغابن"
    , "الطلاق"
    , "التحريم"
    , "الملك"
    , "القلم"
    , "الحاقة"
    , "المعارج"
    , "نوح"
    , "الجن"
    , "المزمل"
    , "المدثر"
    , "القيامة"
    , "الإنسان"
    , "المرسلات"
    , "النبأ"
    , "النازعات"
    , "عبس"
    , "التكوير"
    , "الانفطار"
    , "المطففين"
    , "الانشقاق"
    , "البروج"
    , "الطارق"
    , "الأعلى"
    , "الغاشية"
    , "الفجر"
    , "البلد"
    , "الشمس"
    , "الليل"
    , "الضحى"
    , "الشرح"
    , "التين"
    , "العلق"
    , "القدر"
    , "البينة"
    , "الزلزلة"
    , "العاديات"
    , "القارعة"
    , "التكاثر"
    , "العصر"
    , "الهُمزة"
    , "الفيل"
    , "قريش"
    , "الماعون"
    , "الكوثر"
    , "الكافرون"
    , "النصر"
    , "المسد"
    , "الإخلاص"
    , "الفلق"
    , "الناس"],
    SurahIndex: [
  "001"
, "002"
, "003"
, "004"
, "005"
, "006"
, "007"
, "008"
, "009"
, "010"
, "011"
, "012"
, "013"
, "014"
, "015"
, "016"
, "017"
, "018"
, "019"
, "020"
, "021"
, "022"
, "023"
, "024"
, "025"
, "026"
, "027"
, "028"
, "029"
, "030"
, "031"
, "032"
, "033"
, "034"
, "035"
, "036"
, "037"
, "038"
, "039"
, "040"
, "041"
, "042"
, "043"
, "044"
, "045"
, "046"
, "047"
, "048"
, "049"
, "050"
, "051"
, "052"
, "053"
, "054"
, "055"
, "056"
, "057"
, "058"
, "059"
, "060"
, "061"
, "062"
, "063"
, "064"
, "065"
, "066"
, "067"
, "068"
, "069"
, "070"
, "071"
, "072"
, "073"
, "074"
, "075"
, "076"
, "077"
, "078"
, "079"
, "080"
, "081"
, "082"
, "083"
, "084"
, "085"
, "086"
, "087"
, "088"
, "089"
, "090"
, "091"
, "092"
, "093"
, "094"
, "095"
, "096"
, "097"
, "098"
, "099"
, "100"
, "101"
, "102"
, "103"
, "104"
, "105"
, "106"
, "107"
, "108"
, "109"
, "110"
, "111"
, "112"
, "113"
, "114"
]
};
const SheikhNameWIndex = {
    SheikhName: ["سعود الشريم"
                , "أحمد العجمي"
                , "حسام الدين عبادي"
                ,"ماهر المعيقلي"
                ,"محمد أيوب"
                ,"عبد الباسط عبد الصمد"
                ,"ياسر الدوسري"
                ,"علي الحذيفي"
                ,"-الحصري-بمد المنفصل"
                ,"الحصري"
                ,"مشاري العفاسي"
                ,"محمد جبريل"
                ,"محمد المنشاوي"
                ,"هاني رفاعي"
                ,"عبد المحسن القاسم"],
    SheikhFileIndex: ["Alshorim",
                      "AhmadAlajmy"
                     ,"HossamAbady"
                     ,"MaherAlma3iqly"
                     ,"MohamedAyoub"
                     ,"AbdElbaset"
                     ,"YaserAldosry"
                     ,"Alhozify"
                     ,"AlhosarryLongMad"
                     ,"hosary"
                     ,"MasharyAlafasy"
                     ,"MuhammedJibree"
                     ,'MohammedAlmanchawi'
                     ,"HaniRefay"
                     ,"AbdelMohsinAlkasem"]
}

audioElement.addEventListener("timeupdate", UpdateProgressBar);

function UpdateProgressBar(e) {
    if (IsPlaying == true) {
        const {
            duration,
            currentTime
        } = e.target;
        var ProgressPercentage = (currentTime / duration) * 100;
        Progress.style.width = ProgressPercentage + "%";
        let durationHours = Math.floor(duration/60/60);
        if (durationHours<10){
            durationHours=`0${durationHours}`;
        }
        let durationMinutes = Math.floor(duration/60%60);
        if (durationMinutes<10){
            durationMinutes=`0${durationMinutes}`;
        }
        let durationSecond =Math.floor(duration%60);
        if (durationSecond<10){
            durationSecond=`0${durationSecond}`;
        }
        DurationTimeEl.innerHTML=`${durationHours}:${durationMinutes}:${durationSecond}`;
        
        let currentTimeHours = Math.floor(currentTime/60/60);
        if (currentTimeHours<10){
            currentTimeHours=`0${currentTimeHours}`;
        }
        let currentTimeMinutes = Math.floor(currentTime/60%60);
        if (currentTimeMinutes<10){
            currentTimeMinutes=`0${currentTimeMinutes}`;
        }
        let currentTimeSecond =Math.floor(currentTime%60);
        if (currentTimeSecond<10){
            currentTimeSecond=`0${currentTimeSecond}`;
        }
        CurrentTimeEl.textContent=`${currentTimeHours}:${currentTimeMinutes}:${currentTimeSecond}`;
        localStorage.setItem("UpdateProgressBar_en",Progress.style.width);
        localStorage.setItem("DurationTimeEl_en",DurationTimeEl.innerHTML);
        localStorage.setItem("CurrentTimeEl_en",CurrentTimeEl.innerHTML);

    }
}
function start() {
    audioElement.play();
    StartPlay.classList.replace("fa-play", "fa-pause");
    IsPlaying = true;
};
function stop() {
    audioElement.pause();
    StartPlay.classList.replace("fa-pause","fa-play");
    IsPlaying = false;

};
StartPlay.addEventListener("click", () => {
    IsPlaying ? stop() : start()
});
var progressbars = document.getElementsByClassName("progressbar")[0];
progressbars.addEventListener("click",SetProgressbar);
function SetProgressbar(e){
    const width = this.clientWidth;
    const ClickX = e.offsetX;
    const { duration} = audioElement ;
    audioElement.currentTime = (ClickX/width) * duration;
}
forward.addEventListener("click", Forward);
backward.addEventListener("click", Backward);
function Forward() {
    if (SelectSurahCnt > 112) {
    SelectSurahCnt = 0;
    SurahNameF = SurahNameWIndex.SurahNameEnglish[SelectSurahCnt];
    StgIndex = SurahNameWIndex.SurahIndex[SelectSurahCnt];
    } 
    else {
        SelectSurahCnt++;
        SurahNameF = SurahNameWIndex.SurahNameEnglish[SelectSurahCnt];
        StgIndex = SurahNameWIndex.SurahIndex[SelectSurahCnt];
    }
        ClearProgress();
        loadQuran(SurahNameF);
        stop();
};


function Backward() {
    if (SelectSurahCnt == 0) {
        SelectSurahCnt = 113;
    SurahNameF = SurahNameWIndex.SurahNameEnglish[SelectSurahCnt];
    StgIndex = SurahNameWIndex.SurahIndex[SelectSurahCnt];
    } 
    else {
        SelectSurahCnt--;
        SurahNameF = SurahNameWIndex.SurahNameEnglish[SelectSurahCnt];
        StgIndex = SurahNameWIndex.SurahIndex[SelectSurahCnt];
    }
    ClearProgress();
    loadQuran(SurahNameF);
    stop();
}

function loadQuran(SurahNameF) {

    if (IsPlaying == true) {
        Progress.style.width = 0;
        stop();
    }

    title.textContent = SurahNameF;
    artist.textContent = SheikhName;
    audioElement.src = "../media/Sheikh-" + SheikhIndex + "/" + StgIndex + ".mp3";
    localStorage.setItem("SurahName_en" , SurahNameF);
    localStorage.setItem("stgindex_en", StgIndex);
    localStorage.setItem("sheikhname_en",SheikhName);
    localStorage.setItem("sheikhindex_en",SheikhIndex);


};
var Elm = document.getElementById("MainScreen");
Elm.style.height = screen.height + "px";
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 , 15 ,16 , 17 , 18 , 19 , 20];
var WallNum = 0;
function OnloadWall() {

    while (WallNum < number.length - 1) {
        var img = document.createElement("img");
        img.setAttribute("src","../images/Wall/Wall" + number[WallNum+1] + ".webp");
        img.setAttribute("hidden" , "hidden");
        Elm.appendChild(img);
        WallNum++;
        Elm.removeChild(img);
        if (WallNum == number.length - 1) {
            WallNum=0;
            break
        }
    }
};
setTimeout(OnloadWall,500);
function ChangeWall() {

    while (WallNum < number.length - 1) {
        WallNum++;
        Elm.style.backgroundImage = "url(../images/Wall/Wall" + number[WallNum] + ".webp)";
        if (WallNum == number.length - 1) {
            WallNum = -1;
            
        }
        break;
    }

};
setInterval(ChangeWall, 7000);
if(WallNum==0){
    SurahNameF = localStorage.getItem("SurahName_en");
    StgIndex= localStorage.getItem("stgindex_en");
    SheikhName =localStorage.getItem("sheikhname_en");
    SheikhIndex= localStorage.getItem("sheikhindex_en");
    audioElement.currentTime=localStorage.getItem("CurrentTimeWidth_en");
    Progress.style.width = localStorage.getItem("UpdateProgressBar_en");
    DurationTimeEl.innerHTML= localStorage.getItem("DurationTimeEl_en");
    CurrentTimeEl.innerHTML= localStorage.getItem("CurrentTimeEl_en");
if(SurahNameF){
loadQuran(SurahNameF);
}
}
setInterval(CheckTimeChange , 1500);
function CheckTimeChange(){
localStorage.setItem("CurrentTimeWidth_en",audioElement.currentTime);
}
function ClearProgress(){
    localStorage.setItem("UpdateProgressBar_en",0);
    localStorage.setItem("DurationTimeEl_en","00:00");
    localStorage.setItem("CurrentTimeEl_en","00:00");
    Progress.style.width=0;
    CurrentTimeEl.innerHTML="00:00";
    DurationTimeEl.innerHTML="00:00";
}
if(screen.height<parseInt("500")){
    Elm.style.height = 100 +"%" ;

}