const data = [
  { id: 1, name: "Year Experience", value: "5+" },
  { id: 2, name: "Happy Clients", value: "3K" },
  { id: 3, name: "Overall Rating", value: "4.8" },
];

export const Stats = () => {
  return (
    <div className="bg-white w-5/6 mx-auto mt-10 md:mt-18">
      <div className="mx-auto">
        <dl className="grid grid-cols-3 text-center gap-2 md:gap-8">
          {data.map((data) => (
            <div
              key={data.id}
              className="mx-auto flex w-full flex-col bg-gray-50 rounded-4xl p-8 hover:scale-105 transition-transform duration-300 ease-out"
            >
              <dt className="sub-text">{data.name}</dt>
              <dd className="order-first text-3xl font-normal tracking-tight text-indigo-600 md:text-5xl">
                {data.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
