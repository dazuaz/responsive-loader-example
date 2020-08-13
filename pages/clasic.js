import Layout from "components/Layout";
import responsiveImage from "img/steve-johnson-unsplash.jpg?sizes[]=375,sizes[]=750,sizes[]=1125,sizes[]=1500,sizes[]=2000,sizes[]=2500,sizes[]=3000";

const Clasic = () => (
  <Layout>
    <div className='max-w-screen-md mx-auto mt-4'>
      <div
        style={{
          position: "relative",
          paddingTop: `${
            (responsiveImage.height / responsiveImage.width) * 100
          }%`,
          // paddingTop: `56.25%`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: 'url("' + responsiveImage.placeholder + '")',
        }}>
        <img
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
        />
      </div>
    </div>
  </Layout>
);
export default Clasic;
