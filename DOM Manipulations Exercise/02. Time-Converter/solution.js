function attachEventsListeners() {
  const buttons = document.querySelectorAll("input[type=button]");
  buttons.forEach((button) => {
    button.addEventListener("click", onClickCalculations);
  });
  function onClickCalculations(event) {
    const buttonId = event.target.id;
    const input = document.querySelector(`div #${buttonId}`);
    switch (buttonId) {
      case "daysBtn":
        const input = document.querySelector(`#${buttonId}`);
        convertFromDays();
        break;
      case "hoursBtn":
        break;
      case "minutesBtn":
        break;
      case "secondsBtn":
        break;
    }
  }

  function convertFromDays(days) {
    return {
      hours: days * 24,
      minutes: days * 24 * 60,
      seconds: days * 24 * 60 * 60,
    };
  }
  function convertFromHours(hours) {
    return {
      days: hours / 24,
      minutes: hours * 60,
      seconds: hours * 60 * 60,
    };
  }
  function convertFromMinutes(minutes) {
    return {
      days: minutes / 1440,
      hours: minutes / 60,
      seconds: minutes * 60,
    };
  }
  function convertFromSeconds(seconds) {
    return {
      days: seconds / 86400,
      hours: seconds / 3600,
      minutes: seconds / 60,
    };
  }
}
