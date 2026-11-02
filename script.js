// A karakterek adatai és a hozzájuk tartozó rövid leírások
const karakterek = {
    elsa: {
        nev: "Elsa",
        leiras: "Önálló, erős és megfontolt személyiség vagy. Fontos számodra, hogy önmagad lehess, és megtaláld a saját utadat. Ahogy Elsa, te is sok belső erővel rendelkezel.",
        jel: "❄️"
    },
    aranyhaj: {
        nev: "Aranyhaj",
        leiras: "Vidám, kreatív és kíváncsi vagy. Szereted felfedezni a világot, új dolgokat kipróbálni, és a nehézségek ellenére is pozitív maradni.",
        jel: "🌸"
    },
    vaiana: {
        nev: "Vaiana",
        leiras: "Bátor, kalandvágyó és kitartó személyiség vagy. Ha kitűzöl egy célt, nem adod fel könnyen, és mersz a saját döntéseid alapján haladni.",
        jel: "🌊"
    },
    belle: {
        nev: "Belle",
        leiras: "Kedves, figyelmes és kíváncsi vagy. Szeretsz tanulni, megérteni másokat, és számodra a belső értékek sokkal fontosabbak a külsőségeknél.",
        jel: "🌹"
    }
};

// Megkeressük a teszt űrlapját és az eredmény helyét
const teszt = document.getElementById("szemelyisegTeszt");
const eredmenyDoboz = document.getElementById("eredmeny");

// A teszt elküldésekor lefutó esemény
teszt.addEventListener("submit", function(esemeny) {
    esemeny.preventDefault();

    // Minden karakter pontszámát nulláról indítjuk
    const pontok = {
        elsa: 0,
        aranyhaj: 0,
        vaiana: 0,
        belle: 0
    };

    // Végigmegyünk az öt kérdés válaszain
    for (let i = 1; i <= 5; i++) {
        const valasz = document.querySelector('input[name="q' + i + '"]:checked');

        if (valasz) {
            pontok[valasz.value]++;
        }
    }

    // Megkeressük azt a karaktert, amelyik a legtöbb pontot kapta
    let gyoztes = "elsa";

    for (let karakter in pontok) {
        if (pontok[karakter] > pontok[gyoztes]) {
            gyoztes = karakter;
        }
    }

    // Megjelenítjük a kiválasztott karakter eredményét
    const karakter = karakterek[gyoztes];

    eredmenyDoboz.innerHTML =
        "<h3>" + karakter.jel + " Te " + karakter.nev + " lennél!</h3>" +
        "<p>" + karakter.leiras + "</p>";

    eredmenyDoboz.classList.add("aktiv");
});

// Az űrlap alaphelyzetbe állítása után az eredményt is eltüntetjük
teszt.addEventListener("reset", function() {
    eredmenyDoboz.classList.remove("aktiv");
    eredmenyDoboz.innerHTML = "";
});