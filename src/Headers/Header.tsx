 import './Header.css'
 import header from '../assets/logi.jpg'
export default function Header() {
  return (
     <div className='header'>
     <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}><img src={header} alt="header" style={{width:1100, height:600, alignSelf:"center"}}/></div> 
     <div>
      <h2 style={{textAlign:"center", fontWeight:"bold"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam</h2>
      <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam</p>
     </div>
     </div>
  );
}
