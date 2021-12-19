import React from 'react'
import insta from '../images/insta.svg'
import DA from '../images/DA.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import dribbble from '../images/dribbble.svg'
import behance from '../images/behance.svg'
import reddit from '../images/reddit.svg'

const main = () => {

    const artItems = [
        {id: 1, title: 'Instagram', link: 'https://www.instagram.com/cryptofoxdraws/', img: insta},
        {id: 2, title: 'DeviantArt', link: 'https://www.deviantart.com/cryptofox', img: DA},
        {id: 3, title: 'Reddit', link: 'https://www.reddit.com/user/cryptofoxdraws/', img: reddit},

      ];

      const designItems = [
        {id: 1, title: 'Behance', link: 'https://www.behance.net/anjaliraj2', img: behance},
        {id: 2, title: 'Dribbble', link: 'https://dribbble.com/cryptofoxdraws', img: dribbble},

      ];

      const devItems = [
        {id: 1, title: 'Github', link: 'https://github.com/cryptofox17', img: github},
        {id: 2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/b-anjali-raj-17032001/', img: linkedin},

      ];
    return (
        <main>

            <section>
                <h2>ART</h2>
                <ul>
                    {artItems.map((item) =>
                      <a href={item.link} key={item.id} target="_blank">  
                        <li> <img src={item.img} alt={item.title}/> {item.title}</li> 
                      </a>
                   )}

                </ul>

            </section>

            <section>
                <h2>DESIGN</h2>
                <ul>
                    {designItems.map((item) =>
                      <a href={item.link} key={item.id} target="_blank">  
                        <li> <img src={item.img} alt={item.title}/> {item.title}</li> 
                      </a>
                   )}

                </ul>

            </section>

            <section>
                <h2>DEVELOPMENT</h2>
                <ul>
                    {devItems.map((item) =>
                      <a href={item.link} key={item.id} target="_blank">  
                        <li> <img src={item.img} alt={item.title}/> {item.title}</li> 
                      </a>
                   )}

                </ul>

            </section>


        </main>
    )
}

export default main
