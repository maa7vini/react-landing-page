import './App.css'

import Img1 from './assets/developer.svg'
import Img3 from './assets/graphs.svg'
import Img4 from './assets/product-launch.svg'
import Img5 from './assets/waving.svg'

import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className='App'>

      <Nav />

      <section className='content1'>

        <div className="txt1">
          <h1> Landing page  <br /> 
          template for <br /> 
          developers & <br /> 
          startups </h1>

          <p> Beautifully designed templates using React.js and <br /> ant design! 
          Save weeks of time and  <br /> build your landing page in minutes.</p>

          <div className="txt1Btns">
            <button id='exploreBtn' > Explore </button>

            <button id='learnBtn' > Learn More </button>
          </div>
        </div>

        <div className="img1">
          <img src={Img1} />
        </div>

      </section>

      <section className='content2'>

        <div className="txt2">

          <h1> Introduce your  <br /> product quickly & <br /> effectively </h1>

          <p> Landy comes with multi-lingual support, all of the content is <br />
          stored in the JSON files, so that you can manage the texts <br />
          without having any prior knowledge in developing web <br />
          applications using React.js. </p>

          <button> Get Started </button>

        </div>

      </section>

      <section className='content3'>

        <div className="img3">
          <img src={Img3} />
        </div>

        <div className="txt3">

          <h1> Light, fast & <br /> responsive </h1>

          <p> This template is ready to use, so you don't need to <br />
          change anything at a component level, unless you <br />
          want to customize the default styling. </p>

        </div>

      </section>

      <section className='content4'>

        <div className="txt4">

          <h1> Ready made <br /> sections </h1>

          <p> Landy comes with a set of ready to use sections to <br /> 
          help you easily create a landing page for your own <br /> 
          brand, with all the content your startup desires. In <br /> 
          order to replace any dummy elements all you need to do <br /> 
          is go to content folder and input your real content. </p>

        </div>

        <div className="img4">
          <img src={Img4} />
        </div>

      </section>

      <section className='content5'>

        <div className="img5">
          <img src={Img5} />
        </div>

        <div className="txt5">
          <h1> That's about it! </h1>

          <p> If you are familiar with React, or SPA frameworks in <br /> 
          general, there shouldn't be any confusing parts <br /> 
          about this template. if not, you can always reach <br /> 
          out to me and I'll try me best to answer your <br /> 
          questions. </p>
        </div>

      </section>

      <section className='content6'>

        <div className="txt6">

          <h1> Contact form </h1>

          <p> The following form demonstrates form <br /> 
          validation in action. Contact form <br /> 
          component reduces the amount of time it <br /> 
          is being re-rendered by the user as it <br /> 
          embraces uncontrolled form validation to <br /> 
          reduce any unnecessary performance <br /> 
          penalty. </p>

        </div>

        <div className="containerForm">

          <form>
            <div className="containerInput">
              <label> Name </label>
              <input type="text" placeholder='Your name' />
            </div>

            <div className='containerInput'>
              <label> Email </label>
              <input type="text" placeholder='Your email' />
            </div>

            <div className="containerInput">
              <label> Message </label>
              <textarea rows={4} cols={50} placeholder='Your message' />
            </div>
          </form>

          <button> Submit </button>

        </div>

      </section>

    </div>
  )
}

export default App
