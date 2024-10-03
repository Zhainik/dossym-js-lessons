// Задание 5 Прогноз погоды

// 1 - получить API (есть)
// 2 - сделать верстку первого блока(есть)
// 3 - верстку второго блока (1шт) (есть)
// 4 - подготовливаем http запрос

const cityEl = document.getElementById('city')
const timeEl = document.getElementById('time')
const weathersNameEl = document.getElementById('weatherName')
const tempEl = document.getElementById('weatherTemp')
const speedEl = document.getElementById('speed')

async function getWeather() {
    try {
        const res = await fetch('https://api.openweathermap.org/data/2.5/forecast?' + new URLSearchParams({
            q: 'Uralsk',
            appid: 'a94d0a5ac08570add4b47b8da933f247',
            units: 'metric'
        }).toString())
        const data = await res.json()
        console.log(data)

        cityEl.innerText = data?.city?.name || 'No city name'

        const weathers = data?.list?.slice(0, 6) || []
        console.log(weathers)

        const time = weathers[0]?.dt_txt
        timeEl.innerText = time?.split(' ')[1].slice(0, 5) || 'No time'

        const weathersName = weathers[0]?.weather[0]?.main || 'No weather'
        weathersNameEl.innerText = weathersName

        const temp = weathers[0]?.main?.temp.toString() || 'No teamp'
        console.log(temp)
        tempEl.innerText = temp?.split('.')[0] + '°C'

        const speed = weathers[0]?.wind?.speed || 'No speed'
        console.log(speed)
        speedEl.innerText = speed + ' m/s'

    } catch(err){
        console.log('Fetching Weather Error: ' + err)
    }
}

getWeather()

        // path - /data/2.5/forecast
        // params - ?q=Astana&appid=a94d0a5ac08570add4b47b8da933f247