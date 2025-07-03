// import "./App.css";
// import React, { useState } from "react";
// import emailjs from "emailjs-com"; 

// import Logo from "../src/images/rasm.png";

// function App() {
//   const [activeTab, setActiveTab] = useState("about");

//   const tabs = {
//     about: {
//       title: "About Me",
//       content: (
//         <>
//           <p>
//             Passionate Frontend Developer with expertise in modern web
//             technologies. I create beautiful, responsive user interfaces and
//             bring creative designs to life.
//           </p>
//           <p>
//             Specialized in React, Vue.js, and modern CSS frameworks, I deliver
//             high-quality solutions that enhance user experience and drive
//             business growth.
//           </p>
//         </>
//       ),
//     },
//     projects: {
//       title: "Projects",
//       content: <p>Here you can showcase your projects.</p>,
//     },
//   contact: {
//   title: "Contact",
//   content: (
//     <form
//       className="contact-form"
//       onSubmit={(e) => {
//         e.preventDefault();
//         emailjs
//           .sendForm(
//             "service_hm1ap37",
//             "template_1tdr2xs",
//             e.target,
//             "BMsh5T8Io8vp_-nLf" 
//           )
//           .then(() => {
//             alert("Xabar yuborildi!");
//             e.target.reset();
//           })
//           .catch((error) => {
//             alert("Xabar yuborilmadi: " + error.text);
//           });
//       }}
//     >
//       <input type="text" name="name" placeholder="Ismingiz" required />
//       <input type="email" name="email" placeholder="Email manzilingiz" required />
//       <textarea name="message" placeholder="Xabaringiz" required></textarea>
//       <button type="submit">Yuborish</button>
//     </form>
//   ),
// },

//   };

//   return (
//     <div>
//       <div className="cart">
//         <img className="img" src={Logo} alt="Logo" />
//         <h1 className="ism">Bahromjon Najmiddinov</h1>
//         <p className="job">Frontend Developer</p>

//         <div className="icons">
//           <a
//             href="https://github.com/web-mux"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa-brands fa-github"></i>
//           </a>

//           <a
//             href="https://t.me/webmux"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa-brands fa-telegram"></i>
//           </a>

//           <a
//             href="https://linkedin.com/in/webmux"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa-brands fa-linkedin"></i>
//           </a>

//           <a
//             href="https://www.instagram.com/najmiddinov.b1/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa-brands fa-instagram"></i>
//           </a>
//         </div>

//         <div className="menu">
//           <ul>
//             <li>
//               <button
//                 className={activeTab === "about" ? "active" : ""}
//                 onClick={() => setActiveTab("about")}
//               >
//                 About
//               </button>
//             </li>

//             <li>
//               <button
//                 className={activeTab === "projects" ? "active" : ""}
//                 onClick={() => setActiveTab("projects")}
//               >
//                 Projects
//               </button>
//             </li>

//             <li>
//               <button
//                 className={activeTab === "contact" ? "active" : ""}
//                 onClick={() => setActiveTab("contact")}
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="content">
//         <div className="card-content">
//           <h2>{tabs[activeTab].title}</h2>
//           {tabs[activeTab].content}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






import "./App.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../src/images/rasm.png";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [modal, setModal] = useState({ show: false, message: "", success: true });

  const tabs = {
    about: {
      title: "About Me",
      content: (
        <>
          <p>
            Passionate Frontend Developer with expertise in modern web
            technologies. I create beautiful, responsive user interfaces and
            bring creative designs to life.
          </p>
          <p>
            Specialized in React, Vue.js, and modern CSS frameworks, I deliver
            high-quality solutions that enhance user experience and drive
            business growth.
          </p>
        </>
      ),
    },
    projects: {
      title: "Projects",
      content: <p>Soon !</p>,
    },
    contact: {
      title: "Contact",
      content: (
        <ContactForm setModal={setModal} />
      ),
    },
  };

  return (
    <div>
      <div className="cart">
        <img className="img" src={Logo} alt="Logo" />
        <h1 className="ism">Bahromjon Najmiddinov</h1>
        <p className="job">Frontend Developer</p>

        <div className="icons">
          <a href="https://github.com/web-mux" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://t.me/webmux" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram"></i>
          </a>

          <a href="https://linkedin.com/in/webmux" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/najmiddinov.b1/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="menu">
          <ul>
            <li>
              <button
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
            </li>

            <li>
              <button
                className={activeTab === "projects" ? "active" : ""}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
            </li>

            <li>
              <button
                className={activeTab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="card-content">
          <h2>{tabs[activeTab].title}</h2>
          {tabs[activeTab].content}
        </div>
      </div>

      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

function ContactForm({ setModal }) {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    const text = `📩 *Yangi xabar!*\n\n👤 Ism: ${name}\n📧 Email: ${email}\n📝 Xabar: ${message}`;

    try {
      const response = await fetch(
        "https://api.telegram.org/bot8114094408:AAExEUowDojJrx0jeLpkZTI1PxC0VdhXFr0/sendMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "-1002772739079",
            text: text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!response.ok) throw new Error("Xabar yuborishda muammo yuz berdi");

      setModal({ show: true, message: "Xabar muvaffaqiyatli yuborildi!", success: true });
      e.target.reset();
    } catch (error) {
      setModal({ show: true, message: "Xabar yuborilmadi: " + error.message, success: false });
    }

    setLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={sendMessage}>
      <input type="text" name="name" placeholder="Ismingiz" required />
      <input type="email" name="email" placeholder="Email manzilingiz" required />
      <textarea name="message" placeholder="Xabaringiz" required></textarea>
      <button type="submit" disabled={loading}>
        {loading ? "Yuborilmoqda..." : "Yuborish"}
      </button>
    </form>
  );
}

function Modal({ modal, setModal }) {
  return (
    <AnimatePresence>
      {modal.show && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModal({ ...modal, show: false })}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <motion.div
            className={`modal-window ${modal.success ? "success" : "error"}`}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px 30px",
              borderRadius: "8px",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            }}
          >
            <p style={{ marginBottom: "20px", color: modal.success ? "green" : "red" }}>{modal.message}</p>
            <button onClick={() => setModal({ ...modal, show: false })} style={{
              padding: "8px 20px",
              backgroundColor: modal.success ? "green" : "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}>
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
