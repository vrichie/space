import style from '../styles/Cards.module.css'
import Config from '../config/config.json'
import Link from 'next/link'
import { useEffect,useState } from 'react'

import Image from 'next/image'

const api_url=Config.IP_ADDRESS+"projects/api/src/include/category/cards/";
export default function Cards() {
    const [post,setPost]=useState([]);

    const get_cards=()=>{
        fetch(api_url).then(res=>res.json()).then(data=>{
            // console.log(data);
            setPost(data);
        }).catch((e)=>console.log(e));
    }

    useEffect(() => {
        get_cards();
    }, []);
    // console.log(post);


    // const buttonColours=[{backgroundColor:'red'},{backgroundColor:'yellow'},{backgroundColor:'teal'}];

  
    // const changeStyle=(o)=>{

    //     // change style of hovered button
    //     console.log(o)
    // }

    

    const handleMouseEnter=(e,card)=>{
        e.target.style.background=card.background;
        e.target.style.color="white"; 
    }    
    const handleMouseLeave=(e,card)=>{
        e.target.style.borderColor=card.background;
        e.target.style.color=card.background;
        e.target.style.background="white";
        

    }



    return (
    <div id={style.card_wrapper} >

        <h1 id={style.slogan}>Everything news and in between...</h1>

        <div className="ui special cards" id={style.real_card_wrapper}>



            {
                post.map((card,index)=>(
                    <Link href={`./article/${card.slug}`} key={index}>

                        <div id={style.card_item}>

                            <Link href={`./${card.tag}`}>
                                <button
                                onLoadStart={(e)=>{handleMouseLeave(e,card)}} 
                                onMouseEnter={(e)=>{handleMouseEnter(e,card)}} 
                                onMouseLeave={(e)=>{handleMouseLeave(e,card)}}>
                                {card.category}
                            </button>
                            </Link>
                            

                            <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} alt={card.pic} />
                            <h2>
                                {card.title}
                            </h2>
                            <span>
                                <p>by:{card.username}</p> <p>{card.date}</p>
                            </span>

                        </div>










                    
                        
                        {/* <div className="card">
                            <div className="extra content"  className={style.button_wrapper}>
                            <a>
                            <button className={style.news_button}  className=" tiny ui  basic button">{card.category}</button>
                                        
                            </a>
                            </div>
                            <div className="blurring dimmable image">
                                <img src={Config.POSTIMAGE_BASEURL+card.pic} alt={card.pic} height="400px" width="550px"/>

                            </div>
                            <div className="content">
                                <h1 id={style.card_title}>
                                {card.title}
                                </h1>
                            </div>
                            <div className="extra content">
                                <p>
                                    published on:{card.date}
                                </p>
                            </div>
                
                         </div> */}
                    
                    
                    
                    </Link>
                ))
            }










{/*             
        <div className="card">
            <div className="extra content"  className={style.button_wrapper}>
            <a>
            <button className={style.news_button}  className=" tiny ui teal basic button">News</button>
                        
            </a>
            </div>
            <div className="blurring dimmable image">
            <div className="ui dimmer">
                <div className="content">
                <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                </div>
                </div>
            </div> <Image
                        src={"/images/image-2.jpeg"}
                        width={550}
                        height={400}
                        />
            </div>
            <div className="content">
                <h1 id={style.card_title}>
                Is Paul Rudd (Antman) the sexiest man 2021?
                </h1>
            </div>
            <div className="extra content">
                <p>
                    published on:12/11/2021
                </p>
            </div>
            
        </div>


        <div className="card" id={style.middle_cards} >
            <div className="extra content"  className={style.button_wrapper}>
            <a>
            <button id={style.gossip_button}  className=" tiny ui blue basic button">Gossip</button>
                        
            </a>
            </div>
            <div className="blurring dimmable image">
            <div className="ui dimmer">
                <div className="content">
                <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                </div>
                </div>
            </div> 
            
            <Image
                src={"/images/image-2.jpeg"}
                width={550}
                height={400}
             />

             
            </div>
            <div className="content">
                <h1 id={style.card_title}>
                Is Paul Rudd (Antman) the sexiest man 2021?
                </h1>
            </div>
            <div className="extra content">
                <p>
                    published on:12/11/2021
                </p>
            </div>
            
        </div>




        <div className="card" id={style.middle_cards}>
            <div className="extra content"  className={style.button_wrapper}>
            <a>
            <button id={style.entertainment_button}  className=" tiny ui violet basic button">Entertainment</button>
                        
            </a>
            </div>
            <div className="blurring dimmable image">
            <div className="ui dimmer">
                <div className="content">
                <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                </div>
                </div>
            </div> <Image
                        src={"/images/image-2.jpeg"}
                        width={550}
                        height={400}
                        />
            </div>
            <div className="content">
                <h1 id={style.card_title}>
                Is Paul Rudd (Antman) the sexiest man 2021?
                </h1>
            </div>
            <div className="extra content">
                <p>
                    published on:12/11/2021
                </p>
            </div>
            
        </div>

        <div className="card">
            <div   className={style.button_wrapper}>
            <a>
            <button id={style.world_button}  className=" tiny ui purple basic button">World</button>
                        
            </a>
            </div>
            <div className="blurring dimmable image">
            <div className="ui dimmer">
                <div className="content">
                <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                </div>
                </div>
            </div> <Image
                        src={"/images/image-2.jpeg"}
                        width={550}
                        height={400}
                        />
            </div>
            <div className="content">
                <h1 id={style.card_title}>
                Is Paul Rudd (Antman) the sexiest man 2021?
                </h1>
            </div>
            <div className="extra content">
                <p>
                    published on:12/11/2021
                </p>
            </div>
            
        </div>
 */}

        </div>
    </div>
        
    )
}
