export default function FestivalSleaze() {
  return (
    <div className=" relative">
      <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2023/wk21/SP_Hero2_Festival_Desktop.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
      <div className=" flex flex-col text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-6">
        <h1 className=" text-white font-black text-4xl tracking-wider">
          FESTIVAL SLEAZE
        </h1>
        <p className=" text-white text-lg">Get your raving outfit now</p>
        <div className=" flex gap-6">
          <button className="bg-black text-white px-4 py-4 text-center  w-56 text-sm">
            WOMEN'S FESTIVAL
          </button>
          <button className="bg-black text-white px-4 py-4 text-center  w-56 text-sm">
            MEN'S FESTIVAL
          </button>
        </div>
      </div>
    </div>
  );
}
