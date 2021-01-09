const cityForm = document.querySelector('form')
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img');

const forecast = new Forecast();

// console.log(forecast);

const updateUI = (data) => {

    console.log(data);
    // Destructuring Object
    // อ่านเพิ่มเติมจากอันนี้
    // => https://medium.com/@brightsongpat/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3-destructuring-object%E0%B9%83%E0%B8%99-es6-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%B0-470018a0f2bd
    const { cityDetail, weather } = data;

    // update Detail template
    details.innerHTML = `
        <h5 class="my-3">${cityDetail.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    // update the icon images
    let iconSrc = null;
    iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // update the night/day background
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'; // ternary operator หรือ show hand if

    time.setAttribute('src', timeSrc);

    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {
    const cityDetail = await getCity(city)
    const weather = await getWether(cityDetail.Key);

    return { cityDetail, weather }
}

cityForm.addEventListener('submit', event => {
    event.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    forecast.updateCity(city).then(data => {
        updateUI(data);
    }).catch(err => console.log(err));
});