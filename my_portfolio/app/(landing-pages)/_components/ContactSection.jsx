import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className=" pb-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white ">
      <motion.div
        className="max-w-7xl mx-auto w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="p-4 md:p-8">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-purple-400"
            variants={itemVariants}
          >
            Contact Information
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <MapPin className="h-8 w-8 text-purple-400" />
              <div>
                <h3 className="font-semibold text-xl mb-1 text-purple-300">
                  Address
                </h3>
                <p className="text-gray-300">
                  123 Professional Street
                  <br />
                  Business City, State 12345
                  <br />
                  United States
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <Phone className="h-8 w-8 text-purple-400" />
              <div>
                <h3 className="font-semibold text-xl mb-1 text-purple-300">
                  Phone
                </h3>
                <p className="text-gray-300">Mobile: +91 9026029479</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <Mail className="h-8 w-8 text-purple-400" />
              <div>
                <h3 className="font-semibold text-xl mb-1 text-purple-300">
                  Email
                </h3>
                <p className="text-gray-300">
                  Personal: ajitchaudhary714@gmail.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
