import React, {useState} from 'react';

export default function ThemesBar({t,buy}) {
    return (
        <div>
            <div style={{
                width:'100%', height:'225px', marginTop:'10px',
                border:'2px solid #cfd1d3', borderRadius:'6px'
            }}>
            
                <div style={{padding:'5px 25px',fontSize:'30px',borderBottom:'2px solid grey',
                    background: '#F7F9FA'
                }}>
                    {t.name}
                </div>
                
                <div style={{padding:'15px 25px'}}>
                    <ColorBlock main={t.main_color} done={t.done_color} t={t} buy={buy}/>
                </div>

            </div>
        </div>
    )
}

function ColorBlock({main,done,t,buy}){
    const [color, setColor] = useState(main);
    return(
        <div style={{display:'flex'}}>
            <div>
                <div style={{display:'flex',alignItems:'center',fontSize:'18px'}}>
                    <div style={{marginRight:'59px'}}>Main Color</div>
                    <div className="colorBlock" style={{background:main, width:'100px',height:'50px', 
                        borderRadius:'5px', border:'2px solid #cfd1d3'
                    }}  onClick={()=>setColor(main)}/>
                </div>
                <div style={{display:'flex',alignItems:'center',fontSize:'18px',marginTop:'15px'}}>
                    <div style={{marginRight:'10px'}}>Completed Color</div>
                    <div className="colorBlock" style={{background:done, width:'100px',height:'50px', 
                        borderRadius:'5px', border:'2px solid #cfd1d3'
                    }} onClick={()=>setColor(done)}/>
                </div>
            </div>

            <div style={{marginLeft:'50px',marginTop:'-5px'}}>
                <div style={{fontSize:'18px'}}>Display</div>
                <div style={{width:'500px',height:'55px',background:'#9e9e9e'}}>
                    <div style={{width:'500px',height:'55px', display:'flex', alignItems:'center',
                        justifyContent:'space-between',background:color}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <svg
                                style={{marginLeft:'5px'}}
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M13 10H17V16H13V10Z" fill="white" fillOpacity="0.5" />
                                <path d="M11 4H7V16H11V4Z" fill="white" />
                                <path d="M18 18H6V20H18V18Z" fill="white" />
                            </svg>
                            <div style={{color:'white',fontSize:'22px'}}>Routine</div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div className="navItem">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                            </div>
                            <div className="navItem">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" fill="white" className="bi bi-award-fill" viewBox="0 0 16 16">
                                <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                </svg>
                            </div>
                            <div className="navItem">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'15px'}}>
                        <div style={{fontSize:'18px'}}>{t.points} Points</div>
                        <div>
                            <button style={{marginLeft:'10px',
                                width:'100px', height:'40px', borderRadius:'5px', fontSize:'18px',
                                background:'#35aef0', border:'2px solid #3abaff', color:'white'
                            }} onClick={()=>buy(t.id,t.points)}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}