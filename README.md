# Overdrive Labs 998 — web

เว็บไซต์ของ Overdrive Labs 998 · HTML/CSS ล้วน ไม่มี build step
Static site for Overdrive Labs 998. Plain HTML/CSS, no build step.

## โครงสร้าง / Structure

```
index.html              หน้าบริษัท — รวมผลงาน แยก App / Game
404.html
assets/
  site.css              design system ใช้ร่วมทุกหน้า
  site.js               สลับภาษา ไทย/อังกฤษ (จำค่าไว้ใน localStorage)
  odl-mark.svg          โลโก้
apps/
  drivevolt/
    index.html          หน้าแอป DriveVolt
    privacy.html        นโยบายความเป็นส่วนตัว (Play บังคับให้มี)
    img/                ไอคอน + ภาพหน้าจอ (ย่อไว้ที่กว้าง 480px)
```

หน้าบริษัทกับหน้าแอปแยกกัน — เพิ่มแอปใหม่คือเพิ่มโฟลเดอร์ใต้ `apps/`
แล้วเพิ่มการ์ดหนึ่งใบใน `index.html` โดยไม่ต้องแตะหน้าอื่น

The company page and each app page are separate. To add an app, create a folder
under `apps/` and add one card to `index.html` — nothing else needs to change.

## เพิ่มแอปใหม่ / Adding an app

1. `mkdir -p apps/<ชื่อแอป>/img`
2. คัดลอก `apps/drivevolt/index.html` มาแก้เนื้อหา
3. เพิ่มการ์ดใน `index.html` ใต้ `<section id="apps">` หรือ `<section id="games">`
4. อัปเดตตัวเลขใน `<span class="count">`

## สองภาษา / Bilingual

ทุกข้อความมีสองชุด กำกับด้วย `data-lang="th"` และ `data-lang="en"`
CSS แสดงเฉพาะชุดที่ตรงกับภาษาที่เลือก ค่าเริ่มต้นคือไทย เว้นแต่เบราว์เซอร์ตั้งเป็นอังกฤษ

Every string exists twice, marked `data-lang="th"` / `data-lang="en"`. CSS shows
only the active language. Defaults to Thai unless the browser prefers English.

## Deploy

push ขึ้น `main` แล้ว GitHub Actions จะ deploy ขึ้น Pages ให้เอง
(`.github/workflows/pages.yml`)

Pushing to `main` deploys to GitHub Pages automatically.

**ครั้งแรกต้องเปิด Pages ก่อน** — Settings → Pages → Source: **GitHub Actions**

## ติดต่อ / Contact

overdrivelabs998@gmail.com
