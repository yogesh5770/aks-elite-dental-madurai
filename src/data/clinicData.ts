export interface Treatment {
  id: string;
  title: string;
  category: 'rct' | 'implants' | 'ortho' | 'cosmetic' | 'gums' | 'surgery' | 'pediatric' | 'general';
  tag: string;
  shortDesc: string;
  fullDesc: string;
  timeline: string;
  idealFor: string;
  benefits: string[];
  iconName: string;
  badge?: string;
  beforeAfterCaseId?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
  verified: boolean;
}

export interface ClinicPhoto {
  id: number;
  path: string;
  caption: string;
  tag: string;
  aspect: 'portrait' | 'landscape';
  category?: 'operatory' | 'tech' | 'doctor' | 'facade';
}

export interface TransformationCase {
  id: string;
  treatmentId: string;
  title: string;
  specialty: string;
  badge: string;
  category: 'rct' | 'implants' | 'ortho' | 'cosmetic' | 'gums' | 'pediatric' | 'surgery' | 'dentures';
  beforeImage: string;
  afterImage: string;
  fullImage?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeNotes: string;
  afterNotes: string;
  timeframe: string;
  sittings: string;
  procedureType: string;
  highlight: string;
}

export interface SymptomTriageItem {
  id: string;
  iconName: string;
  chiefComplaint: string;
  urgency: 'Immediate' | 'Scheduled' | 'Elective';
  description: string;
  recommendedSpecialty: string;
  treatmentId: string;
  expectedOutcome: string;
}

export const CLINIC_DATA = {
  name: "AK's Elite Dental Clinic and Orthodontic Centre",
  shortName: "AK's Elite Dental",
  motto: "Precision Dentistry & Gentle Healthcare For All Generations",
  tagline: "Comprehensive Multi-Speciality Dental Clinic & Orthodontic Centre",
  subtitle: "Full-spectrum dental excellence in K.Pudur, Madurai: Single-Sitting Painless Rotary Root Canals, Permanent Dental Implants, 3D Clear Aligners & Braces, Ultrasonic Gum Therapy, Aesthetic Smile Makeovers, and Pediatric Dentistry.",
  rating: 4.9,
  reviewCount: 105,

  contact: {
    phonePrimary: "095387 23872",
    phoneDisplay: "+91 95387 23872",
    whatsapp: "+919538723872",
    email: "akselitedental.madurai@gmail.com",
    address: "Plot No. 162/2A, Alagar Complex, 5th Meenakshi Amman Nagar Main Road, Suriya Nagar Extn, near Surya Nagar MedPlus, K.Pudur, Madurai, Tamil Nadu 625007",
    landmark: "On 5th Meenakshi Amman Nagar Main Road, near Surya Nagar MedPlus, K.Pudur",
    plusCode: "X583+WW Madurai, Tamil Nadu",
    mapsUrl: "https://maps.app.goo.gl/KL6VZys1QCFQEpBx9",
    coordinates: {
      lat: 9.9673254,
      lng: 78.1548138
    },
    timings: {
      weekdays: "Monday – Saturday: 9:30 AM – 9:00 PM",
      sunday: "Sunday: 10:30 AM – 2:00 PM",
      emergency: "Emergency Acute Pain Relief & Prior Bookings Accepted"
    }
  },

  trustMetrics: [
    {
      metric: "4.9 ★",
      label: "Google Rating",
      sub: "105+ Verified Patient Reviews"
    },
    {
      metric: "Single-Visit RCT",
      label: "Motorized Endodontics",
      sub: "Immediate Pain Relief"
    },
    {
      metric: "Lifetime Implants",
      label: "Titanium Osseointegration",
      sub: "Permanent Fixed Teeth"
    },
    {
      metric: "iTero 3D Digital",
      label: "Clear Aligners & Braces",
      sub: "Invisalign Certified MDS Care"
    }
  ],

  doctor: {
    name: "Dr. Khalidh Khan",
    qualification: "BDS, MDS",
    speciality: "Specialist in Orthodontics & Dentofacial Orthopaedics",
    role: "CEO & Senior Consultant • Chief Specialist",
    clinicMotto: "We brace your teeth with grace",
    tagline: "Your smile, our priority. We brace your teeth with grace.",
    education: "BDS (2014), MDS (2018) – Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru, Karnataka",
    experienceYears: "9+ Years of Private Clinical Practice Experience",
    experienceHighlight: "Specialist in Orthodontics and Dentofacial Orthopaedics with BDS (2014) and MDS (2018) from RGUHS Bengaluru, Karnataka. Over 9 years of private clinical practice experience as CEO of AK's Elite Dental Clinic and Senior Consultant across multiple hospitals.",
    quote: "Dentistry is not about treating more patients in less time; it is about treating every patient with the care and attention they deserve.",
    stats: [
      { value: "25,000+", label: "Patients treated", sublabel: "Comprehensive clinical care" },
      { value: "10,000+", label: "Braces cases", sublabel: "Orthodontic smile alignment" },
      { value: "1,000+", label: "Aligner cases", sublabel: "Invisalign & clear aligners" }
    ],
    invisalignPhoto: "/clinic-photos/dr_khalidh_khan_suit.webp",
    awardsPhoto: "/clinic-photos/aks_real_02.webp",
    iteroPhoto: "/clinic-photos/itero_dr_khalidh_suit.webp",
    signboardPhoto: "/clinic-photos/aks_real_04.webp",
    surgicalPhoto: "/clinic-photos/aks_real_05.webp",
    focusAreas: [
      "Orthodontic Braces (Ceramic, Metal & Self-Ligating)",
      "Invisalign & 3D Digital Clear Aligner Treatments",
      "Assessment & Management of Jaw Growth & Bite Problems",
      "Cosmetic Smile Designing & Porcelain Veneers",
      "Single-Sitting Painless Rotary Root Canals & Zirconia Crowns",
      "Lifetime Titanium Dental Implants & Fixed Teeth Restorations",
      "Comprehensive Family, Preventive & Gentle Pediatric Dental Care"
    ]
  },

  // 9 Core Clinical Before & After Transformation Cases (Authentic clinic photographic cases)
  transformationCases: [
    {
      id: "case-ortho-canine",
      treatmentId: "orthodontic-braces",
      title: "High Canine (Ectopic Canines) & Severe Crowding Alignment",
      specialty: "1. Orthodontics & 3D Aligners (Doctor's Core MDS Specialty)",
      badge: "Ectopic Canine Traction",
      category: "ortho",
      beforeImage: "/real-cases/ortho_canine_crowding_before.webp",
      afterImage: "/real-cases/ortho_canine_crowding_after.webp",
      fullImage: "/real-cases/ortho_canine_crowding_full.webp",
      beforeLabel: "PRE-TREATMENT: Ectopic High Canines & Severe Crowding",
      afterLabel: "POST-TREATMENT: Fully Leveled Arch & Harmonious Canine Guidance",
      beforeNotes: "Patient presented with prominently blocked-out high labial canines ('vampire fangs') positioned above the gumline, severe anterior crowding, and deep bite.",
      afterNotes: "Specialist orthodontic biomechanics executed by Dr. Khalidh Khan (MDS). Created arch space, guided the ectopic canines into the dental arch, and established an ideal Class-I canine relationship and continuous archwire leveling.",
      timeframe: "12 – 14 Months",
      sittings: "Monthly Ortho Appointments",
      procedureType: "Orthodontic Arch Expansion & Canine Traction",
      highlight: "Complete correction of high ectopic canines without tooth extraction, creating a wide natural smile."
    },
    {
      id: "case-ortho-gap",
      treatmentId: "orthodontic-braces",
      title: "Orthodontic Braces Midline Diastema Gap Closure",
      specialty: "1. Orthodontics & 3D Aligners (Doctor's Core MDS Specialty)",
      badge: "100% Closed Midline Gap",
      category: "ortho",
      beforeImage: "/real-cases/ortho_braces_gap_before.webp",
      afterImage: "/real-cases/ortho_braces_gap_after.webp",
      fullImage: "/real-cases/ortho_braces_gap_full.webp",
      beforeLabel: "PRE-TREATMENT: Wide Central Diastema Gap with Fixed Brackets",
      afterLabel: "POST-TREATMENT: Flawlessly Closed Space & Symmetrical Arch",
      beforeNotes: "Patient presented with a wide gap between upper central incisors and irregular spacing, causing speech air leak and aesthetic concern.",
      afterNotes: "Treated by Consultant Orthodontist Dr. Khalidh Khan (MDS) using precision self-ligating brackets and archwires. Complete closure of the midline space and symmetrical arch alignment.",
      timeframe: "6 – 10 Months",
      sittings: "Monthly Ortho Adjustments",
      procedureType: "Orthodontic Biomechanics + Low-Friction Brackets",
      highlight: "100% natural closure of central gap with perfect arch symmetry and stable retention."
    },
    {
      id: "case-scaling-periodontics",
      treatmentId: "preventive-ultrasonic-scaling",
      title: "Ultrasonic Deep Scaling & Periodontal Stain Removal",
      specialty: "5. Periodontics & Gum Care",
      badge: "Verified AK's Clinical Case",
      category: "gums",
      beforeImage: "/real-cases/scaling_gum_before.webp",
      afterImage: "/real-cases/scaling_gum_after.webp",
      fullImage: "/real-cases/scaling_gum_full.webp",
      beforeLabel: "PRE-TREATMENT: Heavy Tartar, Calculus Buildup & Gum Inflammation",
      afterLabel: "POST-TREATMENT: Spotless Enamel & Firm Healthy Pink Gums",
      beforeNotes: "Extensive supra and subgingival dark calculus deposits along the margins of all anterior teeth, chronic gum bleeding, and tissue inflammation.",
      afterNotes: "Gentle ultrasonic piezotronic deep scaling, root surface detoxification, and polishing performed. All tartar eradicated without enamel scratching, returning gums to pristine pink health.",
      timeframe: "30 – 40 Minutes",
      sittings: "Single Sitting",
      procedureType: "Ultrasonic Piezo Scaling + Prophylaxis Polish",
      highlight: "Complete eradication of heavy tartar and immediate resolution of bleeding gums."
    },
    {
      id: "case-cosmetic-smile",
      treatmentId: "cosmetic-smile-designing",
      title: "Cosmetic Smile Designing & Enamel Rehabilitation",
      specialty: "4. Cosmetic Dentistry & Smile Makeovers",
      badge: "Radiant Aesthetic Harmony",
      category: "cosmetic",
      beforeImage: "/real-cases/cosmetic_smile_before.webp",
      afterImage: "/real-cases/cosmetic_smile_after.webp",
      fullImage: "/real-cases/cosmetic_smile_full.webp",
      beforeLabel: "PRE-TREATMENT: Yellowing, Uneven Edges & Irregular Smile Curve",
      afterLabel: "POST-TREATMENT: Gleaming White Balanced Cosmetic Hollywood Smile",
      beforeNotes: "Severe extrinsic staining, uneven incisal wear, chipped edges, and yellowed tooth shade causing dissatisfaction with the smile line.",
      afterNotes: "Cosmetic smile design combining in-office whitening and micro-aesthetic enamel contouring. Resulted in an even, bright, and harmonious smile curve matching facial aesthetics.",
      timeframe: "1 – 2 Appointments",
      sittings: "2 Sittings",
      procedureType: "Cosmetic Smile Makeover + Laser Whitening",
      highlight: "Instantly transformed a tired, discolored smile into a radiant and confident Hollywood appearance."
    },
    {
      id: "case-denture-fullmouth",
      treatmentId: "dental-implants",
      title: "Complete Dentures & Geriatric Full Mouth Rehabilitation",
      specialty: "3. Prosthodontics & Permanent Tooth Replacement",
      badge: "Complete Facial Transformation",
      category: "dentures",
      beforeImage: "/real-cases/denture_rehab_before.webp",
      afterImage: "/real-cases/denture_rehab_after.webp",
      fullImage: "/real-cases/denture_rehab_full.webp",
      beforeLabel: "PRE-TREATMENT: Completely Edentulous & Sunken Lip Profile",
      afterLabel: "POST-TREATMENT: Restored Full Dentition, Chewing & Youthful Facial Height",
      beforeNotes: "Elderly patient with complete loss of all upper and lower natural teeth, loss of vertical facial height, severe sunken cheek profile, and inability to masticate food.",
      afterNotes: "Precision custom-crafted complete dentures engineered with balanced occlusion. Fully restored natural lip fullness, youthful facial aesthetics, and painless chewing capability.",
      timeframe: "3 – 4 Sittings",
      sittings: "Custom Impression & Fitting Protocol",
      procedureType: "Full Mouth Prosthetic Rehabilitation",
      highlight: "Restored full smile confidence, speech clarity, and comfortable eating for an elderly patient."
    },
    {
      id: "case-ortho-ectopic-canine",
      treatmentId: "orthodontic-braces",
      title: "High Ectopic Canine Traction & Severe Anterior Crowding",
      specialty: "1. Orthodontics & 3D Aligners (Doctor's Core MDS Specialty)",
      badge: "Ectopic Canine Guided",
      category: "ortho",
      beforeImage: "/real-cases/ortho_ectopic_canine_before.webp",
      afterImage: "/real-cases/ortho_ectopic_canine_after.webp",
      fullImage: "/real-cases/ortho_ectopic_canine_full.webp",
      beforeLabel: "PRE-TREATMENT: High Ectopic Canine Blocked Above Gumline & Anterior Crowding",
      afterLabel: "POST-TREATMENT: Perfectly Leveled Dental Arch, Ideal Canine Guidance & Full Alignment",
      beforeNotes: "Young patient presented with an ectopic labially displaced maxillary canine erupting significantly above the dental arch, severe crowding of central incisors, and compromised smile aesthetics.",
      afterNotes: "Treated by Consultant Orthodontist Dr. Khalidh Khan (MDS) using fixed pre-adjusted edgewise appliance biomechanics. Guided the high canine into proper arch alignment without premolar extractions, achieving stable Class-I occlusion.",
      timeframe: "12 – 14 Months",
      sittings: "Monthly Ortho Adjustments",
      procedureType: "Fixed Orthodontic Appliance + Ectopic Canine Traction",
      highlight: "Non-extraction orthodontic guided eruption bringing a severely displaced high canine into ideal alignment."
    },
    {
      id: "case-ortho-lower-crowding",
      treatmentId: "orthodontic-braces",
      title: "Severe Mandibular Arch Crowding & Parabolic Expansion",
      specialty: "1. Orthodontics & 3D Aligners (Doctor's Core MDS Specialty)",
      badge: "Ideal Archform Achieved",
      category: "ortho",
      beforeImage: "/real-cases/ortho_lower_crowding_before.webp",
      afterImage: "/real-cases/ortho_lower_crowding_after.webp",
      fullImage: "/real-cases/ortho_lower_crowding_full.webp",
      beforeLabel: "PRE-TREATMENT: Severe Lower Anterior Overlapping & Collapsed Lingual Arch",
      afterLabel: "POST-TREATMENT: Broad Smooth Parabolic Arch with Flawless Individual Tooth Alignment",
      beforeNotes: "Occlusal mandibular examination showed severe anterior imbrication with lingually locked lateral incisors, high plaque retention, and compromised chewing function.",
      afterNotes: "Comprehensive lower fixed appliance therapy by Dr. Khalidh Khan (MDS) utilizing sequential superelastic nickel-titanium archwires. Created a harmonious broad arch form with zero tooth rotations.",
      timeframe: "10 – 12 Months",
      sittings: "Periodic Archwire Sequencing",
      procedureType: "Mandibular Arch Leveling + Derotation Biomechanics",
      highlight: "100% resolution of severe lower crowding, restoring easy dental hygiene and ideal occlusal contacts."
    },
    {
      id: "case-scaling-tobacco-stains",
      treatmentId: "preventive-ultrasonic-scaling",
      title: "Deep Ultrasonic Scaling & Severe Tobacco / Betel Stain Eradication",
      specialty: "5. Periodontics & Gum Care",
      badge: "100% Stain-Free Enamel",
      category: "gums",
      beforeImage: "/real-cases/scaling_tobacco_stains_before.webp",
      afterImage: "/real-cases/scaling_tobacco_stains_after.webp",
      fullImage: "/real-cases/scaling_tobacco_stains_full.webp",
      beforeLabel: "PRE-TREATMENT: Heavy Black/Brown Extrinsic Tobacco Stains & Marginal Tartar Deposits",
      afterLabel: "POST-TREATMENT: Pristine Sparkling Natural Enamel & Rejuvenated Healthy Pink Gums",
      beforeNotes: "Patient presented with stubborn dark extrinsic tobacco, tea, and betel nut stains embedded across all tooth surfaces and cervical gingival margins, causing breath odor and social self-consciousness.",
      afterNotes: "Painless ultrasonic piezotronic deep scaling combined with subgingival curettage and prophylactic air-polishing. Eradicated all stubborn stains without any enamel abrasion, restoring vibrant natural brightness.",
      timeframe: "35 – 45 Minutes",
      sittings: "Single Sitting",
      procedureType: "Ultrasonic Deep Scaling + Micro-Prophylaxis Polishing",
      highlight: "Immediate complete elimination of years of heavy tobacco and pan stains in a single comfortable visit."
    },
    {
      id: "case-ortho-bite-correction",
      treatmentId: "orthodontic-braces",
      title: "Complex Bite Correction & Class-I Intercuspation Alignment",
      specialty: "1. Orthodontics & 3D Aligners (Doctor's Core MDS Specialty)",
      badge: "Ideal Functional Bite",
      category: "ortho",
      beforeImage: "/real-cases/ortho_bite_correction_before.webp",
      afterImage: "/real-cases/ortho_bite_correction_after.webp",
      fullImage: "/real-cases/ortho_bite_correction_full.webp",
      beforeLabel: "PRE-TREATMENT: Anterior Open Bite / Incompetent Occlusion & Premolar Spacing",
      afterLabel: "POST-TREATMENT: Solid Class-I Intercuspation, Ideal Overjet & Confident Facial Profile",
      beforeNotes: "Lateral profile examination revealed abnormal anterior occlusion with incomplete incisal contact, uneven bite force distribution, and difficulties in incising food.",
      afterNotes: "Expert orthodontic management by Dr. Khalidh Khan (MDS) utilizing dual-arch bracket coordination and intermaxillary elastics. Established a solid Class-I molar relationship and aesthetic smiling curve.",
      timeframe: "14 – 16 Months",
      sittings: "Monthly Orthodontic Monitoring",
      procedureType: "Bite Leveling + Intermaxillary Elastic Mechanics",
      highlight: "Achieved balanced masticatory function and ideal dental aesthetic interdigitation."
    },
    {
      id: "case-cosmetic-anterior-restoration",
      treatmentId: "cosmetic-smile-designing",
      title: "Anterior Interproximal Caries Restoration & Enamel Reconstruction",
      specialty: "4. Cosmetic Dentistry & Smile Makeovers",
      badge: "Invisible Shade Match",
      category: "cosmetic",
      beforeImage: "/real-cases/cosmetic_anterior_restoration_before.webp",
      afterImage: "/real-cases/cosmetic_anterior_restoration_after.webp",
      fullImage: "/real-cases/cosmetic_anterior_restoration_full.webp",
      beforeLabel: "PRE-TREATMENT: Dark Interproximal Cavity Between Front Incisors with Enamel Breakdown",
      afterLabel: "POST-TREATMENT: Flawless Biomimetic Composite Reconstruction with Seamless Natural Shade",
      beforeNotes: "Patient had deep active interproximal dental caries (Class-III cavity) between upper central and lateral incisors with dark marginal shadowing, visible when smiling.",
      afterNotes: "Micro-conservative decay excavation under magnification followed by anatomical layering of nanohybrid composite resin with polychromatic shading, replicating natural translucency and contact tightness.",
      timeframe: "45 Minutes",
      sittings: "Single Sitting",
      procedureType: "Biomimetic Nanohybrid Composite Restoration",
      highlight: "Invisible tooth-colored restoration fully preserving natural tooth structure and eliminating dark cavity spot."
    }
  ] as TransformationCase[],

  // Interactive All-Specialties Symptom & Treatment Navigator
  symptomTriageOptions: [
    {
      id: "toothache",
      iconName: "Zap",
      chiefComplaint: "Severe Toothache / Throbbing Pain",
      urgency: "Immediate",
      description: "Sharp or continuous pain, sensitivity to hot/cold, pain while chewing, or throbbing night pain.",
      recommendedSpecialty: "Single-Sitting Rotary Root Canal (Painless Nerve Relief)",
      treatmentId: "single-visit-rct",
      expectedOutcome: "Immediate eradication of infection, 100% relief from pain, and natural tooth preserved."
    },
    {
      id: "missing-tooth",
      iconName: "ShieldCheck",
      chiefComplaint: "Missing Tooth / Gap in Bite",
      urgency: "Scheduled",
      description: "One or more missing teeth causing difficulty chewing food, speech changes, or bone loss.",
      recommendedSpecialty: "Permanent Titanium Dental Implants or Fixed Zirconia Bridge",
      treatmentId: "dental-implants",
      expectedOutcome: "Permanent lifelike replacement with 100% natural bite strength and zero damage to adjacent teeth."
    },
    {
      id: "crooked-teeth",
      iconName: "Smile",
      chiefComplaint: "Crooked, Crowded or Spaced Teeth",
      urgency: "Elective",
      description: "Overlapping front teeth, forwardly placed teeth, gaps between teeth, or bite misalignment.",
      recommendedSpecialty: "Invisalign 3D Clear Aligners or Ceramic Self-Ligating Braces",
      treatmentId: "clear-aligners",
      expectedOutcome: "Broad, perfectly aligned dental arches and balanced facial symmetry planned digitally."
    },
    {
      id: "bleeding-gums",
      iconName: "Activity",
      chiefComplaint: "Bleeding Gums / Bad Breath / Tartar",
      urgency: "Scheduled",
      description: "Bleeding while brushing, red swollen gums, yellow tartar calculus, or persistent bad breath.",
      recommendedSpecialty: "Ultrasonic Deep Scaling & Periodontal Laser Therapy",
      treatmentId: "preventive-ultrasonic-scaling",
      expectedOutcome: "Clean, calculus-free tooth roots, firm healthy pink gums, and fresh breath."
    },
    {
      id: "yellow-stained",
      iconName: "Sparkles",
      chiefComplaint: "Yellow, Dull or Stained Smile",
      urgency: "Elective",
      description: "Dark coffee/tea stains, fluorosis discolorations, or desire for a sparkling wedding/event smile.",
      recommendedSpecialty: "In-Office Laser Teeth Whitening or Cosmetic Porcelain Veneers",
      treatmentId: "cosmetic-smile-designing",
      expectedOutcome: "Instantly 6+ shades brighter pearly white teeth in a single 40-minute session."
    },
    {
      id: "child-teeth",
      iconName: "Award",
      chiefComplaint: "Kids Cavity / Tooth Decay / Habit",
      urgency: "Scheduled",
      description: "Milk teeth cavities, black spots, pain eating food, thumb-sucking, or crooked eruption.",
      recommendedSpecialty: "Pediatric Gentle Cavity Fillings & Preventive Fluoride Sealants",
      treatmentId: "pediatric-dental-care",
      expectedOutcome: "Fear-free gentle treatment preserving milk teeth for proper permanent tooth alignment."
    },
    {
      id: "wisdom-pain",
      iconName: "CheckCircle2",
      chiefComplaint: "Wisdom Tooth Jaw Pain & Swelling",
      urgency: "Immediate",
      description: "Pain at the back of jaw, difficulty opening mouth, swollen cheek, or food trapping behind molars.",
      recommendedSpecialty: "Minimally Invasive Wisdom Tooth Impaction Extraction",
      treatmentId: "wisdom-tooth-extractions",
      expectedOutcome: "Painless surgical removal with quick recovery and permanent relief from jaw swelling."
    }
  ] as SymptomTriageItem[],

  // All 8 Core Dental Specialties (Balanced Hospital Spectrum)
  treatments: [
    {
      id: "single-visit-rct",
      title: "Single-Sitting Rotary Root Canal",
      category: "rct",
      tag: "Pain Relief Specialty",
      badge: "Painless Motorized Tech",
      shortDesc: "Painless computerized rotary endodontics performed in a single 45-minute visit to eliminate deep tooth infections and preserve natural teeth.",
      fullDesc: "Suffering from acute dental pain? Our hospital utilizes advanced motorized rotary systems, electronic apex locators, and ultrasonic canal disinfection to clean and seal infected pulp canals in one visit under gentle local anesthesia.",
      timeline: "Single Session (45 Mins)",
      idealFor: "Severe toothache, deep cavities, pulp inflammation, and fractured teeth",
      benefits: [
        "Virtually painless procedure with computer-assisted precision",
        "Completed in a single visit with zero repeated drilling",
        "Saves your natural tooth and surrounding jawbone",
        "Reinforced with unbreakable CAD/CAM Zirconia crowns"
      ],
      iconName: "Zap",
      beforeAfterCaseId: "case-rct"
    },
    {
      id: "dental-implants",
      title: "Dental Implants & Fixed Zirconia Crowns",
      category: "implants",
      tag: "Permanent Replacement",
      badge: "Lifetime Chewing Power",
      shortDesc: "Bio-integrated titanium dental implants and custom CAD/CAM zirconia crowns that replace missing teeth permanently.",
      fullDesc: "Regain the confidence to chew any food. Titanium implants fuse permanently with your jawbone, creating a rock-solid foundation for natural-looking ceramic crowns that never slip, click, or decay.",
      timeline: "Planned 2-Stage Care",
      idealFor: "Single missing tooth, multiple lost teeth, or unstable loose dentures",
      benefits: [
        "Permanent lifelong tooth replacement solution",
        "Prevents jawbone shrinkage and facial sagging",
        "Restores 100% natural chewing and biting force",
        "Zero grinding or damage required on healthy neighbor teeth"
      ],
      iconName: "ShieldCheck",
      beforeAfterCaseId: "case-implant"
    },
    {
      id: "clear-aligners",
      title: "Invisalign & 3D Clear Aligners",
      category: "ortho",
      tag: "Orthodontic Atelier",
      badge: "Invisalign Certified Care",
      shortDesc: "Custom-molded digital invisible aligners planned via 3D intraoral scanning that straighten teeth discreetly without metal brackets.",
      fullDesc: "Discreet orthodontic correction for teens and adults. Planned by MDS Orthodontist Dr. Khalidh Khan using high-precision 3D digital scanners, clear aligners gently shift teeth into alignment with zero food restrictions.",
      timeline: "6 – 14 Months",
      idealFor: "Working professionals, adults, and self-conscious teens",
      benefits: [
        "100% transparent and virtually invisible to others",
        "Removable anytime for comfortable meals and thorough brushing",
        "Zero painful wire cuts, mouth ulcers, or bracket emergencies",
        "Complete 3D digital smile simulation before treatment commences"
      ],
      iconName: "Sparkles",
      beforeAfterCaseId: "case-aligners"
    },
    {
      id: "cosmetic-smile-designing",
      title: "Cosmetic Smile Makeover & Whitening",
      category: "cosmetic",
      tag: "Aesthetic Studio",
      badge: "Same-Day Radiance",
      shortDesc: "In-office laser LED teeth whitening, porcelain veneers, tooth-colored composite bonding, and gap closures.",
      fullDesc: "Transform dull, chipped, or uneven teeth into a radiant masterpiece. We provide 40-minute LED laser teeth whitening lifting years of stains, as well as ultra-thin porcelain veneers that permanently correct chips and spacing.",
      timeline: "1 – 2 Appointments",
      idealFor: "Stained, discolored, chipped, or unevenly spaced teeth",
      benefits: [
        "6+ shades brighter teeth in under 45 minutes",
        "Custom porcelain veneers crafted to your facial proportions",
        "Tooth-colored composite bonding for instant chip and gap repair",
        "Enamel-safe certified aesthetic materials"
      ],
      iconName: "HeartHandshake",
      beforeAfterCaseId: "case-whitening"
    },
    {
      id: "preventive-ultrasonic-scaling",
      title: "Ultrasonic Scaling & Gum Therapy",
      category: "gums",
      tag: "Periodontal Wellness",
      badge: "Tartar & Plaque Free",
      shortDesc: "Painless ultrasonic calculus removal, root planing, gum disease therapy, and stain polishing for long-term oral wellness.",
      fullDesc: "Healthy gums are the foundation of your smile. Our gentle ultrasonic piezotronic cleaning removes hardened tartar and harmful bacterial colonies, stopping bleeding gums, preventing loose teeth, and eliminating bad breath.",
      timeline: "30 Minutes",
      idealFor: "Bleeding gums, tartar deposits, bad breath, and 6-month checkups",
      benefits: [
        "Completely painless ultrasonic tartar and stain removal",
        "Cures bleeding gums and stops periodontitis progression",
        "Eliminates chronic halitosis (bad breath)",
        "Includes full clinical screening for oral health"
      ],
      iconName: "Activity",
      beforeAfterCaseId: "case-cleaning"
    },
    {
      id: "pediatric-dental-care",
      title: "Pediatric Dental Care & Habit Breaking",
      category: "pediatric",
      tag: "Children Speciality",
      badge: "Fear-Free Kids Clinic",
      shortDesc: "Gentle milk tooth cavity fillings, pit & fissure sealants, fluoride varnish, and habit-breaking appliances for growing children.",
      fullDesc: "Setting children on the path to a lifetime of healthy smiles. We provide preventive care for milk teeth, fluoride applications, space maintainers, and gentle appliances to correct thumb-sucking and tongue-thrusting in a warm, reassuring environment.",
      timeline: "Customized pediatric plan",
      idealFor: "Children and growing adolescents (Ages 1 – 16)",
      benefits: [
        "Friendly, welcoming clinic atmosphere designed for kids",
        "Painless tooth-colored fillings and protective fissure sealants",
        "Early guidance for proper jaw expansion and teeth eruption",
        "Preventive dietary and brushing counseling for parents"
      ],
      iconName: "Award",
      beforeAfterCaseId: "case-pediatric"
    },
    {
      id: "wisdom-tooth-extractions",
      title: "Painless Wisdom Tooth Extractions",
      category: "surgery",
      tag: "Oral Surgery",
      badge: "Gentle Surgical Care",
      shortDesc: "Gentle surgical extractions of impacted, swollen, or painfully tilted wisdom molars with rapid healing protocols.",
      fullDesc: "Relieve chronic jaw aches, gum infections, and cheek swelling caused by impacted third molars. We perform gentle extractions under local anesthesia with comprehensive post-operative comfort care.",
      timeline: "30 – 45 Minutes",
      idealFor: "Painful, swollen, or horizontally impacted wisdom teeth",
      benefits: [
        "Rapid relief from recurrent jaw pain and swelling",
        "Protects adjacent healthy molars from root cavities",
        "Minimally invasive surgical techniques with fast healing",
        "Complete medication and recovery instructions provided"
      ],
      iconName: "CheckCircle2"
    },
    {
      id: "orthodontic-braces",
      title: "Self-Ligating Ceramic & Metal Braces",
      category: "ortho",
      tag: "Orthodontic Care",
      badge: "Complex Bite Correction",
      shortDesc: "Low-friction aesthetic ceramic and metal braces engineered for severe crowding, deep overbites, and complex space closures.",
      fullDesc: "From ultra-low-profile metal brackets to tooth-colored aesthetic ceramic brackets, we provide comprehensive orthodontic correction for malocclusions, deep bites, crossbites, and misaligned dental arches with minimal discomfort.",
      timeline: "12 – 18 Months",
      idealFor: "Children, teenagers, and complex structural alignment cases",
      benefits: [
        "Reliable correction for severe crowding and deep bite issues",
        "Aesthetic tooth-colored ceramic brackets available",
        "Self-ligating technology for reduced friction and fewer clinic visits",
        "Flexible monthly installment payment plans"
      ],
      iconName: "Smile"
    }
  ] as Treatment[],

  photos: [
    {
      id: 1,
      path: "/clinic-photos/dr_khalidh_khan_suit.webp",
      caption: "Dr. Khalidh Khan, BDS, MDS - Chief Dental Surgeon & Consultant Orthodontist",
      tag: "Chief Doctor",
      aspect: "portrait",
      category: "doctor"
    },
    {
      id: 2,
      path: "/clinic-photos/aks_real_02.webp",
      caption: "Dr. Khalidh Khan, MDS (Orthodontics) with Official Invisalign Certification Plaques",
      tag: "Doctor & Invisalign",
      aspect: "portrait",
      category: "doctor"
    },
    {
      id: 2,
      path: "/clinic-photos/aks_real_03.webp",
      caption: "Consultation Suite with Official AK's Logo & Orthodontic Certifications",
      tag: "Consultation Suite",
      aspect: "portrait",
      category: "doctor"
    },
    {
      id: 3,
      path: "/clinic-photos/itero_dr_khalidh_suit.webp",
      caption: "High-Precision 3D Digital Intraoral Scanning & Consultation Suite",
      tag: "3D Scanner & Tech",
      aspect: "portrait",
      category: "tech"
    },
    {
      id: 4,
      path: "/clinic-photos/aks_real_05.webp",
      caption: "Specialized Orthodontic Operatory Suite with Advanced Delivery Unit",
      tag: "Ortho Operatory",
      aspect: "portrait",
      category: "operatory"
    },
    {
      id: 5,
      path: "/clinic-photos/aks_real_06.webp",
      caption: "Ergonomic Treatment Operatory with Hospital-Grade Sterilization",
      tag: "Treatment Suite",
      aspect: "portrait",
      category: "operatory"
    },
    {
      id: 6,
      path: "/real-cases/aks_operatory_chair.png",
      caption: "Sterilized Dental Treatment Operatory Chair & Precision Unit",
      tag: "Dental Operatory",
      aspect: "portrait",
      category: "operatory"
    },
    {
      id: 7,
      path: "/clinic-photos/aks_real_07.webp",
      caption: "Digital Radiography & Diagnostic Review Console",
      tag: "Digital Diagnostics",
      aspect: "landscape",
      category: "tech"
    },
    {
      id: 8,
      path: "/clinic-photos/aks_real_09.webp",
      caption: "Hospital-Grade Class-B Autoclave Multi-Barrier Sterilization Station",
      tag: "Autoclave Hygiene",
      aspect: "portrait",
      category: "tech"
    },
    {
      id: 9,
      path: "/clinic-photos/aks_real_04.webp",
      caption: "Official Clinic Entrance & Landmark Signboard at Suriya Nagar Extn, K.Pudur",
      tag: "Clinic Facade",
      aspect: "landscape",
      category: "facade"
    },
    {
      id: 10,
      path: "/clinic-photos/aks_real_08.webp",
      caption: "Boutique Waiting Lounge & Reception Desk at AK's Elite Dental Clinic",
      tag: "Reception Lounge",
      aspect: "landscape",
      category: "facade"
    },
    {
      id: 11,
      path: "/clinic-photos/aks_real_11.webp",
      caption: "Ground Floor Welcoming Signage & Building Access at Alagar Complex",
      tag: "Building Entrance",
      aspect: "portrait",
      category: "facade"
    },
    {
      id: 12,
      path: "/real-cases/aks_8_disciplines_poster.jpg",
      caption: "AK's Elite 8 Core Clinical Disciplines Master Photographic Guide",
      tag: "8-Discipline Blueprint",
      aspect: "landscape",
      category: "tech"
    }
  ] as ClinicPhoto[],

  reviews: [
    {
      id: "rev-1",
      author: "Praveen Kumar",
      rating: 5,
      date: "Recent Patient",
      text: "Dr. Khalidh Khan is exceptionally skilled and gentle. I came with severe toothache and got a root canal done in a single sitting with zero pain. The clinic in K.Pudur is spotless and very well equipped.",
      tag: "Single-Sitting RCT",
      verified: true
    },
    {
      id: "rev-2",
      author: "Meenakshi Sundaram",
      rating: 5,
      date: "Recent Patient",
      text: "I consulted Dr. Khalidh Khan for clear aligners. The 3D digital scan showed my smile simulation right away. After 9 months, my crooked teeth are perfectly straight. The best dental clinic in Madurai!",
      tag: "Clear Aligners",
      verified: true
    },
    {
      id: "rev-3",
      author: "Kavitha Rajan",
      rating: 5,
      date: "Recent Patient",
      text: "Took my 7-year-old daughter for dental treatment. The doctor was so patient and friendly with her. No fear, no tears! Highly recommend for children's dental care.",
      tag: "Pediatric Dentistry",
      verified: true
    },
    {
      id: "rev-4",
      author: "Anandhakumar M",
      rating: 5,
      date: "Recent Patient",
      text: "Replaced my missing lower molar with a dental implant here. The procedure was smooth and painless. Now I can chew comfortably like before. Outstanding treatment quality and reasonable pricing.",
      tag: "Dental Implant",
      verified: true
    },
    {
      id: "rev-5",
      author: "Saranya Devi",
      rating: 5,
      date: "Recent Patient",
      text: "Did teeth scaling and laser whitening before my wedding. The results were amazing — 6 shades brighter in 45 minutes! Very hygienic and modern setup near Surya Nagar MedPlus.",
      tag: "Smile Makeover",
      verified: true
    }
  ] as Review[],

  faq: [
    {
      q: "Where is AK's Elite Dental Clinic located in Madurai?",
      a: "We are located at Plot No. 162/2A, Alagar Complex, 5th Meenakshi Amman Nagar Main Road, Suriya Nagar Extn, near Surya Nagar MedPlus, K.Pudur, Madurai - 625007."
    },
    {
      q: "What dental treatments are provided at AK's Elite Dental Clinic?",
      a: "We provide comprehensive multi-speciality dental clinic care: Single-Sitting Painless Root Canals, Lifetime Dental Implants, 3D Clear Aligners & Braces, Laser Gum Therapy, Cosmetic Smile Makeovers, Pediatric Care, and Wisdom Tooth Extractions."
    },
    {
      q: "Is root canal treatment really painless at your clinic?",
      a: "Yes! With computerized motorized rotary endodontic systems, high-magnification vision, and modern local anesthesia, the procedure is completed comfortably in a single visit without any painful drilling."
    },
    {
      q: "What makes Clear Aligners different from Traditional Braces?",
      a: "Clear aligners are transparent, removable medical-grade plastic trays mapped out via 3D digital intraoral scanning. They are virtually invisible and allow normal eating and brushing. Traditional ceramic and metal braces remain the gold standard for severe skeletal bite corrections."
    },
    {
      q: "What are the clinic consultation hours?",
      a: "We are open Monday through Saturday from 9:30 AM to 9:00 PM, and on Sundays from 10:30 AM to 2:00 PM. Prior appointments are recommended to ensure zero waiting time."
    },
    {
      q: "How do I book an appointment with Dr. Khalidh Khan?",
      a: "You can book directly through our website booking form, message our reception desk on WhatsApp at +91 95387 23872, or call us at 095387 23872."
    }
  ]
};
