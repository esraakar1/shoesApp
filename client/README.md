# Shoes E-commerce Platform

Modern bir ayakkabı e-ticaret platformu. React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş full-stack web uygulaması.

## 🚀 Özellikler

- **Kullanıcı Yönetimi**: Kayıt, giriş, profil yönetimi
- **Ürün Kataloğu**: Ayakkabı listesi, detay sayfaları, arama
- **Admin Paneli**: Ürün ekleme, düzenleme, silme
- **Responsive Tasarım**: Mobil ve desktop uyumlu
- **Modern UI/UX**: Tailwind CSS ile şık arayüz
- **State Management**: React Query ile veri yönetimi

## 🛠️ Teknolojiler

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router DOM** - Sayfa yönlendirme
- **Tailwind CSS** - Styling framework
- **React Query** - Server state management
- **Formik + Yup** - Form handling ve validation
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JSON Server** - Mock database
- **JWT** - Authentication

## 📁 Proje Yapısı

```
client/
├── src/
│   ├── components/     # UI bileşenleri
│   ├── pages/         # Sayfa bileşenleri
│   ├── hooks/         # Custom hooks
│   ├── service/       # API servisleri
│   ├── types/         # TypeScript tipleri
│   └── utils/         # Yardımcı fonksiyonlar
```

## 🚀 Kurulum

1. **Dependencies yükle:**
```bash
npm install
```

2. **Development server başlat:**
```bash
npm run dev
```

3. **Build al:**
```bash
npm run build
```

## 🔧 Geliştirme

- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Vite** - Build tool

## 📱 Sayfalar

- **Ana Sayfa** - Hero section ve ürün listesi
- **Ürün Detay** - Ayakkabı bilgileri, boyut, renk seçimi
- **Dashboard** - Admin paneli
- **Ürün Ekleme/Düzenleme** - CRUD işlemleri
- **Giriş/Kayıt** - Authentication

## 🎨 Tasarım

Modern, minimalist tasarım prensipleri kullanılarak geliştirildi:
- Responsive grid layout
- Smooth animations
- Consistent spacing
- Accessible color scheme

## 🔐 Güvenlik

- JWT token authentication
- Protected routes
- Input validation
- XSS protection

## 📊 Performance

- React Query ile caching
- Lazy loading
- Optimized images
- Bundle splitting
