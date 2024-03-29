import Layout from "components/Layout";
import responsiveImage from "img/steve-johnson-unsplash.jpg?sizes[]=375,sizes[]=750,sizes[]=1125,sizes[]=1500,sizes[]=2000,sizes[]=2500,sizes[]=3000";
import responsiveImageWebp from "img/steve-johnson-unsplash.jpg?{sizes:[375,750,1125,1500,2000,2500,3000], format:'webp', quality: 60}";
import responsiveImageAvif from "img/steve-johnson-unsplash.jpg?sizes[]=375,sizes[]=750,sizes[]=1125,sizes[]=1500,sizes[]=2000,sizes[]=2500,sizes[]=3000&format=avif&quality=50";

const Index = () => (
  <Layout>
    <div className="max-w-screen-lg mx-auto mt-4">
      <picture>
        <source srcSet={responsiveImageAvif.srcSet} type="image/avif" />
        <source srcSet={responsiveImageWebp.srcSet} type="image/webp" />
        <img
          src={responsiveImage.src}
          className="w-full"
          srcSet={responsiveImage.srcSet}
          width={responsiveImage.width}
          height={responsiveImage.height}
          alt="Steve Johnson Painting - Unsplash"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </picture>
    </div>
  </Layout>
);
export default Index;
