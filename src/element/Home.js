

export default function Home() {
  return (
    <>
      <div style={{margintop: '100vw'}}>
      <div className="char" style={{ top: 200, left: '5vw' }}>
        B
      </div>
      <div className="char" style={{ top: 200, left: '20vw' }}>
        I
      </div>
      <div className="char" style={{ top: 200, left: '30vw' }}>
        L
      </div>
      
      <div className="char" style={{ bottom: 40, left: '40vw' }}>
        S
      </div>
      <div className="char" style={{ bottom: 40, left: '60vw' }}>
        S
      </div>
      <div className="border border-2 rounded dark2 "style={{ position: 'absolute', top: 650, right: 40, fontSize: '15px', textAlign: 'right' }}>
      SCROLL
        <br />
        HERE
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '15px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        —
        <br />
        13/06/23
      </div>
     
      <div style={{ position: 'absolute', bottom: 120, left: 120, fontSize: '18px' }}>
      <p style={{color:"#d1cdcd"}}>Journey to a new dimension,
        <br />
        for more realism 3D.</p>
        <br />
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontSize: '15px', fontWeight: 600, letterSpacing: 2,display: 'inline-block' }} href="https://github.com/pmndrs/drei#caustics">
            DOCUMENTATION
          </a>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
        <br />
      </div>
      </div>
    </>
  )
}
