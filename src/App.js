import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Model } from "./element/ModelKotak";
import { Modelpsvita } from "./element/modelpsvita";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "./element/NavigasiBar";
import Home from "./element/Home";
import About from "./element/About";
import Project from "./element/Project";
import Contact from "./element/Contact";

export default function App() {
  return (
    <>
      <NavBar />

      <section id="home">
        <Container fluid className="Container-t1">
          <Row>
            <Col >
              <Canvas style={{ width: "100%", height: "100vh" }} >
                <ambientLight intensity={0.5} />
                
                <directionalLight intensity={3} color="white" position={[-5, -5, -5]} />
                <directionalLight intensity={3} color="white" position={[5, 5, 5]} />
                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                  <Suspense fallback={null}>
                    <Modelpsvita />
                  </Suspense>
                </Float>
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={1.5}
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 10}
                  maxPolarAngle={Math.PI / 2.8}
                />
              </Canvas>
            </Col>
          </Row>
          <Home />
        </Container>
      </section>

      <section id="about">
        <Container fluid className="text-center Container-t2 ">
          <Row className="justify-content-md-center">
            <Col>
              <About />
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} md={6} lg={4}>
              <div style={{ margin: "auto", width: "auto", height: "50vh" }}>
                <Canvas >
                  <ambientLight intensity={1} />

                  <Suspense fallback={null}>
                    <Modelpsvita position={[0, 0, 0]} />
                  </Suspense>
                  <OrbitControls
                    autoRotate
                    autoRotateSpeed={4}
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.8}
                    maxPolarAngle={Math.PI / 2.8}
                  />
                  <directionalLight color="white" position={[5, 5, 5]} />
                </Canvas><h4>PSVITA MODEL</h4>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div
                style={{
                  position: "relative",
                  margin: "auto",
                  width: "auto",
                  height: "50vh",
                }}
              >
                <Canvas>
                  <ambientLight intensity={1} />

                  <Suspense fallback={null}>
                    <Model position={[0, 0, 0]} />
                  </Suspense>
                  <OrbitControls
                    autoRotate
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.8}
                    maxPolarAngle={Math.PI / 2.8}
                  />
                  <directionalLight color="white" position={[5, 5, 5]} />
                </Canvas>
                <h4>PSVITA MODEL</h4>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div
                style={{
                  position: "relative",
                  margin: "auto",
                  width: "auto",
                  height: "50vh",
                }}
              >
                <Canvas>
                  <ambientLight intensity={1} />

                  <Suspense fallback={null}>
                    <Model position={[0, 0, 0]} />
                  </Suspense>
                  <OrbitControls
                    autoRotate
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.8}
                    maxPolarAngle={Math.PI / 2.8}
                  />
                  <directionalLight color="white" position={[5, 5, 5]} />
                </Canvas>
                <h4>Hello</h4>
              </div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </section>

      <section id="project">
        <div icePixelRatio fluid className="Container-t3">
          <Project />
        </div>
      </section>

      <section id="contact">
        <Container fluid className="Container-t4">
          <Row>
            <Col>
              <Contact />
            </Col>
          </Row>

          <Canvas style={{ width: "100%", height: "70vh" }} >
                <ambientLight intensity={0.5} />
                
                <directionalLight intensity={3} color="white" position={[-5, -5, -5]} />
                <directionalLight intensity={3} color="white" position={[5, 5, 5]} />
                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                  <Suspense fallback={null}>
                    <Modelpsvita />
                  </Suspense>
                </Float>
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={1.5}
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 10}
                  maxPolarAngle={Math.PI / 2.8}
                />
              </Canvas>
        </Container>
      </section>
    </>
  );
}
