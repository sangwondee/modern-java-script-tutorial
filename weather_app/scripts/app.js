const cityForm = document.querySelector('form')

const updateCity = async (city) => {
    const cityDetail = await getCity(city)
    const weather = await getWether(cityDetail.Key);

    // object Shorthand Notation
    // ใช้ในกรณีที่ค่าของเรานั้น มีค่าหมือนกันตัวแปรโดยไม่ต้องไปทำเป็น proproties ใหม่
    return { cityDetail, weather }

    // อันนี้ของเดิม
    // return {
    //     cityDetail: cityDetail,
    //     weather: weather
    // }
}

cityForm.addEventListener('submit', event => {
    event.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});