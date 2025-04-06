









// ==== UNIVERSAL FUNCTIONS ====
function changeCase(str, caseOption){
    switch (caseOption) {
        case "upper".toLowerCase(): return str.toUpperCase(); break;
        case "lower".toLowerCase(): return str.toLowerCase(); break;
        case "capitalize".toLowerCase(): return str.split(' ').map(a=>a[0].toUpperCase()+a.slice(1).toLowerCase()).join(' '); break;
    }
}

console.log(changeCase('Alezx is a common nigga', 'capitalize'))