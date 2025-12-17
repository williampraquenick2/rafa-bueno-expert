import React, { useState } from 'react';
import { 
  Trophy, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  BrainCircuit, 
  Users, 
  Instagram, 
  X,
  Dumbbell,
  MessageCircle
} from 'lucide-react';

import { Section } from './components/ui/Section';
import { Button } from './components/ui/Button';
import { StickyCTA } from './components/StickyCTA';
import { EXPERT_DATA, HERO_IMAGE, SECONDARY_IMAGE, RESULTS_GALLERY, BACKSTAGE_IMAGES } from './constants';
import { ImageAsset } from './types';

// Animation wrapper
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => (
  <div className={`animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openWhatsApp = () => {
    window.open(EXPERT_DATA.whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
      
      {/* 1. HERO SECTION */}
      <header className="relative w-full pt-8 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Expert Image with Premium Badge */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-green-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src={HERO_IMAGE} 
              alt={EXPERT_DATA.name} 
              className="relative w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-brand-dark shadow-2xl"
            />
            <div className="absolute bottom-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Trophy size={12} />
              <span>Excellence 2019</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Eu sou <span className="text-brand-accent">{EXPERT_DATA.name}</span>.
              <br />
              <span className="text-2xl md:text-3xl font-bold text-brand-muted mt-2 block">
                Personal Trainer em Guarulhos
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
              Defina seu corpo do jeito CERTO. <br/>
              <span className="italic font-medium text-brand-accent/80">"{EXPERT_DATA.motto}"</span>
            </p>
          </div>

          <div className="w-full max-w-md space-y-3">
            <Button 
              text="FALE COMIGO" 
              subtext="Resposta rápida • Sem compromisso"
              onClick={openWhatsApp}
              variant="primary"
            />
          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <div className="bg-zinc-900/50">
        <Section className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src={SECONDARY_IMAGE} 
              alt="Rafa Bueno Treinando" 
              className="rounded-2xl shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-brand-accent text-sm font-semibold tracking-wider uppercase mb-2">
              Sobre o Expert
            </div>
            <h2 className="text-3xl font-bold">Mais que estética, uma nova mentalidade.</h2>
            <p className="text-zinc-400 leading-relaxed">
              Olá! Sou o Rafa. Minha missão não é apenas fazer você suar, mas te ensinar a construir um corpo forte que sustenta uma mente inabalável.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Com o prêmio <strong className="text-brand-text">Excellence de Melhor Professor</strong>, desenvolvi uma metodologia validada para quem quer resultados reais, sem promessas milagrosas.
            </p>
            
            <ul className="space-y-3 pt-4">
              {[
                "Metodologia premiada e validada",
                "Atendimento 100% focado em você",
                "Foco em hipertrofia e definição real"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-200">
                  <CheckCircle2 className="text-brand-accent flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>

      {/* 3. RESULTADOS REAIS */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resultados Reais</h2>
          <p className="text-zinc-400">Pessoas comuns, resultados extraordinários.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RESULTS_GALLERY.map((img: ImageAsset, index) => (
            <div 
              key={`${img.id}-${index}`} 
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-zinc-800 group"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                  Ver
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-500 mt-6">*Resultados podem variar de pessoa para pessoa.</p>
      </Section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-accent"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado Fullscreen" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* 4. POR QUE CONFIAR */}
      <div className="bg-zinc-900 border-y border-zinc-800">
        <Section>
          <h2 className="text-3xl font-bold text-center mb-12">Por que treinar comigo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Avaliação Honesta", desc: "Sem ilusões. Mapeamos seu estado atual e traçamos metas reais." },
              { icon: Users, title: "Atendimento Pessoal", desc: "Você fala e treina diretamente comigo, sem intermediários." },
              { icon: BrainCircuit, title: "Foco Mental", desc: "Técnicas para vencer a preguiça e criar disciplina de ferro." },
              { icon: MapPin, title: "Localização", desc: `Atendimento presencial premium em ${EXPERT_DATA.location}.` }
            ].map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-brand-dark p-6 rounded-2xl border border-zinc-800 hover:border-brand-accent/30 transition-colors h-full">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-zinc-400 text-sm">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* 5. INTERMEDIATE CTA */}
      <Section className="text-center py-12">
        <h3 className="text-2xl font-bold mb-6">
          Não sabe qual plano é ideal para você?
        </h3>
        <div className="max-w-md mx-auto">
          <Button 
            variant="whatsapp"
            text="QUERO TIRAR MINHAS DÚVIDAS" 
            onClick={openWhatsApp}
          />
        </div>
      </Section>

      {/* 6. COMO FUNCIONA (CATALOGO / PEDIDO) */}
      <div className="bg-zinc-800/30">
        <Section>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Dumbbell className="text-brand-accent" />
            <h2 className="text-2xl font-bold uppercase tracking-wider">Como começar</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-[90%] before:w-0.5 before:bg-zinc-800 md:before:hidden">
            {[
              { title: "Chame no WhatsApp", desc: "Clique no botão e inicie uma conversa direta comigo." },
              { title: "Conheça os planos", desc: "Receba o PDF com meus planos de consultoria e valores." },
              { title: "Marcamos uma avaliação gratuita", desc: "Agendamos sua avaliação para entender seus objetivos." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 md:flex-col md:items-center md:text-center relative">
                <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-dark font-bold flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-brand-accent/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-brand-accent/5 rounded-xl border border-brand-accent/10 text-center">
            <p className="text-sm text-brand-accent">
              <span className="font-bold">Nota:</span> Atendo um número limitado de alunos para manter a qualidade.
            </p>
          </div>
        </Section>
      </div>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <Section>
        <h2 className="text-2xl font-bold mb-8 text-center">Bastidores & Técnica</h2>
        <div className="bg-zinc-900 rounded-2xl p-2 md:p-4 overflow-hidden shadow-2xl">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
             {/* Using new Backstage images */}
             {BACKSTAGE_IMAGES.map((src, i) => (
               <div key={i} className="min-w-[80%] md:min-w-[40%] snap-center relative rounded-xl overflow-hidden aspect-video">
                 <img src={src} className="w-full h-full object-cover" alt="Bastidores" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <p className="text-sm font-medium text-white">
                      {i === 0 ? "Acompanhamento de perto" : i === 1 ? "Foco na execução correta" : "Planejamento personalizado"}
                    </p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <div className="bg-brand-accent text-brand-dark py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            SEU CORPO NOVO COMEÇA HOJE.
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-90">
            Pare de adiar. A primeira consulta é o passo mais importante.
          </p>
          <div className="pt-4 w-full md:w-auto">
            <button 
              onClick={openWhatsApp}
              className="w-full md:w-auto bg-brand-dark text-brand-text hover:bg-zinc-800 py-5 px-10 rounded-xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
            >
              <MessageCircle size={28} className="text-brand-accent" />
              SOLICITAR ORÇAMENTO
            </button>
            <p className="mt-4 text-sm font-semibold opacity-70">
              Clique para falar diretamente com o Rafa
            </p>
          </div>
        </div>
      </div>

      {/* 9. FOOTER */}
      <footer className="bg-black py-12 px-6 border-t border-zinc-900 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h3 className="text-2xl font-bold tracking-tighter text-white">RAFA BUENO</h3>
          <p className="text-zinc-500 text-sm">
            Personal Trainer • Guarulhos, SP<br/>
            Prêmio Excellence 2019
          </p>
          
          <div className="flex justify-center gap-6">
            <a href={EXPERT_DATA.instagramUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-brand-accent transition-colors">
              <Instagram size={24} />
            </a>
            <a href={EXPERT_DATA.whatsappUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#25D366] transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>

          <p className="text-zinc-700 text-xs mt-8">
            © {new Date().getFullYear()} Rafa Bueno Personal. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}