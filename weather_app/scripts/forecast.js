// เอามาจาก website นี้ => https://developer.accuweather.com/user/login?destination=user/me/apps&autologout_timeout=1
// key ตัวนี้เป็นตัวบอกว่าใครเป็นคนที่จะดึงใช้ api
// key อันนี้ใช้ส่งได้แค่ 50 ครั้งต่อ app ถ้าหากหมดให้ ลบ app เก่าแล้วสร้างขึ้นมาใหม่
const key = 'xvpeApoLAEMsuTA12r0POJdvSbGWur33'

// getLocation
const getLocation = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;
    const endPoint = base + query
    const response = await fetch(endPoint);
    const data = await response.json();

    return data;
}

// get City
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

getCity('bangkok')
.then(data => {
    return getLocation(data.Key);
}).then(data => {
    console.log(data);
}).catch(err => console.log(err))