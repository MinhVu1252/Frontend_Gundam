import CarouselCategorySlider from "../../components/carouselCategory/CarouselCategoryList";
import InstagramFeed from "../../components/InstagramFeed";
import LatestNews from "../../components/news/LatestNews";
import ProductShowCaseIntroduce from "../../components/productShowcaseIntroduce/ProductShowCaseIntroduce";
import ProductViewList from "../../components/productList/ProductViewList";
import GundamService from "../../components/serviceGundam/Service";
import GundamStoreCategory from "../../components/gundamStoreCategory/StoreCategory";
import DealsPage from "../../components/bestDeals/BestDeals";
import Banner from "../../components/banner/Banner";

const HomePage = () => {
  return (
    <>
      <>
        <Banner></Banner>
      </>
      <>
        <GundamStoreCategory></GundamStoreCategory>
      </>
      <>
        <GundamService></GundamService>
      </>
      <>
        <DealsPage></DealsPage>
      </>
      <>
        <CarouselCategorySlider></CarouselCategorySlider>
      </>
      <>
        <ProductViewList></ProductViewList>
      </>
      <>
        <ProductShowCaseIntroduce></ProductShowCaseIntroduce>
      </>
      <>
        <LatestNews></LatestNews>
      </>
      <>
        <InstagramFeed></InstagramFeed>
      </>
    </>
  );
};

export default HomePage;
