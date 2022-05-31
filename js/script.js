const currentDate = new Date();
const dateTime =
    "Date / Heure: " +
    currentDate.getDay() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear() +
    " @ " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

document.getElementById("date").innerHTML = dateTime;

// Changer langue

function changeFrench() {
    // menu
    document.getElementById("support-menu").innerHTML = "support.";
    document.getElementById("monde-menu").innerHTML = "monde.";
    document.getElementById("economie-menu").innerHTML = "économie.";
    document.getElementById("russie-menu").innerHTML = "russie.";
    document.getElementById("ukraine-menu").innerHTML = "ukraine.";

    //hero
    let front = String("front");
    document.getElementById("hero-title").innerHTML =
        "L'Ukraine au <span class='red'>front</span>.";
    document.getElementById("hero-p").innerHTML =
        "<span class='blue'>L'horreur présentée en chiffres et en images.</span>";
    document.getElementById("btn-origin").innerHTML = "origine.";

    //ukraine
    document.getElementById("ukraine-title-num").innerHTML =
        "ukraine en <span class='bleu'>chiffres</span>.";
    document.getElementById("deaths").innerHTML =
        "15 000 <span class='red'>morts</span>.";
    document.getElementById("blesse").innerHTML = "1900 blessées";
    document.getElementById("moved").innerHTML = "2.8 millions déplacées";
    document.getElementById("ukraine-title-images").innerHTML =
        "ukraine en <span class='bleu'>images</span>.";
    document.getElementById("batiment").innerHTML = "1700 bâtiments détruits";
    document.getElementById("dommage").innerHTML =
        "119 milliards en <span class='red'>dommages</span>.";

    // russie
    document.getElementById("russie-title").innerHTML =
        "Réaction du peuple russe.";
    document.getElementById("rev").innerHTML = "révoltes.";
    document.getElementById("des").innerHTML = "désaccord.";
    document.getElementById("manif").innerHTML = "manifestations.";

    // Economie
    document.getElementById("econo-title").innerHTML =
        "Chute du <span class='red'>Rouble</span>.";
    document.getElementById("econo-p1").innerHTML =
        "Les États-Unis et l'Union européenne ont déclaré qu'ils excluraient certaines banques russes du système international de paiements bancaires Swift et ont personnellement visé le président russe Vladimir Poutine et son ministre des Affaires étrangères Sergei Lavrov.";
    document.getElementById("econo-p2").innerHTML =
        "Pendant un moment, il fallait plus de <span class='italic'>130 roubles</span> pour faire un dollar américain, et ce jusqu'au 1er janvier.";
}

function changeEnglish() {
    // menu
    document.getElementById("support-menu").innerHTML = "support.";
    document.getElementById("monde-menu").innerHTML = "world.";
    document.getElementById("economie-menu").innerHTML = "economy.";
    document.getElementById("russie-menu").innerHTML = "russia.";
    document.getElementById("ukraine-menu").innerHTML = "ukraine.";

    // hero
    let front = String("frontline");
    document.getElementById("hero-title").innerHTML =
        "Ukraine at the <span class='red'>frontline</span>.";
    document.getElementById("hero-p").innerHTML =
        "<span class='blue'>Horror presented in numbers and pictures.</span>";
    document.getElementById("btn-origin").innerHTML = "origin.";

    // ukraine
    document.getElementById("ukraine-title-num").innerHTML =
        "ukraine in <span class='bleu'>numbers</span>.";
    document.getElementById("deaths").innerHTML =
        "15 000 <span class='red'>deaths</span>.";
    document.getElementById("blesse").innerHTML = "1900 hurted";
    document.getElementById("moved").innerHTML = "2.8 millions moved";
    document.getElementById("ukraine-title-images").innerHTML =
        "ukraine in <span class='bleu'>pictures</span>.";
    document.getElementById("batiment").innerHTML = "1700 buildings destroyed";
    document.getElementById("dommage").innerHTML =
        "119 billions in <span class='red'>damages</span>";

    // russie
    document.getElementById("russie-title").innerHTML =
        "Reaction of russia's people.";
    document.getElementById("rev").innerHTML = "revolution.";
    document.getElementById("des").innerHTML = "revolts.";
    document.getElementById("manif").innerHTML = "manifestations.";

    //Economie
    document.getElementById("econo-title").innerHTML =
        "Fall of the <span class='red'>Rouble</span>.";
    document.getElementById("econo-p1").innerHTML =
        "The United States and the European Union have said they will exclude certain Russian banks from the Swift, the international banking payment system, and have personally targeted Russian President Vladimir Putin and his Foreign Minister Sergei Lavrov.";
    document.getElementById("econo-p2").innerHTML =
        "At some time, we needed more than <span class='italic'>130 roubles</span> to make a single USD. This went on until the first of january.";
}
