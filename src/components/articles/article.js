import React, { useState } from 'react'
import "../../css/article/article.css"
import img1 from "../../assets/photo-1581447109217-19026003eba5_adobespark (1).jfif"

const content1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse debitis suscipit ducimus distinctio iusto, quod provident cum earum necessitatibus voluptates veniam cupiditate ratione ullam iste quam impedit. Voluptatum dolor, doloremque delectus corporis eaque totam quo possimus deserunt facere officia veniam autem molestiae amet eum nihil, expedita numquam rerum sed ipsam porro maiores nisi cumque suscipit! Dolor exercitationem nihil fugiat! Ducimus ipsum iste nostrum voluptatum tempore libero ut repellat maiores possimus consequatur provident sed veritatis cumque excepturi eaque doloribus iure officia quo, atque nobis fuga nulla. Harum tenetur nostrum nesciunt, pariatur dicta atque dolor et, ea minus quos obcaecati sunt aspernatur sapiente odit autem odio numquam? Saepe, eligendi nisi quas, at exercitationem error optio a delectus distinctio accusantium nostrum ipsam quasi perspiciatis? Quibusdam vitae dicta ratione nulla beatae sapiente? Blanditiis eum temporibus dolore sunt. Magni dolorem voluptates sed repellat quia dolorum veritatis, blanditiis dolore rerum possimus amet voluptate quo laborum reiciendis ex, repellendus nam numquam ad labore. Perspiciatis ratione nulla ex earum architecto voluptas sapiente quo fugiat. Commodi repudiandae eum nemo non, rerum voluptatum eveniet velit, rem accusantium blanditiis explicabo, a accusamus odio soluta quod? Impedit possimus ut odio et ipsa sequi mollitia eveniet rerum, dolorem tempore eaque, harum veritatis?"
const content2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat nulla quidem, at ducimus cupiditate, ad aspernatur, quibusdam ipsam ut ullam minus a quod quo deserunt nesciunt deleniti. Sequi neque est molestias odio expedita dignissimos eveniet inventore sapiente laborum vel et earum labore aspernatur officiis, molestiae nostrum consequuntur asperiores, modi tempore repellendus temporibus veritatis explicabo! Laborum in cum nobis omnis exercitationem id sapiente animi velit ullam consequatur! Harum eum inventore pariatur corrupti explicabo repellat at. Cupiditate modi iure expedita quasi doloribus quo accusamus atque excepturi, iusto laboriosam officiis quisquam? Qui perferendis maiores repellat distinctio? Quasi asperiores, repellat commodi provident libero quas, exercitationem accusantium earum dolores facilis dolorum sit consectetur tempore sequi quisquam. Neque iure mollitia suscipit accusantium unde, obcaecati perspiciatis."
export default function Article() {
    const [likes, setLikes] = useState(15)
    const [likeToggler, setLikeToggler] = useState(0)
    return (
        <div className="article-container">
            <div className="article-main-container">
                <div className="article-title">
                    <h1>Article Title</h1>
                    <small>Created: 24-May-2021</small>
                </div>
                <div className="content-container">
                    <p className="content1">{content1} </p>
                    <img className="img1" src={img1} alt="..." />
                    <p>{content2}</p>
                </div>
                <div className="article-buttons">
                    <button className="article-buttons-previous">Previous</button>
                    <button className="article-buttons-liked" onClick={(e) => {
                        e.preventDefault()
                        if (likeToggler === 0) {setLikeToggler(1);setLikes(likes+1);}
                        else {setLikeToggler(0);setLikes(likes-1)} 
                    }}>

                        <small>{likes}</small> Liked It!!
                        {
                            likeToggler ?
                                <i className="fas fa-heart"></i> :
                                <i className="far fa-heart"></i>
                        }
                    </button>


                    <button className="article-buttons-next">Next</button>

                </div>

            </div>
        </div >
    )
}
