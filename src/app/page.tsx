import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <SocialLinks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
