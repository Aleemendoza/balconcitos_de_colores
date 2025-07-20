import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Location from "@/components/Location";
import ReservationCalendar from "@/components/ReservationCalendar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Hosts from "@/components/Hosts";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <main>
        <Hero />
        <Accommodations />
        <Location />
        <ReservationCalendar />
        <Testimonials />
        <Hosts />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
