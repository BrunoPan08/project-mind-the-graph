
const FeedbackCard = ({ content, title, img }) => (
  <div className="flex justify-between flex-col px-[3.5rem] py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card">
    <img src={img} className="w-[100%] h-[100%] object-none" />
    <h4 className="font-lato text-center  font-semibold text-[20px] leading-[32px] text-purple">
      {title}
    </h4>
    <p className="font-lato text-center font-medium text-[18px] leading-[32.4px]  mt-2 mb-10">
      {content}
    </p>
    <h4 className="font-lato text-center font-semibold text-[20px] leading-[32px] text-purple cursor-pointer"> &gt; Learning more</h4>
    
  </div>
);


export default FeedbackCard;