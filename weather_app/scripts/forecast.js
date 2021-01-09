// เอามาจาก website นี้ => https://developer.accuweather.com/user/login?destination=user/me/apps&autologout_timeout=1
// key ตัวนี้เป็นตัวบอกว่าใครเป็นคนที่จะดึงใช้ api
// key อันนี้ใช้ส่งได้แค่ 50 ครั้งต่อ app ถ้าหากหมดให้ ลบ app เก่าแล้วสร้างขึ้นมาใหม่
class Forecast {
    constructor() {
        this.key = 'xK3wJbEAAe4O61YOAcdGT2nrHguorKNg'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async updateCity(city) {
        const cityDetail = await this.getCity(city)
        const weather = await this.getWether(cityDetail.Key)

        return { cityDets, weather }
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURI + query)
        const data = await response.json()
        // ต้อง return array 0 เพราะว่า มันเป็นเมืองที่ใกล้ที่สุด
        return data[0];
    }

    async getWether(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}