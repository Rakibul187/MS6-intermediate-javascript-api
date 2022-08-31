const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json()
    displayPhones(data.data, dataLimit)
}
// display phones
const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerHTML = '';

    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }

    // display no phones found 
    const noPhone = document.getElementById('no-found-message')
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card border rounded-4 p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-info w-100 fw-bold  text-white " data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Details</button>
        </div>
    </div>
    `;
        phonesContainer.appendChild(phoneDiv)
    })
    // stop spinner or loader
    toggleSpinner(false)
}

// search processing
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit)
}

// search btn
document.getElementById('btn-search').addEventListener('click', function () {
    // toggle start
    processSearch(10)
})

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    // console.log(e.key)
    if (e.key === 'Enter') {
        processSearch(10)
    }
});

// ================= toogle spinner loader=============
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader')

    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

// this is not the best way to show all
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
    // console.log('jhhhhhhhhhhhhhhhh')
})

const loadPhoneDetails = async id => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetail(data.data);
}

const displayPhoneDetail = phone => {
    // console.log(phone)
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
   <div class="mx-auto w-75"> 
   <img class="img-fluid d-block w-75 mx-auto mb-1 class="h5" h-50 mx-auto" src="${phone.image}">
   <p><span class="h5">Memory:</span> ${phone.mainFeatures.memory}</p>
   <p><span class="h5">Display:</span> ${phone.mainFeatures.displaySize}</p>
   <p><span class="h5">Release Date:</span> ${phone.releaseDate}</p>
   <p><span class="h5">Other's:</span> ${phone.others.WLAN}</p></div>
    `
}
// loadPhones('apple')