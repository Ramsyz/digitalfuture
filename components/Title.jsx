const Title = ({ title, subTitle, titleStyles, subTitleStyles }) => {
  return (
    <div className="flex flex-col items-center w-full mb-16 ">
      <h1 className={`text-3xl md:text-2xl font-semibold mb-4 ${titleStyles}`}>
        {title}
      </h1>

      <p
        className={`lg:w-1/2 w-full leading-relaxed text-base text-center ${subTitleStyles}`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
