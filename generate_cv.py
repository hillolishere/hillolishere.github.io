import json
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
from reportlab.lib.colors import HexColor
import re

def clean_text(text):
    # Replace unicode quotes with standard quotes
    text = text.replace('\u201c', '"').replace('\u201d', '"')
    text = text.replace('\u2018', "'").replace('\u2019', "'")
    text = text.replace('\u2013', "-").replace('\u2014', "-")
    return text

def build_pdf():
    with open('cv_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    doc = SimpleDocTemplate("public/Hillol_Das_CV.pdf", pagesize=A4,
                            rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        spaceAfter=5,
        textColor=HexColor('#0f1626')
    )
    
    role_style = ParagraphStyle(
        'RoleStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        spaceAfter=15,
        textColor=HexColor('#0ea5e9')
    )
    
    heading_style = ParagraphStyle(
        'HeadingStyle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=14,
        spaceBefore=15,
        spaceAfter=5,
        textColor=HexColor('#10b981')
    )
    
    normal_style = ParagraphStyle(
        'NormalStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        spaceAfter=5,
        leading=14
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14
    )

    story = []

    # Hero
    story.append(Paragraph(data['hero']['title'], title_style))
    story.append(Paragraph(data['hero']['role'], role_style))
    
    contact = data['hero']['contact']
    contact_text = f"{contact['email']} | {contact['mobile']} | {contact['linkedin']}"
    story.append(Paragraph(contact_text, normal_style))
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=1, color=HexColor('#cccccc'), spaceAfter=15))

    # Objective
    story.append(Paragraph("PROFESSIONAL OBJECTIVE", heading_style))
    story.append(Paragraph(clean_text(data['objective']), normal_style))
    story.append(Spacer(1, 10))

    # Academic Profile
    story.append(Paragraph("ACADEMIC PROFILE", heading_style))
    for edu in data['academicProfile']:
        text = f"<b>{edu['degree']}</b> - {clean_text(edu['institution'])} ({edu['year']})"
        story.append(Paragraph(text, normal_style))
    story.append(Spacer(1, 10))

    # Skills
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    skills = data['skills']
    story.append(Paragraph(f"<b>Languages:</b> {', '.join(skills['languages'])}", normal_style))
    story.append(Paragraph(f"<b>Frameworks:</b> {', '.join(skills['frameworks'])}", normal_style))
    story.append(Paragraph(f"<b>Databases:</b> {', '.join(skills['database'])}", normal_style))
    story.append(Paragraph(f"<b>Tools & Platforms:</b> {', '.join(skills['other'] + skills['ide'])}", normal_style))
    story.append(Spacer(1, 10))

    # Projects
    if 'projects' in data:
        story.append(Paragraph("KEY PROJECTS", heading_style))
        for proj in data['projects']:
            text = f"<b>{clean_text(proj['title'])}</b> ({proj['year']}) - {clean_text(proj['tech'])}<br/>{clean_text(proj['desc'])}"
            story.append(Paragraph(text, normal_style))
            story.append(Spacer(1, 5))

    # Experience & Trainings
    story.append(Paragraph("EXPERIENCE & TRAININGS", heading_style))
    trainings = data['trainings']
    years = sorted(trainings.keys(), reverse=True)
    for year in years:
        story.append(Paragraph(f"<b>{year}</b>", normal_style))
        items = []
        for t in trainings[year]:
            items.append(ListItem(Paragraph(clean_text(t), bullet_style)))
        story.append(ListFlowable(items, bulletType='bullet', spaceAfter=10))

    # Achievements
    story.append(Paragraph("ACHIEVEMENTS", heading_style))
    items = []
    for ach in data['achievements']:
        items.append(ListItem(Paragraph(clean_text(ach), bullet_style)))
    story.append(ListFlowable(items, bulletType='bullet', spaceAfter=10))

    doc.build(story)
    print("PDF Generated successfully at public/Hillol_Das_CV.pdf")

if __name__ == '__main__':
    build_pdf()
