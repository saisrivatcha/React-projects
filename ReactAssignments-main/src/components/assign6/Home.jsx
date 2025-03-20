import "./styles.css";
function Home() {
    return (
      <div className="container mt-4">
        <h1 className="display-3 text-center text-secondary">
          Innovate with Tech
        </h1>
        <div className="d-flex justify-content-around mt-4">
          <img
            src="https://emeritus.org/wp-content/uploads/2023/11/tech.png"
            alt=""
            style={{ height: "180px", width: "250px" }}
          />
          <img
            src="https://www.techquintal.com/wp-content/uploads/2017/01/Modern-Technology.jpg"
            alt=""
            style={{ height: "180px", width: "250px" }}
          />
          {/* <img
            src="https://hasonss.com/blogs/wp-content/uploads/2023/10/types-of-technology-2.webp"
            alt=""
            style={{ height: "180px", width: "250px" }}
          /> */}
        </div>
        <div className="mt-4">
          <p className="lead fs-5 text-dark text-justify">
            Technology is at the heart of innovation, driving progress and
            transforming the way we live, work, and connect with the world. From
            cutting-edge advancements in artificial intelligence to the marvels of
            modern engineering, technology empowers us to solve complex problems
            and unlock new opportunities. Embracing technology not only enhances
            productivity but also paves the way for a smarter, more connected
            future. Dive into the latest trends, tools, and solutions that are
            shaping the world of tomorrow.
          </p>
          <p className="lead fs-5 text-dark text-justify">
            In a rapidly evolving world, technology plays a vital role in
            enhancing everyday life. From smart devices to intuitive software,
            these tools simplify tasks, improve efficiency, and create seamless
            experiences. Whether at home, work, or on the go, technology bridges
            gaps and connects us like never before.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  