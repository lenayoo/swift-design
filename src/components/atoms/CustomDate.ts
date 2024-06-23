type calDate = {
  todayKr: string;
  hundredDaysLaterKr: string;
};

export const CustomDate = (): calDate => {
  const today = new Date();
  const hundredDaysLater = new Date(
    today.getTime() + 100 * 24 * 60 * 60 * 1000
  );

  const todayKr = today.toLocaleDateString("ko-KR");
  const hundredDaysLaterKr = hundredDaysLater.toLocaleDateString("ko-KR");

  return { todayKr, hundredDaysLaterKr };
};
