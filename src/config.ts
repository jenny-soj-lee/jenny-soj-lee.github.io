export const siteConfig = {
  name: "Jenny Lee",
  title: "Hardware Design Engineer",
  description: "Portfolio website of Jenny Lee",
  accentColor: "#459814ff",
  social: {
    email: "jenny.soj.lee@gmail.com",
    linkedin: "https://www.linkedin.com/in/jenny-sojung-lee/",
  },
  aboutMe:
    "Hi, I'm Jenny, a current junior at Cornell University passionate about \
    digital ASIC design, reconfigurable architecture, and effective hardware-software co-design.",
  skills: ["Python", "Verilog", "SystemVerilog", "ROS", "Tcl", "Cadence Digital Design & Implementation (DDI)", "Linux", "Git"],

  projects: [
    {
      name: "Auxiliary and Safety System PCB",
      description:
        "Designed the schematic and PCB layout for the auxiliary and safety system \
        of a fully electric vehicle using the ATmega2560 IC; contributed to critical \
        functionalities required in the vehicle’s entry in the Shell Eco Marathon. \
        Designed integrated buck converters for safe, reliable 48V-to-12V and \
        48V-to-5V power conversion; implemented SPI flash for firmware updates; \
        and added a digital isolator circuit to ensure robust SPI bus communication.",
      link: "https://www.cornellelectricvehicles.org/",
      skills: ["Altium PCB Designer", "LTspice", "Functional Verification"],
    },
    {
      name: "TinyRV2 Processor",
      description:
        "Designed and implemented a fully bypassed, 5-stage pipelined processor microarchitecture \
        in Verilog supporting the TinyRV2 (RISC-V–based) ISA, including datapath, \
        control unit, and a variable-latency multiplier.\
        Developed comprehensive test infrastructure in PyMTL3 to verify processor execution, \
        creating directed and randomized testbenches, debugging pipeline hazards, and \
        validating functional correctness across the entire ISA.",
      skills: ["Verilog", "Python", "Verification"],
    },
    {
      name: "Energy-Efficient Route Planning for Autonomous EV's",
      description:
        "Built and optimized a linear programming model using CVXPY to minimize\
         distance and energy use for electric vehicles by incorporating path \
         length and elevation constraints to approximate battery depletion. \
         Developed a Python application for EV route planning that accepts \
         user-defined source and destination coordinates, leveraging OpenStreetMap \
         data and the Open-Meteo Elevation API to find the optimal path.",
      skills: ["CVXPY", "OSMnx", "Data Visualization"],
    },
    {
      name: "No FRDM for the Fish",
      description:
        "Developed an interactive fishing simulation game using the NXP FRDM-KL25Z\
        board's 3-axis accelerometer and push-buttons as primary inputs, interfacing\
         with a multi-page Python Tkinter GUI via UART serial communication for \
         real-time game mechanic control based on board movement",
      link: "https://pages.github.coecis.cornell.edu/ece3140-sp2025/sl2854/",
      skills: ["Python", "C/C++", "UART Serial Communication"],
    },
  ],
  experience: [
    {
      company: "Cadence Design Systems",
      title: "Digital ASIC Design Engineer Intern",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Executed RTL-to-GDSII digital design flow for a working kitchen sous \
        vide controller chip and the Tensilica HiFi3 Audio Engine using Cadence\
         Genus and Innovus tools on SkyWater 130 nm and GPDK 45 nm process technology",
        "Optimized power, performance, and area (PPA) by analyzing synthesis \
        reports and timing paths to reduce power consumption and area while \
        maintaining design functionality and meeting timing constraints",
      ],
      link: "https://www.cadence.com/en_US/home.html",
    },
    {
      company: "Zhang Research Group",
      title: "Undergraduate Research Assistant",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Conduct research under Dr. Zhiru Zhang on extending TinyTPU, a compact \
        TPU-inspired accelerator, by exploring new microarchitectures to \
        accelerate machine learning workloads.",
        "Design and implement a vector processing unit in SystemVerilog for \
        neural-network inference, including bias accumulation, Leaky ReLU activation, \
        and gradient backpropagation support.",
        "Develop a custom compiler interface that translates Python ML models \
        into accelerator-specific instructions, enabling efficient host–device \
        coordination across the full TPU stack."
      ],
    },
    {
      company: "Cornell Electric Vehicles",
      title: "PCB Design Engineer",
      dateRange: "Sep 2023 - Present",
      bullets: [
        "Design, test, and implement printed circuit boards in Altium Designer for \
        autonomous electric vehicle subsystems (i.e., mechanical control, battery \
        management, safety protocols, real-time data acquisition) to enhance vehicle \
        performance, reliability, and safety",
        "Collaborate with 75+ team members of varying disciplines to create \
        hyper-efficient, autonomous electric vehicles",
      ],
    },
    {
      company: "Cornell University College of Engineering",
      title: "ECE 4800/5280 Undergraduate Teaching Assistant",
      dateRange: "Aug 2025 - Present",
      bullets: [
        "Course: Optimal System Analysis and Design. Supporting instruction on a \
        graduate-level course covering optimization theory and \
        algorithms, including linear programming, convex programming, duality",
        "Grade assignments and exams for undergraduate- and graduate-level students",
      ],
    },
    {
      company: "Cornell University Symbiotic Engineering and Analysis Lab",
      title: "Undergraduate Research Assistant",
      dateRange: "Feb 2025 - Sep 2025",
      bullets: [
        "Conducted research under the guidance of Dr. Maha Haji, developing a data\
         acquisition system for 9 sensors to analyze ultrafiltration performance \
         in high-pressure ocean environments",
        "Designed and engineered 24V circuits to monitor pressure, flow rate, and \
        electrical conductivity of water, ensuring seamless integration with microcontrollers\
         for real-time data processing",
      ],
    },
    {
      company: "Cornell University College of Engineering",
      title: "ECE 2100 Undergraduate Teaching Assistant",
      dateRange: "Aug 2024 - Dec 2024",
      bullets: [
        "Course: Introduction to Circuits. Covers fundamental concepts \
        such as current, voltage, and power; analyzing passive and active circuit components\
        and applying mathematical tools like Laplace transforms, with hands-on lab sessions",
        "Supervise and lead labs, discussion sessions, and office hours, providing \
        hands-on guidance to 90+ students as they construct and debug fundamental circuits \
        using power supplies, signal generators, oscilloscopes, and other simulation/\
        testing equipment and software",
      ],
    },
    {
      company: "MIT Lincoln Laboratory",
      title: "BWSI Microelectronics Teaching Assistant",
      dateRange: "Jun 2024 - Aug 2024",
      bullets: [
        "Collaborate with Dr. Beijia Zhang to lead instruction on microelectronics theory \
        and lab sessions for rising high school seniors in a highly selective summer program \
        sponsored by MIT Lincoln Laboratory",
        "Developed and delivered a PCB design lecture; guided 40+ students in debugging \
        projects involving with Arduino, Raspberry Pi, and ESP32 microcontroller boards as they\
        integrated AI-based computer vision features with Ultralytics YOLO models",
      ],
    },
  ],
  education: [
    {
      school: "Cornell University",
      degree: "Bachelor of Science in ECE and CS",
      dateRange: "Aug 2023 - Dec 2026",
      achievements: [
        "Relevant Coursework: Computer Architecture, High-Level Digital Design Automation,\
         Digital Logic & Computer Organization, Signals & Systems, Microelectronics, Circuits, \
        Object-Oriented Programming, Functional Programming, Data Structures, Analysis of Algorithms, \
        Optimal System Design & Analysis, Machine Learning, Embedded Systems, Foundations of Robotics"
      ],
    },
  ],
};
