// === FIREBASE STUFF OVER HERE ====



// ===END OF FIREB INITIALIZATION ===


const allDrugs = [
    // {
    //     dName: '',
    //     dForm: '',
    //     dCount: NaN
    // },
    {
        dName: 'Retrogyl 200mg',
        dForm: 'Tabs',
        dCount: 2150
    },
    {
        dName: 'Ampimax 250',
        dForm: 'Caps',
        dCount: 420
    },
    {
        dName: 'JenaCof DS',
        dForm: 'Syrup',
        dCount: 9
    },
    {
        dName: 'Acnesol',
        dForm: 'Cream',
        dCount: 4
    },
    {
        dName: 'P-alaxin TS',
        dForm: 'Tabs',
        dCount: 8
    },
    {
        dName: 'Umbilica',
        dForm: 'Gel',
        dCount: 3
    },
    {
        dName: 'Kabuuti',
        dForm: 'Syrup',
        dCount: 9
    },
    {
        dName: 'Calcivita',
        dForm: 'Caps',
        dCount: 210
    }
]

const dLists = document.querySelector('.d-lists')

allDrugs.forEach(every =>{
    let HTMLed = `<div class="item flex">`
    HTMLed += `<span>${every.dName}</span>`
    HTMLed += `<span>${every.dForm}</span>`
    HTMLed += `<span>${every.dCount} Remain</span>`
    HTMLed += `</div>`

    dLists.innerHTML += HTMLed
})








// ==== UNIVERSAL FUNCTIONS ====
function changeCase(str, caseOption){
    switch (caseOption) {
        case "upper".toLowerCase(): return str.toUpperCase(); break;
        case "lower".toLowerCase(): return str.toLowerCase(); break;
        case "capitalize".toLowerCase(): return str.split(' ').map(a=>a[0].toUpperCase()+a.slice(1).toLowerCase()).join(' '); break;
    }
}

// console.log(changeCase('Alezx is a common nigga', 'capitalize'))