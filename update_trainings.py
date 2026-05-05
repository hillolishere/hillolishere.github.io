import json
import re

text = """
	Two days National Workshop on “MATLAB and its Application in Digital Image Processing and Pattern Recognition” held on 29th-30th November, 2013 at National Institute of Technology Agartala (NIT-A), India.
	“Workshop on Image and Speech Processing (WISP 2013)” held on 13th-14th December, 2013 at Indian Institute of Technology Guwahati (IIT-G), India.
	“2014 International Conference on Issues and Challenges in Intelligent Computing Techniques” held on 7th-8th February, 2014 at Krishna Institute of Engineering & Technology Ghaziabad (KIET), India.
	North-East ISI-NIT Agartala SPRING SCHOOL on “Algorithms for Mobile and Pervasive Computing” held on 24th-26th February, 2014 at National Institute of Technology Agartala (NIT-A), India.  
	ISI-TU WINTER SCHOOL on “Pattern Recognition and Image Processing” held on 25th-29th March, 2014 at Tripura University (A Central University), India.
	One week Faculty Development Programme on “Advanced Software Engineering” held on 26th-30th September, 2014 at Tripura Institute of Technology, Narsingarh, India. 
	Two days National Workshop on “Cloud Computing” held on 20th -21st October, 2014 at National Institute of Technology Agartala (NIT-A), India.
	Two days National Workshop on “Human Computer Interaction” held on 13th -14th February, 2015 at National Institute of Technology Agartala (NIT-A), India.
	Two days Faculty Development Programme on “Recent Trends in R.F. and Wireless Communication” held on 13th -14th March, 2015 at Tripura Institute of Technology, Narsingarh, India.
	One day Workshop on “Intel HPC Code Modernization (Parallelization)” held on 06th August, 2015 at National Institute of Technology Agartala (NIT-A), India.
	48th Regional Science Conference on “Rural Habitat, Institutions and Development: Changing Nature & Challenges” held from 5th – 7th January, 2017 at Tripura University, India.
	Presented Project Proposal (for Innovation) from Panchayat Department, Government of Tripura in the meeting on CEC Rashtriya Gram Swaraj Abhiyan (RGSA), Ministry of Panchayati Raj, Government of India held on 13th June, 2019 at Vigyan Bhawan, New Delhi.
"""

new_items = []
for line in text.strip().split('\n'):
    line = line.strip()
    if not line:
        continue
    match = re.search(r'20\d{2}', line)
    year = match.group(0) if match else ''
    
    new_items.append({'year': year, 'title': line})

# read existing
with open('src/data/trainings.js', 'r', encoding='utf-8') as f:
    content = f.read()

# remove export const trainingsData = and ;
json_str = content.replace('export const trainingsData = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)

for item in new_items:
    y = item['year']
    if not y: continue
    if y not in data:
        data[y] = []
    
    # check if already added
    exists = False
    for existing in data[y]:
        # Simple similarity check
        if item['title'] == existing or item['title'] in existing:
            exists = True
            break
    
    if not exists:
        data[y].append(item['title'])

# Sort
sorted_data = {}
for y in sorted(data.keys(), reverse=True):
    sorted_data[y] = data[y]

with open('src/data/trainings.js', 'w', encoding='utf-8') as f:
    f.write('export const trainingsData = ' + json.dumps(sorted_data, indent=2) + ';\n')
