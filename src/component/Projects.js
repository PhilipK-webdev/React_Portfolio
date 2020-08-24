import React, { useState } from 'react'
import CarouselSlide from './CarouselSlide';
import './style/carousel.css'
import { SLIDE_INFO } from './constants.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Slide } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Projects = () => {

    function Arrow(props) {

        const { direction, clickFunction } = props;
        const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

        return <div onClick={clickFunction}>{icon}</div>;
    }

    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <div className='carousel' {...matches}>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
                <div>
                    <CarouselSlide content={content} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
    );
}

export default Projects
