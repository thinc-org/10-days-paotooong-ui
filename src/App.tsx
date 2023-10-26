import Container from "./components/Container";
import Header from "./components/Header";

import Logo from "./assets/paotooong.png";
import Button from "./components/Button";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <Container className="-mt-16 text-white">
          <div className="bg-green-gradient p-4 rounded-xl space-y-8">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-2xl">TUNG-Wallet</h3>
                <p className="text-lg">Chanotai Krajeam</p>
              </div>
              <div>
                <img src={Logo} alt="" className="w-14 h-14" />
              </div>
            </div>
            <div>
              <h3 className="text-lg">เงินในกระเป๋า​ (บาท)</h3>
              <p className="text-3xl font-medium">721.00</p>
            </div>
          </div>
        </Container>
        <Container className="flex flex-row justify-between gap-4">
          <Button color="green">เติมเงิน</Button>
          <Button color="yellow">โอนเงิน</Button>
          <Button color="blue">จ่ายเงิน</Button>
        </Container>
        <Container className="space-y-4">
          <Menu title="ใช้จ่ายร้านค้าถุงเงิน" desc="ผ่าน G-Wallet" />
          <Menu
            title="ตรวจสอบสถานะการชำระเงิน"
            desc="ชำระร้านอาหาร ที่พัก บริการอื่นๆ"
          />
        </Container>
      </div>
    </>
  );
}

export default App;
