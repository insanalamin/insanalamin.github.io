# Membuat Aplikasi Desktop Dengan Electron
__Untuk Kelas 5 SD__

## Outline
- Sekilas Tentang Electron
- Prinsip Kerja Electron

### Prioritas Untuk Diketahui
- **Preload, Preload, Preload**. Preload bisa mengakses API Nodejs secara langsung. Dimanfaatkan untuk menjembatani main process dengan renderer process menggunakan ipcMain dan ipcRenderer. + contextBridge
- Electron-Packager digunain untuk publish ke OS. Nanti ada dependensi untuk tiap OS misal butuh wine untuk target windows

### Masih Clue
- Publish ke masing-masing OS pake perintah electorn-forge make, ato yarn make. Konfigurasi utamanya ada di 
