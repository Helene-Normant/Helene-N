import IMG1 from '../assets/Castorlama.png'
import './cards.css'; 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Triplink | Front-end team | Graduate project',
    subtitle :'Social network for travel',
    description:'During our final year of education, I participated in a group project with 4 members. Our team consisted of two people working on the front end and two on the back end. I had a multifaceted role, serving as both a designer and a front-end developer. Additionally, I demonstrated strong teamwork abilities and played a crucial role in organizing the project.',
    github: 'https://github.com/Helene-Normant/Ride_my_bike',
    demo:''
  },

  {
    id: 2,
    image: IMG1,
    title: 'Castorlama | Front-end team',
    subtitle: 'Furniture shopping website',
    desription:'',
    github: 'https://github.com/Helene-Normant/pimp_emoji',
    demo:''
  },

  {
    id: 3,
    image: IMG1,
    title: 'Portfolio_v1 | Personal project',
    subtitle:'',
    description: '',
    github: 'https://github.com/Helene-Normant/helene-normant.github.io',
    demo:''
  }

]

const Cards = () => {
    return (
        <section>
      <div className='portfolio-container'>
        {
          data.map(({id, image, title, subtitle, description, github, demo }) => {
              return (
            <div key={id} className='flex m-6 border-[1.5px] border-solid border-dark rounded-[3px]'>
              <article>
                        <div className='bloc-mise-en-page'>
                             <div className='conteneura'>
                                <img className='imgcontenu rounded-[3px]' src={image} alt="Portfolio image" />
                            
                              <div className='txtcontenu p-4 w-[544px] h-[310px] flex flex-col'>
                          <h2 className='flex justify-center bg-medium text-2xl text-light rounded-[3px]'>{title}</h2>
                          <div className='mt-5 typewriter'>
                            <h3 className='flex justify-center text-2xl text-medium'>{subtitle}</h3>
                            </div>
                                    <p className='mt-3 text-justify text-medium text-[15px]'>{description}</p>
                                   <div className='mt-5 flex justify-around'>
                                  <button className='px-[22px] py-[10px] text-center inline-block bg-light bg-opacity-50 hover:bg-orange border-[1.5px] border-solid border-orange rounded-[3px] text-orange hover:text-medium'>
                                      <a className='text-[1rem]' href={github}>GitHub</a> 
                                 </button>
                                  <button className='px-[22px] py-[10px] text-center inline-block bg-light bg-opacity-50 hover:bg-orange border-[1.5px] border-solid border-orange rounded-[3px] text-orange hover:text-medium'>
                                        <a className='text-[1rem]' href={demo}>Démo</a> 
                                 </button>
                                </div>     
                              </div>
                         </div>     
                    </div>
              </article>
            </div>

            )

          })
        }

      </div>
    </section>
       
)
};

export default Cards;




