// style
import "./monthSub.css";

export default function MonthSub() {
  return (
    <>
      <div id="MonthSub">
        <div id="MonthSub-box">
          <h3>Monthly Subscription</h3>
          <div className="flex items-center">
            <span className="text-[3rem] font-medium mr-[1rem]">$29 </span>
            <span className="text-GrayishBlue font-medium">per month</span>
          </div>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}
