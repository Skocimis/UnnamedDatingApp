import './ScreenLoader.css'


function ScreenLoader(){
    return (
        <div style={{display:'flex',flex:1,height:'80vh',justifyContent: 'center', alignItems: 'center'}}>
        <div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>
</div>
    )
}

export default ScreenLoader