import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./history.module.css";
import { textVariants } from "../animations";

const History = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        <motion.h1 variants={textVariants} initial="hidden" animate="visible">
          History
        </motion.h1>
      </div>

      <motion.p
        className={styles.paragraph}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {isExpanded ? (
          <>
            <div className={styles.expandedContent}>
              <p>
                The idea for the creation of the Iowa State Acacia Chapter
                Foundation arose from a series of discussions between Brothers
                Jim Davis #489 and Harold Zarr #814 in 2019. The process of
                constructing the new chapter house was well underway and they
                believed that there was a clear need for an organization
                specifically designed to support the chapter on a long-term
                basis. The alumni support provided for the construction of the
                chapter house was magnificent, but they were concerned that
                without an organization whose mission was clearly focused on the
                long-term future of the Iowa State Chapter of Acacia, momentum
                might be lost and alumni support might be lost or taken up by
                other organizations.
              </p>

              <p>
                Out of these discussions, Harold Zarr drafted the original
                articles of incorporation for the Foundation. Working with
                Philip Goldsmith and Dale Cremers (our accountants at Denman &
                Company, LLP) he applied for and obtained an IRS 501(c)(3)
                identification number. Together, Jim and Harold identified and
                recruited the initial set of members for the Board of Directors
                of the Foundation which included Jim Davis #489 (President),
                Richard W. Taylor #506, James M. McDonald #571, John Lynch #711,
                Harold Zarr #814 (Secretary-Treasurer), Gene Lucht #852
                (Vice-President), and Craig Buske #1009. They also wrote and
                printed an eight-page brochure that was distributed to all of
                the alumni outlining the new organization and how it would be
                used to benefit the undergraduate chapter.
              </p>
              <p>
                As a part of the IRS approval process, the Board adopted a
                number of Operating Policies required by the IRS including
                conflicts of interest, fundraising, gifts, investment procedures
                and scholarship requirements and disbursements, to name but a
                few. The objective behind adopting these policies was not simply
                to meet the requirements set by the IRS, but to also establish
                the guidelines that would ensure that the organization would be
                run in a professional manner. Through this means, we want the
                alumni to feel confident that this organization will meet its
                organizational goals.
              </p>
              <p>
                After the initial group of board members got the organization up
                and running, James McDonald (in 2020) and Richard Taylor (in
                2023) moved into Director Emeritus positions. Randy Elkin
                replaced Richard Taylor on the board. Gene Lucht retired as
                vice-president of the board and was replaced Roger Kingery in
                2023.
              </p>

              <p>
                The original goals for the new Foundation consisted of two
                items. The first was to raise funds to be used for scholarships
                for the undergraduate members living in the chapter house and to
                cover the educational-use expenses of the chapter house. The
                second goal was to ensure that every dollar donated was used to
                meet the first goal. To this end, all expenses incurred by the
                Foundation are covered by donations from the members of the
                Board of Directors.
              </p>

              <p>
                As most of us know and understand, nearly all charities utilize
                some percentage of the donations received to cover their
                operational expenses. For example, the ISU Foundation retains 5%
                of each dollar donated and allocates it to cover its operational
                costs. The AFF charges a percentage fee on a quarterly basis
                (about 3% annually) to cover its operational costs. This is an
                entirely normal process as the vast majority of charities
                (including the ISACF) will incur operational costs on a regular
                basis. For example, the ISACF mails out quarterly reports to as
                many of the alumni as possible. We also have a Directors and
                Officers insurance policy to cover actions of the Board. These
                costs are covered by donations from the members of the Board so
                that every dollar donated by alumni is used for the purpose
                intended.
              </p>
              <p>
                During its short four-year life, the ISACF has grown from an
                initial $1,150 investment by Jim Davis and Harold Zarr to a
                foundation whose value as of December 31, 2023 is in excess of
                $579,000. This has been made possible through the generous
                support of the alumni of the Iowa State Chapter of Acacia
                Fraternity. The board is deeply grateful to all of the alumni
                for their support. We look forward to a bright future for your
                Foundation!
              </p>
              <br />
            </div>
          </>
        ) : (
          <>
            The idea for the creation of the Iowa State Acacia Chapter
            Foundation arose from a series of discussions between Brothers Jim
            Davis #489 and Harold Zarr #814 in 2019. The process of constructing
            the new chapter house was well underway and they believed that there
            was a clear need for an organization specifically designed to
            support the chapter on a long-term basis. The alumni support
            provided for the construction of the chapter house was magnificent,
            but they were concerned that without an organization whose mission
            was clearly focused on the long-term future of the Iowa State
            Chapter of Acacia, momentum might be lost and alumni support might
            be lost or taken up by other organizations.
          </>
        )}
      </motion.p>

      <div className={styles.readMoreContainer}>
        {isExpanded ? (
          <span className={styles.readLess} onClick={toggleReadMore}>
            Read Less
          </span>
        ) : (
          <span className={styles.readMore} onClick={toggleReadMore}>
            View More
          </span>
        )}
      </div>
    </div>
  );
};

export default History;
