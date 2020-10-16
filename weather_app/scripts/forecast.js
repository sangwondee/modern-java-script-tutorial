// เอามาจาก website นี้ => https://developer.accuweather.com/user/login?destination=user/me/apps&autologout_timeout=1
// key ตัวนี้เป็นตัวบอกว่าใครเป็นคนที่จะดึงใช้ api
const key = '8QBgv45EP8t4NTYjRgvjvXj017SuX86A'

// เราจะต้องได้ api ของ City เพราะเราตะต้องเอา id ของเมืองนั้นไปหาต่อ
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`
    const endPoint = base + query
    const response = await fetch(endPoint)
    const data = await response.json()
    // ต้อง return array 0 เพราะว่า มันเป็นเมืองที่ใกล้ที่สุด
    return data[0];
}

getCity('manchester')
    .then(data => console.log(data))
    .catch(err => console.log(err))