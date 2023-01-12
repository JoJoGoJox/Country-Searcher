const baseUrl = 'https://restcountries.com/v3.1'
const countries = document.querySelector('#links')
const container = document.querySelector('#container')

countries.addEventListener('click', e => {
    if (e.target.getAttribute('data-name')) {
        fetch(`${baseUrl}/region/${e.target.getAttribute('data-name')}`)
            .then(res => res.json())
            .then(r => {
                const data = r
                console.log(r)

                let temp = ''

                data.map(item => {
                    temp += countryCards( item.flag, item.name.common, item.flags.svg, item.name.official, item.area, item.region, item.capital, item.population)
                })
                container.innerHTML = temp
            })
            .catch(err => console.log(err))
    }
})

function countryCards( flag, name, img, official, area, region, capital, population) {
    return `
    <div class="information">
    <h1><span class="flag">${flag}</span> ${name} <span class="flag">${flag}</span></h1>
        <img src="${img}" alt="">
    <div class="card">
    <p>Official name:<span> ${official}</span></p>
        <p>Area:<span> ${area}</span></p>
        <p>Region:<span> ${region}</span></p>
        <p>Capital of ${name}:<span> ${capital}</span></p>
        <p>Population of ${name}:<span> ${population}</span></p>
    </div>
    </div>
    `
}