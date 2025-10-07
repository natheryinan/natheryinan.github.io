import React from 'react'

export default function App() {
  return (
    <div style={{minHeight:'100vh',padding:'32px',maxWidth:960,margin:'0 auto'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
        <h1 style={{margin:0,fontSize:24,fontWeight:700}}>Yinan Yang</h1>
        <a href="/Yinan_Yang_CV.pdf" style={{border:'1px solid #ddd',borderRadius:12,padding:'8px 12px',textDecoration:'none',color:'#111'}}>Download CV</a>
      </header>
      <section>
        <h2 style={{fontSize:20}}>Welcome</h2>
        <p>This is a minimal Vite + React starter already configured. Replace <code>src/App.jsx</code> with your academic site code when you're ready.</p>
        <ul>
          <li>Put your photo at <code>public/profile.jpg</code></li>
          <li>Put your resume at the project root as <code>Yinan_Yang_CV.pdf</code></li>
        </ul>
        <p style={{marginTop:16}}>Run <code>npm install</code> then <code>npm run dev</code> to preview. Deploy to GitHub Pages using your repo <code>yinanyang.github.io</code>.</p>
      </section>
    </div>
  )
}
