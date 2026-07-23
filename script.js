// Lista de modelos
const celulares = {
    iphone: [
        "iPhone 6", "iPhone 6 Plus", "iPhone 6s", "iPhone 6s Plus",
        "iPhone 7", "iPhone 7 Plus",
        "iPhone 8", "iPhone 8 Plus",
        "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
        "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
        "iPhone SE (2020)", "iPhone SE (2022)",
        "iPhone 12 Mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
        "iPhone 13 Mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
        "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
        "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
        "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16e"
    ],

    samsung: [
        "Galaxy A01", "Galaxy A01 Core",
        "Galaxy A02", "Galaxy A02s",
        "Galaxy A03", "Galaxy A03s", "Galaxy A03 Core",
        "Galaxy A04", "Galaxy A04s", "Galaxy A0e",
        "Galaxy A05", "Galaxy A05s",
        "Galaxy A06",
        "Galaxy A07",
        "Galaxy A10", "Galaxy A10s", "Galaxy A10e",
        "Galaxy A11",
        "Galaxy A12",
        "Galaxy A13",
        "Galaxy A14",
        "Galaxy A15",
        "Galaxy A16",
        "Galaxy A17",
        "Galaxy A20", "Galaxy A20e", "Galaxy A20s",
        "Galaxy A21", "Galaxy A21s",
        "Galaxy A22",
        "Galaxy A23",
        "Galaxy A24",
        "Galaxy A25",
        "Galaxy A26",
        "Galaxy A30", "Galaxy A30s",
        "Galaxy A31",
        "Galaxy A32",
        "Galaxy A33",
        "Galaxy A34",
        "Galaxy A35",
        "Galaxy A36",
        "Galaxy A40", "Galaxy A40s",
        "Galaxy A41",
        "Galaxy A42",
        "Galaxy A43",
        "Galaxy A44",
        "Galaxy A45",
        "Galaxy A46",
        "Galaxy A50",
        "Galaxy A51",
        "Galaxy A52", "Galaxy A52s",
        "Galaxy A53", 
        "Galaxy A54", 
        "Galaxy A55", 
        "Galaxy A56", 
        "Galaxy A57", 
        "Galaxy A60", 
        "Galaxy A70", 
        "Galaxy A71", 
        "Galaxy A72", 
        "Galaxy A73", 
        "Galaxy A74", 
        "Galaxy A75", 
        "Galaxy A76", 
        "Galaxy A77", 
        "Galaxy A78", 
        "Galaxy A79", 
        "Galaxy A80", 
        "Galaxy A82", 
        "Galaxy A83", 
        "Galaxy A84", 
        "Galaxy A85", 
        "Galaxy A86", 
        "Galaxy A87", 
        "Galaxy A88", 
        "Galaxy A89", 
        "Galaxy A90", 
        "Galaxy S6", "Galaxy S6 Edge", "Galaxy S6 Edge+",
        "Galaxy S7", "Galaxy S7 Edge",
        "Galaxy S8", "Galaxy S8+", "Galaxy S9", "Galaxy S9+",
        "Galaxy S10e", "Galaxy S10", "Galaxy S10+", "Galaxy S10 Lite",
        "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra", "Galaxy S20 FE",
        "Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra", "Galaxy S21 FE",
        "Galaxy S22", "Galaxy S22+", "Galaxy S22 Ultra",
        "Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra", "Galaxy S23 FE",
        "Galaxy S24", "Galaxy S24+", "Galaxy S24 Ultra",
        "Galaxy Note 5", "Galaxy Note 7", "Galaxy Note 8",
        "Galaxy Note 9", "Galaxy Note 10", "Galaxy Note 10+",
        "Galaxy Note 20", "Galaxy Note 20 Ultra",
        "Galaxy A30", "Galaxy A31", "Galaxy A32", "Galaxy A33",
        "Galaxy A50", "Galaxy A51", "Galaxy A52", "Galaxy A53",
        "Galaxy A70", "Galaxy A71", "Galaxy A72", "Galaxy A73",
        "Galaxy Z Flip", "Galaxy Z Flip 3", "Galaxy Z Flip 4", "Galaxy Z Flip 5",
        "Galaxy Z Fold 2", "Galaxy Z Fold 3", "Galaxy Z Fold 4", "Galaxy Z Fold 5","Galaxy S25 FE", "Galaxy S25 Edge",
        "Galaxy S26", "Galaxy S26 Plus", "Galaxy S26 Ultra",
        "Galaxy Z Flip 7", "Galaxy Z Flip 7 FE",
        "Galaxy Z Fold 7", "Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Galaxy Z TriFold",
        "Galaxy A17", "Galaxy A26", "Galaxy A27", "Galaxy A36", "Galaxy A37", "Galaxy A47", "Galaxy A56", "Galaxy A57",
        "Galaxy M16", "Galaxy M17e", "Galaxy M47", "Galaxy M56",
        "Galaxy F17", "Galaxy F70e",
        "Galaxy Xcover 7 Pro"
      ],

    motorola: [
        "Moto G4", "Moto G4 Plus", "Moto G5", "Moto G5 Plus", "Moto G5S", "Moto G5S Plus",
        "Moto G6", "Moto G6 Plus", "Moto G6 Play",
        "Moto G7", "Moto G7 Play", "Moto G7 Power", "Moto G7 Plus",
        "Moto G8", "Moto G8 Play", "Moto G8 Power", "Moto G8 Plus",
        "Moto G9", "Moto G9 Play", "Moto G9 Power", "Moto G9 Plus",
        "Moto G10","Moto G10 Power",
        "Moto G13",
        "Moto G14",
        "Moto G15",
        "Moto G17","Moto G17 Power",
        "Moto G20",
        "Moto G22",
        "Moto G23",
        "Moto G24", "Moto G24 Power",
        "Moto G30",
        "Moto G31",
        "Moto G32",
        "Moto G34",
        "Moto G35",
        "Moto G37","Moto G37 Power",
        "Moto G40","Moto G40 Fusion", 
        "Moto G41", 
        "Moto G45", 
        "Moto G47", 
        "Moto G50",
        "Moto G51",
        "Moto G52","Moto G52j",
        "Moto G53","Moto G53j","Moto G53s","Moto G53y",
        "Moto G54","Moto G54j", 
        "Moto G55",
        "Moto G56",
        "Moto G57","Moto G57 Power",
        "Moto G60","Moto G60s", 
        "Moto G62", 
        "Moto G64", 
        "Moto G66j", 
        "Moto G67","Moto G67 Power", 
        "Moto G71", 
        "Moto G72", 
        "Moto G73", 
        "Moto G75", 
        "Moto G77","Moto G77 Power", 
        "Moto G82", 
        "Moto G84", 
        "Moto G85", 
        "Moto G86","Moto G86 Power", 
        "Moto G87", 
        "Moto G96", 
        "Moto G100", "Moto G200",
        "Moto E4",
        "Moto E5", 
        "Moto E6", 
        "Moto E7", "Moto E7 Plus",
        "Moto E13", 
        "Moto E20", 
        "Moto E30", 
        "Moto E40",
        "Moto One", "Moto One Vision", "Moto One Action", "Moto One Macro", "Moto One Fusion", "Moto One Hyper",
        "Moto Edge", "Moto Edge+", "Moto Edge 20", "Moto Edge 30", "Moto Edge 40", "Moto Edge 50", "Moto Edge 60 NEO", "Moto Edge 70","Moto Edge 70 Fusion","Moto Edge 70 Fusion Plus", "Moto Edge 70 Max", "Moto Edge 70 Pro", "Moto Edge 70 Pro Plus",
    ],

    xiaomi: [
        "Mi 8", "Mi 8 Lite",
        "Mi 9", "Mi 9 SE", "Mi 9T", "Mi 9T Pro",
        "Mi 10", "Mi 10 Lite", "Mi 10 Pro", "Mi 10T", "Mi 10T Pro",
        "Mi 11", "Mi 11 Lite", "Mi 11i", "Mi 11 Ultra",
        "Xiaomi 12", "Xiaomi 12X", "Xiaomi 12 Pro", "Xiaomi 12T", "Xiaomi 12T Pro",
        "Xiaomi 13", "Xiaomi 13 Lite", "Xiaomi 13 Pro", "Xiaomi 13 Ultra",
        "Redmi Note 7", "Redmi Note 8", "Redmi Note 8 Pro",
        "Redmi Note 9", "Redmi Note 9S", "Redmi Note 9 Pro",
        "Redmi Note 10", "Redmi Note 10 Pro", "Redmi Note 10S",
        "Redmi Note 11", "Redmi Note 11 Pro", "Redmi Note 11S",
        "Redmi Note 12", "Redmi Note 12 Pro", "Redmi Note 12S",
        "Redmi Note 13", "Redmi Note 13 Pro", "Redmi Note 13 Pro+",
        "Redmi Note 14", "Redmi Note 14 Pro", "Redmi Note 14 Pro+","Redmi Note 14S","Redmi Note 14C",
        "Redmi Note 15", "Redmi Note 15 Pro", "Redmi Note 15 Pro+","Redmi Note 15 Pro Plus","Redmi Note 15C",
        "Redmi 9", "Redmi 9A", "Redmi 9C", "Redmi 10", "Redmi 10C", "Redmi 12", "Redmi 12C",
        "Poco F1", "Poco F2 Pro", "Poco F3", "Poco F4", "Poco F5",
        "Poco X2", 
        "Poco X3", "Poco X3 Pro", 
        "Poco X4 Pro", 
        "Poco X5", "Poco X5 Pro",
        "Poco X7", "Poco X7 Pro",
        "Poco X8", "Poco X8 Pro",
        "Poco M2", "Poco M3", "Poco M4 Pro", "Poco M5",
    ],

    realme: [
        "Realme 5", "Realme 5 Pro", "Realme 6", "Realme 6 Pro",
        "Realme 7", "Realme 7 Pro", "Realme 8", "Realme 8 Pro",
        "Realme 9", "Realme 9 Pro", "Realme 9i",
        "Realme 10", "Realme 10 Pro", "Realme 10 Pro+",
        "Realme 11", "Realme 11 Pro", "Realme 11 Pro+",
        "Realme GT", "Realme GT Neo", "Realme GT Neo 2",
        "Realme GT2", "Realme GT2 Pro", "Realme GT3", "Realme GT5",
        "Realme Narzo 20", "Realme Narzo 30", "Realme Narzo 50",
        "Realme C11", "Realme C21", "Realme C25", "Realme C30", "Realme C33", "Realme C55"
    ],

    lg: [
        "LG G4", "LG G5", "LG G6", "LG G7 ThinQ", "LG G8 ThinQ", "LG G8X ThinQ",
        "LG V20", "LG V30", "LG V35 ThinQ", "LG V40 ThinQ",
        "LG V50 ThinQ", "LG V60 ThinQ",
        "LG K10", "LG K11", "LG K12", "LG K22", "LG K40", "LG K41S",
        "LG K50", "LG K51S", "LG K52", "LG K61", "LG K62", "LG K71", "LG K92",
        "LG Q6", "LG Q7", "LG Q8", "LG Q9",
        "LG Velvet", "LG Wing"
    ],

    oppo: [
        // Série Reno
        "Oppo Reno 2", "Oppo Reno 3", "Oppo Reno 3 Pro",
        "Oppo Reno 4", "Oppo Reno 4 Pro",
        "Oppo Reno 5", "Oppo Reno 5 Pro",
        "Oppo Reno 6", "Oppo Reno 6 Pro",
        "Oppo Reno 7", "Oppo Reno 7 Pro",
        "Oppo Reno 8", "Oppo Reno 8 Pro",
        "Oppo Reno 9", "Oppo Reno 9 Pro",
        "Oppo Reno 10", "Oppo Reno 10 Pro",

        // Série Find X
        "Oppo Find X", "Oppo Find X2"
    ]
}


// Função para abrir a marca
function abrirMarca(marca) {
    const titulo = document.getElementById("tituloMarca");
    const conteudo = document.getElementById("conteudo");

    titulo.innerHTML = marca.toUpperCase();

    let html = `
        <table>
            <tr>
                <th>Modelo</th>
                <th>Frontal</th>
                <th>Placa de Carga</th>
                <th>Bateria</th>
                <th>FPC</th>
            </tr>
    `;

    celulares[marca].forEach(modelo => {
        html += `
            <tr>
                <td>${modelo}</td>
                <td><input type="text" placeholder="R$"></td>
                <td><input type="text" placeholder="R$"></td>
                <td><input type="text" placeholder="R$"></td>
                <td><input type="text" placeholder="R$"></td>
            </tr>
        `;
    });

    html += "</table>";
    conteudo.innerHTML = html;
}

// Função de pesquisa
document.getElementById("pesquisa").addEventListener("keyup", function() {
    const filtro = this.value.toLowerCase();
    const linhas = document.querySelectorAll("#tabelaModelos tr");

    linhas.forEach((linha, index) => {
        if (index === 0) return; // pula o cabeçalho
        const modelo = linha.querySelector(".modelo").textContent.toLowerCase();
        linha.style.display = modelo.includes(filtro) ? "" : "none";
    });
});