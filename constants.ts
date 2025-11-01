import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: 'Prabalakshmi Arumugam',
    location: 'Boise, ID',
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
    'Hardware Description and Verification': ['Verilog', 'SystemVerilog', 'UVM'],
    'Programming Languages': ['Python', 'C++', 'MATLAB'],
    'Simulation and EDA Tools': [
      'Cadence Virtuoso',
      'Spectre',
      'ModelSim',
      'Synopsys Design Compiler',
      'Quartus',
      'Xilinx Vivado',
      'COMSOL',
    ],
    'AI/ML and Software Development': [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Git',
      'Linux',
    ],
  },
  experience: [
    {
      company: 'Dish Network Technologies',
      role: 'Software Engineer',
      dates: 'Aug 2022 – Dec 2024',
      location: 'Bengaluru, India',
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
      description: [
        'Performed root cause analysis on failed Variable Frequency drive (VFD) PCBs using advanced microscopy and electrical probing, identifying defects such as solder joint fractures, trace burns, and component failures.',
        'Prepared detailed failure reports linking defect characteristics to potential process or material issues, enabling targeted corrective actions by manufacturing quality teams.',
        'Identified previously undetected defects missed by Automatic Optical Inspection (AOI) and collaborated with the team to integrate them into the AOI detection library for improved defect tracking.',
      ],
    },
  ],
  projects: [
    {
      title: 'Low-Noise Neural Amplifier Design',
      technologies: 'Cadence Virtuoso',
      date: 'Spring 2025',
      description: [
        'Designed a folded Cascode neural amplifier (less than 1 microWatt power, microvolt-level signal amplification) using gm/ID methodology; achieved 47 V/V gain and 7 kHz bandwidth.',
        'Executed TT/SS/FF corner, Monte Carlo, and noise simulations to assess PVT robustness, mismatch effects, and minimize input-referred noise with thick oxide devices.',
        'Validated performance via AC, transient, and noise analyses in Spectre; documented gain, phase margin, and integrated noise for final design sign-off.',
      ],
    },
    {
      title: 'DRAM-Based In-Memory ALU Accelerator',
      technologies: 'Verilog, Yosys',
      date: 'Spring 2025',
      description: [
        'Engineered a custom 8-bit ALU (addition and multiplication) in Verilog, synthesized with Yosys, and integrated at the DRAM column decoder for near-data processing.',
        'Enabled 64-way parallelism (8 banks × 8 subarrays), achieving 546 GigaOps per second throughput with only 0.4% area overhead at 130nm, and benchmarked timing (tRCD, tCAS), power (12.5 microW per ALU), and energy (125–250 fJ/op), demonstrating scalability for embedded AI.',
      ],
    },
    {
      title: 'AXI-Based PWM Module Design and Verification',
      technologies: 'Verilog, SystemVerilog, ModelSim, Yosys',
      date: 'Summer 2025',
      description: [
        'Designed an AXI4-Lite register-mapped PWM peripheral in SystemVerilog, supporting programmable period, duty cycle, and enable/disable control, and integrated for SoC-level readiness.',
        'Developed a self-checking UVM/SystemVerilog testbench with assertions, functional coverage, and protocol checks for AXI handshakes; validated functionality via GTKWave waveform analysis and protocol compliance.',
        'Synthesized the design with Yosys using FPGA flow, generated area/utilization reports (LUTs, FFs).',
      ],
    },
  ],
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
      title: 'Analog & Mixed-Signal IC Design',
      icon: '/op-amp-icon.png',
      description: "I am passionate about the art of crafting high-performance analog circuits from the transistor level up. My work on a low-noise neural amplifier highlights my interest in designing for high sensitivity and ultra-low power, pushing the boundaries of what's possible in biomedical and sensor applications."
    },
    {
      title: 'Digital Design & Verification',
      icon: '/waveform-icon.png',
      description: "I enjoy the structured process of building and validating complex digital systems. Designing an AXI-based peripheral and creating a comprehensive UVM testbench for it solidified my appreciation for rigorous verification methodologies that ensure robust, error-free hardware."
    },
    {
      title: 'Next-Generation Memory Architectures',
      icon: '/dram-icon.png',
      description: "Exploring architectures that challenge the traditional separation of memory and compute is a key interest. My project on a DRAM-based in-memory accelerator was a fascinating dive into how near-data processing can overcome performance bottlenecks for emerging AI workloads."
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