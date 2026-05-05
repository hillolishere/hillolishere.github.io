import re
import json

text = """
	“Specialized Training for e-Governance Program on Information Security Management” which was held during 18th – 20th November, 2014 at Agartala, organized by National Institute for Smart Government and Directorate of Information Technology, Govt. of Tripura under National eGovernance Plan.
	“One Month Induction Training Programme for the Panchayat Resource Development Officers (PRDOs)” held from 1st February – 28th February, 2016 at PRTI, A.D Nagar, Tripura, India.
	7 Days Training Programme on “e-Panchayat Applications” held from 1st – 7th June, 2016 at PRTI, A.D Nagar, Tripura, India.
	Training Programme on “e-Governance Applications for RD in context to the Digital India” held from 20th – 24th June, 2016 at NIRD&PR-NERC, Guwahati, Government of India.
	“Two Days Training Programme of Officer In-Charge PRTI (DPOs) & Panchayat Resource Development Officers (PRDOs)” held from 10th – 11th November, 2016 at PRTI, A.D Nagar, Tripura, India.
	“Induction Training Programme for the Cutting Edge Level Officials” held from 14th – 27th December, 2016 at SIPARD, A.D Nagar, Tripura, India.
	International Seminar on “Rural Habitat, Institutions and Development: Changing Nature & Challenges” held from 5th – 7th January, 2017 at Tripura University, India.
	National Level ToT Programme on “Enabling Digital Payments in Rural India” held from 17th – 18th January, 2017 at NIRD&PR-NERC, Guwahati, Government of India.
	Training cum Sensitization Programme on “Rooftop Off Grid Solar Energy Technologies” held from 14th – 16th February, 2017 at Panchayat Raj Training Institution, Udaipur, Gomati District, India.
	“Training Course on Training Need Analysis” held from 30th October – 04th November, 2017 at SIPARD, A.D Nagar, Tripura, India.
	“Three Day Course on Facilitation Skills” held from 11th – 13th December, 2017 at SIPARD, A.D Nagar, Tripura, India.
	2 Day District Level Training of Trainers on “Panchayat Enterprise Suite (PES) Applications” held on 27th & 28th December, 2017 at PRTI, A.D Nagar, Tripura, India.
	Training of Trainers Programme on “e-Enablement of Gram Panchayats: PES and PFMS” held from 18th – 22nd June, 2018 at NIRDPR, Hyderabad, Government of India.
	“Comprehensive Online Modified Modules for Induction Training (COMMIT)” – workshop for Training of Trainers held on 11th October, 2018 at SIPARD, A.D Nagar, Tripura, India.
	Training on “Blockchain Technology” held on 14th January, 2020 at Pragna Bhaban, Agartala, India organized by DIT, Agartala, Government of Tripura in collaboration with National Institute of Smart Government.
	“One week Trainer Development Programme on Experiential Learning Tools (ELT)” held from 15th – 19th January 2019 at SIPARD, A.D Nagar, Tripura, India.
	Training Programme on “ICT Applications in Office Automation” held from 12th – 16th February, 2019 at NIRD&PR-NERC, Guwahati, Government of India.
	Training on “Digital Governance” held on 28th January, 2020 at Pragna Bhaban, Agartala, India organized by DIT, Agartala, Government of Tripura in collaboration with National Institute of Smart Government.
	“Trainers of Training Programme on Direct Trainers Skill (DTS)” held from 17th – 21st March 2020 at SIPARD, A.D Nagar, Tripura, India.
	Online International Training on “Learning Science and impact of e-Learning on Rural Development Training” organized by the Panchayat Raj Training Institute, A. D. Nagar, Agartala on 24th & 25th August, 2020.
	Online Training of Trainers Programme on “Certification of Master Resource Persons” held from 31st August to 03rd September, 2020 organized by NIRDPR, Hyderabad, Government of India.
	Online Training of Trainers Programme on “Institutionalisation of Sustainable Development Goals (SDGs) through Panchayats to manage COVID-19 crisis” held from 15th September to 18th September, 2020 organized by NIRDPR, Hyderabad, Government of India.
	Online International Training on “Disaster Risk Resilience Leadership” organized by the Panchayat Raj Training Institute, A. D. Nagar, Agartala on 24th & 25th September, 2020.
	The International Webinar on Application of ICT in Higher Education During Covid-19 Pandemic Jointly Organized by IQAC & IGNOU Cell of Government Degree College, Kamalpur in collaboration with IGNOU, Agartala Regional Centre on 2nd September 2020.
	The Webinar on National Education Policy 2020 Organized by Bir Bikram Memorial Government Degree College, Agartala, Government of Tripura on 18th September 2020.
	Online Training of Trainers Programme on “Spatial Planning for GPDP” held from 21st September to 25th September, 2020 organized by NIRDPR-NERC, Guwahati, Government of India.
	Online Webinar Programme on “Applications of Open Source Technologies in Rural Development” held from 06th – 09th October, 2020, organized by at NIRD&PR-NERC, Guwahati, Government of India.
	Online Training of Trainers Programme on “Online ToT on Effective Utilization of 15th Finance Commission Grants” held from 12th October to 15th October, 2020 organized by NIRDPR, Hyderabad, Government of India.
	Online Orientation Training on “Panchayat Enterprise Suites (PES) and eGramSwaraj” held from 07th – 10th October, 2020, Certificate ID: XCV2UQ-CE000011 organized by at NIRD&PR-NERC, Guwahati, Government of India.
	One day National Level “Consultative Workshop on Service Delivery by Panchayats” held on 22nd November 2021 at ANSSIRD in Mysuru, organized by NIRD & PR, Hyderabad.
	3-day training on “Village Poverty Reduction Plan (VPRP)” held from 1st to 3rd August 2022 at Kolkata, initiated by the RD (Panchayat) Department, Government of Tripura.
	National Writeshop on revamped “National Panchayat Awards” held from 16th to 18th August 2022 at New Delhi, organized by the Ministry of Panchayati Raj, Government of India.
	National Workshop on “ISO Certification of Panchayats” held from 5th to 7th July 2023 at Kerala Institute of Local Administration (KILA), Kerala, organized by the Ministry of Panchayati Raj (MoPR), Government of India.
	Two-Day National Level Write-shop on “Panchayat Development Index (PDI)” held from 10th – 11th August 2023 at Dr. Ambedkar International Centre (DAIC), New Delhi, organized by the Ministry of Panchayati Raj (MoPR), Government of India.
	“Training of Trainers (ToT) programs on Localization of SDGs for PRIs: Water Sufficient Village” held from 3rd – 5th January 2024 at NIRD & PR, SIRD Assam, for State Level Master Trainers (SLMTs).
	“Training of Trainers (ToT) programs on Localization of SDGs for PRIs: Village with Good Governance” held from 29th – 31st January 2024 at NIRD & PR, SIRD Assam, for State Level Master Trainers (SLMTs).
	National Training Program on “Research Methodology: Analysis, Interpretation and Dissemination of Data for RD and CSR Professionals” held from 14th – 16th February 2024 at NIRD&PR, Delhi Branch, India Habitat Centre, New Delhi.
	One Day National Workshop on “Up-grading skills for preparing of Training Calendar” under revamped RGSA held on 19th June 2024 at NIRD&PR, Hyderabad.
	National Panchayat Awards Ceremony held at Vigyan Bhawan, New Delhi on 11th December 2024.
	Five (05) days Refresher Training Programme for preparation of AAP of RGSA and furnishing the QPR held from 9th - 13th December 2024 at IIPA, New Delhi.
	Two-Day National Level Write-shop on the “Panchayat Advancement Index (PAI) Version 2.0” held on 26th – 27th May 2025 at Dr. Ambedkar International Centre, New Delhi.
	Two Day Training Workshop on “e-Gramswaraj Enhancements and Modifications in Planning, Accounting and Profiler” held during 9th – 10th September 2025 at Dr. Ambedkar International Centre (DAIC), 15 Janpath, New Delhi.
	3rd Edition of “NESAC User Interaction Meet (NeUIM)-2025” scheduled to be held during 25th – 26th September 2025 via Hybrid mode at NESAC, Dept. of Space, Govt. of India, Meghalaya.
	“Exposure Visit to the State of Karnataka” held from 27th to 28th October 2025.
	Attended Management Development Program from 19th Jan to 23rd Jan 2026 at the IIM Shillong.
	Five-day Faculty Development Programme (FDP) from 25th February to 1st March, 2026 at NIRD Hyderabad.
"""

data = []
for line in text.strip().split('\n'):
    line = line.strip()
    if not line:
        continue
    
    match = re.search(r'20\d{2}', line)
    year = match.group(0) if match else ''
    
    data.append({
        'year': year,
        'title': line,
    })

data.sort(key=lambda x: x['year'], reverse=True)

grouped = {}
for item in data:
    y = item['year']
    if y not in grouped:
        grouped[y] = []
    grouped[y].append(item['title'])

print("export const trainingsData = " + json.dumps(grouped, indent=2) + ";")
