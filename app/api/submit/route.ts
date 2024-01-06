import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  try {
    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const formData = await request.json();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "iscafapplications@gmail.com",
        pass: "bduc tnui zpvh kxiu",
      },
    });

    const mailOptions = {
      from: "iscafapplications@gmail.com",
      to: "trashlinkmain@gmail.com",
      subject: "Continuing Education Form Submission",
      text: `
        Name: ${formData.name}
        ISU Student Identification Number: ${formData.studentId}
        Personal (non-ISU) Email Address: ${formData.email}
        Parents Names and Mailing Address: ${formData.parentsInfo}
        Philanthropic Activities: ${formData.philanthropicActivities}
        On-Campus Activities/Clubs: ${formData.onCampusOrganization}
        Other Awards: ${formData.otherAwards}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form data submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
