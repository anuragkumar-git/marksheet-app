function Layout({ title, children }) {
  return (
    <>
    {/* <div className='page'> */}
      <div className='card'>
        <h1>{title}</h1>
        {children}
      </div>
    {/* /</div> */}
    </>
  )
}

export default Layout