import Layout from "../components/Layout"
import { Image } from "../components/Image"
import img from "../img/tim-mossholder-xY56WiUYFjk-unsplash.jpg?sizes[]=600,sizes[]=1200,sizes[]=2500"
import imgWebp from "../img/tim-mossholder-xY56WiUYFjk-unsplash.jpg?sizes[]=600,sizes[]=1200,sizes[]=2500&format=webp"

export default () => (
  <Layout>
    <h1 className='text-5xl font-bold text-purple-500'>
      NextJs with TailwindCSS 👌🏼
    </h1>
    <picture>
      <source srcSet={imgWebp.srcSet} type='image/webp' />
      <img src={img.src} srcSet={img.srcSet} sizes='100vw' />
    </picture>
  </Layout>
)
