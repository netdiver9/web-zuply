export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="text-indigo-500">Z</span>uply
          </a>
          <div className="hidden sm:flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">소개</a>
            <a href="#product" className="hover:text-white transition-colors">서비스</a>
            <a href="#team" className="hover:text-white transition-colors">팀</a>
            <a href="#contact" className="hover:text-white transition-colors">연락처</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[128px]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-6">
            <span className="text-indigo-500">Z</span>uply
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
            We zuply what you need.
          </p>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            앱 스튜디오. 사람들에게 필요한 것을 만듭니다.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-indigo-500">About</span>
          </h2>
          <div className="h-px w-16 bg-indigo-500 mb-10" />
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Zuply는 사람들의 일상에 필요한 앱을 만드는 스튜디오입니다.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            복잡한 정보를 간단하게, 어려운 기술을 쉽게.
            누구나 바로 쓸 수 있는 서비스를 만듭니다.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="product" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-indigo-500">Services</span>
          </h2>
          <div className="h-px w-16 bg-indigo-500 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 모닝브리핑 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-indigo-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-xl font-bold mb-3">모닝브리핑</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  매일 아침 주식, 코인, 날씨, 뉴스를 한눈에 정리해서 전달합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["📈 주식", "₿ 코인", "🌤️ 날씨", "📰 뉴스"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 교육 서비스 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-indigo-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3">교육 서비스</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  누구나 쉽게 배우고 성장할 수 있는 교육 플랫폼을 준비하고 있습니다.
                </p>
                <span className="px-3 py-1 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  개발 중
                </span>
              </div>
            </div>

            {/* 취업 서비스 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-indigo-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3">취업 서비스</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  당신에게 딱 맞는 커리어를 찾을 수 있도록 도와드립니다.
                </p>
                <span className="px-3 py-1 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  개발 중
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-indigo-500">Team</span>
          </h2>
          <div className="h-px w-16 bg-indigo-500 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Seunghwan", role: "Planner", emoji: "💡" },
              { name: "Sungjin", role: "Designer", emoji: "🎨" },
              { name: "Yumi", role: "Frontend Developer", emoji: "🖥️" },
              { name: "Jaden", role: "Backend Developer", emoji: "⚙️" },
              { name: "Ryan", role: "Infrastructure", emoji: "🛠️" },
              { name: "Sophie", role: "Product Manager", emoji: "📋" },
              { name: "Ethan", role: "QA Engineer", emoji: "🔍" },
              { name: "Hana", role: "Data Analyst", emoji: "📊" },
            ].map((member) => (
              <div key={member.name} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="text-4xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-indigo-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="text-indigo-500">Contact</span>
          </h2>
          <div className="h-px w-16 bg-indigo-500 mb-4 mx-auto" />
          <p className="text-gray-500 text-center mb-12">
            프로젝트 문의, 제안, 협업 — 무엇이든 편하게 보내주세요.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">제목</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="문의 제목을 입력해주세요"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">메시지</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="내용을 입력해주세요"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all resize-none"
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-10 py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              >
                보내기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2024 Zuply. All rights reserved.</p>
          <p>
            <span className="text-indigo-500">Z</span>uply — We zuply what you need.
          </p>
        </div>
      </footer>
    </main>
  );
}
