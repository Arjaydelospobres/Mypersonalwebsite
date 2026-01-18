import React from "react";
import { motion } from "framer-motion";
import ModalImage from "react-modal-image";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <ModalImage
        small={image}
        large={image}
        // style={{width:"300px"}}
        // className="w-full h-60"
        // imageBackgroundColor="green"
      />

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Well come to my</p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} flex overflow-x-scroll gap-7`}>
        {certificates.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
