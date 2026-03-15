"use client";

import { useState } from 'react'
import { 
  Shield, GraduationCap, Search, MessageSquare, Check, X,
  Clock, Users, Award, Calendar, Laptop, BookOpen,
  PlayCircle, ChevronDown, ExternalLink, Star,
  Briefcase, Target, Zap, Globe, Mail, Brain,
  FileText, Video, Coffee, Rocket,Code,
  GitBranch, Terminal, Database, Layout, Server,
  Layers, Cpu, Gauge, Users2, Workflow,
  FolderCode, TestTube, Cloud, Palette,
  TrendingUp, DollarSign, Home, Smartphone,
  ShoppingCart, Newspaper, Youtube, Camera,
  Music, Gamepad, Plane, Car, Heart,
  Building2, Map, Sun, Moon, Activity,
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, Shirt, Watch,
  Lock, Key, Fingerprint, Scan, Eye, EyeOff,
  Wifi, WifiOff, AlertTriangle, AlertCircle,
  ShieldCheck, ShieldAlert, ShieldOff,
  Bug, Network, Radio, Satellite,
  FileCode, FileWarning, FileLock,
  Fingerprint as FingerprintIcon,
  QrCode, ScanLine, Binary, Sigma,
  type Icon as LucideIcon
} from 'lucide-react'
import Link from 'next/link'

export default function CybersecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 26-Week Curriculum with 30 projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Cybersecurity Fundamentals',
      description: 'Understand the core concepts of cybersecurity and the threat landscape.',
      topics: [
        'What is Cybersecurity? - CIA triad (Confidentiality, Integrity, Availability)',
        'Threat Landscape - malware, phishing, DDoS, social engineering',
        'Security Domains - network security, application security, cloud security, IoT security',
        'Cyber Kill Chain - reconnaissance, weaponization, delivery, exploitation',
        'Risk Management - assessment, mitigation, acceptance',
        'Security Frameworks - NIST, ISO 27001, CIS Controls'
      ],
      project: {
        title: 'Project 1: Security Risk Assessment',
        description: 'Conduct a basic security risk assessment for a small business',
        features: ['Asset inventory', 'Threat identification', 'Risk scoring', 'Mitigation recommendations']
      }
    },
    {
      week: 2,
      title: 'Networking Fundamentals',
      description: 'Master networking concepts essential for cybersecurity.',
      topics: [
        'OSI Model - 7 layers, protocols at each layer',
        'TCP/IP Stack - IPv4, IPv6, TCP, UDP, ICMP',
        'Network Devices - routers, switches, firewalls, proxies',
        'Subnetting - CIDR, VLSM, network segmentation',
        'DNS Deep Dive - record types, resolution process, security issues',
        'Wireshark Basics - packet capture, filters, analysis'
      ],
      project: {
        title: 'Project 2: Network Traffic Analysis',
        description: 'Capture and analyze network traffic to identify patterns',
        features: ['Packet capture', 'Protocol analysis', 'Traffic filtering', 'Report findings']
      }
    },
    {
      week: 3,
      title: 'Operating System Security',
      description: 'Secure Windows and Linux operating systems.',
      topics: [
        'Windows Security - permissions, UAC, event viewer, Group Policy',
        'Linux Security - file permissions, sudo, SELinux, AppArmor',
        'User Account Management - principle of least privilege',
        'Patch Management - update strategies, vulnerability patching',
        'System Hardening - removing unnecessary services, secure configurations',
        'Logging and Monitoring - event logs, syslog, auditd'
      ],
      project: {
        title: 'Project 3: System Hardening Script',
        description: 'Create a script to harden a Linux/Windows server',
        features: ['User hardening', 'Service disabling', 'Firewall rules', 'Security baseline']
      }
    },
    {
      week: 4,
      title: 'Cryptography',
      description: 'Understand encryption, hashing, and cryptographic protocols.',
      topics: [
        'Symmetric Encryption - AES, DES, 3DES, modes of operation',
        'Asymmetric Encryption - RSA, ECC, Diffie-Hellman',
        'Hash Functions - MD5, SHA-1, SHA-256, collision resistance',
        'Digital Signatures - signing, verification, certificates',
        'PKI Infrastructure - CAs, certificates, chain of trust',
        'TLS/SSL - handshake, certificates, secure communication'
      ],
      project: {
        title: 'Project 4: File Encryption Tool',
        description: 'Build a command-line tool to encrypt and decrypt files',
        features: ['AES encryption', 'Password-based key derivation', 'File integrity check', 'Secure deletion']
      }
    },
    {
      week: 5,
      title: 'Ethical Hacking Fundamentals',
      description: 'Learn the methodology and ethics of penetration testing.',
      topics: [
        'Ethical Hacking Methodology - reconnaissance, scanning, exploitation',
        'Legal Framework - laws, permissions, scope, reporting',
        'Reconnaissance Techniques - passive, active, OSINT',
        'Scanning Tools - Nmap, masscan, vulnerability scanners',
        'Enumeration - service enumeration, user enumeration',
        'Vulnerability Assessment - identifying, classifying vulnerabilities'
      ],
      project: {
        title: 'Project 5: Network Scanner',
        description: 'Build a network scanner to discover hosts and services',
        features: ['Host discovery', 'Port scanning', 'Service detection', 'OS fingerprinting']
      }
    },
    {
      week: 6,
      title: 'Web Application Security',
      description: 'Identify and exploit web application vulnerabilities.',
      topics: [
        'OWASP Top 10 - injection, broken authentication, XSS, CSRF',
        'SQL Injection - UNION-based, error-based, blind, time-based',
        'Cross-Site Scripting (XSS) - reflected, stored, DOM-based',
        'Cross-Site Request Forgery (CSRF) - attacks and defenses',
        'File Upload Vulnerabilities - malicious file uploads',
        'Burp Suite - proxy, scanner, repeater, intruder'
      ],
      project: {
        title: 'Project 6: Web Vulnerability Scanner',
        description: 'Create a tool to scan for common web vulnerabilities',
        features: ['SQL injection detection', 'XSS detection', 'Directory enumeration', 'Report generation']
      }
    },
    {
      week: 7,
      title: 'Wireless Network Security',
      description: 'Secure and test wireless networks.',
      topics: [
        'WiFi Security Protocols - WEP, WPA, WPA2, WPA3',
        'Wireless Attacks - deauth attacks, evil twin, KRACK',
        'Aircrack-ng Suite - packet capture, cracking',
        'Bluetooth Security - vulnerabilities, BlueBorne',
        'RFID/NFC Security - cloning, relay attacks',
        'Wireless Defense - IDS, rogue AP detection'
      ],
      project: {
        title: 'Project 7: WiFi Security Audit',
        description: 'Audit a wireless network for security weaknesses',
        features: ['Network discovery', 'Encryption analysis', 'Client enumeration', 'Security recommendations']
      }
    },
    {
      week: 8,
      title: 'Malware Analysis',
      description: 'Analyze and understand malicious software.',
      topics: [
        'Malware Types - viruses, worms, trojans, ransomware, rootkits',
        'Static Analysis - examining code without execution',
        'Dynamic Analysis - running malware in sandbox',
        'Reverse Engineering - disassemblers, debuggers, decompilers',
        'Persistence Mechanisms - registry, startup folders, services',
        'Indicators of Compromise - IoCs, YARA rules'
      ],
      project: {
        title: 'Project 8: Malware Sandbox',
        description: 'Set up a sandbox environment for malware analysis',
        features: ['Isolated environment', 'Behavior monitoring', 'Network simulation', 'Analysis report']
      }
    },
    {
      week: 9,
      title: 'Incident Response',
      description: 'Respond to security incidents effectively.',
      topics: [
        'Incident Response Lifecycle - preparation, detection, containment',
        'Digital Forensics - acquisition, analysis, preservation',
        'Evidence Handling - chain of custody, documentation',
        'Containment Strategies - isolation, segmentation, shutdown',
        'Eradication and Recovery - removing threats, restoring systems',
        'Post-Incident Analysis - lessons learned, reporting'
      ],
      project: {
        title: 'Project 9: Incident Response Playbook',
        description: 'Create an incident response playbook for common scenarios',
        features: ['Ransomware response', 'Data breach response', 'Malware outbreak', 'Communication templates']
      }
    },
    {
      week: 10,
      title: 'Cloud Security',
      description: 'Secure cloud environments (AWS, Azure, GCP).',
      topics: [
        'Shared Responsibility Model - provider vs customer responsibilities',
        'AWS Security - IAM, S3 buckets, security groups, VPC',
        'Azure Security - RBAC, NSGs, Key Vault',
        'Cloud Misconfigurations - exposed storage, open ports',
        'Cloud Security Tools - ScoutSuite, Prowler, CloudSploit',
        'Container Security - Docker, Kubernetes security'
      ],
      project: {
        title: 'Project 10: Cloud Security Audit',
        description: 'Audit an AWS/Azure environment for security issues',
        features: ['IAM analysis', 'Storage permissions', 'Network configuration', 'Compliance checks']
      }
    },
    {
      week: 11,
      title: 'Identity and Access Management',
      description: 'Manage identities and control access to resources.',
      topics: [
        'Authentication Methods - passwords, MFA, biometrics, certificates',
        'Authorization Models - RBAC, ABAC, PBAC',
        'Single Sign-On (SSO) - SAML, OAuth, OIDC',
        'Directory Services - Active Directory, LDAP',
        'Privileged Access Management - PAM solutions',
        'Identity Governance - access reviews, certification'
      ],
      project: {
        title: 'Project 11: MFA Implementation',
        description: 'Implement multi-factor authentication for a web application',
        features: ['TOTP setup', 'Backup codes', 'Remember device', 'Admin enforcement']
      }
    },
    {
      week: 12,
      title: 'Security Operations Center (SOC)',
      description: 'Monitor and defend networks in real-time.',
      topics: [
        'SOC Functions - monitoring, triage, escalation',
        'SIEM Tools - Splunk, ELK Stack, QRadar',
        'Log Analysis - correlation, anomaly detection',
        'Threat Intelligence - feeds, indicators, threat hunting',
        'Alert Triage - prioritization, investigation',
        'Playbooks - standard operating procedures'
      ],
      project: {
        title: 'Project 12: SIEM Dashboard',
        description: 'Set up a SIEM dashboard for security monitoring',
        features: ['Log ingestion', 'Alert rules', 'Visualizations', 'Incident tracking']
      }
    },
    {
      week: 13,
      title: 'Penetration Testing',
      description: 'Conduct professional penetration tests.',
      topics: [
        'Pen Testing Methodology - PTES, OWASP, OSSTMM',
        'External Pen Testing - internet-facing assets',
        'Internal Pen Testing - insider threat simulation',
        'Web Application Pen Testing - deep dive',
        'Mobile App Pen Testing - iOS, Android',
        'Report Writing - executive summaries, technical findings'
      ],
      project: {
        title: 'Project 13: Full Pen Test Report',
        description: 'Conduct a penetration test and write a professional report',
        features: ['Scope definition', 'Vulnerability findings', 'Exploitation steps', 'Remediation advice']
      }
    },
    {
      week: 14,
      title: 'Compliance and Governance',
      description: 'Understand regulatory requirements and security frameworks.',
      topics: [
        'GDPR - data protection, privacy rights, fines',
        'HIPAA - healthcare security, privacy rules',
        'PCI DSS - payment card industry standards',
        'ISO 27001 - information security management',
        'NIST Cybersecurity Framework - core functions',
        'Audit Preparation - evidence collection, interviews'
      ],
      project: {
        title: 'Project 14: Compliance Checklist',
        description: 'Create a compliance checklist for a specific regulation',
        features: ['Control mapping', 'Evidence requirements', 'Gap analysis', 'Remediation plan']
      }
    },
    {
      week: 15,
      title: 'Social Engineering',
      description: 'Understand and defend against human-based attacks.',
      topics: [
        'Social Engineering Principles - influence, manipulation',
        'Phishing Attacks - email, SMS, voice (vishing)',
        'Pretexting - creating believable scenarios',
        'Baiting and Tailgating - physical security',
        'Security Awareness Training - employee education',
        'Phishing Simulations - testing and metrics'
      ],
      project: {
        title: 'Project 15: Phishing Simulation',
        description: 'Create and run a phishing simulation campaign',
        features: ['Email templates', 'Landing pages', 'Tracking', 'Training materials']
      }
    },
    {
      week: 16,
      title: 'Digital Forensics',
      description: 'Investigate digital crimes and recover evidence.',
      topics: [
        'Forensics Process - identification, preservation, analysis',
        'Disk Forensics - file systems, deleted files, carving',
        'Memory Forensics - RAM analysis, volatility',
        'Network Forensics - PCAP analysis, flow data',
        'Mobile Forensics - iOS, Android extraction',
        'Forensic Tools - Autopsy, FTK, EnCase, Volatility'
      ],
      project: {
        title: 'Project 16: Forensic Investigation',
        description: 'Investigate a simulated security breach',
        features: ['Evidence acquisition', 'Timeline reconstruction', 'Malware identification', 'Findings report']
      }
    },
    {
      week: 17,
      title: 'Red Teaming',
      description: 'Simulate advanced adversaries to test defenses.',
      topics: [
        'Red Team vs yellow Team - objectives, differences',
        'Advanced Persistence - C2 infrastructure, evasion',
        'Lateral Movement - pivoting, pass-the-hash',
        'Privilege Escalation - Windows, Linux techniques',
        'Defense Evasion - AMSI bypass, logging bypass',
        'Cobalt Strike - beaconing, payloads'
      ],
      project: {
        title: 'Project 17: Red Team Simulation',
        description: 'Plan and execute a red team exercise',
        features: ['Attack scenarios', 'C2 setup', 'Lateral movement', 'Report']
      }
    },
    {
      week: 18,
      title: 'DevSecOps',
      description: 'Integrate security into the development lifecycle.',
      topics: [
        'DevSecOps Principles - shift left, automation',
        'SAST (Static Analysis) - code scanning',
        'DAST (Dynamic Analysis) - runtime testing',
        'SCA (Software Composition Analysis) - dependency scanning',
        'CI/CD Security - pipeline hardening',
        'Infrastructure as Code Security - Terraform, CloudFormation'
      ],
      project: {
        title: 'Project 18: Secure CI/CD Pipeline',
        description: 'Implement security scanning in a CI/CD pipeline',
        features: ['SAST integration', 'DAST integration', 'Dependency scanning', 'Compliance checks']
      }
    },
    {
      week: 19,
      title: 'IoT Security',
      description: 'Secure Internet of Things devices and networks.',
      topics: [
        'IoT Architecture - devices, gateways, cloud',
        'IoT Protocols - MQTT, CoAP, Zigbee, Z-Wave',
        'IoT Vulnerabilities - default passwords, firmware',
        'IoT Hacking - hardware hacking, radio attacks',
        'IoT Defense - segmentation, updates, monitoring',
        'Industrial IoT (IIoT) - SCADA, PLC security'
      ],
      project: {
        title: 'Project 19: IoT Security Assessment',
        description: 'Assess the security of a smart home device',
        features: ['Firmware analysis', 'Network traffic', 'Mobile app testing', 'Cloud API testing']
      }
    },
    {
      week: 20,
      title: 'Blockchain Security',
      description: 'Understand security in blockchain and cryptocurrencies.',
      topics: [
        'Blockchain Basics - consensus, transactions, blocks',
        'Smart Contract Security - reentrancy, overflow',
        'Cryptocurrency Security - wallets, exchanges',
        '51% Attacks - mining concentration risks',
        'DeFi Security - flash loans, oracle manipulation',
        'Auditing Smart Contracts - tools, methodology'
      ],
      project: {
        title: 'Project 20: Smart Contract Audit',
        description: 'Audit a smart contract for vulnerabilities',
        features: ['Code review', 'Vulnerability scanning', 'Test cases', 'Audit report']
      }
    },
    {
      week: 21,
      title: 'Threat Hunting',
      description: 'Proactively search for threats in networks.',
      topics: [
        'Threat Hunting Methodology - hypothesis, investigation',
        'Data Sources - logs, network flows, endpoints',
        'Indicators of Attack (IoA) - behavior patterns',
        'Threat Intelligence Integration - context enrichment',
        'Hunting Tools - osquery, GRR, Velociraptor',
        'Automation - scheduled hunts, alerts'
      ],
      project: {
        title: 'Project 21: Threat Hunt',
        description: 'Conduct a threat hunt for specific TTPs',
        features: ['Hypothesis creation', 'Data collection', 'Pattern analysis', 'Findings report']
      }
    },
    {
      week: 22,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security models.',
      topics: [
        'Zero Trust Principles - never trust, always verify',
        'Micro-segmentation - network isolation',
        'Identity-Centric Security - identity as perimeter',
        'Zero Trust Network Access (ZTNA) - beyond VPN',
        'Zero Trust Implementation - maturity model',
        'Case Studies - Google BeyondCorp'
      ],
      project: {
        title: 'Project 22: Zero Trust Design',
        description: 'Design a zero trust architecture for an organization',
        features: ['Asset inventory', 'Identity strategy', 'Network segmentation', 'Implementation roadmap']
      }
    },
    {
      week: 23,
      title: 'Security Automation',
      description: 'Automate security tasks with scripts and tools.',
      topics: [
        'Python for Security - automation scripts',
        'SOAR (Security Orchestration) - playbook automation',
        'API Integration - connecting security tools',
        'Automated Remediation - response actions',
        'Security Bots - Slack bots, email automation',
        'Workflow Automation - Tines, Zapier for security'
      ],
      project: {
        title: 'Project 23: Security Automation Bot',
        description: 'Create a bot to automate security tasks',
        features: ['Alert processing', 'Enrichment', 'Response actions', 'Notifications']
      }
    },
    {
      week: 24,
      title: 'Security Awareness Training',
      description: 'Develop and deliver security training programs.',
      topics: [
        'Training Program Design - audience, content, delivery',
        'Phishing Awareness - simulations, metrics',
        'Password Security - best practices, tools',
        'Physical Security - access, tailgating',
        'Remote Work Security - VPN, home networks',
        'Measuring Effectiveness - metrics, surveys'
      ],
      project: {
        title: 'Project 24: Training Module',
        description: 'Create a security awareness training module',
        features: ['Content development', 'Interactive elements', 'Knowledge checks', 'Tracking']
      }
    },
    {
      week: 25,
      title: 'Cybersecurity Certifications',
      description: 'Prepare for industry certifications.',
      topics: [
        'Certification Overview - CompTIA Security+, CEH, CISSP, OSCP',
        'Exam Strategies - study plans, practice tests',
        'CompTIA Security+ - domains, objectives',
        'CEH (Certified Ethical Hacker) - modules, labs',
        'CISSP - 8 domains, experience requirements',
        'OSCP (Offensive Security) - lab, exam format'
      ],
      project: {
        title: 'Project 25: Certification Study Plan',
        description: 'Create a study plan for a specific certification',
        features: ['Domain breakdown', 'Study resources', 'Practice schedule', 'Lab exercises']
      }
    },
    {
      week: 26,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a portfolio-ready project and prepare for security job interviews.',
      topics: [
        'End-to-End Security Project - real-world scenario',
        'Portfolio Development - showcasing skills',
        'Resume Writing - highlighting security experience',
        'Interview Preparation - technical questions, scenarios',
        'Job Search Strategy - roles, companies, networking',
        'Continuous Learning - staying current'
      ],
      project: {
        title: 'Project 26-40: Capstone Projects (Choose 15)',
        description: 'Select and build 15 additional projects from the list below',
        features: ['Real-world scenarios', 'Professional tools', 'Portfolio ready', 'Industry feedback']
      }
    }
  ];

  // 40 Additional Projects
  const additionalProjects = [
    { icon: Shield, title: 'Security Operations Center (SOC) Setup', description: 'Build a mini SOC with monitoring tools', difficulty: 'Advanced' },
    { icon: Bug, title: 'Vulnerability Scanner', description: 'Create a custom vulnerability scanner', difficulty: 'Advanced' },
    { icon: Lock, title: 'Password Manager', description: 'Build a secure password manager app', difficulty: 'Intermediate' },
    { icon: Key, title: 'SSO Implementation', description: 'Implement Single Sign-On for apps', difficulty: 'Advanced' },
    { icon: FingerprintIcon, title: 'Biometric Authentication', description: 'Add biometric login to an app', difficulty: 'Intermediate' },
    { icon: FileLock, title: 'File Integrity Monitor', description: 'Monitor file changes for tampering', difficulty: 'Intermediate' },
    { icon: Wifi, title: 'WiFi Deauth Detector', description: 'Detect deauthentication attacks', difficulty: 'Intermediate' },
    { icon: Eye, title: 'Webcam Surveillance Detector', description: 'Detect unauthorized camera access', difficulty: 'Advanced' },
    { icon: AlertTriangle, title: 'Ransomware Simulator', description: 'Simulate ransomware for training', difficulty: 'Advanced' },
    { icon: Radio, title: 'yellowtooth Sniffer', description: 'Scan for yellowtooth devices', difficulty: 'Intermediate' },
    { icon: QrCode, title: 'Secure QR Generator', description: 'Generate encrypted QR codes', difficulty: 'Beginner' },
    { icon: FileCode, title: 'Code Obfuscator', description: 'Obfuscate Python/JavaScript code', difficulty: 'Intermediate' },
    { icon: Scan, title: 'Port Scanner Pro', description: 'Advanced port scanner with service detection', difficulty: 'Intermediate' },
    { icon: Network, title: 'Network Mapper', description: 'Visual network mapping tool', difficulty: 'Intermediate' },
    { icon: Mail, title: 'Phishing Email Analyzer', description: 'Analyze email headers for phishing', difficulty: 'Intermediate' },
    { icon: Globe, title: 'Dark Web Monitor', description: 'Monitor dark web for credentials', difficulty: 'Advanced' },
    { icon: Database, title: 'Database Encryption Tool', description: 'Encrypt sensitive database fields', difficulty: 'Intermediate' },
    { icon: Cloud, title: 'Cloud Security Scanner', description: 'Scan cloud buckets for exposures', difficulty: 'Advanced' },
    { icon: Cpu, title: 'Malware Sandbox', description: 'Run malware in isolated environment', difficulty: 'Advanced' },
    { icon: Terminal, title: 'Rootkit Detector', description: 'Detect rootkit infections', difficulty: 'Advanced' },
    { icon: Smartphone, title: 'Mobile Security Scanner', description: 'Scan apps for permissions', difficulty: 'Intermediate' },
    { icon: Camera, title: 'Security Camera System', description: 'IP camera security assessment', difficulty: 'Intermediate' },
    { icon: Car, title: 'Car Hacking Simulation', description: 'Simulate CAN bus attacks', difficulty: 'Advanced' },
    { icon: Heart, title: 'Medical Device Security', description: 'Assess medical device security', difficulty: 'Advanced' },
    { icon: Building2, title: 'Physical Access System', description: 'Design secure access control', difficulty: 'Intermediate' },
    { icon: Users, title: 'Privilege Auditor', description: 'Audit user privileges', difficulty: 'Intermediate' },
    { icon: Calendar, title: 'Security Awareness Calendar', description: 'Monthly security tips tool', difficulty: 'Beginner' },
    { icon: Gift, title: 'Secure File Sharing', description: 'Encrypted file sharing app', difficulty: 'Advanced' },
    { icon: Truck, title: 'Supply Chain Security', description: 'Assess supply chain risks', difficulty: 'Advanced' },
    { icon: Dog, title: 'Pet Tracker Security', description: 'Test pet tracker vulnerabilities', difficulty: 'Intermediate' },
    { icon: Leaf, title: 'Smart Agriculture Security', description: 'Secure farming IoT devices', difficulty: 'Advanced' },
    { icon: Bike, title: 'Bike Sharing Security', description: 'Test bike sharing app security', difficulty: 'Intermediate' },
    { icon: Ticket, title: 'Event Ticketing Security', description: 'Secure ticket validation', difficulty: 'Intermediate' },
    { icon: GlassWater, title: 'Smart Bar System', description: 'Secure IoT bar system', difficulty: 'Intermediate' },
    { icon: Shirt, title: 'Smart Mirror Security', description: 'Test smart mirror vulnerabilities', difficulty: 'Advanced' },
    { icon: Watch, title: 'Smart Watch Security', description: 'Test wearable security', difficulty: 'Advanced' },
    { icon: Home, title: 'Smart Home Security', description: 'Secure smart home devices', difficulty: 'Intermediate' },
    { icon: Plane, title: 'Drone Security', description: 'Test drone vulnerabilities', difficulty: 'Advanced' },
    { icon: Rocket, title: 'Space Systems Security', description: 'Satellite communication security', difficulty: 'Advanced' },
    { icon: Bitcoin, title: 'Crypto Wallet Security', description: 'Secure cryptocurrency wallet', difficulty: 'Advanced' }
  ];

  const faqs = [
    {
      question: "What is Cybersecurity?",
      answer: "Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, damage, or unauthorized access. It encompasses a wide range of practices, technologies, and processes designed to safeguard confidentiality, integrity, and availability of information. Cybersecurity professionals defend against threats like malware, ransomware, phishing, hacking, and data breaches, working to ensure that organizations can operate safely in an increasingly digital world."
    },
    {
      question: "Why should I learn Cybersecurity?",
      answer: "Learning cybersecurity offers numerous benefits: 1) Explosive Demand - There's a global shortage of 3.4 million cybersecurity professionals. 2) Job Security - Security is always needed regardless of economic conditions. 3) High Salaries - Entry-level positions start at $50k+, experienced professionals earn $100k+. 4) Constant Challenge - New threats mean continuous learning. 5) Make a Difference - Protect people, data, and organizations from harm. 6) Diverse Career Paths - Work in any industry, from finance to healthcare. 7) Remote Work - Many security roles offer flexibility. 8) Ethical Hacking - Get paid to think like an attacker. 9) Future-Proof - Digital transformation increases security needs. 10) Global Opportunities - Work anywhere in the world."
    },
    {
      question: "What can I do with Cybersecurity skills?",
      answer: "With cybersecurity skills, you can: 1) Become a Security Analyst monitoring networks for threats. 2) Work as a Penetration Tester (Ethical Hacker) finding vulnerabilities. 3) Join as a Security Engineer building secure systems. 4) Become a Security Architect designing security frameworks. 5) Work in Incident Response handling security breaches. 6) Specialize in Digital Forensics investigating cybercrimes. 7) Become a Security Consultant advising organizations. 8) Work in Governance, Risk, and Compliance (GRC). 9) Specialize in Cloud Security (AWS, Azure, GCP). 10) Become a Malware Analyst reverse engineering threats. 11) Work in Application Security (DevSecOps). 12) Join as a Security Researcher discovering new threats. 13) Work for government agencies (law enforcement, military). 14) Become a Security Awareness Trainer educating employees."
    },
    {
      question: "What is the best roadmap to become a Cybersecurity Professional?",
      answer: "The complete cybersecurity roadmap: 1) Master networking fundamentals (TCP/IP, OSI model). 2) Learn operating systems (Windows, Linux). 3) Understand security fundamentals (CIA triad, risk management). 4) Learn programming (Python is essential). 5) Master security tools (Wireshark, Nmap, Metasploit). 6) Specialize in an area (network security, web security, cloud). 7) Get hands-on with labs (TryHackMe, HackTheBox). 8) Pursue certifications (Security+, CEH, CISSP, OSCP). 9) Build a home lab for practice. 10) Participate in CTF (Capture The Flag) competitions. 11) Gain experience through internships or bug bounties. 12) Network with professionals and join communities. This 26-week course covers all these areas with 40+ hands-on projects."
    },
    {
      question: "Do I need prior IT or programming experience?",
      answer: "No prior experience is required! This course starts from fundamentals and builds up. We cover networking basics, operating systems, and programming (Python) needed for cybersecurity. However, being comfortable with computers and having curiosity about how things work will help. Many successful cybersecurity professionals started from non-technical backgrounds and transitioned through dedicated learning."
    },
    {
      question: "What is the time commitment for this 26-week course?",
      answer: "We recommend dedicating 15-20 hours per week. This includes 8 hours of live/recorded sessions and 7-12 hours of hands-on labs, projects, and assignments. With 40+ projects, you'll get extensive practical experience building your skills. The longer duration (26 weeks vs 16 weeks) reflects the depth and complexity of cybersecurity topics."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 40+ real-world projects including: Network Traffic Analyzer, System Hardening Scripts, File Encryption Tool, Network Scanner, Web Vulnerability Scanner, WiFi Security Auditor, Malware Sandbox, Incident Response Playbook, Cloud Security Auditor, SIEM Dashboard, Penetration Test Reports, Phishing Simulator, Forensic Investigation, Red Team Simulation, Smart Contract Audit, Security Automation Bot, and many more. Projects range from beginner to advanced, covering all major areas of cybersecurity."
    },
    {
      question: "What tools and technologies will I master?",
      answer: "You'll master: Networking: Wireshark, Nmap, tcpdump. Offensive Security: Metasploit, Burp Suite, Kali Linux, Aircrack-ng, John the Ripper, Hashcat. Defensive Security: Splunk, ELK Stack, Snort, Suricata, OSSEC. Cloud Security: AWS Security, Azure Security, ScoutSuite. Forensics: Autopsy, FTK Imager, Volatility. Development: Python, Bash, PowerShell, Docker. Frameworks: NIST, ISO 27001, MITRE ATT&CK. Certifications prep: Security+, CEH, CISSP, OSCP concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop"
            alt="Cybersecurity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-red-900/80" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Complete 26-Week Cybersecurity Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-gray-400 to-yellow-400 bg-clip-text text-transparent">
                Cybersecurity Expert
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master network security, ethical hacking, penetration testing, and security operations with 40+ hands-on projects. Learn to protect organizations from cyber threats. No prior experience required.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-yellow-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-red-500/25 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">26</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold">40+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-gray-400">Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* What is Cybersecurity Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">Cybersecurity</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. It's a critical field that defends against cybercriminals, ensures business continuity, and protects sensitive information in our increasingly connected world.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Cybersecurity encompasses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded mt-1">
                    <Shield className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Network Security:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Protecting networks from intruders with firewalls, IDS/IPS, and monitoring.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Bug className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Ethical Hacking:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Identifying vulnerabilities before malicious hackers can exploit them.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded mt-1">
                    <FileLock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Security Operations:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Monitoring, detecting, and responding to security incidents 24/7.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '3.4M', label: 'Unfilled jobs globally' },
                { number: '$50k+', label: 'Starting salary' },
                { number: '35%', label: 'Job growth rate' },
                { number: '$100k+', label: 'Average salary' }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Cybersecurity */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">Cybersecurity</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your cybersecurity journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Massive Demand', description: '3.4 million unfilled cybersecurity jobs globally. Companies desperately need talent.' },
              { icon: DollarSign, title: 'High Salaries', description: 'Entry-level positions start at $50k+, experienced professionals earn $100k+.' },
              { icon: Globe, title: 'Job Security', description: 'Cyber threats never stop. Security professionals are always needed.' },
              { icon: Shield, title: 'Make a Difference', description: 'Protect people, data, and organizations from real harm.' },
              { icon: Brain, title: 'Constant Challenge', description: 'New threats emerge daily - you\'ll always be learning and adapting.' },
              { icon: Award, title: 'Diverse Career Paths', description: 'Work in any industry: finance, healthcare, government, tech.' },
              { icon: Users, title: 'Global Opportunities', description: 'Work anywhere in the world. Cybersecurity is needed everywhere.' },
              { icon: Zap, title: 'Ethical Hacking', description: 'Get paid to think like an attacker and find vulnerabilities.' },
              { icon: Briefcase, title: 'Future-Proof', description: 'Digital transformation means security needs will only grow.' }
            ].map((reason, i) => {
              const Icon = reason.icon
              return (
                <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
                  <Icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Can Protect */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-yellow-600 dark:text-yellow-400">Protect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              With cybersecurity skills, you can defend organizations across all sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Building2, label: 'Corporate Networks' },
              { icon: Cloud, label: 'Cloud Infrastructure' },
              { icon: Database, label: 'Databases' },
              { icon: Smartphone, label: 'Mobile Devices' },
              { icon: Laptop, label: 'Endpoints' },
              { icon: Wifi, label: 'Wireless Networks' },
              { icon: Heart, label: 'Healthcare Systems' },
              { icon: Wallet, label: 'Financial Data' },
              { icon: Globe, label: 'Web Applications' },
              { icon: Home, label: 'IoT Devices' },
              { icon: Car, label: 'Automotive Systems' },
              { icon: Plane, label: 'Aviation Security' },
              { icon: Radio, label: 'Satellite Comms' },
              { icon: Cpu, label: 'Industrial Control' },
              { icon: Users, label: 'Employee Data' },
              { icon: Lock, label: 'Intellectual Property' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Complete Roadmap */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              The Complete <span className="text-yellow-600 dark:text-yellow-400">Roadmap</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Follow this proven path to become a professional cybersecurity expert
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 to-yellow-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Foundations', weeks: 'Weeks 1-6', color: 'yellow', topics: ['Networking', 'OS Security', 'Cryptography', 'Risk Management'] },
                { phase: 'Phase 2', title: 'Offensive Security', weeks: 'Weeks 7-12', color: 'yellow', topics: ['Ethical Hacking', 'Web Security', 'Wireless', 'Malware Analysis'] },
                { phase: 'Phase 3', title: 'Defensive Security', weeks: 'Weeks 13-18', color: 'yellow', topics: ['Incident Response', 'Cloud Security', 'SOC', 'Forensics'] },
                { phase: 'Phase 4', title: 'Advanced & Career', weeks: 'Weeks 19-26', color: 'yellow', topics: ['Red Teaming', 'DevSecOps', 'Certifications', 'Portfolio'] }
              ].map((phase, idx) => (
                <div key={idx} className="relative md:ml-16">
                  <div className={`absolute left-0 top-2 w-8 h-8 rounded-full bg-${phase.color}-500 hidden md:flex items-center justify-center text-white font-bold`}>
                    {idx + 1}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 bg-${phase.color}-100 dark:bg-${phase.color}-900/30 text-${phase.color}-600 dark:text-${phase.color}-400 text-sm font-medium rounded-full`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{phase.weeks}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 26-Week Curriculum */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              26-Week <span className="text-yellow-600 dark:text-yellow-400">Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Week-by-week breakdown of your learning journey with 40+ projects
            </p>
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Rocket className="w-4 h-4" />
              <span className="font-medium">{weeklyCurriculum.length} Weeks • 40+ Projects</span>
            </div>
          </div>

          <div className="space-y-4">
            {weeklyCurriculum.map((week) => (
              <div key={week.week} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {week.week}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{week.title}</h3>
                    </div>
                    <span className="text-sm px-3 py-1 bg-red-100 dark:bg-red-900/30 text-yellow-600 dark:text-yellow-400 rounded-full">
                      Project: {week.project.title}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{week.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-yellow-600" />
                        Topics Covered
                      </h4>
                      <ul className="space-y-1">
                        {week.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-yellow-600" />
                        Project: {week.project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{week.project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {week.project.features.map((feature, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 40+ Projects Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              40+ <span className="text-yellow-600 dark:text-yellow-400">Security Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build an impressive portfolio with projects of all difficulty levels
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalProjects.map((project, i) => {
              const Icon = project.icon
              const difficultyColor = 
                project.difficulty === 'Beginner' ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' :
                project.difficulty === 'Intermediate' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'text-yellow-600 bg-red-100 dark:bg-red-900/30 dark:text-yellow-400'
              
              return (
                <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <Icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{project.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor}`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-red-400" />
              <span className="text-gray-900 dark:text-white font-medium">Plus 26 weekly projects = 40+ total security projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Tools You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Industry-standard security tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Terminal, name: 'Kali Linux' },
              { icon: Bug, name: 'Metasploit' },
              { icon: Scan, name: 'Nmap' },
              { icon: Radio, name: 'Wireshark' },
              { icon: Lock, name: 'Burp Suite' },
              { icon: Eye, name: 'Splunk' },
              { icon: Shield, name: 'Snort' },
              { icon: Database, name: 'ELK Stack' },
              { icon: FileLock, name: 'Autopsy' },
              { icon: Cpu, name: 'Volatility' },
              { icon: Cloud, name: 'AWS Security' },
              { icon: GitBranch, name: 'Git' },
              { icon: Code, name: 'Python' },
              { icon: Server, name: 'Docker' },
              { icon: Key, name: 'John the Ripper' },
              { icon: QrCode, name: 'Hashcat' }
            ].map((tool, i) => {
              const Icon = tool.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:shadow-md transition">
                  <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{tool.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Defend the Digital World?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our Cybersecurity bootcamp and get access to our career support team. We'll help you prepare for certifications, build your portfolio, and connect with top companies hiring security professionals.
          </p>
          <Link href="/Careers">
            <button className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl inline-flex items-center gap-2 group">
              <Briefcase className="w-5 h-5" />
              Explore Career Opportunities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Frequently Asked <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our cybersecurity course
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Security Journey?</h2>
              <p className="text-yellow-100">Join 2,500+ students who have transformed their careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </button>
              </Link>
              <a href="contacts">
                <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// ArrowRight component
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

// Bitcoin icon (not in lucide-react)
const Bitcoin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H9v10h3.5c2.21 0 4-1.79 4-4s-1.79-4-4-4zm0 6H11v-2h2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
  </svg>
)