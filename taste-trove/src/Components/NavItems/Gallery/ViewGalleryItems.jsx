const ViewGalleryItems = ({ Food }) => {
  const {
    FoodName,
    FoodCategory,
    shortDescription,
    price,
    countryName,
    quantity,
    userEmail,
    userName,
    photoUrl,
    _id
  } = Food;
  return (
    <section>
      <div className="relative group">
        <img src={photoUrl} />
        <div className=" hidden absolute text-center flex flex-col transition group-hover:duration-150 ease-in-out items-center top-0 group-hover:block left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full w-full">
          <h1 className="text-white mt-10 mb-2">{userName}</h1>
        </div>
      </div>
    </section>
  );
};

export default ViewGalleryItems;
