# Membuat Aplikasi Desktop Dengan Electron
__Untuk Kelas 5 SD__

## Outline
- Sekilas Tentang Electron
- Prinsip Kerja Electron
  - Main Process, Renderer Process, Preload

### Prinsip Kerja Electron
- Akses ke API nodejs dianjurkan menggunakan mekanisme komunikasi ipcRenderer di renderer process ke ipcMain di main process
