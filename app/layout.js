export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      
      <body>
        <div style={{ width:'50%', margin:'auto'}}>
          <h3>My Todo List Application</h3><h3/>
          {children}
        </div>
      </body>
    </html>
  )
}
