import IMG1 from '../assets/triplink.png'
import IMG2 from '../assets/Castorlama.png'
import IMG3 from '../assets/portfolio-v1.png'
import './cards.css'; 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Triplink | Front-end team | Graduate project',
    subtitle :'Social network for travel',
    description:'Work still in porgress: In our last year of education, I am part of a 4-member group project. Our team has 2 front-end and 2 back-end members. I am the designer and front-end developer, showcasing teamwork and a key role in project organization.',
    github: 'https://github.com/Helene-Normant/Ride_my_bike',
    demo:''
  },

  {
    id: 2,
    image: IMG2,
    title: 'Castorlama | Front-end team',
    subtitle: 'Vintage Furniture shopping',
    description:'This two-week project during my studies provided me with a better understanding of the interaction between the back-end and the front-end. It also allowed us to establish a structured organization based on the agile methodology. I was able to handle both the design and front-end development aspects effectively.',
    github: 'https://github.com/Helene-Normant/pimp_emoji',
    demo:''
  },

  {
    id: 3,
    image: IMG3,
    title: 'Portfolio_v1 | Personal project',
    subtitle:'My first portfolio in react',
    description: 'During my search for an apprenticeship, I chose to deepen my knowledge in front-end development and focus on React. This led me to combine learning with practicality by creating a portfolio. This not only allowed me to grasp the fundamentals but also showcased my skills during my job search efforts.',
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
                                      <a className='text-[1rem]' href={github} target="_blank">GitHub </a> 
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




