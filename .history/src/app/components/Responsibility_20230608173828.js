export default function Responsibility() {
  return (
    <div className=" relative">
      <img
        className=" h-64"
        src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/campaign/2021/responsibility/startpage/responsibility-startpage.png]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]"
      />
      <div className=" flex flex-col text-left absolute top-[10%] left-[5%] gap-6">
        <h1 className=" text-white font-black text-5xl tracking-wider">
          This is our responsibility
        </h1>
        <p className=" text-white text-lg ">
          Want to learn more about our sustanability commitment?
        </p>
        <div className=" flex gap-6">
          <button className="bg-black text-white px-4 py-4 text-center  w-56 text-sm">
            CLICK HERE
          </button>
        </div>
      </div>
    </div>
  );
}
