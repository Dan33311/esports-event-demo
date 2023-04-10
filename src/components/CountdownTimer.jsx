import { useState, useEffect } from "react";

function CountdownTimer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date to countdown to
    const countDownDate = new Date("May 20, 2023 23:59:59").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining between now and the countdown date
      const timeRemaining = countDownDate - now;

      // Calculate days, hours, minutes and seconds remaining
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Add leading zeros to values less than 10
      const padNumber = (number) => (number < 10 ? "0" + number : number);

      // Update the countdown state
      setCountdown({
        days: padNumber(days),
        hours: padNumber(hours),
        minutes: padNumber(minutes),
        seconds: padNumber(seconds),
      });

      // If the countdown is finished, stop updating it
      if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        setCountdown({ days: "00",
          hours: "00", 
          minutes: "00", 
          seconds: "00"
        });
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="countdown">
      <div className="count">
        <p className="count-font" style={{ fontVariant: ["tabular-nums"] }}>{countdown.days} </p>
        <p className="days">dias</p>
      </div>
      <div className="count">
        <p className="count-font">{countdown.hours} </p>
        <p className="hours">horas</p>
      </div>
      <div className="count">
        <p className="count-font">{countdown.minutes} </p>
        <p className="minutes">minutos</p>
      </div>
      <div className="count">
        <p className="count-font count-seconds" style={{ fontVariant: ["tabular-nums"] }}>{countdown.seconds} </p>
        <p className="seconds">segundos</p>
      </div>
    </div>
  );
}

export default CountdownTimer;