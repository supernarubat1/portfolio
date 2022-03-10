import React, { useState } from "react";
import Layout from "../components/Layout";
import { Timeline, TimelineEvent } from "react-event-timeline";
import {
  FaPencilAlt,
  FaPen,
  FaPencilRuler,
  FaPenAlt,
  FaBook,
  FaRegSmileBeam,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const github = "/portfolio";
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState(
    `${github}/images/profile/profile.jpg`
  );
  const certificates = [
    {
      path: `${github}/images/certificate/AndroidCertificate.jpg`,
      name: "Core Android Application Development",
    },
    {
      path: `${github}/images/certificate/Arduino_ESP8266_IoT_Certificates.jpg`,
      name: "ArduinoAll Training Course",
    },
    {
      path: `${github}/images/certificate/BasicNetwork.jpg`,
      name: "Basic Network Installation and Troubleshooting",
    },
    {
      path: `${github}/images/certificate/C_Sharp.jpg`,
      name: "C# 4.0 Basic and OOP Programming (Implement by using C#.NET)",
    },
    {
      path: `${github}/images/certificate/ComputerSoftware.jpg`,
      name: "Computer Software of PSU MOOC",
    },
    {
      path: `${github}/images/certificate/CU_CU005_html_css_javascript.jpg`,
      name: "สู่การเป็นนักพัฒนาเว็บ : การสร้างหน้าเว็บเบื้องต้นด้วย HTML และ CSS",
    },
    {
      path: `${github}/images/certificate/Flutter.jpg`,
      name: "Build Mobile App with Flutter Mega Course",
    },
    {
      path: `${github}/images/certificate/Information_Security_Awareness_Foundational.jpg`,
      name: "Information Security Awareness - Foundational",
    },
    {
      path: `${github}/images/certificate/React.jpg`,
      name: "ฝึกสร้างเว็บด้วย React อย่างมือโปร",
    },
    {
      path: `${github}/images/certificate/Unity_2D_3D.jpg`,
      name: "Game Makeing Starter Kit",
    },
    {
      path: `${github}/images/certificate/Web.jpg`,
      name: "ฝึกสร้างเว็บจากเริ่มต้น ไปเป็นมือโปร",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const service = "service_fv7nimc";
    const template = "template_lcnxbs8";
    const form = e.target;
    const userId = "user_LO506Yb2QrZQ8BGaFltmn";

    const email = await emailjs.sendForm(service, template, form, userId);

    if (email.status === 200) {
      e.target.reset();
      Swal.fire({
        title: "Success",
        text: "Send email success",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        {/* Home */}
        <div id="home" className="grid justify-items-center pt-36 space-y-10">
          {/* profile */}
          <img
            onMouseEnter={() =>
              setProfileImage(`${github}/images/profile/profile-swim.jpg`)
            }
            onMouseOut={() =>
              setProfileImage(`${github}/images/profile/profile.jpg`)
            }
            className="rounded-full object-cover h-44 w-44"
            src={profileImage}
            alt="profile"
          />
          {/* text */}
          <div className="p-4 text-center">
            <h1 className="text-white text-center text-4xl font-bold">
              {t("1")}
            </h1>
            <h1 className="text-white text-lg mt-10">{t("2")}</h1>
            <h1 className="text-white text-lg">{t("3")}</h1>
            <h1 className="text-gray-500 text-xl mt-10 line-through">
              {t("4")}
              <p>
                {t("5")}
                <FaRegSmileBeam className="inline mx-2 hover:text-yellow-400" />
              </p>
            </h1>
          </div>
          {/* btn contact */}
          <div className="py-10">
            <a
              href="#contact"
              className="animate-bounce inline-block z-50 w-full px-10 py-4 rounded-full text-black bg-white font-semibold"
            >
              {t("6")}
            </a>
          </div>
        </div>
        {/* Education */}
        <div id="education" className="py-28">
          <h1 className="text-white text-4xl font-bold text-center">{t(7)}</h1>
          <div className="mt-20">
            <Timeline>
              {/* ป 1 - 6 */}
              <TimelineEvent
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                subtitleStyle={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                contentStyle={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius: "9999px",
                  // backgroundColor: "red",
                }}
                bubbleStyle={{ color: "black", border: "0px solid #000" }}
                title={t(8)}
                // subtitle="RajPracha Samasai (elementary school)"
                icon={<FaPencilAlt />}
              >
                {t(9)}
              </TimelineEvent>
              {/* ม 1 - 6 */}
              <TimelineEvent
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                subtitleStyle={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                contentStyle={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius: "9999px",
                }}
                bubbleStyle={{ color: "black", border: "0px solid #000" }}
                title={t(10)}
                // subtitle="RajPracha Samasai (middle school)"
                icon={<FaPen />}
              >
                {t(11)}
              </TimelineEvent>
              {/* ปวส */}
              <TimelineEvent
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                subtitleStyle={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                contentStyle={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius: "9999px",
                }}
                bubbleStyle={{ color: "black", border: "0px solid #000" }}
                title={t(12)}
                // subtitle="PrangKu Technological Commercial College"
                icon={<FaPencilRuler />}
              >
                {t(13)}
              </TimelineEvent>
              {/* ป ตรี */}
              <TimelineEvent
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                subtitleStyle={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                contentStyle={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius: "9999px",
                }}
                bubbleStyle={{ color: "black", border: "0px solid #000" }}
                title={t(14)}
                // subtitle="University of the Thai Chamber of Commerce"
                icon={<FaPenAlt />}
              >
                {t(15)}
              </TimelineEvent>
              {/* ป โท */}
              <TimelineEvent
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  // textDecorationLine: "line-through",
                }}
                subtitleStyle={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
                contentStyle={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius: "9999px",
                  textDecorationLine: "line-through",
                }}
                bubbleStyle={{ color: "black", border: "0px solid #000" }}
                title={t(16)}
                // subtitle="University of the Thai Chamber of Commerce"
                icon={<FaBook />}
              >
                {t(17)}
              </TimelineEvent>
            </Timeline>
          </div>
        </div>
        {/* Projects */}
        <div id="projects" className="py-28">
          <h1 className="text-white text-4xl font-bold text-center">{t(18)}</h1>
          {/* project 1 */}
          <div className="mt-20 gap-x-4 gap-y-10 md:gap-y-20 grid lg:grid-cols-2 mx-4">
            <div className="relative">
              <h1 className="text-white text-2xl font-semibold">{t(19)}</h1>
              <p className="text-gray-500 mt-4">{t(20)}</p>
              <ul className="list-decimal text-gray-500 ml-6 md:mb-20">
                <li>{t(21)}</li>
                <li>{t(22)}</li>
                <li>{t(23)}</li>
                <li>{t(24)}</li>
              </ul>
              <a
                href={`${github}/files/online_repair_notification_system.pdf`}
                target="_blank"
                className="text-white inline-block rounded border px-4 py-2 mt-10 md:mt-0 md:absolute md:bottom-0 hover:bg-white hover:text-black"
                rel="noreferrer"
              >
                {t("downloadFile")}
              </a>
            </div>
            <div>
              <img
                className="object-cover rounded"
                src={`${github}/images/projects/project1.png`}
                alt="project1"
              />
            </div>
          </div>
          <hr className="mt-20 mx-4 border-gray-500" />
          {/* project 2 */}
          <div className="mt-20 gap-x-4 gap-y-10 md:gap-y-20 grid md:grid-cols-2 mx-4">
            <div className="relative">
              <h1 className="text-white text-2xl font-semibold">{t(25)}</h1>
              <p className="text-gray-500 mt-4">{t(26)}</p>
              <a
                href={`${github}/files/chat_app.pdf`}
                target="_blank"
                className="text-white inline-block rounded border px-4 py-2 mt-10 md:mt-0 md:absolute md:bottom-0 hover:bg-white hover:text-black"
                rel="noreferrer"
              >
                {t("downloadFile")}
              </a>
            </div>
            <div>
              <img
                className="object-cover h-96 rounded"
                src={`${github}/images/projects/project2.png`}
                alt="project2"
              />
            </div>
          </div>
        </div>
        {/* Certificate */}
        <div id="certificate" className="py-28">
          <h1 className="text-white text-4xl font-bold text-center">{t(33)}</h1>
          <Carousel
            className="mt-20 mx-4"
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
          >
            {certificates &&
              certificates.map((item) => (
                <div key={item.name}>
                  <img src={item.path} alt="img certificate" />
                  <p className="legend">{item.name}</p>
                </div>
              ))}
          </Carousel>
        </div>
        {/* Contact */}
        <div id="contact" className="py-28">
          <form onSubmit={handleSubmit}>
            <h1 className="text-white text-4xl text-center font-bold">
              {t(27)}
            </h1>
            <div className="mt-20 flex flex-col items-center px-4 gap-8">
              <div className="flex flex-col items-center w-full gap-2">
                <label
                  className="text-white w-full md:w-[600px] block"
                  htmlFor="name"
                >
                  {t(28)} :
                </label>
                <input
                  className="shadow border rounded w-full md:w-[600px] py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="flex flex-col items-center w-full gap-2">
                <label
                  className="text-white w-full md:w-[600px] block"
                  htmlFor="email"
                >
                  {t(29)} :
                </label>
                <input
                  className="shadow border rounded w-full md:w-[600px] py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col items-center w-full gap-2">
                <label
                  className="text-white w-full md:w-[600px] block"
                  htmlFor="subject"
                >
                  {t(30)} :
                </label>
                <input
                  className="shadow border rounded w-full md:w-[600px] py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                  type="text"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="flex flex-col items-center w-full gap-2">
                <label
                  className="text-white w-full md:w-[600px] block"
                  htmlFor="message"
                >
                  {t(31)} :
                </label>
                <textarea
                  className="shadow border rounded w-full md:w-[600px] py-2 px-3 text-black focus:outline-none focus:shadow-outline"
                  rows={4}
                  type="text"
                  name="message"
                  id="message"
                  required
                />
              </div>
              <div className="flex flex-col items-center w-full mt-5">
                <button className="w-full rounded md:w-[600px] py-2.5 text-white bg-gray-500 hover:bg-gray-600 font-semibold">
                  {t(32)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
