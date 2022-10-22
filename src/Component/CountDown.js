import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    if (count == 0) {
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      {count === 0 ? (
        <div>Mã xác thực hết hiệu lực </div>
      ) : (
        <div>Thời gian nhập mảng xác thực là : {count}</div>
      )}
      <img src="https://timo.vn/wp-content/uploads/OTP-1200x900.jpg" />
    </div>
  );
};

export default CountDown;
