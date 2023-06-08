export default function FindStore() {
  return (
    <div className="relative">
      <img
        className=" h-64 w-92"
        src="https://lp.weekday.com/app006prod?set=width[1280],quality[90],options[limit]&source=url[https://www.weekday.com/content/dam/Weekday/startpage-content/2021/w22/StartPage_Weekday_Store-Locator_desktop.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[webp],quality[global.quality]"
      />
      <div className=" flex flex-col text-left absolute top-[10%] left-[5%] gap-6">
       
          <button className="bg-black text-white px-4 py-4 text-center  w-56 text-sm">
           FIND STORE
          </button>
        </div>
      </div>
    </div>
  );
}
