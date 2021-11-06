import {useState,useEffect} from 'react';
import logoteste from '../../Images/uverse-logo.png'
import portugues from '../../Images/lingua-portuguesa.png'
import matematica from '../../Images/matematica-img.jpg'
import geografia from '../../Images/geografia-img.jpg'
import sond1 from '../../audios_books/sond1.mp3';
import sond2 from '../../audios_books/sond2.mp3';



import Player from '../../components/Player';


import '../Home/home.css';











const Page = () =>{


	


	const [songs,setSongs] = useState([
		{
	
			title:"Geografia-Audio",
			artist: "",
			img_src:geografia,
			src:sond1
	
		},
	
		{
	
			title:"Matemática-Audio",
			artist: "",
			img_src:portugues,
			src:sond2
	
		},
	
	
		{
	
			title:"Português-Audio",
			artist: "",
			img_src:matematica,
			src:sond2
	
		},
	
	
	
	]);
	
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
	
	
    

 
    return(

       <> 



      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
			

        </>
       

       
        


    
    )
}

export default Page ;