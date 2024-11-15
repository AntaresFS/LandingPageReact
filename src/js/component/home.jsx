import React from "react";
import Navbar from "./navbar"
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
import placeholderImage from "../../img/placeholder.png"

//create your Home component
const Home = () => {
	const cards = [
		{
			imgSrc: placeholderImage,
			title: 'Card title 1',
			text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		},
		{
			imgSrc: placeholderImage,
			title: 'Card title 2',
			text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		},
		{
			imgSrc: placeholderImage,
			title: 'Card title 3',
			text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		},
		{
			imgSrc: placeholderImage,
			title: 'Card title 4',
			text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		},
		{
			imgSrc: placeholderImage,
			title: 'Card title 5',
			text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		}, {
			imgSrc: placeholderImage,
			title: 'Card title 6',
			text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		},
	];

	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center row row-cols-1 row-cols-md-3 g-4 p-5">
				{cards.map((card, index) => (
					<Card title={card.title} text={card.text} imgSrc={card.imgSrc} />
				))}
			</div>
			<Footer />
		</>
	);
};

export default Home;
