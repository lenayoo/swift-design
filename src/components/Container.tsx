import Header from "./Header";

export const Container = () => {
  return (
    <div className="w-[450px] h-[200px] bg-blue border border-gray-300 rounded shadow-lg flex items-center justify-center">
      <Header />
      <h1> 100 days </h1>
    </div>
  );
};
