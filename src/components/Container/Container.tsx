// style
import "./container.css";
// components
import { JoinUs, MonthSub, WhyUs } from "../../components";

export default function Container() {
  return (
    <>
      <div id="container">
        <JoinUs />
        <div className="flex h-[55%]">
          <MonthSub />
          <WhyUs />
        </div>
      </div>
    </>
  );
}
