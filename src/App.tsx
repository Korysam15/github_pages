import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Leadership } from "./components/Leadership";
import { RecognitionImpact } from "./components/RecognitionImpact";
import { Contact } from "./components/Contact";
export function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <RecognitionImpact />
      <Contact />
    </Layout>
  );
}
