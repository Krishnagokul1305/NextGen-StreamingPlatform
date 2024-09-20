import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 py-8 flex items-center justify-between px-10 text-white w-[90%]">
    <NavMenu />
    <div className="flex items-center gap-5">
      <SearchBar />
      <img
        src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
        alt="User"
        className="h-[36px] w-[36px] rounded-full"
      />
    </div>
  </div>  
  );
}

export default NavBar;
