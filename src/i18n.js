import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      Education: "Education",
      Projects: "Projects",
      Certificate: "Certificate",
      Contact: "Contact",
      downloadFile: "Download File PDF",
      1: "Hi, I'm Tae",
      2: "I’m studying at Dhurakij Pundit University",
      3: "I'm studying for a Master's degree in a Master of Science program. (Web Engineering and Mobile Application Development)",
      4: "I specialize in UX/UI Design, Responsive Web Design",
      5: "I love programming and hope that one day I can work as a programmer",
      6: "CONTACT ME",
      7: "Education",
      8: "RajPracha Samasai (elementary school)",
      9: "I study here from grade 1-6",
      10: "RajPracha Samasai (middle school)",
      11: "I study here from grade 7-12",
      12: "PrangKu Technological Commercial College",
      13: "High Vocational Certificate in Business Computer",
      14: "University of the Thai Chamber of Commerce",
      15: "Bachelor's degree in Information and communications technology (ICT)",
      16: "Dhurakij Pundit University (ANT)",
      17: "Master Degrees in Master of Science (Web Engineering and Mobile Application Development)",
      18: "Projects",
      19: "Repair notification",
      20: "This is a project I did as an undergraduate. I'm doing this project with 2 friends. This project involves online repair alerts. This project is written in PHP using the Mysql database within the project. Job levels are divided into 4 parts",
      21: "Admin",
      22: "Supervisor",
      23: "Technician",
      24: "User",
      25: "Chat Apps",
      26: "This is a research I do as an undergraduate. This research is about building a chat application. This research uses Flutter framework to develop applications. and use with firebase database",
      27: "Contact",
      28: "Name",
      29: "Your Email",
      30: "Subject",
      31: "Message",
      32: "SEND",
      33: "Certificate",
    },
  },
  th: {
    translation: {
      Home: "หน้าหลัก",
      Education: "การศึกษา",
      Projects: "โปรเจค",
      Certificate: "ใบรับรอง",
      Contact: "ติดต่อ",
      downloadFile: "ดาวโหลดไฟล์ PDF",
      1: "สวัสดี, ผมชื่อเต้",
      2: "ผมกำลังศึกษาอยู่ที่ มหาลัยธุรกิจบัณฑิต",
      3: "ผมกำลังศึกษาอยู่ในระดับปริญญาโทในสาขา (วิศวกรรมเว็บและการพัฒนาแอปพลิเคชันบนอุปกรณ์พกพา)",
      4: "ผมถนัดด้านการออกแบบ UX/UI, และเว็บเรซสปอนต์ซีฟ ดีไซน์",
      5: "ผมรักการเขียนโปรแกรมและหวังไว้ว่าสักวันจะได้ทำงานเป็นโปรแกรมเมอร์",
      6: "ติดต่อผม",
      7: "การศึกษา",
      8: "โรงเรียนราชประชาสมาสัย (ฝ่ายประถม)",
      9: "ผมเรียนที่นี้ ตอน ป 1-6",
      10: "โรงเรียนราชประชาสมาสัย (ฝ่ายมัธยม)",
      11: "ผมเรียนที่นี้ ตอน ม 1-6",
      12: "วิทยาลัยเทคโนโลยีพณิชยการปรางค์กู่",
      13: "วุฒ ปวส สาขาคอมพิวเตอร์ธุรกิจ",
      14: "มหาวิทยาลัยหอการค้าไทย",
      15: "วุฒ ปริญญาตรี สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
      16: "มหาวิทยาลัยธุรกิจบัณฑิตย์ (ANT)",
      17: "วุฒ ปริญญาโท (สาขาวิชาวิศวกรรมเว็บและการพัฒนาแอปพลิเคชันบนอุปกรณ์พกพา)",
      18: "โปรเจค",
      19: "ระบบแจ้งซ่อม",
      20: "นี่เป็นโปรเจคที่ผมทำตอนจบปริญญาตรี ผมทำโปรเจคนี้กับเพือนอีก 2 คน โปรเจคนี้เป็นโปรเจคเกี่ยวกับการแจ้งซ่อมออนไลน์ โปรเจคนี้เขียนด้วยภาษา PHP และใช้ฐานข้อมูลเป็น MySql ภายในโปรเจคจะแบ่งระดับการใช้งาน 4 ระดับดังนี้",
      21: "ผู้ดูแลระบบ",
      22: "หัวหน้างาน",
      23: "ช่าง",
      24: "ผู้ใช้งาน",
      25: "แอปสนทนา",
      26: "นี่เป็นงานวิจัยที่ผมได้ทำในช่วงปริญญาตรี งานวิจัยนี้จะเกี่ยวกับการสร้างแอปพลิเคชันสนทนา งานวิจัยนี้ผมได้ใช้ Flutter Framework ในการพัฒนาแอปพลิเคชัน และใช้งานกับฐานข้อมูล Firebase",
      27: "ติดต่อ",
      28: "ชื่อ",
      29: "อีเมล ของคุณ",
      30: "หัวข้อ",
      31: "ข้อความ",
      32: "ส่ง",
      33: "ใบรับรอง",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
