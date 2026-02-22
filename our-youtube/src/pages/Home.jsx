function Home() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px", fontWeight: "600" }}>
        Recommended Videos
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div key={item} style={{
            background: "#202020",
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "0.3s"
          }}>
            <div style={{
              height: "150px",
              background: "#333"
            }} />
            <div style={{ padding: "12px" }}>
              <h3 style={{ fontSize: "14px" }}>
                Sample Video Title {item}
              </h3>
              <p style={{
                fontSize: "12px",
                color: "#aaa",
                marginTop: "5px"
              }}>
                Channel Name • 1M views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home