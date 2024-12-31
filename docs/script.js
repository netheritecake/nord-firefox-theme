// function to update the clock
function updateTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var seconds = now.getSeconds().toString().padStart(2, "0");
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerHTML = timeString;

  var date = getFormattedDate();
  document.getElementById("date").innerHTML = date;
}

function greeter() {
  var now = new Date();
  var hours = now.getHours();
  if (hours >= 6 && hours < 12) {
    // good morning if time is between 6 am and 12 pm
    document.getElementById("greeting").innerHTML = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    // good afternoon if time is between 12 am and 6 pm
    document.getElementById("greeting").innerHTML = "Good Afternoon";
  } else if (hours >= 18 && hours < 24) {
    // good evening if time is between 6 pm and 12 am
    document.getElementById("greeting").innerHTML = "Good Evening";
  } else {
    // good night
    document.getElementById("greeting").innerHTML = "Consider Sleeping";
  }
}

function getFormattedDate() {
  const date = new Date();

  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });

  // adding the correct ordinal suffix
  const ordinalSuffix = (n) => {
    if (n >= 11 && n <= 13) return "th";
    const lastDigit = n % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${dayOfWeek}, ${day}${ordinalSuffix(day)} of ${month}`;
}

console.log(getFormattedDate());

updateTime();
greeter();
setInterval(greeter, 1000);
setInterval(updateTime, 1000);
