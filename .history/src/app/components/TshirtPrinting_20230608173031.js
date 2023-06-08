export default function TshirtPrinting() {
  return (
    <div className=" relative">
      <img src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2023/wk04/StartPage_Weekday_ZEITGEIST_desktop.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]" />
      <div className=" flex flex-col text-center absolute top-[75%] left-[25%] translate-x-[-50%] translate-y-[-50%] gap-6">
        <p className=" text-white text-lg">
          WEEKLY T-SHIRT PRINTS REFLECTING ON CURRENT EVENTS IN POPULAR CULTURE
          AND SOCIETY.
        </p>
        <div className=" flex gap-6">
          <button className="bg-black text-white px-4 py-4 text-center  w-56 text-sm">
            WOMEN'S SWIMWEAR
          </button>
        </div>
      </div>
    </div>
  );
}
