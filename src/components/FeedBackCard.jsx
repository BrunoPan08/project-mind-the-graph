import { quotes } from "../assets";

const FeedbackCard = ({ content, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={img} className="w-[100%] h-[100%] object-contain" />
    <h4 className="text-center font-poppins font-semibold text-[20px] leading-[32px] text-purple">
      {title}
    </h4>
    <p className="text-center font-poppins font-semibold text-[18px] leading-[32.4px]  my-10">
      {content}
    </p>
    <h4 className="text-center font-poppins font-semibold text-[20px] leading-[32px] text-purple"> &gt; Learning more</h4>
    
  </div>
);


export default FeedbackCard;