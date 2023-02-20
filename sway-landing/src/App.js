import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect, useRef} from 'react'
import ScreenLoader from './components/Loaders/ScreenLoader';
import BasicButton from './components/Buttons/BasicButton'
import ShortDescriptionTag from './components/Cards/ShortDescriptionTag';
import TextBouble from './components/Cards/TextBouble';
import haki from './images/haki.png';
import ani from './images/ani.png'
import loca from './sounds/loca.mp3'
import sway from './sounds/sway.mp3'

import moon from './sounds/moon.mp3'

import { Row, Col } from 'antd';

const themeIndex = Math.floor(Math.random() * 3);
const music = [loca,moon,sway];
const colors = ['#f5fcb9','#f3c6f7','#fccbcb']
const secondaryColors = ['#fafabf','#f9f9f9',"pink"]
const lineColor =['black','white']
function App() {
  const [loading,setLoading] = useState(true)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    //ucitaj
    setLoading(false);
  });
  async function sendEmail () {
    setLoading(true)
  }
  const audioRef = useRef(null);

  const handlePlayButtonClick = () => {
    audioRef.current.play();

  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 90,
      behavior: 'smooth'
    });
  };

  function playMusic(){
    if(playing){
      audioRef.current.pause();

      setPlaying(false)
    }
    else
    {
      handlePlayButtonClick()
      setPlaying(true)
    }
  }
  return (
    !loading ?
    <div className="App" style={{ display:'flex',flex:1,flexDirection:"column",backgroundColor:colors[themeIndex]}}>
      <Row>
        <Col span={24}>
          <div style={{display:'flex',flexDirection:'column',margin:10, }}>
            <h1 className='my-heading'>Spontaneous dating made simple.</h1>
            <h1 className='my-heading'>Blind dates with the people you’ll</h1>
            <h1 className='my-heading' ><a style={{backgroundColor:'black',color:'white',paddingLeft:5}}>actually     like. </a> </h1>
            <div style={{width:40, height:40, marginTop:20}}>
            <BasicButton  text="Play some music" playing ={playing} image={true} onClick={playMusic}></BasicButton>
            <audio ref={audioRef} src={music[themeIndex]} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={14} xs={24} > 
        <div className='email-div' >
          <div className='waitlist-text'>
            <div style={{fontFamily:'Abril Fatface',}}>Join the waitlist for</div>
            <div style={{display:'flex',flexDirection:'row'}}><div style={{fontFamily:'Abril Fatface',whiteSpace:'pre-wrap'}}>the </div> <div style={{fontFamily:'ABeeZee'}}>UnnamedDatingApp</div> </div>
          </div>
          <div className='waitlist-email'>
            <input placeholder='Enter your email address' type="email" className='email-input'/>
          </div>
          <div className='waitlist-email'>
          <BasicButton onClick={sendEmail} text="Join now"></BasicButton>
          </div>
          </div>
          <div className='lineDiv1'></div>
        </Col>
        <Col xl={8} xs={24}>
          <div style={{display: 'flex',flexDirection: 'column', height:'100%', justifyContent: 'space-between', alignItems: 'center',padding:20}} className="shortDescContainter">
          <div className='shortDecsDiv' style={{alignSelf:'self-end', marginLeft:20}}>
            <ShortDescriptionTag text="     Sign up      "/>
          </div>
          <div className='shortDecsDiv' style={{marginTop:20,alignSelf:'self-start', marginRight:20}}>
            <ShortDescriptionTag text="       Like       "/>
          </div>
          <div className='shortDecsDiv' style={{marginTop:20,alignSelf:'self-end', marginLeft:20,}}>
            <ShortDescriptionTag text=" You're all set "/>
            <a style={{color:'black'}}>(fate will handle the rest)</a>
          </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={24} xs={24}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between',alignItems:'center', flexDirection:'column', backgroundColor:"black", marginTop:70, paddingTop:20,paddingBottom:20}}>
        <a style={{fontFamily:'Raleway',color:'white', fontSize:30,padding:5}}>A bit more details ...</a>
        </div>
        </Col>
      </Row>
      <Row >
          <Col xl={12} xs={24}>
          <div style={{width:'100%',display: 'flex',justifyContent: 'center',fontFamily:"Peddana",fontSize:80}}>
          <div class="phone-card" style={{backgroundColor:secondaryColors[themeIndex]}}>
            <div className='image-div'>
                <img src={haki} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <TextBouble text="Sign up and start liking people"/>
            <div style={{display: 'flex', justifyContent:'flex-start',width:'90%'}}>
            <a style={{fontSize:22,fontWeight:'bold',fontFamily:'Nanum Brush Script',color:'black',marginTop:10}}>(You can, of course, undo likes.)</a>
            </div>
          </div>
          </div>          
          </Col>
          <Col xl={12} xs={24}>
          <div style={{width:'100%',display: 'flex',justifyContent: 'center', alignItems:'baseline', marginTop:50,fontFamily:"Peddana",fontSize:80}}>
          
          <div class="phone-card" style={{backgroundColor:secondaryColors[themeIndex]}}>
          <div className='image-div'>
                <img src={ani} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <TextBouble text="When you get a match, you will be notified, but you won’t know who it is and you wont be able to chat."/>
          </div>
          </div>
          </Col>
      </Row>
      <Row >
          <Col xl={12} xs={24}>
          <div style={{width:'100%',display: 'flex',justifyContent: 'center', alignItems:'baseline', marginTop:50,fontFamily:"Peddana",fontSize:80 }}>
          <div class="phone-card" style={{backgroundColor:secondaryColors[themeIndex]}}>
          <TextBouble dark text="A match is near by,                   what will you do? "/>
          <div style={{marginTop:"20%"}}></div>
          <TextBouble text="Once a match is near by (~500m) you will both get a notification, like the one above.                                                                  Again, all anonymous."/>
          <div  style={{display:'flex',marginTop:"20%", width:"100%",justifyContent: 'center',alignItems: 'center',}}>
          <a style={{fontSize:40,fontWeight:'bold', color:'black', fontFamily:"Noto Sans Malayalam",}}>Now you have two options.</a>
          </div>
          </div>
          </div>          
          </Col>
          <Col xl={12} xs={24}>
          <div style={{width:'100%',display: 'flex',justifyContent: 'center', alignItems:'baseline'}}>
              <div className="large-card" style={{backgroundColor:secondaryColors[themeIndex]}}>
                <div style={{width:'90%',display: 'flex',justifyContent:'flex-end',}}>
                 <a className="slovo" style={{margin:10,fontSize:35,fontFamily:'McLaren', color:'black',fontWeight:'bold'}}>A</a> 
                <TextBouble text="Go on a impromptu “date” immediatly, we pick the spot. "/>
                </div>
                <a style={{margin:30,fontSize:40,fontFamily:'McLaren', color:'black',fontWeight:'bold'}}>Or</a> 
                <div style={{width:'90%',display: 'flex',justifyContent:'flex-start', }}>
                <a className="slovo" style={{margin:10,fontSize:35,fontFamily:'McLaren', color:'black',fontWeight:'bold'}}>B</a> 
                <TextBouble text="Open a chat which lasts 24 hours. You won’t be able to see the person’s profile picture or bio, just a random name that we have created. After that, your match is gone forever. (You can only have one chat at the time)"/>

                </div>
              </div>
          </div>
          </Col>
      </Row>
      <Row style={{marginTop:100}}>
        <Col xl={16} xs={24}>
          <div style={{width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <a style={{fontFamily:'McLaren', fontSize:30, color:'black',margin:10}}>Like responsibly, you might get to meet them.</a>
          </div>
        </Col>
        <Col xl={8} xs={24}>
        <div style={{width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:100, }}>
          <BasicButton onClick={scrollToTop} text={"Ready ?"}></BasicButton>
          </div>
        </Col>
      </Row>
      <Row style={{marginTop:100,backgroundColor:'black'}}>
        <Col xl={24} xs={24}>
            <div className="footer-text-div">
                <a className="footer-text">We are kind of indie and not venture backed (yet), </a>
                <a className="footer-text">so feel free to help keep the red lights on by dropping some e-bucks into our </a>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:20}}>
                <a className="footer-link">KickStarter </a>
                <a className="footer-link">PayPal </a>
                <a className="footer-link">GoFundMe</a>
                </div>
            </div>
            <div className="footer-text-div">
                <a className="footer-text">If you want to contact us, just hit us up at contact@unnameddatingapp.com.</a>
            </div>
            <div className="footer-text-div">
                <a className="footer-text">And of course, join the </a>
                <a onClick={()=>{scrollToTop()}} className="footer-text" style={{fontWeight: "bold",fontSize:40}}> waitlist </a>
                <a className="footer-text">to get access when we launch.</a>
            </div>
        </Col>
      </Row>
    </div>
    : <ScreenLoader/>
  );
}

export default App;
