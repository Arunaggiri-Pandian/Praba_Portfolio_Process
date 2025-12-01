import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: 'Prabalakshmi Arumugam',
    location: 'Boise, Idaho',
    phone: '+1 208-550-6649',
    email: 'prabaarumugam@u.boisestate.edu',
    linkedin: 'https://linkedin.com/in/prabalakshmi',
    github: 'https://github.com/Prabalakshmi',
  },
  education: [
    {
      institution: 'Boise State University',
      degree: 'Master of Engineering in Electrical and Computer Engineering',
      gpa: '3.9/4.0',
      dates: 'Jan 2025 – Dec 2026',
      location: 'Boise, ID',
      details: [
        'CMOS Analog IC Design',
        'Memory-Centric Architecture',
        'Advanced Device Design and Simulation',
        'Digital Hardware Design',
        'Computer Architecture',
        'Digital Integrated Circuit Design',
      ],
      logo: '/Boise_State_University_logo.jpeg'
    },
    {
      institution: 'Anna University',
      degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
      gpa: '3.6/4.0',
      dates: 'Aug 2018 – Jun 2022',
      location: 'Tamil Nadu, India',
      details: [],
      logo: '/Anna_University_Logo.png'
    },
  ],
  skills: {
    'Semiconductor Process & Device Physics': [
      'CMOS & FinFET Fabrication Principles',
      'Photolithography & Etching Concepts',
      'Semiconductor Device Physics',
      'Physical Design (Layout)',
      'Design Rule Checking (DRC)',
    ],
    'Data Analysis & Process Control': [
      'Python (NumPy, Pandas, Matplotlib)',
      'Statistical Process Control (SPC)',
      'Yield Analysis',
      'MATLAB',
      'SQL',
    ],
    'Characterization & Simulation Tools': [
      'Cadence Virtuoso',
      'Spectre',
      'COMSOL',
      'Synopsys TCAD (Conceptual)',
    ],
    'Hardware Design & Verification': [
      'Verilog', 
      'SystemVerilog', 
      'Xilinx Vivado',
      'ModelSim'
    ],
    'General Software & OS': ['Git', 'Linux', 'React', 'Streamlit'],
  },
  experience: [
    {
      company: 'Boise State University',
      role: 'Graduate Teaching Assistant',
      dates: 'Aug 2025 – Present',
      location: 'Boise, ID',
      logo: '/Boise_State_University_logo.jpeg',
      description: [
        'Supported ECE/CSE 180: Introduction to Electrical and Computer Engineering, a first-year gateway course focused on building foundational skills in ECE.',
        'Guided students through basic circuit design, embedded systems, and programming fundamentals via hands-on labs using Arduino microcontrollers.',
        'Facilitated group discussions on ECE subfields, strategies for success in STEM, and the use of essential engineering tools and platforms.',
        'Helped foster a collaborative and inclusive environment, encouraging curiosity and a strong sense of community among incoming students.',
      ],
    },
    {
      company: 'Boise State University',
      role: 'Grader',
      dates: 'Aug 2025 – Present',
      location: 'Boise, ID',
      logo: '/Boise_State_University_logo.jpeg',
      description: [
        'Assisted Prof. Andres Valdepana by grading homework and lab assignments for ECE 472 Power Electronics.',
        'Provided constructive feedback to support student learning.',
      ],
    },
    {
      company: 'Boise State University',
      role: 'Graduate Teaching Assistant',
      dates: 'Jan 2025 – May 2025',
      location: 'Boise, ID',
      logo: '/Boise_State_University_logo.jpeg',
      description: [
        'Supported instruction for ECE 330: Audio Signal Processing, assisting Dr. Neal Bangerter during lab sessions.',
        'Facilitated student learning through weekly office hours and one-on-one guidance.',
        'Evaluated and graded assignments and lab reports, providing constructive, detailed feedback to help students improve.',
        'Helped undergraduate students understand core concepts in audio signal processing, including Fourier Transforms, spectral analysis, and frequency domain filtering.',
      ],
    },
    {
      company: 'Boise State University',
      role: 'Grader',
      dates: 'Jan 2025 – May 2025',
      location: 'Boise, ID',
      logo: '/Boise_State_University_logo.jpeg',
      description: [
        'Assisted Prof. Andres Valdepana by grading homework and lab assignments for Smart Grid and Renewable Energy Resources.',
        'Provided constructive feedback to support student learning.',
      ],
    },
    {
      company: 'Dish Network Technologies',
      role: 'Software Engineer',
      dates: 'Aug 2022 – Dec 2024',
      location: 'Bengaluru, India',
      logo: '/dish_Networks_Logo.png',
      description: [
        'Developed and optimized backend services for Sling streaming platform using Python, Django and MSSQL, implementing advanced SQL tuning to reduce server response time by 25%.',
        'Designed RESTful APIs and GraphQL endpoints, cutting API latency by 20% and validating performance with Postman.',
        'Streamlined deployment processes and ensured consistent environments across stages by implementing CI/CD with Jenkins and GitLab, and managing containerization with Docker and Kubernetes.',
      ],
    },
    {
      company: 'Delta Electronics',
      role: 'Physical Failure Analysis Intern',
      dates: 'Feb 2022 – Jul 2022',
      location: 'Hosur, India',
      logo: '/Delta_Electronics_Logo.png',
      description: [
        'Performed root cause analysis on failed Variable Frequency drive (VFD) PCBs using advanced microscopy and electrical probing, identifying defects such as solder joint fractures, trace burns, and component failures.',
        'Prepared detailed failure reports linking defect characteristics to potential process or material issues, enabling targeted corrective actions by manufacturing quality teams.',
        'Identified previously undetected defects missed by Automatic Optical Inspection (AOI) and collaborated with the team to integrate them into the AOI detection library for improved defect tracking.',
      ],
    },
  ],
  projects: {
    graduate: [
      {
        title: 'FPGA-Based Vending Machine Controller',
        technologies: 'Verilog, Xilinx Vivado',
        date: 'Fall 2025',
        description: [
          'Designed a soda vending machine in Verilog using a Finite State Machine (FSM) controller and a custom datapath (adders, comparators) for logic operations.',
          'Managed the complete RTL-to-bitstream flow in Xilinx Vivado, including synthesis, implementation, and writing .XDC constraint files for the Zybo board, and verified with a command-driven testbench.',
          'Analyzed synthesis reports to compare FSM encoding styles for resource usage (LUTs vs. FFs) and implemented on Zybo.',
        ],
        image: '/projects/fpga_vending_machine_controller.png',
      },
      {
        title: 'Low-Noise Neural Amplifier Design',
        technologies: 'Cadence Virtuoso',
        date: 'Spring 2025',
        description: [
          'Designed a folded Cascode neural amplifier (less than 1 microWatt power, microvolt-level signal amplification) using gm/ID methodology; achieved 47 V/V gain and 7 kHz bandwidth.',
          'Executed TT/SS/FF corner, Monte Carlo, and noise simulations to assess PVT robustness, mismatch effects, and minimize input-referred noise with thick oxide devices.',
          'Validated performance via AC, transient, and noise analyses in Spectre; documented gain, phase margin, and integrated noise for final design sign-off.',
        ],
        image: '/projects/neural_amplifier.png',
      },
      {
        title: 'DRAM-Based In-Memory ALU Accelerator',
        technologies: 'Verilog, Yosys',
        date: 'Spring 2025',
        description: [
          'Engineered a custom 8-bit ALU (addition and multiplication) in Verilog, synthesized with Yosys, and integrated at the DRAM column decoder for near-data processing.',
          'Enabled 64-way parallelism (8 banks × 8 subarrays), achieving 546 GigaOps per second throughput with only 0.4% area overhead at 130nm, and benchmarked timing (tRCD, tCAS), power (12.5 microW per ALU), and energy (125–250 fJ/op), demonstrating scalability for embedded AI.',
        ],
        image: '/projects/dram_alu.png',
      },
      {
        title: 'AXI-Based PWM Module Design and Verification',
        technologies: 'Verilog, Xilinx Vivado',
        date: 'Summer 2025',
        description: [
          'Designed an AXI4-Lite register-mapped PWM peripheral in Verilog, supporting programmable period, duty cycle, and enable/disable control, and integrated for SoC-level readiness.',
          'Developed a self-checking testbench with assertions and functional coverage for AXI handshakes; validated functionality via waveform analysis and protocol compliance.',
          'Synthesized the design with Xilinx Vivado using an FPGA flow, generated area/utilization reports (LUTs, FFs).',
        ],
        image: '/projects/axi_pwm.png',
      },
    ],
    undergraduate: [
      {
        title: 'Fraudless Fuelling',
        technologies: 'Embedded Systems, Ultrasonic Sensors, Arduino',
        date: 'Oct 2019 - Feb 2021',
        description: [
          'Modelled a device to prevent fuel fraud at petrol pumps by accurately measuring the fuel being filled.',
          'The device allows for cross-verification with the pump\'s digital meter to detect discrepancies.',
          'Aims to provide a clear and immediate alert if the measured fuel level does not match the paid amount, preventing deception.',
        ],
        image: '/projects/fraudless_fuelling.png',
      },
      {
        title: 'IV - Auto Assist',
        technologies: 'Embedded Systems, Sensor Technology, Automation',
        date: 'Feb 2020 - Dec 2020',
        description: [
          'Designed a cost-efficient system to monitor IV fluid levels and alert hospital staff when the saline bottle is nearly empty.',
          'Incorporated an autonomous mechanism to automatically stop fluid flow, preventing blood backflow when the bottle is empty.',
          'Eliminates the need for continuous manual monitoring, allowing healthcare staff to manage multiple patients more efficiently and safely.',
        ],
        image: '/projects/iv_auto_assist.png',
      },
    ],
  },
  publications: [
    {
      authors: ['Sai Kumar T S', 'Prabalakshmi A', 'Arunaggiri Pandian K.', 'Alagammal S.'],
      year: 2021,
      title: 'A Comparative Study on Plant Classification Performance Using Deep Learning Optimizers.',
      conference: '2021 International Conference on Emerging Trends in Industry 4.0 (ETI 4.0).',
      link: 'https://doi.org/10.1109/eti4.051663.2021.9619238',
      linkText: 'View Publication'
    },
    {
      authors: ['Arunaggiri Pandian K.', 'Sai Kumar T S', 'Thabasum Aara S', 'Prabalakshmi A.'],
      year: 2021,
      title: 'Identification of Indian Medicinal Plants from Leaves using Transfer Learning Approach.',
      conference: '2021 5th International Conference on Trends in Electronics and Informatics (ICOEI).',
      link: 'https://doi.org/10.1109/icoei51242.2021.9452917',
      linkText: 'View Publication'
    },
    {
      authors: ['Thabasum Aara S.', 'Arunaggiri Pandian K.', 'Sai Kumar T S', 'Prabalakshmi A.'],
      year: 2021,
      title: 'A Novel Convolutional Neural Network Architecture to Diagnose COVID-19.',
      conference: '2021 3rd International Conference on Signal Processing and Communication (ICPSC).',
      link: 'https://doi.org/10.1109/icspc51351.2021.9451701',
      linkText: 'View Publication'
    },
  ],
  interests: [
    {
      title: 'Semiconductor Manufacturing',
      icon: '/icons/semiconductor_manufacturing.png',
      description: "I am fascinated by the entire silicon fabrication lifecycle, from front-end-of-line (FEOL) processes like lithography and etch that build the transistor, to back-end-of-line (BEOL) metallization that connects everything. My focus is on how these intricate steps integrate to create reliable and high-performance devices."
    },
    {
      title: 'Data-Driven Process Optimization',
      icon: '/icons/data_optimization.png',
      description: "I am passionate about leveraging data to drive manufacturing excellence. My focus is on applying statistical methods like SPC and designing experiments (DoE) to analyze process data, identify trends, and provide actionable insights for yield enhancement."
    },
    {
      title: 'Root Cause Analysis',
      icon: '/icons/root_cause_analysis.png',
      description: "I enjoy the systematic challenge of troubleshooting process deviations. My background in design verification has equipped me with a methodical mindset for investigating defect sources, analyzing failure data, and implementing robust corrective actions."
    },
    {
      title: 'Semiconductor Device Physics',
      icon: '/icons/device_physics.png',
      description: "I am fascinated by the link between fabrication processes and the final electronic properties of a device. My focus is on understanding how lithography, etching, and deposition fundamentally define the performance and reliability of transistors."
    },
    {
      title: 'Process Integration',
      icon: '/icons/process_integration.png',
      description: "I am interested in the complete manufacturing flow, from wafer start to final test. My focus is on how different process modules interact and and how to optimize the entire sequence to build reliable, high-performance integrated circuits."
    }
  ],
  hobbies: [
    { title: 'Vibe Coding', icon: '/hobbies/vibe-coding.png', mindset: 'Driven by Curiosity' },
    { title: 'Weight Training', icon: '/hobbies/weight-training.png', mindset: 'Built by Discipline' },
    { title: 'Running', icon: '/hobbies/running.png', mindset: 'Powered by Endurance' },
    { title: 'Pickleball', icon: '/hobbies/pickleball.png', mindset: 'Fueled by Energy' },
    { title: 'Tennis', icon: '/hobbies/tennis.png', mindset: 'Inspired by Strategy' },
    { title: 'Cooking', icon: '/hobbies/cooking.png', mindset: 'Crafted with Creativity' },
    { title: 'Travel', icon: '/hobbies/travel.png', mindset: 'Shaped by Cultures' },
    { title: 'Movie Fanatic', icon: '/hobbies/movie-fanatic.png', mindset: 'Inspired by Stories' },
    { title: 'Entrepreneurial Chai Time', icon: '/hobbies/chai-time.png', mindset: 'Enriched by Connection' },
    { title: 'Seeking New Challenges', icon: '/hobbies/seeking-challenges.png', mindset: 'Defined by Growth' },
  ]
};