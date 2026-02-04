import React, { useEffect, useRef } from 'react';
import ssstik from '../../assests/audio/ssstik.mp3';
import ssstik1 from '../../assests/audio/ssstik1.mp3';


function Reproductor() {
	const audioRef = useRef(null);
	const audioRef1 = useRef(null);

	useEffect(() => {
		audioRef1.current.play();
		if (audioRef.current) {
		audioRef.current.play().catch((error) => {
		console.error("Error al reproducir el audio:", error);
		});
		}
	}, []);

return (
	<audio 
		ref={audioRef} 
		src={ssstik} 
		loop={false}
		autoPlay />,
	
	<audio 
		ref={audioRef1} 
		src={ssstik1} 
		loop={false} 
		autoPlay />
);
} 			

export default Reproductor;