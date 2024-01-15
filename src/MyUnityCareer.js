import React, { useState, useEffect } from 'react';
import './MyUnityCareer.css';
import 'intersection-observer';

const MyUnityCareer = () => {
    const [animationTriggered1, setAnimationTriggered1] = useState(false);
    const [animationTriggered2, setAnimationTriggered2] = useState(false);
    const [animationTriggered3, setAnimationTriggered3] = useState(false);
    const [animationTriggered4, setAnimationTriggered4] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                    if (entry.target.classList.contains('img-p2'))
                        entry.target.style.animation = 'fadeInLeft 1s forwards';
                    else if (entry.target.classList.contains('text-p2'))
                        entry.target.style.animation = 'fadeInRight 1s forwards 0.5s';
                    else if (entry.target.classList.contains('img-p3'))
                        entry.target.style.animation = 'fadeInRight 1s forwards ';
                    else if (entry.target.classList.contains('text-p3'))
                        entry.target.style.animation = 'fadeInLeft 1s forwards 0.5s';

                }
            });
        }, { threshold: 0.5 });

        // Add observer to each element you want to animate
        document.querySelectorAll('.content p, .second-paragraph img, .second-paragraph .text-p2, .third-paragraph .img-p3, .third-paragraph .text-p3')
            .forEach(el => observer.observe(el));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);


    return (
        <div className="my-component">
            <div className="circle2"></div>
            <div className={`content `}>



                <div className={`second-paragraph ${animationTriggered2 ? 'animate' : ''} `}>
                    <img src={process.env.PUBLIC_URL + '/bookTopView.jpg'} alt="Your Image" className="img-p2"  />
                    <div className="text-p2">
                        <h1> Placeholder Title </h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
                    </div>
                </div>
                
                <div className={`third-paragraph ${animationTriggered3 ? 'animate' : ''}`}>
                    <img src={process.env.PUBLIC_URL + '/bookTopView2.jpg'} alt="Another Image" className="img-p3" />
                    <div className="text-p3">
                        <h1> Placeholder Title </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna,</p>
                    </div>
                </div>

                <button className="button">
                    click me
                </button >

                <p>Your content paragraph 4</p>
                <p>Your content paragraph 4</p>
                <p>Your content paragraph 4</p>
                <p>Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                    Your content paragraph 4
                </p>
                    {/* Add more content as needed */}
            </div>
        </div>
    );
};

export default MyUnityCareer;