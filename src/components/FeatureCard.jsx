const FeatureCard = ({ content, title, img }) => (
  <div className="flex flex-col px-10 rounded-[20px]  max-w-[325px] max-h-[490px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={img} className="w-[252px] h-[200px] object-none purple" />
    <h4 className="font-lato text-center font-semibold text-[24px] leading-[32px] text-white">
      {title}
    </h4>
    <p className="font-lato text-center font-normal text-[20px] leading-[23.4px]  my-5 text-white">
      {content}
    </p>
  </div>
);


export default FeatureCard;