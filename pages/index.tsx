import type { NextPage } from 'next'
import Flux from '../public/flux.json'
import Image from 'next/image'


const contains: any = Flux.mesFlux;
const props: any = {
  width: 250,
  height: 250
}
const Home: NextPage = () => {
  return (<>
    <br />
    <h1 className='text-center'>Flux Radio</h1>
    <br />
    <div className="container">
      <div className="row">
        {contains.map(({ titel, flux, img }: any) => {
          return (<>
            <div className="col">
              <div className="card">
                <Image
                  src={img}
                  alt={titel}
                  className="card-img-top"
                  width={props.width}
                  height={props.height}
                />
                <h5 className="card-title text-center">{titel}</h5>
                <audio controls src={flux}></audio>
              </div>
            </div>
            <br />
          </>)
        })}
      </div>
    </div>
  </>)
}

export default Home
