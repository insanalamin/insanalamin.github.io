---
title: Rapid Web Development Dengan React dan Rust
date: 2020-03-20
---
# Rapid Web Development Dengan React dan Rust

OTOMASI, OTOMASI, OTOMASI !!!

## Strategi
1. TULIS di repository fitur-fitur yang dibutuhkan, lalu urut berdasarkan prioritas
2. TULIS di repository setiap use case, dan alur dari aplikasi 
3. BUAT di repository mockup layout untuk keseluruhan aplikasi dan tiap use case
4. BUAT skema database yang mewakili tiap use case
5. BANGUN REPOSITORY + BOILERPLATE
   - Buat shell inisialisasi app
   - Buat docker-compose.yml
   - Buat .gitlab-ci.yml untuk CI CD
   - Buat Features.md untuk list fitur-fitur yang dibutuhkan
   - Buat Usecases.md untuk list use case dan alur aplikasi
   - 4 Folder utama
     - Frontend + Dockerfile
     - Backend + Dockerfile
     - Database
     - Layout untuk desain
6. BANGUN FRONTEND + BOILERPLATE
   - create-react-app --template typescript
   - Material UI untuk layout 
   - Material UI Table untuk tabel
   - React Router untuk routing
   - React Hook Form untuk penanganan form
   - Nivo (basis d3) untuk pembuatan chart secara cepat, di websitenya bisa langsung bikin konfigurasinya
   - Visx (basis d3) untuk pembuatan visualisasi custom + peta (highly customizable)
   - OpenLayers untuk peta multi layer
7. BANGUN BACKEND
   - cargo new
   - Warp untuk web API
   - Serde untuk penanganan JSON 
8. Jadikan BOILERPLATE

## Kapan Eksplorasi Tools ?
- Kalo project-project wajib sudah beres
- Kalo ketemu tool baru yang diminati, segera buat boilerplatenya agar secepat mungkin bisa ikut digunakan
