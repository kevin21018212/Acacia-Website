"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import LilDownloadBox from "./lildownloadbox";

const ContinuingEducationForm = ({ onClose }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    parentsInfo: "",
    gradeReport: false,
    philanthropicActivities: "",
    onCampusOrganization: "",
    otherAwards: "",
    certificationImage: null,
  });

  const handleChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleFileUpload = (e: any) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form Data Submitted Successfully");
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h4>Continuing Education Form</h4>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <textarea
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            ISU Student Identification Number:
            <textarea
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Personal (non-ISU) Email Address:
            <textarea
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Parents Names and Mailing Address:
            <textarea
              name="parentsInfo"
              value={formData.parentsInfo}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Includ a copy of your most recent grade report
            <input
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
              name="gradeReportFile"
              onChange={handleFileUpload}
              required
            />
          </label>

          <label>
            List the two chapter-sponsored philanthropic activities in which you
            participated.
            <input
              type="text"
              name="philanthropicActivities"
              value={formData.philanthropicActivities}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            On-Campus Activities/Clubs:
            <input
              type="text"
              name="onCampusOrganization"
              value={formData.onCampusOrganization}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Other scholarships and monetary awards you will receive in the
            semester,<b> along with amounts</b>, which you are eligible to
            receive from the ISACF.
            <textarea
              name="otherAwards"
              value={formData.otherAwards}
              onChange={handleChange}
              required
              className={styles.bigInput}
            />
          </label>

          <div className={styles.signatureBox}>
            Signatures(upload filled form):
            <div className={styles.buttonBox}>
              <LilDownloadBox
                title={"Signature Form"}
                file={"signaturetemplate.png"}
              />
            </div>
          </div>
          <label className={styles.signatureUpload}>
            <input
              type="file"
              accept="image/*"
              name="certificationImage"
              onChange={handleFileUpload}
              required
            />
          </label>
          <div className={styles.BottomBox}>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
            <button className={styles.submit} onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContinuingEducationForm;
