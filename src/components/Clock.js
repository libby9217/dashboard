import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime();                 // 첫 렌더링 직후 반영
    const timer = setInterval(updateTime, 1000 * 10); // 10초마다 갱신

    return () => clearInterval(timer);
  }, []);

  return <p className="clock">{time}</p>;
};

export default Clock