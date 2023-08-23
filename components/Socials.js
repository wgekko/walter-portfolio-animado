// links
import Link from "next/link";



// icons
import {
  RiLinkedinBoxFill,  
  RiGithubFill, 
  RiSendPlaneFill,  
  RiArrowDownCircleFill,  
  RiDiscordFill,
  RiMailCheckFill,
  //RiMailCheckLine
 
} from 'react-icons/ri';

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('Walter_Gomez_Resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Walter_Gomez_Resume.pdf';
          alink.click();
      })
  })
}

const Socials = () => {
  return(   
  <div className="flex items-center gap-x-5 text-2xl">
    <Link  href={'https://www.linkedin.com/in/walter-gomez-fullstack-developer-java-python-adm-finanzas/'}  target="_blank" className="hover:text-accent transition-all duration-300" >
      <RiLinkedinBoxFill />
    </Link>     
    <Link  href={'https://github.com/wgekko'}  target="_blank" className="hover:text-accent transition-all duration-300" >
      <RiGithubFill />
    </Link>  
    <Link  href={'https://discord.gg/VXdZemCQ'} target="_blank" className="hover:text-accent transition-all duration-300" >
      <RiDiscordFill />
    </Link>  
    <Link  href={''} onClick={onButtonClick} className="hover:text-accent transition-all duration-300" >      
        < RiArrowDownCircleFill/>     
    </Link>   
    { /*       
    <Link  href={''} className="hover:text-accent transition-all duration-300" >
      <RiMailCheckFill />
    </Link>  
     */ }
  </div>
  );
};

export default Socials;
