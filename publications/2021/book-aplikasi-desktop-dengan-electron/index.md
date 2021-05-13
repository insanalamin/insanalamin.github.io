# Membuat Aplikasi Desktop Dengan Electron
__Untuk Kelas 5 SD__

## Outline
- Sekilas Tentang Electron
- Prinsip Kerja Electron

### Prioritas Untuk Diketahui
- **Preload, Preload, Preload**. Preload bisa mengakses API Nodejs secara langsung. Dimanfaatkan untuk menjembatani main process dengan renderer process menggunakan ipcMain dan ipcRenderer. + contextBridge
- JANGAN HARAP bisa publish ke semua platform dari satu platform. misal berharap dari linux doang bisa publish untuk linux, windows, mac, dsb. Kalo ada dependency tertentu bisa jadi ga bisa, harus langsung di build di platform yang bersangkutan. Cross platform bukan berati dipublish dari satu platform.

### Masih Clue
