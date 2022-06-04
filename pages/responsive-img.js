import Layout from "components/Layout";
import responsiveImage from "img/steve-johnson-unsplash.jpg?sizes[]=375,sizes[]=750,sizes[]=1125,sizes[]=1500,sizes[]=2000,sizes[]=2500,sizes[]=3000";

const ResponsiveImage = () => (
  <Layout>
    <div className="max-w-screen-md mx-auto mt-4">
      <div
        style={{
          position: "relative",
          paddingTop: `${
            (responsiveImage.height / responsiveImage.width) * 100
          }%`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: 'url("' + responsiveImage.placeholder + '")',
        }}
      >
        <img
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          sizes="(min-width: 820px) 768px, calc(93.6vw + 19px)"
        />
      </div>
      <div className="px-4 py-8 max-w-3xl mx-auto sm:px-6 md:px-0 sm:py-10 lg:max-w-4xl lg:py-12 ">
        <article className="prose lg:prose-xl">
          <h1>This is a good example</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
    </div>
  </Layout>
);
export default ResponsiveImage;
