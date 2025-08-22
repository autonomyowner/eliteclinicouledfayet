# 🦷 Coral Dental Clinic Brand Locations Guide

This document lists all locations where the clinic brand name appears in the codebase and website. Use this guide to efficiently rebrand to **Coral Dental Clinic** across the entire application.

## 🎯 Quick Change Strategy for Coral Dental Clinic

**Most Efficient Approach:**
1. Update `src/config/site.ts` first (this automatically updates many locations)
2. Update individual component files to "Coral Dental Clinic"
3. Rename image files to include "coral" branding
4. Update domain/email references to coral-dental domain

---

## 📍 Brand Name Locations for Coral Dental Clinic

### **🔧 Core Configuration (START HERE)**

| File | Variable/Property | Current Value | New Value (Coral Dental) | Description |
|------|------------------|---------------|--------------------------|-------------|
| `src/config/site.ts` | `name` | `"Clinique Dentaire Tibaoui"` | `"Coral Dental Clinic"` | **Main brand name** - Updates metadata automatically |
| `src/config/site.ts` | `baseUrl` | `"https://www.clinique-tibaoui.dz"` | `"https://www.coraldental.dz"` | Website URL |
| `src/config/site.ts` | `email` | `"contact@clinique-tibaoui.dz"` | `"contact@coraldental.dz"` | Contact email |

---

### **💻 Source Code Files for Coral Dental Clinic**

| File | Line(s) | Location | Current Text | New Text (Coral Dental) | Notes |
|------|---------|----------|--------------|--------------------------|-------|
| `src/app/layout.tsx` | ~40 | Page title | `${siteConfig.name} — Clinique Dentaire` | `${siteConfig.name} — Dental Clinic` | Uses config variable |
| `src/app/layout.tsx` | ~47 | OpenGraph title | `${siteConfig.name} — Clinique Dentaire` | `${siteConfig.name} — Dental Clinic` | Uses config variable |
| `src/app/layout.tsx` | ~65 | Twitter title | `${siteConfig.name} — Clinique Dentaire` | `${siteConfig.name} — Dental Clinic` | Uses config variable |
| `src/app/about/page.tsx` | ~6 | Page title | `"À propos - Clinique Dentaire Tibaoui"` | `"About - Coral Dental Clinic"` | **Manual update needed** |
| `src/app/about/page.tsx` | ~52 | Hero heading | `"TIBAOUI"` | `"CORAL DENTAL"` | **Manual update needed** |
| `src/app/about/page.tsx` | ~80 | Content text | `"la Clinique Tibaoui s'est imposée..."` | `"Coral Dental Clinic has established itself..."` | **Manual update needed** |
| `src/components/Navbar.tsx` | ~15 | Brand link | `"Clinique Tibaoui"` | `"Coral Dental Clinic"` | **Manual update needed** |
| `src/components/Hero.tsx` | ~29 | Hero heading | `"Dentaire Tibaoui"` | `"Coral Dental"` | **Manual update needed** |
| `src/components/Footer.tsx` | ~25 | Brand name | `"Clinique Tibaoui"` | `"Coral Dental Clinic"` | **Manual update needed** |
| `src/components/Footer.tsx` | ~85 | Copyright | `"© {year} Clinique Tibaoui"` | `"© {year} Coral Dental Clinic"` | **Manual update needed** |

---

### **📁 Static Files for Coral Dental**

| File | Type | Description | New Name (Coral) | Action Required |
|------|------|-------------|-------------------|-----------------|
| `public/tibaoui-pitts21.png` | Image | Product/technique image | `public/coral-dental-technique.png` | **Rename file** + update references |
| `src/app/page.tsx` | Code | Image reference | Update path: `"/coral-dental-technique.png"` | **Update code reference** |

---

### **👁️ Coral Dental Clinic Visitor-Visible Locations**

#### **All Pages (Header & Footer)**
- 🦷 **Navigation Bar**: "Clinique Tibaoui" → **"Coral Dental Clinic"** `src/components/Navbar.tsx`
- 🦷 **Footer Brand**: "Clinique Tibaoui" → **"Coral Dental Clinic"** `src/components/Footer.tsx`  
- 🦷 **Footer Copyright**: "© 2025 Clinique Tibaoui" → **"© 2025 Coral Dental Clinic"** `src/components/Footer.tsx`
- 🦷 **Browser Tab Title**: Shows config name → Auto-updates from `siteConfig.name`

#### **Home Page**
- 🦷 **Hero Section**: "Dentaire Tibaoui" → **"Coral Dental"** `src/components/Hero.tsx`

#### **About Page**
- 🦷 **Main Heading**: "CLINIQUE TIBAOUI" → **"CORAL DENTAL CLINIC"** `src/app/about/page.tsx`
- 🦷 **Page Title**: "À propos - Clinique Dentaire Tibaoui" → **"About - Coral Dental Clinic"** `src/app/about/page.tsx`
- 🦷 **Content Text**: "la Clinique Tibaoui s'est imposée..." → **"Coral Dental Clinic has established itself..."** `src/app/about/page.tsx`

#### **Contact Page**  
- 🦷 **Email Display**: "contact@clinique-tibaoui.dz" → **"contact@coraldental.dz"** Auto-updates from `siteConfig.email`

---

## 🦷 Step-by-Step Coral Dental Clinic Rebranding Process

### **Step 1: Update Core Configuration for Coral Dental**
```typescript
// File: src/config/site.ts
export const siteConfig = {
  name: "Coral Dental Clinic",
  baseUrl: "https://www.coraldental.dz", 
  email: "contact@coraldental.dz",
  // ... rest remains the same
};
```

### **Step 2: Update Component Files for Coral Dental**
Update these files manually with "Coral Dental Clinic" branding:

1. **`src/components/Navbar.tsx`** (line ~15) → `"Coral Dental Clinic"`
2. **`src/components/Hero.tsx`** (line ~29) → `"Coral Dental"`
3. **`src/components/Footer.tsx`** (lines ~25, ~85) → `"Coral Dental Clinic"`
4. **`src/app/about/page.tsx`** (lines ~6, ~52, ~80) → `"About - Coral Dental Clinic"`, `"CORAL DENTAL"`, etc.

### **Step 3: Handle Image Files for Coral Branding**
1. Rename `public/tibaoui-pitts21.png` → `public/coral-dental-technique.png`
2. Update image reference in `src/app/page.tsx` → `"/coral-dental-technique.png"`

### **Step 4: Update Domain/Email for Coral Dental**
- Update `baseUrl` → `"https://www.coraldental.dz"`
- Update `email` → `"contact@coraldental.dz"`
- Update DNS/hosting settings to coral domain externally

### **Step 5: Test & Verify Coral Dental Setup**
- Run `npm run build` to check for errors
- Test all pages visually for "Coral Dental Clinic" branding
- Check browser tab titles show "Coral Dental Clinic"
- Verify footer copyright shows "© 2025 Coral Dental Clinic" 
- Test contact form uses "contact@coraldental.dz"

---

## 🎨 Coral Dental Clinic Customization Tips

### **Colors & Styling for Coral Theme**
Consider updating brand colors to match coral theme in `src/app/globals.css`:
```css
:root {
  --accent-primary: #FF6B6B;  /* Coral red */
  --accent-secondary: #4ECDC4;  /* Coral teal */
  --accent-gold: #FFB347;  /* Coral orange */
  /* Coral-inspired color palette */
}
```

### **Logo/Icon Changes for Coral Dental**
- Update favicon files in `public/` folder to coral-themed icons
- Replace any logo images with Coral Dental Clinic branding
- Consider updating icons to coral/dental themed ones (maybe coral reef + tooth icons)

### **SEO & Metadata for Coral Dental**
- Update meta descriptions in `src/app/layout.tsx` to include "Coral Dental Clinic"
- Update OpenGraph images if they contain old branding
- Update schema markup with Coral Dental Clinic business information

---

## ⚠️ Important Notes for Coral Dental Rebranding

- **Always backup your files before making changes**
- **Test thoroughly after each change**
- **Update external services** (Google My Business, social media, etc.) to "Coral Dental Clinic"
- **The `siteConfig` variable automatically updates many locations**
- **Some locations require manual updates** (marked with "Manual update needed")
- **Remember to register the coral dental domain** if changing URLs

---

## 📝 Coral Dental Clinic Rebranding Checklist

- [ ] Update `src/config/site.ts` → "Coral Dental Clinic"
- [ ] Update `src/components/Navbar.tsx` → "Coral Dental Clinic"
- [ ] Update `src/components/Hero.tsx` → "Coral Dental"
- [ ] Update `src/components/Footer.tsx` → "Coral Dental Clinic"
- [ ] Update `src/app/about/page.tsx` → All Coral Dental references
- [ ] Rename image files → coral-dental-*.png
- [ ] Test build (`npm run build`)
- [ ] Visual test all pages for coral branding
- [ ] Update external services to Coral Dental Clinic
- [ ] Register coral dental domain (if applicable)

---

*Last updated: August 2025*
*New brand: "Coral Dental Clinic"*
*Domain: "coraldental.dz"*