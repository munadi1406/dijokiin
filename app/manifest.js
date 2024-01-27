export default function manifest() {
    return {
      name: 'Jasa Joki Tugas Web Profesional | DIjokiin',
      short_name: 'DIjokiin',
      description: 'Dijokiin membantu Anda menyelesaikan tugas web dengan mudah dan cepat. Kami memiliki tim joki tugas profesional yang berpengalaman dan berdedikasi untuk memberikan layanan terbaik. Dari pengembangan situs hingga desain responsif, DIjokiin hadir untuk memenuhi kebutuhan Anda.',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/assets/img/web.png',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }