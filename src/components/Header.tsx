import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="h-48 bg-extend-blue text-white p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-medium">เป้าตุง</h1>
        <div>
          <Icon icon="mdi-light:settings" className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
