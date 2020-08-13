import dynamic from "next/dynamic";
import Layout from "components/Layout";
import responsiveImage from "img/steve-johnson-unsplash.jpg?sizes[]=375,sizes[]=768,sizes[]=1152,sizes[]=1536,sizes[]=1920,sizes[]=2000,sizes[]=2500,sizes[]=3000";
import responsiveImageWebp from "img/steve-johnson-unsplash.jpg?sizes[]=375,sizes[]=768,sizes[]=1152,sizes[]=1536,sizes[]=1920,sizes[]=2000,sizes[]=2500,sizes[]=3000&format=webp";

const Image = dynamic(() => import("gatsby-image"), { ssr: false });

const Fancy = () => (
  <Layout>
    <div className='max-w-screen-md mx-auto md:mt-4'>
      <Image
        className='shadow md:rounded'
        fluid={{
          aspectRatio: 16 / 9,
          src: responsiveImage.src,
          srcSet: responsiveImage.srcSet,
          srcWebp: responsiveImageWebp.src,
          srcSetWebp: responsiveImageWebp.srcSet,
          base64: responsiveImage.placeholder,
          sizes: "(min-width: 768px) 768px, 100vw",
        }}
      />
      <div className='px-4 py-8 max-w-3xl mx-auto sm:px-6 md:px-0 sm:py-10 lg:max-w-4xl lg:py-12 '>
        <article className='prose lg:prose-xl'>
          <h1>Garlic bread with cheese: What the science tells us</h1>
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
export default Fancy;
