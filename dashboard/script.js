// https://api.unsplash.com/photos/random

const stockPrice = document.querySelector(".stock-price");
const weather = document.querySelector(".weather");
const time = document.querySelector(".time");
const quote = document.querySelector(".quote");
const goalForm = document.querySelector(".goal-form");

// TIME:
function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  time.textContent = formatted;
}

updateTime();
setInterval(updateTime, 1000);

// Quote
async function quoteDisplay() {
  try {
    const resQuote = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "DNWb4m6JjkAmIwYbmOLA0w==1cYOTC5muMSKIl0L",
      },
    });

    if (!resQuote) {
      throw new Error("API issue");
    }
    const quoteData = await resQuote.json();
    quote.textContent = quoteData[0].quote;
  } catch (error) {
    console.log(error);
  }
}

quoteDisplay();

// Weather
const city = "Miami";

async function weatherDisplay() {
  try {
    const resWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee9d107a61750d742e72285e9bcee3b1`
    );
    if (!resWeather) {
      throw new Error("API issue");
    }
    const weatherData = await resWeather.json();
    const kelvin = weatherData.main.temp;
    const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
    const icon = weatherData.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log(icon);

    weather.innerHTML = `
    <div class="weather">
      <img src="${iconURL}"> ${fahrenheit}°
    </div>
    <div class="city">${city}</div>
    `;
  } catch (error) {
    console.log(error);
  }
}

weatherDisplay();

// Bitcoin

async function coinDisplay() {
  try {
    const resCoin = await fetch(
      "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC",
      {
        headers: {
          "X-Api-Key": "DNWb4m6JjkAmIwYbmOLA0w==1cYOTC5muMSKIl0L",
        },
      }
    );
    if (!resCoin) {
      throw new Error("API issue");
    }
    const coinData = await resCoin.json();

    stockPrice.innerHTML = `
    <div class="name-price">
      ${coinData.symbol}, $${coinData.price}
    </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

coinDisplay();
