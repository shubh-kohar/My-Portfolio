import MainContentArea from "./Components/MainContentArea";
import MenuSideBar from "./Components/MenuSideBar";
import SocialLinkSection from "./Components/SocialLinkSection";

function App() {
  return (
    <div className="flex flex-row min-h-screen bg-[#F1F4F4]">
      {/* Menu Items */}
     <MenuSideBar/>

      {/* Main Content Area */}
      <MainContentArea/>
     
      {/* Social Links Array */}
     <SocialLinkSection/>
    </div>
  );
}

export default App;
