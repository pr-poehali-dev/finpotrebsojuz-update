import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка принята! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-secondary">ФинПотребСоюз</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium text-secondary hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('consultation')} className="hidden md:inline-flex">
              Консультация
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              О финансовых услугах и защите прав потребителей
            </h1>
            <p className="text-xl mb-8 text-white/90">
              ФинПотребСоюз осуществляет защиту прав потребителей финансовых услуг БЕЗВОЗМЕЗДНО
            </p>
            <Button 
              onClick={() => scrollToSection('consultation')}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
            >
              Записаться на консультацию
            </Button>
          </div>
          <div className="mt-12">
            <img 
              src="https://cdn.poehali.dev/files/68668c68-7cfb-4a22-befa-bb3cd98585d5.png" 
              alt="Финансовые услуги" 
              className="rounded-lg shadow-2xl max-w-md"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная защита ваших прав в сфере финансовых услуг
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Scale" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Юридическая защита</h3>
              <p className="text-muted-foreground leading-relaxed">
                Профессиональное представительство интересов потребителей финансовых услуг в судах и надзорных органах
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="FileText" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Консультации</h3>
              <p className="text-muted-foreground leading-relaxed">
                Бесплатные консультации по вопросам кредитования, страхования, инвестиций и других финансовых услуг
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="UserCheck" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Сопровождение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Полное сопровождение споров с финансовыми организациями от подачи претензии до исполнения решения
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-secondary">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ФинПотребСоюз — ведущая общественная организация по защите прав потребителей финансовых услуг в России.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы предоставляем безвозмездную правовую помощь гражданам в спорах с банками, страховыми компаниями, микрофинансовыми организациями и другими участниками финансового рынка.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">дел выиграно</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">бесплатно</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/5 rounded-2xl flex items-center justify-center">
                <Icon name="Building" size={120} className="text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Записаться на консультацию</h2>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму, и наш специалист свяжется с вами в течение рабочего дня
            </p>
            <Card className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Телефон</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.ru"
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-secondary">Ваш вопрос</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите вашу ситуацию..."
                    rows={4}
                    className="text-base"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-secondary">Телефон</h3>
              <p className="text-muted-foreground">8 (800) 555-35-35</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-secondary">Email</h3>
              <p className="text-muted-foreground">info@finpotreb.ru</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-secondary">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">ФинПотребСоюз</span>
              </div>
              <p className="text-white/70 text-sm">
                Защита прав потребителей финансовых услуг
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('hero')} className="block text-white/70 hover:text-white transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-white/70 hover:text-white transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-white/70 hover:text-white transition-colors">
                  О нас
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>8 (800) 555-35-35</p>
                <p>info@finpotreb.ru</p>
                <p>Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: Выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 ФинПотребСоюз. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
