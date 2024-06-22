const Countdown = () => {
  const today = new Date();
  const hundredDays = new Date(today.getTime() + 100 * 24 * 60 * 60 * 1000);

  return <div>{hundredDays.toDateString()}</div>;
};

export default Countdown;
